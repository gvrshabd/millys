import test from "node:test";
import assert from "node:assert/strict";
import { authenticateAdmin, clearJwksCacheForTests } from "../src/security.js";

const encoder = new TextEncoder();
const b64 = (value) => Buffer.from(typeof value === "string" ? value : JSON.stringify(value)).toString("base64url");

async function keyPair() {
  const pair = await crypto.subtle.generateKey({
    name: "RSASSA-PKCS1-v1_5", modulusLength: 2048,
    publicExponent: new Uint8Array([1, 0, 1]), hash: "SHA-256"
  }, true, ["sign", "verify"]);
  const jwk = await crypto.subtle.exportKey("jwk", pair.publicKey);
  return { ...pair, jwk: { ...jwk, kid: "test-key", alg: "RS256", use: "sig" } };
}

async function token(privateKey, claims, header = { alg: "RS256", kid: "test-key" }) {
  const unsigned = `${b64(header)}.${b64(claims)}`;
  const signature = await crypto.subtle.sign("RSASSA-PKCS1-v1_5", privateKey, encoder.encode(unsigned));
  return `${unsigned}.${Buffer.from(signature).toString("base64url")}`;
}

test("Access JWT verification rejects invalid cases and accepts an approved identity", async () => {
  clearJwksCacheForTests();
  const keys = await keyPair();
  const forged = await keyPair();
  const now = Date.now();
  const seconds = Math.floor(now / 1000);
  const env = {
    ACCESS_TEAM_DOMAIN: "millys.cloudflareaccess.com",
    ACCESS_AUD: "audience-123",
    ADMIN_EMAILS: "Owner@Example.com",
    CSRF_SECRET: "a-secure-test-secret-that-is-longer-than-thirty-two-characters"
  };
  const baseClaims = {
    iss: "https://millys.cloudflareaccess.com", aud: ["audience-123"],
    exp: seconds + 600, nbf: seconds - 10, sub: "person-1", email: "owner@example.com"
  };
  const fetcher = async () => Response.json({ keys: [keys.jwk] });
  const authenticate = async (jwt, environment = env) => authenticateAdmin(
    new Request("https://millys.example/admin/api/session", { headers: jwt ? { "Cf-Access-Jwt-Assertion": jwt } : {} }),
    environment,
    { fetcher, now }
  );

  await assert.rejects(() => authenticate(null), (error) => error.status === 401);
  await assert.rejects(() => authenticate(null, {}), (error) => error.status === 503);
  await assert.rejects(() => authenticate(null, {
    ...env,
    ADMIN_EMAILS: Array.from({ length: 11 }, (_, index) => `admin${index}@example.com`).join(",")
  }), (error) => error.status === 503);
  await assert.rejects(() => token(keys.privateKey, { ...baseClaims, exp: seconds - 1 }).then(authenticate), /expired/i);
  await assert.rejects(() => token(keys.privateKey, { ...baseClaims, iss: "https://wrong.cloudflareaccess.com" }).then(authenticate), /issuer/i);
  await assert.rejects(() => token(keys.privateKey, { ...baseClaims, aud: ["wrong"] }).then(authenticate), /audience/i);
  await assert.rejects(() => token(forged.privateKey, baseClaims).then(authenticate), /signature/i);
  await assert.rejects(() => token(keys.privateKey, { ...baseClaims, email: "stranger@example.com" }).then(authenticate), (error) => error.status === 403);

  const identity = await authenticate(await token(keys.privateKey, baseClaims));
  assert.equal(identity.email, "owner@example.com");
  assert.match(identity.csrf, /^[A-Za-z0-9_-]+$/);
});
