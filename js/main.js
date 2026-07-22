/* ============================================================
   MILLY'S — SITE SCRIPT
   Handles: reusable header/footer, language toggle, mobile nav,
   and product card / product page rendering.
   Product edits happen in js/products.js only — not here.
   ============================================================ */

const STOCK_LABEL = {
  in_stock: { en: "", th: "" },
  low_stock: { en: "Low Stock", th: "เหลือน้อย" },
  sold_out: { en: "Sold Out", th: "สินค้าหมด" }
};

const CATEGORY_LABEL = {
  dresses: { en: "Dresses", th: "เดรส" },
  kaftans: { en: "Kaftans", th: "คาฟตัน" }
};

/* ---------- language ---------- */
function getLang() {
  return localStorage.getItem("milly_lang") || "en";
}
function setLang(lang) {
  localStorage.setItem("milly_lang", lang);
  document.documentElement.setAttribute("lang", lang);
  document.querySelectorAll("[data-set-lang]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.setLang === lang);
  });
}
function initLangToggle() {
  setLang(getLang());
  document.querySelectorAll("[data-set-lang]").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.dataset.setLang));
  });
}

/* ---------- placeholder art for products without a real photo yet ---------- */
function placeholderPhoto(name) {
  return `
    <div class="placeholder-label">
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" style="margin:0 auto 8px;opacity:.55;">
        <path d="M8 3l4 3 4-3 3 3-3 3v12H5V6L2 3l3-3z" />
      </svg>
      <span data-lang="en">Photo coming soon</span>
      <span data-lang="th">รูปภาพเร็วๆ นี้</span>
    </div>`;
}

/* ---------- product card (the hang-tag signature element) ---------- */
function productCardHTML(p) {
  const stock = STOCK_LABEL[p.stock];
  const photo = (p.images && p.images.length)
    ? `<img src="/images/${p.images[0]}" alt="${p.name_en}">`
    : placeholderPhoto(p.name_en);

  return `
  <a class="tag-card" href="/product.html?code=${encodeURIComponent(p.code)}">
    <span class="tag-hole" aria-hidden="true"></span>
    <div class="tag-photo">
      ${photo}
      ${stock.en ? `<span class="stock-flag ${p.stock === "low_stock" ? "low" : "out"}">
        <span data-lang="en">${stock.en}</span><span data-lang="th">${stock.th}</span>
      </span>` : ""}
    </div>
    <div class="tag-name" data-lang="en">${p.name_en}</div>
    <div class="tag-name" data-lang="th">${p.name_th}</div>
    <span class="tag-code">${p.code}</span>
    <div class="tag-price">฿${p.price.toLocaleString()}</div>
  </a>`;
}

/* ---------- shop grid ---------- */
function renderGrid(target, list) {
  if (!list.length) {
    target.innerHTML = `<div class="empty-state">
      <span data-lang="en">No products in this category yet.</span>
      <span data-lang="th">ยังไม่มีสินค้าในหมวดนี้</span>
    </div>`;
    return;
  }
  target.innerHTML = list.map(productCardHTML).join("");
}

function initShopPage() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;
  const params = new URLSearchParams(window.location.search);
  let activeCategory = params.get("category") || "all";

  function apply() {
    const list = activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter(p => p.category === activeCategory);
    renderGrid(grid, list);
    document.querySelectorAll(".swatch-pill").forEach(pill => {
      pill.classList.toggle("active", pill.dataset.category === activeCategory);
    });
  }

  document.querySelectorAll(".swatch-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      activeCategory = pill.dataset.category;
      const url = new URL(window.location);
      if (activeCategory === "all") url.searchParams.delete("category");
      else url.searchParams.set("category", activeCategory);
      window.history.replaceState({}, "", url);
      apply();
    });
  });

  apply();
}

/* ---------- home page featured products ---------- */
function initHomeFeatured() {
  const grid = document.getElementById("featuredGrid");
  if (!grid) return;
  renderGrid(grid, PRODUCTS.slice(0, 4));
}

/* ---------- product detail page ---------- */
function initProductPage() {
  const root = document.getElementById("productDetail");
  if (!root) return;
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const p = PRODUCTS.find(x => x.code === code);

  if (!p) {
    root.innerHTML = `<div class="empty-state">
      <span data-lang="en">Product not found. It may have sold out or moved.</span>
      <span data-lang="th">ไม่พบสินค้านี้ อาจมีการเปลี่ยนแปลงหรือสินค้าหมด</span>
      <br><br><a class="btn btn-outline" href="/shop.html">
        <span data-lang="en">Back to Shop</span><span data-lang="th">กลับไปหน้าสินค้า</span>
      </a>
    </div>`;
    return;
  }

  document.title = `${p.name_en} — Milly's`;

  const photo = (p.images && p.images.length)
    ? `<img src="/images/${p.images[0]}" alt="${p.name_en}">`
    : placeholderPhoto(p.name_en);

  const stock = STOCK_LABEL[p.stock];
  const cat = CATEGORY_LABEL[p.category];

  root.innerHTML = `
    <div class="pd-gallery-main">${photo}</div>
    <div>
      <span class="breadcrumb">
        <a href="/shop.html">Shop</a> /
        <a href="/shop.html?category=${p.category}"><span data-lang="en">${cat.en}</span><span data-lang="th">${cat.th}</span></a>
      </span>
      <span class="pd-code">${p.code}</span>
      <h1 data-lang="en">${p.name_en}</h1>
      <h1 data-lang="th">${p.name_th}</h1>
      <div class="pd-price">฿${p.price.toLocaleString()}</div>
      ${stock.en ? `<p><strong><span data-lang="en">${stock.en}</span><span data-lang="th">${stock.th}</span></strong></p>` : ""}

      <p data-lang="en">${p.description_en}</p>
      <p data-lang="th">${p.description_th}</p>

      <div class="colour-dots">
        ${p.colours.map(c => `<span class="colour-chip">${c}</span>`).join("")}
      </div>

      <table class="pd-table">
        <tr><th data-lang="en">Fabric</th><th data-lang="th">ผ้า</th>
            <td data-lang="en">${p.fabric_en}</td><td data-lang="th">${p.fabric_th}</td></tr>
        <tr><th>Bust</th><td>${p.measurements.bust}</td></tr>
        <tr><th>Waist</th><td>${p.measurements.waist}</td></tr>
        <tr><th data-lang="en">Length</th><th data-lang="th">ความยาว</th>
            <td colspan="1">${p.measurements.length}</td></tr>
        <tr><th data-lang="en">Sleeve</th><th data-lang="th">แขนเสื้อ</th>
            <td colspan="1">${p.measurements.sleeve}</td></tr>
        <tr><th data-lang="en">Care</th><th data-lang="th">การดูแลรักษา</th>
            <td data-lang="en">${p.care_en}</td><td data-lang="th">${p.care_th}</td></tr>
      </table>

      <p style="font-family:var(--font-mono);font-size:.78rem;color:var(--taupe);">
        <span data-lang="en">Ready to order? Tap a link below — orders are completed off-site.</span>
        <span data-lang="th">พร้อมสั่งซื้อแล้วใช่ไหม แตะลิงก์ด้านล่างเพื่อสั่งซื้อ</span>
      </p>
      <div class="order-buttons">
        <a class="order-btn" href="${BRAND_LINKS.line}" target="_blank" rel="noopener"><span class="dot"></span>LINE</a>
        <a class="order-btn" href="${BRAND_LINKS.tiktok}" target="_blank" rel="noopener"><span class="dot"></span>TikTok Shop</a>
        <a class="order-btn" href="${BRAND_LINKS.shopee}" target="_blank" rel="noopener"><span class="dot"></span>Shopee</a>
        <a class="order-btn" href="${BRAND_LINKS.lazada}" target="_blank" rel="noopener"><span class="dot"></span>Lazada</a>
      </div>
    </div>
  `;
}

/* ---------- header/footer partial loading ---------- */
async function loadPartial(id, url) {
  const target = document.getElementById(id);
  if (!target) return;
  try {
    const res = await fetch(url);
    target.innerHTML = await res.text();
  } catch (e) {
    console.error("Could not load partial:", url, e);
  }
}

function setActiveNavLink() {
  const path = window.location.pathname.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
  document.querySelectorAll("[data-nav]").forEach(link => {
    const linkPath = new URL(link.href).pathname.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
    if (linkPath === path) link.classList.add("active");
  });
}

function initMobileMenu() {
  const btn = document.getElementById("menuToggle");
  const nav = document.getElementById("mobileNav");
  if (!btn || !nav) return;
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

async function initLayout() {
  await Promise.all([
    loadPartial("site-header", "/partials/header.html"),
    loadPartial("site-footer", "/partials/footer.html")
  ]);
  initLangToggle();
  initMobileMenu();
  setActiveNavLink();
}

document.addEventListener("DOMContentLoaded", () => {
  initLayout().then(() => {
    // re-apply language to newly injected header/footer text
    setLang(getLang());
  });
  initHomeFeatured();
  initShopPage();
  initProductPage();
});
