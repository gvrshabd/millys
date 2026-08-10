# AGENTS.md — Milly's Garment Website

Rules for anyone (human or AI) making changes to this project:

1. **Mobile-first.** Check every change at a 375px-wide viewport before anything wider.
2. **Thai-English.** Every customer-facing label and description needs English and Thai versions. Language-neutral values such as product codes, email addresses, phone numbers and URLs do not need translation.
3. **Catalogue only.** This is not a checkout website. Do not add payment processing, carts, or accounts. All orders route to LINE, TikTok Shop, Shopee, or Lazada.
4. **No direct payment.** Do not add Stripe, Omise, PromptPay, or any payment collection.
5. **Product edits only in `js/products.js`.** Never hardcode a product into an HTML file. Business details and shop-wide links belong in `js/site-config.js`.
6. **Owner approval before deployment.** Do not connect or publish to a live custom domain without explicit owner sign-off.
7. **No secrets in code.** Never place API keys, passwords, or tokens directly in any file in this repo.
8. **Static site only.** This project has no build step and no backend — it must keep working as plain HTML/CSS/JS so it deploys on Cloudflare Pages with zero configuration.
9. **Pre-launch privacy.** Keep `SITE_CONFIG.prelaunch` set to `true`, page robots metadata set to `noindex, nofollow`, and `robots.txt` set to `Disallow: /` until the owner explicitly approves a public launch.
10. **No separate size guide.** Product-specific fit and measurement information belongs on each product page.

## Structure
- `index.html`, `shop.html`, `product.html`, `contact.html`, `catalogue-print.html` — pages
- `partials/header.html`, `partials/footer.html` — shared nav/footer, injected by `js/main.js`
- `js/site-config.js` — business details, website settings and shop-wide marketplace links
- `js/products.js` — the product database (edit here to add/remove/change products)
- `js/main.js` — site logic (language toggle, nav, rendering) — product data only, not UI logic, belongs in products.js
- `css/style.css` — all styling, using CSS variables defined at the top of the file
- `images/` — product photos (staff-uploaded)
- `PRODUCT_MANAGEMENT.md` — owner-friendly instructions for stock and product updates
