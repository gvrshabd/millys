import assert from "node:assert/strict";
import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import vm from "node:vm";
import { chromium } from "playwright";

const root = process.cwd();
const reports = path.join(root, "reports", "browser");
fs.mkdirSync(reports, { recursive: true });

const source = fs.readFileSync(path.join(root, "js", "products.js"), "utf8");
const context = {};
vm.runInNewContext(`${source}\nthis.products = JSON.parse(JSON.stringify(PRODUCTS));`, context);
const customerProducts = JSON.parse(JSON.stringify(context.products));
let catalogueUnavailable = false;

const adminProducts = customerProducts.map((product, index) => ({
  id: `product_test_${index + 1}`,
  code: product.code,
  state: "published",
  category: product.category,
  stock: product.stock,
  price: product.price,
  name_en: product.name.en,
  name_th: product.name.th,
  revision: 1,
  created_at: "2026-08-10T00:00:00.000Z",
  updated_at: "2026-08-10T00:00:00.000Z",
  published_at: "2026-08-10T00:00:00.000Z",
  created_by: "owner@example.com",
  updated_by: "owner@example.com",
  has_published: true,
  has_unpublished_changes: false,
  thumbnail: product.images[0]?.src || "",
  draft: product,
  published: product
}));

function send(response, status, body, type = "application/json; charset=utf-8") {
  response.writeHead(status, { "Content-Type": type, "Cache-Control": "no-store" });
  response.end(type.startsWith("application/json") ? JSON.stringify(body) : body);
}

async function bodyJson(request) {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  return JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
}

function adminSummary(product) {
  const { draft, published, ...summary } = product;
  return summary;
}

async function apiRoute(request, response, url) {
  if (url.pathname === "/__test/catalogue-failure") {
    catalogueUnavailable = url.searchParams.get("enabled") === "1";
    return send(response, 200, { catalogueUnavailable });
  }
  if (url.pathname === "/api/catalogue") {
    if (catalogueUnavailable) return send(response, 503, { error: { message: "Unavailable" } });
    return send(response, 200, { version: "browser-test", products: customerProducts });
  }
  if (!url.pathname.startsWith("/admin/api/")) return false;
  const relative = url.pathname.slice("/admin/api/".length);
  if (relative === "session") {
    return send(response, 200, {
      administrator: { email: "owner@example.com" }, csrf: "browser-test-csrf",
      expires_at: "2099-01-01T00:00:00.000Z"
    });
  }
  if (relative === "audit") {
    return send(response, 200, { audit: [{
      id: "audit_1", administrator: "owner@example.com", action: "product.publish",
      product_code: adminProducts[0].code, created_at: "2026-08-10T00:00:00.000Z"
    }] });
  }
  if (relative === "export") return send(response, 200, { format: "millys-catalogue-export-v1", products: adminProducts });
  if (relative === "products" && request.method === "GET") {
    let products = [...adminProducts];
    const query = (url.searchParams.get("q") || "").toLowerCase();
    if (query) products = products.filter((product) => `${product.code} ${product.name_en} ${product.name_th}`.toLowerCase().includes(query));
    for (const key of ["category", "stock", "state"]) {
      const value = url.searchParams.get(key);
      if (value) products = products.filter((product) => product[key] === value);
    }
    return send(response, 200, { products: products.map(adminSummary) });
  }
  if (relative === "products/bulk-stock" && request.method === "POST") {
    const body = await bodyJson(request);
    for (const item of body.items || []) {
      const product = adminProducts.find((candidate) => candidate.id === item.id);
      if (product) {
        product.stock = body.stock;
        product.draft.stock = body.stock;
        product.published.stock = body.stock;
        product.revision += 1;
      }
    }
    return send(response, 200, { products: adminProducts.map(adminSummary) });
  }
  const match = relative.match(/^products\/([^/]+)(?:\/(stock|publish|archive|restore|revisions|restore-revision))?$/);
  if (match) {
    const product = adminProducts.find((candidate) => candidate.id === decodeURIComponent(match[1]));
    if (!product) return send(response, 404, { error: { message: "Product not found." } });
    if (!match[2] && request.method === "GET") return send(response, 200, { product });
    if (match[2] === "revisions" && request.method === "GET") return send(response, 200, { revisions: [] });
    if (match[2] === "stock" && request.method === "POST") {
      const body = await bodyJson(request);
      product.stock = body.stock;
      product.draft.stock = body.stock;
      product.published.stock = body.stock;
      product.revision += 1;
      return send(response, 200, { product });
    }
  }
  return send(response, 404, { error: { message: "Test endpoint not found." } });
}

const types = {
  ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8", ".svg": "image/svg+xml",
  ".webp": "image/webp", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
  ".png": "image/png", ".json": "application/json; charset=utf-8"
};

const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url, "http://127.0.0.1");
    const handled = await apiRoute(request, response, url);
    if (handled !== false) return;
    let relative = decodeURIComponent(url.pathname);
    if (relative === "/") relative = "/index.html";
    if (relative.endsWith("/")) relative += "index.html";
    const file = path.resolve(root, `.${relative}`);
    if (!file.toLowerCase().startsWith(root.toLowerCase()) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
      return send(response, 404, "Not found", "text/plain; charset=utf-8");
    }
    return send(response, 200, fs.readFileSync(file), types[path.extname(file).toLowerCase()] || "application/octet-stream");
  } catch (error) {
    return send(response, 500, String(error), "text/plain; charset=utf-8");
  }
});

await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const port = server.address().port;
const base = `http://127.0.0.1:${port}`;
const executablePath = process.env.BROWSER_EXECUTABLE
  || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const browser = await chromium.launch({ headless: true, executablePath });
const results = [];

async function newPage(width, height = 900) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
  return { page, errors };
}

async function noOverflow(page) {
  return page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1);
}

try {
  for (const width of [320, 375, 768, 1440]) {
    const { page, errors } = await newPage(width, width < 700 ? 780 : 900);
    await page.goto(`${base}/`, { waitUntil: "domcontentloaded" });
    await page.waitForFunction(() => document.documentElement.dataset.catalogueSource === "published");
    assert.equal(await page.locator(".collection-panel").count(), 7);
    assert.equal(await noOverflow(page), true, `home overflow at ${width}px`);
    assert.equal(await page.locator('a[href*="/admin"]').count(), 0);

    await page.goto(`${base}/shop.html`, { waitUntil: "domcontentloaded" });
    await page.waitForFunction(() => document.querySelectorAll(".tag-card").length === 110);
    assert.equal(await noOverflow(page), true, `shop overflow at ${width}px`);
    await page.locator("#catalogueSearch").fill(customerProducts[0].code);
    await page.waitForFunction(() => document.querySelectorAll(".tag-card").length === 1);
    await page.locator("#catalogueSearch").fill("");
    await page.waitForFunction(() => document.querySelectorAll(".tag-card").length === 110);
    await page.locator('[data-set-lang="th"]').click();
    assert.equal(await page.locator("html").getAttribute("lang"), "th");
    await page.locator(".inquiry-add").first().click();
    assert.equal(await page.locator("[data-inquiry-count]").first().textContent(), "1");

    await page.goto(`${base}/product.html?code=${encodeURIComponent(customerProducts[0].code)}`, { waitUntil: "domcontentloaded" });
    await page.waitForSelector("#productDetail .pd-copy");
    assert.equal(await noOverflow(page), true, `product overflow at ${width}px`);
    await page.goto(`${base}/catalogue-print.html`, { waitUntil: "domcontentloaded" });
    await page.waitForFunction(() => document.querySelectorAll(".print-product").length === 1);
    assert.equal(await noOverflow(page), true, `print overflow at ${width}px`);
    assert.deepEqual(errors, [], `customer browser errors at ${width}px`);
    if ([375, 1440].includes(width)) {
      await page.goto(`${base}/shop.html`, { waitUntil: "domcontentloaded" });
      await page.waitForSelector(".tag-card");
      await page.screenshot({ path: path.join(reports, `shop-${width}.png`), fullPage: false });
    }
    results.push({ surface: "customer", width, passed: true });
    await page.close();
  }

  await fetch(`${base}/__test/catalogue-failure?enabled=1`);
  const fallback = await newPage(375, 780);
  await fallback.page.goto(`${base}/shop.html`, { waitUntil: "domcontentloaded" });
  await fallback.page.waitForFunction(() => document.documentElement.dataset.catalogueSource === "bundled");
  assert.equal(await fallback.page.locator(".tag-card").count(), 110);
  assert.equal(fallback.errors.every((message) => message.includes("503 (Service Unavailable)")), true);
  results.push({ surface: "customer-fallback", width: 375, passed: true });
  await fallback.page.close();
  await fetch(`${base}/__test/catalogue-failure?enabled=0`);

  for (const width of [375, 768, 1440]) {
    const { page, errors } = await newPage(width, width === 375 ? 780 : 900);
    await page.goto(`${base}/admin/`, { waitUntil: "domcontentloaded" });
    await page.waitForSelector("#adminApp:not([hidden])");
    assert.equal(await page.locator(".admin-product-row").count(), 110);
    assert.equal(await noOverflow(page), true, `admin overflow at ${width}px`);
    await page.locator("#adminSearch").fill(adminProducts[0].code);
    await page.waitForFunction(() => document.querySelectorAll(".admin-product-row").length === 1);
    await page.locator("#adminSearch").fill("");
    await page.waitForFunction(() => document.querySelectorAll(".admin-product-row").length === 110);
    await page.locator("#adminCategoryFilter").selectOption("bags");
    await page.waitForFunction(() => document.querySelectorAll(".admin-product-row").length === 17);
    await page.locator("#adminCategoryFilter").selectOption("");
    await page.waitForFunction(() => document.querySelectorAll(".admin-product-row").length === 110);
    const currentStock = await page.locator(".row-stock").first().inputValue();
    await page.locator(".row-stock").first().selectOption(currentStock === "in_stock" ? "sold_out" : "in_stock");
    await page.waitForSelector("#adminToast:not([hidden])");
    await page.locator("#addProduct").click();
    await page.locator('[name="name_en"]').fill("Unsaved browser-test product");
    await page.locator('[name="name_th"]').fill("สินค้าทดสอบเบราว์เซอร์");
    await page.locator("#previewProduct").click();
    await page.waitForSelector("#productPreview[open]");
    await page.frameLocator(".preview-frame").locator(".pd-copy").waitFor();
    await page.locator('[data-preview-language="th"]').click();
    assert.equal(await page.frameLocator(".preview-frame").locator("html").getAttribute("lang"), "th");
    await page.locator("#closePreview").click();
    assert.equal(await page.locator('[name="name_en"]').inputValue(), "Unsaved browser-test product");
    assert.equal((await page.locator("body").innerText()).includes("Cf-Access-Jwt-Assertion"), false);
    assert.equal((await page.locator("body").innerText()).includes("gho_"), false);
    assert.deepEqual(errors, [], `admin browser errors at ${width}px`);
    if ([375, 1440].includes(width)) {
      await page.screenshot({ path: path.join(reports, `admin-${width}.png`), fullPage: false });
    }
    results.push({ surface: "admin", width, passed: true });
    await page.close();
  }
} finally {
  await browser.close();
  await new Promise((resolve) => server.close(resolve));
}

console.log(JSON.stringify({ passed: true, product_count: customerProducts.length, results }, null, 2));
