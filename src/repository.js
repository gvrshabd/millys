import {
  CATEGORIES,
  STOCK_STATES,
  ValidationError,
  normalizeProduct,
  validateCatalogue,
  validateStock
} from "./validation.js";

export class RepositoryError extends Error {
  constructor(message, status = 500, code = "DATA_ERROR") {
    super(message);
    this.name = "RepositoryError";
    this.status = status;
    this.code = code;
  }
}

export class NotFoundError extends RepositoryError {
  constructor(message = "Product was not found.") {
    super(message, 404, "NOT_FOUND");
  }
}

export class ConflictError extends RepositoryError {
  constructor(message = "This product changed in another session. Reload it and try again.") {
    super(message, 409, "REVISION_CONFLICT");
  }
}

function ensureDb(db) {
  if (!db || typeof db.prepare !== "function") {
    throw new RepositoryError("Catalogue storage is not configured.", 503, "CATALOGUE_UNAVAILABLE");
  }
  return db;
}

function nowIso() {
  return new Date().toISOString();
}

function makeId(prefix) {
  return `${prefix}_${crypto.randomUUID()}`;
}

function parseJson(value, fallback = null) {
  if (typeof value !== "string") return fallback;
  try {
    return JSON.parse(value);
  } catch {
    throw new RepositoryError("Stored catalogue data is invalid.");
  }
}

function rowToProduct(row) {
  if (!row) return null;
  return {
    id: row.id,
    code: row.code,
    state: row.state,
    category: row.category,
    stock: row.stock,
    price: Number(row.price),
    name_en: row.name_en,
    name_th: row.name_th,
    revision: Number(row.revision),
    created_at: row.created_at,
    updated_at: row.updated_at,
    published_at: row.published_at,
    created_by: row.created_by,
    updated_by: row.updated_by,
    draft: parseJson(row.draft_json, {}),
    published: parseJson(row.published_json, null)
  };
}

function summary(product) {
  return {
    category: product.category,
    stock: product.stock,
    price: product.price,
    name_en: product.name?.en || "",
    name_th: product.name?.th || ""
  };
}

function snapshot(row, overrides = {}) {
  return {
    id: row.id,
    code: row.code,
    state: overrides.state ?? row.state,
    revision: overrides.revision ?? Number(row.revision),
    draft: overrides.draft ?? parseJson(row.draft_json, {}),
    published: overrides.published ?? parseJson(row.published_json, null),
    captured_at: overrides.captured_at || nowIso()
  };
}

function guardStatement(db, id, revision, token, timestamp) {
  return db.prepare(`
    INSERT INTO mutation_guards(token, created_at)
    VALUES (
      (SELECT CASE WHEN EXISTS(
        SELECT 1 FROM products WHERE id = ?1 AND revision = ?2
      ) THEN ?3 ELSE NULL END),
      ?4
    )
  `).bind(id, revision, token, timestamp);
}

function clearGuardStatement(db, token) {
  return db.prepare("DELETE FROM mutation_guards WHERE token = ?1").bind(token);
}

function revisionStatement(db, row, event, revision, snapshotValue, user, timestamp) {
  return db.prepare(`
    INSERT INTO product_revisions(
      id, product_id, product_code, revision, event, snapshot_json, created_at, created_by
    ) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)
  `).bind(
    makeId("rev"), row.id, row.code, revision, event,
    JSON.stringify(snapshotValue), timestamp, user
  );
}

function auditStatement(db, {
  user, action, productId = null, productCode = null,
  previousRevision = null, newRevision = null, detail = {}, timestamp
}) {
  return db.prepare(`
    INSERT INTO audit_log(
      id, administrator, action, product_id, product_code,
      previous_revision, new_revision, summary_json, created_at
    ) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9)
  `).bind(
    makeId("audit"), user, action, productId, productCode,
    previousRevision, newRevision, JSON.stringify(detail), timestamp
  );
}

function bumpVersionStatement(db, timestamp) {
  return db.prepare(`
    UPDATE catalogue_meta
    SET value = CAST(CAST(value AS INTEGER) + 1 AS TEXT), updated_at = ?1
    WHERE key = 'version'
  `).bind(timestamp);
}

async function getRawProduct(db, id) {
  const row = await ensureDb(db).prepare("SELECT * FROM products WHERE id = ?1").bind(id).first();
  if (!row) throw new NotFoundError();
  return row;
}

function isConstraintFailure(error) {
  return /constraint|unique|not null/i.test(String(error?.message || error));
}

export async function getPublicCatalogue(db) {
  ensureDb(db);
  const [versionRow, productRows] = await Promise.all([
    db.prepare("SELECT value FROM catalogue_meta WHERE key = 'version'").first(),
    db.prepare(`
      SELECT published_json FROM products
      WHERE state = 'published' AND published_json IS NOT NULL
      ORDER BY code
    `).all()
  ]);
  const products = (productRows.results || []).map((row) => parseJson(row.published_json));
  return {
    version: String(versionRow?.value || "1"),
    products,
    generated_at: nowIso()
  };
}

export async function listProducts(db, filters = {}) {
  ensureDb(db);
  const clauses = [];
  const bindings = [];
  const add = (clause, value) => {
    bindings.push(value);
    clauses.push(clause.replace("?", `?${bindings.length}`));
  };
  if (filters.state && ["draft", "published", "archived"].includes(filters.state)) add("state = ?", filters.state);
  if (filters.category && CATEGORIES.includes(filters.category)) add("category = ?", filters.category);
  if (filters.query) {
    bindings.push(`%${String(filters.query).trim().toLowerCase().slice(0, 120)}%`);
    const placeholder = `?${bindings.length}`;
    clauses.push(`(lower(code) LIKE ${placeholder} OR lower(name_en) LIKE ${placeholder} OR lower(name_th) LIKE ${placeholder})`);
  }
  const where = clauses.length ? `WHERE ${clauses.join(" AND ")}` : "";
  const statement = db.prepare(`
    SELECT id, code, state, category, stock, price, name_en, name_th, draft_json, published_json,
      revision, created_at, updated_at, published_at, created_by, updated_by,
      CASE WHEN published_json IS NULL THEN 0 ELSE 1 END AS has_published
    FROM products ${where}
    ORDER BY updated_at DESC, code
    LIMIT 500
  `).bind(...bindings);
  const result = await statement.all();
  const products = (result.results || []).map((row) => {
    const draft = parseJson(row.draft_json, {});
    const published = parseJson(row.published_json, null);
    const item = {
      id: row.id,
      code: row.code,
      state: row.state,
      category: row.category,
      stock: published?.stock || draft.stock || row.stock,
      price: Number(row.price),
      name_en: row.name_en,
      name_th: row.name_th,
      revision: Number(row.revision),
      created_at: row.created_at,
      updated_at: row.updated_at,
      published_at: row.published_at,
      created_by: row.created_by,
      updated_by: row.updated_by,
      has_published: Boolean(row.has_published),
      has_unpublished_changes: !row.published_json || row.draft_json !== row.published_json,
      thumbnail: draft.images?.[0]?.src || ""
    };
    return item;
  });
  return filters.stock && STOCK_STATES.includes(filters.stock)
    ? products.filter((product) => product.stock === filters.stock)
    : products;
}

export async function getProduct(db, id) {
  return rowToProduct(await getRawProduct(db, id));
}

export async function createProduct(db, input, user) {
  ensureDb(db);
  const product = normalizeProduct(input, { publish: false });
  if (!product.code) throw new ValidationError("A product code is required to create a draft.");
  const timestamp = nowIso();
  const id = makeId("product");
  const details = summary(product);
  const row = {
    id,
    code: product.code,
    state: "draft",
    revision: 1,
    draft_json: JSON.stringify(product),
    published_json: null
  };
  try {
    await db.batch([
      db.prepare(`
        INSERT INTO products(
          id, code, draft_json, published_json, state, category, stock, price,
          name_en, name_th, revision, created_at, updated_at, published_at,
          created_by, updated_by
        ) VALUES (?1, ?2, ?3, NULL, 'draft', ?4, ?5, ?6, ?7, ?8, 1, ?9, ?9, NULL, ?10, ?10)
      `).bind(
        id, product.code, row.draft_json, details.category, details.stock,
        details.price, details.name_en, details.name_th, timestamp, user
      ),
      revisionStatement(db, row, "create", 1, snapshot(row, { draft: product }), user, timestamp),
      auditStatement(db, {
        user, action: "product.create", productId: id, productCode: product.code,
        previousRevision: null, newRevision: 1, detail: { state: "draft" }, timestamp
      })
    ]);
  } catch (error) {
    if (isConstraintFailure(error)) throw new ConflictError("That product code is already in use.");
    throw error;
  }
  return getProduct(db, id);
}

export async function updateDraft(db, id, input, revision, user) {
  ensureDb(db);
  const row = await getRawProduct(db, id);
  if (Number(revision) !== Number(row.revision)) throw new ConflictError();
  const product = normalizeProduct(input, { publish: false });
  if (!product.code) throw new ValidationError("Product code cannot be blank.");
  if (product.code !== row.code) {
    throw new ValidationError("Product codes are permanent after the first draft is created.");
  }
  const details = summary(product);
  const timestamp = nowIso();
  const nextRevision = Number(row.revision) + 1;
  const token = makeId("guard");
  const nextSnapshot = snapshot(row, { draft: product, revision: nextRevision, captured_at: timestamp });
  try {
    await db.batch([
      guardStatement(db, id, Number(row.revision), token, timestamp),
      db.prepare(`
        UPDATE products SET
          code = ?1, draft_json = ?2, category = ?3, stock = ?4, price = ?5,
          name_en = ?6, name_th = ?7, revision = ?8, updated_at = ?9, updated_by = ?10
        WHERE id = ?11 AND revision = ?12
      `).bind(
        product.code, JSON.stringify(product), details.category, details.stock,
        details.price, details.name_en, details.name_th, nextRevision,
        timestamp, user, id, Number(row.revision)
      ),
      revisionStatement(db, row, "draft.save", nextRevision, nextSnapshot, user, timestamp),
      auditStatement(db, {
        user, action: "product.draft.save", productId: id, productCode: product.code,
        previousRevision: Number(row.revision), newRevision: nextRevision,
        detail: { state: row.state }, timestamp
      }),
      clearGuardStatement(db, token)
    ]);
  } catch (error) {
    if (isConstraintFailure(error)) {
      const current = await db.prepare("SELECT revision, code FROM products WHERE id = ?1").bind(id).first();
      if (current && Number(current.revision) !== Number(row.revision)) throw new ConflictError();
      throw new ConflictError("That product code is already in use.");
    }
    throw error;
  }
  return getProduct(db, id);
}

async function planShowcaseChange(db, product, row) {
  const previous = parseJson(row.published_json, null);
  if (previous?.home_showcase
    && (!product.home_showcase || previous.category !== product.category)) {
    throw new ConflictError(
      `This product currently represents ${previous.category} on the homepage. Assign a replacement in that category instead of leaving it empty.`
    );
  }
  if (!product.home_showcase) return null;
  const rows = await db.prepare(`
    SELECT * FROM products
    WHERE id <> ?1 AND state = 'published' AND published_json IS NOT NULL
  `).bind(row.id).all();
  return (rows.results || []).find((candidate) => {
    const published = parseJson(candidate.published_json);
    return published.category === product.category && published.home_showcase;
  }) || null;
}

export async function publishProduct(db, id, revision, user) {
  ensureDb(db);
  const row = await getRawProduct(db, id);
  if (Number(revision) !== Number(row.revision)) throw new ConflictError();
  const product = normalizeProduct(parseJson(row.draft_json), { publish: true });
  const replacedShowcase = await planShowcaseChange(db, product, row);
  const timestamp = nowIso();
  const nextRevision = Number(row.revision) + 1;
  const token = makeId("guard");
  const publishedJson = JSON.stringify(product);
  const nextSnapshot = snapshot(row, {
    draft: product,
    published: product,
    state: "published",
    revision: nextRevision,
    captured_at: timestamp
  });
  const statements = [
    guardStatement(db, id, Number(row.revision), token, timestamp),
    db.prepare(`
      UPDATE products SET published_json = ?1, state = 'published', category = ?2,
        stock = ?3, price = ?4, name_en = ?5, name_th = ?6, revision = ?7,
        published_at = ?8, updated_at = ?8, updated_by = ?9
      WHERE id = ?10 AND revision = ?11
    `).bind(
      publishedJson, product.category, product.stock, product.price, product.name.en,
      product.name.th, nextRevision, timestamp, user, id, Number(row.revision)
    ),
    revisionStatement(db, row, "publish", nextRevision, nextSnapshot, user, timestamp),
    auditStatement(db, {
      user, action: "product.publish", productId: id, productCode: row.code,
      previousRevision: Number(row.revision), newRevision: nextRevision,
      detail: { previous_state: row.state }, timestamp
    }),
  ];
  if (replacedShowcase) {
    const replacementToken = makeId("guard");
    const replacedDraft = parseJson(replacedShowcase.draft_json, {});
    const replacedPublished = parseJson(replacedShowcase.published_json, {});
    delete replacedDraft.home_showcase;
    delete replacedPublished.home_showcase;
    const replacementRevision = Number(replacedShowcase.revision) + 1;
    statements.push(
      guardStatement(db, replacedShowcase.id, Number(replacedShowcase.revision), replacementToken, timestamp),
      db.prepare(`
        UPDATE products SET draft_json = ?1, published_json = ?2, revision = ?3,
          updated_at = ?4, updated_by = ?5
        WHERE id = ?6 AND revision = ?7
      `).bind(
        JSON.stringify(replacedDraft), JSON.stringify(replacedPublished), replacementRevision,
        timestamp, user, replacedShowcase.id, Number(replacedShowcase.revision)
      ),
      revisionStatement(db, replacedShowcase, "homepage.reassign", replacementRevision, snapshot(replacedShowcase, {
        draft: replacedDraft, published: replacedPublished, revision: replacementRevision, captured_at: timestamp
      }), user, timestamp),
      auditStatement(db, {
        user, action: "homepage.showcase.reassign", productId: replacedShowcase.id,
        productCode: replacedShowcase.code, previousRevision: Number(replacedShowcase.revision),
        newRevision: replacementRevision, detail: { replacement_code: product.code, category: product.category }, timestamp
      }),
      clearGuardStatement(db, replacementToken)
    );
  }
  statements.push(bumpVersionStatement(db, timestamp), clearGuardStatement(db, token));
  await db.batch(statements);
  return getProduct(db, id);
}

async function setLifecycleState(db, id, revision, user, nextState) {
  ensureDb(db);
  const row = await getRawProduct(db, id);
  if (Number(revision) !== Number(row.revision)) throw new ConflictError();
  if (!row.published_json) throw new ConflictError("This product has never been published.");
  const publicProduct = parseJson(row.published_json);
  if (nextState === "archived" && publicProduct.home_showcase) {
    throw new ConflictError("Assign another product as this category's homepage showcase before archiving this one.");
  }
  if (nextState === "published" && publicProduct.home_showcase) {
    const candidates = await db.prepare(`
      SELECT code, published_json FROM products
      WHERE id <> ?1 AND state = 'published' AND published_json IS NOT NULL
    `).bind(id).all();
    const conflict = (candidates.results || []).find((candidate) => {
      const published = parseJson(candidate.published_json);
      return published.category === publicProduct.category && published.home_showcase;
    });
    if (conflict) throw new ConflictError(`Homepage showcase for ${publicProduct.category} is already assigned to ${conflict.code}.`);
  }
  const timestamp = nowIso();
  const nextRevision = Number(row.revision) + 1;
  const token = makeId("guard");
  const nextSnapshot = snapshot(row, { state: nextState, revision: nextRevision, captured_at: timestamp });
  await db.batch([
    guardStatement(db, id, Number(row.revision), token, timestamp),
    db.prepare(`
      UPDATE products SET state = ?1, revision = ?2, updated_at = ?3, updated_by = ?4
      WHERE id = ?5 AND revision = ?6
    `).bind(nextState, nextRevision, timestamp, user, id, Number(row.revision)),
    revisionStatement(db, row, nextState, nextRevision, nextSnapshot, user, timestamp),
    auditStatement(db, {
      user, action: `product.${nextState}`, productId: id, productCode: row.code,
      previousRevision: Number(row.revision), newRevision: nextRevision,
      detail: { previous_state: row.state }, timestamp
    }),
    bumpVersionStatement(db, timestamp),
    clearGuardStatement(db, token)
  ]);
  return getProduct(db, id);
}

export function archiveProduct(db, id, revision, user) {
  return setLifecycleState(db, id, revision, user, "archived");
}

export function restoreProduct(db, id, revision, user) {
  return setLifecycleState(db, id, revision, user, "published");
}

function withStock(jsonValue, stock) {
  const product = parseJson(jsonValue, null);
  if (!product) return null;
  product.stock = stock;
  return JSON.stringify(product);
}

export async function updateStock(db, id, stockInput, revision, user) {
  ensureDb(db);
  const stock = validateStock(stockInput);
  const row = await getRawProduct(db, id);
  if (Number(revision) !== Number(row.revision)) throw new ConflictError();
  const timestamp = nowIso();
  const previousStock = parseJson(row.published_json, null)?.stock
    || parseJson(row.draft_json, {})?.stock
    || row.stock;
  const nextRevision = Number(row.revision) + 1;
  const token = makeId("guard");
  const draftJson = withStock(row.draft_json, stock);
  const publishedJson = withStock(row.published_json, stock);
  const nextSnapshot = snapshot(row, {
    draft: parseJson(draftJson),
    published: parseJson(publishedJson),
    revision: nextRevision,
    captured_at: timestamp
  });
  const statements = [
    guardStatement(db, id, Number(row.revision), token, timestamp),
    db.prepare(`
      UPDATE products SET stock = ?1, draft_json = ?2, published_json = ?3,
        revision = ?4, updated_at = ?5, updated_by = ?6
      WHERE id = ?7 AND revision = ?8
    `).bind(stock, draftJson, publishedJson, nextRevision, timestamp, user, id, Number(row.revision)),
    revisionStatement(db, row, "stock", nextRevision, nextSnapshot, user, timestamp),
    auditStatement(db, {
      user, action: "product.stock", productId: id, productCode: row.code,
      previousRevision: Number(row.revision), newRevision: nextRevision,
      detail: { from: previousStock, to: stock }, timestamp
    })
  ];
  if (row.state === "published") statements.push(bumpVersionStatement(db, timestamp));
  statements.push(clearGuardStatement(db, token));
  await db.batch(statements);
  return getProduct(db, id);
}

export async function bulkUpdateStock(db, items, stockInput, user) {
  ensureDb(db);
  const stock = validateStock(stockInput);
  if (!Array.isArray(items) || !items.length || items.length > 200) {
    throw new ValidationError("Select between 1 and 200 products for a bulk stock update.");
  }
  const ids = new Set();
  for (const item of items) {
    if (!item?.id || !Number.isInteger(Number(item.revision))) throw new ValidationError("Bulk stock selection is invalid.");
    if (ids.has(item.id)) throw new ValidationError("A product was selected more than once.");
    ids.add(item.id);
  }
  const rows = [];
  for (const item of items) rows.push(await getRawProduct(db, item.id));
  rows.forEach((row, index) => {
    if (Number(row.revision) !== Number(items[index].revision)) throw new ConflictError();
  });
  const timestamp = nowIso();
  const statements = [];
  const guards = [];
  rows.forEach((row) => {
    const nextRevision = Number(row.revision) + 1;
    const token = makeId("guard");
    guards.push(token);
    const draftJson = withStock(row.draft_json, stock);
    const publishedJson = withStock(row.published_json, stock);
    const previousStock = parseJson(row.published_json, null)?.stock
      || parseJson(row.draft_json, {})?.stock
      || row.stock;
    statements.push(guardStatement(db, row.id, Number(row.revision), token, timestamp));
    statements.push(db.prepare(`
      UPDATE products SET stock = ?1, draft_json = ?2, published_json = ?3,
        revision = ?4, updated_at = ?5, updated_by = ?6
      WHERE id = ?7 AND revision = ?8
    `).bind(stock, draftJson, publishedJson, nextRevision, timestamp, user, row.id, Number(row.revision)));
    statements.push(revisionStatement(db, row, "stock.bulk", nextRevision, snapshot(row, {
      draft: parseJson(draftJson), published: parseJson(publishedJson),
      revision: nextRevision, captured_at: timestamp
    }), user, timestamp));
    statements.push(auditStatement(db, {
      user, action: "product.stock.bulk", productId: row.id, productCode: row.code,
      previousRevision: Number(row.revision), newRevision: nextRevision,
      detail: { from: previousStock, to: stock }, timestamp
    }));
  });
  if (rows.some((row) => row.state === "published")) statements.push(bumpVersionStatement(db, timestamp));
  guards.forEach((token) => statements.push(clearGuardStatement(db, token)));
  await db.batch(statements);
  return listProducts(db);
}

export async function listAudit(db, limit = 100) {
  ensureDb(db);
  const safeLimit = Math.max(1, Math.min(250, Number(limit) || 100));
  const result = await db.prepare(`
    SELECT id, administrator, action, product_id, product_code,
      previous_revision, new_revision, summary_json, created_at
    FROM audit_log ORDER BY created_at DESC LIMIT ?1
  `).bind(safeLimit).all();
  return (result.results || []).map((row) => ({
    ...row,
    summary: parseJson(row.summary_json, {})
  }));
}

export async function listRevisions(db, productId) {
  ensureDb(db);
  await getRawProduct(db, productId);
  const result = await db.prepare(`
    SELECT id, product_code, revision, event, created_at, created_by
    FROM product_revisions WHERE product_id = ?1
    ORDER BY created_at DESC LIMIT 100
  `).bind(productId).all();
  return result.results || [];
}

export async function restoreRevision(db, productId, revisionId, currentRevision, user) {
  ensureDb(db);
  const row = await getRawProduct(db, productId);
  if (Number(currentRevision) !== Number(row.revision)) throw new ConflictError();
  const revisionRow = await db.prepare(`
    SELECT snapshot_json FROM product_revisions WHERE id = ?1 AND product_id = ?2
  `).bind(revisionId, productId).first();
  if (!revisionRow) throw new NotFoundError("Revision was not found.");
  const saved = parseJson(revisionRow.snapshot_json);
  const draft = normalizeProduct(saved.draft || saved.published, { publish: false });
  return updateDraft(db, productId, draft, currentRevision, user);
}

export async function exportCatalogue(db) {
  ensureDb(db);
  const [products, audit, meta] = await Promise.all([
    db.prepare("SELECT * FROM products ORDER BY code").all(),
    db.prepare("SELECT * FROM audit_log ORDER BY created_at DESC").all(),
    db.prepare("SELECT key, value, updated_at FROM catalogue_meta ORDER BY key").all()
  ]);
  return {
    format: "millys-catalogue-export-v1",
    exported_at: nowIso(),
    products: (products.results || []).map(rowToProduct),
    audit: (audit.results || []).map((row) => ({ ...row, summary: parseJson(row.summary_json, {}) })),
    metadata: meta.results || []
  };
}

export async function prepareDraftImport(db, inputs) {
  ensureDb(db);
  if (!Array.isArray(inputs) || !inputs.length || inputs.length > 200) {
    throw new ValidationError("An import must contain between 1 and 200 products.");
  }
  const products = inputs.map((input) => normalizeProduct(input?.draft || input?.published || input, {
    publish: false
  }));
  const codes = new Set();
  for (const product of products) {
    if (!product.code) throw new ValidationError("Every imported product requires a product code.");
    if (codes.has(product.code)) throw new ValidationError(`Duplicate imported product code: ${product.code}.`);
    codes.add(product.code);
  }
  const entries = [];
  for (const product of products) {
    const row = await db.prepare("SELECT * FROM products WHERE code = ?1").bind(product.code).first();
    entries.push({ product, row: row || null });
  }
  return {
    entries,
    plan: entries.map(({ product, row }) => ({
      code: product.code,
      action: row ? "update_draft" : "create_draft",
      id: row?.id || null,
      revision: row ? Number(row.revision) : null
    }))
  };
}

export async function applyDraftImport(db, prepared, user) {
  ensureDb(db);
  if (!prepared?.entries?.length) throw new ValidationError("Import preview is empty.");
  const timestamp = nowIso();
  const statements = [];
  let created = 0;
  let updated = 0;

  for (const { product, row } of prepared.entries) {
    const details = summary(product);
    const draftJson = JSON.stringify(product);
    if (!row) {
      created += 1;
      const id = makeId("product");
      const newRow = {
        id, code: product.code, state: "draft", revision: 1,
        draft_json: draftJson, published_json: null
      };
      statements.push(db.prepare(`
        INSERT INTO products(
          id, code, draft_json, published_json, state, category, stock, price,
          name_en, name_th, revision, created_at, updated_at, published_at,
          created_by, updated_by
        ) VALUES (?1, ?2, ?3, NULL, 'draft', ?4, ?5, ?6, ?7, ?8, 1, ?9, ?9, NULL, ?10, ?10)
      `).bind(
        id, product.code, draftJson, details.category, details.stock,
        details.price, details.name_en, details.name_th, timestamp, user
      ));
      statements.push(revisionStatement(
        db, newRow, "import.create", 1, snapshot(newRow, { draft: product }), user, timestamp
      ));
      statements.push(auditStatement(db, {
        user, action: "product.import.create", productId: id, productCode: product.code,
        previousRevision: null, newRevision: 1, detail: { state: "draft" }, timestamp
      }));
      continue;
    }

    updated += 1;
    const nextRevision = Number(row.revision) + 1;
    const token = makeId("guard");
    statements.push(guardStatement(db, row.id, Number(row.revision), token, timestamp));
    statements.push(db.prepare(`
      UPDATE products SET draft_json = ?1, category = ?2, stock = ?3, price = ?4,
        name_en = ?5, name_th = ?6, revision = ?7, updated_at = ?8, updated_by = ?9
      WHERE id = ?10 AND revision = ?11
    `).bind(
      draftJson, details.category, details.stock, details.price, details.name_en,
      details.name_th, nextRevision, timestamp, user, row.id, Number(row.revision)
    ));
    statements.push(revisionStatement(db, row, "import.draft", nextRevision, snapshot(row, {
      draft: product, revision: nextRevision, captured_at: timestamp
    }), user, timestamp));
    statements.push(auditStatement(db, {
      user, action: "product.import.draft", productId: row.id, productCode: product.code,
      previousRevision: Number(row.revision), newRevision: nextRevision,
      detail: { public_version_changed: false }, timestamp
    }));
    statements.push(clearGuardStatement(db, token));
  }

  try {
    await db.batch(statements);
  } catch (error) {
    if (isConstraintFailure(error)) {
      throw new ConflictError("The catalogue changed after the import preview. Preview the file again before applying it.");
    }
    throw error;
  }
  return { created, updated, total: created + updated, customer_catalogue_changed: false };
}

export async function createMediaRecord(db, record) {
  ensureDb(db);
  await getRawProduct(db, record.product_id);
  const timestamp = nowIso();
  const id = makeId("media");
  await db.batch([
    db.prepare(`
      INSERT INTO product_media(
        id, product_id, r2_key, mime_type, width, height, byte_size,
        position, alt_en, alt_th, created_at, created_by
      ) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12)
    `).bind(
      id, record.product_id, record.r2_key, record.mime_type,
      record.width || null, record.height || null, record.byte_size,
      record.position || 0, record.alt_en || "", record.alt_th || "",
      timestamp, record.user
    ),
    auditStatement(db, {
      user: record.user, action: "media.upload", productId: record.product_id,
      productCode: record.product_code, detail: { media_id: id, byte_size: record.byte_size }, timestamp
    })
  ]);
  return { id, created_at: timestamp };
}

export async function getMediaRecord(db, id) {
  ensureDb(db);
  const row = await db.prepare("SELECT * FROM product_media WHERE id = ?1").bind(id).first();
  if (!row) throw new NotFoundError("Photograph was not found.");
  return row;
}

export async function getMediaUsage(db) {
  ensureDb(db);
  const row = await db.prepare(`
    SELECT COUNT(*) AS object_count, COALESCE(SUM(byte_size), 0) AS total_bytes
    FROM product_media
  `).first();
  return {
    object_count: Number(row?.object_count || 0),
    total_bytes: Number(row?.total_bytes || 0)
  };
}

export async function deleteMediaRecord(db, id, user) {
  ensureDb(db);
  const media = await getMediaRecord(db, id);
  const product = await getRawProduct(db, media.product_id);
  const publicPath = `/media/${media.r2_key}`;
  if (String(product.published_json || "").includes(publicPath)) {
    throw new ConflictError("This photograph is used by the published product. Remove it from a draft and publish first.");
  }
  const timestamp = nowIso();
  await db.batch([
    db.prepare("DELETE FROM product_media WHERE id = ?1").bind(id),
    auditStatement(db, {
      user, action: "media.delete", productId: media.product_id, productCode: product.code,
      detail: { media_id: id }, timestamp
    })
  ]);
  return media;
}

export async function verifyPublishedIntegrity(db) {
  const catalogue = await getPublicCatalogue(db);
  return validateCatalogue(catalogue.products);
}
