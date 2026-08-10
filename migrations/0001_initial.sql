PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  code TEXT NOT NULL UNIQUE,
  draft_json TEXT NOT NULL CHECK (json_valid(draft_json)),
  published_json TEXT CHECK (published_json IS NULL OR json_valid(published_json)),
  state TEXT NOT NULL DEFAULT 'draft' CHECK (state IN ('draft', 'published', 'archived')),
  category TEXT NOT NULL CHECK (category IN ('dresses', 'kaftans', 'tops', 'sets', 'bags', 'pants', 'skirts')),
  stock TEXT NOT NULL CHECK (stock IN ('in_stock', 'low_stock', 'sold_out')),
  price INTEGER NOT NULL DEFAULT 0 CHECK (price >= 0),
  name_en TEXT NOT NULL DEFAULT '',
  name_th TEXT NOT NULL DEFAULT '',
  revision INTEGER NOT NULL DEFAULT 1 CHECK (revision > 0),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  published_at TEXT,
  created_by TEXT NOT NULL,
  updated_by TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_products_state ON products(state);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_stock ON products(stock);
CREATE INDEX IF NOT EXISTS idx_products_updated_at ON products(updated_at DESC);

CREATE TABLE IF NOT EXISTS product_media (
  id TEXT PRIMARY KEY,
  product_id TEXT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  r2_key TEXT NOT NULL UNIQUE,
  mime_type TEXT NOT NULL CHECK (mime_type IN ('image/jpeg', 'image/png', 'image/webp')),
  width INTEGER CHECK (width IS NULL OR width > 0),
  height INTEGER CHECK (height IS NULL OR height > 0),
  byte_size INTEGER NOT NULL CHECK (byte_size > 0),
  position INTEGER NOT NULL DEFAULT 0 CHECK (position >= 0),
  alt_en TEXT NOT NULL DEFAULT '',
  alt_th TEXT NOT NULL DEFAULT '',
  created_at TEXT NOT NULL,
  created_by TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_product_media_product ON product_media(product_id, position);

CREATE TABLE IF NOT EXISTS product_revisions (
  id TEXT PRIMARY KEY,
  product_id TEXT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  product_code TEXT NOT NULL,
  revision INTEGER NOT NULL,
  event TEXT NOT NULL,
  snapshot_json TEXT NOT NULL CHECK (json_valid(snapshot_json)),
  created_at TEXT NOT NULL,
  created_by TEXT NOT NULL,
  UNIQUE(product_id, revision, event)
);

CREATE INDEX IF NOT EXISTS idx_product_revisions_product
  ON product_revisions(product_id, created_at DESC);

CREATE TABLE IF NOT EXISTS audit_log (
  id TEXT PRIMARY KEY,
  administrator TEXT NOT NULL,
  action TEXT NOT NULL,
  product_id TEXT,
  product_code TEXT,
  previous_revision INTEGER,
  new_revision INTEGER,
  summary_json TEXT NOT NULL CHECK (json_valid(summary_json)),
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_audit_log_created_at ON audit_log(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_audit_log_product ON audit_log(product_id, created_at DESC);

CREATE TABLE IF NOT EXISTS catalogue_meta (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

-- Short-lived rows in this table let a D1 batch fail atomically when an
-- optimistic revision check no longer matches. Successful mutations remove
-- their guard before the batch commits.
CREATE TABLE IF NOT EXISTS mutation_guards (
  token TEXT PRIMARY KEY NOT NULL,
  created_at TEXT NOT NULL
);

INSERT OR IGNORE INTO catalogue_meta(key, value, updated_at)
VALUES ('version', '1', strftime('%Y-%m-%dT%H:%M:%fZ', 'now'));
