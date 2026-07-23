/*
  MILLY'S PRODUCT DATA
  =====================
  This is the only file you need to edit for products and stock.

  QUICK STOCK CHANGE
  Change stock to one of:
    "in_stock"  - available
    "low_stock" - nearly sold out
    "sold_out"  - unavailable

  Full instructions and a copy-ready product template are in
  PRODUCT_MANAGEMENT.md.
*/

const PRODUCT_CATEGORIES = {
  dresses: { en: "Dresses", th: "เดรส" },
  kaftans: { en: "Kaftans", th: "คาฟตัน" },
  tops: { en: "Tops", th: "เสื้อ" },
  sets: { en: "Sets", th: "ชุดเซ็ต" },
  bags: { en: "Bags", th: "กระเป๋า" }
};

const PRODUCTS = [
  {
    code: "MLY-DR-001",
    name: { en: "Blossom Wrap Dress", th: "เดรสห่อคลุมลายดอกไม้" },
    category: "dresses",
    is_new: true,
    price: 1290,
    fabric: { en: "Soft cotton-linen blend", th: "ผ้าฝ้ายผสมลินินเนื้อนุ่ม" },
    colours: [
      { en: "Blush Pink", th: "ชมพูบลัช" },
      { en: "Sage Green", th: "เขียวเสจ" },
      { en: "Ivory", th: "ไอวอรี" }
    ],
    measurements: [
      { label: { en: "Bust", th: "รอบอก" }, value: { en: "34-38 in", th: "34-38 นิ้ว" } },
      { label: { en: "Waist", th: "รอบเอว" }, value: { en: "Adjustable wrap", th: "ปรับได้ด้วยการผูกเอว" } },
      { label: { en: "Length", th: "ความยาว" }, value: { en: "42 in", th: "42 นิ้ว" } },
      { label: { en: "Sleeve", th: "แขนเสื้อ" }, value: { en: "Elbow-length", th: "ยาวถึงข้อศอก" } }
    ],
    care: {
      en: "Hand wash cold, hang dry, cool iron only",
      th: "ซักมือน้ำเย็น ตากผึ่งลม รีดด้วยความร้อนต่ำ"
    },
    stock: "in_stock",
    images: [],
    video: null,
    description: {
      en: "A breezy wrap dress with a flattering tie waist, made for warm-weather days and easy movement.",
      th: "เดรสห่อคลุมทรงสวย ผูกเอวได้ตามสัดส่วน ใส่สบายเหมาะกับอากาศร้อน"
    },
    marketplace_links: { line: "", tiktok: "", shopee: "", lazada: "" }
  },
  {
    code: "MLY-DR-002",
    name: { en: "Garden Party Midi", th: "มิดิเดรสสวนดอกไม้" },
    category: "dresses",
    is_new: true,
    price: 1590,
    fabric: { en: "Crinkle chiffon", th: "ผ้าชีฟองย่น" },
    colours: [
      { en: "Dusty Rose", th: "ชมพูกุหลาบหม่น" },
      { en: "Powder Blue", th: "ฟ้าอ่อน" }
    ],
    measurements: [
      { label: { en: "Bust", th: "รอบอก" }, value: { en: "32-36 in", th: "32-36 นิ้ว" } },
      { label: { en: "Waist", th: "รอบเอว" }, value: { en: "28-32 in", th: "28-32 นิ้ว" } },
      { label: { en: "Length", th: "ความยาว" }, value: { en: "44 in", th: "44 นิ้ว" } },
      { label: { en: "Sleeve", th: "แขนเสื้อ" }, value: { en: "Sleeveless", th: "แขนกุด" } }
    ],
    care: {
      en: "Gentle machine wash, low heat dry",
      th: "ซักเครื่องโหมดถนอมผ้า อบแห้งไฟอ่อน"
    },
    stock: "in_stock",
    images: [],
    video: null,
    description: {
      en: "Flowing midi silhouette with a fitted bodice, perfect for garden parties and golden-hour dinners.",
      th: "ทรงมิดิพลิ้วสวย ช่วงบนกระชับพอดีตัว เหมาะกับงานปาร์ตี้กลางแจ้ง"
    },
    marketplace_links: { line: "", tiktok: "", shopee: "", lazada: "" }
  },
  {
    code: "MLY-DR-003",
    name: { en: "Sunday Market Sundress", th: "เดรสเที่ยวตลาดวันหยุด" },
    category: "dresses",
    is_new: false,
    price: 990,
    fabric: { en: "Cotton poplin", th: "ผ้าคอตตอนป็อปลิน" },
    colours: [
      { en: "Butter Yellow", th: "เหลืองเนย" },
      { en: "White", th: "ขาว" },
      { en: "Terracotta", th: "ส้มดินเผา" }
    ],
    measurements: [
      { label: { en: "Bust", th: "รอบอก" }, value: { en: "33-37 in", th: "33-37 นิ้ว" } },
      { label: { en: "Waist", th: "รอบเอว" }, value: { en: "26-30 in", th: "26-30 นิ้ว" } },
      { label: { en: "Length", th: "ความยาว" }, value: { en: "38 in", th: "38 นิ้ว" } },
      { label: { en: "Sleeve", th: "แขนเสื้อ" }, value: { en: "Short sleeve", th: "แขนสั้น" } }
    ],
    care: {
      en: "Machine wash cold, tumble dry low",
      th: "ซักเครื่องน้ำเย็น อบแห้งไฟอ่อน"
    },
    stock: "low_stock",
    images: [],
    video: null,
    description: {
      en: "An easygoing everyday dress with pockets, built for market mornings and errands.",
      th: "เดรสใส่สบายมีกระเป๋า เหมาะกับกิจกรรมประจำวัน"
    },
    marketplace_links: { line: "", tiktok: "", shopee: "", lazada: "" }
  },
  {
    code: "MLY-KF-001",
    name: { en: "Coral Reef Kaftan", th: "คาฟตันลายปะการัง" },
    category: "kaftans",
    is_new: true,
    price: 1450,
    fabric: { en: "Rayon voile", th: "ผ้าเรยอนวอยล์" },
    colours: [
      { en: "Coral", th: "คอรัล" },
      { en: "Turquoise", th: "เทอร์ควอยซ์" }
    ],
    measurements: [
      { label: { en: "Bust", th: "รอบอก" }, value: { en: "Free size, up to 44 in", th: "ฟรีไซซ์ รอบอกไม่เกิน 44 นิ้ว" } },
      { label: { en: "Waist", th: "รอบเอว" }, value: { en: "Free size", th: "ฟรีไซซ์" } },
      { label: { en: "Length", th: "ความยาว" }, value: { en: "52 in", th: "52 นิ้ว" } },
      { label: { en: "Sleeve", th: "แขนเสื้อ" }, value: { en: "Wide sleeve", th: "แขนกว้าง" } }
    ],
    care: { en: "Hand wash cold, hang dry", th: "ซักมือน้ำเย็น ตากผึ่งลม" },
    stock: "in_stock",
    images: [],
    video: null,
    description: {
      en: "An oversized breezy kaftan with dropped shoulders, made for beach days and long lunches.",
      th: "คาฟตันทรงหลวมใส่สบาย เหมาะกับวันทะเลหรือมื้อกลางวันยาวๆ"
    },
    marketplace_links: { line: "", tiktok: "", shopee: "", lazada: "" }
  },
  {
    code: "MLY-KF-002",
    name: { en: "Desert Bloom Kaftan", th: "คาฟตันลายทะเลทราย" },
    category: "kaftans",
    is_new: true,
    price: 1690,
    fabric: { en: "Embroidered cotton", th: "ผ้าฝ้ายปักลาย" },
    colours: [
      { en: "Terracotta", th: "ส้มดินเผา" },
      { en: "Cream", th: "ครีม" }
    ],
    measurements: [
      { label: { en: "Bust", th: "รอบอก" }, value: { en: "Free size, up to 46 in", th: "ฟรีไซซ์ รอบอกไม่เกิน 46 นิ้ว" } },
      { label: { en: "Waist", th: "รอบเอว" }, value: { en: "Free size", th: "ฟรีไซซ์" } },
      { label: { en: "Length", th: "ความยาว" }, value: { en: "54 in", th: "54 นิ้ว" } },
      { label: { en: "Sleeve", th: "แขนเสื้อ" }, value: { en: "Wide sleeve", th: "แขนกว้าง" } }
    ],
    care: {
      en: "Hand wash cold, do not bleach, cool iron",
      th: "ซักมือน้ำเย็น ห้ามฟอกขาว รีดด้วยความร้อนต่ำ"
    },
    stock: "in_stock",
    images: [],
    video: null,
    description: {
      en: "Hand-embroidered detailing along the neckline, a statement piece for evenings out.",
      th: "ปักลายมือบริเวณคอเสื้ออย่างประณีต เหมาะกับงานเย็นสุดพิเศษ"
    },
    marketplace_links: { line: "", tiktok: "", shopee: "", lazada: "" }
  },
  {
    code: "MLY-KF-003",
    name: { en: "Morning Linen Kaftan", th: "คาฟตันผ้าลินินยามเช้า" },
    category: "kaftans",
    is_new: false,
    price: 1190,
    fabric: { en: "Pure linen", th: "ผ้าลินินแท้" },
    colours: [
      { en: "Sand", th: "สีทราย" },
      { en: "Sage Green", th: "เขียวเสจ" },
      { en: "White", th: "ขาว" }
    ],
    measurements: [
      { label: { en: "Bust", th: "รอบอก" }, value: { en: "Free size, up to 42 in", th: "ฟรีไซซ์ รอบอกไม่เกิน 42 นิ้ว" } },
      { label: { en: "Waist", th: "รอบเอว" }, value: { en: "Free size", th: "ฟรีไซซ์" } },
      { label: { en: "Length", th: "ความยาว" }, value: { en: "50 in", th: "50 นิ้ว" } },
      { label: { en: "Sleeve", th: "แขนเสื้อ" }, value: { en: "3/4 sleeve", th: "แขนสามส่วน" } }
    ],
    care: {
      en: "Machine wash cold gentle cycle, hang dry",
      th: "ซักเครื่องโหมดถนอมผ้าน้ำเย็น ตากผึ่งลม"
    },
    stock: "sold_out",
    images: [],
    video: null,
    description: {
      en: "A minimal linen kaftan for cool mornings, soft against the skin and easy to dress up or down.",
      th: "คาฟตันผ้าลินินเรียบง่าย เนื้อนุ่มสบายผิว ใส่ได้หลายโอกาส"
    },
    marketplace_links: { line: "", tiktok: "", shopee: "", lazada: "" }
  }
];
