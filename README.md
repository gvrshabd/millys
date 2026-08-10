# Milly's Garment Website

A mobile-first Thai-English catalogue website for Milly's. Customers browse
garments here and complete orders through LINE, TikTok Shop, Shopee, or Lazada.
The website does not collect payments and has no customer accounts.

## Current status

The website is in pre-launch development:

- Search indexing is disabled.
- The `main` branch is the Cloudflare production branch.
- Work should happen on review branches and only merge after owner approval.
- Six sample products remain placeholders until real product information and
  media are supplied.
- Delivery, exchange, and About content still need owner confirmation.

## Pages

- Home
- Shop and category filters
- Product details with product-specific measurements
- Delivery & Exchange
- About
- Contact

There is no separate size-guide page. Fit and measurement information belongs
on each product.

## Owner-editable files

- `js/products.js` - products, stock, prices, translations, images, videos, and
  product-specific order links
- `js/site-config.js` - business details, site address, pre-launch status, and
  shop-wide marketplace links, plus optional Analytics/Search Console IDs
- `PRODUCT_MANAGEMENT.md` - step-by-step instructions for routine updates

## Preview locally

Serve the project folder through a local web server. One option is:

```text
python -m http.server 8080
```

Then open `http://localhost:8080`.

Opening the HTML files directly will not load the shared header and footer
because browsers block local partial requests.

## Pre-launch search controls

Until the owner approves public launch:

- `SITE_CONFIG.prelaunch` must remain `true`.
- Every page must keep `noindex, nofollow`.
- `robots.txt` must keep `Disallow: /`.

At launch, update these controls together, confirm the final domain in
`js/site-config.js` and `sitemap.xml`, then submit the sitemap to Google Search
Console.

## Structure

```text
index.html
shop.html
product.html
contact.html
robots.txt
sitemap.xml
PRODUCT_MANAGEMENT.md
css/style.css
js/site-config.js
js/products.js
js/main.js
partials/header.html
partials/footer.html
images/products/
tools/check-site.mjs
```
