import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { CATEGORIES, validateCatalogue } from "../src/validation.js";
import { TestD1, readBundledProducts } from "./helpers.mjs";

test("seed migration preserves all 110 bundled products exactly", () => {
  const source = readBundledProducts();
  assert.equal(source.length, 110);
  assert.equal(new Set(source.map((product) => product.code)).size, 110);
  validateCatalogue(source);

  const db = new TestD1({ seed: true });
  try {
    const rows = db.prepare("SELECT code, published_json FROM products ORDER BY code").all().results;
    assert.equal(rows.length, 110);
    assert.equal(new Set(rows.map((row) => row.code)).size, 110);
    const imported = rows.map((row) => JSON.parse(row.published_json));
    assert.deepEqual(imported, [...source].sort((left, right) => left.code.localeCompare(right.code)));
    for (const category of CATEGORIES) {
      assert.equal(imported.filter((product) => product.category === category && product.home_showcase).length, 1);
    }
    const images = imported.flatMap((product) => product.images.map((image) => image.src));
    assert.equal(images.length, 659);
    for (const image of images) {
      const file = image.startsWith("images/") ? image : path.join("images", image);
      assert.ok(fs.existsSync(file), `missing ${file}`);
    }
  } finally { db.close(); }
});
