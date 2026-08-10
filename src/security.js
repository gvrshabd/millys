const encoder = new TextEncoder();
const jwksCache = new Map();
const MAX_APPROVED_ADMINISTRATORS = 10;

export class AuthError extends Error {
  constructor(message, status = 401, code = "AUTH_REQUIRED") {
    super(message);
    this.name = "AuthError";
    this.status = status;
    this.code = code;
  }
}

function base64UrlToBytes(value) {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
  const binary = atob(padded);
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

function bytesToBase64Url(bytes) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function parseJsonPart(value, label) {
  try {
    return JSON.parse(new TextDecoder().decode(base64UrlToBytes(value)));
  } catch {
    throw new AuthError(`Invalid Access token ${label}.`);
  }
}

function normalizedTeamDomain(value) {
  return String(value || "")
    .trim()
    .replace(/^https?:\/\//i, "")
    .replace(/\/+$/, "")
    .toLowerCase();
}

function configured(env) {
  const teamDomain = normalizedTeamDomain(env.ACCESS_TEAM_DOMAIN);
  const audience = String(env.ACCESS_AUD || "").trim();
  const csrfSecret = String(env.CSRF_SECRET || "").trim();
  const emails = [...new Set(String(env.ADMIN_EMAILS || "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean))];
  const placeholders = /^(replace|your-|example)/i;
  if (!teamDomain || placeholders.test(teamDomain)
    || !audience || placeholders.test(audience)
    || !csrfSecret || csrfSecret.length < 32
    || !emails.length
    || emails.length > MAX_APPROVED_ADMINISTRATORS) {
    throw new AuthError("Administration has not been configured.", 503, "ADMIN_NOT_CONFIGURED");
  }
  return { teamDomain, audience, csrfSecret, emails };
}

async function getJwks(teamDomain, fetcher, now) {
  const cached = jwksCache.get(teamDomain);
  if (cached && cached.expiresAt > now) return cached.keys;
  const response = await fetcher(`https://${teamDomain}/cdn-cgi/access/certs`, {
    headers: { Accept: "application/json" }
  });
  if (!response.ok) throw new AuthError("Could not validate the administrator session.");
  const payload = await response.json();
  if (!Array.isArray(payload.keys) || !payload.keys.length) {
    throw new AuthError("Cloudflare Access returned no signing keys.");
  }
  jwksCache.set(teamDomain, { keys: payload.keys, expiresAt: now + 300_000 });
  return payload.keys;
}

async function verifyJwt(jwt, config, { fetcher = fetch, now = Date.now() } = {}) {
  const parts = String(jwt || "").split(".");
  if (parts.length !== 3) throw new AuthError("A valid Cloudflare Access session is required.");
  const header = parseJsonPart(parts[0], "header");
  const claims = parseJsonPart(parts[1], "payload");
  if (header.alg !== "RS256" || !header.kid) throw new AuthError("Unsupported Access token.");

  const keys = await getJwks(config.teamDomain, fetcher, now);
  const jwk = keys.find((candidate) => candidate.kid === header.kid && candidate.kty === "RSA");
  if (!jwk) throw new AuthError("Access signing key was not recognized.");
  let key;
  try {
    key = await crypto.subtle.importKey(
      "jwk",
      jwk,
      { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
      false,
      ["verify"]
    );
  } catch {
    throw new AuthError("Access signing key was invalid.");
  }
  const validSignature = await crypto.subtle.verify(
    "RSASSA-PKCS1-v1_5",
    key,
    base64UrlToBytes(parts[2]),
    encoder.encode(`${parts[0]}.${parts[1]}`)
  );
  if (!validSignature) throw new AuthError("Access token signature was invalid.");

  const nowSeconds = Math.floor(now / 1000);
  const issuer = `https://${config.teamDomain}`;
  const audiences = Array.isArray(claims.aud) ? claims.aud : [claims.aud];
  if (claims.iss !== issuer) throw new AuthError("Access token issuer was invalid.");
  if (!audiences.includes(config.audience)) throw new AuthError("Access token audience was invalid.");
  if (!Number.isFinite(claims.exp) || claims.exp <= nowSeconds) throw new AuthError("Administrator session has expired.");
  if (Number.isFinite(claims.nbf) && claims.nbf > nowSeconds + 30) throw new AuthError("Administrator session is not active.");
  const email = String(claims.email || "").trim().toLowerCase();
  if (!email) throw new AuthError("Access token did not contain an email address.");
  return { claims, email };
}

async function hmac(secret, value) {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  return new Uint8Array(await crypto.subtle.sign("HMAC", key, encoder.encode(value)));
}

function csrfValue(identity) {
  return `${identity.claims.sub || ""}|${identity.email}|${identity.claims.exp}`;
}

export async function authenticateAdmin(request, env, options = {}) {
  const config = configured(env);
  const assertion = request.headers.get("Cf-Access-Jwt-Assertion");
  if (!assertion) throw new AuthError("A Cloudflare Access login is required.");
  const identity = await verifyJwt(assertion, config, options);
  if (!config.emails.includes(identity.email)) {
    throw new AuthError("This account is not approved for Milly's administration.", 403, "ADMIN_FORBIDDEN");
  }
  const csrf = bytesToBase64Url(await hmac(config.csrfSecret, csrfValue(identity)));
  return { ...identity, csrf };
}

function constantTimeEqual(left, right) {
  const a = encoder.encode(String(left || ""));
  const b = encoder.encode(String(right || ""));
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let index = 0; index < a.length; index += 1) mismatch |= a[index] ^ b[index];
  return mismatch === 0;
}

export function requireMutationProtection(request, identity) {
  const url = new URL(request.url);
  const origin = request.headers.get("Origin");
  if (origin !== url.origin) {
    throw new AuthError("Cross-origin administration requests are not permitted.", 403, "ORIGIN_REJECTED");
  }
  if (!constantTimeEqual(request.headers.get("X-Millys-CSRF"), identity.csrf)) {
    throw new AuthError("Administration security token was missing or invalid.", 403, "CSRF_REJECTED");
  }
}

export function clearJwksCacheForTests() {
  jwksCache.clear();
}
