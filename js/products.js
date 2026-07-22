/*
  MILLY'S PRODUCT DATA
  =====================
  This is the only file staff need to edit to add, remove, or change products.
  Do NOT edit any other .js or .html file to update products.

  HOW TO ADD A NEW PRODUCT:
  1. Copy one whole product block below (from { to },)
  2. Paste it before the closing bracket ]
  3. Change every value. Keep the code_th / code_en, quotes and commas exactly as shown.
  4. Set "image" to the filename of the photo you uploaded into the /images folder.
     If you don't have a photo yet, leave it as "" and a placeholder will show.
  5. Save the file. Refresh the website. Done — no other file needs to change.

  FIELD NOTES:
  - category must be exactly "dresses" or "kaftans" (lowercase) to sort correctly.
  - stock: "in_stock", "low_stock", or "sold_out"
  - images: put as many filenames as you have, first one is the main photo.
*/

const PRODUCTS = [
  {
    code: "MLY-DR-001",
    name_en: "Blossom Wrap Dress",
    name_th: "เดรสห่อคลุมลายดอกไม้",
    category: "dresses",
    price: 1290,
    fabric_en: "Soft cotton-linen blend",
    fabric_th: "ผ้าฝ้ายผสมลินินเนื้อนุ่ม",
    colours: ["Blush Pink", "Sage Green", "Ivory"],
    measurements: { bust: "34-38 in", waist: "flexible wrap", length: "42 in", sleeve: "elbow-length" },
    care_en: "Hand wash cold, hang dry, cool iron only",
    care_th: "ซักมือน้ำเย็น ตากผึ่งลม รีดด้วยความร้อนต่ำ",
    stock: "in_stock",
    images: [],
    description_en: "A breezy wrap dress with a flattering tie waist, made for warm-weather days and easy movement.",
    description_th: "เดรสห่อคลุมทรงสวย ผูกเอวได้ตามสัดส่วน ใส่สบายเหมาะกับอากาศร้อน"
  },
  {
    code: "MLY-DR-002",
    name_en: "Garden Party Midi",
    name_th: "มิดิเดรสสวนดอกไม้",
    category: "dresses",
    price: 1590,
    fabric_en: "Crinkle chiffon",
    fabric_th: "ผ้าชีฟองย่น",
    colours: ["Dusty Rose", "Powder Blue"],
    measurements: { bust: "32-36 in", waist: "28-32 in", length: "44 in", sleeve: "sleeveless" },
    care_en: "Gentle machine wash, low heat dry",
    care_th: "ซักเครื่องโหมดถนอมผ้า อบแห้งไฟอ่อน",
    stock: "in_stock",
    images: [],
    description_en: "Flowing midi silhouette with a fitted bodice, perfect for garden parties and golden-hour dinners.",
    description_th: "ทรงมิดิพลิ้วสวย ช่วงบนกระชับพอดีตัว เหมาะกับงานปาร์ตี้กลางแจ้ง"
  },
  {
    code: "MLY-DR-003",
    name_en: "Sunday Market Sundress",
    name_th: "เดรสเที่ยวตลาดวันหยุด",
    category: "dresses",
    price: 990,
    fabric_en: "Cotton poplin",
    fabric_th: "ผ้าคอตตอนป็อปลิน",
    colours: ["Butter Yellow", "White", "Terracotta"],
    measurements: { bust: "33-37 in", waist: "26-30 in", length: "38 in", sleeve: "short sleeve" },
    care_en: "Machine wash cold, tumble dry low",
    care_th: "ซักเครื่องน้ำเย็น อบแห้งไฟอ่อน",
    stock: "low_stock",
    images: [],
    description_en: "An easygoing everyday dress with pockets, built for market mornings and errands.",
    description_th: "เดรสใส่สบายมีกระเป๋า เหมาะกับกิจกรรมประจำวัน"
  },
  {
    code: "MLY-KF-001",
    name_en: "Coral Reef Kaftan",
    name_th: "คาฟตันลายปะการัง",
    category: "kaftans",
    price: 1450,
    fabric_en: "Rayon voile",
    fabric_th: "ผ้าเรยอนวอยล์",
    colours: ["Coral", "Turquoise"],
    measurements: { bust: "free size, up to 44 in", waist: "free size", length: "52 in", sleeve: "wide sleeve" },
    care_en: "Hand wash cold, hang dry",
    care_th: "ซักมือน้ำเย็น ตากผึ่งลม",
    stock: "in_stock",
    images: [],
    description_en: "An oversized breezy kaftan with dropped shoulders, made for beach days and long lunches.",
    description_th: "คาฟตันทรงหลวมใส่สบาย เหมาะกับวันทะเลหรือมื้อกลางวันยาวๆ"
  },
  {
    code: "MLY-KF-002",
    name_en: "Desert Bloom Kaftan",
    name_th: "คาฟตันลายทะเลทราย",
    category: "kaftans",
    price: 1690,
    fabric_en: "Embroidered cotton",
    fabric_th: "ผ้าฝ้ายปักลาย",
    colours: ["Terracotta", "Cream"],
    measurements: { bust: "free size, up to 46 in", waist: "free size", length: "54 in", sleeve: "wide sleeve" },
    care_en: "Hand wash cold, do not bleach, cool iron",
    care_th: "ซักมือน้ำเย็น ห้ามฟอกขาว รีดด้วยความร้อนต่ำ",
    stock: "in_stock",
    images: [],
    description_en: "Hand-embroidered detailing along the neckline, a statement piece for evenings out.",
    description_th: "ปักลายมือบริเวณคอเสื้ออย่างประณีต เหมาะกับงานเย็นสุดพิเศษ"
  },
  {
    code: "MLY-KF-003",
    name_en: "Morning Linen Kaftan",
    name_th: "คาฟตันผ้าลินินยามเช้า",
    category: "kaftans",
    price: 1190,
    fabric_en: "Pure linen",
    fabric_th: "ผ้าลินินแท้",
    colours: ["Sand", "Sage Green", "White"],
    measurements: { bust: "free size, up to 42 in", waist: "free size", length: "50 in", sleeve: "3/4 sleeve" },
    care_en: "Machine wash cold gentle cycle, hang dry",
    care_th: "ซักเครื่องโหมดถนอมผ้าน้ำเย็น ตากผึ่งลม",
    stock: "sold_out",
    images: [],
    description_en: "A minimal linen kaftan for cool mornings, soft against the skin and easy to dress up or down.",
    description_th: "คาฟตันผ้าลินินเรียบง่าย เนื้อนุ่มสบายผิว ใส่ได้หลายโอกาส"
  }
];

// ---- Contact / brand links (edit these once, they apply site-wide) ----
const BRAND_LINKS = {
  line: "https://line.me/ti/p/~milly.2023",
  line_id: "milly.2023",
  tiktok: "https://www.tiktok.com/@millys_2023",
  shopee: "https://th.shp.ee/54TUgQgn?share_channel_code=1",
  lazada: "https://s.lazada.co.th/s.ZigNot"
};
