# AGENTS.md — Milly's Garment Catalogue

Rules for humans and agents working in this repository:

1. **Mobile first.** Verify customer work at 320px and 375px. Verify the admin
   at 375px before wider layouts.
2. **English and Thai.** Every customer-facing label and product field needs
   both languages. Language-neutral codes, prices, addresses and URLs do not.
3. **Catalogue only.** Never add checkout, payment collection, customer
   accounts or a public product-editing surface.
4. **D1 is authoritative after migration.** Routine products and stock are
   managed through `/admin/`. `js/products.js` is the initial seed and emergency
   fallback, not the everyday editing workflow.
5. **Explicit editorial workflow.** Draft changes stay private. Publish,
   archive, restore and live-stock changes must remain versioned and audited.
6. **Admin fails closed.** Never weaken Access JWT verification, issuer/audience
   checks, exact email allowlisting, same-origin/CSRF checks or revision checks.
   Missing configuration must deny access.
7. **No secrets in Git.** Never commit administrator emails, CSRF secrets,
   Access tokens, JWTs, Cloudflare API credentials, `.dev.vars` or exports.
8. **Preserve fallback.** Customer initialization must load published API data
   before rendering, use a recent successful response if available, then use
   the embedded 110-product snapshot without exposing technical errors.
9. **Media safety.** Browser resizing is not validation. Keep server-side byte,
   signature, path and type checks. Never expose R2 write credentials or list
   bucket contents.
10. **Cloudflare Assets safety.** Keep `.git`, Worker source, migrations, tests,
    tools, configuration, package metadata, Markdown and exports out of public
    assets. Never repeat the `.git` asset-upload incident.
11. **Owner approval before production.** Do not push an intermediate Worker
    configuration. D1, R2, Access, allowlist, migration, tests and rollback must
    all be ready first.
12. **Pre-launch privacy.** Keep `SITE_CONFIG.prelaunch = true`, page robots at
    `noindex, nofollow`, and `robots.txt` at `Disallow: /` until explicit launch
    approval.
13. **No separate About, Delivery & Exchange or size-guide page.** Product fit
    and measurements belong on product pages.

## Structure

- Customer pages: `index.html`, `shop.html`, `product.html`, `contact.html`,
  `catalogue-print.html`
- Shared customer UI: `partials/`, `css/style.css`, `js/main.js`
- Emergency catalogue snapshot: `js/products.js`
- Private interface: `admin/`
- Worker/API/security/data/media: `src/`
- Versioned D1 schema and seed: `migrations/`
- Automated validation: `tests/`, `tools/`
- Owner guide: `PRODUCT_MANAGEMENT.md`
- Technical setup/recovery: `CLOUDFLARE_ADMIN_SETUP.md`
