import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { validateCatalogue } from "../src/validation.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const productSource = fs.readFileSync(path.join(root, "js", "products.js"), "utf8");
const context = {};
vm.createContext(context);
vm.runInContext(`${productSource}\nglobalThis.__PRODUCTS = PRODUCTS;`, context, {
  filename: "js/products.js"
});

const products = JSON.parse(JSON.stringify(context.__PRODUCTS));
const normalized = validateCatalogue(products);
if (normalized.length !== 110) {
  throw new Error(`Expected exactly 110 source products; found ${normalized.length}.`);
}

const sqlText = (value) => `'${String(value).replaceAll("'", "''")}'`;
const timestamp = "2026-08-10T00:00:00.000Z";
const lines = [
  "-- Generated from js/products.js by tools/generate-catalogue-seed.mjs.",
  "-- Do not hand-edit this migration; regenerate it after reviewing the source snapshot.",
  ""
];

const missingImages = [];
let imageCount = 0;
const categoryCounts = {};
const stockCounts = {};

for (const product of normalized) {
  const idHash = crypto.createHash("sha256").update(product.code).digest("hex").slice(0, 32);
  const id = `product_${idHash}`;
  const productJson = JSON.stringify(product);
  const snapshotJson = JSON.stringify({
    id,
    code: product.code,
    state: "published",
    revision: 1,
    draft: product,
    published: product,
    captured_at: timestamp
  });
  categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1;
  stockCounts[product.stock] = (stockCounts[product.stock] || 0) + 1;
  for (const image of product.images) {
    imageCount += 1;
    const imagePath = path.join(root, "images", image.src.replace(/^images\//, ""));
    if (!fs.existsSync(imagePath)) missingImages.push(`${product.code}: images/${image.src}`);
  }

  lines.push(
    "INSERT OR IGNORE INTO products(",
    "  id, code, draft_json, published_json, state, category, stock, price,",
    "  name_en, name_th, revision, created_at, updated_at, published_at, created_by, updated_by",
    ") VALUES (",
    `  ${sqlText(id)}, ${sqlText(product.code)}, ${sqlText(productJson)}, ${sqlText(productJson)},`,
    `  'published', ${sqlText(product.category)}, ${sqlText(product.stock)}, ${product.price},`,
    `  ${sqlText(product.name.en)}, ${sqlText(product.name.th)}, 1,`,
    `  ${sqlText(timestamp)}, ${sqlText(timestamp)}, ${sqlText(timestamp)}, 'catalogue-import', 'catalogue-import'`,
    ");",
    "INSERT OR IGNORE INTO product_revisions(",
    "  id, product_id, product_code, revision, event, snapshot_json, created_at, created_by",
    ") VALUES (",
    `  ${sqlText(`rev_import_${idHash}`)}, ${sqlText(id)}, ${sqlText(product.code)}, 1, 'import',`,
    `  ${sqlText(snapshotJson)}, ${sqlText(timestamp)}, 'catalogue-import'`,
    ");",
    ""
  );
}

lines.push(
  "UPDATE catalogue_meta SET value = '1', updated_at = " + sqlText(timestamp) + " WHERE key = 'version';",
  ""
);

if (missingImages.length) {
  throw new Error(`Refusing to generate a seed with missing images:\n${missingImages.join("\n")}`);
}

const canonical = JSON.stringify(normalized);
const digest = crypto.createHash("sha256").update(canonical).digest("hex");
const report = {
  generated_at: timestamp,
  source: "js/products.js",
  product_count: normalized.length,
  unique_code_count: new Set(normalized.map((product) => product.code)).size,
  image_reference_count: imageCount,
  missing_image_count: missingImages.length,
  homepage_showcase_count: normalized.filter((product) => product.home_showcase).length,
  category_counts: categoryCounts,
  stock_counts: stockCounts,
  catalogue_sha256: digest,
  seed_migration: "migrations/0002_seed_catalogue.sql"
};

fs.writeFileSync(path.join(root, "migrations", "0002_seed_catalogue.sql"), lines.join("\n"), "utf8");
fs.writeFileSync(path.join(root, "catalogue-import-report.json"), `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log(JSON.stringify(report, null, 2));
