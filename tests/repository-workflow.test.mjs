import test from "node:test";
import assert from "node:assert/strict";
import {
  applyDraftImport, archiveProduct, bulkUpdateStock, createMediaRecord, createProduct,
  getMediaUsage, getPublicCatalogue, listAudit, listProducts, prepareDraftImport, publishProduct,
  restoreProduct, updateDraft, updateStock
} from "../src/repository.js";
import { TestD1, completeProduct } from "./helpers.mjs";

test("draft, publish, archive, restore, stock and audit workflow", async () => {
  const db = new TestD1();
  try {
    let first = await createProduct(db, completeProduct("TEST-001"), "owner@example.com");
    assert.equal((await getPublicCatalogue(db)).products.length, 0);
    first = await publishProduct(db, first.id, first.revision, "owner@example.com");
    assert.equal((await getPublicCatalogue(db)).products[0].name.en, "Test product");
    await assert.rejects(
      () => updateDraft(db, first.id, { ...first.draft, code: "TEST-RENAMED" }, first.revision, "owner@example.com"),
      /permanent/i
    );

    const changed = {
      ...first.draft,
      name: { en: "Private changed name", th: "ชื่อที่แก้ไข" },
      stock: "low_stock"
    };
    first = await updateDraft(db, first.id, changed, first.revision, "owner@example.com");
    assert.equal((await getPublicCatalogue(db)).products[0].name.en, "Test product");
    assert.equal((await listProducts(db))[0].stock, "in_stock");
    await assert.rejects(() => updateDraft(db, first.id, changed, first.revision - 1, "owner@example.com"), (error) => error.status === 409);
    first = await publishProduct(db, first.id, first.revision, "owner@example.com");
    assert.equal((await getPublicCatalogue(db)).products[0].name.en, "Private changed name");
    assert.equal((await listProducts(db))[0].stock, "low_stock");

    first = await updateStock(db, first.id, "sold_out", first.revision, "owner@example.com");
    assert.equal((await getPublicCatalogue(db)).products[0].stock, "sold_out");
    first = await archiveProduct(db, first.id, first.revision, "owner@example.com");
    assert.equal((await getPublicCatalogue(db)).products.length, 0);
    first = await restoreProduct(db, first.id, first.revision, "owner@example.com");
    assert.equal((await getPublicCatalogue(db)).products.length, 1);
    assert.ok((await listAudit(db, 100)).length >= 6);
  } finally { db.close(); }
});

test("bulk stock is atomic and import only prepares drafts", async () => {
  const db = new TestD1();
  try {
    let first = await createProduct(db, completeProduct("TEST-011"), "owner@example.com");
    let second = await createProduct(db, completeProduct("TEST-012"), "owner@example.com");
    first = await publishProduct(db, first.id, first.revision, "owner@example.com");
    second = await publishProduct(db, second.id, second.revision, "owner@example.com");
    await assert.rejects(() => bulkUpdateStock(db, [
      { id: first.id, revision: first.revision }, { id: second.id, revision: second.revision - 1 }
    ], "low_stock", "owner@example.com"), (error) => error.status === 409);
    assert.deepEqual((await getPublicCatalogue(db)).products.map((product) => product.stock), ["in_stock", "in_stock"]);
    await bulkUpdateStock(db, [
      { id: first.id, revision: first.revision }, { id: second.id, revision: second.revision }
    ], "low_stock", "owner@example.com");
    assert.deepEqual((await getPublicCatalogue(db)).products.map((product) => product.stock), ["low_stock", "low_stock"]);

    const imported = completeProduct("TEST-011");
    imported.name = { en: "Imported draft", th: "ฉบับร่างนำเข้า" };
    const prepared = await prepareDraftImport(db, [imported, completeProduct("TEST-013")]);
    assert.deepEqual(prepared.plan.map((entry) => entry.action), ["update_draft", "create_draft"]);
    const result = await applyDraftImport(db, prepared, "owner@example.com");
    assert.deepEqual(result, { created: 1, updated: 1, total: 2, customer_catalogue_changed: false });
    assert.equal((await getPublicCatalogue(db)).products.find((product) => product.code === "TEST-011").name.en, "Test product");
  } finally { db.close(); }
});

test("homepage showcase reassignment is atomic and cannot leave a category empty", async () => {
  const db = new TestD1();
  try {
    const firstInput = completeProduct("TEST-021");
    firstInput.home_showcase = { image_index: 0, name: { en: "First", th: "รายการแรก" } };
    let first = await createProduct(db, firstInput, "owner@example.com");
    first = await publishProduct(db, first.id, first.revision, "owner@example.com");
    await assert.rejects(() => archiveProduct(db, first.id, first.revision, "owner@example.com"), /homepage showcase/i);

    const secondInput = completeProduct("TEST-022");
    secondInput.home_showcase = { image_index: 0, name: { en: "Second", th: "รายการที่สอง" } };
    let second = await createProduct(db, secondInput, "owner@example.com");
    second = await publishProduct(db, second.id, second.revision, "owner@example.com");
    const catalogue = await getPublicCatalogue(db);
    assert.equal(catalogue.products.filter((product) => product.category === "dresses" && product.home_showcase).length, 1);
    assert.equal(catalogue.products.find((product) => product.code === "TEST-021").home_showcase, undefined);
  } finally { db.close(); }
});

test("managed media usage totals stored objects and bytes", async () => {
  const db = new TestD1();
  try {
    const product = await createProduct(db, completeProduct("TEST-031"), "owner@example.com");
    assert.deepEqual(await getMediaUsage(db), { object_count: 0, total_bytes: 0 });
    await createMediaRecord(db, {
      product_id: product.id,
      product_code: product.code,
      r2_key: `products/${product.id}/test-image.webp`,
      mime_type: "image/webp",
      width: 100,
      height: 200,
      byte_size: 2048,
      position: 0,
      alt_en: "Test",
      alt_th: "ทดสอบ",
      user: "owner@example.com"
    });
    assert.deepEqual(await getMediaUsage(db), { object_count: 1, total_bytes: 2048 });
  } finally { db.close(); }
});
