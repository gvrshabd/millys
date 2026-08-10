import { DatabaseSync } from "node:sqlite";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

class Prepared {
  constructor(database, sql, params = []) {
    this.database = database;
    this.sql = sql;
    this.params = params;
  }

  bind(...params) { return new Prepared(this.database, this.sql, params); }
  first(column) {
    const row = this.database.prepare(this.sql).get(...this.params);
    return column && row ? row[column] : row;
  }
  all() { return { results: this.database.prepare(this.sql).all(...this.params), success: true }; }
  run() { return this.database.prepare(this.sql).run(...this.params); }
}

export class TestD1 {
  constructor({ seed = false } = {}) {
    this.database = new DatabaseSync(":memory:");
    this.database.exec(fs.readFileSync("migrations/0001_initial.sql", "utf8"));
    if (seed) this.database.exec(fs.readFileSync("migrations/0002_seed_catalogue.sql", "utf8"));
  }
  prepare(sql) { return new Prepared(this.database, sql); }
  async batch(statements) {
    this.database.exec("BEGIN IMMEDIATE");
    try {
      const results = statements.map((statement) => statement.run());
      this.database.exec("COMMIT");
      return results;
    } catch (error) {
      this.database.exec("ROLLBACK");
      throw error;
    }
  }
  close() { this.database.close(); }
}

export function readBundledProducts() {
  const source = fs.readFileSync(path.join("js", "products.js"), "utf8");
  const context = {};
  vm.runInNewContext(`${source}\nthis.__products = JSON.parse(JSON.stringify(PRODUCTS));`, context, {
    filename: "js/products.js"
  });
  return JSON.parse(JSON.stringify(context.__products));
}

export function completeProduct(code = "TEST-001") {
  return {
    code,
    name: { en: "Test product", th: "สินค้าทดสอบ" },
    category: "dresses",
    is_new: false,
    price: 500,
    fabric: { en: "Cotton", th: "ผ้าฝ้าย" },
    colours: [{ en: "Blue", th: "สีน้ำเงิน" }],
    measurements: [{
      label: { en: "Length", th: "ความยาว" },
      value: { en: "100 cm", th: "100 ซม." }
    }],
    care: { en: "Hand wash", th: "ซักมือ" },
    stock: "in_stock",
    images: [{ src: "products/placeholder.svg", alt: { en: "Blue dress", th: "เดรสสีน้ำเงิน" } }],
    video: null,
    description: { en: "A test dress.", th: "เดรสสำหรับทดสอบ" },
    marketplace_links: { line: "", tiktok: "", shopee: "", lazada: "" }
  };
}
