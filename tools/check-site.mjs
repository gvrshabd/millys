import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const failures = [];
const notes = [];

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function fail(message) {
  failures.push(message);
}

function loadData(relativePath, variableNames) {
  const context = {};
  const exports = variableNames
    .map((name) => `globalThis.__${name} = ${name};`)
    .join("\n");
  vm.createContext(context);
  vm.runInContext(`${read(relativePath)}\n${exports}`, context, {
    filename: relativePath
  });
  return Object.fromEntries(
    variableNames.map((name) => [name, context[`__${name}`]])
  );
}

const { SITE_CONFIG } = loadData("js/site-config.js", ["SITE_CONFIG"]);
const { PRODUCT_CATEGORIES, PRODUCTS } = loadData(
  "js/products.js",
  ["PRODUCT_CATEGORIES", "PRODUCTS"]
);

if (!SITE_CONFIG.prelaunch) {
  fail("SITE_CONFIG.prelaunch must remain true until public launch approval.");
}

const requiredContact = {
  phone: "+66 97 041 0363",
  email: "supportatmillys@gmail.com"
};
for (const [field, expected] of Object.entries(requiredContact)) {
  if (SITE_CONFIG.contact[field] !== expected) {
    fail(`Contact field ${field} does not match the owner-approved value.`);
  }
}

const allowedStock = new Set(["in_stock", "low_stock", "sold_out"]);
const codes = new Set();

function checkBilingual(value, label) {
  if (!value || typeof value.en !== "string" || !value.en.trim()) {
    fail(`${label} is missing English text.`);
  }
  if (!value || typeof value.th !== "string" || !value.th.trim()) {
    fail(`${label} is missing Thai text.`);
  }
}

for (const product of PRODUCTS) {
  if (!/^[A-Z0-9-]+$/.test(product.code || "")) {
    fail(`Product code "${product.code}" must use uppercase letters, numbers, and hyphens.`);
  }
  if (codes.has(product.code)) fail(`Duplicate product code: ${product.code}`);
  codes.add(product.code);

  if (!PRODUCT_CATEGORIES[product.category]) {
    fail(`${product.code} uses unknown category "${product.category}".`);
  }
  if (!allowedStock.has(product.stock)) {
    fail(`${product.code} uses invalid stock value "${product.stock}".`);
  }
  if (typeof product.is_new !== "boolean") {
    fail(`${product.code} is_new must be true or false.`);
  }
  if (!Number.isFinite(product.price) || product.price < 0) {
    fail(`${product.code} has an invalid price.`);
  }

  checkBilingual(product.name, `${product.code} name`);
  checkBilingual(product.fabric, `${product.code} fabric`);
  if (product.care) checkBilingual(product.care, `${product.code} care`);
  checkBilingual(product.description, `${product.code} description`);

  if (!Array.isArray(product.colours) || !product.colours.length) {
    fail(`${product.code} needs at least one colour.`);
  } else {
    product.colours.forEach((colour, index) => {
      checkBilingual(colour, `${product.code} colour ${index + 1}`);
    });
  }

  if (!Array.isArray(product.measurements) || !product.measurements.length) {
    fail(`${product.code} needs product-specific measurements.`);
  } else {
    product.measurements.forEach((measurement, index) => {
      checkBilingual(measurement.label, `${product.code} measurement ${index + 1} label`);
      checkBilingual(measurement.value, `${product.code} measurement ${index + 1} value`);
    });
  }

  for (const image of product.images || []) {
    if (!image.src) {
      fail(`${product.code} contains an image without a src.`);
      continue;
    }
    checkBilingual(image.alt, `${product.code} image "${image.src}" alt text`);
    const imagePath = path.join(root, "images", image.src);
    if (!fs.existsSync(imagePath)) fail(`${product.code} image not found: images/${image.src}`);
  }

  if (product.video?.src) {
    const videoPath = path.join(root, "images", product.video.src);
    if (!fs.existsSync(videoPath)) fail(`${product.code} video not found: images/${product.video.src}`);
  }

  for (const [channel, url] of Object.entries(product.marketplace_links || {})) {
    if (url && !/^https:\/\//.test(url)) {
      fail(`${product.code} ${channel} link must start with https://.`);
    }
  }

  if (product.variants !== undefined) {
    if (!Array.isArray(product.variants)) {
      fail(`${product.code} variants must be an array when provided.`);
    } else {
      product.variants.forEach((variant, index) => {
        checkBilingual(variant.size, `${product.code} variant ${index + 1} size`);
        checkBilingual(variant.colour, `${product.code} variant ${index + 1} colour`);
        if (typeof variant.available !== "boolean") {
          fail(`${product.code} variant ${index + 1} available must be true or false.`);
        }
      });
    }
  }
}

const htmlFiles = fs.readdirSync(root).filter((file) => file.endsWith(".html"));
const expectedPages = new Set([
  "index.html",
  "shop.html",
  "product.html",
  "about.html",
  "contact.html",
  "catalogue-print.html"
]);

for (const page of expectedPages) {
  if (!htmlFiles.includes(page)) fail(`Missing expected page: ${page}`);
}
if (fs.existsSync(path.join(root, "size-guide.html"))) {
  fail("size-guide.html should not exist.");
}
if (fs.existsSync(path.join(root, "delivery-exchange.html"))) {
  fail("delivery-exchange.html should not exist.");
}

const bannedText = [
  "hello@millys.example",
  "YOUR-DOMAIN-HERE",
  "/size-guide.html",
  "Bilingual site",
  "TH / EN",
  "/delivery-exchange.html",
  "Delivery &amp; Exchange",
  "including size help and order questions",
  "56, 24 Ratchadaphisek 16 Alley",
  "https://maps.app.goo.gl/yMDrdGXoSSGo9C1C9"
];

for (const relativePath of [
  ...htmlFiles,
  "partials/header.html",
  "partials/footer.html",
  "js/site-config.js",
  "js/main.js",
  "robots.txt",
  "sitemap.xml"
]) {
  const content = read(relativePath);
  for (const banned of bannedText) {
    if (content.includes(banned)) fail(`${relativePath} still contains "${banned}".`);
  }
}

for (const page of htmlFiles) {
  const content = read(page);
  if (!content.includes('<meta name="robots" content="noindex, nofollow">')) {
    fail(`${page} is missing pre-launch noindex metadata.`);
  }
  for (const script of ["/js/site-config.js", "/js/products.js", "/js/main.js"]) {
    if (!content.includes(`src="${script}"`)) fail(`${page} is missing ${script}.`);
  }

  const hrefPattern = /href="([^"]+)"/g;
  for (const match of content.matchAll(hrefPattern)) {
    const href = match[1];
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    const cleanPath = href.split(/[?#]/)[0];
    if (cleanPath === "/") continue;
    const target = path.join(root, cleanPath.replace(/^\//, ""));
    if (!fs.existsSync(target)) fail(`${page} links to missing file ${cleanPath}.`);
  }
}

const robots = read("robots.txt");
if (!/Disallow:\s*\//.test(robots)) {
  fail("robots.txt must block crawling during pre-launch.");
}

const mainScript = read("js/main.js");
if (!mainScript.includes('encodeURIComponent("Support")')) {
  fail('The contact email subject must remain "Support".');
}
if (!mainScript.includes("SITE_CONFIG.contact.email_href")) {
  fail("The contact form must use the configured support email.");
}
if (!mainScript.includes('encodeURIComponent("Product Inquiry — Milly\'s")')) {
  fail("The inquiry email subject must remain Product Inquiry — Milly's.");
}
if (!mainScript.includes("INQUIRY_STORAGE_KEY")) {
  fail("The inquiry basket must persist locally.");
}

const header = read("partials/header.html");
if (!header.includes('data-set-lang="en"') || !header.includes('data-set-lang="th"')) {
  fail("The header is missing one or both language controls.");
}
if (!header.includes('class="flag-art"')) {
  fail("Language controls must use the compact illustrated flags.");
}

const sitemap = read("sitemap.xml");
for (const code of codes) {
  if (!sitemap.includes(`product.html?code=${code}`)) {
    fail(`sitemap.xml is missing product ${code}.`);
  }
}

const placeholderCount = htmlFiles.reduce((count, page) => {
  return count + (read(page).match(/\[Owner to (provide|confirm)/g) || []).length;
}, 0);
if (placeholderCount) {
  notes.push(`${placeholderCount} approved owner placeholders remain on About.`);
}

if (failures.length) {
  console.error(`Site validation failed with ${failures.length} issue(s):`);
  failures.forEach((message) => console.error(`- ${message}`));
  process.exitCode = 1;
} else {
  console.log(`Site validation passed for ${PRODUCTS.length} products and ${htmlFiles.length} pages.`);
  notes.forEach((message) => console.log(`Note: ${message}`));
}
