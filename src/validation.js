export const CATEGORIES = Object.freeze([
  "dresses", "kaftans", "tops", "sets", "bags", "pants", "skirts"
]);

export const STOCK_STATES = Object.freeze(["in_stock", "low_stock", "sold_out"]);

const PRODUCT_FIELDS = new Set([
  "code", "name", "category", "is_new", "price", "fabric", "colours",
  "measurements", "care", "stock", "images", "video", "description",
  "marketplace_links", "variants", "home_showcase"
]);

const URL_FIELDS = ["line", "tiktok", "shopee", "lazada"];
const MAX_TEXT = 12000;
const MAX_SHORT_TEXT = 300;
const MAX_LIST_ITEMS = 80;

export class ValidationError extends Error {
  constructor(message, fields = {}) {
    super(message);
    this.name = "ValidationError";
    this.status = 422;
    this.code = "VALIDATION_ERROR";
    this.fields = fields;
  }
}

function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function cleanText(value, max = MAX_TEXT) {
  if (value === null || value === undefined) return "";
  if (typeof value !== "string") throw new ValidationError("Text fields must contain text.");
  const cleaned = value.replace(/\r\n?/g, "\n").trim();
  if (cleaned.length > max) throw new ValidationError(`Text must be ${max} characters or fewer.`);
  return cleaned;
}

function cleanPair(value, label, { required = false, max = MAX_TEXT } = {}) {
  if (!isObject(value)) {
    if (!required && (value === null || value === undefined)) return { en: "", th: "" };
    throw new ValidationError(`${label} must contain English and Thai text.`);
  }
  const pair = { en: cleanText(value.en, max), th: cleanText(value.th, max) };
  if (required && (!pair.en || !pair.th)) {
    throw new ValidationError(`${label} is required in both English and Thai.`, {
      [`${label}.en`]: !pair.en ? "Required" : undefined,
      [`${label}.th`]: !pair.th ? "Required" : undefined
    });
  }
  return pair;
}

function cleanPairs(values, label, { required = false } = {}) {
  if (values === undefined || values === null) return [];
  if (!Array.isArray(values) || values.length > MAX_LIST_ITEMS) {
    throw new ValidationError(`${label} must be a list with no more than ${MAX_LIST_ITEMS} entries.`);
  }
  const result = values.map((value, index) => cleanPair(value, `${label} ${index + 1}`, {
    required,
    max: MAX_SHORT_TEXT
  }));
  return required ? result.filter((pair) => pair.en || pair.th) : result;
}

function cleanMeasurements(values, required) {
  if (values === undefined || values === null) return [];
  if (!Array.isArray(values) || values.length > MAX_LIST_ITEMS) {
    throw new ValidationError("Measurements must be a valid list.");
  }
  return values.map((measurement, index) => {
    if (!isObject(measurement)) throw new ValidationError(`Measurement ${index + 1} is invalid.`);
    return {
      label: cleanPair(measurement.label, `Measurement ${index + 1} label`, {
        required,
        max: MAX_SHORT_TEXT
      }),
      value: cleanPair(measurement.value, `Measurement ${index + 1} value`, {
        required,
        max: MAX_SHORT_TEXT
      })
    };
  });
}

function cleanVariants(values, required) {
  if (values === undefined || values === null) return undefined;
  if (!Array.isArray(values) || values.length > 200) {
    throw new ValidationError("Variants must be a valid list.");
  }
  const variants = values.map((variant, index) => {
    if (!isObject(variant)) throw new ValidationError(`Variant ${index + 1} is invalid.`);
    return {
      size: cleanPair(variant.size, `Variant ${index + 1} size`, {
        required,
        max: MAX_SHORT_TEXT
      }),
      colour: cleanPair(variant.colour, `Variant ${index + 1} colour`, {
        required,
        max: MAX_SHORT_TEXT
      }),
      available: Boolean(variant.available)
    };
  });
  return variants.length ? variants : undefined;
}

function cleanImages(values, required) {
  if (values === undefined || values === null) return [];
  if (!Array.isArray(values) || values.length > 24) {
    throw new ValidationError("A product can contain no more than 24 photographs.");
  }
  const images = values.map((image, index) => {
    if (!isObject(image)) throw new ValidationError(`Photograph ${index + 1} is invalid.`);
    const src = cleanText(image.src, 1000);
    if (!src || src.includes("..") || /^(javascript|data):/i.test(src)) {
      throw new ValidationError(`Photograph ${index + 1} has an invalid source.`);
    }
    const cleaned = {
      src,
      alt: cleanPair(image.alt, `Photograph ${index + 1} alternative text`, {
        required,
        max: 500
      })
    };
    if (image.media_id !== undefined) cleaned.media_id = cleanText(image.media_id, 100);
    return cleaned;
  });
  if (required && !images.length) throw new ValidationError("At least one product photograph is required.");
  return images;
}

function cleanMarketplaceLinks(value) {
  const input = isObject(value) ? value : {};
  const result = {};
  for (const key of URL_FIELDS) {
    const url = cleanText(input[key], 2000);
    if (url && !/^https:\/\//i.test(url)) {
      throw new ValidationError(`${key} marketplace links must begin with https://.`);
    }
    result[key] = url;
  }
  for (const key of Object.keys(input)) {
    if (!URL_FIELDS.includes(key)) throw new ValidationError(`Unknown marketplace field: ${key}.`);
  }
  return result;
}

function cleanVideo(value) {
  if (value === null || value === undefined || value === "") return null;
  if (!isObject(value)) throw new ValidationError("Video information is invalid.");
  const src = cleanText(value.src, 1000);
  const poster = cleanText(value.poster, 1000);
  if (!src || src.includes("..") || /^(javascript|data):/i.test(src)) {
    throw new ValidationError("Video source is invalid.");
  }
  if (poster && (poster.includes("..") || /^(javascript|data):/i.test(poster))) {
    throw new ValidationError("Video poster is invalid.");
  }
  return { src, poster };
}

function cleanShowcase(value, images, required) {
  if (value === null || value === undefined || value === false) return undefined;
  if (!isObject(value)) throw new ValidationError("Homepage showcase information is invalid.");
  const imageIndex = Number(value.image_index ?? 0);
  if (!Number.isInteger(imageIndex) || imageIndex < 0 || (images.length && imageIndex >= images.length)) {
    throw new ValidationError("Homepage showcase photograph is outside the product gallery.");
  }
  const result = {
    image_index: imageIndex,
    name: cleanPair(value.name, "Homepage showcase name", { required, max: MAX_SHORT_TEXT })
  };
  const heroVideo = cleanText(value.hero_video, 1000);
  if (heroVideo) {
    if (heroVideo.includes("..") || /^(javascript|data):/i.test(heroVideo)) {
      throw new ValidationError("Homepage showcase video is invalid.");
    }
    result.hero_video = heroVideo;
  }
  return result;
}

export function normalizeProduct(input, { publish = false } = {}) {
  if (!isObject(input)) throw new ValidationError("Product data must be an object.");
  for (const key of Object.keys(input)) {
    if (!PRODUCT_FIELDS.has(key)) throw new ValidationError(`Unknown product field: ${key}.`);
  }

  const code = cleanText(input.code, 80).toUpperCase();
  if (code && !/^[A-Z0-9-]+$/.test(code)) {
    throw new ValidationError("Product code may contain uppercase letters, numbers and hyphens only.");
  }
  if (publish && !code) throw new ValidationError("Product code is required before publication.");

  const category = cleanText(input.category, 40) || "dresses";
  if (!CATEGORIES.includes(category)) throw new ValidationError("Product category is invalid.");

  const stock = cleanText(input.stock, 40) || "in_stock";
  if (!STOCK_STATES.includes(stock)) throw new ValidationError("Stock status is invalid.");

  const price = Number(input.price ?? 0);
  if (!Number.isSafeInteger(price) || price < 0 || price > 100000000) {
    throw new ValidationError("Price must be a non-negative whole number of Thai baht.");
  }

  const images = cleanImages(input.images, publish);
  const product = {
    code,
    name: cleanPair(input.name, "Product name", { required: publish, max: 500 }),
    category,
    is_new: Boolean(input.is_new),
    price,
    fabric: cleanPair(input.fabric, "Fabric", { required: publish, max: 2000 }),
    colours: cleanPairs(input.colours, "Colour", { required: publish }),
    measurements: cleanMeasurements(input.measurements, publish),
    care: input.care === null || input.care === undefined
      ? null
      : cleanPair(input.care, "Care information", { required: publish, max: 3000 }),
    stock,
    images,
    video: cleanVideo(input.video),
    description: cleanPair(input.description, "Description", { required: publish }),
    marketplace_links: cleanMarketplaceLinks(input.marketplace_links)
  };

  const variants = cleanVariants(input.variants, publish);
  if (variants) product.variants = variants;
  const showcase = cleanShowcase(input.home_showcase, images, publish);
  if (showcase) product.home_showcase = showcase;

  if (publish && !product.colours.length) throw new ValidationError("At least one colour is required.");
  if (publish && !product.measurements.length) throw new ValidationError("Product measurements are required.");
  return product;
}

export function validateStock(value) {
  if (!STOCK_STATES.includes(value)) throw new ValidationError("Stock status is invalid.");
  return value;
}

export function validateCatalogue(products, { requireShowcases = true } = {}) {
  if (!Array.isArray(products)) throw new ValidationError("Catalogue must be a list of products.");
  const normalized = products.map((product) => normalizeProduct(product, { publish: true }));
  const codes = new Set();
  for (const product of normalized) {
    if (codes.has(product.code)) throw new ValidationError(`Duplicate product code: ${product.code}.`);
    codes.add(product.code);
  }
  if (requireShowcases) {
    for (const category of CATEGORIES) {
      const count = normalized.filter((product) => product.category === category && product.home_showcase).length;
      if (count !== 1) {
        throw new ValidationError(`Category ${category} must have exactly one homepage showcase; found ${count}.`);
      }
    }
  }
  return normalized;
}

export function newProductTemplate(code = "") {
  return {
    code,
    name: { en: "", th: "" },
    category: "dresses",
    is_new: true,
    price: 0,
    fabric: { en: "", th: "" },
    colours: [],
    measurements: [],
    care: null,
    stock: "in_stock",
    images: [],
    video: null,
    description: { en: "", th: "" },
    marketplace_links: { line: "", tiktok: "", shopee: "", lazada: "" }
  };
}
