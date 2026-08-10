import { RepositoryError } from "./repository.js";
import { ValidationError } from "./validation.js";

export const MAX_MEDIA_BYTES = 2 * 1024 * 1024;
export const MAX_MANAGED_MEDIA_BYTES = 5 * 1024 * 1024 * 1024;
export const MAX_MANAGED_MEDIA_OBJECTS = 10_000;

function ascii(bytes, start, length) {
  return String.fromCharCode(...bytes.slice(start, start + length));
}

function pngInfo(bytes) {
  if (bytes.length < 24) return null;
  const signature = [137, 80, 78, 71, 13, 10, 26, 10];
  if (!signature.every((byte, index) => bytes[index] === byte)) return null;
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  return { mime: "image/png", extension: "png", width: view.getUint32(16), height: view.getUint32(20) };
}

function jpegInfo(bytes) {
  if (bytes.length < 4 || bytes[0] !== 0xff || bytes[1] !== 0xd8) return null;
  let offset = 2;
  while (offset + 9 < bytes.length) {
    if (bytes[offset] !== 0xff) { offset += 1; continue; }
    const marker = bytes[offset + 1];
    if (marker === 0xd9 || marker === 0xda) break;
    const length = (bytes[offset + 2] << 8) + bytes[offset + 3];
    if (length < 2 || offset + length + 2 > bytes.length) break;
    if ((marker >= 0xc0 && marker <= 0xc3)
      || (marker >= 0xc5 && marker <= 0xc7)
      || (marker >= 0xc9 && marker <= 0xcb)
      || (marker >= 0xcd && marker <= 0xcf)) {
      const height = (bytes[offset + 5] << 8) + bytes[offset + 6];
      const width = (bytes[offset + 7] << 8) + bytes[offset + 8];
      return { mime: "image/jpeg", extension: "jpg", width, height };
    }
    offset += length + 2;
  }
  return { mime: "image/jpeg", extension: "jpg", width: null, height: null };
}

function webpInfo(bytes) {
  if (bytes.length < 30 || ascii(bytes, 0, 4) !== "RIFF" || ascii(bytes, 8, 4) !== "WEBP") return null;
  const type = ascii(bytes, 12, 4);
  if (type === "VP8X") {
    const width = 1 + bytes[24] + (bytes[25] << 8) + (bytes[26] << 16);
    const height = 1 + bytes[27] + (bytes[28] << 8) + (bytes[29] << 16);
    return { mime: "image/webp", extension: "webp", width, height };
  }
  if (type === "VP8L" && bytes.length >= 25 && bytes[20] === 0x2f) {
    const bits = bytes[21] | (bytes[22] << 8) | (bytes[23] << 16) | (bytes[24] << 24);
    return {
      mime: "image/webp",
      extension: "webp",
      width: (bits & 0x3fff) + 1,
      height: ((bits >> 14) & 0x3fff) + 1
    };
  }
  if (type === "VP8 " && bytes.length >= 30 && bytes[23] === 0x9d && bytes[24] === 0x01 && bytes[25] === 0x2a) {
    return {
      mime: "image/webp",
      extension: "webp",
      width: (bytes[26] | (bytes[27] << 8)) & 0x3fff,
      height: (bytes[28] | (bytes[29] << 8)) & 0x3fff
    };
  }
  return { mime: "image/webp", extension: "webp", width: null, height: null };
}

export function inspectImage(bytes) {
  const value = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  const info = pngInfo(value) || jpegInfo(value) || webpInfo(value);
  if (!info) throw new ValidationError("Upload a genuine JPEG, PNG or WebP photograph.");
  if (info.width && info.height && (info.width > 8000 || info.height > 8000)) {
    throw new ValidationError("Photograph dimensions are too large. Resize it before uploading.");
  }
  return info;
}

export function safeMediaKey(value) {
  const key = String(value || "");
  if (!/^products\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+\.(?:webp|jpg|png)$/.test(key)) {
    throw new ValidationError("Media path is invalid.");
  }
  return key;
}

export async function parseMediaUpload(request) {
  const length = Number(request.headers.get("Content-Length") || 0);
  if (length > MAX_MEDIA_BYTES + 100_000) throw new ValidationError("Photograph upload is too large.");
  const contentType = request.headers.get("Content-Type") || "";
  if (!contentType.toLowerCase().startsWith("multipart/form-data")) {
    throw new ValidationError("Photograph uploads must use multipart form data.");
  }
  const form = await request.formData();
  const file = form.get("file");
  if (!(file instanceof File) || !file.size) throw new ValidationError("Choose a photograph to upload.");
  if (file.size > MAX_MEDIA_BYTES) throw new ValidationError("Photograph must be 2 MiB or smaller.");
  const bytes = new Uint8Array(await file.arrayBuffer());
  const info = inspectImage(bytes);
  const productId = String(form.get("product_id") || "").trim();
  if (!/^product_[a-f0-9-]{36}$/i.test(productId) && !/^product_[A-Za-z0-9_-]+$/.test(productId)) {
    throw new ValidationError("Product selection is invalid.");
  }
  const altEn = String(form.get("alt_en") || "").trim().slice(0, 500);
  const altTh = String(form.get("alt_th") || "").trim().slice(0, 500);
  const position = Math.max(0, Math.min(100, Number(form.get("position") || 0)));
  return { file, bytes, info, productId, altEn, altTh, position };
}

export async function storeMedia(bucket, upload, user) {
  if (!bucket || typeof bucket.put !== "function") {
    throw new RepositoryError("Product media storage is not configured.", 503, "MEDIA_UNAVAILABLE");
  }
  const key = safeMediaKey(`products/${upload.productId}/${crypto.randomUUID()}.${upload.info.extension}`);
  await bucket.put(key, upload.bytes, {
    httpMetadata: {
      contentType: upload.info.mime,
      cacheControl: "public, max-age=31536000, immutable"
    },
    customMetadata: {
      uploadedBy: user,
      uploadedAt: new Date().toISOString()
    }
  });
  return key;
}

export async function serveMedia(request, bucket, keyInput, ctx = {}) {
  if (!["GET", "HEAD"].includes(request.method)) {
    return new Response("Method not allowed", { status: 405, headers: { Allow: "GET, HEAD" } });
  }
  if (!bucket || typeof bucket.get !== "function") {
    return new Response("Not found", { status: 404 });
  }
  let key;
  try {
    key = safeMediaKey(keyInput);
  } catch {
    return new Response("Not found", { status: 404 });
  }
  const cache = globalThis.caches?.default;
  const cacheKey = new Request(new URL(request.url).toString(), { method: "GET" });
  if (cache) {
    const cached = await cache.match(cacheKey);
    if (cached) {
      if (request.headers.get("If-None-Match") === cached.headers.get("ETag")) {
        return new Response(null, { status: 304, headers: cached.headers });
      }
      return request.method === "HEAD"
        ? new Response(null, { status: cached.status, headers: cached.headers })
        : cached;
    }
  }
  const object = await bucket.get(key);
  if (!object) return new Response("Not found", { status: 404 });
  const headers = new Headers({
    "Cache-Control": "public, max-age=31536000, immutable",
    "X-Content-Type-Options": "nosniff",
    ETag: object.httpEtag || object.etag || ""
  });
  object.writeHttpMetadata?.(headers);
  if (request.headers.get("If-None-Match") === headers.get("ETag")) {
    return new Response(null, { status: 304, headers });
  }
  const response = new Response(request.method === "HEAD" ? null : object.body, { headers });
  if (request.method === "GET" && cache) {
    const task = cache.put(cacheKey, response.clone());
    if (typeof ctx?.waitUntil === "function") ctx.waitUntil(task);
    else await task;
  }
  return response;
}
