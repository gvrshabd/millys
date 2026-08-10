import test from "node:test";
import assert from "node:assert/strict";
import { normalizeProduct } from "../src/validation.js";
import { MAX_MEDIA_BYTES, inspectImage, parseMediaUpload, safeMediaKey, serveMedia } from "../src/media.js";
import { completeProduct } from "./helpers.mjs";

test("product validation rejects invalid categories, prices, codes and unknown fields", () => {
  assert.throws(() => normalizeProduct({ ...completeProduct(), category: "shoes" }), /category/i);
  assert.throws(() => normalizeProduct({ ...completeProduct(), price: -1 }), /price/i);
  assert.throws(() => normalizeProduct({ ...completeProduct(), code: "bad code" }), /code/i);
  assert.throws(() => normalizeProduct({ ...completeProduct(), surprise: true }), /unknown/i);
  assert.throws(() => normalizeProduct({ ...completeProduct(), name: { en: "Only English", th: "" } }, { publish: true }), /both English and Thai/i);
});

test("media validation detects signatures and blocks spoofing and traversal", () => {
  const png = Uint8Array.from([137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,0,1,0,0,0,1]);
  assert.equal(inspectImage(png).mime, "image/png");
  assert.throws(() => inspectImage(new TextEncoder().encode("not really an image")), /genuine/i);
  assert.equal(safeMediaKey("products/product_abc/550e8400-e29b-41d4-a716-446655440000.webp"), "products/product_abc/550e8400-e29b-41d4-a716-446655440000.webp");
  assert.throws(() => safeMediaKey("products/../secret.webp"), /invalid/i);
});

test("oversized multipart uploads are rejected before parsing", async () => {
  const request = new Request("https://example.test/admin/api/media", {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data; boundary=safe",
      "Content-Length": String(MAX_MEDIA_BYTES + 100_001)
    },
    body: "--safe--"
  });
  await assert.rejects(() => parseMediaUpload(request), /too large/i);
});

test("R2 photographs are reused from edge cache", async () => {
  const original = Object.getOwnPropertyDescriptor(globalThis, "caches");
  let cached = null;
  let reads = 0;
  const pending = [];
  Object.defineProperty(globalThis, "caches", {
    configurable: true,
    value: {
      default: {
        match: async () => cached?.clone(),
        put: async (_key, response) => { cached = response.clone(); }
      }
    }
  });
  const bucket = {
    get: async () => {
      reads += 1;
      return {
        body: new Uint8Array([1, 2, 3]),
        httpEtag: '"test-etag"',
        writeHttpMetadata(headers) { headers.set("Content-Type", "image/webp"); }
      };
    }
  };
  const request = new Request("https://millys.example/media/products/product_abc/test.webp");
  try {
    const first = await serveMedia(request, bucket, "products/product_abc/test.webp", {
      waitUntil(promise) { pending.push(promise); }
    });
    assert.equal(first.status, 200);
    await Promise.all(pending);
    const second = await serveMedia(request, bucket, "products/product_abc/test.webp");
    assert.equal(second.status, 200);
    assert.equal(reads, 1);
    const conditional = await serveMedia(new Request(request, {
      headers: { "If-None-Match": 'W/"test-etag"' }
    }), bucket, "products/product_abc/test.webp");
    assert.equal(conditional.status, 304);
    assert.equal(reads, 1);
  } finally {
    if (original) Object.defineProperty(globalThis, "caches", original);
    else delete globalThis.caches;
  }
});
