# Managing Products and Stock

You do not need Codex for routine product or stock changes. Product information
lives in one file:

`js/products.js`

Business contact details and shop-wide marketplace links live in:

`js/site-config.js`

Google Analytics and Search Console fields are also in `js/site-config.js`. They
can remain empty until those accounts are created.

## Important: work on a branch

Cloudflare automatically publishes the `main` branch. To keep an unfinished
change off the live website:

1. Open the `gvrshabd/millys` repository on GitHub.
2. Open the branch menu that currently says `main`.
3. Type a short branch name, such as `content/new-dresses-july`.
4. Choose **Create branch from main**.
5. Make and commit your edits on that branch.
6. Review the branch before opening and merging a pull request.

Do not edit or commit directly to `main` unless you want Cloudflare to deploy
the change.

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

Allowed category values:

- `dresses`
- `kaftans`
- `tops`
- `sets`
- `bags`

Set `is_new: true` to include the item under New Arrivals. Change it to
`false` when the item is no longer new.

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
