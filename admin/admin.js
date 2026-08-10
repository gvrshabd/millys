const state = {
  session: null,
  products: [],
  summary: null,
  selected: new Set(),
  current: null,
  images: [],
  dirty: false,
  loading: false,
  searchTimer: null,
  dragImageIndex: null,
  pendingMediaDeletes: new Set(),
  importPayload: null,
  importPreview: null
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const form = $("#productForm");

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function friendlyStock(stock) {
  return { in_stock: "In stock", low_stock: "Low stock", sold_out: "Sold out" }[stock] || stock;
}

function friendlyCategory(category) {
  return category ? category[0].toUpperCase() + category.slice(1) : "";
}

function assetUrl(src) {
  if (!src) return "/favicon.svg";
  if (/^(?:https?:)?\/\//i.test(src) || src.startsWith("/")) return src;
  return `/images/${src.replace(/^images\//, "")}`;
}

async function api(path, options = {}) {
  const method = options.method || "GET";
  const headers = new Headers(options.headers || {});
  if (!["GET", "HEAD"].includes(method)) headers.set("X-Millys-CSRF", state.session?.csrf || "");
  if (options.json !== undefined) {
    headers.set("Content-Type", "application/json");
    options.body = JSON.stringify(options.json);
  }
  const response = await fetch(`/admin/api/${path}`, {
    ...options,
    method,
    headers,
    credentials: "same-origin"
  });
  const type = response.headers.get("Content-Type") || "";
  const payload = type.includes("application/json") ? await response.json() : await response.text();
  if (!response.ok) {
    const error = new Error(payload?.error?.message || `Request failed (${response.status}).`);
    error.status = response.status;
    error.code = payload?.error?.code;
    error.fields = payload?.error?.fields;
    throw error;
  }
  return { payload, response };
}

function setBusy(value) {
  state.loading = value;
  $$("button", $("#productEditor")).forEach((button) => { button.disabled = value; });
}

function showToast(message, { error = false, undo = null } = {}) {
  const toast = $("#adminToast");
  toast.className = `admin-toast${error ? " error" : ""}`;
  toast.replaceChildren(document.createTextNode(message));
  if (undo) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "admin-text-button toast-undo";
    button.textContent = "Undo";
    button.addEventListener("click", async () => {
      button.disabled = true;
      try { await undo(); } catch (failure) { showToast(failure.message, { error: true }); }
    }, { once: true });
    toast.appendChild(button);
  }
  toast.hidden = false;
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => { toast.hidden = true; }, undo ? 9000 : 4500);
}

function showEditorError(message = "") {
  const target = $("#editorError");
  target.textContent = message;
  target.hidden = !message;
  if (message) target.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function statCard(label, count) {
  return `<div class="stat-card"><strong>${count}</strong><span>${escapeHTML(label)}</span></div>`;
}

function renderStats() {
  const products = state.products;
  const summary = state.summary || {
    published: products.filter((item) => item.state === "published").length,
    drafts: products.filter((item) => item.state === "draft").length,
    low_stock: products.filter((item) => item.stock === "low_stock").length,
    sold_out: products.filter((item) => item.stock === "sold_out").length,
    archived: products.filter((item) => item.state === "archived").length
  };
  $("#adminStats").innerHTML = [
    statCard("Published", summary.published),
    statCard("Draft only", summary.drafts),
    statCard("Low stock", summary.low_stock),
    statCard("Sold out", summary.sold_out),
    statCard("Archived", summary.archived)
  ].join("");
}

function stockSelect(product) {
  return `<select class="row-stock" data-stock-id="${escapeHTML(product.id)}" aria-label="Stock for ${escapeHTML(product.name_en || product.code)}">
    <option value="in_stock"${product.stock === "in_stock" ? " selected" : ""}>In stock</option>
    <option value="low_stock"${product.stock === "low_stock" ? " selected" : ""}>Low stock</option>
    <option value="sold_out"${product.stock === "sold_out" ? " selected" : ""}>Sold out</option>
  </select>`;
}

function renderProducts() {
  renderStats();
  const target = $("#adminProductList");
  $("#adminProductCount").textContent = `${state.products.length} product${state.products.length === 1 ? "" : "s"}`;
  if (!state.products.length) {
    target.innerHTML = `<div class="empty-admin">No products match these filters.</div>`;
    return;
  }
  target.innerHTML = state.products.map((product) => `
    <article class="admin-product-row" data-product-id="${escapeHTML(product.id)}">
      <input class="product-select" type="checkbox" aria-label="Select ${escapeHTML(product.name_en || product.code)}"
        ${state.selected.has(product.id) ? "checked" : ""}>
      <img class="admin-product-thumb" src="${escapeHTML(assetUrl(product.thumbnail))}" alt="" loading="lazy">
      <div class="admin-product-summary">
        <h3>${escapeHTML(product.name_en || "Unnamed draft")}</h3>
        <div class="admin-product-meta">
          <span>${escapeHTML(product.code)}</span>
          <span>${escapeHTML(friendlyCategory(product.category))}</span>
          <span>฿${Number(product.price).toLocaleString("en-US")}</span>
          <span class="state-badge ${escapeHTML(product.state)}">${escapeHTML(product.state)}</span>
          ${product.has_unpublished_changes && product.has_published ? "<span>Unpublished edits</span>" : ""}
        </div>
      </div>
      <div class="admin-product-actions">
        ${stockSelect(product)}
        <button type="button" class="admin-button edit-product">Edit</button>
      </div>
    </article>`).join("");
  updateBulkBar();
}

function updateBulkBar() {
  $("#bulkCount").textContent = state.selected.size;
  $("#bulkBar").hidden = state.selected.size === 0;
  const visibleIds = state.products.map((item) => item.id);
  $("#selectAllProducts").checked = visibleIds.length > 0 && visibleIds.every((id) => state.selected.has(id));
  $("#selectAllProducts").indeterminate = visibleIds.some((id) => state.selected.has(id)) && !visibleIds.every((id) => state.selected.has(id));
}

async function loadProducts() {
  const params = new URLSearchParams();
  const values = {
    q: $("#adminSearch").value.trim(),
    category: $("#adminCategoryFilter").value,
    stock: $("#adminStockFilter").value,
    state: $("#adminStateFilter").value
  };
  Object.entries(values).forEach(([key, value]) => { if (value) params.set(key, value); });
  const { payload } = await api(`products?${params}`);
  state.products = payload.products;
  state.summary = payload.summary || null;
  const currentIds = new Set(state.products.map((item) => item.id));
  state.selected = new Set([...state.selected].filter((id) => currentIds.has(id)));
  renderProducts();
}

function addPairRow(kind, values = {}) {
  const containers = {
    colour: $("#colourRows"),
    measurement: $("#measurementRows"),
    variant: $("#variantRows")
  };
  const row = document.createElement("div");
  row.className = `repeat-row ${kind === "variant" ? "variant-row" : ""}`;
  row.dataset.rowKind = kind;
  if (kind === "colour") {
    row.innerHTML = `
      <label>English colour<input data-field="en" value="${escapeHTML(values.en || "")}"></label>
      <label>Thai colour<input data-field="th" lang="th" value="${escapeHTML(values.th || "")}"></label>
      <button type="button" class="repeat-remove" aria-label="Remove colour">Remove</button>`;
  } else if (kind === "measurement") {
    row.innerHTML = `
      <div class="form-grid two">
        <label>English label<input data-field="label_en" value="${escapeHTML(values.label?.en || "")}"></label>
        <label>Thai label<input data-field="label_th" lang="th" value="${escapeHTML(values.label?.th || "")}"></label>
        <label>English value<input data-field="value_en" value="${escapeHTML(values.value?.en || "")}"></label>
        <label>Thai value<input data-field="value_th" lang="th" value="${escapeHTML(values.value?.th || "")}"></label>
      </div>
      <span></span><button type="button" class="repeat-remove" aria-label="Remove measurement">Remove</button>`;
  } else {
    row.innerHTML = `
      <label>English size<input data-field="size_en" value="${escapeHTML(values.size?.en || "")}"></label>
      <label>Thai size<input data-field="size_th" lang="th" value="${escapeHTML(values.size?.th || "")}"></label>
      <label>English colour<input data-field="colour_en" value="${escapeHTML(values.colour?.en || "")}"></label>
      <label>Thai colour<input data-field="colour_th" lang="th" value="${escapeHTML(values.colour?.th || "")}"></label>
      <label class="check-label"><input type="checkbox" data-field="available" ${values.available ? "checked" : ""}> Available</label>
      <button type="button" class="repeat-remove" aria-label="Remove variant">Remove</button>`;
  }
  row.querySelector(".repeat-remove").addEventListener("click", () => {
    row.remove();
    markDirty();
  });
  containers[kind].appendChild(row);
}

function renderImages() {
  const target = $("#imageRows");
  if (!state.images.length) {
    target.innerHTML = `<div class="empty-admin">No photographs in this draft yet.</div>`;
    return;
  }
  target.innerHTML = state.images.map((image, index) => `
    <div class="image-row" data-image-index="${index}" draggable="true">
      <img src="${escapeHTML(assetUrl(image.src))}" alt="">
      <div class="image-copy">
        <strong>${index === 0 ? "Primary photograph" : `Photograph ${index + 1}`}</strong>
        <label>English alternative text<input data-image-alt="en" value="${escapeHTML(image.alt?.en || "")}" maxlength="500"></label>
        <label>Thai alternative text<input data-image-alt="th" lang="th" value="${escapeHTML(image.alt?.th || "")}" maxlength="500"></label>
      </div>
      <div class="image-buttons">
        <button type="button" data-image-action="primary" aria-label="Make this the primary photograph" ${index === 0 ? "disabled" : ""}>Primary</button>
        <button type="button" data-image-action="up" aria-label="Move photograph up" ${index === 0 ? "disabled" : ""}>↑</button>
        <button type="button" data-image-action="down" aria-label="Move photograph down" ${index === state.images.length - 1 ? "disabled" : ""}>↓</button>
        <button type="button" data-image-action="remove" aria-label="Remove photograph">×</button>
      </div>
    </div>`).join("");
}

function formValue(name) {
  return form.elements.namedItem(name)?.value?.trim() || "";
}

function setFormValue(name, value) {
  const field = form.elements.namedItem(name);
  if (field) field.value = value ?? "";
}

function collectPairs(kind) {
  return $$(`[data-row-kind="${kind}"]`).map((row) => {
    const value = (field) => row.querySelector(`[data-field="${field}"]`)?.value?.trim() || "";
    if (kind === "colour") return { en: value("en"), th: value("th") };
    if (kind === "measurement") {
      return {
        label: { en: value("label_en"), th: value("label_th") },
        value: { en: value("value_en"), th: value("value_th") }
      };
    }
    return {
      size: { en: value("size_en"), th: value("size_th") },
      colour: { en: value("colour_en"), th: value("colour_th") },
      available: row.querySelector('[data-field="available"]').checked
    };
  }).filter((item) => {
    if (kind === "colour") return item.en || item.th;
    if (kind === "measurement") return item.label.en || item.label.th || item.value.en || item.value.th;
    return item.size.en || item.size.th || item.colour.en || item.colour.th;
  });
}

function productFromForm() {
  const careEn = formValue("care_en");
  const careTh = formValue("care_th");
  const videoSrc = formValue("video_src");
  const product = {
    code: formValue("code").toUpperCase(),
    name: { en: formValue("name_en"), th: formValue("name_th") },
    category: formValue("category"),
    is_new: form.elements.namedItem("is_new").checked,
    price: Number(formValue("price") || 0),
    fabric: { en: formValue("fabric_en"), th: formValue("fabric_th") },
    colours: collectPairs("colour"),
    measurements: collectPairs("measurement"),
    care: careEn || careTh ? { en: careEn, th: careTh } : null,
    stock: formValue("stock"),
    images: state.images.map((image) => ({
      src: image.src,
      alt: { en: image.alt?.en || "", th: image.alt?.th || "" },
      ...(image.media_id ? { media_id: image.media_id } : {})
    })),
    video: videoSrc ? { src: videoSrc, poster: formValue("video_poster") } : null,
    description: { en: formValue("description_en"), th: formValue("description_th") },
    marketplace_links: {
      line: formValue("link_line"), tiktok: formValue("link_tiktok"),
      shopee: formValue("link_shopee"), lazada: formValue("link_lazada")
    }
  };
  const variants = collectPairs("variant");
  if (variants.length) product.variants = variants;
  if (form.elements.namedItem("showcase_enabled").checked) {
    product.home_showcase = {
      image_index: Math.max(0, Number(formValue("showcase_image") || 1) - 1),
      name: { en: formValue("showcase_name_en"), th: formValue("showcase_name_th") }
    };
    const heroVideo = formValue("showcase_video");
    if (heroVideo) product.home_showcase.hero_video = heroVideo;
  }
  return product;
}

function markDirty() {
  if (!state.loading) state.dirty = true;
  updateEditorLabels();
}

function updateEditorLabels() {
  const current = state.current;
  $("#editorTitle").textContent = formValue("name_en") || current?.code || "Add product";
  $("#editorStateLabel").textContent = current ? `${current.state}${state.dirty ? " · Unsaved changes" : ""}` : "New draft";
  $("#editorRevision").textContent = current ? `Revision ${current.revision} · Last updated ${new Date(current.updated_at).toLocaleString()}` : "Not saved yet";
  $("#archiveProduct").hidden = !current || current.state !== "published";
  $("#restoreProduct").hidden = !current || current.state !== "archived";
  $("#publishProduct").hidden = current?.state === "archived";
  $("#revisionPanel").hidden = !current;
}

function resetRepeaters(product) {
  $("#colourRows").replaceChildren();
  $("#measurementRows").replaceChildren();
  $("#variantRows").replaceChildren();
  (product.colours || []).forEach((item) => addPairRow("colour", item));
  (product.measurements || []).forEach((item) => addPairRow("measurement", item));
  (product.variants || []).forEach((item) => addPairRow("variant", item));
}

function populateForm(product) {
  state.loading = true;
  form.reset();
  setFormValue("code", product.code);
  form.elements.namedItem("code").readOnly = Boolean(state.current);
  setFormValue("name_en", product.name?.en);
  setFormValue("name_th", product.name?.th);
  setFormValue("category", product.category || "dresses");
  setFormValue("price", product.price || 0);
  setFormValue("stock", product.stock || "in_stock");
  form.elements.namedItem("is_new").checked = Boolean(product.is_new);
  setFormValue("fabric_en", product.fabric?.en);
  setFormValue("fabric_th", product.fabric?.th);
  setFormValue("description_en", product.description?.en);
  setFormValue("description_th", product.description?.th);
  setFormValue("care_en", product.care?.en);
  setFormValue("care_th", product.care?.th);
  setFormValue("link_line", product.marketplace_links?.line);
  setFormValue("link_tiktok", product.marketplace_links?.tiktok);
  setFormValue("link_shopee", product.marketplace_links?.shopee);
  setFormValue("link_lazada", product.marketplace_links?.lazada);
  setFormValue("video_src", product.video?.src);
  setFormValue("video_poster", product.video?.poster);
  form.elements.namedItem("showcase_enabled").checked = Boolean(product.home_showcase);
  setFormValue("showcase_image", Number(product.home_showcase?.image_index || 0) + 1);
  setFormValue("showcase_name_en", product.home_showcase?.name?.en);
  setFormValue("showcase_name_th", product.home_showcase?.name?.th);
  setFormValue("showcase_video", product.home_showcase?.hero_video);
  state.images = structuredClone(product.images || []);
  resetRepeaters(product);
  renderImages();
  state.dirty = false;
  state.loading = false;
  showEditorError();
  updateEditorLabels();
}

function generatedCode(category = "dresses") {
  const prefixes = { dresses: "DR", kaftans: "KF", tops: "TP", sets: "ST", bags: "BG", pants: "PT", skirts: "SK" };
  const prefix = `MLY-${prefixes[category] || "PR"}-`;
  const numbers = state.products
    .map((item) => item.code.match(new RegExp(`^${prefix}(\\d+)$`))?.[1])
    .filter(Boolean)
    .map(Number);
  return `${prefix}${String((numbers.length ? Math.max(...numbers) : 0) + 1).padStart(3, "0")}`;
}

async function loadRevisions() {
  if (!state.current) return;
  const { payload } = await api(`products/${encodeURIComponent(state.current.id)}/revisions`);
  const target = $("#revisionList");
  target.innerHTML = payload.revisions.length ? payload.revisions.map((revision) => `
    <div class="revision-row">
      <span>Revision ${revision.revision} · ${escapeHTML(revision.event)}<br><small>${escapeHTML(new Date(revision.created_at).toLocaleString())} by ${escapeHTML(revision.created_by)}</small></span>
      <button type="button" class="admin-button restore-revision" data-revision-id="${escapeHTML(revision.id)}">Restore to draft</button>
    </div>`).join("") : `<p class="field-note">No previous versions yet.</p>`;
}

async function openProduct(id) {
  const { payload } = await api(`products/${encodeURIComponent(id)}`);
  state.current = payload.product;
  state.pendingMediaDeletes.clear();
  populateForm(payload.product.draft);
  $("#productEditor").showModal();
  await loadRevisions();
}

function openNewProduct() {
  state.current = null;
  state.pendingMediaDeletes.clear();
  populateForm({
    code: generatedCode(), name: { en: "", th: "" }, category: "dresses",
    is_new: true, price: 0, stock: "in_stock", fabric: { en: "", th: "" },
    description: { en: "", th: "" }, care: null, colours: [], measurements: [],
    images: [], video: null, marketplace_links: { line: "", tiktok: "", shopee: "", lazada: "" }
  });
  state.dirty = true;
  updateEditorLabels();
  $("#productEditor").showModal();
  form.elements.namedItem("name_en").focus();
}

async function saveDraft({ quiet = false } = {}) {
  if (state.loading) return state.current;
  setBusy(true);
  showEditorError();
  try {
    const product = productFromForm();
    const result = state.current
      ? await api(`products/${encodeURIComponent(state.current.id)}`, {
        method: "PATCH", json: { product, revision: state.current.revision }
      })
      : await api("products", { method: "POST", json: { product } });
    state.current = result.payload.product;
    await cleanupPendingMedia();
    populateForm(state.current.draft);
    await Promise.all([loadProducts(), loadRevisions()]);
    if (!quiet) showToast("Draft saved.");
    return state.current;
  } catch (error) {
    showEditorError(error.status === 409 ? `${error.message} Your unsaved form has been kept.` : error.message);
    throw error;
  } finally {
    setBusy(false);
  }
}

function previewDocument(product) {
  const image = product.images[0];
  const thumbnails = product.images.slice(0, 8).map((item, index) => `
    <span class="pd-thumbnail${index === 0 ? " active" : ""}">
      <img src="${escapeHTML(assetUrl(item.src))}" alt="${escapeHTML(item.alt?.en || product.name.en || "Product")}">
    </span>`).join("");
  const colours = product.colours.map((item) => `
    <span class="colour-chip"><span data-lang="en">${escapeHTML(item.en)}</span><span data-lang="th">${escapeHTML(item.th)}</span></span>`).join("");
  const measurements = product.measurements.map((item) => `
    <tr><th><span data-lang="en">${escapeHTML(item.label.en)}</span><span data-lang="th">${escapeHTML(item.label.th)}</span></th>
    <td><span data-lang="en">${escapeHTML(item.value.en)}</span><span data-lang="th">${escapeHTML(item.value.th)}</span></td></tr>`).join("");
  return `<!doctype html>
  <html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
  <link rel="stylesheet" href="/css/style.css"><link rel="stylesheet" href="/admin/admin-preview.css"></head>
  <body class="admin-customer-preview"><main><section class="section"><div class="container"><div class="product-detail">
    <div class="pd-gallery">
      <div class="pd-gallery-main">${image
        ? `<img src="${escapeHTML(assetUrl(image.src))}" alt="${escapeHTML(image.alt?.en || product.name.en || "Product preview")}">`
        : `<div class="preview-empty">Photograph will appear here.</div>`}</div>
      ${thumbnails ? `<div class="pd-thumbnails">${thumbnails}</div>` : ""}
    </div>
    <div class="pd-copy">
      <nav class="breadcrumb"><span>Shop</span><span>/</span><span>${escapeHTML(friendlyCategory(product.category))}</span></nav>
      <h1 data-lang="en">${escapeHTML(product.name.en || "English product name")}</h1>
      <h1 data-lang="th">${escapeHTML(product.name.th || "ชื่อสินค้าภาษาไทย")}</h1>
      <div class="pd-price">฿${Number(product.price || 0).toLocaleString("en-US")}</div>
      <p class="wholesale-note product-wholesale-note"><span data-lang="en">* Please reach out directly to discuss wholesale / bulk pricing.</span><span data-lang="th">* โปรดติดต่อเราโดยตรงเพื่อสอบถามราคาขายส่ง / ราคาสำหรับการสั่งซื้อจำนวนมาก</span></p>
      <p class="stock-status ${escapeHTML(product.stock)}">${escapeHTML(friendlyStock(product.stock))}</p>
      <p data-lang="en">${escapeHTML(product.description.en || "English description")}</p>
      <p data-lang="th">${escapeHTML(product.description.th || "รายละเอียดภาษาไทย")}</p>
      <p class="section-note"><span data-lang="en">Available colours / options</span><span data-lang="th">สี / ตัวเลือกที่มี</span></p>
      <div class="colour-dots">${colours}</div>
      <section class="product-sizing"><h2><span data-lang="en">Fit & measurements</span><span data-lang="th">ขนาดและสัดส่วน</span></h2>
        <div class="table-scroll"><table class="pd-table"><tbody>
          <tr><th><span data-lang="en">Fabric</span><span data-lang="th">เนื้อผ้า</span></th><td><span data-lang="en">${escapeHTML(product.fabric.en || "—")}</span><span data-lang="th">${escapeHTML(product.fabric.th || "—")}</span></td></tr>
          ${measurements}
        </tbody></table></div>
      </section>
      <button type="button" class="btn inquiry-product-btn"><span data-lang="en">Add to inquiry</span><span data-lang="th">เพิ่มในรายการสอบถาม</span></button>
    </div>
  </div></div></section></main></body></html>`;
}

function previewProduct() {
  const product = productFromForm();
  $("#previewContent").innerHTML = `
    <div class="preview-toolbar" aria-label="Preview language">
      <span>Customer page preview · Draft only</span>
      <button type="button" class="admin-button" data-preview-language="en">English</button>
      <button type="button" class="admin-button" data-preview-language="th">ไทย</button>
    </div>
    <iframe class="preview-frame" title="Draft product in the customer page design"></iframe>`;
  const frame = $(".preview-frame", $("#previewContent"));
  frame.srcdoc = previewDocument(product);
  $$("[data-preview-language]", $("#previewContent")).forEach((button) => {
    button.addEventListener("click", () => {
      if (frame.contentDocument) frame.contentDocument.documentElement.lang = button.dataset.previewLanguage;
    });
  });
  $("#productPreview").showModal();
}

async function publishCurrent() {
  if (!state.current || state.dirty) await saveDraft({ quiet: true });
  if (!state.current) return;
  if (!window.confirm(`Publish ${state.current.code} to the customer catalogue?`)) return;
  setBusy(true);
  try {
    const { payload } = await api(`products/${encodeURIComponent(state.current.id)}/publish`, {
      method: "POST", json: { revision: state.current.revision }
    });
    state.current = payload.product;
    await cleanupPendingMedia();
    populateForm(state.current.draft);
    await Promise.all([loadProducts(), loadRevisions()]);
    showToast("Product published. Customer pages will update shortly.");
  } catch (error) {
    showEditorError(error.message);
  } finally {
    setBusy(false);
  }
}

async function changeLifecycle(action) {
  if (!state.current) return;
  const verb = action === "archive" ? "Archive" : "Restore";
  if (!window.confirm(`${verb} ${state.current.code}?`)) return;
  setBusy(true);
  try {
    const { payload } = await api(`products/${encodeURIComponent(state.current.id)}/${action}`, {
      method: "POST", json: { revision: state.current.revision }
    });
    state.current = payload.product;
    populateForm(state.current.draft);
    await Promise.all([loadProducts(), loadRevisions()]);
    showToast(`Product ${action === "archive" ? "archived" : "restored"}.`);
  } catch (error) {
    showEditorError(error.message);
  } finally { setBusy(false); }
}

async function changeRowStock(product, stock, { showUndo = true } = {}) {
  const previous = product.stock;
  if (stock === previous) return;
  const { payload } = await api(`products/${encodeURIComponent(product.id)}/stock`, {
    method: "POST", json: { stock, revision: product.revision }
  });
  await loadProducts();
  if (showUndo) {
    showToast(`${product.code} changed to ${friendlyStock(stock)}.`, {
      undo: () => changeRowStock(payload.product, previous, { showUndo: false }).then(() => showToast("Stock change undone."))
    });
  }
}

async function applyBulkStock() {
  const stock = $("#bulkStock").value;
  if (!stock || !state.selected.size) return;
  const products = state.products.filter((item) => state.selected.has(item.id));
  if (!window.confirm(`Change ${products.length} selected product${products.length === 1 ? "" : "s"} to ${friendlyStock(stock)}?`)) return;
  const items = products.map((item) => ({ id: item.id, revision: item.revision }));
  try {
    await api("products/bulk-stock", { method: "POST", json: { items, stock } });
    state.selected.clear();
    await loadProducts();
    showToast("Bulk stock update completed.");
  } catch (error) { showToast(error.message, { error: true }); }
}

async function resizeImage(file) {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, 2000 / Math.max(bitmap.width, bitmap.height));
  const width = Math.max(1, Math.round(bitmap.width * scale));
  const height = Math.max(1, Math.round(bitmap.height * scale));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  canvas.getContext("2d", { alpha: false }).drawImage(bitmap, 0, 0, width, height);
  bitmap.close();
  let quality = 0.84;
  let blob;
  do {
    blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/webp", quality));
    quality -= 0.08;
  } while (blob && blob.size > 1.5 * 1024 * 1024 && quality >= 0.52);
  if (!blob) throw new Error("This browser could not prepare the photograph.");
  if (blob.size > 2 * 1024 * 1024) throw new Error("Photograph is still too large after optimization.");
  return new File([blob], `${file.name.replace(/\.[^.]+$/, "") || "product"}.webp`, { type: "image/webp" });
}

async function uploadMedia() {
  if (!state.current) {
    showEditorError("Save this draft once before uploading photographs.");
    return;
  }
  const file = $("#mediaFile").files[0];
  if (!file) { showEditorError("Choose a photograph first."); return; }
  const altEn = $("#mediaAltEn").value.trim();
  const altTh = $("#mediaAltTh").value.trim();
  setBusy(true);
  const progress = $("#uploadProgress");
  progress.hidden = false;
  progress.value = 20;
  try {
    const optimized = await resizeImage(file);
    progress.value = 55;
    const data = new FormData();
    data.set("file", optimized);
    data.set("product_id", state.current.id);
    data.set("alt_en", altEn);
    data.set("alt_th", altTh);
    data.set("position", String(state.images.length));
    const { payload } = await api("media", { method: "POST", body: data });
    progress.value = 90;
    state.images.push(payload.media);
    renderImages();
    markDirty();
    $("#mediaFile").value = "";
    $("#mediaAltEn").value = "";
    $("#mediaAltTh").value = "";
    progress.value = 100;
    showToast("Photograph uploaded. Save the draft to attach it.");
  } catch (error) {
    showEditorError(error.message);
  } finally {
    window.setTimeout(() => { progress.hidden = true; progress.value = 0; }, 500);
    setBusy(false);
  }
}

async function removeImage(index) {
  const image = state.images[index];
  if (!image) return;
  if (!window.confirm("Remove this photograph from the draft?")) return;
  if (image.media_id) state.pendingMediaDeletes.add(image.media_id);
  state.images.splice(index, 1);
  renderImages();
  markDirty();
}

async function cleanupPendingMedia() {
  for (const id of [...state.pendingMediaDeletes]) {
    try {
      await api(`media/${encodeURIComponent(id)}`, { method: "DELETE" });
      state.pendingMediaDeletes.delete(id);
    } catch (error) {
      if (error.status !== 409) showToast(`Draft saved, but an unused photograph could not be removed: ${error.message}`, { error: true });
    }
  }
}

async function loadAudit() {
  const { payload } = await api("audit?limit=150");
  const target = $("#auditList");
  target.innerHTML = payload.audit.length ? payload.audit.map((entry) => `
    <article class="audit-entry">
      <p><strong>${escapeHTML(entry.action)}</strong>${entry.product_code ? ` · ${escapeHTML(entry.product_code)}` : ""}</p>
      <small>${escapeHTML(new Date(entry.created_at).toLocaleString())} · ${escapeHTML(entry.administrator)}</small>
    </article>`).join("") : `<div class="empty-admin">No changes have been recorded yet.</div>`;
}

async function loadRecentActivity() {
  const { payload } = await api("audit?limit=5");
  const target = $("#recentActivity");
  target.innerHTML = payload.audit.length ? payload.audit.map((entry) => `
    <div class="recent-item">
      <span><strong>${escapeHTML(entry.product_code || "Catalogue")}</strong> · ${escapeHTML(entry.action)}</span>
      <time datetime="${escapeHTML(entry.created_at)}">${escapeHTML(new Date(entry.created_at).toLocaleString())}</time>
    </div>`).join("") : `<span class="field-note">No changes have been recorded yet.</span>`;
}

async function exportBackup() {
  try {
    const { payload } = await api("export");
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `millys-catalogue-${new Date().toISOString().slice(0, 10)}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
    showToast("Catalogue backup downloaded.");
  } catch (error) { showToast(error.message, { error: true }); }
}

async function readImportFile() {
  const file = $("#importFile").files[0];
  if (!file) throw new Error("Choose a JSON catalogue backup first.");
  if (file.size > 12 * 1024 * 1024) throw new Error("The backup is larger than the 12 MiB import limit.");
  let parsed;
  try { parsed = JSON.parse(await file.text()); }
  catch { throw new Error("The selected file is not valid JSON."); }
  state.importPayload = Array.isArray(parsed) ? { products: parsed } : parsed;
  if (!state.importPayload || !Array.isArray(state.importPayload.products)) {
    throw new Error("The selected file does not contain a product list.");
  }
  return state.importPayload;
}

async function previewImport() {
  try {
    const payload = await readImportFile();
    const result = await api("import/validate", { method: "POST", json: payload });
    state.importPreview = result.payload;
    $("#importSummary").innerHTML = `
      <strong>${result.payload.summary.product_count} products passed validation.</strong>
      <p>${result.payload.summary.create_drafts} new drafts and ${result.payload.summary.update_drafts} existing drafts will be prepared. No published customer product will change.</p>
      <span>Confirmation required:</span>
      <code>${escapeHTML(result.payload.required_confirmation)}</code>`;
    $("#importConfirmation").value = "";
    $("#importPreview").hidden = false;
  } catch (error) {
    state.importPreview = null;
    $("#importPreview").hidden = true;
    showToast(error.message, { error: true });
  }
}

async function applyImport() {
  if (!state.importPayload || !state.importPreview) {
    showToast("Validate and preview the file first.", { error: true });
    return;
  }
  const confirmation = $("#importConfirmation").value.trim();
  if (confirmation !== state.importPreview.required_confirmation) {
    showToast("Type the exact confirmation shown in the preview.", { error: true });
    return;
  }
  if (!window.confirm("Apply this import to private drafts? Published customer products will remain unchanged.")) return;
  $("#applyImport").disabled = true;
  try {
    const result = await api("import/apply", {
      method: "POST",
      json: {
        ...state.importPayload,
        preview_digest: state.importPreview.preview_digest,
        confirmation
      }
    });
    state.importPayload = null;
    state.importPreview = null;
    $("#importFile").value = "";
    $("#importPreview").hidden = true;
    await Promise.all([loadProducts(), loadRecentActivity()]);
    showToast(`${result.payload.summary.total} private drafts imported. Review and publish them individually.`);
  } catch (error) {
    showToast(error.message, { error: true });
  } finally {
    $("#applyImport").disabled = false;
  }
}

function attemptCloseEditor() {
  if (state.dirty && !window.confirm("Discard unsaved changes?")) return;
  state.dirty = false;
  $("#productEditor").close();
}

function bindEvents() {
  $("#adminSearch").addEventListener("input", () => {
    window.clearTimeout(state.searchTimer);
    state.searchTimer = window.setTimeout(() => loadProducts().catch((error) => showToast(error.message, { error: true })), 180);
  });
  ["#adminCategoryFilter", "#adminStockFilter", "#adminStateFilter"].forEach((selector) => {
    $(selector).addEventListener("change", () => loadProducts().catch((error) => showToast(error.message, { error: true })));
  });
  $("#addProduct").addEventListener("click", openNewProduct);
  $("#exportCatalogue").addEventListener("click", exportBackup);
  $("#previewImport").addEventListener("click", previewImport);
  $("#applyImport").addEventListener("click", applyImport);
  $("#importFile").addEventListener("change", () => {
    state.importPayload = null;
    state.importPreview = null;
    $("#importPreview").hidden = true;
  });
  $("#applyBulkStock").addEventListener("click", applyBulkStock);
  $("#clearSelection").addEventListener("click", () => { state.selected.clear(); renderProducts(); });
  $("#selectAllProducts").addEventListener("change", (event) => {
    state.products.forEach((item) => event.target.checked ? state.selected.add(item.id) : state.selected.delete(item.id));
    renderProducts();
  });

  $("#adminProductList").addEventListener("change", async (event) => {
    const row = event.target.closest("[data-product-id]");
    const product = state.products.find((item) => item.id === row?.dataset.productId);
    if (!product) return;
    if (event.target.matches(".product-select")) {
      event.target.checked ? state.selected.add(product.id) : state.selected.delete(product.id);
      updateBulkBar();
    }
    if (event.target.matches(".row-stock")) {
      const previous = product.stock;
      try { await changeRowStock(product, event.target.value); }
      catch (error) { event.target.value = previous; showToast(error.message, { error: true }); }
    }
  });
  $("#adminProductList").addEventListener("click", (event) => {
    const row = event.target.closest("[data-product-id]");
    if (event.target.closest(".edit-product") && row) openProduct(row.dataset.productId).catch((error) => showToast(error.message, { error: true }));
  });

  $$("[data-admin-view]").forEach((tab) => tab.addEventListener("click", async () => {
    $$("[data-admin-view]").forEach((item) => item.classList.toggle("active", item === tab));
    $$(".admin-view").forEach((view) => { view.hidden = true; });
    $(`#${tab.dataset.adminView}View`).hidden = false;
    if (tab.dataset.adminView === "audit") await loadAudit();
  }));
  $("#refreshAudit").addEventListener("click", () => loadAudit().catch((error) => showToast(error.message, { error: true })));

  form.addEventListener("input", markDirty);
  form.addEventListener("change", markDirty);
  form.addEventListener("submit", (event) => event.preventDefault());
  $$("[data-add-row]").forEach((button) => button.addEventListener("click", () => { addPairRow(button.dataset.addRow); markDirty(); }));
  $("#closeEditor").addEventListener("click", attemptCloseEditor);
  $("#productEditor").addEventListener("cancel", (event) => { event.preventDefault(); attemptCloseEditor(); });
  $("#saveDraft").addEventListener("click", () => saveDraft().catch(() => {}));
  $("#previewProduct").addEventListener("click", previewProduct);
  $("#publishProduct").addEventListener("click", publishCurrent);
  $("#archiveProduct").addEventListener("click", () => changeLifecycle("archive"));
  $("#restoreProduct").addEventListener("click", () => changeLifecycle("restore"));
  $("#uploadMedia").addEventListener("click", uploadMedia);
  $("#imageRows").addEventListener("click", async (event) => {
    const row = event.target.closest("[data-image-index]");
    const action = event.target.closest("[data-image-action]")?.dataset.imageAction;
    if (!row || !action) return;
    const index = Number(row.dataset.imageIndex);
    if (action === "remove") { await removeImage(index); return; }
    if (action === "primary") {
      const [image] = state.images.splice(index, 1);
      state.images.unshift(image);
      renderImages();
      markDirty();
      return;
    }
    const target = action === "up" ? index - 1 : index + 1;
    if (target < 0 || target >= state.images.length) return;
    [state.images[index], state.images[target]] = [state.images[target], state.images[index]];
    renderImages();
    markDirty();
  });
  $("#imageRows").addEventListener("input", (event) => {
    const row = event.target.closest("[data-image-index]");
    const language = event.target.dataset.imageAlt;
    if (!row || !["en", "th"].includes(language)) return;
    const image = state.images[Number(row.dataset.imageIndex)];
    if (!image) return;
    image.alt ||= { en: "", th: "" };
    image.alt[language] = event.target.value;
    markDirty();
  });
  $("#imageRows").addEventListener("dragstart", (event) => {
    const row = event.target.closest("[data-image-index]");
    if (!row) return;
    state.dragImageIndex = Number(row.dataset.imageIndex);
    row.classList.add("dragging");
    event.dataTransfer.effectAllowed = "move";
  });
  $("#imageRows").addEventListener("dragover", (event) => {
    const row = event.target.closest("[data-image-index]");
    if (!row || state.dragImageIndex === null) return;
    event.preventDefault();
    $$(".image-row.drag-target", $("#imageRows")).forEach((item) => item.classList.remove("drag-target"));
    row.classList.add("drag-target");
  });
  $("#imageRows").addEventListener("drop", (event) => {
    const row = event.target.closest("[data-image-index]");
    if (!row || state.dragImageIndex === null) return;
    event.preventDefault();
    const target = Number(row.dataset.imageIndex);
    const [image] = state.images.splice(state.dragImageIndex, 1);
    state.images.splice(target, 0, image);
    state.dragImageIndex = null;
    renderImages();
    markDirty();
  });
  $("#imageRows").addEventListener("dragend", () => {
    state.dragImageIndex = null;
    renderImages();
  });
  $("#revisionList").addEventListener("click", async (event) => {
    const button = event.target.closest(".restore-revision");
    if (!button || !state.current) return;
    if (state.dirty && !window.confirm("Restoring will replace the unsaved form. Continue?")) return;
    if (!window.confirm("Restore this version as a new draft? The live product will not change until you publish.")) return;
    try {
      const { payload } = await api(`products/${encodeURIComponent(state.current.id)}/restore-revision`, {
        method: "POST", json: { revision_id: button.dataset.revisionId, revision: state.current.revision }
      });
      state.current = payload.product;
      populateForm(state.current.draft);
      await Promise.all([loadProducts(), loadRevisions()]);
      showToast("Previous version restored as a draft.");
    } catch (error) { showEditorError(error.message); }
  });
  $("#closePreview").addEventListener("click", () => $("#productPreview").close());
  $("#productPreview").addEventListener("click", (event) => { if (event.target === $("#productPreview")) $("#productPreview").close(); });
  window.addEventListener("beforeunload", (event) => {
    if (!state.dirty) return;
    event.preventDefault();
    event.returnValue = "";
  });
}

async function initialize() {
  try {
    const { payload } = await api("session");
    state.session = payload;
    $("#adminEmail").textContent = payload.administrator.email;
    bindEvents();
    await loadProducts();
    $("#adminLoading").hidden = true;
    $("#adminApp").hidden = false;
  } catch (error) {
    $("#adminLoading").textContent = error.code === "ADMIN_NOT_CONFIGURED"
      ? "Administration is safely locked until the owner allowlist and Cloudflare Access settings are configured."
      : error.message;
  }
}

initialize();
