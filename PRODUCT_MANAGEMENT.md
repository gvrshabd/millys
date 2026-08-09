# Managing Products and Stock

You do not need Codex for routine product or stock changes. Product information
lives in one file:

`js/products.js`

Product codes are internal identifiers. They are required in the data file and
page URL, but are not displayed in the customer-facing catalogue or product
details.

Business contact details and shop-wide marketplace links live in:

`js/site-config.js`

Google Analytics and Search Console fields are also in `js/site-config.js`. They
can remain empty until those accounts are created.

## Important: prepare changes carefully

Cloudflare publishes `main`, and the current Workers integration has also been
observed building other pushed branches. Do not assume that a GitHub branch is
a private preview. Prepare and check unfinished product data locally before
pushing it to GitHub.

For an organized review history:

1. Open the `gvrshabd/millys` repository on GitHub.
2. Open the branch menu that currently says `main`.
3. Type a short branch name, such as `content/new-dresses-july`.
4. Choose **Create branch from main**.
5. Make and commit your edits on that branch.
6. Review the branch before opening and merging a pull request.

Only merge into `main` when the product is ready to become the official
production version.

## Change stock status

1. Open `js/products.js`.
2. Find the product by its `code`, such as `MLY-DR-001`.
3. Find its `stock` line.
4. Use exactly one of these values:

```js
stock: "in_stock"
stock: "low_stock"
stock: "sold_out"
```

5. Commit the change to your content branch.

Sold-out products remain visible in the catalogue, but their order buttons are
disabled. This helps customers identify an item while preventing an accidental
order attempt.

## Add product photographs

1. Prepare web-sized JPG, PNG, WebP, or AVIF files.
2. Use simple lowercase filenames without spaces, for example:
   `mly-dr-004-front.webp`.
3. In GitHub, open the `images/products` folder and choose
   **Add file > Upload files**.
4. Add each image to the product's `images` list:

```js
images: [
  {
    src: "products/mly-dr-004-front.webp",
    alt: {
      en: "Front view of the blue wrap dress",
      th: "ภาพด้านหน้าของเดรสห่อคลุมสีน้ำเงิน"
    }
  },
  {
    src: "products/mly-dr-004-back.webp",
    alt: {
      en: "Back view of the blue wrap dress",
      th: "ภาพด้านหลังของเดรสห่อคลุมสีน้ำเงิน"
    }
  }
]
```

The first image is the main catalogue photograph. Additional images become
gallery thumbnails.

## Choose a homepage collection image or video

Each homepage collection is represented by one product with a `home_showcase`
field. `image_index` is zero-based: `0` selects the first product image, `1`
selects the second, and so on.

```js
home_showcase: {
  image_index: 1,
  name: {
    en: "Short English collection feature name",
    th: "Short Thai collection feature name"
  }
}
```

Use `home_showcase` on only one product in each category. To replace its still
image with a future homepage video, upload a web-sized MP4 file and add an
optional `hero_video` path. The selected product image remains the poster and
reduced-motion fallback.

```js
home_showcase: {
  image_index: 1,
  hero_video: "products/mly-sk-001-hero.mp4",
  name: {
    en: "Pleated Patchwork Skirt",
    th: "กระโปรงยาวผ้าต่อทรงพลีท"
  }
}
```

## Add a product video

Upload a short MP4 file to `images/products`, then add:

```js
video: {
  src: "products/mly-dr-004-video.mp4",
  poster: "products/mly-dr-004-front.webp"
}
```

If there is no video, use:

```js
video: null
```

## Add a new product

Copy one complete product object in `js/products.js`, paste it before the final
closing `];`, add a comma between products, and update every field.

```js
{
  code: "MLY-DR-004",
  name: {
    en: "English product name",
    th: "ชื่อสินค้าภาษาไทย"
  },
  category: "dresses",
  is_new: true,
  price: 1290,
  fabric: {
    en: "English fabric description",
    th: "รายละเอียดเนื้อผ้าภาษาไทย"
  },
  colours: [
    { en: "Blue", th: "สีน้ำเงิน" }
  ],
  measurements: [
    {
      label: { en: "Bust", th: "รอบอก" },
      value: { en: "34-38 in", th: "34-38 นิ้ว" }
    },
    {
      label: { en: "Waist", th: "รอบเอว" },
      value: { en: "28-32 in", th: "28-32 นิ้ว" }
    },
    {
      label: { en: "Length", th: "ความยาว" },
      value: { en: "42 in", th: "42 นิ้ว" }
    }
  ],
  care: {
    en: "English care instructions",
    th: "คำแนะนำการดูแลภาษาไทย"
  },
  stock: "in_stock",
  images: [],
  video: null,
  description: {
    en: "English product description.",
    th: "รายละเอียดสินค้าภาษาไทย"
  },
  marketplace_links: {
    line: "",
    tiktok: "",
    shopee: "",
    lazada: ""
  }
}
```

If care instructions are unavailable, use `care: null`. The care row will be
omitted from that product page.

Allowed category values:

- `dresses`
- `kaftans`
- `tops`
- `sets`
- `bags`
- `pants`
- `skirts`

Set `is_new: true` to show a small "New" badge on the product card. Change it
to `false` when the item is no longer new. There is no separate New Arrivals
category.

## Optional exact variant availability

Do not add a size/colour availability matrix unless the combinations have
been confirmed. When exact combination data becomes available, add this
optional field to the product:

```js
variants: [
  {
    size: { en: "S", th: "S" },
    colour: { en: "Blue", th: "สีน้ำเงิน" },
    available: true
  },
  {
    size: { en: "M", th: "M" },
    colour: { en: "Blue", th: "สีน้ำเงิน" },
    available: false
  }
]
```

The website displays the matrix only when `variants` exists and contains real
data. Leave the field out when availability is unknown.

## Product-specific order links

Paste a product's exact marketplace address into `marketplace_links`:

```js
marketplace_links: {
  line: "https://...",
  tiktok: "https://...",
  shopee: "https://...",
  lazada: "https://..."
}
```

If a field is left empty, the website uses the general Milly's shop link from
`js/site-config.js`.

## Remove a product

If the item may return, prefer `stock: "sold_out"`. To remove it completely,
delete the entire product object from its opening `{` to its closing `},`.

## Before merging a content update

- Check the product code is unique.
- Check the price and measurements against the source information.
- Check English and Thai fields.
- Open every uploaded image.
- Test all product-specific order links.
- Confirm the branch, not `main`, contains the change.
- Ask a Thai-speaking reviewer to approve customer-facing Thai copy.
