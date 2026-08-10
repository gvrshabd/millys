import fs from "node:fs";

const required = [
  "admin/index.html", "admin/admin.css", "admin/admin-preview.css", "admin/admin.js", "src/worker.js",
  "src/security.js", "src/repository.js", "src/media.js", "src/validation.js",
  "migrations/0001_initial.sql", "migrations/0002_seed_catalogue.sql", "wrangler.jsonc"
];
for (const file of required) {
  if (!fs.existsSync(file)) throw new Error(`Missing administration file: ${file}`);
}

const assetsIgnore = fs.readFileSync(".assetsignore", "utf8");
for (const privatePath of [
  "**/.git", ".gitignore", "src/**", "migrations/**", "tests/**", "tools/**",
  "wrangler.jsonc", ".dev.vars.*", "reports/**", "exports/**"
]) {
  if (!assetsIgnore.includes(privatePath)) throw new Error(`.assetsignore must exclude ${privatePath}`);
}

const worker = fs.readFileSync("src/worker.js", "utf8");
const security = fs.readFileSync("src/security.js", "utf8");
if (!worker.includes('url.pathname.startsWith("/admin/")')) throw new Error("Admin routes are not Worker-protected.");
if (!security.includes("Cf-Access-Jwt-Assertion")) throw new Error("Access JWT verification is missing.");
if (!security.includes("ADMIN_EMAILS")) throw new Error("Administrator allowlist is missing.");
if (!security.includes("ADMIN_NOT_CONFIGURED")) throw new Error("Administration must fail closed when unconfigured.");
if (/gho_[A-Za-z0-9]{20,}|BEGIN PRIVATE KEY|api[_-]?key\s*[:=]\s*["'][^"']+/i.test(
  required.map((file) => fs.readFileSync(file, "utf8")).join("\n")
)) throw new Error("A possible secret was found in administration files.");

const publicFiles = ["index.html", "shop.html", "product.html", "contact.html", "partials/header.html", "partials/footer.html", "sitemap.xml"];
for (const file of publicFiles) {
  const source = fs.readFileSync(file, "utf8");
  if (/href=["'][^"']*\/admin/i.test(source)) throw new Error(`Customer-facing admin link found in ${file}`);
}

console.log("Administration structure and fail-closed checks passed.");
