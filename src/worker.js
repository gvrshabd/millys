import {
  ConflictError,
  NotFoundError,
  RepositoryError,
  archiveProduct,
  applyDraftImport,
  bulkUpdateStock,
  createMediaRecord,
  createProduct,
  deleteMediaRecord,
  exportCatalogue,
  getMediaRecord,
  getMediaUsage,
  getProduct,
  getPublicCatalogue,
  listAudit,
  listProducts,
  listRevisions,
  prepareDraftImport,
  publishProduct,
  restoreProduct,
  restoreRevision,
  updateDraft,
  updateStock
} from "./repository.js";
import { AuthError, authenticateAdmin, requireMutationProtection } from "./security.js";
import { ValidationError } from "./validation.js";
import {
  MAX_MANAGED_MEDIA_BYTES,
  MAX_MANAGED_MEDIA_OBJECTS,
  parseMediaUpload,
  serveMedia,
  storeMedia
} from "./media.js";

const adminRateWindows = new Map();

const ADMIN_HEADERS = {
  "Cache-Control": "no-store",
  "Content-Security-Policy": "default-src 'self'; img-src 'self' data: blob:; style-src 'self'; script-src 'self'; connect-src 'self'; base-uri 'none'; frame-ancestors 'none'; form-action 'self'",
  "Referrer-Policy": "no-referrer",
  "X-Content-Type-Options": "nosniff",
  "X-Robots-Tag": "noindex, nofollow"
};

function json(value, status = 200, headers = {}) {
  return new Response(JSON.stringify(value), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...headers }
  });
}

function errorResponse(error, admin = false) {
  const known = error instanceof AuthError
    || error instanceof ValidationError
    || error instanceof RepositoryError
    || error instanceof ConflictError
    || error instanceof NotFoundError;
  const status = known ? Number(error.status || 500) : 500;
  const body = {
    error: {
      code: known ? (error.code || error.name) : "INTERNAL_ERROR",
      message: known ? error.message : "The request could not be completed."
    }
  };
  if (error instanceof ValidationError && error.fields) body.error.fields = error.fields;
  if (!known) console.error("Unhandled Worker error", error);
  return json(body, status, admin ? ADMIN_HEADERS : {});
}

function methodNotAllowed(methods, admin = false) {
  return json({ error: { code: "METHOD_NOT_ALLOWED", message: "Method not allowed." } }, 405, {
    Allow: methods.join(", "),
    ...(admin ? ADMIN_HEADERS : {})
  });
}

async function readJson(request, maxBytes = 1_000_000) {
  const contentType = request.headers.get("Content-Type") || "";
  if (!contentType.toLowerCase().startsWith("application/json")) {
    throw new ValidationError("Request must contain JSON.");
  }
  const length = Number(request.headers.get("Content-Length") || 0);
  if (length > maxBytes) throw new ValidationError("Request is too large.");
  const text = await request.text();
  if (new TextEncoder().encode(text).byteLength > maxBytes) throw new ValidationError("Request is too large.");
  try {
    return JSON.parse(text);
  } catch {
    throw new ValidationError("Request contains invalid JSON.");
  }
}

function enforceRateLimit(email) {
  const now = Date.now();
  const current = adminRateWindows.get(email);
  if (!current || current.resetAt <= now) {
    adminRateWindows.set(email, { count: 1, resetAt: now + 60_000 });
    return;
  }
  current.count += 1;
  if (current.count > 180) throw new AuthError("Too many administration requests. Wait a moment and retry.", 429, "RATE_LIMITED");
}

function scheduleCacheDelete(request, ctx) {
  if (!globalThis.caches?.default) return;
  const url = new URL(request.url);
  const key = new Request(`${url.origin}/api/catalogue`, { method: "GET" });
  const promise = caches.default.delete(key);
  if (typeof ctx?.waitUntil === "function") ctx.waitUntil(promise);
}

function etagMatches(value, expected) {
  const normalized = String(expected || "").replace(/^W\//i, "");
  return String(value || "").split(",").some((candidate) => {
    const tag = candidate.trim();
    return tag === "*" || tag.replace(/^W\//i, "") === normalized;
  });
}

async function publicCatalogueResponse(request, env, ctx) {
  if (request.method !== "GET") return methodNotAllowed(["GET"]);
  const cacheKey = new Request(`${new URL(request.url).origin}/api/catalogue`, { method: "GET" });
  const cache = globalThis.caches?.default;
  if (cache) {
    const cached = await cache.match(cacheKey);
    if (cached) {
      if (etagMatches(request.headers.get("If-None-Match"), cached.headers.get("ETag"))) {
        return new Response(null, { status: 304, headers: cached.headers });
      }
      return cached;
    }
  }
  const catalogue = await getPublicCatalogue(env.DB);
  const etag = `"millys-${catalogue.version}"`;
  if (etagMatches(request.headers.get("If-None-Match"), etag)) {
    return new Response(null, { status: 304, headers: { ETag: etag } });
  }
  const seconds = Math.max(0, Math.min(300, Number(env.PUBLIC_CATALOGUE_CACHE_SECONDS || 60)));
  const response = json(catalogue, 200, {
    "Cache-Control": `public, max-age=${seconds}, s-maxage=${seconds}`,
    ETag: etag,
    "X-Catalogue-Version": catalogue.version,
    Vary: "Accept-Encoding"
  });
  if (cache) {
    const task = cache.put(cacheKey, response.clone());
    if (typeof ctx?.waitUntil === "function") ctx.waitUntil(task);
    else await task;
  }
  return response;
}

async function digestImport(products, plan) {
  const bytes = new TextEncoder().encode(JSON.stringify({ products, plan }));
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function importProducts(body) {
  if (body?.format && body.format !== "millys-catalogue-export-v1") {
    throw new ValidationError("This backup format is not supported.");
  }
  if (!Array.isArray(body?.products)) throw new ValidationError("Import must contain a products list.");
  return body.products;
}

async function handleProductsRoute(request, env, ctx, identity, parts, url) {
  if (!parts.length) {
    if (request.method === "GET") {
      const filters = {
        state: url.searchParams.get("state"),
        category: url.searchParams.get("category"),
        stock: url.searchParams.get("stock"),
        query: url.searchParams.get("q")
      };
      const [products, allProducts] = await Promise.all([
        listProducts(env.DB, filters),
        listProducts(env.DB)
      ]);
      return json({
        products,
        summary: {
          published: allProducts.filter((item) => item.state === "published").length,
          drafts: allProducts.filter((item) => item.state === "draft").length,
          low_stock: allProducts.filter((item) => item.state === "published" && item.stock === "low_stock").length,
          sold_out: allProducts.filter((item) => item.state === "published" && item.stock === "sold_out").length,
          archived: allProducts.filter((item) => item.state === "archived").length
        }
      }, 200, ADMIN_HEADERS);
    }
    if (request.method === "POST") {
      requireMutationProtection(request, identity);
      const body = await readJson(request);
      const product = await createProduct(env.DB, body.product, identity.email);
      return json({ product }, 201, ADMIN_HEADERS);
    }
    return methodNotAllowed(["GET", "POST"], true);
  }

  if (parts[0] === "bulk-stock") {
    if (request.method !== "POST") return methodNotAllowed(["POST"], true);
    requireMutationProtection(request, identity);
    const body = await readJson(request, 250_000);
    const products = await bulkUpdateStock(env.DB, body.items, body.stock, identity.email);
    scheduleCacheDelete(request, ctx);
    return json({ products }, 200, ADMIN_HEADERS);
  }

  const id = parts[0];
  if (!/^product_[A-Za-z0-9_-]+$/.test(id)) throw new NotFoundError();
  const action = parts[1];
  if (!action) {
    if (request.method === "GET") return json({ product: await getProduct(env.DB, id) }, 200, ADMIN_HEADERS);
    if (request.method === "PATCH") {
      requireMutationProtection(request, identity);
      const body = await readJson(request);
      const product = await updateDraft(env.DB, id, body.product, body.revision, identity.email);
      return json({ product }, 200, ADMIN_HEADERS);
    }
    return methodNotAllowed(["GET", "PATCH"], true);
  }

  if (action === "revisions" && request.method === "GET") {
    return json({ revisions: await listRevisions(env.DB, id) }, 200, ADMIN_HEADERS);
  }
  if (request.method !== "POST") return methodNotAllowed(["POST"], true);
  requireMutationProtection(request, identity);
  const body = await readJson(request, 100_000);
  let product;
  if (action === "publish") product = await publishProduct(env.DB, id, body.revision, identity.email);
  else if (action === "archive") product = await archiveProduct(env.DB, id, body.revision, identity.email);
  else if (action === "restore") product = await restoreProduct(env.DB, id, body.revision, identity.email);
  else if (action === "stock") product = await updateStock(env.DB, id, body.stock, body.revision, identity.email);
  else if (action === "restore-revision") {
    product = await restoreRevision(env.DB, id, body.revision_id, body.revision, identity.email);
  } else throw new NotFoundError("Administration action was not found.");
  if (["publish", "archive", "restore", "stock"].includes(action)) scheduleCacheDelete(request, ctx);
  return json({ product }, 200, ADMIN_HEADERS);
}

async function handleMediaRoute(request, env, identity, parts) {
  if (!parts.length) {
    if (request.method !== "POST") return methodNotAllowed(["POST"], true);
    requireMutationProtection(request, identity);
    const upload = await parseMediaUpload(request);
    const usage = await getMediaUsage(env.DB);
    if (usage.object_count >= MAX_MANAGED_MEDIA_OBJECTS
      || usage.total_bytes + upload.bytes.byteLength > MAX_MANAGED_MEDIA_BYTES) {
      throw new ValidationError("The photograph storage safety limit has been reached. Remove unused photographs before uploading more.");
    }
    const product = await getProduct(env.DB, upload.productId);
    const key = await storeMedia(env.MEDIA, upload, identity.email);
    try {
      const record = await createMediaRecord(env.DB, {
        product_id: upload.productId,
        product_code: product.code,
        r2_key: key,
        mime_type: upload.info.mime,
        width: upload.info.width,
        height: upload.info.height,
        byte_size: upload.bytes.byteLength,
        position: upload.position,
        alt_en: upload.altEn,
        alt_th: upload.altTh,
        user: identity.email
      });
      return json({
        media: {
          ...record,
          src: `/media/${key}`,
          media_id: record.id,
          alt: { en: upload.altEn, th: upload.altTh },
          width: upload.info.width,
          height: upload.info.height,
          byte_size: upload.bytes.byteLength
        }
      }, 201, ADMIN_HEADERS);
    } catch (error) {
      await env.MEDIA.delete(key);
      throw error;
    }
  }
  if (request.method !== "DELETE") return methodNotAllowed(["DELETE"], true);
  requireMutationProtection(request, identity);
  const record = await getMediaRecord(env.DB, parts[0]);
  const deleted = await deleteMediaRecord(env.DB, record.id, identity.email);
  await env.MEDIA.delete(deleted.r2_key);
  return json({ deleted: true }, 200, ADMIN_HEADERS);
}

async function handleAdminApi(request, env, ctx, identity, url) {
  enforceRateLimit(identity.email);
  const relative = url.pathname.slice("/admin/api/".length);
  const parts = relative.split("/").filter(Boolean).map((part) => decodeURIComponent(part));
  const root = parts.shift() || "session";

  if (root === "session") {
    if (request.method !== "GET") return methodNotAllowed(["GET"], true);
    return json({
      administrator: { email: identity.email },
      csrf: identity.csrf,
      expires_at: new Date(identity.claims.exp * 1000).toISOString()
    }, 200, ADMIN_HEADERS);
  }
  if (root === "products") return handleProductsRoute(request, env, ctx, identity, parts, url);
  if (root === "media") return handleMediaRoute(request, env, identity, parts);
  if (root === "audit") {
    if (request.method !== "GET") return methodNotAllowed(["GET"], true);
    return json({ audit: await listAudit(env.DB, url.searchParams.get("limit")) }, 200, ADMIN_HEADERS);
  }
  if (root === "export") {
    if (request.method !== "GET") return methodNotAllowed(["GET"], true);
    const payload = await exportCatalogue(env.DB);
    return json(payload, 200, {
      ...ADMIN_HEADERS,
      "Content-Disposition": `attachment; filename="millys-catalogue-${new Date().toISOString().slice(0, 10)}.json"`
    });
  }
  if (root === "import" && ["validate", "apply"].includes(parts[0])) {
    if (request.method !== "POST") return methodNotAllowed(["POST"], true);
    requireMutationProtection(request, identity);
    const body = await readJson(request, 12 * 1024 * 1024);
    const input = importProducts(body);
    const prepared = await prepareDraftImport(env.DB, input);
    const normalized = prepared.entries.map((entry) => entry.product);
    const previewDigest = await digestImport(normalized, prepared.plan);
    const summary = {
      product_count: normalized.length,
      create_drafts: prepared.plan.filter((entry) => entry.action === "create_draft").length,
      update_drafts: prepared.plan.filter((entry) => entry.action === "update_draft").length,
      published_products_changed: 0
    };
    if (parts[0] === "validate") {
      return json({
        valid: true,
        preview_digest: previewDigest,
        required_confirmation: `IMPORT ${normalized.length} PRODUCTS AS DRAFTS`,
        summary,
        plan: prepared.plan
      }, 200, ADMIN_HEADERS);
    }
    if (body.preview_digest !== previewDigest) {
      throw new ConflictError("The import file or catalogue changed after preview. Preview it again.");
    }
    if (body.confirmation !== `IMPORT ${normalized.length} PRODUCTS AS DRAFTS`) {
      throw new ValidationError("Type the exact confirmation shown in the import preview.");
    }
    const result = await applyDraftImport(env.DB, prepared, identity.email);
    return json({ imported: true, summary: { ...summary, ...result } }, 200, ADMIN_HEADERS);
  }
  throw new NotFoundError("Administration endpoint was not found.");
}

async function protectAdminAsset(request, env, identity) {
  if (!env.ASSETS?.fetch) throw new RepositoryError("Static assets are not configured.", 503, "ASSETS_UNAVAILABLE");
  const response = await env.ASSETS.fetch(request);
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(ADMIN_HEADERS)) headers.set(key, value);
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

export async function handleRequest(request, env, ctx = {}, dependencies = {}) {
  const url = new URL(request.url);
  try {
    if (url.pathname === "/api/catalogue" || url.pathname === "/api/catalogue/") {
      return await publicCatalogueResponse(request, env, ctx);
    }
    if (url.pathname.startsWith("/media/")) {
      return await serveMedia(request, env.MEDIA, decodeURIComponent(url.pathname.slice("/media/".length)), ctx);
    }
    if (url.pathname === "/admin" || url.pathname.startsWith("/admin/")) {
      const identity = dependencies.authenticateAdmin
        ? await dependencies.authenticateAdmin(request, env)
        : await authenticateAdmin(request, env, dependencies.authOptions);
      if (url.pathname === "/admin") {
        return new Response(null, {
          status: 308,
          headers: { ...ADMIN_HEADERS, Location: `${url.origin}/admin/` }
        });
      }
      if (url.pathname.startsWith("/admin/api/")) {
        return await handleAdminApi(request, env, ctx, identity, url);
      }
      return await protectAdminAsset(request, env, identity);
    }
    if (env.ASSETS?.fetch) return env.ASSETS.fetch(request);
    return new Response("Not found", { status: 404 });
  } catch (error) {
    return errorResponse(error, url.pathname.startsWith("/admin"));
  }
}

export default {
  fetch(request, env, ctx) {
    return handleRequest(request, env, ctx);
  }
};
