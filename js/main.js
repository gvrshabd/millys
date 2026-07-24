/* ============================================================
   MILLY'S - SITE SCRIPT
   Shared layout, language switching, catalogue rendering,
   product details, contact form, and lightweight SEO.
   ============================================================ */

const STOCK_LABELS = {
  in_stock: { en: "In stock", th: "พร้อมส่ง" },
  low_stock: { en: "Low stock", th: "เหลือน้อย" },
  sold_out: { en: "Sold out", th: "สินค้าหมด" }
};

const ORDER_CHANNELS = [
  { key: "line", label: "LINE" },
  { key: "tiktok", label: "TikTok Shop" },
  { key: "shopee", label: "Shopee" },
  { key: "lazada", label: "Lazada" }
];

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getLang() {
  return localStorage.getItem("milly_lang") || "en";
}

function setLang(lang) {
  const safeLang = lang === "th" ? "th" : "en";
  localStorage.setItem("milly_lang", safeLang);
  document.documentElement.setAttribute("lang", safeLang);

  document.querySelectorAll("[data-set-lang]").forEach((button) => {
    const active = button.dataset.setLang === safeLang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });

  document.querySelectorAll("[data-alt-en][data-alt-th]").forEach((image) => {
    image.alt = safeLang === "th" ? image.dataset.altTh : image.dataset.altEn;
  });
}

function initLangToggle() {
  setLang(getLang());
  document.querySelectorAll("[data-set-lang]").forEach((button) => {
    button.addEventListener("click", () => setLang(button.dataset.setLang));
  });
}

function getConfigValue(path) {
  return path.split(".").reduce((value, key) => value?.[key], SITE_CONFIG);
}

function applySiteConfig() {
  document.querySelectorAll("[data-config-text]").forEach((element) => {
    const value = getConfigValue(element.dataset.configText);
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-config-href]").forEach((element) => {
    const value = getConfigValue(element.dataset.configHref);
    if (value) element.setAttribute("href", value);
  });
}

function placeholderPhoto() {
  return `
    <div class="placeholder-label" role="img"
      aria-label="Product photo coming soon">
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="1.3" aria-hidden="true">
        <path d="M8 3l4 3 4-3 3 3-3 3v12H5V6L2 3l3-3z" />
      </svg>
      <span data-lang="en">Photo coming soon</span>
      <span data-lang="th">รูปภาพเร็วๆ นี้</span>
    </div>`;
}

function assetUrl(src) {
  if (!src) return "";
  if (/^(https?:)?\/\//i.test(src) || src.startsWith("/")) return src;
  return `/images/${src.replace(/^images\//, "")}`;
}

function safeExternalUrl(value) {
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol) ? url.href : "#";
  } catch {
    return "#";
  }
}

function imageHTML(image, product, options = {}) {
  const altEn = image?.alt?.en || product.name.en;
  const altTh = image?.alt?.th || product.name.th;
  const loading = options.eager ? "eager" : "lazy";
  const fetchPriority = options.eager ? ' fetchpriority="high"' : "";
  return `<img
    src="${escapeHTML(assetUrl(image.src))}"
    alt="${escapeHTML(getLang() === "th" ? altTh : altEn)}"
    data-alt-en="${escapeHTML(altEn)}"
    data-alt-th="${escapeHTML(altTh)}"
    loading="${loading}"
    decoding="async"${fetchPriority}>`;
}

function productCardHTML(product) {
  const stock = STOCK_LABELS[product.stock];
  const photo = product.images?.length
    ? imageHTML(product.images[0], product)
    : placeholderPhoto();

  return `
    <a class="tag-card" href="/product.html?code=${encodeURIComponent(product.code)}">
      <span class="tag-hole" aria-hidden="true"></span>
      <div class="tag-photo">
        ${photo}
        ${product.is_new ? `
          <span class="new-flag">
            <span data-lang="en">New</span><span data-lang="th">มาใหม่</span>
          </span>` : ""}
        ${product.stock !== "in_stock" ? `
          <span class="stock-flag ${product.stock === "low_stock" ? "low" : "out"}">
            <span data-lang="en">${stock.en}</span>
            <span data-lang="th">${stock.th}</span>
          </span>` : ""}
      </div>
      <div class="tag-name" data-lang="en">${escapeHTML(product.name.en)}</div>
      <div class="tag-name" data-lang="th">${escapeHTML(product.name.th)}</div>
      <div class="tag-price">฿${product.price.toLocaleString("en-US")}</div>
    </a>`;
}

function renderGrid(target, products) {
  if (!products.length) {
    target.innerHTML = `<div class="empty-state">
      <span data-lang="en">No products in this category yet.</span>
      <span data-lang="th">ยังไม่มีสินค้าในหมวดนี้</span>
    </div>`;
    setLang(getLang());
    return;
  }
  target.innerHTML = products.map(productCardHTML).join("");
  setLang(getLang());
}

function filterLabelHTML(key, label) {
  return `<span class="swatch swatch-${escapeHTML(key)}" aria-hidden="true"></span>
    <span data-lang="en">${escapeHTML(label.en)}</span>
    <span data-lang="th">${escapeHTML(label.th)}</span>`;
}

function initShopPage() {
  const grid = document.getElementById("productGrid");
  const filters = document.getElementById("categoryFilters");
  if (!grid || !filters) return;

  const populatedCategories = Object.keys(PRODUCT_CATEGORIES)
    .filter((category) => PRODUCTS.some((product) => product.category === category));
  const filterData = [
    { key: "all", label: { en: "All", th: "ทั้งหมด" } },
    ...(PRODUCTS.some((product) => product.is_new)
      ? [{ key: "new", label: { en: "New arrivals", th: "มาใหม่" } }]
      : []),
    ...populatedCategories.map((key) => ({ key, label: PRODUCT_CATEGORIES[key] }))
  ];

  filters.innerHTML = filterData.map(({ key, label }) => `
    <button type="button" class="swatch-pill" data-category="${escapeHTML(key)}">
      ${filterLabelHTML(key, label)}
    </button>`).join("");

  const params = new URLSearchParams(window.location.search);
  let activeCategory = params.get("category") || "all";
  if (!filterData.some((filter) => filter.key === activeCategory)) activeCategory = "all";

  function applyFilter() {
    let list = PRODUCTS;
    if (activeCategory === "new") list = PRODUCTS.filter((product) => product.is_new);
    else if (activeCategory !== "all") {
      list = PRODUCTS.filter((product) => product.category === activeCategory);
    }
    renderGrid(grid, list);
    filters.querySelectorAll(".swatch-pill").forEach((button) => {
      const active = button.dataset.category === activeCategory;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  filters.querySelectorAll(".swatch-pill").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      const url = new URL(window.location);
      if (activeCategory === "all") url.searchParams.delete("category");
      else url.searchParams.set("category", activeCategory);
      window.history.replaceState({}, "", url);
      applyFilter();
    });
  });

  applyFilter();
}

function initHomeFeatured() {
  const grid = document.getElementById("featuredGrid");
  if (!grid) return;
  const featured = PRODUCTS.filter((product) => product.is_new).slice(0, 4);
  renderGrid(grid, featured.length ? featured : PRODUCTS.slice(0, 4));
}

function initHomeStats() {
  const collectionCount = new Set(PRODUCTS.map((product) => product.category)).size;
  document.querySelectorAll("[data-stat-collections]").forEach((element) => {
    element.textContent = collectionCount;
  });
}

function bilingualPair(value) {
  return `<span data-lang="en">${escapeHTML(value.en)}</span>
    <span data-lang="th">${escapeHTML(value.th)}</span>`;
}

function measurementRows(product) {
  return product.measurements.map((measurement) => `
    <tr>
      <th scope="row">${bilingualPair(measurement.label)}</th>
      <td>${bilingualPair(measurement.value)}</td>
    </tr>`).join("");
}

function productOrderButtons(product) {
  if (product.stock === "sold_out") {
    return `
      <p class="order-unavailable">
        <span data-lang="en">This item is currently sold out. Contact us on LINE for restock information.</span>
        <span data-lang="th">สินค้านี้หมดชั่วคราว ติดต่อเราทาง LINE เพื่อสอบถามการเติมสินค้า</span>
      </p>
      <div class="order-buttons">
        ${ORDER_CHANNELS.map(({ label }) => `
          <span class="order-btn disabled" aria-disabled="true">
            <span class="dot"></span>${label}
          </span>`).join("")}
      </div>`;
  }

  return `
    <p class="order-note">
      <span data-lang="en">Ready to order? Choose the channel you prefer. Payment is completed off-site.</span>
      <span data-lang="th">พร้อมสั่งซื้อแล้ว เลือกช่องทางที่สะดวก การชำระเงินดำเนินการผ่านแพลตฟอร์มภายนอก</span>
    </p>
    <div class="order-buttons">
      ${ORDER_CHANNELS.map(({ key, label }) => {
        const href = product.marketplace_links?.[key] || SITE_CONFIG.marketplaces[key];
        return `<a class="order-btn" href="${escapeHTML(safeExternalUrl(href))}" target="_blank"
          rel="noopener noreferrer"
          data-order-channel="${escapeHTML(key)}"
          data-product-code="${escapeHTML(product.code)}"
          aria-label="${escapeHTML(`${label} - ${product.name.en}`)}">
          <span class="dot"></span>${label}
        </a>`;
      }).join("")}
    </div>`;
}

function productGalleryHTML(product) {
  if (!product.images?.length) {
    return `<div class="pd-gallery">
      <div class="pd-gallery-main">${placeholderPhoto()}</div>
    </div>`;
  }

  const mainImage = product.images[0];
  const thumbs = product.images.length > 1
    ? `<div class="pd-thumbnails" aria-label="Product images">
      ${product.images.map((image, index) => `
        <button type="button" class="pd-thumbnail${index === 0 ? " active" : ""}"
          data-gallery-index="${index}"
          aria-label="View image ${index + 1}">
          ${imageHTML(image, product)}
        </button>`).join("")}
      </div>`
    : "";

  const video = product.video?.src
    ? `<div class="pd-video-wrap">
      <h2>${bilingualPair({ en: "Product video", th: "วิดีโอสินค้า" })}</h2>
      <video class="pd-video" controls preload="metadata"
        ${product.video.poster ? `poster="${escapeHTML(assetUrl(product.video.poster))}"` : ""}>
        <source src="${escapeHTML(assetUrl(product.video.src))}">
        <span data-lang="en">Your browser cannot play this video.</span>
        <span data-lang="th">เบราว์เซอร์ของคุณไม่รองรับวิดีโอนี้</span>
      </video>
    </div>`
    : "";

  return `<div class="pd-gallery">
    <div class="pd-gallery-main" id="productMainImage">
      ${imageHTML(mainImage, product, { eager: true })}
    </div>
    ${thumbs}
    ${video}
  </div>`;
}

function initProductGallery(product) {
  const main = document.querySelector("#productMainImage img");
  if (!main) return;
  document.querySelectorAll("[data-gallery-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const image = product.images[Number(button.dataset.galleryIndex)];
      main.src = assetUrl(image.src);
      main.dataset.altEn = image.alt?.en || product.name.en;
      main.dataset.altTh = image.alt?.th || product.name.th;
      setLang(getLang());
      document.querySelectorAll("[data-gallery-index]").forEach((item) => {
        item.classList.toggle("active", item === button);
      });
    });
  });
}

function updateProductMetadata(product) {
  const descriptionMeta = document.querySelector('meta[name="description"]');
  const openGraphTitle = document.querySelector('meta[property="og:title"]');
  const openGraphDescription = document.querySelector('meta[property="og:description"]');
  document.title = `${product.name.en} - Milly's`;
  if (descriptionMeta) descriptionMeta.content = product.description.en;
  if (openGraphTitle) openGraphTitle.content = `${product.name.en} - Milly's`;
  if (openGraphDescription) openGraphDescription.content = product.description.en;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name.en,
    alternateName: product.name.th,
    sku: product.code,
    description: product.description.en,
    brand: { "@type": "Brand", name: "Milly's" },
    offers: {
      "@type": "Offer",
      priceCurrency: "THB",
      price: product.price,
      availability: product.stock === "sold_out"
        ? "https://schema.org/OutOfStock"
        : "https://schema.org/InStock",
      url: window.location.href
    }
  };
  if (product.images?.length) structuredData.image = product.images.map((image) => assetUrl(image.src));
  setStructuredData("product-schema", structuredData);
}

function initProductPage() {
  const root = document.getElementById("productDetail");
  if (!root) return;

  const code = new URLSearchParams(window.location.search).get("code");
  const product = PRODUCTS.find((item) => item.code === code);
  if (!product) {
    root.innerHTML = `<div class="empty-state">
      <span data-lang="en">Product not found. It may have sold out or moved.</span>
      <span data-lang="th">ไม่พบสินค้านี้ อาจมีการเปลี่ยนแปลงหรือสินค้าหมด</span>
      <br><br>
      <a class="btn btn-outline" href="/shop.html">
        <span data-lang="en">Back to Shop</span>
        <span data-lang="th">กลับไปหน้าสินค้า</span>
      </a>
    </div>`;
    setLang(getLang());
    return;
  }

  const category = PRODUCT_CATEGORIES[product.category];
  const stock = STOCK_LABELS[product.stock];
  updateProductMetadata(product);

  root.innerHTML = `
    ${productGalleryHTML(product)}
    <div class="pd-copy">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a href="/shop.html">${bilingualPair({ en: "Shop", th: "สินค้า" })}</a>
        <span aria-hidden="true">/</span>
        <a href="/shop.html?category=${encodeURIComponent(product.category)}">
          ${bilingualPair(category)}
        </a>
      </nav>
      <h1 data-lang="en">${escapeHTML(product.name.en)}</h1>
      <h1 data-lang="th">${escapeHTML(product.name.th)}</h1>
      <div class="pd-price">฿${product.price.toLocaleString("en-US")}</div>
      <p class="stock-status ${escapeHTML(product.stock)}">${bilingualPair(stock)}</p>

      <p data-lang="en">${escapeHTML(product.description.en)}</p>
      <p data-lang="th">${escapeHTML(product.description.th)}</p>

      <p class="section-note">${bilingualPair({
        en: "Available colours / options",
        th: "สี / ตัวเลือกที่มี"
      })}</p>
      <div class="colour-dots" aria-label="Available colours">
        ${product.colours.map((colour) => `
          <span class="colour-chip">${bilingualPair(colour)}</span>`).join("")}
      </div>

      <section class="product-sizing" aria-labelledby="fit-heading">
        <h2 id="fit-heading">${bilingualPair({
          en: "Fit & measurements",
          th: "ขนาดและสัดส่วน"
        })}</h2>
        <p class="section-note">${bilingualPair({
          en: "Product-specific measurements are shown below.",
          th: "รายละเอียดขนาดของสินค้าชิ้นนี้แสดงไว้ด้านล่าง"
        })}</p>
        <div class="table-scroll">
          <table class="pd-table">
            <tbody>
              <tr>
                <th scope="row">${bilingualPair({ en: "Fabric", th: "เนื้อผ้า" })}</th>
                <td>${bilingualPair(product.fabric)}</td>
              </tr>
              ${measurementRows(product)}
              ${product.care ? `
                <tr>
                  <th scope="row">${bilingualPair({ en: "Care", th: "การดูแลรักษา" })}</th>
                  <td>${bilingualPair(product.care)}</td>
                </tr>` : ""}
            </tbody>
          </table>
        </div>
      </section>

      ${productOrderButtons(product)}
    </div>`;

  setLang(getLang());
  initProductGallery(product);
}

async function loadPartial(id, url) {
  const target = document.getElementById(id);
  if (!target) return;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    target.innerHTML = await response.text();
  } catch (error) {
    console.error("Could not load partial:", url, error);
    target.innerHTML = `<div class="partial-error">
      <a href="/index.html">Milly's</a>
    </div>`;
  }
}

function setActiveNavLink() {
  const path = window.location.pathname
    .replace(/\/index\.html$/, "/")
    .replace(/\.html$/, "");
  document.querySelectorAll("[data-nav]").forEach((link) => {
    const linkPath = new URL(link.href).pathname
      .replace(/\/index\.html$/, "/")
      .replace(/\.html$/, "");
    if (linkPath === path) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
}

function initMobileMenu() {
  const button = document.getElementById("menuToggle");
  const nav = document.getElementById("mobileNav");
  if (!button || !nav) return;

  function closeMenu() {
    nav.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
  }

  button.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      button.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !button.contains(event.target)) closeMenu();
  });
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const name = document.getElementById("cf-name").value.trim();
    const email = document.getElementById("cf-email").value.trim();
    const message = document.getElementById("cf-message").value.trim();
    const subject = encodeURIComponent("Support");
    const body = encodeURIComponent(`${message}\n\n- ${name} (${email})`);
    window.location.href = `${SITE_CONFIG.contact.email_href}?subject=${subject}&body=${body}`;
  });
}

function setStructuredData(id, data) {
  let script = document.getElementById(id);
  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

function initSEO() {
  const canonicalUrl = `${SITE_CONFIG.site_url}${window.location.pathname}${window.location.search}`;
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = canonicalUrl;

  let openGraphUrl = document.querySelector('meta[property="og:url"]');
  if (!openGraphUrl) {
    openGraphUrl = document.createElement("meta");
    openGraphUrl.setAttribute("property", "og:url");
    document.head.appendChild(openGraphUrl);
  }
  openGraphUrl.content = canonicalUrl;

  const robots = document.querySelector('meta[name="robots"]');
  if (robots) {
    robots.content = SITE_CONFIG.prelaunch ? "noindex, nofollow" : "index, follow";
  }

  if (SITE_CONFIG.analytics.search_console_verification) {
    let verification = document.querySelector('meta[name="google-site-verification"]');
    if (!verification) {
      verification = document.createElement("meta");
      verification.name = "google-site-verification";
      document.head.appendChild(verification);
    }
    verification.content = SITE_CONFIG.analytics.search_console_verification;
  }

  setStructuredData("business-schema", {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: "Milly's",
    url: SITE_CONFIG.site_url,
    email: SITE_CONFIG.contact.email,
    telephone: SITE_CONFIG.contact.phone,
    address: SITE_CONFIG.contact.address,
    sameAs: [
      SITE_CONFIG.marketplaces.tiktok,
      SITE_CONFIG.marketplaces.shopee,
      SITE_CONFIG.marketplaces.lazada
    ]
  });
}

function initAnalytics() {
  const measurementId = SITE_CONFIG.analytics.google_measurement_id;
  if (!/^G-[A-Z0-9]+$/i.test(measurementId)) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", measurementId);

  document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-order-channel]");
    if (!link) return;
    window.gtag("event", "order_link_click", {
      channel: link.dataset.orderChannel,
      product_code: link.dataset.productCode || "shop"
    });
  });
}

async function initLayout() {
  await Promise.all([
    loadPartial("site-header", "/partials/header.html"),
    loadPartial("site-footer", "/partials/footer.html")
  ]);
  applySiteConfig();
  initLangToggle();
  initMobileMenu();
  setActiveNavLink();
}

document.addEventListener("DOMContentLoaded", () => {
  initSEO();
  initAnalytics();
  initHomeFeatured();
  initHomeStats();
  initShopPage();
  initProductPage();
  initContactForm();

  initLayout().then(() => {
    setLang(getLang());
  });
});
