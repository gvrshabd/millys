# Cloudflare Administration Setup and Recovery

This document is for the technical owner. The code intentionally remains
deny-by-default until the exact administrator email addresses, Cloudflare
Access application and production D1/R2 bindings exist.

## Architecture

- Static customer assets continue to be served by Cloudflare Workers Assets.
- `GET /api/catalogue` reads published, non-archived D1 snapshots.
- `/admin/*` and `/admin/api/*` run through both Cloudflare Access and the
  Worker's own JWT/email authorization.
- D1 is the product source of truth; R2 stores future administrator uploads.
- Existing repository photographs remain static assets.
- `js/products.js` is retained only as an emergency browser fallback.

Cloudflare's documented `run_worker_first` routing is limited to `/api/*`,
`/admin*` and `/media/*`, leaving ordinary assets on the fast asset path.

## Required owner input

Obtain the exact administrator email address or addresses. Do not infer these
from the public support address. Normalize them to lowercase and separate
multiple addresses with commas.

Do not continue to production with an empty allowlist.

## Find the Cloudflare identifiers

### Access team domain

1. Open the Cloudflare dashboard and select **Zero Trust**.
2. Open **Settings**.
3. Locate **Team name** or **Team domain**.
4. Copy the full value ending in `.cloudflareaccess.com`. If Cloudflare shows
   only the team name, the full domain is
   `<team-name>.cloudflareaccess.com`.

### Access application AUD tag

Create the path-specific Milly's Access application first if it does not yet
exist. Protect only `millys.deluxejahseh.workers.dev/admin*`; do not put the
public customer catalogue behind an Access login.

1. In Zero Trust, open **Access controls → Applications**.
2. Find the Milly's administration application and select **Configure**.
3. Open **Additional settings**.
4. Copy **Application Audience (AUD) Tag** exactly.

### Production D1 database ID

1. Open **Workers & Pages → D1 SQL database**.
2. If `millys-catalogue` does not exist, select **Create database**, enter
   `millys-catalogue`, and create it.
3. Open `millys-catalogue` and copy its **Database ID** from its details or
   overview page.
4. As a second reliable method, run
   `npx wrangler d1 info millys-catalogue`; the UUID it reports is the same
   database ID.

## Local development

1. Install dependencies with `pnpm install`.
2. Copy `.dev.vars.example` to `.dev.vars`.
3. Replace every example value in `.dev.vars` with development-only values.
4. Generate the repeatable seed: `pnpm seed`.
5. Apply migrations locally:
   `npx wrangler d1 migrations apply millys-catalogue --local --persist-to ../.millys-wrangler-state`
6. Start the local Worker: `pnpm dev`.
7. Run `pnpm check`, `pnpm test` and `pnpm test:browser`.

Local Wrangler D1/R2 data is kept outside the static-asset directory in
`../.millys-wrangler-state`. It remains local and must not be treated as
production.

## Create production resources

Run while signed into the correct Cloudflare account:

1. `npx wrangler d1 create millys-catalogue`
2. `npx wrangler r2 bucket create millys-product-media`
3. Put the returned D1 database ID in the `DB` entry of `wrangler.jsonc`.
4. Confirm the R2 bucket binding is named `MEDIA` and points to
   `millys-product-media`.
5. Leave the static asset binding named `ASSETS`.

The committed placeholder database ID is intentionally invalid; this prevents
an accidental intermediate production deployment.

## Configure Cloudflare Access before deployment

In Cloudflare Zero Trust:

1. Open **Access controls → Applications**.
2. Add a **Self-hosted** application.
3. Protect the hostname `millys.deluxejahseh.workers.dev` and path `admin*`.
4. Create an Allow policy containing only the owner-approved email addresses.
5. Choose email one-time PIN or another owner-approved identity provider.
6. Copy the application Audience (`AUD`) tag.
7. Record the account's Access team domain, ending in
   `.cloudflareaccess.com`.

Replace `ACCESS_TEAM_DOMAIN` and `ACCESS_AUD` placeholders in the production
Worker configuration. Access is the outer gate; the Worker still validates the
signed JWT, issuer, audience, expiration, not-before, email and internal
allowlist on every admin request.

## Configure protected Worker values

Use Cloudflare secrets or protected dashboard variables; never commit the
values:

- `ADMIN_EMAILS`: exact lowercase approved addresses, comma-separated
- `CSRF_SECRET`: a cryptographically random value at least 32 characters long

For CLI-managed secrets:

```text
npx wrangler secret put ADMIN_EMAILS
npx wrangler secret put CSRF_SECRET
```

The Worker returns `503 ADMIN_NOT_CONFIGURED` when any required Access setting,
allowlist or CSRF secret is missing. It never falls back to allowing every
authenticated Cloudflare user.

## Review and apply production migrations

Before the initial migration:

1. Run `pnpm seed` and retain `catalogue-import-report.json` outside Git.
2. Confirm 110 products, 110 unique codes, 659 image references, zero missing
   image files and seven homepage showcases.
3. Review `migrations/0001_initial.sql` and `0002_seed_catalogue.sql`.
4. Confirm the current customer code and `js/products.js` snapshot are backed up.
5. Apply remotely:
   `npx wrangler d1 migrations apply millys-catalogue --remote`
6. Query D1 to confirm 110 rows, 110 unique codes, seven showcases and the
   expected category totals.
7. Download an Administration JSON export as soon as authorized access works.

The seed uses stable IDs derived from product codes and `INSERT OR IGNORE`, so
re-running the seed cannot duplicate the initial catalogue. It must not be used
as a destructive reset.

## Safe deployment order

1. Complete D1, R2, Access and protected variables.
2. Apply and verify migrations.
3. Run all local checks.
4. Confirm an unapproved/private-browser visit to `/admin/` is denied.
5. Commit only intended source, migration, test and documentation files.
6. Push `main`.
7. Monitor the Cloudflare Worker build and deployment.
8. Verify `/api/catalogue` returns 110 published products and an ETag.
9. Verify the customer home, Shop, product, inquiry and print/PDF paths.
10. Sign in with one approved address and exercise a reversible stock change.
11. Verify a non-approved address is rejected.

Do not push `wrangler.jsonc` with placeholders: Cloudflare's automatic main
deployment would fail. Do not deploy the write API without the Access policy.

## Cache behavior

The public catalogue uses a version-derived ETag and approximately 60 seconds
of public cache. Publish, archive, restore and published-stock operations bump
the catalogue version and delete the Worker's cached catalogue key. Draft-only
changes do neither.

Uploaded R2 photographs use Standard storage, immutable one-year browser/edge
cache headers and the Workers Cache API. Repeat views normally come from cache
instead of creating another R2 Class B read.

## Free-allowance safeguards

The application deliberately stays well below Cloudflare's published free
allowances during normal catalogue use:

- Each administrator upload is limited to 2 MiB and is converted to WebP in
  the browser when possible.
- Application-managed R2 media is hard-limited to 5 GiB and 10,000 objects.
- R2 uses Standard storage; do not change the bucket to Infrequent Access.
- The internal administrator allowlist fails closed above 10 addresses, below
  Zero Trust Free's 50-user limit.
- The R2 bucket remains private and has no public `r2.dev` URL.

Cloudflare's free R2 allowance is currently 10 GB-month, one million Class A
operations and ten million Class B operations per month. Cloudflare does not
offer an application-level hard billing stop; budget alerts are informational
and may be delayed. Create the lowest available account budget alert under
**Manage Account → Billing → Billable Usage**, monitor the R2 usage widget, and
do not upload objects manually because manual objects are outside the
application's 5 GiB accounting ceiling.

## Backup and recovery

### Application backup

Use **Export backup** in Administration before migrations, bulk imports and
large editing sessions. Store JSON exports somewhere owner-controlled and
outside the repository.

Imports are admin-only, validation-first and draft-only. Applying an import
requires a preview digest and exact typed confirmation. Published products are
not overwritten by an import.

### Restore a product

Use the product's **Previous versions → Restore to draft** control, preview it,
then publish. This is the preferred recovery for an accidental content edit.

### D1 Time Travel

D1 Time Travel is automatically available on production D1 storage. Retention
is plan-dependent (currently up to 30 days on paid plans and 7 days on free
plans). Retrieve a bookmark before any database-level restore:

```text
npx wrangler d1 time-travel info millys-catalogue
```

Restore by reviewed timestamp or bookmark only after taking a current JSON
export and recording the current bookmark:

```text
npx wrangler d1 time-travel restore millys-catalogue --bookmark=REVIEWED_BOOKMARK
```

Time Travel overwrites the database in place and cancels in-flight queries.
It is a destructive technical action and requires explicit owner approval.
Cloudflare returns the prior bookmark so the restore can itself be undone.

### Code rollback

For a Worker-code regression, roll back to the previous known-good Cloudflare
deployment/version. Do not restore D1 merely to fix a code deployment.

### Customer emergency fallback

If the catalogue API or D1 is unavailable, customer JavaScript first tries a
last successful session response and then the bundled `js/products.js`
snapshot. The site remains browseable without exposing a technical error. The
snapshot can be stale and is not a substitute for repairing D1.

## Revoke access

1. Remove the email from the Cloudflare Access Allow policy.
2. Update the `ADMIN_EMAILS` Worker secret/variable.
3. Redeploy/restart configuration as Cloudflare requires.
4. Confirm the removed identity receives `403` or is stopped by Access.

No authentication token or session material is stored in D1, local storage,
screenshots, exports or audit entries.

## Grant access

There is intentionally no "make administrator" button inside Milly's. Granting
access from the application itself would weaken the independent Cloudflare
security boundary.

1. Add the exact lowercase email to the Access application's Allow policy.
2. In **Workers & Pages → millys → Settings → Variables and Secrets**, edit the
   protected `ADMIN_EMAILS` value.
3. Set it to the complete comma-separated allowlist, retaining every existing
   administrator who should keep access.
4. Select **Deploy**.
5. Test the new identity in a private browser window before the current owner
   signs out.

To remove someone, perform the inverse operation in both controls. A change to
only one control is incomplete even though the remaining control still denies
the person.
