# Milly's Garment Website — Version 1

A mobile-first, Thai/English catalogue website. No checkout — every product links out to LINE, TikTok Shop, Shopee, and Lazada for ordering, exactly as described in the project guide.

## What's already built
- Home, Shop (with category filter), Product detail, Size Guide, Delivery & Exchange, About, and Contact pages
- Thai/English language toggle (top right, saved per visitor)
- Mobile-first responsive layout
- 6 sample products (3 dresses, 3 kaftans) — **placeholder content, replace before launch**
- `robots.txt` + `sitemap.xml` for basic Google Search Console setup
- Reusable header/footer so nav only needs to be edited in one place

## What you still need to provide (see checklist below)
Everything currently marked `[Owner to provide]` or `[Owner to confirm]` on the About, Delivery & Exchange, and Contact pages, plus your real product photos and info in `js/products.js`.

---

## How to preview the site on your own computer
No installation needed beyond a browser and Python (already on most computers):

```
cd millys-website
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

---

## How to deploy on Cloudflare Pages (free, works with a custom domain)

**Option A — Direct upload (fastest, no GitHub needed):**
1. Go to the Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
2. Give the project a name (e.g. `millys-website`).
3. Drag the entire `millys-website` folder (or a zip of its contents) into the upload box.
4. Click **Deploy**. Cloudflare gives you a free `*.pages.dev` URL immediately.
5. No build command and no output directory setting is needed — this is a plain static site.

**Option B — Connect a GitHub repo (better for ongoing updates):**
1. Push this folder to a GitHub repository.
2. In Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select the repo. Leave **Build command** blank and **Build output directory** as `/` (root) — there is no build step.
4. Click **Save and Deploy**. Every future `git push` will auto-redeploy the site.

**Adding your custom domain:**
1. In your Pages project → **Custom domains** → **Set up a custom domain**.
2. Enter your domain (e.g. `millys.com`) and follow the DNS instructions. If your domain is already on Cloudflare, this is automatic; otherwise you'll add the CNAME record Cloudflare shows you.
3. HTTPS is issued automatically — no extra steps.

---

## How to add or edit products (no coding needed once you see the pattern)
Open `js/products.js`. Each product is one block like this:

```js
{
  code: "MLY-DR-004",
  name_en: "Your Product Name",
  name_th: "ชื่อสินค้าภาษาไทย",
  category: "dresses",   // or "kaftans"
  price: 1290,
  fabric_en: "...",
  fabric_th: "...",
  colours: ["Colour 1", "Colour 2"],
  measurements: { bust: "...", waist: "...", length: "...", sleeve: "..." },
  care_en: "...",
  care_th: "...",
  stock: "in_stock",     // or "low_stock" / "sold_out"
  images: ["photo1.jpg"],   // filenames you upload into /images
  description_en: "...",
  description_th: "..."
}
```

To add a product: copy an existing block, change every value, and add a comma between blocks. To remove a product: delete its whole block. To add real photos: upload the image files into the `/images` folder and list their filenames in that product's `images` array — until then, a "Photo coming soon" placeholder shows automatically.

Your LINE, TikTok Shop, Shopee, and Lazada links are already set at the bottom of the same file, under `BRAND_LINKS` — edit them there if they ever change, and they'll update everywhere on the site automatically.

---

## Before you launch — checklist
This mirrors Section 4 and Section 9 of the project guide:

- [ ] Replace all 6 sample products with your real 20–30 launch products
- [ ] Upload 4–7 real photos per product into `/images`, referenced in `products.js`
- [ ] Fill in Delivery & Exchange page (delivery time, area, fee, exchange window)
- [ ] Fill in Contact page (phone, email, address, business hours)
- [ ] Fill in the About page brand story
- [ ] Have a Thai speaker review all Thai text — it was written to be correct and natural but should be double-checked, especially the sample product Thai copy
- [ ] Set the real contact email in `contact.html` (currently `hello@millys.example`)
- [ ] Replace `YOUR-DOMAIN-HERE.com` in `robots.txt` and `sitemap.xml` with your real domain
- [ ] Add Google Analytics / Google Search Console (see below)
- [ ] Test on an Android phone, an iPhone-sized screen, and a computer
- [ ] Confirm every LINE/TikTok/Shopee/Lazada link opens the right place
- [ ] Only then: connect your real domain in Cloudflare Pages and announce the site

## Adding Google Analytics (optional, for visitor tracking)
1. Create a free Google Analytics 4 property and copy your Measurement ID (looks like `G-XXXXXXX`).
2. Add the standard GA4 snippet Google gives you into the `<head>` of each HTML page, just above `</head>`.
3. For Google Search Console: verify your domain there, then submit `sitemap.xml`.

---

## Project structure
```
millys-website/
├── index.html              Home page
├── shop.html                Shop / category listing
├── product.html              Product detail (reads ?code=... from the URL)
├── size-guide.html
├── delivery-exchange.html
├── about.html
├── contact.html
├── robots.txt
├── sitemap.xml
├── AGENTS.md                 Rules for future edits (for Codex or any AI helper)
├── css/style.css
├── js/products.js            <- Edit here to change products
├── js/main.js
├── partials/header.html      Shared navigation
├── partials/footer.html      Shared footer
└── images/                   Upload real product photos here
```
