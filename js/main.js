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

const INQUIRY_STORAGE_KEY = "milly_inquiry_v1";
const CATALOGUE_CACHE_KEY = "milly_catalogue_last_good_v1";

function isUsableCatalogue(value) {
  if (!value || !Array.isArray(value.products) || !value.products.length) return false;
  const codes = new Set();
  return value.products.every((product) => {
    if (!product || typeof product !== "object" || typeof product.code !== "string"
      || typeof product.category !== "string" || !product.name?.en || !product.name?.th
      || !Array.isArray(product.images) || !product.images.length || codes.has(product.code)) return false;
    codes.add(product.code);
    return true;
  });
}

async function loadPublishedCatalogue() {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 3500);
  try {
    const response = await fetch("/api/catalogue", {
      headers: { Accept: "application/json" },
      signal: controller.signal,
      credentials: "same-origin"
    });
    if (!response.ok) throw new Error(`Catalogue request failed (${response.status}).`);
    const catalogue = await response.json();
    if (!isUsableCatalogue(catalogue)) throw new Error("Catalogue response was incomplete.");
    PRODUCTS.splice(0, PRODUCTS.length, ...catalogue.products);
    storageSet(sessionStorage, CATALOGUE_CACHE_KEY, JSON.stringify(catalogue));
    document.documentElement.dataset.catalogueSource = "published";
  } catch (error) {
    try {
      const cached = JSON.parse(storageGet(sessionStorage, CATALOGUE_CACHE_KEY, "null"));
      if (isUsableCatalogue(cached)) {
        PRODUCTS.splice(0, PRODUCTS.length, ...cached.products);
        document.documentElement.dataset.catalogueSource = "cached";
        return;
      }
    } catch {
      // The bundled catalogue below remains the final, offline-safe fallback.
    }
    document.documentElement.dataset.catalogueSource = "bundled";
    console.info("Using the bundled Milly's catalogue while live catalogue data is unavailable.", error);
  } finally {
    window.clearTimeout(timeout);
  }
}

function storageGet(storage, key, fallback = null) {
  try {
    const value = storage.getItem(key);
    return value === null ? fallback : value;
  } catch {
    return fallback;
  }
}

function storageSet(storage, key, value) {
  try {
    storage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getLang() {
  return storageGet(localStorage, "milly_lang", "en") === "th" ? "th" : "en";
}

function setLang(lang) {
  const safeLang = lang === "th" ? "th" : "en";
  storageSet(localStorage, "milly_lang", safeLang);
  document.documentElement.setAttribute("lang", safeLang);

  document.querySelectorAll("[data-set-lang]").forEach((button) => {
    const active = button.dataset.setLang === safeLang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });

  document.querySelectorAll("[data-alt-en][data-alt-th]").forEach((image) => {
    image.alt = safeLang === "th" ? image.dataset.altTh : image.dataset.altEn;
  });

  document.querySelectorAll("[data-aria-en][data-aria-th]").forEach((element) => {
    element.setAttribute(
      "aria-label",
      safeLang === "th" ? element.dataset.ariaTh : element.dataset.ariaEn
    );
  });

  document.querySelectorAll("[data-placeholder-en][data-placeholder-th]").forEach((element) => {
    element.placeholder = safeLang === "th"
      ? element.dataset.placeholderTh
      : element.dataset.placeholderEn;
  });

  document.querySelectorAll("option[data-en][data-th]").forEach((option) => {
    option.textContent = safeLang === "th" ? option.dataset.th : option.dataset.en;
  });

}

function initLangToggle() {
  setLang(getLang());
  document.querySelectorAll("[data-set-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      setLang(button.dataset.setLang);
      document.dispatchEvent(new CustomEvent("milly:language", { detail: getLang() }));
    });
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

function productSizeSummary(product) {
  const measurements = product.measurements || [];
  const preferredRows = measurements.filter((measurement) => (
    /size|fit|ขนาด/i.test(`${measurement.label?.en || ""} ${measurement.label?.th || ""}`)
  ));
  const sizeRows = (preferredRows.length ? preferredRows : measurements).slice(0, 2);
  if (!sizeRows.length) return null;
  return {
    en: sizeRows.map((row) => `${row.label.en}: ${row.value.en}`).join(" · "),
    th: sizeRows.map((row) => `${row.label.th}: ${row.value.th}`).join(" · ")
  };
}

function productOptionSummaryHTML(product) {
  const size = productSizeSummary(product);
  const colours = (product.colours || []).slice(0, 2);
  const more = Math.max(0, (product.colours || []).length - colours.length);
  return `<div class="tag-options">
    ${size ? `<p><span data-lang="en">${escapeHTML(size.en)}</span><span data-lang="th">${escapeHTML(size.th)}</span></p>` : ""}
    ${colours.length ? `<p class="tag-colours">
      <span data-lang="en">Colours: ${escapeHTML(colours.map((colour) => colour.en).join(", "))}${more ? ` +${more}` : ""}</span>
      <span data-lang="th">สี: ${escapeHTML(colours.map((colour) => colour.th).join(", "))}${more ? ` +${more}` : ""}</span>
    </p>` : ""}
  </div>`;
}

function productCardHTML(product) {
  const stock = STOCK_LABELS[product.stock];
  const photo = product.images?.length
    ? imageHTML(product.images[0], product)
    : placeholderPhoto();

  return `
    <article class="tag-card">
      <span class="tag-hole" aria-hidden="true"></span>
      <a class="tag-product-link" href="/product.html?code=${encodeURIComponent(product.code)}"
        data-aria-en="View details for ${escapeHTML(product.name.en)}"
        data-aria-th="ดูรายละเอียด ${escapeHTML(product.name.th)}">
      <span class="sr-only" data-lang="en">${escapeHTML(product.name.en)}</span>
      <span class="sr-only" data-lang="th">${escapeHTML(product.name.th)}</span>
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
      </a>
      ${productOptionSummaryHTML(product)}
      <button type="button" class="inquiry-add" data-add-inquiry="${escapeHTML(product.code)}">
        <span data-lang="en">Add to inquiry</span><span data-lang="th">เพิ่มในรายการสอบถาม</span>
      </button>
    </article>`;
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

function productSearchText(product) {
  const category = PRODUCT_CATEGORIES[product.category];
  return [
    product.code, product.name.en, product.name.th,
    product.description.en, product.description.th,
    category.en, category.th,
    ...(product.colours || []).flatMap((colour) => [colour.en, colour.th])
  ].join(" ").toLocaleLowerCase();
}

function initShopPage() {
  const grid = document.getElementById("productGrid");
  const categoryFilter = document.getElementById("categoryFilter");
  const categoryMenu = document.getElementById("categoryMenu");
  const categoryFilterLabel = document.getElementById("categoryFilterLabel");
  const categoryFilterSwatch = document.getElementById("categoryFilterSwatch");
  const search = document.getElementById("catalogueSearch");
  const stockFilter = document.getElementById("stockFilter");
  const sort = document.getElementById("sortProducts");
  const results = document.getElementById("catalogueResults");
  const resultsAnchor = document.getElementById("catalogue-results");
  const reset = document.getElementById("resetCatalogue");
  if (!grid || !categoryFilter || !categoryMenu || !categoryFilterLabel || !categoryFilterSwatch
    || !search || !stockFilter || !sort || !results || !resultsAnchor || !reset) return;

  const populatedCategories = Object.keys(PRODUCT_CATEGORIES)
    .filter((category) => PRODUCTS.some((product) => product.category === category));
  const filterData = [
    { key: "all", label: { en: "All", th: "ทั้งหมด" } },
    ...populatedCategories.map((key) => ({ key, label: PRODUCT_CATEGORIES[key] }))
  ];

  const params = new URLSearchParams(window.location.search);
  let activeCategory = params.get("category") || "all";
  if (!filterData.some((filter) => filter.key === activeCategory)) activeCategory = "all";

  categoryMenu.innerHTML = filterData.map(({ key, label }) => `
    <button type="button" class="category-option" role="option" tabindex="-1"
      data-category-option="${escapeHTML(key)}" aria-selected="false"
      data-aria-en="Choose ${escapeHTML(label.en)} category"
      data-aria-th="เลือกหมวดหมู่${escapeHTML(label.th)}">
      <span class="category-swatch swatch-${escapeHTML(key)}" aria-hidden="true"></span>
      <span data-lang="en">${escapeHTML(label.en)}</span>
      <span data-lang="th">${escapeHTML(label.th)}</span>
      <svg class="category-option-check" viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-9"/></svg>
    </button>`).join("");

  search.value = params.get("q") || "";
  stockFilter.value = ["available", "sold_out"].includes(params.get("stock")) ? params.get("stock") : "all";
  sort.value = ["name", "price_low", "price_high"].includes(params.get("sort")) ? params.get("sort") : "recommended";

  function updateCategoryControl() {
    const selected = filterData.find((filter) => filter.key === activeCategory) || filterData[0];
    categoryFilterLabel.innerHTML = `
      <span data-lang="en">Category: ${escapeHTML(selected.label.en)}</span>
      <span data-lang="th">หมวดหมู่: ${escapeHTML(selected.label.th)}</span>`;
    categoryFilterSwatch.className = `category-swatch swatch-${selected.key}`;
    categoryMenu.querySelectorAll("[data-category-option]").forEach((option) => {
      const active = option.dataset.categoryOption === activeCategory;
      option.classList.toggle("selected", active);
      option.setAttribute("aria-selected", active ? "true" : "false");
    });
  }

  function closeCategoryMenu({ restoreFocus = false } = {}) {
    categoryMenu.hidden = true;
    categoryFilter.setAttribute("aria-expanded", "false");
    if (restoreFocus) categoryFilter.focus();
  }

  function openCategoryMenu(preferredDirection = 1) {
    categoryMenu.hidden = false;
    categoryFilter.setAttribute("aria-expanded", "true");
    const options = [...categoryMenu.querySelectorAll("[data-category-option]")];
    const selectedIndex = options.findIndex((option) => option.dataset.categoryOption === activeCategory);
    const fallbackIndex = preferredDirection < 0 ? options.length - 1 : 0;
    options[selectedIndex >= 0 ? selectedIndex : fallbackIndex]?.focus();
  }

  function selectCategory(category, { restoreFocus = true } = {}) {
    if (!filterData.some((filter) => filter.key === category)) return;
    activeCategory = category;
    updateUrl();
    applyFilter();
    closeCategoryMenu({ restoreFocus });
  }

  function updateUrl() {
    const url = new URL(window.location);
    const values = {
      category: activeCategory === "all" ? "" : activeCategory,
      q: search.value.trim(),
      stock: stockFilter.value === "all" ? "" : stockFilter.value,
      sort: sort.value === "recommended" ? "" : sort.value
    };
    Object.entries(values).forEach(([key, value]) => {
      if (value) url.searchParams.set(key, value);
      else url.searchParams.delete(key);
    });
    window.history.replaceState({}, "", url);
  }

  function applyFilter() {
    let list = [...PRODUCTS];
    if (activeCategory !== "all") {
      list = list.filter((product) => product.category === activeCategory);
    }
    const query = search.value.trim().toLocaleLowerCase();
    if (query) list = list.filter((product) => productSearchText(product).includes(query));
    if (stockFilter.value === "available") list = list.filter((product) => product.stock !== "sold_out");
    if (stockFilter.value === "sold_out") list = list.filter((product) => product.stock === "sold_out");
    if (sort.value === "name") list.sort((a, b) => a.name[getLang()].localeCompare(b.name[getLang()]));
    if (sort.value === "price_low") list.sort((a, b) => a.price - b.price);
    if (sort.value === "price_high") list.sort((a, b) => b.price - a.price);
    renderGrid(grid, list);
    const countLabel = getLang() === "th" ? `พบ ${list.length} รายการ` : `${list.length} product${list.length === 1 ? "" : "s"}`;
    results.textContent = countLabel;
    const hasFilters = activeCategory !== "all" || query || stockFilter.value !== "all" || sort.value !== "recommended";
    reset.hidden = !hasFilters;
    updateCategoryControl();
  }

  categoryFilter.addEventListener("click", () => {
    if (categoryMenu.hidden) openCategoryMenu();
    else closeCategoryMenu();
  });
  categoryFilter.addEventListener("keydown", (event) => {
    if (!["ArrowDown", "ArrowUp", "Enter", " "].includes(event.key)) return;
    event.preventDefault();
    if (categoryMenu.hidden) openCategoryMenu(event.key === "ArrowUp" ? -1 : 1);
  });
  categoryMenu.addEventListener("click", (event) => {
    const option = event.target.closest("[data-category-option]");
    if (option) selectCategory(option.dataset.categoryOption);
  });
  categoryMenu.addEventListener("keydown", (event) => {
    const option = event.target.closest("[data-category-option]");
    if (!option) return;
    const options = [...categoryMenu.querySelectorAll("[data-category-option]")];
    const index = options.indexOf(option);
    if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      let nextIndex = index;
      if (event.key === "ArrowDown") nextIndex = (index + 1) % options.length;
      if (event.key === "ArrowUp") nextIndex = (index - 1 + options.length) % options.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = options.length - 1;
      options[nextIndex].focus();
    }
    if (["Enter", " "].includes(event.key)) {
      event.preventDefault();
      selectCategory(option.dataset.categoryOption);
    }
    if (event.key === "Escape") {
      event.preventDefault();
      closeCategoryMenu({ restoreFocus: true });
    }
  });
  document.addEventListener("pointerdown", (event) => {
    if (!categoryMenu.hidden && !event.target.closest(".category-picker")) closeCategoryMenu();
  });

  let searchTimer;
  search.addEventListener("input", () => {
    window.clearTimeout(searchTimer);
    searchTimer = window.setTimeout(() => { updateUrl(); applyFilter(); }, 120);
  });
  [stockFilter, sort].forEach((control) => control.addEventListener("change", () => {
    updateUrl();
    applyFilter();
  }));
  reset.addEventListener("click", () => {
    activeCategory = "all";
    search.value = "";
    stockFilter.value = "all";
    sort.value = "recommended";
    updateUrl();
    applyFilter();
    search.focus();
  });
  document.addEventListener("milly:language", applyFilter);
  grid.addEventListener("click", (event) => {
    if (!event.target.closest(".tag-product-link")) return;
    storageSet(sessionStorage, "milly_shop_state", JSON.stringify({
      url: window.location.href,
      scrollY: window.scrollY
    }));
  });

  const savedState = storageGet(sessionStorage, "milly_shop_state");
  let restoredScroll = false;
  if (savedState) {
    try {
      const state = JSON.parse(savedState);
      if (state.url === window.location.href) {
        restoredScroll = true;
        requestAnimationFrame(() => window.scrollTo(0, state.scrollY || 0));
      }
    } catch { /* Ignore damaged session state. */ }
    storageSet(sessionStorage, "milly_shop_state", "");
  }

  applyFilter();
  setLang(getLang());
  if (!restoredScroll && activeCategory !== "all" && window.location.hash === "#catalogue-results") {
    requestAnimationFrame(() => requestAnimationFrame(() => {
      resultsAnchor.scrollIntoView({ block: "start" });
    }));
  }
}

function homeShowcaseProducts() {
  return Object.keys(PRODUCT_CATEGORIES).map((category) => (
    PRODUCTS.find((product) => (
      product.category === category && product.home_showcase && product.images?.length
    )) || PRODUCTS.find((product) => product.category === category && product.images?.length)
  )).filter(Boolean);
}

const COLLECTION_COPY = {
  dresses: {
    en: "Fluid shapes and vivid prints made for unhurried warm days.",
    th: "เดรสทรงพลิ้วและลายสีสดใส สำหรับวันสบาย ๆ ในอากาศอบอุ่น"
  },
  kaftans: {
    en: "Airy layers with an easy drape for travel and everyday comfort.",
    th: "เสื้อคลุมเนื้อบางเบา ทิ้งตัวสวย เหมาะกับการเดินทางและวันสบาย ๆ"
  },
  tops: {
    en: "Relaxed silhouettes and expressive prints for simple styling.",
    th: "เสื้อทรงสบายพร้อมลายโดดเด่น จับคู่ได้ง่ายในทุกวัน"
  },
  sets: {
    en: "Coordinated pieces that make getting dressed feel effortless.",
    th: "ชุดเข้าคู่ที่ช่วยให้การแต่งตัวสวยครบลุคเป็นเรื่องง่าย"
  },
  bags: {
    en: "Practical textile bags with colour, texture and character.",
    th: "กระเป๋าผ้าใช้งานสะดวก เติมสีสัน พื้นผิว และเอกลักษณ์ให้ทุกลุค"
  },
  pants: {
    en: "Easy silhouettes designed for movement and all-day comfort.",
    th: "กางเกงทรงสบาย ออกแบบให้เคลื่อนไหวคล่องตัวได้ตลอดวัน"
  },
  skirts: {
    en: "Flowing lengths and patchwork colour that move with you.",
    th: "กระโปรงทรงพลิ้วและสีสันงานผ้าต่อที่เคลื่อนไหวไปพร้อมกับคุณ"
  }
};

function collectionMediaHTML(product, image, eager, reduceMotion) {
  const src = assetUrl(image.src);
  const altEn = image.alt?.en || product.name.en;
  const altTh = image.alt?.th || product.name.th;
  const heroVideo = product.home_showcase?.hero_video;
  const foreground = heroVideo && !reduceMotion
    ? `<video class="collection-feature" autoplay muted loop playsinline preload="metadata"
        poster="${escapeHTML(src)}" aria-hidden="true">
        <source src="${escapeHTML(assetUrl(heroVideo))}">
      </video>`
    : `<img class="collection-feature"
        src="${escapeHTML(src)}"
        alt="${escapeHTML(getLang() === "th" ? altTh : altEn)}"
        data-alt-en="${escapeHTML(altEn)}"
        data-alt-th="${escapeHTML(altTh)}"
        loading="${eager ? "eager" : "lazy"}"
        decoding="async"${eager ? ' fetchpriority="high"' : ""}>`;
  return `<div class="collection-media">
    <img class="collection-backdrop" src="${escapeHTML(src)}" alt="" aria-hidden="true"
      loading="${eager ? "eager" : "lazy"}" decoding="async">
    ${foreground}
  </div>`;
}

function initHomeShowcase() {
  const root = document.getElementById("homeShowcase");
  if (!root) return;

  const stage = root.querySelector(".hero-showcase-stage");
  const dots = root.querySelector(".hero-showcase-dots");
  const products = homeShowcaseProducts();
  if (!stage || !dots || !products.length) return;

  document.documentElement.classList.add("home-scroll-page");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  stage.innerHTML = products.map((product, index) => {
    const requestedImage = Number(product.home_showcase?.image_index) || 0;
    const image = product.images[requestedImage] || product.images[0];
    const category = PRODUCT_CATEGORIES[product.category];
    const description = COLLECTION_COPY[product.category];
    const heading = index === 0 ? "h1" : "h2";
    return `
      <section class="collection-panel" id="collection-${escapeHTML(product.category)}"
        data-collection-index="${index}" data-collection-category="${escapeHTML(product.category)}"
        aria-labelledby="collection-title-${escapeHTML(product.category)}">
      <span class="collection-snap-point" aria-hidden="true"></span>
      <a class="hero-showcase-link"
        href="/shop.html?category=${encodeURIComponent(product.category)}#catalogue-results"
        data-aria-en="Browse the ${escapeHTML(category.en)} collection"
        data-aria-th="ดูคอลเลกชัน${escapeHTML(category.th)}">
        <div class="hero-showcase-media">
          ${collectionMediaHTML(product, image, index === 0, reduceMotion.matches)}
          <div class="hero-showcase-caption">
            <span class="hero-showcase-category" data-lang="en">Milly's collection</span>
            <span class="hero-showcase-category" data-lang="th">คอลเลกชัน Milly's</span>
            <${heading} class="hero-showcase-name" id="collection-title-${escapeHTML(product.category)}" data-lang="en">${escapeHTML(category.en)}</${heading}>
            <${heading} class="hero-showcase-name" data-lang="th">${escapeHTML(category.th)}</${heading}>
            <p class="hero-showcase-description" data-lang="en">${escapeHTML(description.en)}</p>
            <p class="hero-showcase-description" data-lang="th">${escapeHTML(description.th)}</p>
            <span class="hero-collection-link">
              <span data-lang="en">Explore collection</span>
              <span data-lang="th">ดูคอลเลกชัน</span>
              <span aria-hidden="true">→</span>
            </span>
          </div>
          <span class="hero-counter" aria-hidden="true">${String(index + 1).padStart(2, "0")} / ${String(products.length).padStart(2, "0")}</span>
        </div>
      </a>
      ${index === 0 ? `<p class="hero-scroll-hint">
        <span data-lang="en">Scroll to explore</span>
        <span data-lang="th">เลื่อนเพื่อดูคอลเลกชัน</span>
        <span class="hero-scroll-line" aria-hidden="true"></span>
      </p>` : ""}
      </section>`;
  }).join("");

  dots.innerHTML = products.map((product, index) => {
    const category = PRODUCT_CATEGORIES[product.category];
    return `<button type="button" class="hero-showcase-dot" data-home-index="${index}"
      data-aria-en="Go to ${escapeHTML(category.en)} collection"
      data-aria-th="ไปยังคอลเลกชัน${escapeHTML(category.th)}">
      <span class="sr-only" data-lang="en">Go to ${escapeHTML(category.en)} collection</span>
      <span class="sr-only" data-lang="th">ไปยังคอลเลกชัน${escapeHTML(category.th)}</span>
    </button>`;
  }).join("");

  const panels = [...stage.querySelectorAll(".collection-panel")];
  const dotButtons = [...dots.querySelectorAll(".hero-showcase-dot")];
  const visibility = new Map(panels.map((panel) => [panel, 0]));
  let activeIndex = -1;

  function setActive(index) {
    if (index === activeIndex || index < 0 || index >= panels.length) return;
    activeIndex = index;
    dotButtons.forEach((button, buttonIndex) => {
      const active = buttonIndex === activeIndex;
      button.classList.toggle("active", active);
      if (active) button.setAttribute("aria-current", "true");
      else button.removeAttribute("aria-current");
    });
    const header = document.querySelector(".site-header");
    if (header) header.dataset.collection = products[activeIndex].category;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => visibility.set(entry.target, entry.intersectionRatio));
    let mostVisibleIndex = activeIndex;
    let mostVisibleRatio = -1;
    panels.forEach((panel, index) => {
      const ratio = visibility.get(panel) || 0;
      if (ratio > mostVisibleRatio) {
        mostVisibleIndex = index;
        mostVisibleRatio = ratio;
      }
    });
    setActive(mostVisibleIndex);
  }, { threshold: [0, 0.25, 0.5, 0.65, 0.85, 1] });

  panels.forEach((panel) => observer.observe(panel));
  dots.addEventListener("click", (event) => {
    const button = event.target.closest("[data-home-index]");
    if (!button) return;
    const index = Number(button.dataset.homeIndex);
    panels[index]?.scrollIntoView({
      behavior: reduceMotion.matches ? "auto" : "smooth",
      block: "start"
    });
  });

  setActive(0);
  setLang(getLang());
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

function variantMatrixHTML(product) {
  if (!Array.isArray(product.variants) || !product.variants.length) return "";
  const sizes = [...new Set(product.variants.map((variant) => variant.size?.en).filter(Boolean))];
  const colours = [...new Map(product.variants
    .filter((variant) => variant.colour?.en)
    .map((variant) => [variant.colour.en, variant.colour])).values()];
  if (!sizes.length || !colours.length) return "";
  return `<section class="variant-matrix" aria-labelledby="variant-heading">
    <h2 id="variant-heading">${bilingualPair({ en: "Available combinations", th: "ตัวเลือกที่มี" })}</h2>
    <div class="table-scroll"><table class="pd-table">
      <thead><tr><th scope="col">${bilingualPair({ en: "Colour", th: "สี" })}</th>${sizes.map((size) => `<th scope="col">${escapeHTML(size)}</th>`).join("")}</tr></thead>
      <tbody>${colours.map((colour) => `<tr><th scope="row">${bilingualPair(colour)}</th>${sizes.map((size) => {
        const variant = product.variants.find((item) => item.size?.en === size && item.colour?.en === colour.en);
        const available = variant?.available === true;
        return `<td><span aria-label="${available ? "Available" : "Unavailable"}">${available ? "✓" : "—"}</span></td>`;
      }).join("")}</tr>`).join("")}</tbody>
    </table></div>
  </section>`;
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
      <p class="wholesale-note product-wholesale-note">
        <span data-lang="en">* Please reach out directly to discuss wholesale / bulk pricing.</span>
        <span data-lang="th">* โปรดติดต่อเราโดยตรงเพื่อสอบถามราคาขายส่ง / ราคาสำหรับการสั่งซื้อจำนวนมาก</span>
      </p>
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

      ${variantMatrixHTML(product)}

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

      <button type="button" class="btn inquiry-product-btn" data-add-inquiry="${escapeHTML(product.code)}">
        <span data-lang="en">Add to inquiry</span><span data-lang="th">เพิ่มในรายการสอบถาม</span>
      </button>

      ${productOrderButtons(product)}
    </div>`;

  setLang(getLang());
  initProductGallery(product);
}

function globalSearchResultHTML(product) {
  const category = PRODUCT_CATEGORIES[product.category];
  const image = product.images?.[0];
  return `<a class="global-search-result" href="/product.html?code=${encodeURIComponent(product.code)}">
    <span class="global-search-thumb">
      ${image ? imageHTML(image, product) : placeholderPhoto()}
    </span>
    <span class="global-search-result-copy">
      <span class="global-search-category">${bilingualPair(category)} · ${escapeHTML(product.code)}</span>
      <strong data-lang="en">${escapeHTML(product.name.en)}</strong>
      <strong data-lang="th">${escapeHTML(product.name.th)}</strong>
    </span>
    <span class="global-search-arrow" aria-hidden="true">→</span>
  </a>`;
}

function initGlobalSearch() {
  if (document.body.classList.contains("print-page")) return;

  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.id = "globalSearchTrigger";
  trigger.className = "global-search-trigger";
  trigger.dataset.ariaEn = "Search the catalogue";
  trigger.dataset.ariaTh = "ค้นหาในแคตตาล็อก";
  trigger.innerHTML = `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="10.75" cy="10.75" r="6.75"></circle><path d="m16 16 4 4"></path>
  </svg><span class="sr-only" data-lang="en">Search</span><span class="sr-only" data-lang="th">ค้นหา</span>`;
  document.body.appendChild(trigger);

  const dialog = document.createElement("dialog");
  dialog.id = "globalSearchDialog";
  dialog.className = "global-search-dialog";
  dialog.innerHTML = `<div class="global-search-panel">
    <header class="global-search-header">
      <div>
        <p class="eyebrow" data-lang="en">All ${PRODUCTS.length} products</p>
        <p class="eyebrow" data-lang="th">สินค้าทั้งหมด ${PRODUCTS.length} รายการ</p>
        <h2 data-lang="en">Search the catalogue</h2>
        <h2 data-lang="th">ค้นหาในแคตตาล็อก</h2>
      </div>
      <button type="button" class="global-search-close" data-close-search
        data-aria-en="Close search" data-aria-th="ปิดการค้นหา">×</button>
    </header>
    <div class="global-search-input-wrap">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="10.75" cy="10.75" r="6.75"></circle><path d="m16 16 4 4"></path></svg>
      <label class="sr-only" for="globalSearchInput"><span data-lang="en">Search products</span><span data-lang="th">ค้นหาสินค้า</span></label>
      <input id="globalSearchInput" type="search" autocomplete="off"
        data-placeholder-en="Search name, code, category or colour…"
        data-placeholder-th="ค้นหาชื่อ รหัส หมวดหมู่ หรือสี…">
    </div>
    <p class="global-search-status" id="globalSearchStatus" aria-live="polite"></p>
    <div class="global-search-results" id="globalSearchResults"></div>
  </div>`;
  document.body.appendChild(dialog);

  const input = dialog.querySelector("#globalSearchInput");
  const status = dialog.querySelector("#globalSearchStatus");
  const results = dialog.querySelector("#globalSearchResults");

  function render() {
    const query = input.value.trim().toLocaleLowerCase();
    if (!query) {
      status.textContent = getLang() === "th" ? "เลือกหมวดหมู่หรือพิมพ์เพื่อค้นหา" : "Choose a collection or start typing";
      results.innerHTML = `<div class="global-search-categories">
        ${Object.entries(PRODUCT_CATEGORIES).map(([key, category]) => `
          <a href="/shop.html?category=${encodeURIComponent(key)}">
            ${bilingualPair(category)}<span aria-hidden="true">→</span>
          </a>`).join("")}
      </div>`;
      setLang(getLang());
      return;
    }

    const matches = PRODUCTS.filter((product) => productSearchText(product).includes(query));
    status.textContent = getLang() === "th"
      ? `พบ ${matches.length} รายการ`
      : `${matches.length} result${matches.length === 1 ? "" : "s"}`;
    results.innerHTML = matches.length
      ? `${matches.map(globalSearchResultHTML).join("")}
        <a class="global-search-all" href="/shop.html?q=${encodeURIComponent(input.value.trim())}">
          <span data-lang="en">View results in the full catalogue</span>
          <span data-lang="th">ดูผลลัพธ์ในแคตตาล็อกทั้งหมด</span>
          <span aria-hidden="true">→</span>
        </a>`
      : `<div class="global-search-empty">
          <p data-lang="en">No products match “${escapeHTML(input.value.trim())}”. Try another name, category, code or colour.</p>
          <p data-lang="th">ไม่พบสินค้าที่ตรงกับ “${escapeHTML(input.value.trim())}” ลองค้นหาด้วยชื่อ หมวดหมู่ รหัส หรือสีอื่น</p>
        </div>`;
    setLang(getLang());
  }

  trigger.addEventListener("click", () => {
    render();
    dialog.showModal();
    requestAnimationFrame(() => input.focus());
  });
  dialog.querySelector("[data-close-search]").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      dialog.close();
    }
  });
  dialog.addEventListener("click", (event) => {
    if (event.target.closest("a")) dialog.close();
  });
  dialog.addEventListener("close", () => trigger.focus());
  input.addEventListener("input", render);
  document.addEventListener("milly:language", () => {
    if (dialog.open) render();
  });
  setLang(getLang());
}

let inquiryMemory = [];

function getInquiry() {
  const raw = storageGet(localStorage, INQUIRY_STORAGE_KEY);
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        inquiryMemory = parsed.filter((item) => PRODUCTS.some((product) => product.code === item.code));
      }
    } catch { /* Continue with the in-memory copy. */ }
  }
  return inquiryMemory;
}

function saveInquiry(items) {
  inquiryMemory = items;
  storageSet(localStorage, INQUIRY_STORAGE_KEY, JSON.stringify(items));
  updateInquiryUI();
}

function inquiryProduct(code) {
  return PRODUCTS.find((product) => product.code === code);
}

function updateInquiryUI() {
  const items = getInquiry();
  document.querySelectorAll("[data-inquiry-count]").forEach((count) => {
    count.textContent = items.length;
  });
  document.querySelectorAll("[data-add-inquiry]").forEach((button) => {
    const added = items.some((item) => item.code === button.dataset.addInquiry);
    button.classList.toggle("added", added);
    button.setAttribute("aria-pressed", added ? "true" : "false");
  });
}

function inquiryFieldsHTML(item, product) {
  const lang = getLang();
  const colourOptions = (product.colours || []).map((colour) => `
    <option value="${escapeHTML(colour.en)}"${item.colour === colour.en ? " selected" : ""}>
      ${escapeHTML(lang === "th" ? colour.th : colour.en)}
    </option>`).join("");
  return `<div class="inquiry-fields">
    <label>
      <span data-lang="en">Quantity</span><span data-lang="th">จำนวน</span>
      <input type="number" inputmode="numeric" min="1" max="999" value="${Math.max(1, Number(item.quantity) || 1)}" data-inquiry-field="quantity">
    </label>
    <label>
      <span data-lang="en">Desired size</span><span data-lang="th">ขนาดที่ต้องการ</span>
      <input type="text" maxlength="50" value="${escapeHTML(item.size || "")}" data-inquiry-field="size"
        data-placeholder-en="Optional preference" data-placeholder-th="ระบุได้ถ้าต้องการ">
    </label>
    <label>
      <span data-lang="en">Desired colour</span><span data-lang="th">สีที่ต้องการ</span>
      <select data-inquiry-field="colour">
        <option value="">${lang === "th" ? "ยังไม่ระบุ" : "No preference yet"}</option>
        ${colourOptions}
      </select>
    </label>
    <label class="inquiry-note-field">
      <span data-lang="en">Note</span><span data-lang="th">หมายเหตุ</span>
      <textarea rows="2" maxlength="300" data-inquiry-field="note"
        data-placeholder-en="Optional question or detail" data-placeholder-th="คำถามหรือรายละเอียดเพิ่มเติม">${escapeHTML(item.note || "")}</textarea>
    </label>
  </div>`;
}

function inquiryItemHTML(item) {
  const product = inquiryProduct(item.code);
  if (!product) return "";
  const image = product.images?.[0];
  const category = PRODUCT_CATEGORIES[product.category];
  return `<article class="inquiry-item" data-inquiry-code="${escapeHTML(product.code)}">
    <div class="inquiry-item-head">
      <a class="inquiry-thumb" href="/product.html?code=${encodeURIComponent(product.code)}">
        ${image ? imageHTML(image, product) : placeholderPhoto()}
      </a>
      <div>
        <p class="inquiry-category">${bilingualPair(category)}</p>
        <a class="inquiry-name" href="/product.html?code=${encodeURIComponent(product.code)}">
          <span data-lang="en">${escapeHTML(product.name.en)}</span>
          <span data-lang="th">${escapeHTML(product.name.th)}</span>
        </a>
        <p class="inquiry-code">${escapeHTML(product.code)}</p>
      </div>
      <button type="button" class="inquiry-remove" data-remove-inquiry="${escapeHTML(product.code)}"
        data-aria-en="Remove ${escapeHTML(product.name.en)}" data-aria-th="ลบ ${escapeHTML(product.name.th)}">×</button>
    </div>
    ${inquiryFieldsHTML(item, product)}
  </article>`;
}

function inquiryMessage(items) {
  const lang = getLang();
  const intro = lang === "th"
    ? "สวัสดี Milly's\n\nฉันต้องการสอบถามเกี่ยวกับสินค้าต่อไปนี้:"
    : "Hello Milly's,\n\nI would like to inquire about the following products:";
  const lines = items.map((item, index) => {
    const product = inquiryProduct(item.code);
    if (!product) return "";
    const name = product.name[lang];
    const details = [
      `${lang === "th" ? "จำนวน" : "Quantity"}: ${Math.max(1, Number(item.quantity) || 1)}`,
      item.size ? `${lang === "th" ? "ขนาดที่ต้องการ" : "Desired size"}: ${item.size}` : "",
      item.colour ? `${lang === "th" ? "สีที่ต้องการ" : "Desired colour"}: ${item.colour}` : "",
      item.note ? `${lang === "th" ? "หมายเหตุ" : "Note"}: ${item.note}` : "",
      `${lang === "th" ? "สินค้า" : "Product"}: ${SITE_CONFIG.site_url}/product.html?code=${encodeURIComponent(product.code)}`
    ].filter(Boolean);
    return `${index + 1}. ${name} (${product.code})\n${details.map((detail) => `   ${detail}`).join("\n")}`;
  }).filter(Boolean);
  const ending = lang === "th"
    ? "\n\nโปรดยืนยันตัวเลือก ราคา และความพร้อมของสินค้า ขอบคุณค่ะ/ครับ"
    : "\n\nPlease confirm the options, price, and availability. Thank you.";
  return `${intro}\n\n${lines.join("\n\n")}${ending}`;
}

function renderInquiryDrawer() {
  const body = document.getElementById("inquiryBody");
  const clear = document.getElementById("clearInquiry");
  const email = document.getElementById("emailInquiry");
  const copy = document.getElementById("copyInquiry");
  const print = document.getElementById("printInquiry");
  if (!body || !clear || !email || !copy || !print) return;
  const items = getInquiry();
  body.innerHTML = items.length
    ? items.map(inquiryItemHTML).join("")
    : `<div class="inquiry-empty">
      <p data-lang="en">Your inquiry is empty.</p><p data-lang="th">ยังไม่มีสินค้าในรายการสอบถาม</p>
      <a class="btn btn-outline" href="/shop.html"><span data-lang="en">Browse catalogue</span><span data-lang="th">ดูสินค้า</span></a>
    </div>`;
  [clear, email, copy, print].forEach((control) => { control.disabled = !items.length; });
  print.setAttribute("aria-disabled", items.length ? "false" : "true");
  updateInquiryUI();
  setLang(getLang());
}

function showInquiryNotice(en, th) {
  const notice = document.getElementById("inquiryNotice");
  if (!notice) return;
  notice.textContent = getLang() === "th" ? th : en;
  window.clearTimeout(showInquiryNotice.timer);
  showInquiryNotice.timer = window.setTimeout(() => { notice.textContent = ""; }, 4000);
}

async function copyInquiryText() {
  const text = inquiryMessage(getInquiry());
  let copied = false;
  try {
    await navigator.clipboard.writeText(text);
    copied = true;
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    copied = document.execCommand("copy");
    textarea.remove();
  }
  showInquiryNotice(
    copied ? "Inquiry copied." : "Could not copy automatically. Please select and copy your notes.",
    copied ? "คัดลอกรายการสอบถามแล้ว" : "ไม่สามารถคัดลอกอัตโนมัติได้ กรุณาเลือกและคัดลอกข้อความ"
  );
}

function initInquiry() {
  const dialog = document.createElement("dialog");
  dialog.id = "inquiryDialog";
  dialog.className = "inquiry-dialog";
  dialog.innerHTML = `<div class="inquiry-drawer">
    <header class="inquiry-header">
      <div><p class="eyebrow" data-lang="en">Saved on this device</p><p class="eyebrow" data-lang="th">บันทึกบนอุปกรณ์นี้</p>
      <h2 data-lang="en">Inquiry basket</h2><h2 data-lang="th">รายการสอบถาม</h2></div>
      <button type="button" class="inquiry-close" data-close-inquiry data-aria-en="Close inquiry" data-aria-th="ปิดรายการสอบถาม">×</button>
    </header>
    <div class="inquiry-body" id="inquiryBody"></div>
    <footer class="inquiry-footer">
      <p class="inquiry-disclaimer" data-lang="en">This is a request for information—not a purchase, reservation, or automatic submission. Milly's will confirm options, availability, and price.</p>
      <p class="inquiry-disclaimer" data-lang="th">นี่คือคำขอข้อมูล ไม่ใช่การสั่งซื้อ การจอง หรือการส่งอัตโนมัติ Milly's จะยืนยันตัวเลือก สินค้า และราคาอีกครั้ง</p>
      <p class="inquiry-notice" id="inquiryNotice" aria-live="polite"></p>
      <div class="inquiry-actions">
        <button type="button" class="btn" id="emailInquiry"><span data-lang="en">Open email draft</span><span data-lang="th">เปิดอีเมลฉบับร่าง</span></button>
        <button type="button" class="btn btn-outline" id="copyInquiry"><span data-lang="en">Copy inquiry</span><span data-lang="th">คัดลอกรายการ</span></button>
        <a class="btn btn-outline" id="printInquiry" href="/catalogue-print.html" target="_blank"><span data-lang="en">Print / save PDF</span><span data-lang="th">พิมพ์ / บันทึก PDF</span></a>
        <button type="button" class="text-button" id="clearInquiry"><span data-lang="en">Clear inquiry</span><span data-lang="th">ล้างรายการ</span></button>
      </div>
    </footer>
  </div>`;
  document.body.appendChild(dialog);

  document.addEventListener("click", (event) => {
    const add = event.target.closest("[data-add-inquiry]");
    if (add) {
      const code = add.dataset.addInquiry;
      const items = getInquiry();
      if (!items.some((item) => item.code === code)) {
        saveInquiry([...items, { code, quantity: 1, size: "", colour: "", note: "" }]);
      }
      renderInquiryDrawer();
      dialog.showModal();
      dialog.querySelector("[data-close-inquiry]").focus();
      return;
    }
    if (event.target.closest("[data-open-inquiry]")) {
      renderInquiryDrawer();
      dialog.showModal();
      dialog.querySelector("[data-close-inquiry]").focus();
    }
    if (event.target.closest("[data-close-inquiry]")) dialog.close();
    const remove = event.target.closest("[data-remove-inquiry]");
    if (remove) {
      saveInquiry(getInquiry().filter((item) => item.code !== remove.dataset.removeInquiry));
      renderInquiryDrawer();
    }
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("input", (event) => {
    const field = event.target.dataset.inquiryField;
    const itemRoot = event.target.closest("[data-inquiry-code]");
    if (!field || !itemRoot) return;
    const items = getInquiry();
    const item = items.find((entry) => entry.code === itemRoot.dataset.inquiryCode);
    if (!item) return;
    item[field] = field === "quantity" ? Math.max(1, Number(event.target.value) || 1) : event.target.value;
    saveInquiry(items);
  });
  document.getElementById("clearInquiry").addEventListener("click", () => {
    saveInquiry([]);
    renderInquiryDrawer();
  });
  document.getElementById("copyInquiry").addEventListener("click", copyInquiryText);
  document.getElementById("emailInquiry").addEventListener("click", () => {
    const subject = encodeURIComponent("Product Inquiry — Milly's");
    const body = encodeURIComponent(inquiryMessage(getInquiry()));
    window.location.href = `${SITE_CONFIG.contact.email_href}?subject=${subject}&body=${body}`;
  });
  document.addEventListener("milly:language", () => {
    if (dialog.open) renderInquiryDrawer();
  });
  updateInquiryUI();
}

function printMeasurementHTML(product) {
  return (product.measurements || []).map((measurement) => `
    <tr><th>${bilingualPair(measurement.label)}</th><td>${bilingualPair(measurement.value)}</td></tr>`).join("");
}

function initPrintCatalogue() {
  const root = document.getElementById("printCatalogue");
  if (!root) return;
  const items = getInquiry();
  root.innerHTML = items.length ? items.map((item) => {
    const product = inquiryProduct(item.code);
    if (!product) return "";
    const category = PRODUCT_CATEGORIES[product.category];
    const image = product.images?.[0];
    return `<article class="print-product">
      <div class="print-photo">${image ? imageHTML(image, product, { eager: true }) : placeholderPhoto()}</div>
      <div class="print-copy">
        <p class="print-category">${bilingualPair(category)} · ${escapeHTML(product.code)}</p>
        <h2 data-lang="en">${escapeHTML(product.name.en)}</h2><h2 data-lang="th">${escapeHTML(product.name.th)}</h2>
        <p><strong>${bilingualPair({ en: "Colours", th: "สี" })}:</strong> ${product.colours.map(bilingualPair).join(", ")}</p>
        <table class="print-table"><tbody>${printMeasurementHTML(product)}</tbody></table>
        <p><strong>${bilingualPair({ en: "Selected inquiry", th: "รายการที่เลือก" })}:</strong>
          ${escapeHTML([`×${item.quantity || 1}`, item.size, item.colour, item.note].filter(Boolean).join(" · "))}</p>
        <p class="print-url">${escapeHTML(`${SITE_CONFIG.site_url}/product.html?code=${product.code}`)}</p>
      </div>
    </article>`;
  }).join("") : `<div class="print-empty"><p data-lang="en">No products are selected. Add products to your inquiry first.</p><p data-lang="th">ยังไม่ได้เลือกสินค้า กรุณาเพิ่มสินค้าในรายการสอบถามก่อน</p><a href="/shop.html">Catalogue / สินค้า</a></div>`;
  document.getElementById("printCount").textContent = items.length;
  document.getElementById("printButton").disabled = !items.length;
  document.getElementById("printButton").addEventListener("click", () => window.print());
  setLang(getLang());
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

function initHeaderAppearance() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const update = () => header.classList.toggle("scrolled", window.scrollY > 24);
  update();
  window.addEventListener("scroll", update, { passive: true });
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
  initHeaderAppearance();
  setActiveNavLink();
  updateInquiryUI();
}

document.addEventListener("DOMContentLoaded", async () => {
  initSEO();
  initAnalytics();
  const layoutPromise = initLayout();
  await loadPublishedCatalogue();
  initHomeShowcase();
  initShopPage();
  initProductPage();
  initContactForm();
  initGlobalSearch();
  initInquiry();
  initPrintCatalogue();

  await layoutPromise;
  setLang(getLang());
});
