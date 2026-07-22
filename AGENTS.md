# AGENTS.md — Milly's Garment Website

Rules for anyone (human or AI) making changes to this project:

1. **Mobile-first.** Check every change at a 375px-wide viewport before anything wider.
2. **Thai-English.** Every visible piece of text needs both a `data-lang="en"` and `data-lang="th"` version. Never ship English-only or Thai-only content.
3. **Catalogue only.** This is not a checkout website. Do not add payment processing, carts, or accounts. All orders route to LINE, TikTok Shop, Shopee, or Lazada.
4. **No direct payment.** Do not add Stripe, Omise, PromptPay, or any payment collection.
5. **Product edits only in `js/products.js`.** Never hardcode a product into an HTML file.
6. **Owner approval before deployment.** Do not connect or publish to a live custom domain without explicit owner sign-off.
7. **No secrets in code.** Never place API keys, passwords, or tokens directly in any file in this repo.
8. **Static site only.** This project has no build step and no backend — it must keep working as plain HTML/CSS/JS so it deploys on Cloudflare Pages with zero configuration.

## Structure
- `index.html`, `shop.html`, `product.html`, `size-guide.html`, `delivery-exchange.html`, `about.html`, `contact.html` — pages
- `partials/header.html`, `partials/footer.html` — shared nav/footer, injected by `js/main.js`
- `js/products.js` — the product database (edit here to add/remove/change products)
- `js/main.js` — site logic (language toggle, nav, rendering) — product data only, not UI logic, belongs in products.js
- `css/style.css` — all styling, using CSS variables defined at the top of the file
- `images/` — product photos (staff-uploaded)
