import test from "node:test";
import assert from "node:assert/strict";
import { handleRequest } from "../src/worker.js";
import { TestD1 } from "./helpers.mjs";

const identity = {
  email: "owner@example.com", csrf: "csrf-test",
  claims: { exp: Math.floor(Date.now() / 1000) + 600 }
};
const approved = async () => identity;

test("public catalogue exposes only published snapshots and supports ETags", async () => {
  const db = new TestD1({ seed: true });
  try {
    const response = await handleRequest(new Request("https://millys.example/api/catalogue"), { DB: db });
    assert.equal(response.status, 200);
    const body = await response.json();
    assert.equal(body.products.length, 110);
    assert.equal(JSON.stringify(body).includes("administrator"), false);
    assert.equal(JSON.stringify(body).includes("draft_json"), false);
    const cached = await handleRequest(new Request("https://millys.example/api/catalogue", {
      headers: { "If-None-Match": response.headers.get("ETag") }
    }), { DB: db });
    assert.equal(cached.status, 304);
  } finally { db.close(); }
});

test("administration denies missing configuration and rejects unsafe mutations", async () => {
  const denied = await handleRequest(new Request("https://millys.example/admin/"), { ASSETS: { fetch } });
  assert.equal(denied.status, 503);

  const getMutation = await handleRequest(
    new Request("https://millys.example/admin/api/products/product_example/publish"),
    {}, {}, { authenticateAdmin: approved }
  );
  assert.equal(getMutation.status, 405);

  const crossOrigin = await handleRequest(new Request("https://millys.example/admin/api/products", {
    method: "POST",
    headers: { Origin: "https://attacker.example", "Content-Type": "application/json", "X-Millys-CSRF": "csrf-test" },
    body: JSON.stringify({ product: {} })
  }), {}, {}, { authenticateAdmin: approved });
  assert.equal(crossOrigin.status, 403);

  const missingCsrf = await handleRequest(new Request("https://millys.example/admin/api/products", {
    method: "POST", headers: { Origin: "https://millys.example", "Content-Type": "application/json" },
    body: JSON.stringify({ product: {} })
  }), {}, {}, { authenticateAdmin: approved });
  assert.equal(missingCsrf.status, 403);

  const publicAudit = await handleRequest(new Request("https://millys.example/api/audit"), {});
  assert.equal(publicAudit.status, 404);
});
