# Milly's Garment Catalogue

A mobile-first English–Thai catalogue for Milly's. Customers browse 110
products, save products to an inquiry basket, and continue through LINE,
TikTok Shop, Shopee, Lazada or email. The site has no checkout, payments or
customer accounts.

## Customer pages

- Seven-section vertical collection homepage
- Shop search, filters and category selection
- Product details, galleries and measurements
- Inquiry basket and printable/PDF selected catalogue
- Contact page

The About and Delivery & Exchange pages have been intentionally removed.

## Catalogue administration

The private `/admin/` application supports stock updates, bulk stock changes,
bilingual drafts, customer-style preview, publish/archive/restore, R2 photo
uploads, revision history, audit history and JSON backups.

Production architecture:

- Cloudflare Access: administrator sign-in
- Cloudflare Worker: public catalogue, protected API and media route
- Cloudflare D1: authoritative draft/published product data
- Cloudflare R2: future admin-uploaded photographs
- Workers Assets: existing static customer website and legacy photographs

The Worker fails closed until its Access settings, exact administrator
allowlist and CSRF secret are configured. There is no customer-facing Admin
link.

See:

- `PRODUCT_MANAGEMENT.md` for owner instructions
- `CLOUDFLARE_ADMIN_SETUP.md` for setup, deployment and recovery

## Development

Requires Node.js 22+ and pnpm.

```text
pnpm install
pnpm seed
npx wrangler d1 migrations apply millys-catalogue --local --persist-to ../.millys-wrangler-state
pnpm check
pnpm test
pnpm test:browser
pnpm dev
```

Copy `.dev.vars.example` to `.dev.vars` for local protected-route testing.
Never commit `.dev.vars` or real credentials.

## Main structure

```text
admin/                       private owner interface
css/style.css                customer styling
images/                      existing static photographs
js/main.js                   customer rendering and catalogue fallback
js/products.js               emergency initial-catalogue snapshot
js/site-config.js            business-wide settings and links
migrations/                  versioned D1 schema and 110-product seed
src/worker.js                Worker routing and APIs
src/security.js              Access JWT, allowlist and CSRF verification
src/repository.js            D1 workflows, revisions and audit
src/media.js                 R2 uploads and controlled reads
tests/                       data, workflow and security tests
tools/                       validator, seed and browser regression tools
```

## Pre-launch

Search indexing remains disabled until the owner separately approves launch:

- `SITE_CONFIG.prelaunch` stays `true`.
- Pages retain `noindex, nofollow`.
- `robots.txt` retains `Disallow: /`.

## Production warning

The repository configuration intentionally contains invalid placeholders until
the production D1 database and Cloudflare Access application exist. Do not push
or deploy the admin Worker until `CLOUDFLARE_ADMIN_SETUP.md` is complete.
