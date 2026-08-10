# Milly's Catalogue Administration Guide

Routine product work is done in the private administration page—not in GitHub
and not by editing code.

Administration address:

`https://millys.deluxejahseh.workers.dev/admin/`

Only email addresses approved in both Cloudflare Access and the Worker's
administrator allowlist can enter. There is deliberately no Admin link on the
customer website.

## Sign in

1. Open the administration address.
2. Enter your approved email address in the Cloudflare sign-in screen.
3. Complete the email one-time PIN or the identity method chosen by the owner.
4. The dashboard opens with totals for published, draft, low-stock, sold-out
   and archived products, plus recent changes.

Never forward a one-time PIN. Milly's staff will never need an Access token,
Cloudflare API key or GitHub token to manage products.

## Change one product's stock

1. Search for the product by its name or code.
2. Use the Stock menu beside that product.
3. Choose **In stock**, **Low stock** or **Sold out**.
4. Wait for the success message.

For a published product, this is an immediate live change. Newly loaded
customer pages normally receive it immediately and no later than the short
catalogue cache period (about 60 seconds). The success message offers a brief
Undo action.

## Change stock for several products

1. Tick the products to change.
2. Choose a stock state in the selection bar.
3. Select **Apply to selected**.
4. Review and accept the confirmation.

The change is applied as one operation. If any selected product changed in
another session, the whole action is rejected rather than partly applied.

## Add a product

1. Select **Add product**.
2. Check the suggested product code and replace it if the confirmed code is
   different. Product codes must be unique.
3. Enter the product category, price and stock.
4. Enter the English and Thai names, descriptions, fabric and care information.
5. Add colours and measurements in both languages.
6. Add optional size/colour combinations only when they are confirmed.
7. Add product-specific marketplace links when available.
8. Select **Save draft**.

A new product begins as a private draft. Saving it does not put it on the
customer website.

## Upload and arrange photographs

1. Save a new product once so it has a draft record.
2. In **Photographs**, choose a JPEG, PNG or WebP image.
3. Enter useful English and Thai alternative text.
4. Select **Upload photograph**.
5. Drag photographs into order, or use the up/down arrow buttons.

The first photograph is the primary catalogue image. The browser reduces large
photographs to a sensible size and WebP quality before upload. The server still
checks the real file type and size. Removing a photograph is staged safely;
an image used by a published product cannot be deleted until the replacement
draft has been published.

## English and Thai information

Drafts may be incomplete. Publication is blocked until required customer text,
measurements, colours and photograph alternative text are present in both
English and Thai. Product codes, prices and URLs do not need translation.

## Preview and publish

1. Select **Preview** to view the draft in the real customer product-page
   design. Switch between English and Thai inside the preview.
2. Correct anything that does not look right.
3. Select **Save draft**.
4. Select **Publish** and accept the confirmation.

Draft changes to an existing product remain private until Publish is selected.
Publishing creates a new recorded revision and refreshes the public catalogue.

If a product is selected as its category's homepage showcase, publication
reassigns that category atomically from the previous showcase. A category's
current showcase cannot be removed or archived until a replacement is assigned.

## Archive and restore

Open a product and select **Archive** when it should disappear from customer
pages without losing its history. Archived products remain in Administration
and can be restored later. Permanent deletion is intentionally absent from the
normal interface.

## Review history or restore an earlier version

- Open **History** to see who changed what and when.
- Open a product to see its previous revisions.
- Select **Restore to draft** beside an earlier revision.
- Preview the restored draft and Publish only when it is correct.

Restoring a revision creates another draft; it does not silently overwrite the
live customer product.

## Export a backup

Select **Download catalogue backup** on the Products dashboard. Keep the downloaded JSON
file in an owner-controlled location. It contains catalogue and change-history
data but no passwords, Access tokens or Cloudflare credentials.

For a complete disaster-recovery copy, double-click
`CREATE_MILLYS_BACKUP.cmd` on the authorized computer and choose a private
Google Drive folder. The dated ZIP adds the committed source, full Git history,
complete live D1 SQL export, managed R2 photographs, manifest, checksums and
restoration guide. Keep the adjacent SHA-256 file with it.

The complete backup deliberately does not contain passwords, Cloudflare API
tokens, Access sessions, one-time codes, Worker secrets or Google credentials.
Keep Drive sharing set to **Restricted**. Full instructions are in
`BACKUP_AND_RESTORE.md`.

## Emergency JSON import

The Help tab contains **Emergency JSON import**.

1. Choose a Milly's JSON backup.
2. Select **Validate and preview**.
3. Review the number of new and updated drafts.
4. Type the exact confirmation displayed.
5. Select **Apply to private drafts**.

Import never updates published customer products directly. It creates or
updates private drafts, checks that the catalogue has not changed since the
preview, and requires individual review and publication afterward.

## When changes become visible

- **Quick stock:** immediate for the published product; allow up to about one
  minute for cached customer requests.
- **Save draft:** private; customers see no change.
- **Publish:** live immediately after the operation; cached requests refresh
  within about one minute.
- **Archive/restore:** live immediately, with the same short cache window.
- **Photograph upload:** private until attached to a saved and published draft.

## Grant an administrator

Administrator access is deliberately not granted from the Milly's website.
This prevents a stolen administrator session from quietly authorizing another
person.

A technical owner must add the exact lowercase email address in both places:

1. The Cloudflare Access Allow policy protecting `/admin*`.
2. The Worker's protected `ADMIN_EMAILS` secret/variable.

`ADMIN_EMAILS` is one comma-separated list, for example
`owner@example.com,assistant@example.com`. Updating a Cloudflare secret
replaces its previous value, so keep the complete approved list in a password
manager and submit the whole list each time.

Milly's accepts at most 10 approved administrator addresses. This keeps the
catalogue comfortably below the 50-user Cloudflare Zero Trust Free allowance.

Test the new administrator in a private browser window before signing out the
existing owner. Never share passwords, one-time codes, session cookies or
Cloudflare API tokens.

## Keep Cloudflare usage free

- Upload photographs through Milly's Administration, not directly into R2.
- The uploader limits each file to 2 MiB; the application stops accepting new
  media at 5 GiB or 10,000 managed objects.
- Keep the R2 bucket on Standard storage and private access.
- Keep the approved administrator list at 10 or fewer.
- Review **Manage Account → Billing → Billable Usage** regularly and create the
  lowest available budget alert. Cloudflare alerts warn about spend but do not
  pause usage automatically.

## Revoke an administrator

A technical owner must remove the person's email in both places:

1. The Cloudflare Access Allow policy for `/admin*`.
2. The Worker's `ADMIN_EMAILS` secret/variable.

Update both controls. Removing only one is not the intended operating procedure,
even though the Worker independently blocks an email missing from its allowlist.

## If Administration is unavailable

1. Do not make customer-facing code changes as a first response.
2. Check whether the normal customer site still works. It has a cached and
   embedded emergency catalogue fallback.
3. Try a private browser window and sign in again.
4. Ask the technical maintainer to check Cloudflare Access, Worker health and
   D1/R2 bindings.
5. Keep the latest JSON export ready. Do not run an import or database restore
   until the cause is known.

## Technical emergency section

The authoritative catalogue is Cloudflare D1 after production migration.
Future uploads are stored in R2. `js/products.js` remains a read-only emergency
snapshot of the initial 110-product catalogue and must not be used for routine
edits.

Maintainer setup, migration, Access, export, D1 Time Travel and rollback steps
are in `CLOUDFLARE_ADMIN_SETUP.md`. Never commit `.dev.vars`, Access settings,
approved administrator emails, API tokens or backup exports.
