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
  "dresses": {
    "en": "Dresses",
    "th": "เดรส"
  },
  "kaftans": {
    "en": "Kaftans",
    "th": "กาฟตัน"
  },
  "tops": {
    "en": "Tops",
    "th": "เสื้อ"
  },
  "sets": {
    "en": "Sets",
    "th": "ชุดเซ็ต"
  },
  "bags": {
    "en": "Bags",
    "th": "กระเป๋า"
  },
  "pants": {
    "en": "Pants",
    "th": "กางเกง"
  },
  "skirts": {
    "en": "Skirts",
    "th": "กระโปรง"
  }
};

const PRODUCTS = [
  {
    "code": "MLY-TP-001",
    "name": {
      "en": "Bohemian Butterfly-Sleeve Drawstring Top",
      "th": "เสื้อโบฮีเมียนแขนปีกผีเสื้อเอวรูด"
    },
    "category": "tops",
    "home_showcase": {
      "image_index": 0,
      "name": {
        "en": "Butterfly-Sleeve Drawstring Top",
        "th": "เสื้อแขนปีกผีเสื้อเอวรูด"
      }
    },
    "is_new": true,
    "price": 199,
    "fabric": {
      "en": "Polyester",
      "th": "โพลีเอสเตอร์"
    },
    "colours": [
      {
        "en": "Navy",
        "th": "สีกรมท่า"
      },
      {
        "en": "Orange",
        "th": "สีส้ม"
      },
      {
        "en": "Green",
        "th": "สีเขียว"
      },
      {
        "en": "Black",
        "th": "สีดำ"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "ฟรีไซส์"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "Fits 34-54 in (up to 140 cm)",
          "th": "ใส่ได้ตั้งแต่ 34-54 นิ้ว (ประมาณ 140 ซม.)"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "90 cm (about 35 in)",
          "th": "90 ซม. (ประมาณ 35 นิ้ว)"
        }
      },
      {
        "label": {
          "en": "Shoulder / batwing width",
          "th": "ไหล่ / ความกว้างทรงปีก"
        },
        "value": {
          "en": "140 cm",
          "th": "140 ซม."
        }
      },
      {
        "label": {
          "en": "Waist",
          "th": "รอบเอว"
        },
        "value": {
          "en": "140 cm, adjustable drawstring",
          "th": "140 ซม. พร้อมเชือกรูดปรับได้"
        }
      },
      {
        "label": {
          "en": "Sleeve length",
          "th": "ความยาวแขน"
        },
        "value": {
          "en": "30 cm",
          "th": "30 ซม."
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/mly-tp-001-navy-front.jpg",
        "alt": {
          "en": "Front view of the navy bohemian butterfly-sleeve top",
          "th": "ภาพด้านหน้าของเสื้อโบฮีเมียนแขนปีกผีเสื้อสีกรมท่า"
        }
      },
      {
        "src": "products/mly-tp-001-navy-alt.jpg",
        "alt": {
          "en": "Navy bohemian butterfly-sleeve top shown from an alternate angle",
          "th": "เสื้อโบฮีเมียนแขนปีกผีเสื้อสีกรมท่าในอีกมุมหนึ่ง"
        }
      },
      {
        "src": "products/mly-tp-001-orange-front.jpg",
        "alt": {
          "en": "Front view of the orange bohemian butterfly-sleeve top",
          "th": "ภาพด้านหน้าของเสื้อโบฮีเมียนแขนปีกผีเสื้อสีส้ม"
        }
      },
      {
        "src": "products/mly-tp-001-green-front.jpg",
        "alt": {
          "en": "Front view of the green bohemian butterfly-sleeve top",
          "th": "ภาพด้านหน้าของเสื้อโบฮีเมียนแขนปีกผีเสื้อสีเขียว"
        }
      },
      {
        "src": "products/mly-tp-001-black-front.jpg",
        "alt": {
          "en": "Front view of the black bohemian butterfly-sleeve top",
          "th": "ภาพด้านหน้าของเสื้อโบฮีเมียนแขนปีกผีเสื้อสีดำ"
        }
      },
      {
        "src": "products/mly-tp-001-black-alt.jpg",
        "alt": {
          "en": "Black bohemian butterfly-sleeve top shown from an alternate angle",
          "th": "เสื้อโบฮีเมียนแขนปีกผีเสื้อสีดำในอีกมุมหนึ่ง"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "A lightweight floral bohemian top with butterfly-style batwing sleeves and an adjustable drawstring below the bust. Its relaxed one-size shape is comfortable for casual outings, beach days, or wearing at home.",
      "th": "เสื้อโบฮีเมียนลายดอก แขนปีกผีเสื้อทรงค้างคาว พร้อมเชือกรูดใต้อกเพื่อปรับทรง ฟรีไซส์ เนื้อผ้าเบา ใส่สบาย เหมาะสำหรับใส่เที่ยว เดินเล่นชายหาด หรือใส่อยู่บ้าน"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/a-a-i4796572163-s19816173770.html"
    }
  },
  {
    "code": "LZD-16214275729",
    "name": {
      "en": "Long Dress, Batwing, Spiral Flower Pattern, One Size",
      "th": "เดรสยาว ทรงปีกค้างคาว ลาย ดอก Spiral FreeSize"
    },
    "category": "dresses",
    "is_new": false,
    "price": 259,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "Red",
        "th": "KTL1001 แดง"
      },
      {
        "en": "Sky Blue",
        "th": "KTL1002 ฟ้า"
      },
      {
        "en": "Blue",
        "th": "KTL1003 น้ำเงิน"
      },
      {
        "en": "Purple",
        "th": "KTL1004 ม่วง"
      },
      {
        "en": "Navy",
        "th": "KTL1005 กรมท่า"
      },
      {
        "en": "Brown",
        "th": "KTL1006 น้ำตาล"
      },
      {
        "en": "Black",
        "th": "KTL1007 ดำ"
      },
      {
        "en": "Black and White",
        "th": "KTL1008 ดำขาว"
      },
      {
        "en": "White and Black",
        "th": "KTL1009 ขาวดำ"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "Approx. 34–54 in",
          "th": "อกใส่ได้ประมาณ 34–54 นิ้ว"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "Approx. 52 in",
          "th": "ความยาวประมาณ 52 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16214275729-01.webp",
        "alt": {
          "en": "Main view of Long Dress, Batwing, Spiral Flower Pattern, One Size",
          "th": "ภาพหลักของ เดรสยาว ทรงปีกค้างคาว ลาย ดอก Spiral FreeSize"
        }
      },
      {
        "src": "products/lzd-16214275729-02.webp",
        "alt": {
          "en": "Additional view 2 of Long Dress, Batwing, Spiral Flower Pattern, One Size",
          "th": "ภาพเพิ่มเติม 2 ของ เดรสยาว ทรงปีกค้างคาว ลาย ดอก Spiral FreeSize"
        }
      },
      {
        "src": "products/lzd-16214275729-03.webp",
        "alt": {
          "en": "Additional view 3 of Long Dress, Batwing, Spiral Flower Pattern, One Size",
          "th": "ภาพเพิ่มเติม 3 ของ เดรสยาว ทรงปีกค้างคาว ลาย ดอก Spiral FreeSize"
        }
      },
      {
        "src": "products/lzd-16214275729-04.webp",
        "alt": {
          "en": "Additional view 4 of Long Dress, Batwing, Spiral Flower Pattern, One Size",
          "th": "ภาพเพิ่มเติม 4 ของ เดรสยาว ทรงปีกค้างคาว ลาย ดอก Spiral FreeSize"
        }
      },
      {
        "src": "products/lzd-16214275729-05.webp",
        "alt": {
          "en": "Additional view 5 of Long Dress, Batwing, Spiral Flower Pattern, One Size",
          "th": "ภาพเพิ่มเติม 5 ของ เดรสยาว ทรงปีกค้างคาว ลาย ดอก Spiral FreeSize"
        }
      },
      {
        "src": "products/lzd-16214275729-06.webp",
        "alt": {
          "en": "Additional view 6 of Long Dress, Batwing, Spiral Flower Pattern, One Size",
          "th": "ภาพเพิ่มเติม 6 ของ เดรสยาว ทรงปีกค้างคาว ลาย ดอก Spiral FreeSize"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "🌸 Long bat wing style dress with Spiral flower pattern 🌸 📏 Free size ✔ Chest can fit approximately 34–54 inches. ✔ Length approximately 52 inches. ✔ Suitable for women sizes S–3XL.",
      "th": "🌸 เดรสยาวทรงปีกค้างคาว ลายดอก Spiral 🌸 📏 ฟรีไซซ์ ✔ อกใส่ได้ประมาณ 34–54 นิ้ว ✔ ความยาวประมาณ 52 นิ้ว ✔ เหมาะสำหรับสาวไซซ์ S–3XL"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/spiral-freesize-i16214275729-s127385901671.html"
    }
  },
  {
    "code": "LZD-16221717311",
    "name": {
      "en": "Short Dress, Batwing, One Size, New Pattern",
      "th": "เดรสสั้น ทรงปีกค้างคาว Free Size ลายใหม่"
    },
    "category": "dresses",
    "is_new": true,
    "price": 199,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "Blue",
        "th": "KTS2401 น้ำเงิน"
      },
      {
        "en": "Red",
        "th": "KTS2402 แดง"
      },
      {
        "en": "Purple",
        "th": "KTS2403 ม่วง"
      },
      {
        "en": "Navy",
        "th": "KTS2404 กรมท่า"
      },
      {
        "en": "Black",
        "th": "KTS2405 ดำ"
      },
      {
        "en": "Pink",
        "th": "KTS2406 ชมพู"
      },
      {
        "en": "Yellow",
        "th": "KTS2407 เหลือง"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "34–54 in",
          "th": "อก 34-54 นิ้ว"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "34 in",
          "th": "ยาว 34 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16221717311-01.webp",
        "alt": {
          "en": "Main view of Short Dress, Batwing, One Size, New Pattern",
          "th": "ภาพหลักของ เดรสสั้น ทรงปีกค้างคาว Free Size ลายใหม่"
        }
      },
      {
        "src": "products/lzd-16221717311-02.webp",
        "alt": {
          "en": "Additional view 2 of Short Dress, Batwing, One Size, New Pattern",
          "th": "ภาพเพิ่มเติม 2 ของ เดรสสั้น ทรงปีกค้างคาว Free Size ลายใหม่"
        }
      },
      {
        "src": "products/lzd-16221717311-03.webp",
        "alt": {
          "en": "Additional view 3 of Short Dress, Batwing, One Size, New Pattern",
          "th": "ภาพเพิ่มเติม 3 ของ เดรสสั้น ทรงปีกค้างคาว Free Size ลายใหม่"
        }
      },
      {
        "src": "products/lzd-16221717311-04.webp",
        "alt": {
          "en": "Additional view 4 of Short Dress, Batwing, One Size, New Pattern",
          "th": "ภาพเพิ่มเติม 4 ของ เดรสสั้น ทรงปีกค้างคาว Free Size ลายใหม่"
        }
      },
      {
        "src": "products/lzd-16221717311-05.webp",
        "alt": {
          "en": "Additional view 5 of Short Dress, Batwing, One Size, New Pattern",
          "th": "ภาพเพิ่มเติม 5 ของ เดรสสั้น ทรงปีกค้างคาว Free Size ลายใหม่"
        }
      },
      {
        "src": "products/lzd-16221717311-06.webp",
        "alt": {
          "en": "Additional view 6 of Short Dress, Batwing, One Size, New Pattern",
          "th": "ภาพเพิ่มเติม 6 ของ เดรสสั้น ทรงปีกค้างคาว Free Size ลายใหม่"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "🌸 New patterns have arrived! Short bat wing style dress in 7 super cool colors 🌸 Beautiful to wear, comfortable to wear, easy to match with every look 💕 ✨ Bat wing style dress, V-neck design. ✨ Drawstring waist, adjustable to fit your figure. ✨ Soft fabric, comfortable to wear, not hot. ✨ Wear it to travel to a cafe, the beach or wear it at home and it's beautiful. ✨ Free size, can wear many sizes. 🎨 Available in 7 colors. ❤️ Red 💙 Blue 🖤 black 💜 Purple 💗 Pink 🌙 Navy 💛 Mustard yellow Chest 34-54 inches | Length 34 inches |",
      "th": "🌸 ลายใหม่มาแล้ว! เดรสสั้นทรงปีกค้างคาว 7 สีสุดปัง 🌸 ใส่แล้วสวย ใส่สบาย แมทช์ง่ายทุกลุค 💕 ✨ เดรสทรงปีกค้างคาว ดีไซน์คอวี ✨ เชือกผูกเอว ปรับเข้ารูปได้ ✨ เนื้อผ้านุ่ม ใส่สบาย ไม่ร้อน ✨ ใส่เที่ยว คาเฟ่ ทะเล หรือใส่อยู่บ้านก็สวย ✨ ฟรีไซซ์ ใส่ได้หลายไซซ์ 🎨 มีให้เลือก 7 สี ❤️ แดง 💙 น้ำเงิน 🖤 ดำ 💜 ม่วง 💗 ชมพู 🌙 กรมท่า 💛 เหลืองมัสตาร์ด อก 34-54 นิ้ว | ยาว 34 นิ้ว |"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/free-size-i16221717311-s127429620264.html"
    }
  },
  {
    "code": "LZD-16222526278",
    "name": {
      "en": "Long Dress, Batwing, One Size, New Pattern",
      "th": "เดรสยาว ทรงปีกค้างคาว Free Size ลายเข้าใหม่!!"
    },
    "category": "dresses",
    "is_new": true,
    "price": 259,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "Green",
        "th": "KTL1101 เขียว"
      },
      {
        "en": "Purple",
        "th": "KTL1102 ม่วง"
      },
      {
        "en": "Pink",
        "th": "KTL1103 ชมพู"
      },
      {
        "en": "Blue",
        "th": "KTL1104 น้ำเงิน"
      },
      {
        "en": "Brown",
        "th": "KTL1105 น้ำตาล"
      },
      {
        "en": "White and Black",
        "th": "KTL1106 ขาวดำ"
      },
      {
        "en": "Black and White",
        "th": "KTL1107 ดำขาว"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "52 in",
          "th": "\udc96 ความยาว 52 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16222526278-01.webp",
        "alt": {
          "en": "Main view of Long Dress, Batwing, One Size, New Pattern",
          "th": "ภาพหลักของ เดรสยาว ทรงปีกค้างคาว Free Size ลายเข้าใหม่!!"
        }
      },
      {
        "src": "products/lzd-16222526278-02.webp",
        "alt": {
          "en": "Additional view 2 of Long Dress, Batwing, One Size, New Pattern",
          "th": "ภาพเพิ่มเติม 2 ของ เดรสยาว ทรงปีกค้างคาว Free Size ลายเข้าใหม่!!"
        }
      },
      {
        "src": "products/lzd-16222526278-03.webp",
        "alt": {
          "en": "Additional view 3 of Long Dress, Batwing, One Size, New Pattern",
          "th": "ภาพเพิ่มเติม 3 ของ เดรสยาว ทรงปีกค้างคาว Free Size ลายเข้าใหม่!!"
        }
      },
      {
        "src": "products/lzd-16222526278-04.webp",
        "alt": {
          "en": "Additional view 4 of Long Dress, Batwing, One Size, New Pattern",
          "th": "ภาพเพิ่มเติม 4 ของ เดรสยาว ทรงปีกค้างคาว Free Size ลายเข้าใหม่!!"
        }
      },
      {
        "src": "products/lzd-16222526278-05.webp",
        "alt": {
          "en": "Additional view 5 of Long Dress, Batwing, One Size, New Pattern",
          "th": "ภาพเพิ่มเติม 5 ของ เดรสยาว ทรงปีกค้างคาว Free Size ลายเข้าใหม่!!"
        }
      },
      {
        "src": "products/lzd-16222526278-06.webp",
        "alt": {
          "en": "Additional view 6 of Long Dress, Batwing, One Size, New Pattern",
          "th": "ภาพเพิ่มเติม 6 ของ เดรสยาว ทรงปีกค้างคาว Free Size ลายเข้าใหม่!!"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "✨ Long bat wing style dress. 💖 Bat wing shape design, easy to wear, camouflages a beautiful figure. 💖 There is a drawstring at the waist. Adjust the tightness as desired. 💖 Soft fabric, comfortable to wear, good ventilation. 💖 Free size, chest 34-54 inches 💖 Length 52 inches",
      "th": "✨ เดรสยาวทรงปีกค้างคาว 💖 ดีไซน์ทรงปีกค้างคาว สวมใส่ง่าย พรางหุ่นสวย 💖 มีเชือกรูดเอว ปรับกระชับได้ตามต้องการ 💖 ผ้านุ่ม ใส่สบาย ระบายอากาศดี 💖 ฟรีไซซ์ อก 34-54 นิ้ว 💖 ความยาว 52 นิ้ว"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/free-size-i16222526278-s127413669693.html"
    }
  },
  {
    "code": "LZD-16214641009",
    "name": {
      "en": "Long Dress, Single Strap, Embroidery Work, Rayon Fabric, One Size",
      "th": "ชุดแซ่กยาว สายเดี่ยวงานปัก งานผ้าเรยอน FreeSize"
    },
    "category": "dresses",
    "is_new": false,
    "price": 550,
    "fabric": {
      "en": "Rayon",
      "th": "ผ้าเรยอน"
    },
    "colours": [
      {
        "en": "Green",
        "th": "RLD001 เขียวหยก"
      },
      {
        "en": "Cream",
        "th": "RLD002 ครีม"
      },
      {
        "en": "Grey",
        "th": "RLD003 เทา"
      },
      {
        "en": "Beige",
        "th": "RLD004 เบจ"
      },
      {
        "en": "Green",
        "th": "RLD005 เขียวมะนาว"
      },
      {
        "en": "Green",
        "th": "RLD006 เขียวมิ้น"
      },
      {
        "en": "Red",
        "th": "RLD007 แดงเลือดหมู"
      },
      {
        "en": "โอรส",
        "th": "RLD008 โอรส"
      },
      {
        "en": "Red",
        "th": "RLD009 แดงส้ม"
      },
      {
        "en": "Orange",
        "th": "RLD010 ส้ม"
      },
      {
        "en": "Yellow",
        "th": "RLD011 เหลือง"
      },
      {
        "en": "Yellow",
        "th": "RLD012 เหลืองขมิ้น"
      },
      {
        "en": "บานเย็น",
        "th": "RLD013 บานเย็น"
      },
      {
        "en": "Red",
        "th": "RLD014 แดง"
      },
      {
        "en": "เปลือกมังคุด",
        "th": "RLD015 เปลือกมังคุด"
      },
      {
        "en": "Pink",
        "th": "RLD016 ชมพู"
      },
      {
        "en": "Sky Blue",
        "th": "RLD017 ฟ้า"
      },
      {
        "en": "Green",
        "th": "RLD018 เขียวเหลือง"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "Approx. 38 in / 97 cm",
          "th": "อก 38 นิ้ว (ประมาณ 97 ซม.)"
        }
      },
      {
        "label": {
          "en": "Waist",
          "th": "รอบเอว"
        },
        "value": {
          "en": "One Size",
          "th": "เอว ฟรีไซส์"
        }
      },
      {
        "label": {
          "en": "Hips",
          "th": "สะโพก"
        },
        "value": {
          "en": "One Size",
          "th": "สะโพก ฟรีไซส์"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "Approx. 43 in / 109 cm",
          "th": "ความยาว 43 นิ้ว (ประมาณ 109 ซม.)"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16214641009-01.webp",
        "alt": {
          "en": "Main view of Long Dress, Single Strap, Embroidery Work, Rayon Fabric, One Size",
          "th": "ภาพหลักของ ชุดแซ่กยาว สายเดี่ยวงานปัก งานผ้าเรยอน FreeSize"
        }
      },
      {
        "src": "products/lzd-16214641009-02.webp",
        "alt": {
          "en": "Additional view 2 of Long Dress, Single Strap, Embroidery Work, Rayon Fabric, One Size",
          "th": "ภาพเพิ่มเติม 2 ของ ชุดแซ่กยาว สายเดี่ยวงานปัก งานผ้าเรยอน FreeSize"
        }
      },
      {
        "src": "products/lzd-16214641009-03.webp",
        "alt": {
          "en": "Additional view 3 of Long Dress, Single Strap, Embroidery Work, Rayon Fabric, One Size",
          "th": "ภาพเพิ่มเติม 3 ของ ชุดแซ่กยาว สายเดี่ยวงานปัก งานผ้าเรยอน FreeSize"
        }
      },
      {
        "src": "products/lzd-16214641009-04.webp",
        "alt": {
          "en": "Additional view 4 of Long Dress, Single Strap, Embroidery Work, Rayon Fabric, One Size",
          "th": "ภาพเพิ่มเติม 4 ของ ชุดแซ่กยาว สายเดี่ยวงานปัก งานผ้าเรยอน FreeSize"
        }
      },
      {
        "src": "products/lzd-16214641009-05.webp",
        "alt": {
          "en": "Additional view 5 of Long Dress, Single Strap, Embroidery Work, Rayon Fabric, One Size",
          "th": "ภาพเพิ่มเติม 5 ของ ชุดแซ่กยาว สายเดี่ยวงานปัก งานผ้าเรยอน FreeSize"
        }
      },
      {
        "src": "products/lzd-16214641009-06.webp",
        "alt": {
          "en": "Additional view 6 of Long Dress, Single Strap, Embroidery Work, Rayon Fabric, One Size",
          "th": "ภาพเพิ่มเติม 6 ของ ชุดแซ่กยาว สายเดี่ยวงานปัก งานผ้าเรยอน FreeSize"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "✨ Long, one-piece dress. Floral embroidery 🌸 🌼 Highlights • Floral embroidery all over, beautiful, exquisite, and unique. • Long, single-strap style, comfortable to wear, looks tall and slender. • Rayon fabric is soft, flowing, cool and comfortable, not hot. • Can be matched with sandals. high-heels or sneakers • Suitable for wearing to a cafe, the beach, going shopping, or wearing on a casual day. 📏 Product size (Free Size) • Chest 38 inches (approximately 97 cm.) • Waist free size • Hips free size • Length 43 inches (approximately 109 cm.)",
      "th": "✨ เดรสแซ่กยาวสายเดี่ยว งานปักลายดอกไม้ 🌸 🌼 จุดเด่น • งานปักลายดอกไม้ทั้งตัว สวยประณีต มีเอกลักษณ์ • ทรงแซ่กยาวสายเดี่ยว ใส่สบาย ดูสูงเพรียว • ผ้าเรยอนนุ่ม พลิ้ว เย็นสบาย ไม่ร้อน • แมทช์ได้ทั้งรองเท้าแตะ รองเท้าส้นสูง หรือสนีกเกอร์ • เหมาะสำหรับใส่เที่ยว คาเฟ่ ทะเล เดินช้อปปิ้ง หรือใส่ในวันสบายๆ 📏 ขนาดสินค้า (Free Size) • อก 38 นิ้ว (ประมาณ 97 ซม.) • เอว ฟรีไซส์ • สะโพก ฟรีไซส์ • ความยาว 43 นิ้ว (ประมาณ 109 ซม.)"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/freesize-i16214641009-s127387095745.html"
    }
  },
  {
    "code": "LZD-16222470933",
    "name": {
      "en": "Long Dress, Batwing, One Size, New Pattern, Very Beautiful",
      "th": "เดรสยาว ทรงปีกค้างคาว Free Size ลายเข้าใหม่สุดสวย!!"
    },
    "category": "dresses",
    "is_new": true,
    "price": 259,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "Red",
        "th": "KTL1201 แดง"
      },
      {
        "en": "Navy",
        "th": "KTL1202 กรมท่า"
      },
      {
        "en": "Brown",
        "th": "KTL1203 น้ำตาล"
      },
      {
        "en": "Purple",
        "th": "KTL1204 ม่วง"
      },
      {
        "en": "Black",
        "th": "KTL1205 ดำ"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "52 in",
          "th": "\udc96 ความยาว 52 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16222470933-01.webp",
        "alt": {
          "en": "Main view of Long Dress, Batwing, One Size, New Pattern, Very Beautiful",
          "th": "ภาพหลักของ เดรสยาว ทรงปีกค้างคาว Free Size ลายเข้าใหม่สุดสวย!!"
        }
      },
      {
        "src": "products/lzd-16222470933-02.webp",
        "alt": {
          "en": "Additional view 2 of Long Dress, Batwing, One Size, New Pattern, Very Beautiful",
          "th": "ภาพเพิ่มเติม 2 ของ เดรสยาว ทรงปีกค้างคาว Free Size ลายเข้าใหม่สุดสวย!!"
        }
      },
      {
        "src": "products/lzd-16222470933-03.webp",
        "alt": {
          "en": "Additional view 3 of Long Dress, Batwing, One Size, New Pattern, Very Beautiful",
          "th": "ภาพเพิ่มเติม 3 ของ เดรสยาว ทรงปีกค้างคาว Free Size ลายเข้าใหม่สุดสวย!!"
        }
      },
      {
        "src": "products/lzd-16222470933-04.webp",
        "alt": {
          "en": "Additional view 4 of Long Dress, Batwing, One Size, New Pattern, Very Beautiful",
          "th": "ภาพเพิ่มเติม 4 ของ เดรสยาว ทรงปีกค้างคาว Free Size ลายเข้าใหม่สุดสวย!!"
        }
      },
      {
        "src": "products/lzd-16222470933-05.webp",
        "alt": {
          "en": "Additional view 5 of Long Dress, Batwing, One Size, New Pattern, Very Beautiful",
          "th": "ภาพเพิ่มเติม 5 ของ เดรสยาว ทรงปีกค้างคาว Free Size ลายเข้าใหม่สุดสวย!!"
        }
      },
      {
        "src": "products/lzd-16222470933-06.webp",
        "alt": {
          "en": "Additional view 6 of Long Dress, Batwing, One Size, New Pattern, Very Beautiful",
          "th": "ภาพเพิ่มเติม 6 ของ เดรสยาว ทรงปีกค้างคาว Free Size ลายเข้าใหม่สุดสวย!!"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "✨ Long bat wing style dress. 💖 Bat wing shape design, easy to wear, camouflages a beautiful figure. 💖 Free size, chest 34-54 inches 💖 Length 52 inches",
      "th": "✨ เดรสยาวทรงปีกค้างคาว 💖 ดีไซน์ทรงปีกค้างคาว สวมใส่ง่าย พรางหุ่นสวย 💖 ฟรีไซซ์ อก 34-54 นิ้ว 💖 ความยาว 52 นิ้ว"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/free-size-i16222470933-s127429672207.html"
    }
  },
  {
    "code": "LZD-16165240938",
    "name": {
      "en": "Genuine Cotton Bags, Pack Of 3 (Large, Medium, Small)",
      "th": "กระเป๋าผ้าคอตตอนแท้ แพ็ก 3 ใบ (ใหญ่ กลาง เล็ก)"
    },
    "category": "bags",
    "home_showcase": {
      "image_index": 1,
      "name": {
        "en": "Cotton Bag Trio",
        "th": "กระเป๋าผ้าคอตตอนแพ็ก 3 ใบ"
      }
    },
    "is_new": false,
    "price": 699,
    "fabric": {
      "en": "Cotton",
      "th": "ผ้าคอตตอน"
    },
    "colours": [
      {
        "en": "C3S001",
        "th": "C3S001"
      },
      {
        "en": "C3S002",
        "th": "C3S002"
      },
      {
        "en": "C3S004",
        "th": "C3S004"
      },
      {
        "en": "C3S007",
        "th": "C3S007"
      },
      {
        "en": "C3S009",
        "th": "C3S009"
      },
      {
        "en": "C3S011",
        "th": "C3S011"
      },
      {
        "en": "C3S012",
        "th": "C3S012"
      },
      {
        "en": "C3S016",
        "th": "C3S016"
      },
      {
        "en": "C3S018",
        "th": "C3S018"
      },
      {
        "en": "C3S019",
        "th": "C3S019"
      },
      {
        "en": "C3S020",
        "th": "C3S020"
      },
      {
        "en": "C3S022",
        "th": "C3S022"
      },
      {
        "en": "C3S024",
        "th": "C3S024"
      },
      {
        "en": "C3S026",
        "th": "C3S026"
      },
      {
        "en": "C3S027",
        "th": "C3S027"
      },
      {
        "en": "C3S028",
        "th": "C3S028"
      },
      {
        "en": "C3S030",
        "th": "C3S030"
      },
      {
        "en": "C3S033",
        "th": "C3S033"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Large bag",
          "th": "ใบใหญ่"
        },
        "value": {
          "en": "25 / 14 / 14 cm",
          "th": "ใบใหญ่ 25×14×14 ซม."
        }
      },
      {
        "label": {
          "en": "Medium bag",
          "th": "ใบกลาง"
        },
        "value": {
          "en": "20 / 12 / 12 cm",
          "th": "ใบกลาง 20×12×12 ซม."
        }
      },
      {
        "label": {
          "en": "Small bag",
          "th": "ใบเล็ก"
        },
        "value": {
          "en": "18 / 10 / 10 cm",
          "th": "ใบเล็ก 18×10×10 ซม."
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16165240938-01.webp",
        "alt": {
          "en": "Main view of Genuine Cotton Bags, Pack Of 3 (Large, Medium, Small)",
          "th": "ภาพหลักของ กระเป๋าผ้าคอตตอนแท้ แพ็ก 3 ใบ (ใหญ่ กลาง เล็ก)"
        }
      },
      {
        "src": "products/lzd-16165240938-02.webp",
        "alt": {
          "en": "Additional view 2 of Genuine Cotton Bags, Pack Of 3 (Large, Medium, Small)",
          "th": "ภาพเพิ่มเติม 2 ของ กระเป๋าผ้าคอตตอนแท้ แพ็ก 3 ใบ (ใหญ่ กลาง เล็ก)"
        }
      },
      {
        "src": "products/lzd-16165240938-03.webp",
        "alt": {
          "en": "Additional view 3 of Genuine Cotton Bags, Pack Of 3 (Large, Medium, Small)",
          "th": "ภาพเพิ่มเติม 3 ของ กระเป๋าผ้าคอตตอนแท้ แพ็ก 3 ใบ (ใหญ่ กลาง เล็ก)"
        }
      },
      {
        "src": "products/lzd-16165240938-04.webp",
        "alt": {
          "en": "Additional view 4 of Genuine Cotton Bags, Pack Of 3 (Large, Medium, Small)",
          "th": "ภาพเพิ่มเติม 4 ของ กระเป๋าผ้าคอตตอนแท้ แพ็ก 3 ใบ (ใหญ่ กลาง เล็ก)"
        }
      },
      {
        "src": "products/lzd-16165240938-05.webp",
        "alt": {
          "en": "Additional view 5 of Genuine Cotton Bags, Pack Of 3 (Large, Medium, Small)",
          "th": "ภาพเพิ่มเติม 5 ของ กระเป๋าผ้าคอตตอนแท้ แพ็ก 3 ใบ (ใหญ่ กลาง เล็ก)"
        }
      },
      {
        "src": "products/lzd-16165240938-06.webp",
        "alt": {
          "en": "Additional view 6 of Genuine Cotton Bags, Pack Of 3 (Large, Medium, Small)",
          "th": "ภาพเพิ่มเติม 6 ของ กระเป๋าผ้าคอตตอนแท้ แพ็ก 3 ใบ (ใหญ่ กลาง เล็ก)"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "“Who likes cute cloth bags? It really works. Must set this 💙 Genuine cotton bags, pack of 3, all sizes: large, medium, small. will wear cosmetics Jewelry, charging cables, or even taking it with you when traveling are very convenient✨ Large leaves 25×14×14 cm. Medium leaf 20×12×12 cm. Small leaves 18×10×10 cm. Cute patterns, fresh colors, soft quilting, light weight, can hold a lot of stuff. There are many colors and patterns. You can choose according to your style. 🌸 Easy to carry, neatly organized in your bag, good to use yourself, cute to buy as a gift. Hurry and reserve it 💕”",
      "th": "“ใครชอบกระเป๋าผ้าน่ารัก ใช้งานได้จริง ต้องเซ็ตนี้เลยค่ะ 💙 กระเป๋าผ้าคอตตอนแท้ แพ็ก 3 ใบครบไซส์ ใหญ่ กลาง เล็ก จะใส่เครื่องสำอาง เครื่องประดับ สายชาร์จ หรือพกไปเที่ยวก็สะดวกมาก✨ ใบใหญ่ 25×14×14 ซม. ใบกลาง 20×12×12 ซม. ใบเล็ก 18×10×10 ซม. ลายน่ารัก สีสด งานควิลท์นุ่มๆ น้ำหนักเบา จุของได้เยอะมาก มีหลายสี หลายลาย เลือกได้ตามสไตล์เลยค่ะ 🌸 พกง่าย จัดกระเป๋าเป็นระเบียบ ใช้เองก็ดี ซื้อฝากก็น่ารัก รีบจับจองนะคะ 💕”"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/3-i16165240938-s127198754239.html"
    }
  },
  {
    "code": "LZD-16154860592",
    "name": {
      "en": "Long Batwing Dress Bohemian Style There Is A Drawstring To Adjust The Waist Size",
      "th": "เดรสยาวทรงค้างคาว สไตล์โบฮีเมียน มีเชือกรูดปรับขนาดเอว"
    },
    "category": "dresses",
    "is_new": false,
    "price": 199,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "สีบานเย็น",
        "th": "KTL201 สีบานเย็น"
      },
      {
        "en": "Orange",
        "th": "KTL202 สีส้ม"
      },
      {
        "en": "Black and White",
        "th": "KTL203 สีดำขาวนวล"
      },
      {
        "en": "Black",
        "th": "KTL204 สีดำครีม"
      },
      {
        "en": "Red",
        "th": "KTL205 สีแดง"
      },
      {
        "en": "Sky Blue",
        "th": "KTL206 ฟ้า"
      },
      {
        "en": "Blue",
        "th": "KTL207 สีน้ำเงิน"
      },
      {
        "en": "Purple",
        "th": "KTL208 สีม่วง"
      },
      {
        "en": "Green",
        "th": "KTL209 สีเขียว"
      },
      {
        "en": "Brown",
        "th": "KTL210 สีน้ำตาล"
      },
      {
        "en": "สีเลือดหมู",
        "th": "KTL211 สีเลือดหมู"
      },
      {
        "en": "Navy",
        "th": "KTL212 กรมท่า"
      },
      {
        "en": "White and Black",
        "th": "KTL213 สีขาวดำ"
      },
      {
        "en": "Black and White",
        "th": "KTL214 สีดำขาว"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "52 in / 132 cm",
          "th": "เดรสมีความยาวที่ 52 นิ้ว หรือ 132 เซนติเมตร"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "Fits 34–54 in",
          "th": "อกใส่ได้ตั้งแต่ขนาด 34 - 54 นิ้ว มีสายรูดปรับขนาดอยู่บริเวณช่วงเอว สามารถใส่ได้ทั้งสาวร้างเพรียวบาง ไปจนถึงสาวอวบร่างใหญ่"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16154860592-01.webp",
        "alt": {
          "en": "Main view of Long Batwing Dress Bohemian Style There Is A Drawstring To Adjust The Waist Size",
          "th": "ภาพหลักของ เดรสยาวทรงค้างคาว สไตล์โบฮีเมียน มีเชือกรูดปรับขนาดเอว"
        }
      },
      {
        "src": "products/lzd-16154860592-02.webp",
        "alt": {
          "en": "Additional view 2 of Long Batwing Dress Bohemian Style There Is A Drawstring To Adjust The Waist Size",
          "th": "ภาพเพิ่มเติม 2 ของ เดรสยาวทรงค้างคาว สไตล์โบฮีเมียน มีเชือกรูดปรับขนาดเอว"
        }
      },
      {
        "src": "products/lzd-16154860592-03.webp",
        "alt": {
          "en": "Additional view 3 of Long Batwing Dress Bohemian Style There Is A Drawstring To Adjust The Waist Size",
          "th": "ภาพเพิ่มเติม 3 ของ เดรสยาวทรงค้างคาว สไตล์โบฮีเมียน มีเชือกรูดปรับขนาดเอว"
        }
      },
      {
        "src": "products/lzd-16154860592-04.webp",
        "alt": {
          "en": "Additional view 4 of Long Batwing Dress Bohemian Style There Is A Drawstring To Adjust The Waist Size",
          "th": "ภาพเพิ่มเติม 4 ของ เดรสยาวทรงค้างคาว สไตล์โบฮีเมียน มีเชือกรูดปรับขนาดเอว"
        }
      },
      {
        "src": "products/lzd-16154860592-05.webp",
        "alt": {
          "en": "Additional view 5 of Long Batwing Dress Bohemian Style There Is A Drawstring To Adjust The Waist Size",
          "th": "ภาพเพิ่มเติม 5 ของ เดรสยาวทรงค้างคาว สไตล์โบฮีเมียน มีเชือกรูดปรับขนาดเอว"
        }
      },
      {
        "src": "products/lzd-16154860592-06.webp",
        "alt": {
          "en": "Additional view 6 of Long Batwing Dress Bohemian Style There Is A Drawstring To Adjust The Waist Size",
          "th": "ภาพเพิ่มเติม 6 ของ เดรสยาวทรงค้างคาว สไตล์โบฮีเมียน มีเชือกรูดปรับขนาดเอว"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Long batwing style dress with a drawstring to tighten the waist, batik elephant pattern, Bohemian style. Dresses that can be worn while traveling go to a party or wear it at home Can also be worn as pajamas. Wear it anywhere and it will stand out and be eye-catching. Dress size The dress is 52 inches or 132 centimeters long. Chest size can be worn from 34 - 54 inches. There is a drawstring to adjust the size around the waist. Can be worn by both slim and young women. to a plump girl with a big figure",
      "th": "เดรสทรงปีกค้างคาวตัวยาวมีเชือกรูดปรัดขนาดเอว ลายช้างบาติก สไตล์โบฮีเมียน เดรสที่สามารถใส่ไปเที่ยว ไปงานสังสรรค์ หรือใส่อยู่บ้าน ใส่เป็นชุดนอนก็ยังได้ ใส่ไปที่ไหนก็ดูเด่นสะดุดตา ขนาดของเดรส เดรสมีความยาวที่ 52 นิ้ว หรือ 132 เซนติเมตร อกใส่ได้ตั้งแต่ขนาด 34 - 54 นิ้ว มีสายรูดปรับขนาดอยู่บริเวณช่วงเอว สามารถใส่ได้ทั้งสาวร้างเพรียวบาง ไปจนถึงสาวอวบร่างใหญ่"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16154860592-s127144545682.html"
    }
  },
  {
    "code": "LZD-16163131140",
    "name": {
      "en": "Pants Set Bohemian Style, One Size, Cotton Fabric, Dyed",
      "th": "ชุดเซ็ตกางเกง สไตล์โบฮีเมียน ฟรีไซส์ ผ้าคอตตอน ย้อมสี"
    },
    "category": "sets",
    "home_showcase": {
      "image_index": 0,
      "name": {
        "en": "Dyed Cotton Bohemian Set",
        "th": "ชุดเซ็ตผ้าคอตตอนย้อมสี"
      }
    },
    "is_new": false,
    "price": 899,
    "fabric": {
      "en": "Cotton",
      "th": "ผ้าคอตตอน"
    },
    "colours": [
      {
        "en": "PPS001",
        "th": "PPS001"
      },
      {
        "en": "PPS002",
        "th": "PPS002"
      },
      {
        "en": "PPS003",
        "th": "PPS003"
      },
      {
        "en": "PPS004",
        "th": "PPS004"
      },
      {
        "en": "PPS005",
        "th": "PPS005"
      },
      {
        "en": "PPS006",
        "th": "PPS006"
      },
      {
        "en": "PPS007",
        "th": "PPS007"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Waist",
          "th": "รอบเอว"
        },
        "value": {
          "en": "26–40 in",
          "th": "เอวกางเกง 26-40 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16163131140-01.webp",
        "alt": {
          "en": "Main view of Pants Set Bohemian Style, One Size, Cotton Fabric, Dyed",
          "th": "ภาพหลักของ ชุดเซ็ตกางเกง สไตล์โบฮีเมียน ฟรีไซส์ ผ้าคอตตอน ย้อมสี"
        }
      },
      {
        "src": "products/lzd-16163131140-02.webp",
        "alt": {
          "en": "Additional view 2 of Pants Set Bohemian Style, One Size, Cotton Fabric, Dyed",
          "th": "ภาพเพิ่มเติม 2 ของ ชุดเซ็ตกางเกง สไตล์โบฮีเมียน ฟรีไซส์ ผ้าคอตตอน ย้อมสี"
        }
      },
      {
        "src": "products/lzd-16163131140-03.webp",
        "alt": {
          "en": "Additional view 3 of Pants Set Bohemian Style, One Size, Cotton Fabric, Dyed",
          "th": "ภาพเพิ่มเติม 3 ของ ชุดเซ็ตกางเกง สไตล์โบฮีเมียน ฟรีไซส์ ผ้าคอตตอน ย้อมสี"
        }
      },
      {
        "src": "products/lzd-16163131140-04.webp",
        "alt": {
          "en": "Additional view 4 of Pants Set Bohemian Style, One Size, Cotton Fabric, Dyed",
          "th": "ภาพเพิ่มเติม 4 ของ ชุดเซ็ตกางเกง สไตล์โบฮีเมียน ฟรีไซส์ ผ้าคอตตอน ย้อมสี"
        }
      },
      {
        "src": "products/lzd-16163131140-05.webp",
        "alt": {
          "en": "Additional view 5 of Pants Set Bohemian Style, One Size, Cotton Fabric, Dyed",
          "th": "ภาพเพิ่มเติม 5 ของ ชุดเซ็ตกางเกง สไตล์โบฮีเมียน ฟรีไซส์ ผ้าคอตตอน ย้อมสี"
        }
      },
      {
        "src": "products/lzd-16163131140-06.webp",
        "alt": {
          "en": "Additional view 6 of Pants Set Bohemian Style, One Size, Cotton Fabric, Dyed",
          "th": "ภาพเพิ่มเติม 6 ของ ชุดเซ็ตกางเกง สไตล์โบฮีเมียน ฟรีไซส์ ผ้าคอตตอน ย้อมสี"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "✨ Super chic bohemian set ✨ Crop top paired with tailored pants. Vintage look mixed with a perfect hipster vibe. Wear it and you'll stand out from every angle 📸💕 🌈 Each edited fabric work is unique. Beautiful color tones, easy to match, wear it to a cafe, the beach, or walk to an art event. It's super chic. 💫 Comfortable shirt, designed to show off the shoulders, adding a sweet look that hides sourness. 💫 Wide leg, flowing pants, comfortable to wear, not tight. 💫 Elastic waist, easy to wear, flexible all day. 💫 There are many colors and patterns, each one is beautiful and unique. 📏 Product size • Chest up to 36 inches. • Pants waist 26-40 inches.",
      "th": "✨ เซ็ตสายโบฮีเมียนสุดชิค ✨ เสื้อครอปคู่กับกางเกงผ้าตัดต่อ ลุควินเทจผสมความฮิปสเตอร์แบบลงตัว ใส่แล้วโดดเด่นทุกมุม 📸💕 🌈 งานผ้าตัดต่อแต่ละตัวมีเอกลักษณ์เฉพาะตัว โทนสีสวย แมทช์ง่าย ใส่เที่ยว คาเฟ่ ทะเล หรือเดินงานอาร์ตก็เก๋สุดๆ 💫 เสื้อใส่สบาย ดีไซน์โชว์ช่วงไหล่เพิ่มลุคหวานซ่อนเปรี้ยว 💫 กางเกงทรงขากว้าง พริ้ว ใส่สบาย ไม่รัดรูป 💫 เอวยางยืด ใส่ง่าย คล่องตัวทั้งวัน 💫 มีหลายสี หลายลาย แต่ละตัวงานสวยไม่ซ้ำกัน 📏 ขนาดสินค้า • เสื้ออกได้ถึง 36 นิ้ว • เอวกางเกง 26-40 นิ้ว"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16163131140-s127179911862.html"
    }
  },
  {
    "code": "LZD-16163033812",
    "name": {
      "en": "Cotton Bag With Painted Flower Pattern Bohemian Style",
      "th": "กระเป๋าย่าม ผ้าฝ้ายเพ้นท์ลายดอก สไตล์โบฮีเมียน"
    },
    "category": "bags",
    "is_new": false,
    "price": 599,
    "fabric": {
      "en": "Cotton",
      "th": "ผ้าคอตตอน"
    },
    "colours": [
      {
        "en": "CRB301",
        "th": "CRB301"
      },
      {
        "en": "CRB302",
        "th": "CRB302"
      },
      {
        "en": "CRB303",
        "th": "CRB303"
      },
      {
        "en": "CRB304",
        "th": "CRB304"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Dimensions",
          "th": "ขนาด"
        },
        "value": {
          "en": "20 in",
          "th": "สูงรวมสาย 20 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16163033812-01.webp",
        "alt": {
          "en": "Main view of Cotton Bag With Painted Flower Pattern Bohemian Style",
          "th": "ภาพหลักของ กระเป๋าย่าม ผ้าฝ้ายเพ้นท์ลายดอก สไตล์โบฮีเมียน"
        }
      },
      {
        "src": "products/lzd-16163033812-02.webp",
        "alt": {
          "en": "Additional view 2 of Cotton Bag With Painted Flower Pattern Bohemian Style",
          "th": "ภาพเพิ่มเติม 2 ของ กระเป๋าย่าม ผ้าฝ้ายเพ้นท์ลายดอก สไตล์โบฮีเมียน"
        }
      },
      {
        "src": "products/lzd-16163033812-03.webp",
        "alt": {
          "en": "Additional view 3 of Cotton Bag With Painted Flower Pattern Bohemian Style",
          "th": "ภาพเพิ่มเติม 3 ของ กระเป๋าย่าม ผ้าฝ้ายเพ้นท์ลายดอก สไตล์โบฮีเมียน"
        }
      },
      {
        "src": "products/lzd-16163033812-04.webp",
        "alt": {
          "en": "Additional view 4 of Cotton Bag With Painted Flower Pattern Bohemian Style",
          "th": "ภาพเพิ่มเติม 4 ของ กระเป๋าย่าม ผ้าฝ้ายเพ้นท์ลายดอก สไตล์โบฮีเมียน"
        }
      },
      {
        "src": "products/lzd-16163033812-05.webp",
        "alt": {
          "en": "Additional view 5 of Cotton Bag With Painted Flower Pattern Bohemian Style",
          "th": "ภาพเพิ่มเติม 5 ของ กระเป๋าย่าม ผ้าฝ้ายเพ้นท์ลายดอก สไตล์โบฮีเมียน"
        }
      },
      {
        "src": "products/lzd-16163033812-06.webp",
        "alt": {
          "en": "Additional view 6 of Cotton Bag With Painted Flower Pattern Bohemian Style",
          "th": "ภาพเพิ่มเติม 6 ของ กระเป๋าย่าม ผ้าฝ้ายเพ้นท์ลายดอก สไตล์โบฮีเมียน"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Bohemian tote bag Real vintage hippie Art people must have Easy to match with hippies, cafes, going to the beach, going to the market, or decorating in a chic style, it's perfect. Approximate size • Height including strap 20 inches. • The bag is 11.5 inches tall. • Width 12 inches • Base width 5 inches. Highlights Light weight, comfortable to carry Vintage fabric work in Indian-Bohemian style. There is a convenient zipper. Can be paired with many looks, including hippie, vintage, and art fashion types. For people who like differences and is fascinated by the unique charm of handmade work",
      "th": "กระเป๋าย่ามโบฮีเมียน วินเทจฮิปปี้แท้ สายอาร์ตต้องมี แมทช์ง่ายทั้งสายฮิปปี้ คาเฟ่ เที่ยวทะเล เดินตลาด หรือแต่งแนวเซอร์ชิคก็ลงตัวสุดๆ ขนาดโดยประมาณ • สูงรวมสาย 20 นิ้ว • ตัวกระเป๋าสูง 11.5 นิ้ว • กว้าง 12 นิ้ว • ฐานกว้าง 5 นิ้ว จุดเด่น น้ำหนักเบา สะพายสบาย งานผ้าวินเทจสไตล์อินเดีย-โบฮีเมียน มีซิปใช้งานสะดวก แมทช์ได้หลายลุค ทั้งฮิปปี้ วินเทจ และสายแฟชั่นอาร์ต สำหรับคนที่ชอบความแตกต่าง และหลงใหลเสน่ห์งานแฮนด์เมดแบบมีเอกลักษณ์เฉพาะตัว"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16163033812-s127180131993.html"
    }
  },
  {
    "code": "LZD-16163047586",
    "name": {
      "en": "Skirt Set Bohemia Style Beautiful Rayon Fabric",
      "th": "ชุดเซ็ตกระโปรง สไตล์โบฮีเมีย ผ้าเรยอนทรงสวย"
    },
    "category": "sets",
    "is_new": false,
    "price": 1749,
    "fabric": {
      "en": "Rayon",
      "th": "ผ้าเรยอน"
    },
    "colours": [
      {
        "en": "RSKS001",
        "th": "RSKS001"
      },
      {
        "en": "RSKS002",
        "th": "RSKS002"
      },
      {
        "en": "RSKS003",
        "th": "RSKS003"
      },
      {
        "en": "RSKS004",
        "th": "RSKS004"
      },
      {
        "en": "RSKS005",
        "th": "RSKS005"
      },
      {
        "en": "RSKS006",
        "th": "RSKS006"
      },
      {
        "en": "RSKS007",
        "th": "RSKS007"
      },
      {
        "en": "RSKS008",
        "th": "RSKS008"
      },
      {
        "en": "RSKS009",
        "th": "RSKS009"
      },
      {
        "en": "RSKS010",
        "th": "RSKS010"
      },
      {
        "en": "RSKS011",
        "th": "RSKS011"
      },
      {
        "en": "RSKS012",
        "th": "RSKS012"
      },
      {
        "en": "RSKS013",
        "th": "RSKS013"
      },
      {
        "en": "RSKS014",
        "th": "RSKS014"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16163047586-01.webp",
        "alt": {
          "en": "Main view of Skirt Set Bohemia Style Beautiful Rayon Fabric",
          "th": "ภาพหลักของ ชุดเซ็ตกระโปรง สไตล์โบฮีเมีย ผ้าเรยอนทรงสวย"
        }
      },
      {
        "src": "products/lzd-16163047586-02.webp",
        "alt": {
          "en": "Additional view 2 of Skirt Set Bohemia Style Beautiful Rayon Fabric",
          "th": "ภาพเพิ่มเติม 2 ของ ชุดเซ็ตกระโปรง สไตล์โบฮีเมีย ผ้าเรยอนทรงสวย"
        }
      },
      {
        "src": "products/lzd-16163047586-03.webp",
        "alt": {
          "en": "Additional view 3 of Skirt Set Bohemia Style Beautiful Rayon Fabric",
          "th": "ภาพเพิ่มเติม 3 ของ ชุดเซ็ตกระโปรง สไตล์โบฮีเมีย ผ้าเรยอนทรงสวย"
        }
      },
      {
        "src": "products/lzd-16163047586-04.webp",
        "alt": {
          "en": "Additional view 4 of Skirt Set Bohemia Style Beautiful Rayon Fabric",
          "th": "ภาพเพิ่มเติม 4 ของ ชุดเซ็ตกระโปรง สไตล์โบฮีเมีย ผ้าเรยอนทรงสวย"
        }
      },
      {
        "src": "products/lzd-16163047586-05.webp",
        "alt": {
          "en": "Additional view 5 of Skirt Set Bohemia Style Beautiful Rayon Fabric",
          "th": "ภาพเพิ่มเติม 5 ของ ชุดเซ็ตกระโปรง สไตล์โบฮีเมีย ผ้าเรยอนทรงสวย"
        }
      },
      {
        "src": "products/lzd-16163047586-06.webp",
        "alt": {
          "en": "Additional view 6 of Skirt Set Bohemia Style Beautiful Rayon Fabric",
          "th": "ภาพเพิ่มเติม 6 ของ ชุดเซ็ตกระโปรง สไตล์โบฮีเมีย ผ้าเรยอนทรงสวย"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "🌿 Bohemian set with soft embroidery 🌿 Completely beautiful, the whole look Wear it and you'll have a charming boho girl feel. Looks expensive but comfortable to wear ✨ Soft, flowing rayon fabric. It's beautiful and eye-catching. Wear it to a cafe, the beach, or take a walk. 💫 Chest up to 36 inches. 💫 Elastic waist 26-40 inches. 💫 Skirt length 37 inches. 💫 There are many colors, each color is very beautiful 🌈 Detailed embroidery work throughout the set. Beautiful and unique Wear it and you'll look unique 🤍 Easy to match and look beautiful in a set. Or separate the pieces and decorate another look, it's super chic.",
      "th": "🌿 ชุดเซ็ตโบฮีเมียนงานปักสุดละมุน 🌿 สวยครบจบทั้งลุค ใส่แล้วได้ฟีลสาวโบโฮ่แบบมีเสน่ห์ ดูแพงแต่ใส่สบาย ✨ ผ้าเรยอนเนื้อนุ่ม พริ้วเบา ใส่เที่ยว คาเฟ่ ทะเล หรือเดินเล่นก็สวยสะดุดตา 💫 เสื้ออกได้ถึง 36 นิ้ว 💫 เอวยางยืด 26-40 นิ้ว 💫 กระโปรงยาว 37 นิ้ว 💫 มีหลายสี แต่ละสีสวยมากกก 🌈 ดีเทลงานปักทั้งชุด สวยแบบมีเอกลักษณ์ ใส่แล้วดูโดดเด่นไม่ซ้ำใคร 🤍 แมทช์ง่าย ใส่เป็นเซ็ตก็สวย หรือแยกชิ้นไปแต่งลุคอื่นก็เก๋สุดๆ"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16163047586-s127334818215.html"
    }
  },
  {
    "code": "LZD-16169412071",
    "name": {
      "en": "Embroidered Lightweight Woven Top, Short Sleeves, Painted Pattern, Plus-Size Fit",
      "th": "เสื้อผ้าป่านงานปัก แขนสั้น ลายเพ้น สาวพลัสไซส์"
    },
    "category": "tops",
    "is_new": false,
    "price": 459,
    "fabric": {
      "en": "Lightweight woven fabric",
      "th": "ผ้าป่าน"
    },
    "colours": [
      {
        "en": "WPJH001",
        "th": "WPJH001"
      },
      {
        "en": "WPJH002",
        "th": "WPJH002"
      },
      {
        "en": "WPJH003",
        "th": "WPJH003"
      },
      {
        "en": "WPJH004",
        "th": "WPJH004"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "Approx. 52 in / 132 cm",
          "th": "อก 52 นิ้ว (ประมาณ 132 ซม.)"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "Approx. 29 in / 74 cm",
          "th": "ความยาว 29 นิ้ว (ประมาณ 74 ซม.)"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16169412071-01.webp",
        "alt": {
          "en": "Main view of Embroidered Lightweight Woven Top, Short Sleeves, Painted Pattern, Plus-Size Fit",
          "th": "ภาพหลักของ เสื้อผ้าป่านงานปัก แขนสั้น ลายเพ้น สาวพลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16169412071-02.webp",
        "alt": {
          "en": "Additional view 2 of Embroidered Lightweight Woven Top, Short Sleeves, Painted Pattern, Plus-Size Fit",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อผ้าป่านงานปัก แขนสั้น ลายเพ้น สาวพลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16169412071-03.webp",
        "alt": {
          "en": "Additional view 3 of Embroidered Lightweight Woven Top, Short Sleeves, Painted Pattern, Plus-Size Fit",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อผ้าป่านงานปัก แขนสั้น ลายเพ้น สาวพลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16169412071-04.webp",
        "alt": {
          "en": "Additional view 4 of Embroidered Lightweight Woven Top, Short Sleeves, Painted Pattern, Plus-Size Fit",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อผ้าป่านงานปัก แขนสั้น ลายเพ้น สาวพลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16169412071-05.webp",
        "alt": {
          "en": "Additional view 5 of Embroidered Lightweight Woven Top, Short Sleeves, Painted Pattern, Plus-Size Fit",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อผ้าป่านงานปัก แขนสั้น ลายเพ้น สาวพลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16169412071-06.webp",
        "alt": {
          "en": "Additional view 6 of Embroidered Lightweight Woven Top, Short Sleeves, Painted Pattern, Plus-Size Fit",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อผ้าป่านงานปัก แขนสั้น ลายเพ้น สาวพลัสไซส์"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "✨ Hemp clothes with embroidery + soft painted patterns ✨ Wear it and you will look sweet, expensive, and have the style of a bohemian girl 🤍🌿 Light linen fabric, comfortable to wear. Embroidered with beautiful floral patterns mixed with painted patterns. Every detail is tight. It's beautiful to pair with jeans. Wear it to travel, wear to a cafe, or just chill every day. 💕 📏 Shirt size • Chest 52 inches (approximately 132 cm.) • Length 29 inches (approximately 74 cm.) 🌸 There are many styles and patterns to choose from. 🌸 Beautiful work. Wear it and you will look charming. 🌸 Take more photos. Hurry and message me to reserve your favorite pattern. 💌",
      "th": "✨ เสื้อผ้าป่านงานปัก + ลายเพ้นท์สุดละมุน ✨ ใส่แล้วดูหวาน ดูแพง มีสไตล์แบบสาวโบฮีเมียน 🤍🌿 งานผ้าป่านเนื้อบางเบา ใส่สบาย ปักลายดอกไม้ผสมลายเพ้นท์สวยๆ รายละเอียดแน่นทุกตัว แมทช์กับยีนส์ก็สวย ใส่เที่ยว ใส่คาเฟ่ หรือใส่ชิลๆ ได้ทุกวัน 💕 📏 ขนาดเสื้อ • อก 52 นิ้ว (ประมาณ 132 ซม.) • ความยาว 29 นิ้ว (ประมาณ 74 ซม.) 🌸 มีหลายแบบ หลายลายให้เลือก 🌸 งานสวย ใส่แล้วดูมีเสน่ห์ 🌸 ถ่ายรูปขึ้นมากกก รีบทักมาจองลายที่ชอบได้เลยน้า 💌"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16169412071-s127203269390.html"
    }
  },
  {
    "code": "LZD-16168589913",
    "name": {
      "en": "Lightweight Woven Top, Embroidery Work, Long Sleeves, Painted Work, Plus-Size Fit",
      "th": "เสื้อผ้าป่านงานปัก แขนยาว งานเพ้น สาวพลัสไซส์"
    },
    "category": "tops",
    "is_new": false,
    "price": 459,
    "fabric": {
      "en": "Lightweight woven fabric",
      "th": "ผ้าป่าน"
    },
    "colours": [
      {
        "en": "WPJF001",
        "th": "WPJF001"
      },
      {
        "en": "WPJF002",
        "th": "WPJF002"
      },
      {
        "en": "WPJF003",
        "th": "WPJF003"
      },
      {
        "en": "WPJF004",
        "th": "WPJF004"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "Approx. 50 in / 127 cm",
          "th": "อก 50 นิ้ว (ประมาณ 127 ซม.)"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "Approx. 29 in / 74 cm",
          "th": "ความยาว 29 นิ้ว (ประมาณ 74 ซม.)"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16168589913-01.webp",
        "alt": {
          "en": "Main view of Lightweight Woven Top, Embroidery Work, Long Sleeves, Painted Work, Plus-Size Fit",
          "th": "ภาพหลักของ เสื้อผ้าป่านงานปัก แขนยาว งานเพ้น สาวพลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16168589913-02.webp",
        "alt": {
          "en": "Additional view 2 of Lightweight Woven Top, Embroidery Work, Long Sleeves, Painted Work, Plus-Size Fit",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อผ้าป่านงานปัก แขนยาว งานเพ้น สาวพลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16168589913-03.webp",
        "alt": {
          "en": "Additional view 3 of Lightweight Woven Top, Embroidery Work, Long Sleeves, Painted Work, Plus-Size Fit",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อผ้าป่านงานปัก แขนยาว งานเพ้น สาวพลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16168589913-04.webp",
        "alt": {
          "en": "Additional view 4 of Lightweight Woven Top, Embroidery Work, Long Sleeves, Painted Work, Plus-Size Fit",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อผ้าป่านงานปัก แขนยาว งานเพ้น สาวพลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16168589913-05.webp",
        "alt": {
          "en": "Additional view 5 of Lightweight Woven Top, Embroidery Work, Long Sleeves, Painted Work, Plus-Size Fit",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อผ้าป่านงานปัก แขนยาว งานเพ้น สาวพลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16168589913-06.webp",
        "alt": {
          "en": "Additional view 6 of Lightweight Woven Top, Embroidery Work, Long Sleeves, Painted Work, Plus-Size Fit",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อผ้าป่านงานปัก แขนยาว งานเพ้น สาวพลัสไซส์"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "✨ Hemp clothes with embroidery + soft painted patterns ✨ Wear it and you will look sweet, expensive, and have the style of a bohemian girl 🤍🌿 Light linen fabric, comfortable to wear. Embroidered with beautiful floral patterns mixed with painted patterns. Every detail is tight. It's beautiful to pair with jeans. Wear it to travel, wear to a cafe, or just chill every day. 💕 📏 Shirt size • Chest 50 inches (approximately 127 cm.) • Length 29 inches (approximately 74 cm.) 🌸 There are many styles and patterns to choose from. 🌸 Beautiful work. Wear it and you will look charming. 🌸 Take more photos. Hurry and message me to reserve your favorite pattern. 💌",
      "th": "✨ เสื้อผ้าป่านงานปัก + ลายเพ้นท์สุดละมุน ✨ ใส่แล้วดูหวาน ดูแพง มีสไตล์แบบสาวโบฮีเมียน 🤍🌿 งานผ้าป่านเนื้อบางเบา ใส่สบาย ปักลายดอกไม้ผสมลายเพ้นท์สวยๆ รายละเอียดแน่นทุกตัว แมทช์กับยีนส์ก็สวย ใส่เที่ยว ใส่คาเฟ่ หรือใส่ชิลๆ ได้ทุกวัน 💕 📏 ขนาดเสื้อ • อก 50 นิ้ว (ประมาณ 127 ซม.) • ความยาว 29 นิ้ว (ประมาณ 74 ซม.) 🌸 มีหลายแบบ หลายลายให้เลือก 🌸 งานสวย ใส่แล้วดูมีเสน่ห์ 🌸 ถ่ายรูปขึ้นมากกก รีบทักมาจองลายที่ชอบได้เลยน้า 💌"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16168589913-s127203251166.html"
    }
  },
  {
    "code": "LZD-16204812817",
    "name": {
      "en": "Rayon Embroidery Shirt, Chest 46 Inches, Large Fit, Plus Size",
      "th": "เสื้องานปักผ้าเรยอน อก 46 นิ้ว ทรงใหญ่ พลัสไซส์"
    },
    "category": "tops",
    "is_new": false,
    "price": 499,
    "fabric": {
      "en": "Rayon",
      "th": "ผ้าเรยอน"
    },
    "colours": [
      {
        "en": "RJH101",
        "th": "RJH101"
      },
      {
        "en": "RJH102",
        "th": "RJH102"
      },
      {
        "en": "RJH103",
        "th": "RJH103"
      },
      {
        "en": "RJH104",
        "th": "RJH104"
      },
      {
        "en": "RJH105",
        "th": "RJH105"
      },
      {
        "en": "RJH106",
        "th": "RJH106"
      },
      {
        "en": "RJH107",
        "th": "RJH107"
      },
      {
        "en": "RJH108",
        "th": "RJH108"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16204812817-01.webp",
        "alt": {
          "en": "Main view of Rayon Embroidery Shirt, Chest 46 Inches, Large Fit, Plus Size",
          "th": "ภาพหลักของ เสื้องานปักผ้าเรยอน อก 46 นิ้ว ทรงใหญ่ พลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16204812817-02.webp",
        "alt": {
          "en": "Additional view 2 of Rayon Embroidery Shirt, Chest 46 Inches, Large Fit, Plus Size",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้องานปักผ้าเรยอน อก 46 นิ้ว ทรงใหญ่ พลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16204812817-03.webp",
        "alt": {
          "en": "Additional view 3 of Rayon Embroidery Shirt, Chest 46 Inches, Large Fit, Plus Size",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้องานปักผ้าเรยอน อก 46 นิ้ว ทรงใหญ่ พลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16204812817-04.webp",
        "alt": {
          "en": "Additional view 4 of Rayon Embroidery Shirt, Chest 46 Inches, Large Fit, Plus Size",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้องานปักผ้าเรยอน อก 46 นิ้ว ทรงใหญ่ พลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16204812817-05.webp",
        "alt": {
          "en": "Additional view 5 of Rayon Embroidery Shirt, Chest 46 Inches, Large Fit, Plus Size",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้องานปักผ้าเรยอน อก 46 นิ้ว ทรงใหญ่ พลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16204812817-06.webp",
        "alt": {
          "en": "Additional view 6 of Rayon Embroidery Shirt, Chest 46 Inches, Large Fit, Plus Size",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้องานปักผ้าเรยอน อก 46 นิ้ว ทรงใหญ่ พลัสไซส์"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "🌸 Rayon embroidery shirt, comfortable to wear, beautiful for every occasion 🌸 Add a sweet, stylish look to your look with soft rayon clothes. Beautiful and detailed embroidery work. Comfortable to wear. Good ventilation. Loose fit and camouflages the figure. Suitable for size L girls and plump girls. ✨ There are many colors to choose from. ✨ Rayon fabric, soft, light, comfortable to wear. ✨ Beautiful embroidery, looks unique. ✨ Matches beautifully with jeans or cloth pants. 💌 Chat to inquire about colors that are ready for delivery.",
      "th": "🌸 เสื้องานปักผ้าเรยอน ใส่สบาย สวยทุกโอกาส 🌸 เติมลุคให้ดูหวาน มีสไตล์ ด้วยเสื้อผ้าเรยอนเนื้อนุ่ม งานปักลายสวยละเอียด ใส่สบาย ระบายอากาศดี ทรงหลวมใส่แล้วพรางหุ่น เหมาะกับสาวไซส์ L และสาวอวบกำลังดี ✨ มีหลายสีให้เลือก ✨ เนื้อผ้าเรยอน นุ่ม เบา ใส่สบาย ✨ งานปักสวย ดูมีเอกลักษณ์ ✨ แมตช์กับกางเกงยีนส์หรือกางเกงผ้าก็สวย 💌 ทักแชทสอบถามสีที่พร้อมส่งได้เลยค่ะ"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/46-i16204812817-s127340635226.html"
    }
  },
  {
    "code": "LZD-16191384615",
    "name": {
      "en": "Short Dress With Bat Wings Shape Django Elephant Pattern",
      "th": "เดรสสั้น ทรงปีกค้างคาว ลายจังโก้ช้าง"
    },
    "category": "dresses",
    "is_new": false,
    "price": 199,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "Blue",
        "th": "KTS1901 สีน้ำเงิน"
      },
      {
        "en": "Pink",
        "th": "KTS1902 สีชมพู"
      },
      {
        "en": "Grey",
        "th": "KTS1903 สีเทา"
      },
      {
        "en": "Red",
        "th": "KTS1904 สีแดง"
      },
      {
        "en": "Sky Blue",
        "th": "KTS1905 สีฟ้า"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "34 in",
          "th": "\udd39 ความยาว 34 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16191384615-01.webp",
        "alt": {
          "en": "Main view of Short Dress With Bat Wings Shape Django Elephant Pattern",
          "th": "ภาพหลักของ เดรสสั้น ทรงปีกค้างคาว ลายจังโก้ช้าง"
        }
      },
      {
        "src": "products/lzd-16191384615-02.webp",
        "alt": {
          "en": "Additional view 2 of Short Dress With Bat Wings Shape Django Elephant Pattern",
          "th": "ภาพเพิ่มเติม 2 ของ เดรสสั้น ทรงปีกค้างคาว ลายจังโก้ช้าง"
        }
      },
      {
        "src": "products/lzd-16191384615-03.webp",
        "alt": {
          "en": "Additional view 3 of Short Dress With Bat Wings Shape Django Elephant Pattern",
          "th": "ภาพเพิ่มเติม 3 ของ เดรสสั้น ทรงปีกค้างคาว ลายจังโก้ช้าง"
        }
      },
      {
        "src": "products/lzd-16191384615-04.webp",
        "alt": {
          "en": "Additional view 4 of Short Dress With Bat Wings Shape Django Elephant Pattern",
          "th": "ภาพเพิ่มเติม 4 ของ เดรสสั้น ทรงปีกค้างคาว ลายจังโก้ช้าง"
        }
      },
      {
        "src": "products/lzd-16191384615-05.webp",
        "alt": {
          "en": "Additional view 5 of Short Dress With Bat Wings Shape Django Elephant Pattern",
          "th": "ภาพเพิ่มเติม 5 ของ เดรสสั้น ทรงปีกค้างคาว ลายจังโก้ช้าง"
        }
      },
      {
        "src": "products/lzd-16191384615-06.webp",
        "alt": {
          "en": "Additional view 6 of Short Dress With Bat Wings Shape Django Elephant Pattern",
          "th": "ภาพเพิ่มเติม 6 ของ เดรสสั้น ทรงปีกค้างคาว ลายจังโก้ช้าง"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "💙✨ Short bat wing style dress. Dangko elephant pattern, beautiful, outstanding, unique ✨💙 Add charm to every day with this batwing-shaped dress. Comfortable to wear, flowing and beautiful, helping to conceal your figure perfectly. Comes with a drawstring waist that can be adjusted as desired. Brightly colored elephant dangko pattern. Super chic bohemian style. Wear it when traveling, relaxing, or wearing it on casual days. It's beautiful and eye-catching. 🔹 Chest 34-54 inches (approximately 86-137 cm.) 🔹 Length 34 inches 🔹 Loose fit, comfortable to wear, suitable for all body types. 🔹 Soft, lightweight fabric, comfortable to wear all day. 🔹 Beautiful design, can be worn by both small size girls and plus size girls.",
      "th": "💙✨ เดรสสั้นทรงปีกค้างคาว ลายจังโก้ช้าง สวยโดดเด่น มีเอกลักษณ์ ✨💙 เพิ่มเสน่ห์ให้ทุกวันด้วยเดรสทรงปีกค้างคาว ใส่สบาย พริ้วสวย ช่วยพรางรูปร่างได้อย่างลงตัว พร้อมเชือกรูดเอวปรับกระชับได้ตามต้องการ ลายจังโก้ช้างสีสันสดใส สไตล์โบฮีเมียนสุดเก๋ ใส่เที่ยว ใส่พักผ่อน หรือใส่ในวันสบายๆ ก็สวยสะดุดตา 🔹 อก 34-54 นิ้ว (ประมาณ 86-137 ซม.) 🔹 ความยาว 34 นิ้ว 🔹 ทรงหลวม ใส่สบาย เหมาะกับทุกสรีระ 🔹 ผ้านุ่ม น้ำหนักเบา สวมใส่สบายตลอดวัน 🔹 ดีไซน์สวย ใส่ได้ทั้งสาวไซซ์เล็กและสาวพลัสไซซ์"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16191384615-s127310160767.html"
    }
  },
  {
    "code": "LZD-16201270885",
    "name": {
      "en": "Cotton Bag Bohemian Style Elephant Embroidery",
      "th": "กระเป๋าผ้าคอตตอน สไตล์โบฮีเมียน งานปักลายช้าง"
    },
    "category": "bags",
    "is_new": false,
    "price": 399,
    "fabric": {
      "en": "Cotton",
      "th": "ผ้าคอตตอน"
    },
    "colours": [
      {
        "en": "LB2601",
        "th": "LB2601"
      },
      {
        "en": "LB2602",
        "th": "LB2602"
      },
      {
        "en": "LB2603",
        "th": "LB2603"
      },
      {
        "en": "LB2604",
        "th": "LB2604"
      },
      {
        "en": "LB2801",
        "th": "LB2801"
      },
      {
        "en": "LB2802",
        "th": "LB2802"
      },
      {
        "en": "LB2803",
        "th": "LB2803"
      },
      {
        "en": "LB2804",
        "th": "LB2804"
      },
      {
        "en": "LB2805",
        "th": "LB2805"
      },
      {
        "en": "LB2806",
        "th": "LB2806"
      },
      {
        "en": "LB2807",
        "th": "LB2807"
      },
      {
        "en": "LB2808",
        "th": "LB2808"
      },
      {
        "en": "LB2809",
        "th": "LB2809"
      },
      {
        "en": "LB2810",
        "th": "LB2810"
      },
      {
        "en": "LB2811",
        "th": "LB2811"
      },
      {
        "en": "LB2812",
        "th": "LB2812"
      },
      {
        "en": "LB2813",
        "th": "LB2813"
      },
      {
        "en": "LB2814",
        "th": "LB2814"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "See the Lazada listing for available options",
          "th": "ดูตัวเลือกขนาดที่มีในหน้าสินค้า Lazada"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16201270885-01.webp",
        "alt": {
          "en": "Main view of Cotton Bag Bohemian Style Elephant Embroidery",
          "th": "ภาพหลักของ กระเป๋าผ้าคอตตอน สไตล์โบฮีเมียน งานปักลายช้าง"
        }
      },
      {
        "src": "products/lzd-16201270885-02.webp",
        "alt": {
          "en": "Additional view 2 of Cotton Bag Bohemian Style Elephant Embroidery",
          "th": "ภาพเพิ่มเติม 2 ของ กระเป๋าผ้าคอตตอน สไตล์โบฮีเมียน งานปักลายช้าง"
        }
      },
      {
        "src": "products/lzd-16201270885-03.webp",
        "alt": {
          "en": "Additional view 3 of Cotton Bag Bohemian Style Elephant Embroidery",
          "th": "ภาพเพิ่มเติม 3 ของ กระเป๋าผ้าคอตตอน สไตล์โบฮีเมียน งานปักลายช้าง"
        }
      },
      {
        "src": "products/lzd-16201270885-04.webp",
        "alt": {
          "en": "Additional view 4 of Cotton Bag Bohemian Style Elephant Embroidery",
          "th": "ภาพเพิ่มเติม 4 ของ กระเป๋าผ้าคอตตอน สไตล์โบฮีเมียน งานปักลายช้าง"
        }
      },
      {
        "src": "products/lzd-16201270885-05.webp",
        "alt": {
          "en": "Additional view 5 of Cotton Bag Bohemian Style Elephant Embroidery",
          "th": "ภาพเพิ่มเติม 5 ของ กระเป๋าผ้าคอตตอน สไตล์โบฮีเมียน งานปักลายช้าง"
        }
      },
      {
        "src": "products/lzd-16201270885-06.webp",
        "alt": {
          "en": "Additional view 6 of Cotton Bag Bohemian Style Elephant Embroidery",
          "th": "ภาพเพิ่มเติม 6 ของ กระเป๋าผ้าคอตตอน สไตล์โบฮีเมียน งานปักลายช้าง"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "✨ Bohemian style elephant embroidered shoulder bag. Outstanding handmade work 🐘 Beautiful colors, dense embroidery, can match any look. Whether you wear it to a cafe, the beach or every day, it's uniquely chic. 💕 👜 Good size, can hold all necessary items. 🎨 There are many colors and patterns. 💖 Every style has one of each. It's all gone. There is no original reproduction. If you like any pattern, please reserve first. Because each card has only 1 card ✨",
      "th": "✨ กระเป๋าสะพายปักลายช้างสไตล์โบฮีเมียน งานแฮนด์เมดสุดโดดเด่น 🐘 สีสวย ลายปักแน่น แมตช์ได้ทุกลุค จะใส่เที่ยว คาเฟ่ ทะเล หรือทุกวันก็เก๋ไม่ซ้ำใคร 💕 👜 ขนาดกำลังดี ใส่ของใช้จำเป็นได้ครบ 🎨 มีหลายสี หลายลาย 💖 ทุกแบบมีอย่างละใบ หมดแล้วหมดเลย ไม่มีผลิตซ้ำแบบเดิม ใครชอบลายไหน รีบจองก่อนนะคะ เพราะแต่ละใบมีเพียง 1 ใบเท่านั้น ✨"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16201270885-s127346896170.html"
    }
  },
  {
    "code": "LZD-16195647097",
    "name": {
      "en": "Short Batwing Dress Paisley Pattern One Size",
      "th": "เดรสสั้นทรงปีกค้างคาว ลายลุกน้ำเถาวัลย์ Free Size"
    },
    "category": "dresses",
    "is_new": false,
    "price": 199,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "Red",
        "th": "KTS2201 แดง"
      },
      {
        "en": "Pink",
        "th": "KTS2202 ชมพู"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "34–54 in",
          "th": "อก 34-54 นิ้ว"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "34 in",
          "th": "ยาว 34 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16195647097-01.webp",
        "alt": {
          "en": "Main view of Short Batwing Dress Paisley Pattern One Size",
          "th": "ภาพหลักของ เดรสสั้นทรงปีกค้างคาว ลายลุกน้ำเถาวัลย์ Free Size"
        }
      },
      {
        "src": "products/lzd-16195647097-02.webp",
        "alt": {
          "en": "Additional view 2 of Short Batwing Dress Paisley Pattern One Size",
          "th": "ภาพเพิ่มเติม 2 ของ เดรสสั้นทรงปีกค้างคาว ลายลุกน้ำเถาวัลย์ Free Size"
        }
      },
      {
        "src": "products/lzd-16195647097-03.webp",
        "alt": {
          "en": "Additional view 3 of Short Batwing Dress Paisley Pattern One Size",
          "th": "ภาพเพิ่มเติม 3 ของ เดรสสั้นทรงปีกค้างคาว ลายลุกน้ำเถาวัลย์ Free Size"
        }
      },
      {
        "src": "products/lzd-16195647097-04.webp",
        "alt": {
          "en": "Additional view 4 of Short Batwing Dress Paisley Pattern One Size",
          "th": "ภาพเพิ่มเติม 4 ของ เดรสสั้นทรงปีกค้างคาว ลายลุกน้ำเถาวัลย์ Free Size"
        }
      },
      {
        "src": "products/lzd-16195647097-05.webp",
        "alt": {
          "en": "Additional view 5 of Short Batwing Dress Paisley Pattern One Size",
          "th": "ภาพเพิ่มเติม 5 ของ เดรสสั้นทรงปีกค้างคาว ลายลุกน้ำเถาวัลย์ Free Size"
        }
      },
      {
        "src": "products/lzd-16195647097-06.webp",
        "alt": {
          "en": "Additional view 6 of Short Batwing Dress Paisley Pattern One Size",
          "th": "ภาพเพิ่มเติม 6 ของ เดรสสั้นทรงปีกค้างคาว ลายลุกน้ำเถาวัลย์ Free Size"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "🔥 Popular model, easy to wear, camouflage, very good shape! Short batwing style dress, soft fabric, comfortable to wear. Chest 34-54 inches | Length 34 inches There are many colors to choose from 💐 Beautiful like this. Must have one in the closet. ❤️",
      "th": "🔥 รุ่นฮิต ใส่ง่าย พรางหุ่นดีมาก! เดรสสั้นทรงปีกค้างคาว ผ้านิ่ม ใส่สบาย อก 34-54 นิ้ว | ยาว 34 นิ้ว มีหลายสีให้เลือก 💐 สวยแบบนี้ ต้องมีติดตู้สักตัวแล้วค่ะ ❤️"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/free-size-i16195647097-s127313573361.html"
    }
  },
  {
    "code": "LZD-16098627410",
    "name": {
      "en": "Elegant Maxi Dress Made From Japanese Satin. Long Caftan Style Bohemian Style",
      "th": "ชุดเดรสแมกซี่สุดหรูผ้าซาตินญี่ปุ่น ทรงกาฟตันตัวยาว สไตล์โบฮีเมียน"
    },
    "category": "kaftans",
    "is_new": false,
    "price": 999,
    "fabric": {
      "en": "Japanese satin",
      "th": "ผ้าซาตินญี่ปุ่น"
    },
    "colours": [
      {
        "en": "JS001",
        "th": "JS001"
      },
      {
        "en": "JS002",
        "th": "JS002"
      },
      {
        "en": "JS003",
        "th": "JS003"
      },
      {
        "en": "JS004",
        "th": "JS004"
      },
      {
        "en": "JS005",
        "th": "JS005"
      },
      {
        "en": "JS006",
        "th": "JS006"
      },
      {
        "en": "JS007",
        "th": "JS007"
      },
      {
        "en": "JS008",
        "th": "JS008"
      },
      {
        "en": "JS009",
        "th": "JS009"
      },
      {
        "en": "JS010",
        "th": "JS010"
      },
      {
        "en": "JS011",
        "th": "JS011"
      },
      {
        "en": "JS012",
        "th": "JS012"
      },
      {
        "en": "JS013",
        "th": "JS013"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Dimensions",
          "th": "ขนาด"
        },
        "value": {
          "en": "Fits 54 in",
          "th": "ขนาด: รอบอก Free Size ใส่ได้ถึง 54 นิ้ว"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "52 in",
          "th": "ความยาว 52 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16098627410-01.webp",
        "alt": {
          "en": "Main view of Elegant Maxi Dress Made From Japanese Satin. Long Caftan Style Bohemian Style",
          "th": "ภาพหลักของ ชุดเดรสแมกซี่สุดหรูผ้าซาตินญี่ปุ่น ทรงกาฟตันตัวยาว สไตล์โบฮีเมียน"
        }
      },
      {
        "src": "products/lzd-16098627410-02.webp",
        "alt": {
          "en": "Additional view 2 of Elegant Maxi Dress Made From Japanese Satin. Long Caftan Style Bohemian Style",
          "th": "ภาพเพิ่มเติม 2 ของ ชุดเดรสแมกซี่สุดหรูผ้าซาตินญี่ปุ่น ทรงกาฟตันตัวยาว สไตล์โบฮีเมียน"
        }
      },
      {
        "src": "products/lzd-16098627410-03.webp",
        "alt": {
          "en": "Additional view 3 of Elegant Maxi Dress Made From Japanese Satin. Long Caftan Style Bohemian Style",
          "th": "ภาพเพิ่มเติม 3 ของ ชุดเดรสแมกซี่สุดหรูผ้าซาตินญี่ปุ่น ทรงกาฟตันตัวยาว สไตล์โบฮีเมียน"
        }
      },
      {
        "src": "products/lzd-16098627410-04.webp",
        "alt": {
          "en": "Additional view 4 of Elegant Maxi Dress Made From Japanese Satin. Long Caftan Style Bohemian Style",
          "th": "ภาพเพิ่มเติม 4 ของ ชุดเดรสแมกซี่สุดหรูผ้าซาตินญี่ปุ่น ทรงกาฟตันตัวยาว สไตล์โบฮีเมียน"
        }
      },
      {
        "src": "products/lzd-16098627410-05.webp",
        "alt": {
          "en": "Additional view 5 of Elegant Maxi Dress Made From Japanese Satin. Long Caftan Style Bohemian Style",
          "th": "ภาพเพิ่มเติม 5 ของ ชุดเดรสแมกซี่สุดหรูผ้าซาตินญี่ปุ่น ทรงกาฟตันตัวยาว สไตล์โบฮีเมียน"
        }
      },
      {
        "src": "products/lzd-16098627410-06.webp",
        "alt": {
          "en": "Additional view 6 of Elegant Maxi Dress Made From Japanese Satin. Long Caftan Style Bohemian Style",
          "th": "ภาพเพิ่มเติม 6 ของ ชุดเดรสแมกซี่สุดหรูผ้าซาตินญี่ปุ่น ทรงกาฟตันตัวยาว สไตล์โบฮีเมียน"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Japanese satin maxi dress, caftan style, long fringes. bohemian style Upgrade your vacation too. \"Long butterfly caftan style dress. Premium grade Japanese satin fabric The fabric is soft and smooth. Has a shine that leaves a beautiful body that is cool to the touch and comfortable on the skin. Printed with a colorful floral graphic pattern. Outstanding and unique Design: Classic wing shape. Excellent camouflage Wear it and you will look elegant. Fabric: Japanese satin, soft, comfortable to wear, not hot, does not irritate the skin. Size: Chest Free Size can fit up to 54 inches | Length 52 inches",
      "th": "ชุดเดรสแมกซี่ผ้าซาตินญี่ปุ่นทรงกาฟตันปีกฝีเสื้อตัวยาว สไตล์โบฮีเมียน ยกระดับวันพักผ่อนด้วย \"ชุดเดรสทรงกาฟตันปีกผีเสื้อตัวยาว ผ้าซาตินญี่ปุ่นเกรดพรีเมียม\" เนื้อผ้านุ่มลื่น มีความเงางามทิ้งตัวสวยให้สัมผัสเย็นสบายผิว พิมพ์ลายกราฟิกดอกไม้สีสันสดใส โดดเด่นไม่ซ้ำใคร ดีไซน์: ทรงปีกฝีเสื้อสุดคลาสสิก พรางหุ่นดีเยี่ยม ใส่แล้วดูสง่า เนื้อผ้า: ซาตินญี่ปุ่น นุ่ม ใส่สบายไม่ร้อน ไม่ระคายผิว ขนาด: รอบอก Free Size ใส่ได้ถึง 54 นิ้ว | ความยาว 52 นิ้ว"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16098627410-s126832074362.html"
    }
  },
  {
    "code": "LZD-16210318581",
    "name": {
      "en": "Long Dress, Batwing Double Vine Pattern",
      "th": "เดรสยาว ทรงปีกค้างคาว ลายลูกน้ำเถาวัลย์คู่"
    },
    "category": "dresses",
    "is_new": false,
    "price": 259,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "Black",
        "th": "KTL604 ดำแดง"
      },
      {
        "en": "Red",
        "th": "KTL605 แดงเหลือง"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "52 in",
          "th": "\udc96 ความยาว 52 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16210318581-01.webp",
        "alt": {
          "en": "Main view of Long Dress, Batwing Double Vine Pattern",
          "th": "ภาพหลักของ เดรสยาว ทรงปีกค้างคาว ลายลูกน้ำเถาวัลย์คู่"
        }
      },
      {
        "src": "products/lzd-16210318581-02.webp",
        "alt": {
          "en": "Additional view 2 of Long Dress, Batwing Double Vine Pattern",
          "th": "ภาพเพิ่มเติม 2 ของ เดรสยาว ทรงปีกค้างคาว ลายลูกน้ำเถาวัลย์คู่"
        }
      },
      {
        "src": "products/lzd-16210318581-03.webp",
        "alt": {
          "en": "Additional view 3 of Long Dress, Batwing Double Vine Pattern",
          "th": "ภาพเพิ่มเติม 3 ของ เดรสยาว ทรงปีกค้างคาว ลายลูกน้ำเถาวัลย์คู่"
        }
      },
      {
        "src": "products/lzd-16210318581-04.webp",
        "alt": {
          "en": "Additional view 4 of Long Dress, Batwing Double Vine Pattern",
          "th": "ภาพเพิ่มเติม 4 ของ เดรสยาว ทรงปีกค้างคาว ลายลูกน้ำเถาวัลย์คู่"
        }
      },
      {
        "src": "products/lzd-16210318581-05.webp",
        "alt": {
          "en": "Additional view 5 of Long Dress, Batwing Double Vine Pattern",
          "th": "ภาพเพิ่มเติม 5 ของ เดรสยาว ทรงปีกค้างคาว ลายลูกน้ำเถาวัลย์คู่"
        }
      },
      {
        "src": "products/lzd-16210318581-06.webp",
        "alt": {
          "en": "Additional view 6 of Long Dress, Batwing Double Vine Pattern",
          "th": "ภาพเพิ่มเติม 6 ของ เดรสยาว ทรงปีกค้างคาว ลายลูกน้ำเถาวัลย์คู่"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "✨ Long bat wing style dress. Double vine laksa pattern ✨ 💖 Bat wing shape design, easy to wear, camouflages a beautiful figure. 💖 There is a drawstring at the waist. Adjust the tightness as desired. 💖 Soft fabric, comfortable to wear, good ventilation. 💖 Free size, chest 34-54 inches 💖 Length 52 inches 💖 There are many colors to choose from. Every color is beautiful. You can wear it for every occasion.",
      "th": "✨ เดรสยาวทรงปีกค้างคาว ลายลูกน้ำเถาวัลย์คู่ ✨ 💖 ดีไซน์ทรงปีกค้างคาว สวมใส่ง่าย พรางหุ่นสวย 💖 มีเชือกรูดเอว ปรับกระชับได้ตามต้องการ 💖 ผ้านุ่ม ใส่สบาย ระบายอากาศดี 💖 ฟรีไซซ์ อก 34-54 นิ้ว 💖 ความยาว 52 นิ้ว 💖 มีหลายสีให้เลือก สวยทุกสี ใส่ได้ทุกโอกาส"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16210318581-s127356321775.html"
    }
  },
  {
    "code": "LZD-16177501009",
    "name": {
      "en": "Batwing Dress, Spun Rayon Fabric, One Size, Plus Size",
      "th": "เดรสทรงปีกค้างคาว ผ้าสปันเรยอน ฟรีไซส์ พลัสไซส์"
    },
    "category": "dresses",
    "is_new": false,
    "price": 499,
    "fabric": {
      "en": "Spun rayon",
      "th": "ผ้าสปันเรยอน"
    },
    "colours": [
      {
        "en": "Black",
        "th": "SKS001 ดำแดง"
      },
      {
        "en": "Black",
        "th": "SKS002 ดำส้ม"
      },
      {
        "en": "Black",
        "th": "SKS003 ดำเขียว"
      },
      {
        "en": "Sky Blue",
        "th": "SKS004 ดำฟ้า"
      },
      {
        "en": "Black",
        "th": "SKS005 ดำม่วง"
      },
      {
        "en": "สายรุ้งตัวยาว",
        "th": "SKS006 สายรุ้งตัวยาว"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "Approx. 64 in / 163 cm",
          "th": "อก 64 นิ้ว (ประมาณ 163 ซม.)"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "Approx. 31 in / 79 cm",
          "th": "ยาว 31 นิ้ว (ประมาณ 79 ซม.)"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16177501009-01.webp",
        "alt": {
          "en": "Main view of Batwing Dress, Spun Rayon Fabric, One Size, Plus Size",
          "th": "ภาพหลักของ เดรสทรงปีกค้างคาว ผ้าสปันเรยอน ฟรีไซส์ พลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16177501009-02.webp",
        "alt": {
          "en": "Additional view 2 of Batwing Dress, Spun Rayon Fabric, One Size, Plus Size",
          "th": "ภาพเพิ่มเติม 2 ของ เดรสทรงปีกค้างคาว ผ้าสปันเรยอน ฟรีไซส์ พลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16177501009-03.webp",
        "alt": {
          "en": "Additional view 3 of Batwing Dress, Spun Rayon Fabric, One Size, Plus Size",
          "th": "ภาพเพิ่มเติม 3 ของ เดรสทรงปีกค้างคาว ผ้าสปันเรยอน ฟรีไซส์ พลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16177501009-04.webp",
        "alt": {
          "en": "Additional view 4 of Batwing Dress, Spun Rayon Fabric, One Size, Plus Size",
          "th": "ภาพเพิ่มเติม 4 ของ เดรสทรงปีกค้างคาว ผ้าสปันเรยอน ฟรีไซส์ พลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16177501009-05.webp",
        "alt": {
          "en": "Additional view 5 of Batwing Dress, Spun Rayon Fabric, One Size, Plus Size",
          "th": "ภาพเพิ่มเติม 5 ของ เดรสทรงปีกค้างคาว ผ้าสปันเรยอน ฟรีไซส์ พลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16177501009-06.webp",
        "alt": {
          "en": "Additional view 6 of Batwing Dress, Spun Rayon Fabric, One Size, Plus Size",
          "th": "ภาพเพิ่มเติม 6 ของ เดรสทรงปีกค้างคาว ผ้าสปันเรยอน ฟรีไซส์ พลัสไซส์"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "🌈 Bat wing short dress, bright colors, very cute when wearing it 💕 Spun rayon fabric, soft, light, comfortable to wear, not hot, suitable for the weather in our country, wear it when traveling, wear it at home, or wear it to the beach, it's very beautiful and chic. ✨ Bat wing shape, comfortable to wear, not tight. ✨ Beautiful, fresh colors, many colors to choose from. ✨ Free size, can fit many body shapes. 📏 Size Chest 64 inches (approximately 163 cm.) Length 31 inches (approximately 79 cm.) Wear it as one short dress and it's beautiful. Or wear it with shorts, it's very chic. 💃 ⚡ Brightly colored work, very photogenic for the camera. ⚡ There are many colors, each color is equally cute. If interested, you can chat with us. 💌",
      "th": "🌈 เดรสสั้นปีกค้างคาว สีสันสดใส ใส่แล้วน่ารักมากกก 💕 ผ้าสปันเรยอน เนื้อผ้านุ่ม เบา ใส่สบาย ไม่ร้อน เหมาะกับอากาศบ้านเรา ใส่เที่ยว ใส่อยู่บ้าน หรือใส่ไปทะเลก็สวยเก๋สุดๆ ✨ ทรงปีกค้างคาว ใส่สบาย ไม่รัดตัว ✨ สีสวยสด มีหลายสีให้เลือก ✨ ฟรีไซซ์ ใส่ได้หลายหุ่น 📏 ขนาด อก 64 นิ้ว (ประมาณ 163 ซม.) ยาว 31 นิ้ว (ประมาณ 79 ซม.) ใส่เป็นเดรสสั้นตัวเดียวก็สวย หรือจะใส่คู่กับกางเกงขาสั้นก็เก๋มากค่ะ 💃 ⚡ งานสีสันสดใส ถ่ายรูปขึ้นกล้องสุดๆ ⚡ มีหลายสี แต่ละสีน่ารักไม่แพ้กัน สนใจทักแชทได้เลยจ้า 💌"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16177501009-s127250736265.html"
    }
  },
  {
    "code": "LZD-16163822465",
    "name": {
      "en": "White Shirt, Rayon Fabric, Bohemian Style, One Size",
      "th": "เสื้อขาว ผ้าเรยอน สไตล์โบฮีเมียน ฟรีไซส์"
    },
    "category": "tops",
    "is_new": false,
    "price": 459,
    "fabric": {
      "en": "Rayon",
      "th": "ผ้าเรยอน"
    },
    "colours": [
      {
        "en": "WHV",
        "th": "WHV"
      },
      {
        "en": "WL",
        "th": "WL"
      },
      {
        "en": "WLV",
        "th": "WLV"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "40 in",
          "th": "อก 40 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16163822465-01.webp",
        "alt": {
          "en": "Main view of White Shirt, Rayon Fabric, Bohemian Style, One Size",
          "th": "ภาพหลักของ เสื้อขาว ผ้าเรยอน สไตล์โบฮีเมียน ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16163822465-02.webp",
        "alt": {
          "en": "Additional view 2 of White Shirt, Rayon Fabric, Bohemian Style, One Size",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อขาว ผ้าเรยอน สไตล์โบฮีเมียน ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16163822465-03.webp",
        "alt": {
          "en": "Additional view 3 of White Shirt, Rayon Fabric, Bohemian Style, One Size",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อขาว ผ้าเรยอน สไตล์โบฮีเมียน ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16163822465-04.webp",
        "alt": {
          "en": "Additional view 4 of White Shirt, Rayon Fabric, Bohemian Style, One Size",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อขาว ผ้าเรยอน สไตล์โบฮีเมียน ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16163822465-05.webp",
        "alt": {
          "en": "Additional view 5 of White Shirt, Rayon Fabric, Bohemian Style, One Size",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อขาว ผ้าเรยอน สไตล์โบฮีเมียน ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16163822465-06.webp",
        "alt": {
          "en": "Additional view 6 of White Shirt, Rayon Fabric, Bohemian Style, One Size",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อขาว ผ้าเรยอน สไตล์โบฮีเมียน ฟรีไซส์"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "White embroidered shirt, Bohemian style, simple and elegant. You will look very soft when wearing it. Full body embroidery Decorated with detailed lace You can wear it all day comfortably. It's beautiful to match with jeans. Or wear it to a cafe and get a sweet, stylish girly look. Chest 40 inches Soft fabric, comfortable and breathable. Clean white, easy to wear, goes with every look.",
      "th": "เสื้อปักลายสีขาวสไตล์โบฮีเมียน เรียบหรู ใส่แล้วดูละมุนสุดๆ งานปักทั้งตัว แต่งลูกไม้ละเอียด ใส่ได้ทั้งวันสบายๆ แมทช์กับยีนส์ก็สวย หรือใส่เที่ยวคาเฟ่ก็ได้ลุคสาวหวานมีสไตล์ อก 40 นิ้ว ผ้านุ่ม ใส่สบาย ระบายอากาศดี สีขาวคลีนๆ ใส่ง่าย เข้าได้กับทุกลุค"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16163822465-s127193276518.html"
    }
  },
  {
    "code": "LZD-4526071630",
    "name": {
      "en": "Dress, Flared Hem Dress, Rayon Dress, Umbrella Dress, Curved Hem Dress. Printed Umbrella Set, 8-Color Dress",
      "th": "ชุดแซ่ก ชุดชายบาน  ชุดแซ่กผ้าเรยอน ชุดแซ่กร่ม ชุดแซ่กชายโค้ง ชุดร่มพิมพ์ลาย ชุดเดรส 8 สี"
    },
    "category": "dresses",
    "home_showcase": {
      "image_index": 5,
      "name": {
        "en": "Printed Rayon Umbrella Dress",
        "th": "เดรสผ้าเรยอนชายบาน"
      }
    },
    "is_new": false,
    "price": 299,
    "fabric": {
      "en": "Rayon",
      "th": "ผ้าเรยอน"
    },
    "colours": [
      {
        "en": "JD Black",
        "th": "JD Black"
      },
      {
        "en": "JD Blue",
        "th": "JD Blue"
      },
      {
        "en": "JD Green",
        "th": "JD Green"
      },
      {
        "en": "JD Grey",
        "th": "JD Grey"
      },
      {
        "en": "JD Pink",
        "th": "JD Pink"
      },
      {
        "en": "JD Red",
        "th": "JD Red"
      },
      {
        "en": "JD SGreen",
        "th": "JD SGreen"
      },
      {
        "en": "JD Yellow",
        "th": "JD Yellow"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "ฟรีไซส์"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-4526071630-01.webp",
        "alt": {
          "en": "Main view of Dress, Flared Hem Dress, Rayon Dress, Umbrella Dress, Curved Hem Dress. Printed Umbrella Set, 8-Color Dress",
          "th": "ภาพหลักของ ชุดแซ่ก ชุดชายบาน  ชุดแซ่กผ้าเรยอน ชุดแซ่กร่ม ชุดแซ่กชายโค้ง ชุดร่มพิมพ์ลาย ชุดเดรส 8 สี"
        }
      },
      {
        "src": "products/lzd-4526071630-02.webp",
        "alt": {
          "en": "Additional view 2 of Dress, Flared Hem Dress, Rayon Dress, Umbrella Dress, Curved Hem Dress. Printed Umbrella Set, 8-Color Dress",
          "th": "ภาพเพิ่มเติม 2 ของ ชุดแซ่ก ชุดชายบาน  ชุดแซ่กผ้าเรยอน ชุดแซ่กร่ม ชุดแซ่กชายโค้ง ชุดร่มพิมพ์ลาย ชุดเดรส 8 สี"
        }
      },
      {
        "src": "products/lzd-4526071630-03.webp",
        "alt": {
          "en": "Additional view 3 of Dress, Flared Hem Dress, Rayon Dress, Umbrella Dress, Curved Hem Dress. Printed Umbrella Set, 8-Color Dress",
          "th": "ภาพเพิ่มเติม 3 ของ ชุดแซ่ก ชุดชายบาน  ชุดแซ่กผ้าเรยอน ชุดแซ่กร่ม ชุดแซ่กชายโค้ง ชุดร่มพิมพ์ลาย ชุดเดรส 8 สี"
        }
      },
      {
        "src": "products/lzd-4526071630-04.webp",
        "alt": {
          "en": "Additional view 4 of Dress, Flared Hem Dress, Rayon Dress, Umbrella Dress, Curved Hem Dress. Printed Umbrella Set, 8-Color Dress",
          "th": "ภาพเพิ่มเติม 4 ของ ชุดแซ่ก ชุดชายบาน  ชุดแซ่กผ้าเรยอน ชุดแซ่กร่ม ชุดแซ่กชายโค้ง ชุดร่มพิมพ์ลาย ชุดเดรส 8 สี"
        }
      },
      {
        "src": "products/lzd-4526071630-05.webp",
        "alt": {
          "en": "Additional view 5 of Dress, Flared Hem Dress, Rayon Dress, Umbrella Dress, Curved Hem Dress. Printed Umbrella Set, 8-Color Dress",
          "th": "ภาพเพิ่มเติม 5 ของ ชุดแซ่ก ชุดชายบาน  ชุดแซ่กผ้าเรยอน ชุดแซ่กร่ม ชุดแซ่กชายโค้ง ชุดร่มพิมพ์ลาย ชุดเดรส 8 สี"
        }
      },
      {
        "src": "products/lzd-4526071630-06.webp",
        "alt": {
          "en": "Additional view 6 of Dress, Flared Hem Dress, Rayon Dress, Umbrella Dress, Curved Hem Dress. Printed Umbrella Set, 8-Color Dress",
          "th": "ภาพเพิ่มเติม 6 ของ ชุดแซ่ก ชุดชายบาน  ชุดแซ่กผ้าเรยอน ชุดแซ่กร่ม ชุดแซ่กชายโค้ง ชุดร่มพิมพ์ลาย ชุดเดรส 8 สี"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Rayon dress shirt, dress shirt, which is a fabric that doesn't feel hot when worn. and irritation because it is well ventilated It's a vintage, bohemian style shirt, imported from. Wear it when traveling and it looks beautiful and unusual. Go for a walk and wear it at home. Or wear it as pajamas, it's comfortable. Can be worn by both people with slim figures. or a plump person Free size, chest 32 - 54 inches, length 38 inches, arm circumference 20 inches. Every product is inspected before sending. ***If there is a problem with the product Don't just press deduct points. Please notify the shop first*** Thank you to everyone who has come to place an order with products from our store.",
      "th": "เสื้อชุดแซ่กผ้าเรยอน ชุดแซ่ก ซึ่งเป็นผ้าที่ใส่แล้รู้สึกไม่ร้อน และระคายเคืองเพราะระบายอากาศได้ดี เป็นเสื้อแนววินเทจ แนวโบฮีเมียน นำเข้าจาก ใส่ไปเที่ยวก็ดูสวยเด่นแปลกตา ไปเดินเล่น ใส่อยู่กับบ้าน หรือจะใส่เป็นชุดนอนก็สบายๆ ใส่ได้ทั้งคนหุ่นเพรียว หรือคนอวบอ้วน ฟรีไซส์ อก 32 - 54 นิ้ว ยาว 38 นิ้ว วงแขน 20 นิ้ว มีการตรวจสินค้าก่อนส่งทุกชิ้น ***หากมีปัญหากับสินค้า อย่างเพิ่งกดหักคะแนน ให้แจ้งมาทางร้านก่อนนะคะ*** ขอบคุณทุกๆท่านที่ได้เข้ามาทำการกดสั่งซื้อกับสินค้าทางร้านของเราค่ะ"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/8-i4526071630-s18407422446.html"
    }
  },
  {
    "code": "LZD-16168356966",
    "name": {
      "en": "Long Dress, Curved Hem, Dyed Fabric, Soft And Comfortable To Wear",
      "th": "ชุดเดรสยาว ชายโค้ง ผ้ามัดย้อมลายเพ้น นุ่มใส่สบาย"
    },
    "category": "dresses",
    "is_new": false,
    "price": 459,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "Orange",
        "th": "UP001 ส้ม"
      },
      {
        "en": "Yellow",
        "th": "UP002 เหลือง"
      },
      {
        "en": "Sky Blue",
        "th": "UP003 ฟ้า"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "Approx. 34–54 in / 86–137 cm",
          "th": "อก 34-54 นิ้ว (ประมาณ 86-137 ซม.)"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "Approx. 44 in / 112 cm",
          "th": "ยาว 44 นิ้ว (ประมาณ 112 ซม.)"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16168356966-01.webp",
        "alt": {
          "en": "Main view of Long Dress, Curved Hem, Dyed Fabric, Soft And Comfortable To Wear",
          "th": "ภาพหลักของ ชุดเดรสยาว ชายโค้ง ผ้ามัดย้อมลายเพ้น นุ่มใส่สบาย"
        }
      },
      {
        "src": "products/lzd-16168356966-02.webp",
        "alt": {
          "en": "Additional view 2 of Long Dress, Curved Hem, Dyed Fabric, Soft And Comfortable To Wear",
          "th": "ภาพเพิ่มเติม 2 ของ ชุดเดรสยาว ชายโค้ง ผ้ามัดย้อมลายเพ้น นุ่มใส่สบาย"
        }
      },
      {
        "src": "products/lzd-16168356966-03.webp",
        "alt": {
          "en": "Additional view 3 of Long Dress, Curved Hem, Dyed Fabric, Soft And Comfortable To Wear",
          "th": "ภาพเพิ่มเติม 3 ของ ชุดเดรสยาว ชายโค้ง ผ้ามัดย้อมลายเพ้น นุ่มใส่สบาย"
        }
      },
      {
        "src": "products/lzd-16168356966-04.webp",
        "alt": {
          "en": "Additional view 4 of Long Dress, Curved Hem, Dyed Fabric, Soft And Comfortable To Wear",
          "th": "ภาพเพิ่มเติม 4 ของ ชุดเดรสยาว ชายโค้ง ผ้ามัดย้อมลายเพ้น นุ่มใส่สบาย"
        }
      },
      {
        "src": "products/lzd-16168356966-05.webp",
        "alt": {
          "en": "Additional view 5 of Long Dress, Curved Hem, Dyed Fabric, Soft And Comfortable To Wear",
          "th": "ภาพเพิ่มเติม 5 ของ ชุดเดรสยาว ชายโค้ง ผ้ามัดย้อมลายเพ้น นุ่มใส่สบาย"
        }
      },
      {
        "src": "products/lzd-16168356966-06.webp",
        "alt": {
          "en": "Additional view 6 of Long Dress, Curved Hem, Dyed Fabric, Soft And Comfortable To Wear",
          "th": "ภาพเพิ่มเติม 6 ของ ชุดเดรสยาว ชายโค้ง ผ้ามัดย้อมลายเพ้น นุ่มใส่สบาย"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "💛 Chill dress with cute elephant pattern 🐘🌴 Wear it and it will be bright and eye-catching. Bohemian style hand-painted work The man has flowing curves. Very comfortable to wear. 🌞 Round neck, sleeveless, loose fit, suitable for all body types, going to the beach, cafe, or just taking a walk to chill.✨ 📏 Free size Chest 34-54 inches (approximately 86-137 cm.) Length 44 inches (approximately 112 cm.) 🌈 Soft fabric, comfortable to wear, flows beautifully. 🐘 Elephant pattern painted, extremely cute and unique. 💃 Wear it and you'll look small, completely camouflaging your figure. Hurry and reserve it. This model has very bright colors. Wear it to take photos on camera. 📸💕",
      "th": "💛 เดรสสายชิลล์ลายเพ้นช้างสุดน่ารัก 🐘🌴 ใส่แล้วสดใสสะดุดตา งานเพ้นมือสไตล์โบฮีเมียน ชายโค้งพริ้วๆ ใส่สบายมากกก 🌞 คอกลมแขนกุด ทรงปล่อยใส่ได้ทุกหุ่น จะเที่ยวทะเล คาเฟ่ หรือเดินชิลล์ก็ปัง✨ 📏 ขนาดฟรีไซส์ อก 34-54 นิ้ว (ประมาณ 86-137 ซม.) ยาว 44 นิ้ว (ประมาณ 112 ซม.) 🌈 ผ้านิ่ม ใส่สบาย พลิ้วสวย 🐘 ลายช้างเพ้นสุดคิ้วท์ ไม่ซ้ำใคร 💃 ใส่แล้วดูตัวเล็ก พรางหุ่นสุดๆ รีบจับจองน้าา รุ่นนี้สีสดมาก ใส่ถ่ายรูปขึ้นกล้องสุดๆ 📸💕"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16168356966-s127200365424.html"
    }
  },
  {
    "code": "LZD-16171027729",
    "name": {
      "en": "Embroidered Shoulder Bag Oversized Bohemian Style",
      "th": "กระเป๋าสะพายข้างปักลาย สไตล์โบฮีเมียนขนาดใหญ่"
    },
    "category": "bags",
    "is_new": false,
    "price": 459,
    "fabric": {
      "en": "Woven fabric",
      "th": "ผ้าทอ"
    },
    "colours": [
      {
        "en": "IDB101",
        "th": "IDB101"
      },
      {
        "en": "IDB201",
        "th": "IDB201"
      },
      {
        "en": "IDB202",
        "th": "IDB202"
      },
      {
        "en": "IDB203",
        "th": "IDB203"
      },
      {
        "en": "IDB204",
        "th": "IDB204"
      },
      {
        "en": "IDB205",
        "th": "IDB205"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "See the Lazada listing for available options",
          "th": "ดูตัวเลือกขนาดที่มีในหน้าสินค้า Lazada"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16171027729-01.webp",
        "alt": {
          "en": "Main view of Embroidered Shoulder Bag Oversized Bohemian Style",
          "th": "ภาพหลักของ กระเป๋าสะพายข้างปักลาย สไตล์โบฮีเมียนขนาดใหญ่"
        }
      },
      {
        "src": "products/lzd-16171027729-02.webp",
        "alt": {
          "en": "Additional view 2 of Embroidered Shoulder Bag Oversized Bohemian Style",
          "th": "ภาพเพิ่มเติม 2 ของ กระเป๋าสะพายข้างปักลาย สไตล์โบฮีเมียนขนาดใหญ่"
        }
      },
      {
        "src": "products/lzd-16171027729-03.webp",
        "alt": {
          "en": "Additional view 3 of Embroidered Shoulder Bag Oversized Bohemian Style",
          "th": "ภาพเพิ่มเติม 3 ของ กระเป๋าสะพายข้างปักลาย สไตล์โบฮีเมียนขนาดใหญ่"
        }
      },
      {
        "src": "products/lzd-16171027729-04.webp",
        "alt": {
          "en": "Additional view 4 of Embroidered Shoulder Bag Oversized Bohemian Style",
          "th": "ภาพเพิ่มเติม 4 ของ กระเป๋าสะพายข้างปักลาย สไตล์โบฮีเมียนขนาดใหญ่"
        }
      },
      {
        "src": "products/lzd-16171027729-05.webp",
        "alt": {
          "en": "Additional view 5 of Embroidered Shoulder Bag Oversized Bohemian Style",
          "th": "ภาพเพิ่มเติม 5 ของ กระเป๋าสะพายข้างปักลาย สไตล์โบฮีเมียนขนาดใหญ่"
        }
      },
      {
        "src": "products/lzd-16171027729-06.webp",
        "alt": {
          "en": "Additional view 6 of Embroidered Shoulder Bag Oversized Bohemian Style",
          "th": "ภาพเพิ่มเติม 6 ของ กระเป๋าสะพายข้างปักลาย สไตล์โบฮีเมียนขนาดใหญ่"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "🌈 Chic Bohemian bag ✨ Woven fabric, bright colors, unique design. Just one piece can instantly change your look to stand out. 💖 👜 Easy to carry, can match any style. 📱 Carry mobile phone, wallet and necessary items easily 🌿 Handmade fabric work It is unique and unique.",
      "th": "🌈 กระเป๋าย่ามโบฮีเมียนสุดชิค ✨ งานผ้าทอสีสันสดใส ดีไซน์ไม่ซ้ำ ใบเดียวก็เปลี่ยนลุคให้โดดเด่นได้ทันที 💖 👜 สะพายง่าย แมทช์ได้ทุกสไตล์ 📱 ใส่มือถือ กระเป๋าสตางค์ และของใช้จำเป็นได้สบาย 🌿 งานผ้าแนวแฮนด์เมด มีเอกลักษณ์ไม่เหมือนใคร"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16171027729-s127214375828.html"
    }
  },
  {
    "code": "LZD-16172568236",
    "name": {
      "en": "Rayon Bleached Top, Embroidery Work, Comfortable To Wear, Short Sleeve, Long Sleeve",
      "th": "เสื้อผ้าฟอกเรยอน งานปัก ใส่สบาย แขนสั้น แขนยาว"
    },
    "category": "tops",
    "is_new": false,
    "price": 359,
    "fabric": {
      "en": "Rayon",
      "th": "ผ้าเรยอน"
    },
    "colours": [
      {
        "en": "แขนยาว",
        "th": "WFP001 แขนยาว"
      },
      {
        "en": "แขนยาว",
        "th": "WFP002 แขนยาว"
      },
      {
        "en": "แขนยาว",
        "th": "WFP003 แขนยาว"
      },
      {
        "en": "แขนสั้น",
        "th": "WHP001 แขนสั้น"
      },
      {
        "en": "แขนสั้น",
        "th": "WHP002 แขนสั้น"
      },
      {
        "en": "แขนสั้น",
        "th": "WHP003 แขนสั้น"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "46 in / 117 cm",
          "th": "อก 46 นิ้ว ≈ 117 ซม."
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "24 in / 61 cm",
          "th": "ยาว 24 นิ้ว ≈ 61 ซม."
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16172568236-01.webp",
        "alt": {
          "en": "Main view of Rayon Bleached Top, Embroidery Work, Comfortable To Wear, Short Sleeve, Long Sleeve",
          "th": "ภาพหลักของ เสื้อผ้าฟอกเรยอน งานปัก ใส่สบาย แขนสั้น แขนยาว"
        }
      },
      {
        "src": "products/lzd-16172568236-02.webp",
        "alt": {
          "en": "Additional view 2 of Rayon Bleached Top, Embroidery Work, Comfortable To Wear, Short Sleeve, Long Sleeve",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อผ้าฟอกเรยอน งานปัก ใส่สบาย แขนสั้น แขนยาว"
        }
      },
      {
        "src": "products/lzd-16172568236-03.webp",
        "alt": {
          "en": "Additional view 3 of Rayon Bleached Top, Embroidery Work, Comfortable To Wear, Short Sleeve, Long Sleeve",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อผ้าฟอกเรยอน งานปัก ใส่สบาย แขนสั้น แขนยาว"
        }
      },
      {
        "src": "products/lzd-16172568236-04.webp",
        "alt": {
          "en": "Additional view 4 of Rayon Bleached Top, Embroidery Work, Comfortable To Wear, Short Sleeve, Long Sleeve",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อผ้าฟอกเรยอน งานปัก ใส่สบาย แขนสั้น แขนยาว"
        }
      },
      {
        "src": "products/lzd-16172568236-05.webp",
        "alt": {
          "en": "Additional view 5 of Rayon Bleached Top, Embroidery Work, Comfortable To Wear, Short Sleeve, Long Sleeve",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อผ้าฟอกเรยอน งานปัก ใส่สบาย แขนสั้น แขนยาว"
        }
      },
      {
        "src": "products/lzd-16172568236-06.webp",
        "alt": {
          "en": "Additional view 6 of Rayon Bleached Top, Embroidery Work, Comfortable To Wear, Short Sleeve, Long Sleeve",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อผ้าฟอกเรยอน งานปัก ใส่สบาย แขนสั้น แขนยาว"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "🌿 White rayon shirt, bleached work, soft embroidery 🌿 Easy to wear, comfortable to wear, soft and light fabric, beautiful flowing, makes you look very sweet and smooth when wearing it 💕 The brightly colored embroidered pattern contrasts with the white fabric. It's beautiful and outstanding. You can wear it all day, chilling, going to a cafe or working. ✨ Rayon fabric is comfortable and breathable. ✨ Beautiful and unique bleaching work. ✨ Detailed embroidery, beautiful all over. ✨ Loose fit. Wear it and camouflage your cute figure. 📏 Shirt size Chest 46 inches ≈ 117 cm. Length 24 inches ≈ 61 cm. Paired with jeans is very beautiful 🤍 There are many patterns and colors. The work is really cute. Hurry and say hello before it's all gone 🥰",
      "th": "🌿 เสื้อเรยอนสีขาว งานฟอก งานปักสุดละมุน 🌿 ใส่ง่าย ใส่สบาย ผ้านิ่มเบา พริ้วสวย ใส่แล้วดูหวานละมุนมากกก 💕 ลายปักสีสด ตัดกับผ้าสีขาว สวยเด่น ใส่ได้ทั้งวันชิลๆ เที่ยว คาเฟ่ หรือทำงานก็รอดค่ะ ✨ ผ้าเรยอนใส่สบาย ระบายอากาศดี ✨ งานฟอกสีสวย มีเอกลักษณ์ ✨ งานปักละเอียด สวยทั้งตัว ✨ ทรงใส่หลวม ใส่แล้วพรางหุ่นน่ารัก 📏 ขนาดเสื้อ อก 46 นิ้ว ≈ 117 ซม. ยาว 24 นิ้ว ≈ 61 ซม. แมทช์กับกางเกงยีนส์คือสวยมาก 🤍 มีหลายลาย หลายสี งานจริงน่ารักสุดๆ รีบทักก่อนหมดนะคะ 🥰"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16172568236-s127215097377.html"
    }
  },
  {
    "code": "LZD-16167013047",
    "name": {
      "en": "A Set Of Pure Cotton Fabric. There Are Many Colors And Patterns To Choose From. One Size",
      "th": "ชุดเซ็ตผ้าคอตตอนแท้ มีหลายสี หลายลาย ให้เลือก ฟรีไซส์"
    },
    "category": "sets",
    "is_new": false,
    "price": 1599,
    "fabric": {
      "en": "Cotton",
      "th": "ผ้าคอตตอน"
    },
    "colours": [
      {
        "en": "CTS001",
        "th": "CTS001"
      },
      {
        "en": "CTS002",
        "th": "CTS002"
      },
      {
        "en": "CTS003",
        "th": "CTS003"
      },
      {
        "en": "CTS004",
        "th": "CTS004"
      },
      {
        "en": "CTS005",
        "th": "CTS005"
      },
      {
        "en": "CTS006",
        "th": "CTS006"
      },
      {
        "en": "CTS007",
        "th": "CTS007"
      },
      {
        "en": "CTS008",
        "th": "CTS008"
      },
      {
        "en": "CTS009",
        "th": "CTS009"
      },
      {
        "en": "CTS010",
        "th": "CTS010"
      },
      {
        "en": "CTS011",
        "th": "CTS011"
      },
      {
        "en": "CTS012",
        "th": "CTS012"
      },
      {
        "en": "CTS013",
        "th": "CTS013"
      },
      {
        "en": "CTS014",
        "th": "CTS014"
      },
      {
        "en": "CTS015",
        "th": "CTS015"
      },
      {
        "en": "CTS016",
        "th": "CTS016"
      },
      {
        "en": "CTS017",
        "th": "CTS017"
      },
      {
        "en": "CTS018",
        "th": "CTS018"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "40 in / 102 cm",
          "th": "อก 40 นิ้ว ≈ 102 ซม."
        }
      },
      {
        "label": {
          "en": "Waist",
          "th": "รอบเอว"
        },
        "value": {
          "en": "28–38 in / 71–97 cm",
          "th": "เอว 28-38 นิ้ว ≈ 71-97 ซม."
        }
      },
      {
        "label": {
          "en": "Hips",
          "th": "สะโพก"
        },
        "value": {
          "en": "40 in / 102 cm",
          "th": "สะโพก 40 นิ้ว ≈ 102 ซม."
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16167013047-01.webp",
        "alt": {
          "en": "Main view of A Set Of Pure Cotton Fabric. There Are Many Colors And Patterns To Choose From. One Size",
          "th": "ภาพหลักของ ชุดเซ็ตผ้าคอตตอนแท้ มีหลายสี หลายลาย ให้เลือก ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16167013047-02.webp",
        "alt": {
          "en": "Additional view 2 of A Set Of Pure Cotton Fabric. There Are Many Colors And Patterns To Choose From. One Size",
          "th": "ภาพเพิ่มเติม 2 ของ ชุดเซ็ตผ้าคอตตอนแท้ มีหลายสี หลายลาย ให้เลือก ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16167013047-03.webp",
        "alt": {
          "en": "Additional view 3 of A Set Of Pure Cotton Fabric. There Are Many Colors And Patterns To Choose From. One Size",
          "th": "ภาพเพิ่มเติม 3 ของ ชุดเซ็ตผ้าคอตตอนแท้ มีหลายสี หลายลาย ให้เลือก ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16167013047-04.webp",
        "alt": {
          "en": "Additional view 4 of A Set Of Pure Cotton Fabric. There Are Many Colors And Patterns To Choose From. One Size",
          "th": "ภาพเพิ่มเติม 4 ของ ชุดเซ็ตผ้าคอตตอนแท้ มีหลายสี หลายลาย ให้เลือก ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16167013047-05.webp",
        "alt": {
          "en": "Additional view 5 of A Set Of Pure Cotton Fabric. There Are Many Colors And Patterns To Choose From. One Size",
          "th": "ภาพเพิ่มเติม 5 ของ ชุดเซ็ตผ้าคอตตอนแท้ มีหลายสี หลายลาย ให้เลือก ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16167013047-06.webp",
        "alt": {
          "en": "Additional view 6 of A Set Of Pure Cotton Fabric. There Are Many Colors And Patterns To Choose From. One Size",
          "th": "ภาพเพิ่มเติม 6 ของ ชุดเซ็ตผ้าคอตตอนแท้ มีหลายสี หลายลาย ให้เลือก ฟรีไซส์"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "✨ Genuine cotton fabric set, extremely comfortable to wear ✨ V-neck, front buttons, sleeveless, simple and chic design, easy to wear, looks good in every look 💕 Comes with beautiful pants. The leg ends are not very flared. Wear it and you'll look slimmer. You can wear it to travel to a cafe or just to chill. 🌿 Genuine cotton fabric, soft texture, comfortable to wear, good ventilation. 🎨 There are many colors and patterns to choose from. 📸 Wear it and take a lot more photos. 📏 Size Chest 40 inches ≈ 102 cm. Shirt length 20 inches ≈ 51 cm. Waist 28-38 inches ≈ 71-97 cm. Hips 40 inches ≈ 102 cm. Pants length 37 inches ≈ 94 cm. 💖 Cute work, can be worn every day. Hurry and message me to reserve your favorite color.",
      "th": "✨ ชุดเซ็ตผ้าคอตตอนแท้ ใส่สบายสุดๆ ✨ งานคอวี กระดุมหน้า แขนกุด ดีไซน์เรียบเก๋ ใส่ง่าย ดูดีทุกลุค 💕 มาพร้อมกางเกงทรงสวย ปลายขาไม่บานมาก ใส่แล้วดูเพรียว ใส่เที่ยว คาเฟ่ หรือใส่ชิลล์ๆ ได้เลยค่า 🌿 ผ้าคอตตอนแท้ เนื้อนิ่ม ใส่สบาย ระบายอากาศดี 🎨 มีหลายสี หลายลาย ให้เลือก 📸 ใส่แล้วถ่ายรูปขึ้นมาก 📏 Size อก 40 นิ้ว ≈ 102 ซม. เสื้อยาว 20 นิ้ว ≈ 51 ซม. เอว 28-38 นิ้ว ≈ 71-97 ซม. สะโพก 40 นิ้ว ≈ 102 ซม. กางเกงยาว 37 นิ้ว ≈ 94 ซม. 💖 งานน่ารัก ใส่ได้ทุกวัน รีบทักมาจองสีที่ชอบกันนะคะ"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16167013047-s127195295155.html"
    }
  },
  {
    "code": "LZD-16161552818",
    "name": {
      "en": "Floral Pattern Set, Collar, Light And Comfortable Fabric, One Size",
      "th": "ชุดเซ็ตลายดอก คอปก ผ้าเบาสบาย ฟรีไซส์"
    },
    "category": "sets",
    "is_new": false,
    "price": 459,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "SMS601",
        "th": "SMS601"
      },
      {
        "en": "SMS602",
        "th": "SMS602"
      },
      {
        "en": "SMS603",
        "th": "SMS603"
      },
      {
        "en": "SMS604",
        "th": "SMS604"
      },
      {
        "en": "SMS605",
        "th": "SMS605"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "Approx. 44 in / 112 cm",
          "th": "อก 44 นิ้ว (ประมาณ 112 ซม.)"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "Approx. 29 in / 74 cm",
          "th": "ยาว 29 นิ้ว (ประมาณ 74 ซม.)"
        }
      },
      {
        "label": {
          "en": "Waist",
          "th": "รอบเอว"
        },
        "value": {
          "en": "Approx. 26–44 in / 66–112 cm",
          "th": "เอว 26-44 นิ้ว (ประมาณ 66-112 ซม.)"
        }
      },
      {
        "label": {
          "en": "Hips",
          "th": "สะโพก"
        },
        "value": {
          "en": "Approx. 46 in / 117 cm",
          "th": "สะโพก 46 นิ้ว (ประมาณ 117 ซม.)"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16161552818-01.webp",
        "alt": {
          "en": "Main view of Floral Pattern Set, Collar, Light And Comfortable Fabric, One Size",
          "th": "ภาพหลักของ ชุดเซ็ตลายดอก คอปก ผ้าเบาสบาย ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16161552818-02.webp",
        "alt": {
          "en": "Additional view 2 of Floral Pattern Set, Collar, Light And Comfortable Fabric, One Size",
          "th": "ภาพเพิ่มเติม 2 ของ ชุดเซ็ตลายดอก คอปก ผ้าเบาสบาย ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16161552818-03.webp",
        "alt": {
          "en": "Additional view 3 of Floral Pattern Set, Collar, Light And Comfortable Fabric, One Size",
          "th": "ภาพเพิ่มเติม 3 ของ ชุดเซ็ตลายดอก คอปก ผ้าเบาสบาย ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16161552818-04.webp",
        "alt": {
          "en": "Additional view 4 of Floral Pattern Set, Collar, Light And Comfortable Fabric, One Size",
          "th": "ภาพเพิ่มเติม 4 ของ ชุดเซ็ตลายดอก คอปก ผ้าเบาสบาย ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16161552818-05.webp",
        "alt": {
          "en": "Additional view 5 of Floral Pattern Set, Collar, Light And Comfortable Fabric, One Size",
          "th": "ภาพเพิ่มเติม 5 ของ ชุดเซ็ตลายดอก คอปก ผ้าเบาสบาย ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16161552818-06.webp",
        "alt": {
          "en": "Additional view 6 of Floral Pattern Set, Collar, Light And Comfortable Fabric, One Size",
          "th": "ภาพเพิ่มเติม 6 ของ ชุดเซ็ตลายดอก คอปก ผ้าเบาสบาย ฟรีไซส์"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "🌺 Floral pattern set, bright colors. Wear it and you will look younger. 🌺 Comfortable to wear, cute, complete set including shirt and pants. Flowy fabric, light, wear it when traveling, wear it at home, or wear it to a cafe, it's super cute 💖 ✨ Button-front shirt with sweet floral pattern. ✨ Elastic waist pants, comfortable and flexible. 📏 Product size 👚 shirt • Chest 44 inches (approximately 112 cm.) • Length 29 inches (approximately 74 cm.) 🩳 Pants • Waist 26-44 inches (approximately 66-112 cm.) • Hips 46 inches (approx. 117 cm.) • Length 18 inches (approximately 46 cm.) 🌸 It's beautiful to wear as a dress. Separating matches is cool. Ready to send 💕",
      "th": "🌺 ชุดเซตลายดอก สีสดใส ใส่แล้วดูเด็กลง 🌺 ใส่สบาย น่ารักครบเซต ทั้งเสื้อและกางเกง ผ้าพริ้ว เบา ใส่เที่ยว ใส่อยู่บ้าน หรือใส่ไปคาเฟ่ก็น่ารักสุดๆ 💖 ✨ เสื้อกระดุมหน้า ลายดอกหวานๆ ✨ กางเกงเอวยางยืด ใส่สบาย คล่องตัว 📏 ขนาดสินค้า 👚 เสื้อ • อก 44 นิ้ว (ประมาณ 112 ซม.) • ยาว 29 นิ้ว (ประมาณ 74 ซม.) 🩳 กางเกง • เอว 26-44 นิ้ว (ประมาณ 66-112 ซม.) • สะโพก 46 นิ้ว (ประมาณ 117 ซม.) • ยาว 18 นิ้ว (ประมาณ 46 ซม.) 🌸 ใส่เป็นชุดก็สวย แยกแมทช์ก็เก๋ พร้อมส่งจ้า 💕"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16161552818-s127170887040.html"
    }
  },
  {
    "code": "LZD-16168392609",
    "name": {
      "en": "Chill Dress With Cute Painted Pattern, Curved Hem, Soft And Comfortable To Wear",
      "th": "เดรสสายชิลล์ลายเพ้นสุดน่ารัก ชายโค้ง นุ่มใส่สบาย"
    },
    "category": "dresses",
    "is_new": false,
    "price": 459,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "UPD001",
        "th": "UPD001"
      },
      {
        "en": "UPD002",
        "th": "UPD002"
      },
      {
        "en": "UPD003",
        "th": "UPD003"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "Approx. 34–54 in / 86–137 cm",
          "th": "อก 34-54 นิ้ว (ประมาณ 86-137 ซม.)"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "Approx. 44 in / 112 cm",
          "th": "ยาว 44 นิ้ว (ประมาณ 112 ซม.)"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16168392609-01.webp",
        "alt": {
          "en": "Main view of Chill Dress With Cute Painted Pattern, Curved Hem, Soft And Comfortable To Wear",
          "th": "ภาพหลักของ เดรสสายชิลล์ลายเพ้นสุดน่ารัก ชายโค้ง นุ่มใส่สบาย"
        }
      },
      {
        "src": "products/lzd-16168392609-02.webp",
        "alt": {
          "en": "Additional view 2 of Chill Dress With Cute Painted Pattern, Curved Hem, Soft And Comfortable To Wear",
          "th": "ภาพเพิ่มเติม 2 ของ เดรสสายชิลล์ลายเพ้นสุดน่ารัก ชายโค้ง นุ่มใส่สบาย"
        }
      },
      {
        "src": "products/lzd-16168392609-03.webp",
        "alt": {
          "en": "Additional view 3 of Chill Dress With Cute Painted Pattern, Curved Hem, Soft And Comfortable To Wear",
          "th": "ภาพเพิ่มเติม 3 ของ เดรสสายชิลล์ลายเพ้นสุดน่ารัก ชายโค้ง นุ่มใส่สบาย"
        }
      },
      {
        "src": "products/lzd-16168392609-04.webp",
        "alt": {
          "en": "Additional view 4 of Chill Dress With Cute Painted Pattern, Curved Hem, Soft And Comfortable To Wear",
          "th": "ภาพเพิ่มเติม 4 ของ เดรสสายชิลล์ลายเพ้นสุดน่ารัก ชายโค้ง นุ่มใส่สบาย"
        }
      },
      {
        "src": "products/lzd-16168392609-05.webp",
        "alt": {
          "en": "Additional view 5 of Chill Dress With Cute Painted Pattern, Curved Hem, Soft And Comfortable To Wear",
          "th": "ภาพเพิ่มเติม 5 ของ เดรสสายชิลล์ลายเพ้นสุดน่ารัก ชายโค้ง นุ่มใส่สบาย"
        }
      },
      {
        "src": "products/lzd-16168392609-06.webp",
        "alt": {
          "en": "Additional view 6 of Chill Dress With Cute Painted Pattern, Curved Hem, Soft And Comfortable To Wear",
          "th": "ภาพเพิ่มเติม 6 ของ เดรสสายชิลล์ลายเพ้นสุดน่ารัก ชายโค้ง นุ่มใส่สบาย"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "💛 Chill dress with cute elephant pattern 🐘🌴 Wear it and it will be bright and eye-catching. Bohemian style hand-painted work The man has flowing curves. Very comfortable to wear. 🌞 Round neck, sleeveless, loose fit, suitable for all body types, going to the beach, cafe, or just taking a walk to chill.✨ 📏 Free size Chest 34-54 inches (approximately 86-137 cm.) Length 44 inches (approximately 112 cm.) 🌈 Soft fabric, comfortable to wear, flows beautifully. 🐘 Elephant pattern painted, extremely cute and unique. 💃 Wear it and you'll look small, completely camouflaging your figure. Hurry and reserve it. This model has very bright colors. Wear it to take photos on camera. 📸💕",
      "th": "💛 เดรสสายชิลล์ลายเพ้นช้างสุดน่ารัก 🐘🌴 ใส่แล้วสดใสสะดุดตา งานเพ้นมือสไตล์โบฮีเมียน ชายโค้งพริ้วๆ ใส่สบายมากกก 🌞 คอกลมแขนกุด ทรงปล่อยใส่ได้ทุกหุ่น จะเที่ยวทะเล คาเฟ่ หรือเดินชิลล์ก็ปัง✨ 📏 ขนาดฟรีไซส์ อก 34-54 นิ้ว (ประมาณ 86-137 ซม.) ยาว 44 นิ้ว (ประมาณ 112 ซม.) 🌈 ผ้านิ่ม ใส่สบาย พลิ้วสวย 🐘 ลายช้างเพ้นสุดคิ้วท์ ไม่ซ้ำใคร 💃 ใส่แล้วดูตัวเล็ก พรางหุ่นสุดๆ รีบจับจองน้าา รุ่นนี้สีสดมาก ใส่ถ่ายรูปขึ้นกล้องสุดๆ 📸💕"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16168392609-s127214334993.html"
    }
  },
  {
    "code": "LZD-16170949626",
    "name": {
      "en": "Short Dress, Cute Pattern, Sweet Girl Look, One Size",
      "th": "เดรสสั้น ลายน่ารัก ลุคสาวหวาน ฟรีไซส์"
    },
    "category": "dresses",
    "is_new": false,
    "price": 359,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "THD001",
        "th": "THD001"
      },
      {
        "en": "THD002",
        "th": "THD002"
      },
      {
        "en": "THD003",
        "th": "THD003"
      },
      {
        "en": "THD004",
        "th": "THD004"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "32–40 in",
          "th": "อก 32-40 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16170949626-01.webp",
        "alt": {
          "en": "Main view of Short Dress, Cute Pattern, Sweet Girl Look, One Size",
          "th": "ภาพหลักของ เดรสสั้น ลายน่ารัก ลุคสาวหวาน ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16170949626-02.webp",
        "alt": {
          "en": "Additional view 2 of Short Dress, Cute Pattern, Sweet Girl Look, One Size",
          "th": "ภาพเพิ่มเติม 2 ของ เดรสสั้น ลายน่ารัก ลุคสาวหวาน ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16170949626-03.webp",
        "alt": {
          "en": "Additional view 3 of Short Dress, Cute Pattern, Sweet Girl Look, One Size",
          "th": "ภาพเพิ่มเติม 3 ของ เดรสสั้น ลายน่ารัก ลุคสาวหวาน ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16170949626-04.webp",
        "alt": {
          "en": "Additional view 4 of Short Dress, Cute Pattern, Sweet Girl Look, One Size",
          "th": "ภาพเพิ่มเติม 4 ของ เดรสสั้น ลายน่ารัก ลุคสาวหวาน ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16170949626-05.webp",
        "alt": {
          "en": "Additional view 5 of Short Dress, Cute Pattern, Sweet Girl Look, One Size",
          "th": "ภาพเพิ่มเติม 5 ของ เดรสสั้น ลายน่ารัก ลุคสาวหวาน ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16170949626-06.webp",
        "alt": {
          "en": "Additional view 6 of Short Dress, Cute Pattern, Sweet Girl Look, One Size",
          "th": "ภาพเพิ่มเติม 6 ของ เดรสสั้น ลายน่ารัก ลุคสาวหวาน ฟรีไซส์"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Sweet and clear look dress Wear it and look expensive like your child 💕 There are many patterns and colors, and it's beautiful to wear while traveling. It's great when wearing a cafe. Cute shape, camouflages your figure well, ties a bow in the back, very chic 🎀 Chest 32-40 inches Comfortable to wear, soft, lightweight fabric The actual work is very beautiful. Wear it and it really enhances your skin ✨ Any girls looking for a cute outfit to take photos with? Must have it in the closet 🤍",
      "th": "เดรสลุคหวานใส ใส่แล้วดูแพงแบบลูกคุณ 💕 มีหลายลาย หลายสี ใส่เที่ยวก็สวย ใส่คาเฟ่ก็ปัง ทรงน่ารัก พรางหุ่นดี ผูกโบว์ด้านหลังเก๋มาก 🎀 อก 32-40 นิ้ว ใส่สบาย ผ้านิ่ม พลิ้วเบา งานจริงสวยมาก ใส่แล้วขับผิวสุดๆ ✨ สาวๆคนไหนกำลังหาชุดน่ารักไว้ถ่ายรูป ต้องมีติดตู้เลยค่า 🤍"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16170949626-s127212723693.html"
    }
  },
  {
    "code": "LZD-16178092292",
    "name": {
      "en": "Long Dress, Curved Hem, Tie-Dye Fabric, Embroidered Work, Soft And Comfortable To Wear",
      "th": "ชุดเดรสยาว ชายโค้ง ผ้ามัดย้อมงานปัก นุ่มใส่สบาย"
    },
    "category": "dresses",
    "is_new": false,
    "price": 499,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "Sky Blue",
        "th": "UP001 ฟ้า"
      },
      {
        "en": "Purple",
        "th": "UP002 ม่วง"
      },
      {
        "en": "Green",
        "th": "UP003 เขียว"
      },
      {
        "en": "Yellow",
        "th": "UP004 เหลือง"
      },
      {
        "en": "Black",
        "th": "UP005 ดำ"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Dimensions",
          "th": "ขนาด"
        },
        "value": {
          "en": "Approx. 34–54 in / 86–137 cm / 44 in / 112 cm",
          "th": "ขนาดฟรีไซส์ อก 34-54 นิ้ว (ประมาณ 86-137 ซม.) ยาว 44 นิ้ว (ประมาณ 112 ซม.)"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16178092292-01.webp",
        "alt": {
          "en": "Main view of Long Dress, Curved Hem, Tie-Dye Fabric, Embroidered Work, Soft And Comfortable To Wear",
          "th": "ภาพหลักของ ชุดเดรสยาว ชายโค้ง ผ้ามัดย้อมงานปัก นุ่มใส่สบาย"
        }
      },
      {
        "src": "products/lzd-16178092292-02.webp",
        "alt": {
          "en": "Additional view 2 of Long Dress, Curved Hem, Tie-Dye Fabric, Embroidered Work, Soft And Comfortable To Wear",
          "th": "ภาพเพิ่มเติม 2 ของ ชุดเดรสยาว ชายโค้ง ผ้ามัดย้อมงานปัก นุ่มใส่สบาย"
        }
      },
      {
        "src": "products/lzd-16178092292-03.webp",
        "alt": {
          "en": "Additional view 3 of Long Dress, Curved Hem, Tie-Dye Fabric, Embroidered Work, Soft And Comfortable To Wear",
          "th": "ภาพเพิ่มเติม 3 ของ ชุดเดรสยาว ชายโค้ง ผ้ามัดย้อมงานปัก นุ่มใส่สบาย"
        }
      },
      {
        "src": "products/lzd-16178092292-04.webp",
        "alt": {
          "en": "Additional view 4 of Long Dress, Curved Hem, Tie-Dye Fabric, Embroidered Work, Soft And Comfortable To Wear",
          "th": "ภาพเพิ่มเติม 4 ของ ชุดเดรสยาว ชายโค้ง ผ้ามัดย้อมงานปัก นุ่มใส่สบาย"
        }
      },
      {
        "src": "products/lzd-16178092292-05.webp",
        "alt": {
          "en": "Additional view 5 of Long Dress, Curved Hem, Tie-Dye Fabric, Embroidered Work, Soft And Comfortable To Wear",
          "th": "ภาพเพิ่มเติม 5 ของ ชุดเดรสยาว ชายโค้ง ผ้ามัดย้อมงานปัก นุ่มใส่สบาย"
        }
      },
      {
        "src": "products/lzd-16178092292-06.webp",
        "alt": {
          "en": "Additional view 6 of Long Dress, Curved Hem, Tie-Dye Fabric, Embroidered Work, Soft And Comfortable To Wear",
          "th": "ภาพเพิ่มเติม 6 ของ ชุดเดรสยาว ชายโค้ง ผ้ามัดย้อมงานปัก นุ่มใส่สบาย"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "A chill dress with tie-dye and embroidery work. Super cute. Bright and eye-catching when worn. bohemian style The flowing curves are very comfortable to wear. Round neck, sleeveless, loose fit, suitable for all body types. Whether you're going to the beach, a cafe, or just taking a chill walk, it's great. Free size: chest 34-54 inches (approximately 86-137 cm.) length 44 inches (approximately 112 cm.) Soft fabric, comfortable to wear, flows beautifully and uniquely. Wear it and you will look small, completely hiding your figure. Hurry and reserve it. This model has very bright colors. Wear it to take pictures on camera.",
      "th": "เดรสสายชิลล์งานมัดย้อม งานปัก สุดน่ารัก ใส่แล้วสดใสสะดุดตา สไตล์โบฮีเมียน ชายโค้งพริ้วๆ ใส่สบายมากกก คอกลมแขนกุด ทรงปล่อยใส่ได้ทุกหุ่น จะเที่ยวทะเล คาเฟ่ หรือเดินชิลล์ก็ปัง ขนาดฟรีไซส์ อก 34-54 นิ้ว (ประมาณ 86-137 ซม.) ยาว 44 นิ้ว (ประมาณ 112 ซม.) ผ้านิ่ม ใส่สบาย พลิ้วสวยไม่ซ้ำใคร ใส่แล้วดูตัวเล็ก พรางหุ่นสุดๆ รีบจับจองน้าา รุ่นนี้สีสดมาก ใส่ถ่ายรูปขึ้นกล้องสุดๆ"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16178092292-s127250106920.html"
    }
  },
  {
    "code": "LZD-16169278624",
    "name": {
      "en": "White Embroidered Lightweight Woven Top For Plus-Size Fit",
      "th": "เสื้อผ้าป่านงานปัก สีขาว สาวพลัสไซส์"
    },
    "category": "tops",
    "is_new": false,
    "price": 459,
    "fabric": {
      "en": "Lightweight woven fabric",
      "th": "ผ้าป่าน"
    },
    "colours": [
      {
        "en": "WJH001",
        "th": "WJH001"
      },
      {
        "en": "WJH002",
        "th": "WJH002"
      },
      {
        "en": "WJH003",
        "th": "WJH003"
      },
      {
        "en": "WJH004",
        "th": "WJH004"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "Approx. 48 in / 122 cm",
          "th": "อก 48 นิ้ว (ประมาณ 122 ซม.)"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "Approx. 29 in / 74 cm",
          "th": "ความยาว 29 นิ้ว (ประมาณ 74 ซม.)"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16169278624-01.webp",
        "alt": {
          "en": "Main view of White Embroidered Lightweight Woven Top For Plus-Size Fit",
          "th": "ภาพหลักของ เสื้อผ้าป่านงานปัก สีขาว สาวพลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16169278624-02.webp",
        "alt": {
          "en": "Additional view 2 of White Embroidered Lightweight Woven Top For Plus-Size Fit",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อผ้าป่านงานปัก สีขาว สาวพลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16169278624-03.webp",
        "alt": {
          "en": "Additional view 3 of White Embroidered Lightweight Woven Top For Plus-Size Fit",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อผ้าป่านงานปัก สีขาว สาวพลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16169278624-04.webp",
        "alt": {
          "en": "Additional view 4 of White Embroidered Lightweight Woven Top For Plus-Size Fit",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อผ้าป่านงานปัก สีขาว สาวพลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16169278624-05.webp",
        "alt": {
          "en": "Additional view 5 of White Embroidered Lightweight Woven Top For Plus-Size Fit",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อผ้าป่านงานปัก สีขาว สาวพลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16169278624-06.webp",
        "alt": {
          "en": "Additional view 6 of White Embroidered Lightweight Woven Top For Plus-Size Fit",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อผ้าป่านงานปัก สีขาว สาวพลัสไซส์"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "✨ Hemp clothes with embroidery + soft painted patterns ✨ Wear it and you will look sweet, expensive, and have the style of a bohemian girl 🤍🌿 Light linen fabric, comfortable to wear. Embroidered with beautiful floral patterns mixed with painted patterns. Every detail is tight. It's beautiful to pair with jeans. Wear it to travel, wear to a cafe, or just chill every day. 💕 📏 Shirt size • Chest 48 inches (approximately 122 cm.) • Length 29 inches (approximately 74 cm.) 🌸 There are many styles and patterns to choose from. 🌸 Beautiful work. Wear it and you will look charming. 🌸 Take more photos. Hurry and message me to reserve your favorite pattern. 💌",
      "th": "✨ เสื้อผ้าป่านงานปัก + ลายเพ้นท์สุดละมุน ✨ ใส่แล้วดูหวาน ดูแพง มีสไตล์แบบสาวโบฮีเมียน 🤍🌿 งานผ้าป่านเนื้อบางเบา ใส่สบาย ปักลายดอกไม้ผสมลายเพ้นท์สวยๆ รายละเอียดแน่นทุกตัว แมทช์กับยีนส์ก็สวย ใส่เที่ยว ใส่คาเฟ่ หรือใส่ชิลๆ ได้ทุกวัน 💕 📏 ขนาดเสื้อ • อก 48 นิ้ว (ประมาณ 122 ซม.) • ความยาว 29 นิ้ว (ประมาณ 74 ซม.) 🌸 มีหลายแบบ หลายลายให้เลือก 🌸 งานสวย ใส่แล้วดูมีเสน่ห์ 🌸 ถ่ายรูปขึ้นมากกก รีบทักมาจองลายที่ชอบได้เลยน้า 💌"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16169278624-s127216986726.html"
    }
  },
  {
    "code": "LZD-16203390556",
    "name": {
      "en": "Batwing Style Rayon Shirt, Beautiful Embroidery, Comfortable To Wear",
      "th": "เสื้อเรยอนทรงปีกค้างคาว งานปักสวย ใส่สบาย"
    },
    "category": "tops",
    "is_new": false,
    "price": 499,
    "fabric": {
      "en": "Rayon",
      "th": "ผ้าเรยอน"
    },
    "colours": [
      {
        "en": "Pink",
        "th": "RK101 ชมพู"
      },
      {
        "en": "Beige",
        "th": "RK102 เบจ"
      },
      {
        "en": "Sky Blue",
        "th": "RK103 ฟ้า"
      },
      {
        "en": "Pink",
        "th": "RK104 พีชอมชมพู"
      },
      {
        "en": "Yellow",
        "th": "RK105 เหลือง"
      },
      {
        "en": "Green",
        "th": "RK106 เขียวอ่อน"
      },
      {
        "en": "Red",
        "th": "RK107 แดง"
      },
      {
        "en": "Grey",
        "th": "RK108 เทา"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "48 in",
          "th": "อก 48 นิ้ว"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "27 in",
          "th": "ยาว 27 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16203390556-01.webp",
        "alt": {
          "en": "Main view of Batwing Style Rayon Shirt, Beautiful Embroidery, Comfortable To Wear",
          "th": "ภาพหลักของ เสื้อเรยอนทรงปีกค้างคาว งานปักสวย ใส่สบาย"
        }
      },
      {
        "src": "products/lzd-16203390556-02.webp",
        "alt": {
          "en": "Additional view 2 of Batwing Style Rayon Shirt, Beautiful Embroidery, Comfortable To Wear",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อเรยอนทรงปีกค้างคาว งานปักสวย ใส่สบาย"
        }
      },
      {
        "src": "products/lzd-16203390556-03.webp",
        "alt": {
          "en": "Additional view 3 of Batwing Style Rayon Shirt, Beautiful Embroidery, Comfortable To Wear",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อเรยอนทรงปีกค้างคาว งานปักสวย ใส่สบาย"
        }
      },
      {
        "src": "products/lzd-16203390556-04.webp",
        "alt": {
          "en": "Additional view 4 of Batwing Style Rayon Shirt, Beautiful Embroidery, Comfortable To Wear",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อเรยอนทรงปีกค้างคาว งานปักสวย ใส่สบาย"
        }
      },
      {
        "src": "products/lzd-16203390556-05.webp",
        "alt": {
          "en": "Additional view 5 of Batwing Style Rayon Shirt, Beautiful Embroidery, Comfortable To Wear",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อเรยอนทรงปีกค้างคาว งานปักสวย ใส่สบาย"
        }
      },
      {
        "src": "products/lzd-16203390556-06.webp",
        "alt": {
          "en": "Additional view 6 of Batwing Style Rayon Shirt, Beautiful Embroidery, Comfortable To Wear",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อเรยอนทรงปีกค้างคาว งานปักสวย ใส่สบาย"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "✨ Batwing style rayon shirt, beautiful embroidery, comfortable to wear ✨ 🌿 Rayon fabric is soft, light and comfortable to wear. 🪡 Beautiful embroidery, looks stylish. 📏 Chest 48 inches | Length 27 inches 👖 Matches beautifully with jeans or cloth pants. There are many colors to choose from 💕",
      "th": "✨ เสื้อเรยอนทรงปีกค้างคาว งานปักสวย ใส่สบาย ✨ 🌿 ผ้าเรยอนนุ่ม เบา ใส่สบาย 🪡 งานปักสวย ดูมีสไตล์ 📏 อก 48 นิ้ว | ยาว 27 นิ้ว 👖 แมทช์กับกางเกงยีนส์หรือกางเกงผ้าก็สวย มีหลายสีให้เลือกค่ะ 💕"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16203390556-s127333571909.html"
    }
  },
  {
    "code": "LZD-16166270304",
    "name": {
      "en": "Lightweight Woven Top With Floral Pattern, Embroidery Work, Beautiful And Gentle, One Size, Plus Size",
      "th": "เสื้อผ้าป่านลายดอกไม้ งานปัก สวยละมุน ฟรีไซส์ พลัสไซส์"
    },
    "category": "tops",
    "is_new": false,
    "price": 459,
    "fabric": {
      "en": "Lightweight woven fabric",
      "th": "ผ้าป่าน"
    },
    "colours": [
      {
        "en": "WPF001",
        "th": "WPF001"
      },
      {
        "en": "WPF002",
        "th": "WPF002"
      },
      {
        "en": "WPF003",
        "th": "WPF003"
      },
      {
        "en": "WPF004",
        "th": "WPF004"
      },
      {
        "en": "WPF005",
        "th": "WPF005"
      },
      {
        "en": "WPF006",
        "th": "WPF006"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "Approx. 40 in / 102 cm",
          "th": "อก 40 นิ้ว (ประมาณ 102 ซม.)"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "Approx. 16 in / 41 cm",
          "th": "ความยาวแขน 16 นิ้ว (ประมาณ 41 ซม.)"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16166270304-01.webp",
        "alt": {
          "en": "Main view of Lightweight Woven Top With Floral Pattern, Embroidery Work, Beautiful And Gentle, One Size, Plus Size",
          "th": "ภาพหลักของ เสื้อผ้าป่านลายดอกไม้ งานปัก สวยละมุน ฟรีไซส์ พลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16166270304-02.webp",
        "alt": {
          "en": "Additional view 2 of Lightweight Woven Top With Floral Pattern, Embroidery Work, Beautiful And Gentle, One Size, Plus Size",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อผ้าป่านลายดอกไม้ งานปัก สวยละมุน ฟรีไซส์ พลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16166270304-03.webp",
        "alt": {
          "en": "Additional view 3 of Lightweight Woven Top With Floral Pattern, Embroidery Work, Beautiful And Gentle, One Size, Plus Size",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อผ้าป่านลายดอกไม้ งานปัก สวยละมุน ฟรีไซส์ พลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16166270304-04.webp",
        "alt": {
          "en": "Additional view 4 of Lightweight Woven Top With Floral Pattern, Embroidery Work, Beautiful And Gentle, One Size, Plus Size",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อผ้าป่านลายดอกไม้ งานปัก สวยละมุน ฟรีไซส์ พลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16166270304-05.webp",
        "alt": {
          "en": "Additional view 5 of Lightweight Woven Top With Floral Pattern, Embroidery Work, Beautiful And Gentle, One Size, Plus Size",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อผ้าป่านลายดอกไม้ งานปัก สวยละมุน ฟรีไซส์ พลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16166270304-06.webp",
        "alt": {
          "en": "Additional view 6 of Lightweight Woven Top With Floral Pattern, Embroidery Work, Beautiful And Gentle, One Size, Plus Size",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อผ้าป่านลายดอกไม้ งานปัก สวยละมุน ฟรีไซส์ พลัสไซส์"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "🌸 Hemp clothing with a soft floral embroidery pattern 🌸 Embroidery work, beautiful colors, sweet, looks expensive, easy to wear, chill girl style. It's beautiful to wear when traveling. It's cute to wear to work 💕 Light linen fabric, comfortable to wear, not hot. There is a drawstring at the back so you can adjust the shape. Wear it and it looks good and fits well. ✨ Matching with jeans is beautiful and smooth. Or wear it with a skirt, it's very sweet. 💐 There are many colors to choose from. 📏 Free size • Chest 40 inches (approximately 102 cm.) • Arm length 16 inches (approximately 41 cm.) • Shirt length 29 inches (approximately 74 cm.) Who likes embroidery and natural style fabric work? Must have it in the closet 🤍",
      "th": "🌸 เสื้อผ้าป่านลายปักดอกไม้สุดละมุน 🌸 งานปักสีสวยหวาน ดูแพง ใส่ง่ายสไตล์สาวชิลล์ ใส่เที่ยวก็สวย ใส่ทำงานก็น่ารัก 💕 ผ้าป่านเนื้อบางเบา ใส่สบาย ไม่ร้อน ด้านหลังมีเชือกผูก ปรับทรงได้ ใส่แล้วดูเข้ารูปกำลังดี ✨ แมทช์กับยีนส์ก็สวยละมุน หรือใส่กับกระโปรงก็หวานมากกก 💐 มีหลายสีให้เลือก 📏 ขนาดฟรีไซส์ • อก 40 นิ้ว (ประมาณ 102 ซม.) • ความยาวแขน 16 นิ้ว (ประมาณ 41 ซม.) • ความยาวเสื้อ 29 นิ้ว (ประมาณ 74 ซม.) ใครชอบงานปัก งานผ้าสไตล์ธรรมชาติ ต้องมีติดตู้เลยค่า 🤍"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16166270304-s127188123385.html"
    }
  },
  {
    "code": "LZD-16198112245",
    "name": {
      "en": "Bohemian Style Bag Elephant Embroidery, Cotton Fabric",
      "th": "กระเป๋า สไตล์โบฮีเมียน งานปักรูปช้าง ผ้าคอตต๊อน"
    },
    "category": "bags",
    "is_new": false,
    "price": 399,
    "fabric": {
      "en": "Cotton",
      "th": "ผ้าคอตตอน"
    },
    "colours": [
      {
        "en": "LB2701",
        "th": "LB2701"
      },
      {
        "en": "LB2702",
        "th": "LB2702"
      },
      {
        "en": "LB2703",
        "th": "LB2703"
      },
      {
        "en": "LB2704",
        "th": "LB2704"
      },
      {
        "en": "LB2705",
        "th": "LB2705"
      },
      {
        "en": "LB2706",
        "th": "LB2706"
      },
      {
        "en": "LB2707",
        "th": "LB2707"
      },
      {
        "en": "LB2708",
        "th": "LB2708"
      },
      {
        "en": "LB2709",
        "th": "LB2709"
      },
      {
        "en": "LB2710",
        "th": "LB2710"
      },
      {
        "en": "LB2711",
        "th": "LB2711"
      },
      {
        "en": "LB2712",
        "th": "LB2712"
      },
      {
        "en": "LB2713",
        "th": "LB2713"
      },
      {
        "en": "LB2714",
        "th": "LB2714"
      },
      {
        "en": "LB2715",
        "th": "LB2715"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Dimensions",
          "th": "ขนาด"
        },
        "value": {
          "en": "13 / 12 in",
          "th": "\udc5c ขนาด 13 x 12 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16198112245-01.webp",
        "alt": {
          "en": "Main view of Bohemian Style Bag Elephant Embroidery, Cotton Fabric",
          "th": "ภาพหลักของ กระเป๋า สไตล์โบฮีเมียน งานปักรูปช้าง ผ้าคอตต๊อน"
        }
      },
      {
        "src": "products/lzd-16198112245-02.webp",
        "alt": {
          "en": "Additional view 2 of Bohemian Style Bag Elephant Embroidery, Cotton Fabric",
          "th": "ภาพเพิ่มเติม 2 ของ กระเป๋า สไตล์โบฮีเมียน งานปักรูปช้าง ผ้าคอตต๊อน"
        }
      },
      {
        "src": "products/lzd-16198112245-03.webp",
        "alt": {
          "en": "Additional view 3 of Bohemian Style Bag Elephant Embroidery, Cotton Fabric",
          "th": "ภาพเพิ่มเติม 3 ของ กระเป๋า สไตล์โบฮีเมียน งานปักรูปช้าง ผ้าคอตต๊อน"
        }
      },
      {
        "src": "products/lzd-16198112245-04.webp",
        "alt": {
          "en": "Additional view 4 of Bohemian Style Bag Elephant Embroidery, Cotton Fabric",
          "th": "ภาพเพิ่มเติม 4 ของ กระเป๋า สไตล์โบฮีเมียน งานปักรูปช้าง ผ้าคอตต๊อน"
        }
      },
      {
        "src": "products/lzd-16198112245-05.webp",
        "alt": {
          "en": "Additional view 5 of Bohemian Style Bag Elephant Embroidery, Cotton Fabric",
          "th": "ภาพเพิ่มเติม 5 ของ กระเป๋า สไตล์โบฮีเมียน งานปักรูปช้าง ผ้าคอตต๊อน"
        }
      },
      {
        "src": "products/lzd-16198112245-06.webp",
        "alt": {
          "en": "Additional view 6 of Bohemian Style Bag Elephant Embroidery, Cotton Fabric",
          "th": "ภาพเพิ่มเติม 6 ของ กระเป๋า สไตล์โบฮีเมียน งานปักรูปช้าง ผ้าคอตต๊อน"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "✨ Bohemian style cotton bag ✨ Featured with classic elephant embroidery, lightweight, can hold a lot of things, suitable for everyday use and travel. 👜 Size 13 x 12 inches 📏 Base width 2 inches 🎒 Shoulder strap length 100 cm. Beautiful, unique, easy to carry, can match every look 🌿",
      "th": "✨ กระเป๋าผ้าคอตตอนสไตล์โบฮีเมียน ✨ โดดเด่นด้วยงานปักลายช้างสุดคลาสสิก น้ำหนักเบา จุของได้เยอะ เหมาะสำหรับใช้งานในชีวิตประจำวันและสายเที่ยว 👜 ขนาด 13 x 12 นิ้ว 📏 ฐานกว้าง 2 นิ้ว 🎒 สายสะพายยาว 100 ซม. สวย มีเอกลักษณ์ พกพาสะดวก แมตช์ได้ทุกลุค 🌿"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16198112245-s127320119303.html"
    }
  },
  {
    "code": "LZD-16204926163",
    "name": {
      "en": "Rayon Embroidery Shirt, Chest 46 Inches, Large Fit, Plus Size",
      "th": "เสื้องานปักผ้าเรยอน อก 46 นิ้ว ทรงใหญ่ พลัสไซส์"
    },
    "category": "tops",
    "is_new": false,
    "price": 499,
    "fabric": {
      "en": "Rayon",
      "th": "ผ้าเรยอน"
    },
    "colours": [
      {
        "en": "RJH101",
        "th": "RJH101"
      },
      {
        "en": "RJH102",
        "th": "RJH102"
      },
      {
        "en": "RJH103",
        "th": "RJH103"
      },
      {
        "en": "RJH104",
        "th": "RJH104"
      },
      {
        "en": "RJH105",
        "th": "RJH105"
      },
      {
        "en": "RJH106",
        "th": "RJH106"
      },
      {
        "en": "RJH107",
        "th": "RJH107"
      },
      {
        "en": "RJH108",
        "th": "RJH108"
      },
      {
        "en": "RJH109",
        "th": "RJH109"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16204926163-01.webp",
        "alt": {
          "en": "Main view of Rayon Embroidery Shirt, Chest 46 Inches, Large Fit, Plus Size",
          "th": "ภาพหลักของ เสื้องานปักผ้าเรยอน อก 46 นิ้ว ทรงใหญ่ พลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16204926163-02.webp",
        "alt": {
          "en": "Additional view 2 of Rayon Embroidery Shirt, Chest 46 Inches, Large Fit, Plus Size",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้องานปักผ้าเรยอน อก 46 นิ้ว ทรงใหญ่ พลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16204926163-03.webp",
        "alt": {
          "en": "Additional view 3 of Rayon Embroidery Shirt, Chest 46 Inches, Large Fit, Plus Size",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้องานปักผ้าเรยอน อก 46 นิ้ว ทรงใหญ่ พลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16204926163-04.webp",
        "alt": {
          "en": "Additional view 4 of Rayon Embroidery Shirt, Chest 46 Inches, Large Fit, Plus Size",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้องานปักผ้าเรยอน อก 46 นิ้ว ทรงใหญ่ พลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16204926163-05.webp",
        "alt": {
          "en": "Additional view 5 of Rayon Embroidery Shirt, Chest 46 Inches, Large Fit, Plus Size",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้องานปักผ้าเรยอน อก 46 นิ้ว ทรงใหญ่ พลัสไซส์"
        }
      },
      {
        "src": "products/lzd-16204926163-06.webp",
        "alt": {
          "en": "Additional view 6 of Rayon Embroidery Shirt, Chest 46 Inches, Large Fit, Plus Size",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้องานปักผ้าเรยอน อก 46 นิ้ว ทรงใหญ่ พลัสไซส์"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "🌸 Rayon embroidery shirt, comfortable to wear, beautiful for every occasion 🌸 Add a sweet, stylish look to your look with soft rayon clothes. Beautiful and detailed embroidery work. Comfortable to wear. Good ventilation. Loose fit and camouflages the figure. Suitable for size L girls and plump girls. ✨ There are many colors to choose from. ✨ Rayon fabric, soft, light, comfortable to wear. ✨ Beautiful embroidery, looks unique. ✨ Matches beautifully with jeans or cloth pants. 💌 Chat to inquire about colors that are ready for delivery.",
      "th": "🌸 เสื้องานปักผ้าเรยอน ใส่สบาย สวยทุกโอกาส 🌸 เติมลุคให้ดูหวาน มีสไตล์ ด้วยเสื้อผ้าเรยอนเนื้อนุ่ม งานปักลายสวยละเอียด ใส่สบาย ระบายอากาศดี ทรงหลวมใส่แล้วพรางหุ่น เหมาะกับสาวไซส์ L และสาวอวบกำลังดี ✨ มีหลายสีให้เลือก ✨ เนื้อผ้าเรยอน นุ่ม เบา ใส่สบาย ✨ งานปักสวย ดูมีเอกลักษณ์ ✨ แมตช์กับกางเกงยีนส์หรือกางเกงผ้าก็สวย 💌 ทักแชทสอบถามสีที่พร้อมส่งได้เลยค่ะ"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/46-i16204926163-s127340759284.html"
    }
  },
  {
    "code": "LZD-16205080203",
    "name": {
      "en": "Rayon Shirt, Lace Embroidery, One Size",
      "th": "เสื้อเรยอน งานปักลายลูกไม้ ฟรีไซส์"
    },
    "category": "tops",
    "is_new": false,
    "price": 459,
    "fabric": {
      "en": "Rayon",
      "th": "ผ้าเรยอน"
    },
    "colours": [
      {
        "en": "Yellow",
        "th": "RLH001 เหลือง"
      },
      {
        "en": "Red",
        "th": "RLH002 แดง"
      },
      {
        "en": "Pink",
        "th": "RLH003 ชมพู"
      },
      {
        "en": "Green",
        "th": "RLH004 เขียว"
      },
      {
        "en": "Orange",
        "th": "RLH005 ส้ม"
      },
      {
        "en": "Blue",
        "th": "RLH006 น้ำเงิน"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "46 in",
          "th": "✨ อก 46 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16205080203-01.webp",
        "alt": {
          "en": "Main view of Rayon Shirt, Lace Embroidery, One Size",
          "th": "ภาพหลักของ เสื้อเรยอน งานปักลายลูกไม้ ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16205080203-02.webp",
        "alt": {
          "en": "Additional view 2 of Rayon Shirt, Lace Embroidery, One Size",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อเรยอน งานปักลายลูกไม้ ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16205080203-03.webp",
        "alt": {
          "en": "Additional view 3 of Rayon Shirt, Lace Embroidery, One Size",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อเรยอน งานปักลายลูกไม้ ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16205080203-04.webp",
        "alt": {
          "en": "Additional view 4 of Rayon Shirt, Lace Embroidery, One Size",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อเรยอน งานปักลายลูกไม้ ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16205080203-05.webp",
        "alt": {
          "en": "Additional view 5 of Rayon Shirt, Lace Embroidery, One Size",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อเรยอน งานปักลายลูกไม้ ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16205080203-06.webp",
        "alt": {
          "en": "Additional view 6 of Rayon Shirt, Lace Embroidery, One Size",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อเรยอน งานปักลายลูกไม้ ฟรีไซส์"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "You can do it. 🌿 Rayon shirt with lace embroidery 🌿 Comfortable to wear, soft fabric, good ventilation, beautiful shape, easy to wear, can match with every look. ✨ Chest 46 inches | Free size | Many colors to choose from. Beautiful, easy to wear, can be worn every day. Ready for shipping 💕",
      "th": "ได้เลยค่ะ 🌿 เสื้อเรยอนงานปักลายลูกไม้ 🌿 ใส่สบาย ผ้านิ่ม ระบายอากาศดี ทรงสวย ใส่ง่าย แมทช์ได้ทุกลุค ✨ อก 46 นิ้ว | ฟรีไซส์ | มีหลายสีให้เลือก สวย ใส่ง่าย ใส่ได้ทุกวัน พร้อมส่งค่ะ 💕"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16205080203-s127341341071.html"
    }
  },
  {
    "code": "LZD-16202789584",
    "name": {
      "en": "Women's Shirt With Embroidery, Rayon Fabric, Double Layer Sleeves, Boho Style, One Size",
      "th": "เสื้อผู้หญิงงานปัก ผ้าเรยอน แขน 2 ชั้น สไตล์โบโฮ ฟรีไซส์"
    },
    "category": "tops",
    "is_new": false,
    "price": 459,
    "fabric": {
      "en": "Rayon",
      "th": "ผ้าเรยอน"
    },
    "colours": [
      {
        "en": "AWPJ401",
        "th": "AWPJ401"
      },
      {
        "en": "AWPJ402",
        "th": "AWPJ402"
      },
      {
        "en": "AWPJ403",
        "th": "AWPJ403"
      },
      {
        "en": "AWPJ404",
        "th": "AWPJ404"
      },
      {
        "en": "AWPJ405",
        "th": "AWPJ405"
      },
      {
        "en": "AWPJ406",
        "th": "AWPJ406"
      },
      {
        "en": "AWPJ407",
        "th": "AWPJ407"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16202789584-01.webp",
        "alt": {
          "en": "Main view of Women's Shirt With Embroidery, Rayon Fabric, Double Layer Sleeves, Boho Style, One Size",
          "th": "ภาพหลักของ เสื้อผู้หญิงงานปัก ผ้าเรยอน แขน 2 ชั้น สไตล์โบโฮ ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16202789584-02.webp",
        "alt": {
          "en": "Additional view 2 of Women's Shirt With Embroidery, Rayon Fabric, Double Layer Sleeves, Boho Style, One Size",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อผู้หญิงงานปัก ผ้าเรยอน แขน 2 ชั้น สไตล์โบโฮ ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16202789584-03.webp",
        "alt": {
          "en": "Additional view 3 of Women's Shirt With Embroidery, Rayon Fabric, Double Layer Sleeves, Boho Style, One Size",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อผู้หญิงงานปัก ผ้าเรยอน แขน 2 ชั้น สไตล์โบโฮ ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16202789584-04.webp",
        "alt": {
          "en": "Additional view 4 of Women's Shirt With Embroidery, Rayon Fabric, Double Layer Sleeves, Boho Style, One Size",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อผู้หญิงงานปัก ผ้าเรยอน แขน 2 ชั้น สไตล์โบโฮ ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16202789584-05.webp",
        "alt": {
          "en": "Additional view 5 of Women's Shirt With Embroidery, Rayon Fabric, Double Layer Sleeves, Boho Style, One Size",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อผู้หญิงงานปัก ผ้าเรยอน แขน 2 ชั้น สไตล์โบโฮ ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16202789584-06.webp",
        "alt": {
          "en": "Additional view 6 of Women's Shirt With Embroidery, Rayon Fabric, Double Layer Sleeves, Boho Style, One Size",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อผู้หญิงงานปัก ผ้าเรยอน แขน 2 ชั้น สไตล์โบโฮ ฟรีไซส์"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "✨ Beautiful embroidery, looks outstanding when worn ✨ Soft rayon clothing, comfortable to wear, not hot, 2-layer sleeves, chic design with detailed embroidery all over. There are many colors to choose from. It looks beautiful with jeans or linen 💕 🌿 Soft rayon fabric, comfortable to wear. 🪡 Beautiful and unique embroidery. 🎨 Many colors available, ready to ship.",
      "th": "✨ งานปักสวย ใส่แล้วดูโดดเด่น ✨ เสื้อผ้าเรยอนเนื้อนุ่ม ใส่สบาย ไม่ร้อน แขน 2 ชั้น ดีไซน์เก๋ พร้อมงานปักละเอียดทั้งตัว มีหลายสีให้เลือก แมทช์กับกางเกงยีนส์หรือผ้าลินินก็สวย 💕 🌿 ผ้าเรยอนนุ่ม ใส่สบาย 🪡 งานปักสวย มีเอกลักษณ์ 🎨 มีหลายสี พร้อมส่ง"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/2-i16202789584-s127349346017.html"
    }
  },
  {
    "code": "LZD-16193279654",
    "name": {
      "en": "Bohemian Cotton Bag (HEMP)",
      "th": "กระเป๋าผ้าฝ้าย โบฮีเมียน (HEMP)"
    },
    "category": "bags",
    "is_new": false,
    "price": 499,
    "fabric": {
      "en": "Cotton",
      "th": "ผ้าคอตตอน"
    },
    "colours": [
      {
        "en": "AML001",
        "th": "AML001"
      },
      {
        "en": "AML002",
        "th": "AML002"
      },
      {
        "en": "AML003",
        "th": "AML003"
      },
      {
        "en": "AML004",
        "th": "AML004"
      },
      {
        "en": "AML005",
        "th": "AML005"
      },
      {
        "en": "AML006",
        "th": "AML006"
      },
      {
        "en": "AML007",
        "th": "AML007"
      },
      {
        "en": "AML008",
        "th": "AML008"
      },
      {
        "en": "AML009",
        "th": "AML009"
      },
      {
        "en": "AML010",
        "th": "AML010"
      },
      {
        "en": "AML011",
        "th": "AML011"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "See the Lazada listing for available options",
          "th": "ดูตัวเลือกขนาดที่มีในหน้าสินค้า Lazada"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16193279654-01.webp",
        "alt": {
          "en": "Main view of Bohemian Cotton Bag (HEMP)",
          "th": "ภาพหลักของ กระเป๋าผ้าฝ้าย โบฮีเมียน (HEMP)"
        }
      },
      {
        "src": "products/lzd-16193279654-02.webp",
        "alt": {
          "en": "Additional view 2 of Bohemian Cotton Bag (HEMP)",
          "th": "ภาพเพิ่มเติม 2 ของ กระเป๋าผ้าฝ้าย โบฮีเมียน (HEMP)"
        }
      },
      {
        "src": "products/lzd-16193279654-03.webp",
        "alt": {
          "en": "Additional view 3 of Bohemian Cotton Bag (HEMP)",
          "th": "ภาพเพิ่มเติม 3 ของ กระเป๋าผ้าฝ้าย โบฮีเมียน (HEMP)"
        }
      },
      {
        "src": "products/lzd-16193279654-04.webp",
        "alt": {
          "en": "Additional view 4 of Bohemian Cotton Bag (HEMP)",
          "th": "ภาพเพิ่มเติม 4 ของ กระเป๋าผ้าฝ้าย โบฮีเมียน (HEMP)"
        }
      },
      {
        "src": "products/lzd-16193279654-05.webp",
        "alt": {
          "en": "Additional view 5 of Bohemian Cotton Bag (HEMP)",
          "th": "ภาพเพิ่มเติม 5 ของ กระเป๋าผ้าฝ้าย โบฮีเมียน (HEMP)"
        }
      },
      {
        "src": "products/lzd-16193279654-06.webp",
        "alt": {
          "en": "Additional view 6 of Bohemian Cotton Bag (HEMP)",
          "th": "ภาพเพิ่มเติม 6 ของ กระเป๋าผ้าฝ้าย โบฮีเมียน (HEMP)"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "👜 Handmade woven bag, boho style, bright colors, small and compact. Can be used every day ✨ There are many colors to choose from. ✨ Beautiful work, one of each. ✨ Limited quantity, when it's gone, it's gone! You can carry it while traveling and working. Easy to match with every look. ❤️ 📩 If you are interested in any colors, you can chat to inquire.",
      "th": "👜 กระเป๋าผ้าทอแฮนด์เมด สไตล์โบโฮ สีสันสดใส ใบเล็กกะทัดรัด ใช้งานได้ทุกวัน ✨ มีหลายสีให้เลือก ✨ งานสวย มีอย่างละใบ ✨ จำนวนจำกัด หมดแล้วหมดเลย! สะพายได้ทั้งเที่ยว ทั้งทำงาน แมตช์ง่ายได้ทุกลุค ❤️ 📩 สนใจสีไหน ทักแชทสอบถามได้เลย"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/hemp-i16193279654-s127305789113.html"
    }
  },
  {
    "code": "LZD-16172430349",
    "name": {
      "en": "Embroidered Bag Big Boho Style Fabric, Hip Style",
      "th": "กระเป๋าย่ามงานปัก งานผ้าสไตล์โบโฮใบใหญ่ สายฮิป"
    },
    "category": "bags",
    "is_new": false,
    "price": 499,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "Yellow",
        "th": "CRB1001 เหลือง"
      },
      {
        "en": "Red",
        "th": "CRB1002 แดง"
      },
      {
        "en": "Green",
        "th": "CRB1003 เขียว"
      },
      {
        "en": "Orange",
        "th": "CRB1004 ส้ม"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "See the Lazada listing for available options",
          "th": "ดูตัวเลือกขนาดที่มีในหน้าสินค้า Lazada"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16172430349-01.webp",
        "alt": {
          "en": "Main view of Embroidered Bag Big Boho Style Fabric, Hip Style",
          "th": "ภาพหลักของ กระเป๋าย่ามงานปัก งานผ้าสไตล์โบโฮใบใหญ่ สายฮิป"
        }
      },
      {
        "src": "products/lzd-16172430349-02.webp",
        "alt": {
          "en": "Additional view 2 of Embroidered Bag Big Boho Style Fabric, Hip Style",
          "th": "ภาพเพิ่มเติม 2 ของ กระเป๋าย่ามงานปัก งานผ้าสไตล์โบโฮใบใหญ่ สายฮิป"
        }
      },
      {
        "src": "products/lzd-16172430349-03.webp",
        "alt": {
          "en": "Additional view 3 of Embroidered Bag Big Boho Style Fabric, Hip Style",
          "th": "ภาพเพิ่มเติม 3 ของ กระเป๋าย่ามงานปัก งานผ้าสไตล์โบโฮใบใหญ่ สายฮิป"
        }
      },
      {
        "src": "products/lzd-16172430349-04.webp",
        "alt": {
          "en": "Additional view 4 of Embroidered Bag Big Boho Style Fabric, Hip Style",
          "th": "ภาพเพิ่มเติม 4 ของ กระเป๋าย่ามงานปัก งานผ้าสไตล์โบโฮใบใหญ่ สายฮิป"
        }
      },
      {
        "src": "products/lzd-16172430349-05.webp",
        "alt": {
          "en": "Additional view 5 of Embroidered Bag Big Boho Style Fabric, Hip Style",
          "th": "ภาพเพิ่มเติม 5 ของ กระเป๋าย่ามงานปัก งานผ้าสไตล์โบโฮใบใหญ่ สายฮิป"
        }
      },
      {
        "src": "products/lzd-16172430349-06.webp",
        "alt": {
          "en": "Additional view 6 of Embroidered Bag Big Boho Style Fabric, Hip Style",
          "th": "ภาพเพิ่มเติม 6 ของ กระเป๋าย่ามงานปัก งานผ้าสไตล์โบโฮใบใหญ่ สายฮิป"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "🌿 Super cute embroidered satchel bag has arrived 🌿 Hip style, chill style, must have in your closet ✨ Boho style fabric, beautiful colors, dense embroidery, large bag, can hold a lot of things, can be used every day, whether carrying it to travel, to a cafe, or to study, it's super cute 💕 👜 There are many colors and patterns to choose from. 🌈 Easy to match, wear with any outfit and look beautiful. 📌 Soft, lightweight fabric. 📌 Carry mobile phone, wallet Complete cosmetics Anyone who likes the local vintage style, hurry up and say hello 💌 Limited quantity. Each color is uniquely beautiful ✨",
      "th": "🌿 กระเป๋าย่ามงานปักสุดน่ารัก มาแล้วจ้า 🌿 สายฮิป สายชิล ต้องมีติดตู้ ✨ งานผ้าสไตล์โบโฮ สีสวย ลายปักแน่น ใบใหญ่จุของได้เยอะ ใช้ได้ทุกวัน จะสะพายเที่ยว คาเฟ่ หรือไปเรียนก็น่ารักสุดๆ 💕 👜 มีหลายสี หลายลายให้เลือก 🌈 แมทช์ง่าย ใส่กับชุดไหนก็สวย 📌 งานผ้านิ่ม น้ำหนักเบา 📌 ใส่มือถือ กระเป๋าสตางค์ เครื่องสำอางได้ครบ ใครชอบสไตล์วินเทจพื้นเมือง รีบทักเลยน้า 💌 ของมีจำนวนจำกัด แต่ละสีสวยไม่ซ้ำกันเลยค่ะ ✨"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16172430349-s127214809342.html"
    }
  },
  {
    "code": "LZD-16170678740",
    "name": {
      "en": "Clutch Bag, Chain Shoulder Strap, Bohemian Style",
      "th": "กระเป๋าคลัชท์ สายสะพายโซ่ สไตล์โบฮีเมียน"
    },
    "category": "bags",
    "is_new": false,
    "price": 1550,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "JP001",
        "th": "JP001"
      },
      {
        "en": "JP004",
        "th": "JP004"
      },
      {
        "en": "JP006",
        "th": "JP006"
      },
      {
        "en": "JP007",
        "th": "JP007"
      },
      {
        "en": "JP008",
        "th": "JP008"
      },
      {
        "en": "JP009",
        "th": "JP009"
      },
      {
        "en": "JP010",
        "th": "JP010"
      },
      {
        "en": "JP011",
        "th": "JP011"
      },
      {
        "en": "JP012",
        "th": "JP012"
      },
      {
        "en": "JP013",
        "th": "JP013"
      },
      {
        "en": "JP014",
        "th": "JP014"
      },
      {
        "en": "JP015",
        "th": "JP015"
      },
      {
        "en": "JP016",
        "th": "JP016"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "See the Lazada listing for available options",
          "th": "ดูตัวเลือกขนาดที่มีในหน้าสินค้า Lazada"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16170678740-01.webp",
        "alt": {
          "en": "Main view of Clutch Bag, Chain Shoulder Strap, Bohemian Style",
          "th": "ภาพหลักของ กระเป๋าคลัชท์ สายสะพายโซ่ สไตล์โบฮีเมียน"
        }
      },
      {
        "src": "products/lzd-16170678740-02.webp",
        "alt": {
          "en": "Additional view 2 of Clutch Bag, Chain Shoulder Strap, Bohemian Style",
          "th": "ภาพเพิ่มเติม 2 ของ กระเป๋าคลัชท์ สายสะพายโซ่ สไตล์โบฮีเมียน"
        }
      },
      {
        "src": "products/lzd-16170678740-03.webp",
        "alt": {
          "en": "Additional view 3 of Clutch Bag, Chain Shoulder Strap, Bohemian Style",
          "th": "ภาพเพิ่มเติม 3 ของ กระเป๋าคลัชท์ สายสะพายโซ่ สไตล์โบฮีเมียน"
        }
      },
      {
        "src": "products/lzd-16170678740-04.webp",
        "alt": {
          "en": "Additional view 4 of Clutch Bag, Chain Shoulder Strap, Bohemian Style",
          "th": "ภาพเพิ่มเติม 4 ของ กระเป๋าคลัชท์ สายสะพายโซ่ สไตล์โบฮีเมียน"
        }
      },
      {
        "src": "products/lzd-16170678740-05.webp",
        "alt": {
          "en": "Additional view 5 of Clutch Bag, Chain Shoulder Strap, Bohemian Style",
          "th": "ภาพเพิ่มเติม 5 ของ กระเป๋าคลัชท์ สายสะพายโซ่ สไตล์โบฮีเมียน"
        }
      },
      {
        "src": "products/lzd-16170678740-06.webp",
        "alt": {
          "en": "Additional view 6 of Clutch Bag, Chain Shoulder Strap, Bohemian Style",
          "th": "ภาพเพิ่มเติม 6 ของ กระเป๋าคลัชท์ สายสะพายโซ่ สไตล์โบฮีเมียน"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "✨ Super cool boho style chain shoulder bag ✨ Tight bead embroidery The details are very beautiful. Hold it and look expensive like a coffee girl ✨ Can be matched with dresses, travel clothes, cafes, or events. 💃👜 🌼 There are many colors and styles to choose from. 🌼 Chic shoulder chain strap, easy to use. 🌼 Handmade, full of details on every piece. 🌼 Finished with just one ticket and you'll instantly get the look of a coffee girl. My friend saw it and asked for the exact location 🤎✨ Vintage Bohemian bag strap. Must have in your closet. 🫶",
      "th": "✨ กระเป๋าสะพายสายโซ่สไตล์โบโฮสุดปัง ✨ งานปักลูกปัดแน่นๆ ดีเทลสวยมากกก ถือแล้วดูแพงแบบสาวสายแฟ ✨ แมทช์ได้ทั้งชุดเดรส ชุดเที่ยว คาเฟ่ หรือออกงานก็เอาอยู่ 💃👜 🌼 มีหลายสี หลายแบบ เลือกได้จุกๆ 🌼 สายโซ่สะพายเก๋ๆ ใช้งานง่าย 🌼 งานแฮนด์เมด ดีเทลแน่นทุกใบ 🌼 ใบเดียวจบ ได้ลุคคุณหนูสายแฟทันที เพื่อนเห็นคือถามพิกัดแน่นอน 🤎✨ สายกระเป๋าวินเทจ โบฮีเมียน ต้องมีติดตู้เลยค่าา 🫶"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16170678740-s127223230181.html"
    }
  },
  {
    "code": "LZD-16204944193",
    "name": {
      "en": "Rayon Batik Dress, Embroidered With Curved Hem, Soft Rayon Fabric",
      "th": "เดรสผ้าเรยอนบาติก ปักลาย ชายโค้ง ผ้าเรยอนเนื้อนุ่ม"
    },
    "category": "dresses",
    "is_new": false,
    "price": 599,
    "fabric": {
      "en": "Rayon",
      "th": "ผ้าเรยอน"
    },
    "colours": [
      {
        "en": "RBDH101",
        "th": "RBDH101"
      },
      {
        "en": "RBDH102",
        "th": "RBDH102"
      },
      {
        "en": "RBDH103",
        "th": "RBDH103"
      },
      {
        "en": "RBDH104",
        "th": "RBDH104"
      },
      {
        "en": "RBDH105",
        "th": "RBDH105"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "Approx. 34–52 in / 44 in / 112 cm",
          "th": "✨ อก 34–52 นิ้ว 44 นิ้ว (ประมาณ 112 ซม.)"
        }
      },
      {
        "label": {
          "en": "Waist",
          "th": "รอบเอว"
        },
        "value": {
          "en": "One Size",
          "th": "✨ เอว-สะโพก ฟรีไซส์"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16204944193-01.webp",
        "alt": {
          "en": "Main view of Rayon Batik Dress, Embroidered With Curved Hem, Soft Rayon Fabric",
          "th": "ภาพหลักของ เดรสผ้าเรยอนบาติก ปักลาย ชายโค้ง ผ้าเรยอนเนื้อนุ่ม"
        }
      },
      {
        "src": "products/lzd-16204944193-02.webp",
        "alt": {
          "en": "Additional view 2 of Rayon Batik Dress, Embroidered With Curved Hem, Soft Rayon Fabric",
          "th": "ภาพเพิ่มเติม 2 ของ เดรสผ้าเรยอนบาติก ปักลาย ชายโค้ง ผ้าเรยอนเนื้อนุ่ม"
        }
      },
      {
        "src": "products/lzd-16204944193-03.webp",
        "alt": {
          "en": "Additional view 3 of Rayon Batik Dress, Embroidered With Curved Hem, Soft Rayon Fabric",
          "th": "ภาพเพิ่มเติม 3 ของ เดรสผ้าเรยอนบาติก ปักลาย ชายโค้ง ผ้าเรยอนเนื้อนุ่ม"
        }
      },
      {
        "src": "products/lzd-16204944193-04.webp",
        "alt": {
          "en": "Additional view 4 of Rayon Batik Dress, Embroidered With Curved Hem, Soft Rayon Fabric",
          "th": "ภาพเพิ่มเติม 4 ของ เดรสผ้าเรยอนบาติก ปักลาย ชายโค้ง ผ้าเรยอนเนื้อนุ่ม"
        }
      },
      {
        "src": "products/lzd-16204944193-05.webp",
        "alt": {
          "en": "Additional view 5 of Rayon Batik Dress, Embroidered With Curved Hem, Soft Rayon Fabric",
          "th": "ภาพเพิ่มเติม 5 ของ เดรสผ้าเรยอนบาติก ปักลาย ชายโค้ง ผ้าเรยอนเนื้อนุ่ม"
        }
      },
      {
        "src": "products/lzd-16204944193-06.webp",
        "alt": {
          "en": "Additional view 6 of Rayon Batik Dress, Embroidered With Curved Hem, Soft Rayon Fabric",
          "th": "ภาพเพิ่มเติม 6 ของ เดรสผ้าเรยอนบาติก ปักลาย ชายโค้ง ผ้าเรยอนเนื้อนุ่ม"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "🌸 Rayon batik fabric dress, embroidered with curved hem 🌸 Comfortable to wear, soft rayon fabric, flowing, good ventilation, beautiful shape, can be worn on many occasions. Outstanding beautiful embroidery There are many colors to choose from. ✨ Chest 34–52 inches 44 inches (approximately 112 cm) ✨ Waist-hip free size ✨ Rayon fabric, comfortable to wear, not hot. ✨ Relaxed fit, camouflage your figure, beautiful in every size. 💖 There are many colors ready to send. Chat with us to choose the color.",
      "th": "🌸 เดรสผ้าเรยอนบาติก ปักลาย ชายโค้ง 🌸 ใส่สบาย ผ้าเรยอนเนื้อนุ่ม พลิ้ว ระบายอากาศดี ทรงสวยใส่ได้หลายโอกาส งานปักสวยโดดเด่น มีหลายสีให้เลือก ✨ อก 34–52 นิ้ว 44 นิ้ว (ประมาณ 112 ซม.) ✨ เอว-สะโพก ฟรีไซส์ ✨ ผ้าเรยอน ใส่สบาย ไม่ร้อน ✨ ทรงปล่อย พรางหุ่น สวยทุกไซซ์ 💖 มีหลายสี พร้อมส่ง ทักแชทเลือกสีได้เลยค่ะ"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16204944193-s127341465987.html"
    }
  },
  {
    "code": "LZD-16202715832",
    "name": {
      "en": "Boho Embroidered Shirt, Rayon Fabric, 2-Layer Sleeves, All-Over Embroidery, Comfortable To Wear, Available In Many Colors",
      "th": "เสื้อปักโบโฮ ผ้าเรยอน แขน 2 ชั้น งานปักทั้งตัว ใส่สบาย มีหลายสี"
    },
    "category": "tops",
    "is_new": false,
    "price": 459,
    "fabric": {
      "en": "Rayon",
      "th": "ผ้าเรยอน"
    },
    "colours": [
      {
        "en": "AWPJ301",
        "th": "AWPJ301"
      },
      {
        "en": "AWPJ302",
        "th": "AWPJ302"
      },
      {
        "en": "AWPJ303",
        "th": "AWPJ303"
      },
      {
        "en": "AWPJ304",
        "th": "AWPJ304"
      },
      {
        "en": "AWPJ305",
        "th": "AWPJ305"
      },
      {
        "en": "AWPJ306",
        "th": "AWPJ306"
      },
      {
        "en": "AWPJ307",
        "th": "AWPJ307"
      },
      {
        "en": "AWPJ308",
        "th": "AWPJ308"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16202715832-01.webp",
        "alt": {
          "en": "Main view of Boho Embroidered Shirt, Rayon Fabric, 2-Layer Sleeves, All-Over Embroidery, Comfortable To Wear, Available In Many Colors",
          "th": "ภาพหลักของ เสื้อปักโบโฮ ผ้าเรยอน แขน 2 ชั้น งานปักทั้งตัว ใส่สบาย มีหลายสี"
        }
      },
      {
        "src": "products/lzd-16202715832-02.webp",
        "alt": {
          "en": "Additional view 2 of Boho Embroidered Shirt, Rayon Fabric, 2-Layer Sleeves, All-Over Embroidery, Comfortable To Wear, Available In Many Colors",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อปักโบโฮ ผ้าเรยอน แขน 2 ชั้น งานปักทั้งตัว ใส่สบาย มีหลายสี"
        }
      },
      {
        "src": "products/lzd-16202715832-03.webp",
        "alt": {
          "en": "Additional view 3 of Boho Embroidered Shirt, Rayon Fabric, 2-Layer Sleeves, All-Over Embroidery, Comfortable To Wear, Available In Many Colors",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อปักโบโฮ ผ้าเรยอน แขน 2 ชั้น งานปักทั้งตัว ใส่สบาย มีหลายสี"
        }
      },
      {
        "src": "products/lzd-16202715832-04.webp",
        "alt": {
          "en": "Additional view 4 of Boho Embroidered Shirt, Rayon Fabric, 2-Layer Sleeves, All-Over Embroidery, Comfortable To Wear, Available In Many Colors",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อปักโบโฮ ผ้าเรยอน แขน 2 ชั้น งานปักทั้งตัว ใส่สบาย มีหลายสี"
        }
      },
      {
        "src": "products/lzd-16202715832-05.webp",
        "alt": {
          "en": "Additional view 5 of Boho Embroidered Shirt, Rayon Fabric, 2-Layer Sleeves, All-Over Embroidery, Comfortable To Wear, Available In Many Colors",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อปักโบโฮ ผ้าเรยอน แขน 2 ชั้น งานปักทั้งตัว ใส่สบาย มีหลายสี"
        }
      },
      {
        "src": "products/lzd-16202715832-06.webp",
        "alt": {
          "en": "Additional view 6 of Boho Embroidered Shirt, Rayon Fabric, 2-Layer Sleeves, All-Over Embroidery, Comfortable To Wear, Available In Many Colors",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อปักโบโฮ ผ้าเรยอน แขน 2 ชั้น งานปักทั้งตัว ใส่สบาย มีหลายสี"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "✨ Beautiful embroidery, looks outstanding when worn ✨ Soft rayon clothing, comfortable to wear, not hot, 2-layer sleeves, chic design with detailed embroidery all over. There are many colors to choose from. It looks beautiful with jeans or linen 💕 🌿 Soft rayon fabric, comfortable to wear. 🪡 Beautiful and unique embroidery. 🎨 Many colors available, ready to ship.",
      "th": "✨ งานปักสวย ใส่แล้วดูโดดเด่น ✨ เสื้อผ้าเรยอนเนื้อนุ่ม ใส่สบาย ไม่ร้อน แขน 2 ชั้น ดีไซน์เก๋ พร้อมงานปักละเอียดทั้งตัว มีหลายสีให้เลือก แมทช์กับกางเกงยีนส์หรือผ้าลินินก็สวย 💕 🌿 ผ้าเรยอนนุ่ม ใส่สบาย 🪡 งานปักสวย มีเอกลักษณ์ 🎨 มีหลายสี พร้อมส่ง"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/2-i16202715832-s127333575107.html"
    }
  },
  {
    "code": "LZD-16191504532",
    "name": {
      "en": "Short Dress, Batwing, Jango Pattern, Waist Tie, One Size",
      "th": "เดรสสั้น ทรงปีกค้างคาว ลายจังโก้ เชือกผูกเอว ฟรีไซส์"
    },
    "category": "dresses",
    "is_new": false,
    "price": 199,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "Green",
        "th": "KTS2001 สีเขียว"
      },
      {
        "en": "Sky Blue",
        "th": "KTS2002 สีฟ้า"
      },
      {
        "en": "Red",
        "th": "KTS2003 สีแดง"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "34 in",
          "th": "\udd39 ความยาว 34 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16191504532-01.webp",
        "alt": {
          "en": "Main view of Short Dress, Batwing, Jango Pattern, Waist Tie, One Size",
          "th": "ภาพหลักของ เดรสสั้น ทรงปีกค้างคาว ลายจังโก้ เชือกผูกเอว ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16191504532-02.webp",
        "alt": {
          "en": "Additional view 2 of Short Dress, Batwing, Jango Pattern, Waist Tie, One Size",
          "th": "ภาพเพิ่มเติม 2 ของ เดรสสั้น ทรงปีกค้างคาว ลายจังโก้ เชือกผูกเอว ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16191504532-03.webp",
        "alt": {
          "en": "Additional view 3 of Short Dress, Batwing, Jango Pattern, Waist Tie, One Size",
          "th": "ภาพเพิ่มเติม 3 ของ เดรสสั้น ทรงปีกค้างคาว ลายจังโก้ เชือกผูกเอว ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16191504532-04.webp",
        "alt": {
          "en": "Additional view 4 of Short Dress, Batwing, Jango Pattern, Waist Tie, One Size",
          "th": "ภาพเพิ่มเติม 4 ของ เดรสสั้น ทรงปีกค้างคาว ลายจังโก้ เชือกผูกเอว ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16191504532-05.webp",
        "alt": {
          "en": "Additional view 5 of Short Dress, Batwing, Jango Pattern, Waist Tie, One Size",
          "th": "ภาพเพิ่มเติม 5 ของ เดรสสั้น ทรงปีกค้างคาว ลายจังโก้ เชือกผูกเอว ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16191504532-06.webp",
        "alt": {
          "en": "Additional view 6 of Short Dress, Batwing, Jango Pattern, Waist Tie, One Size",
          "th": "ภาพเพิ่มเติม 6 ของ เดรสสั้น ทรงปีกค้างคาว ลายจังโก้ เชือกผูกเอว ฟรีไซส์"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "💙✨ Short bat wing style dress with jango pattern, beautiful, outstanding, unique ✨💙 Add charm to every day with this batwing-shaped dress. Comfortable to wear, flowing and beautiful, helping to conceal your figure perfectly. Comes with a drawstring waist that can be adjusted as desired. Brightly colored jango pattern Super chic bohemian style. Wear it when traveling, relaxing, or wearing it on casual days. It's beautiful and eye-catching. 🔹 Chest 34-54 inches (approximately 86-137 cm.) 🔹 Length 34 inches 🔹 Loose fit, comfortable to wear, suitable for all body types. 🔹 Soft, lightweight fabric, comfortable to wear all day. 🔹 Beautiful design, can be worn by both small size girls and plus size girls.",
      "th": "💙✨ เดรสสั้นทรงปีกค้างคาว ลายจังโก้ สวยโดดเด่น มีเอกลักษณ์ ✨💙 เพิ่มเสน่ห์ให้ทุกวันด้วยเดรสทรงปีกค้างคาว ใส่สบาย พริ้วสวย ช่วยพรางรูปร่างได้อย่างลงตัว พร้อมเชือกรูดเอวปรับกระชับได้ตามต้องการ ลายจังโก้สีสันสดใส สไตล์โบฮีเมียนสุดเก๋ ใส่เที่ยว ใส่พักผ่อน หรือใส่ในวันสบายๆ ก็สวยสะดุดตา 🔹 อก 34-54 นิ้ว (ประมาณ 86-137 ซม.) 🔹 ความยาว 34 นิ้ว 🔹 ทรงหลวม ใส่สบาย เหมาะกับทุกสรีระ 🔹 ผ้านุ่ม น้ำหนักเบา สวมใส่สบายตลอดวัน 🔹 ดีไซน์สวย ใส่ได้ทั้งสาวไซซ์เล็กและสาวพลัสไซซ์"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16191504532-s127295109980.html"
    }
  },
  {
    "code": "LZD-16205462441",
    "name": {
      "en": "Shoulder Bag Beautiful Animal Embroidery Work, Beautiful Shape",
      "th": "กระเป๋าสะพายข้าง งานปักลายสัตว์สวยๆ  ทรงสวย"
    },
    "category": "bags",
    "is_new": false,
    "price": 199,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "SUS1101",
        "th": "SUS1101"
      },
      {
        "en": "SUS1102",
        "th": "SUS1102"
      },
      {
        "en": "SUS1103",
        "th": "SUS1103"
      },
      {
        "en": "SUS1104",
        "th": "SUS1104"
      },
      {
        "en": "SUS1105",
        "th": "SUS1105"
      },
      {
        "en": "SUS1106",
        "th": "SUS1106"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "See the Lazada listing for available options",
          "th": "ดูตัวเลือกขนาดที่มีในหน้าสินค้า Lazada"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16205462441-01.webp",
        "alt": {
          "en": "Main view of Shoulder Bag Beautiful Animal Embroidery Work, Beautiful Shape",
          "th": "ภาพหลักของ กระเป๋าสะพายข้าง งานปักลายสัตว์สวยๆ  ทรงสวย"
        }
      },
      {
        "src": "products/lzd-16205462441-02.webp",
        "alt": {
          "en": "Additional view 2 of Shoulder Bag Beautiful Animal Embroidery Work, Beautiful Shape",
          "th": "ภาพเพิ่มเติม 2 ของ กระเป๋าสะพายข้าง งานปักลายสัตว์สวยๆ  ทรงสวย"
        }
      },
      {
        "src": "products/lzd-16205462441-03.webp",
        "alt": {
          "en": "Additional view 3 of Shoulder Bag Beautiful Animal Embroidery Work, Beautiful Shape",
          "th": "ภาพเพิ่มเติม 3 ของ กระเป๋าสะพายข้าง งานปักลายสัตว์สวยๆ  ทรงสวย"
        }
      },
      {
        "src": "products/lzd-16205462441-04.webp",
        "alt": {
          "en": "Additional view 4 of Shoulder Bag Beautiful Animal Embroidery Work, Beautiful Shape",
          "th": "ภาพเพิ่มเติม 4 ของ กระเป๋าสะพายข้าง งานปักลายสัตว์สวยๆ  ทรงสวย"
        }
      },
      {
        "src": "products/lzd-16205462441-05.webp",
        "alt": {
          "en": "Additional view 5 of Shoulder Bag Beautiful Animal Embroidery Work, Beautiful Shape",
          "th": "ภาพเพิ่มเติม 5 ของ กระเป๋าสะพายข้าง งานปักลายสัตว์สวยๆ  ทรงสวย"
        }
      },
      {
        "src": "products/lzd-16205462441-06.webp",
        "alt": {
          "en": "Additional view 6 of Shoulder Bag Beautiful Animal Embroidery Work, Beautiful Shape",
          "th": "ภาพเพิ่มเติม 6 ของ กระเป๋าสะพายข้าง งานปักลายสัตว์สวยๆ  ทรงสวย"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "✨ Boho style embroidered bag. Every piece of embroidery is beautiful ✨ 🌸 There are many patterns to choose from. Beautiful, outstanding, unique 🌸 Detailed embroidery Super cute tassel decoration 🌸 There are 2 zipper compartments to keep things organized. 🌸 Shoulder strap, ready to use, lightweight. 🌸 Can match both travel looks, cafes, and casual days. 💖 Choose your favorite pattern. Every style is beautiful. Limited quantity!",
      "th": "✨ กระเป๋าปักลายสไตล์โบโฮ งานปักสวยทุกใบ ✨ 🌸 มีให้เลือกหลายลวดลาย สวยโดดเด่นไม่ซ้ำใคร 🌸 งานปักละเอียด ตกแต่งพู่สุดน่ารัก 🌸 มีซิป 2 ช่อง จุของได้เป็นระเบียบ 🌸 สายสะพาย พร้อมใช้งาน น้ำหนักเบา 🌸 แมทช์ได้ทั้งลุคเที่ยว คาเฟ่ และวันสบายๆ 💖 เลือกลายที่ชอบได้เลย สวยทุกแบบ มีจำนวนจำกัด!"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16205462441-s127357982761.html"
    }
  },
  {
    "code": "LZD-16164526058",
    "name": {
      "en": "Bleached Top, Rayon Fabric, Beautiful Bright Colors, Size L XL",
      "th": "เสื้อผ้าฟอก ผ้าเรยอน สีสวยสดใส มีไซส์ L XL"
    },
    "category": "tops",
    "is_new": false,
    "price": 299,
    "fabric": {
      "en": "Rayon",
      "th": "ผ้าเรยอน"
    },
    "colours": [
      {
        "en": "ABHL001",
        "th": "ABHL001"
      },
      {
        "en": "ABHL002",
        "th": "ABHL002"
      },
      {
        "en": "ABHL003",
        "th": "ABHL003"
      },
      {
        "en": "ABHL004",
        "th": "ABHL004"
      },
      {
        "en": "ABHL005",
        "th": "ABHL005"
      },
      {
        "en": "ABHL006",
        "th": "ABHL006"
      },
      {
        "en": "ABHL007",
        "th": "ABHL007"
      },
      {
        "en": "ABHL008",
        "th": "ABHL008"
      },
      {
        "en": "ABHL009",
        "th": "ABHL009"
      },
      {
        "en": "ABHL010",
        "th": "ABHL010"
      },
      {
        "en": "ABHL011",
        "th": "ABHL011"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "L, XL",
          "th": "L, XL"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "40 in / 102 cm",
          "th": "อก 40 นิ้ว / 102 ซม."
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "24 in / 61 cm",
          "th": "ความยาว 24 นิ้ว / 61 ซม."
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16164526058-01.webp",
        "alt": {
          "en": "Main view of Bleached Top, Rayon Fabric, Beautiful Bright Colors, Size L XL",
          "th": "ภาพหลักของ เสื้อผ้าฟอก ผ้าเรยอน สีสวยสดใส มีไซส์ L XL"
        }
      },
      {
        "src": "products/lzd-16164526058-02.webp",
        "alt": {
          "en": "Additional view 2 of Bleached Top, Rayon Fabric, Beautiful Bright Colors, Size L XL",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อผ้าฟอก ผ้าเรยอน สีสวยสดใส มีไซส์ L XL"
        }
      },
      {
        "src": "products/lzd-16164526058-03.webp",
        "alt": {
          "en": "Additional view 3 of Bleached Top, Rayon Fabric, Beautiful Bright Colors, Size L XL",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อผ้าฟอก ผ้าเรยอน สีสวยสดใส มีไซส์ L XL"
        }
      },
      {
        "src": "products/lzd-16164526058-04.webp",
        "alt": {
          "en": "Additional view 4 of Bleached Top, Rayon Fabric, Beautiful Bright Colors, Size L XL",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อผ้าฟอก ผ้าเรยอน สีสวยสดใส มีไซส์ L XL"
        }
      },
      {
        "src": "products/lzd-16164526058-05.webp",
        "alt": {
          "en": "Additional view 5 of Bleached Top, Rayon Fabric, Beautiful Bright Colors, Size L XL",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อผ้าฟอก ผ้าเรยอน สีสวยสดใส มีไซส์ L XL"
        }
      },
      {
        "src": "products/lzd-16164526058-06.webp",
        "alt": {
          "en": "Additional view 6 of Bleached Top, Rayon Fabric, Beautiful Bright Colors, Size L XL",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อผ้าฟอก ผ้าเรยอน สีสวยสดใส มีไซส์ L XL"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "🌿 Bohemian style rayon bleached clothes, beautiful embroidery, comfortable to wear 🌿 Easy to match, can be worn every day, whether it's a chill look, a travel look or a cafe look, it's beautiful. 💖 ✨ Bleached rayon fabric, soft, light, comfortable to wear. ✨ Front button design Decorated with lace on the bust for a detailed look. ✨ There are many colors to choose from. Easy to wear and flatter your skin. 📏 Product size 🔸 L • Chest 40 inches / 102 cm. • Length 24 inches / 61 cm. 🔸 XL • Chest 44 inches / 112 cm. • Length 26 inches / 66 cm. 🧺 How to take care of it • Should be soaked in salt water for 1 night before washing for the first time. • After that, it is recommended to wash it 2-3 times separately. • To preserve the color of the fabric and reduce color fading.",
      "th": "🌿 เสื้อผ้าฟอกเรยอนสไตล์โบฮีเมียน งานปักสวย ใส่สบาย 🌿 แมทช์ง่าย ใส่ได้ทุกวัน จะลุคชิล ลุคเที่ยว หรือคาเฟ่ก็สวยค่ะ 💖 ✨ เนื้อผ้าเรยอนฟอก นุ่ม เบา ใส่สบาย ✨ ดีไซน์กระดุมหน้า แต่งลูกไม้ช่วงอก ดูมีดีเทล ✨ มีหลายสีให้เลือก ใส่ง่าย ขับผิวสุดๆ 📏 ขนาดสินค้า 🔸 L • อก 40 นิ้ว / 102 ซม. • ความยาว 24 นิ้ว / 61 ซม. 🔸 XL • อก 44 นิ้ว / 112 ซม. • ความยาว 26 นิ้ว / 66 ซม. 🧺 วิธีดูแลรักษา • ควรแช่น้ำเกลือทิ้งไว้ 1 คืน ก่อนซักครั้งแรก • หลังจากนั้นแนะนำให้แยกซัก 2-3 ครั้ง • เพื่อถนอมสีผ้าและลดสีตก"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/l-xl-i16164526058-s127182085241.html"
    }
  },
  {
    "code": "LZD-16162007910",
    "name": {
      "en": "Weird Bohemian Bag Vintage Hippie Style",
      "th": "กระเป๋าย่ามโบฮีเมียนแปลกๆ แนววินเทจฮิปปี้สไตล์"
    },
    "category": "bags",
    "is_new": false,
    "price": 750,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "CRB501",
        "th": "CRB501"
      },
      {
        "en": "CRB502",
        "th": "CRB502"
      },
      {
        "en": "CRB601",
        "th": "CRB601"
      },
      {
        "en": "CRB602",
        "th": "CRB602"
      },
      {
        "en": "CRB603",
        "th": "CRB603"
      },
      {
        "en": "CRB604",
        "th": "CRB604"
      },
      {
        "en": "CRB801",
        "th": "CRB801"
      },
      {
        "en": "CRB802",
        "th": "CRB802"
      },
      {
        "en": "CRB803",
        "th": "CRB803"
      },
      {
        "en": "CRB804",
        "th": "CRB804"
      },
      {
        "en": "CRB805",
        "th": "CRB805"
      },
      {
        "en": "CRB806",
        "th": "CRB806"
      },
      {
        "en": "CRB807",
        "th": "CRB807"
      },
      {
        "en": "CRB808",
        "th": "CRB808"
      },
      {
        "en": "CRB809",
        "th": "CRB809"
      },
      {
        "en": "CRB810",
        "th": "CRB810"
      },
      {
        "en": "CRB811",
        "th": "CRB811"
      },
      {
        "en": "CRB812",
        "th": "CRB812"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Dimensions",
          "th": "ขนาด"
        },
        "value": {
          "en": "20 in",
          "th": "สูงรวมสาย 20 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16162007910-01.webp",
        "alt": {
          "en": "Main view of Weird Bohemian Bag Vintage Hippie Style",
          "th": "ภาพหลักของ กระเป๋าย่ามโบฮีเมียนแปลกๆ แนววินเทจฮิปปี้สไตล์"
        }
      },
      {
        "src": "products/lzd-16162007910-02.webp",
        "alt": {
          "en": "Additional view 2 of Weird Bohemian Bag Vintage Hippie Style",
          "th": "ภาพเพิ่มเติม 2 ของ กระเป๋าย่ามโบฮีเมียนแปลกๆ แนววินเทจฮิปปี้สไตล์"
        }
      },
      {
        "src": "products/lzd-16162007910-03.webp",
        "alt": {
          "en": "Additional view 3 of Weird Bohemian Bag Vintage Hippie Style",
          "th": "ภาพเพิ่มเติม 3 ของ กระเป๋าย่ามโบฮีเมียนแปลกๆ แนววินเทจฮิปปี้สไตล์"
        }
      },
      {
        "src": "products/lzd-16162007910-04.webp",
        "alt": {
          "en": "Additional view 4 of Weird Bohemian Bag Vintage Hippie Style",
          "th": "ภาพเพิ่มเติม 4 ของ กระเป๋าย่ามโบฮีเมียนแปลกๆ แนววินเทจฮิปปี้สไตล์"
        }
      },
      {
        "src": "products/lzd-16162007910-05.webp",
        "alt": {
          "en": "Additional view 5 of Weird Bohemian Bag Vintage Hippie Style",
          "th": "ภาพเพิ่มเติม 5 ของ กระเป๋าย่ามโบฮีเมียนแปลกๆ แนววินเทจฮิปปี้สไตล์"
        }
      },
      {
        "src": "products/lzd-16162007910-06.webp",
        "alt": {
          "en": "Additional view 6 of Weird Bohemian Bag Vintage Hippie Style",
          "th": "ภาพเพิ่มเติม 6 ของ กระเป๋าย่ามโบฮีเมียนแปลกๆ แนววินเทจฮิปปี้สไตล์"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "🌿✨ Bohemian satchel bag Real vintage hippie Art people must have ✨🌿 Boho style fabric work mixed with a very unique vintage vibe. Each bag has a unique pattern, like a work of art that can be carried 🧵🎨 Easy to match with hippies, cafes, going to the beach, going to the market, or decorating in a chic style, it's perfect. 👜 Approximate size • Height including strap 20 inches. • The bag is 13 inches tall. • Width 10 inches • Base is 4 inches wide. 📌 But the melt may be slightly different, about 1–2 inches. 📌 The work has only been dissolved. There is only \"1 ticket\" when it's gone. It's gone. ✨ Highlights ✔ Light weight, comfortable to carry. ✔ Vintage fabric work in Indian-Bohemian style. ✔ There is a zipper for easy use. ✔ Can be matched with many looks, including hippie, vintage, and art fashion types. 🌙 For people who like differences and is fascinated by the unique charm of handmade work",
      "th": "🌿✨ กระเป๋าย่ามโบฮีเมียน วินเทจฮิปปี้แท้ สายอาร์ตต้องมี ✨🌿 งานผ้าสไตล์โบโฮผสมกลิ่นอายวินเทจสุดยูนีค แต่ละใบมีลวดลายเฉพาะตัว ไม่ซ้ำใคร เหมือนงานศิลปะที่สะพายได้ 🧵🎨 แมทช์ง่ายทั้งสายฮิปปี้ คาเฟ่ เที่ยวทะเล เดินตลาด หรือแต่งแนวเซอร์ชิคก็ลงตัวสุดๆ 👜 ขนาดโดยประมาณ • สูงรวมสาย 20 นิ้ว • ตัวกระเป๋าสูง 13 นิ้ว • กว้าง 10 นิ้ว • ฐานกว้าง 4 นิ้ว 📌 แต่ละลายอาจต่างกันเล็กน้อยประมาณ 1–2 นิ้ว 📌 งานแต่ละลายมีเพียง “1 ใบเท่านั้น” หมดแล้วหมดเลย ✨ จุดเด่น ✔ น้ำหนักเบา สะพายสบาย ✔ งานผ้าวินเทจสไตล์อินเดีย-โบฮีเมียน ✔ มีซิปใช้งานสะดวก ✔ แมทช์ได้หลายลุค ทั้งฮิปปี้ วินเทจ และสายแฟชั่นอาร์ต 🌙 สำหรับคนที่ชอบความแตกต่าง และหลงใหลเสน่ห์งานแฮนด์เมดแบบมีเอกลักษณ์เฉพาะตัว"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16162007910-s127239202969.html"
    }
  },
  {
    "code": "LZD-16183416810",
    "name": {
      "en": "Woven Bag Popular Vintage Style, Available In 3 Colors, Size 13 Inches",
      "th": "กระเป๋าย่ามผ้าทอ สไตล์วินเทจสุดฮิต มีให้เลือก 3 สี ขนาด 13 นิ้ว"
    },
    "category": "bags",
    "is_new": false,
    "price": 159,
    "fabric": {
      "en": "Woven fabric",
      "th": "ผ้าทอ"
    },
    "colours": [
      {
        "en": "Blue",
        "th": "NJ001 น้ำเงิน 13นิ้ว"
      },
      {
        "en": "Red",
        "th": "NJ002 แดง 13นิ้ว"
      },
      {
        "en": "Green",
        "th": "NJ003 เขียว 13นิ้ว"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Dimensions",
          "th": "ขนาด"
        },
        "value": {
          "en": "13 in",
          "th": "ขนาด 13 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16183416810-01.webp",
        "alt": {
          "en": "Main view of Woven Bag Popular Vintage Style, Available In 3 Colors, Size 13 Inches",
          "th": "ภาพหลักของ กระเป๋าย่ามผ้าทอ สไตล์วินเทจสุดฮิต มีให้เลือก 3 สี ขนาด 13 นิ้ว"
        }
      },
      {
        "src": "products/lzd-16183416810-02.webp",
        "alt": {
          "en": "Additional view 2 of Woven Bag Popular Vintage Style, Available In 3 Colors, Size 13 Inches",
          "th": "ภาพเพิ่มเติม 2 ของ กระเป๋าย่ามผ้าทอ สไตล์วินเทจสุดฮิต มีให้เลือก 3 สี ขนาด 13 นิ้ว"
        }
      },
      {
        "src": "products/lzd-16183416810-03.webp",
        "alt": {
          "en": "Additional view 3 of Woven Bag Popular Vintage Style, Available In 3 Colors, Size 13 Inches",
          "th": "ภาพเพิ่มเติม 3 ของ กระเป๋าย่ามผ้าทอ สไตล์วินเทจสุดฮิต มีให้เลือก 3 สี ขนาด 13 นิ้ว"
        }
      },
      {
        "src": "products/lzd-16183416810-04.webp",
        "alt": {
          "en": "Additional view 4 of Woven Bag Popular Vintage Style, Available In 3 Colors, Size 13 Inches",
          "th": "ภาพเพิ่มเติม 4 ของ กระเป๋าย่ามผ้าทอ สไตล์วินเทจสุดฮิต มีให้เลือก 3 สี ขนาด 13 นิ้ว"
        }
      },
      {
        "src": "products/lzd-16183416810-05.webp",
        "alt": {
          "en": "Additional view 5 of Woven Bag Popular Vintage Style, Available In 3 Colors, Size 13 Inches",
          "th": "ภาพเพิ่มเติม 5 ของ กระเป๋าย่ามผ้าทอ สไตล์วินเทจสุดฮิต มีให้เลือก 3 สี ขนาด 13 นิ้ว"
        }
      },
      {
        "src": "products/lzd-16183416810-06.webp",
        "alt": {
          "en": "Additional view 6 of Woven Bag Popular Vintage Style, Available In 3 Colors, Size 13 Inches",
          "th": "ภาพเพิ่มเติม 6 ของ กระเป๋าย่ามผ้าทอ สไตล์วินเทจสุดฮิต มีให้เลือก 3 สี ขนาด 13 นิ้ว"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "🌿 Woven fabric satchel bag, a must-have for chill people. Carrying a trip to a cafe ☕ Carry it to university 🎓 Carry it to work 💼 There are 3 patterns to choose from. ✔ Size 13 inches Beautiful, cool, and really usable. Wear it to your heart's content and carry it comfortably all day.",
      "th": "🌿 กระเป๋าย่ามผ้าทอ สายชิลต้องมี สะพายเที่ยวคาเฟ่ ☕ สะพายไปมหาวิทยาลัย 🎓 สะพายไปทำงาน 💼 มี 3 ลายให้เลือก ✔ ขนาด 13 นิ้ว สวย เท่ ใช้งานได้จริง ใส่ของจุใจ สะพายสบายทั้งวัน 🤎"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/3-13-i16183416810-s127262083990.html"
    }
  },
  {
    "code": "LZD-16112405469",
    "name": {
      "en": "Linen Dress With Bush Flower Pattern, Beautiful Shape, Comfortable To Wear",
      "th": "🌸 เดรสผ้าป่านลายดอกพุ่ม ทรงสวย ใส่สบาย 🌸"
    },
    "category": "dresses",
    "is_new": false,
    "price": 299,
    "fabric": {
      "en": "Lightweight woven fabric",
      "th": "ผ้าป่าน"
    },
    "colours": [
      {
        "en": "Purple",
        "th": "SMS401 สีม่วง"
      },
      {
        "en": "Red",
        "th": "SMS402 สีแดง"
      },
      {
        "en": "Yellow",
        "th": "SMS403 สีเหลือง"
      },
      {
        "en": "Green",
        "th": "SMS404 สีเขียว"
      },
      {
        "en": "Pink",
        "th": "SMS405 สีชมพู"
      },
      {
        "en": "Sky Blue",
        "th": "SMS406 สีฟ้า"
      },
      {
        "en": "Blue",
        "th": "SMS407 สีน้ำเงิน"
      },
      {
        "en": "Orange",
        "th": "SMS408 สีส้ม"
      },
      {
        "en": "Black",
        "th": "SMS409 สีดำ"
      },
      {
        "en": "White",
        "th": "SMS410 สีขาวแดง"
      },
      {
        "en": "White",
        "th": "SMS411 สีขาวม่วง"
      },
      {
        "en": "White",
        "th": "SMS412 สีขาวส้ม"
      },
      {
        "en": "White",
        "th": "SMS413ขาวเขียวมิ้นท์"
      },
      {
        "en": "White",
        "th": "SMS414 สีขาวชมพู"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "46 / 39 / 16 / 16 / 20",
          "th": "อก 46\" ยาว 39\" ไหล่ 16\" แขนยาว 16\" วงแขน 20\""
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16112405469-01.webp",
        "alt": {
          "en": "Main view of Linen Dress With Bush Flower Pattern, Beautiful Shape, Comfortable To Wear",
          "th": "ภาพหลักของ 🌸 เดรสผ้าป่านลายดอกพุ่ม ทรงสวย ใส่สบาย 🌸"
        }
      },
      {
        "src": "products/lzd-16112405469-02.webp",
        "alt": {
          "en": "Additional view 2 of Linen Dress With Bush Flower Pattern, Beautiful Shape, Comfortable To Wear",
          "th": "ภาพเพิ่มเติม 2 ของ 🌸 เดรสผ้าป่านลายดอกพุ่ม ทรงสวย ใส่สบาย 🌸"
        }
      },
      {
        "src": "products/lzd-16112405469-03.webp",
        "alt": {
          "en": "Additional view 3 of Linen Dress With Bush Flower Pattern, Beautiful Shape, Comfortable To Wear",
          "th": "ภาพเพิ่มเติม 3 ของ 🌸 เดรสผ้าป่านลายดอกพุ่ม ทรงสวย ใส่สบาย 🌸"
        }
      },
      {
        "src": "products/lzd-16112405469-04.webp",
        "alt": {
          "en": "Additional view 4 of Linen Dress With Bush Flower Pattern, Beautiful Shape, Comfortable To Wear",
          "th": "ภาพเพิ่มเติม 4 ของ 🌸 เดรสผ้าป่านลายดอกพุ่ม ทรงสวย ใส่สบาย 🌸"
        }
      },
      {
        "src": "products/lzd-16112405469-05.webp",
        "alt": {
          "en": "Additional view 5 of Linen Dress With Bush Flower Pattern, Beautiful Shape, Comfortable To Wear",
          "th": "ภาพเพิ่มเติม 5 ของ 🌸 เดรสผ้าป่านลายดอกพุ่ม ทรงสวย ใส่สบาย 🌸"
        }
      },
      {
        "src": "products/lzd-16112405469-06.webp",
        "alt": {
          "en": "Additional view 6 of Linen Dress With Bush Flower Pattern, Beautiful Shape, Comfortable To Wear",
          "th": "ภาพเพิ่มเติม 6 ของ 🌸 เดรสผ้าป่านลายดอกพุ่ม ทรงสวย ใส่สบาย 🌸"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Linen dress with bush flower pattern, pretty, sweet, and comfortable to wear. Who is looking for a comfortable dress? But it still looks good and stylish. Must have this one! Good quality linen fabric, light and breathable. Can be worn all day, not hot. Designed with a shrub flower pattern, fresh colors, it will enhance your skin when worn. Looks outstanding from every angle ✨ Highlights Genuine linen fabric, comfortable to wear, not hot. Relaxed fit, can be worn by many figures. Good camouflage Polo collar looks polite and can be worn both when traveling and working. The curved hem adds a flowing, beautiful look when walking. 📏 Size (inches) Chest 46\" Length 39\" Shoulder 16\" Sleeve 16\" Arm circumference 20\" 🎯 Suitable for ✔ Wear it when traveling ✔ Wear to work ✔ Wear it for photography/cafe ✔ Comfortable to wear at home but still beautiful.",
      "th": "เดรสผ้าป่านลายดอกพุ่ม สวยหวาน ใส่สบาย ใครกำลังหาเดรสใส่สบาย แต่ยังดูดีมีสไตล์ ต้องตัวนี้เลยค่ะ! ผ้าป่านเนื้อดี เบา ระบายอากาศเยี่ยม ใส่ได้ทั้งวันไม่ร้อน ดีไซน์ลายดอกพุ่ม สีสด ใส่แล้วขับผิว ดูโดดเด่นทุกมุมมอง ✨ จุดเด่น ผ้าป่านแท้ ใส่สบาย ไม่ร้อน ทรงปล่อย ใส่ได้หลายหุ่น พรางรูปร่างดี คอปกโปโล ดูสุภาพ ใส่ได้ทั้งเที่ยวและทำงาน ชายเสื้อโค้ง เพิ่มความพลิ้ว สวยเวลาเดิน 📏 ขนาด (นิ้ว) อก 46\" ยาว 39\" ไหล่ 16\" แขนยาว 16\" วงแขน 20\" 🎯 เหมาะสำหรับ ✔ ใส่เที่ยว ✔ ใส่ทำงาน ✔ ใส่ถ่ายรูป / คาเฟ่ ✔ ใส่อยู่บ้านสบายๆ แต่ยังสวย"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16112405469-s126966215442.html"
    }
  },
  {
    "code": "LZD-16207607588",
    "name": {
      "en": "Naga Cloth Bag, Rounded Bottom Shape, Handmade Style, Beautiful Pattern",
      "th": "กระเป๋าผ้านากา ทรงก้นมน สไตล์แฮนด์เมด ลวดลายสวย"
    },
    "category": "bags",
    "is_new": false,
    "price": 299,
    "fabric": {
      "en": "Woven fabric",
      "th": "ผ้าทอ"
    },
    "colours": [
      {
        "en": "Red",
        "th": "KMB001 แดง"
      },
      {
        "en": "KMB002",
        "th": "KMB002"
      },
      {
        "en": "KMB003",
        "th": "KMB003"
      },
      {
        "en": "Cream",
        "th": "KMB004 ครีม"
      },
      {
        "en": "White and Black",
        "th": "KMB005 ขาวดำ"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Dimensions",
          "th": "ขนาด"
        },
        "value": {
          "en": "13 / 12 in",
          "th": "ขนาดกระเป๋า 13 × 12 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16207607588-01.webp",
        "alt": {
          "en": "Main view of Naga Cloth Bag, Rounded Bottom Shape, Handmade Style, Beautiful Pattern",
          "th": "ภาพหลักของ กระเป๋าผ้านากา ทรงก้นมน สไตล์แฮนด์เมด ลวดลายสวย"
        }
      },
      {
        "src": "products/lzd-16207607588-02.webp",
        "alt": {
          "en": "Additional view 2 of Naga Cloth Bag, Rounded Bottom Shape, Handmade Style, Beautiful Pattern",
          "th": "ภาพเพิ่มเติม 2 ของ กระเป๋าผ้านากา ทรงก้นมน สไตล์แฮนด์เมด ลวดลายสวย"
        }
      },
      {
        "src": "products/lzd-16207607588-03.webp",
        "alt": {
          "en": "Additional view 3 of Naga Cloth Bag, Rounded Bottom Shape, Handmade Style, Beautiful Pattern",
          "th": "ภาพเพิ่มเติม 3 ของ กระเป๋าผ้านากา ทรงก้นมน สไตล์แฮนด์เมด ลวดลายสวย"
        }
      },
      {
        "src": "products/lzd-16207607588-04.webp",
        "alt": {
          "en": "Additional view 4 of Naga Cloth Bag, Rounded Bottom Shape, Handmade Style, Beautiful Pattern",
          "th": "ภาพเพิ่มเติม 4 ของ กระเป๋าผ้านากา ทรงก้นมน สไตล์แฮนด์เมด ลวดลายสวย"
        }
      },
      {
        "src": "products/lzd-16207607588-05.webp",
        "alt": {
          "en": "Additional view 5 of Naga Cloth Bag, Rounded Bottom Shape, Handmade Style, Beautiful Pattern",
          "th": "ภาพเพิ่มเติม 5 ของ กระเป๋าผ้านากา ทรงก้นมน สไตล์แฮนด์เมด ลวดลายสวย"
        }
      },
      {
        "src": "products/lzd-16207607588-06.webp",
        "alt": {
          "en": "Additional view 6 of Naga Cloth Bag, Rounded Bottom Shape, Handmade Style, Beautiful Pattern",
          "th": "ภาพเพิ่มเติม 6 ของ กระเป๋าผ้านากา ทรงก้นมน สไตล์แฮนด์เมด ลวดลายสวย"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "👜 Naga cloth bag, round bottom shape, handmade style ✨ The patterns are beautiful and unique, each color and pattern are unique. You can carry it every day. Easy to match with both women and men. 📏 Bag size 13 × 12 inches 📏 Shoulder strap length 110 cm. 💖 Woven fabric work, beautiful, cool, really usable, able to carry things to your heart's content. Ready to send in many patterns.",
      "th": "👜 กระเป๋าผ้านากา ทรงก้นมน สไตล์แฮนด์เมด ✨ ลวดลายสวย มีเอกลักษณ์ แต่ละสีลายไม่ซ้ำกัน สะพายได้ทุกวัน แมตช์ง่ายทั้งผู้หญิงและผู้ชาย 📏 ขนาดกระเป๋า 13 × 12 นิ้ว 📏 สายสะพายยาว 110 ซม. 💖 งานผ้าทอ สวย เท่ ใช้งานได้จริง พกของได้จุใจ พร้อมส่งหลายลายเลยค่ะ"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16207607588-s127365128608.html"
    }
  },
  {
    "code": "LZD-16154681469",
    "name": {
      "en": "Great Premium Shoulder Bag Made From Good Quality Genuine Cotton. Large Size With Zipper For Opening And Closing",
      "th": "กระเป๋าสะพายเกรทพรีเมียมผ้าค๊อตต๊อนแท้อย่างดี ใบใหญ่ มีซิปเปิดปิด"
    },
    "category": "bags",
    "is_new": false,
    "price": 899,
    "fabric": {
      "en": "Cotton",
      "th": "ผ้าคอตตอน"
    },
    "colours": [
      {
        "en": "CBZ001",
        "th": "CBZ001"
      },
      {
        "en": "CBZ002",
        "th": "CBZ002"
      },
      {
        "en": "CBZ003",
        "th": "CBZ003"
      },
      {
        "en": "CBZ004",
        "th": "CBZ004"
      },
      {
        "en": "CBZ005",
        "th": "CBZ005"
      },
      {
        "en": "CBZ006",
        "th": "CBZ006"
      },
      {
        "en": "CBZ007",
        "th": "CBZ007"
      },
      {
        "en": "CBZ008",
        "th": "CBZ008"
      },
      {
        "en": "CBZ010",
        "th": "CBZ010"
      },
      {
        "en": "CBZ011",
        "th": "CBZ011"
      },
      {
        "en": "CBZ012",
        "th": "CBZ012"
      },
      {
        "en": "CBZ013",
        "th": "CBZ013"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Dimensions",
          "th": "ขนาด"
        },
        "value": {
          "en": "14.5 in",
          "th": "กว้าง: 14.5 นิ้ว"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "17.5 in",
          "th": "ยาว: 17.5 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16154681469-01.webp",
        "alt": {
          "en": "Main view of Great Premium Shoulder Bag Made From Good Quality Genuine Cotton. Large Size With Zipper For Opening And Closing",
          "th": "ภาพหลักของ กระเป๋าสะพายเกรทพรีเมียมผ้าค๊อตต๊อนแท้อย่างดี ใบใหญ่ มีซิปเปิดปิด"
        }
      },
      {
        "src": "products/lzd-16154681469-02.webp",
        "alt": {
          "en": "Additional view 2 of Great Premium Shoulder Bag Made From Good Quality Genuine Cotton. Large Size With Zipper For Opening And Closing",
          "th": "ภาพเพิ่มเติม 2 ของ กระเป๋าสะพายเกรทพรีเมียมผ้าค๊อตต๊อนแท้อย่างดี ใบใหญ่ มีซิปเปิดปิด"
        }
      },
      {
        "src": "products/lzd-16154681469-03.webp",
        "alt": {
          "en": "Additional view 3 of Great Premium Shoulder Bag Made From Good Quality Genuine Cotton. Large Size With Zipper For Opening And Closing",
          "th": "ภาพเพิ่มเติม 3 ของ กระเป๋าสะพายเกรทพรีเมียมผ้าค๊อตต๊อนแท้อย่างดี ใบใหญ่ มีซิปเปิดปิด"
        }
      },
      {
        "src": "products/lzd-16154681469-04.webp",
        "alt": {
          "en": "Additional view 4 of Great Premium Shoulder Bag Made From Good Quality Genuine Cotton. Large Size With Zipper For Opening And Closing",
          "th": "ภาพเพิ่มเติม 4 ของ กระเป๋าสะพายเกรทพรีเมียมผ้าค๊อตต๊อนแท้อย่างดี ใบใหญ่ มีซิปเปิดปิด"
        }
      },
      {
        "src": "products/lzd-16154681469-05.webp",
        "alt": {
          "en": "Additional view 5 of Great Premium Shoulder Bag Made From Good Quality Genuine Cotton. Large Size With Zipper For Opening And Closing",
          "th": "ภาพเพิ่มเติม 5 ของ กระเป๋าสะพายเกรทพรีเมียมผ้าค๊อตต๊อนแท้อย่างดี ใบใหญ่ มีซิปเปิดปิด"
        }
      },
      {
        "src": "products/lzd-16154681469-06.webp",
        "alt": {
          "en": "Additional view 6 of Great Premium Shoulder Bag Made From Good Quality Genuine Cotton. Large Size With Zipper For Opening And Closing",
          "th": "ภาพเพิ่มเติม 6 ของ กระเป๋าสะพายเกรทพรีเมียมผ้าค๊อตต๊อนแท้อย่างดี ใบใหญ่ มีซิปเปิดปิด"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Genuine premium cotton bag, beautiful and outstanding, practical to use every day! Product details: Material: 100% pure cotton imported from India. Handmade, vintage style block print. unique Good size: • Width: 14.5 inches • Length: 17.5 inches • Thickness: 4.5 inches Convenient to use: • There is a zipper to open and close the bag, safe and worry-free. • Inside has 1 small compartment for small items such as a phone, wallet or keys. Can comfortably fit a 12-inch tablet. ***There are many patterns to choose from. Products ready for delivery***",
      "th": "กระเป๋าผ้าคอตตอนแท้เกรทพรีเมียม สวยโดดเด่น ใช้งานได้จริงทุกวัน! รายละเอียดสินค้า: วัสดุ: ผ้าคอตตอนแท้ 100% นำเข้าจากอินเดีย งานแฮนด์เมด ลายพิมพ์บล็อกแนววินเทจ เอกลักษณ์เฉพาะตัว ขนาดกำลังดี: • กว้าง: 14.5 นิ้ว • ยาว: 17.5 นิ้ว • หนา: 4.5 นิ้ว ใช้งานสะดวก: • มีซิปเปิด–ปิดปากกระเป๋า ปลอดภัย หายห่วง • ด้านในมีช่องเล็ก 1 ช่อง สำหรับใส่ของจุกจิก เช่น โทรศัพท์, กระเป๋าสตางค์ หรือกุญแจ ใส่แทปเล็ตขนาด 12 นิ้วได้สบายๆ ***มีหลายลายให้เลือก สินค้าพร้อมส่ง***"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16154681469-s127158004873.html"
    }
  },
  {
    "code": "LZD-4387234306",
    "name": {
      "en": "Dress With Flared Hem, Cut Fabric Cotton Saree Dress, Umbrella Saree Dress, Curved Hem Saree Dress",
      "th": "ชุดแซ่กชายบานผ้าตัดต่อ ชุดแซ่กผ้าค๊อตต๊อน ชุดแซ่กร่ม ชุดแซ่กชายโค้ง"
    },
    "category": "dresses",
    "is_new": false,
    "price": 259,
    "fabric": {
      "en": "Cotton",
      "th": "ผ้าคอตตอน"
    },
    "colours": [
      {
        "en": "CPD",
        "th": "CPD"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "ฟรีไซส์"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-4387234306-01.webp",
        "alt": {
          "en": "Main view of Dress With Flared Hem, Cut Fabric Cotton Saree Dress, Umbrella Saree Dress, Curved Hem Saree Dress",
          "th": "ภาพหลักของ ชุดแซ่กชายบานผ้าตัดต่อ ชุดแซ่กผ้าค๊อตต๊อน ชุดแซ่กร่ม ชุดแซ่กชายโค้ง"
        }
      },
      {
        "src": "products/lzd-4387234306-02.webp",
        "alt": {
          "en": "Additional view 2 of Dress With Flared Hem, Cut Fabric Cotton Saree Dress, Umbrella Saree Dress, Curved Hem Saree Dress",
          "th": "ภาพเพิ่มเติม 2 ของ ชุดแซ่กชายบานผ้าตัดต่อ ชุดแซ่กผ้าค๊อตต๊อน ชุดแซ่กร่ม ชุดแซ่กชายโค้ง"
        }
      },
      {
        "src": "products/lzd-4387234306-03.webp",
        "alt": {
          "en": "Additional view 3 of Dress With Flared Hem, Cut Fabric Cotton Saree Dress, Umbrella Saree Dress, Curved Hem Saree Dress",
          "th": "ภาพเพิ่มเติม 3 ของ ชุดแซ่กชายบานผ้าตัดต่อ ชุดแซ่กผ้าค๊อตต๊อน ชุดแซ่กร่ม ชุดแซ่กชายโค้ง"
        }
      },
      {
        "src": "products/lzd-4387234306-04.webp",
        "alt": {
          "en": "Additional view 4 of Dress With Flared Hem, Cut Fabric Cotton Saree Dress, Umbrella Saree Dress, Curved Hem Saree Dress",
          "th": "ภาพเพิ่มเติม 4 ของ ชุดแซ่กชายบานผ้าตัดต่อ ชุดแซ่กผ้าค๊อตต๊อน ชุดแซ่กร่ม ชุดแซ่กชายโค้ง"
        }
      },
      {
        "src": "products/lzd-4387234306-05.webp",
        "alt": {
          "en": "Additional view 5 of Dress With Flared Hem, Cut Fabric Cotton Saree Dress, Umbrella Saree Dress, Curved Hem Saree Dress",
          "th": "ภาพเพิ่มเติม 5 ของ ชุดแซ่กชายบานผ้าตัดต่อ ชุดแซ่กผ้าค๊อตต๊อน ชุดแซ่กร่ม ชุดแซ่กชายโค้ง"
        }
      },
      {
        "src": "products/lzd-4387234306-06.webp",
        "alt": {
          "en": "Additional view 6 of Dress With Flared Hem, Cut Fabric Cotton Saree Dress, Umbrella Saree Dress, Curved Hem Saree Dress",
          "th": "ภาพเพิ่มเติม 6 ของ ชุดแซ่กชายบานผ้าตัดต่อ ชุดแซ่กผ้าค๊อตต๊อน ชุดแซ่กร่ม ชุดแซ่กชายโค้ง"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Dress shirt in a cut style made from cotton fabric. It is a fabric from natural fibers. which is a cloth that does not make you feel hot after wearing it and irritation because it is well ventilated It's a vintage style shirt with a bohemian style. Wear it when traveling and it will look beautiful and unusual. Go for a walk and wear it at home. Or wear it as pajamas, it's comfortable. Can be worn by both people with slim figures. or a plump person Free size, can fit from chest 32 - 54'' inches, length 40 inches. *****Please read and understand before ordering**** *Every edited fabric product is different* because edited fabric is fabric that is cut together from fabric scraps until it becomes a large roll of fabric. Then they are cut into different sets. Therefore, the pattern of each shirt is different. It will not be the same as the sample set according to the illustration shown on the page. Every product is inspected before sending. ***If there is a problem with the product Don't just press deduct points. Please notify the shop first*** Thank you to everyone who has come to place an order with products from our store.",
      "th": "เสื้อชุดแซ่กแนวตัดต่อด้วยผ้าค๊อตต๊อน เป็นผ้าจากใยธรรมชาติ ซึ่งเป็นผ้าที่ใส่แล้วไม่ทำให้รู้สึกไม่ร้อน และระคายเคืองเพราะระบายอากาศได้ดี เป็นเสื้อแนววินเทจ แนวโบฮีเมียน ใส่ไปเที่ยวก็ดูสวยเด่นแปลกตา ไปเดินเล่น ใส่อยู่กับบ้าน หรือจะใส่เป็นชุดนอนก็สบายๆ ใส่ได้ทั้งคนหุ่นเพรียว หรือคนอวบอ้วน ฟรีไซส์ ใส่ได้ตั้งแต่ อก 32 - 54'' นิ้ว ยาว 40 นิ้ว *****กรุณาอ่านและทำความเข้าใจก่อนกดสั่งซื้อ**** *สินค้าผ้าตัดต่อทุกชิ้นจะไม่เหมือนกัน* เพราะผ้าตัดต่อเป็นผ้าที่นำเศษผ้ามาตัดต่อกันจนเป็นผ้าม้วนผืนใหญ่ แล้วจึงนำมาตัดเป็นชุดต่างๆ ดังนั้นลายแต่ละลายของเสื้อแต่ละตัวจึงแตกต่างกันออกไป จะไม่เหมือนกันกับชุดตัวอย่างตามภาพประกอบที่โชว์ในเพจ มีการตรวจสินค้าก่อนส่งทุกชิ้น ***หากมีปัญหากับสินค้า อย่างเพิ่งกดหักคะแนน ให้แจ้งมาทางร้านก่อนนะคะ*** ขอบคุณทุกๆท่านที่ได้เข้ามาทำการกดสั่งซื้อกับสินค้าทางร้านของเราค่ะ"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i4387234306-s17471660319.html"
    }
  },
  {
    "code": "LZD-16160640049",
    "name": {
      "en": "Floral Pattern Shirt, Collar, Balloon Sleeves, Beautiful Shape, Three-Quarter Sleeves",
      "th": "เสื้อลายดอก คอปก แขนบอลลูน ทรงสวย แขนสามส่วน"
    },
    "category": "tops",
    "is_new": false,
    "price": 229,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "SMS201",
        "th": "SMS201"
      },
      {
        "en": "SMS202",
        "th": "SMS202"
      },
      {
        "en": "SMS203",
        "th": "SMS203"
      },
      {
        "en": "SMS204",
        "th": "SMS204"
      },
      {
        "en": "SMS205",
        "th": "SMS205"
      },
      {
        "en": "SMS206",
        "th": "SMS206"
      },
      {
        "en": "SMS207",
        "th": "SMS207"
      },
      {
        "en": "SMS208",
        "th": "SMS208"
      },
      {
        "en": "SMS209",
        "th": "SMS209"
      },
      {
        "en": "SMS210",
        "th": "SMS210"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16160640049-01.webp",
        "alt": {
          "en": "Main view of Floral Pattern Shirt, Collar, Balloon Sleeves, Beautiful Shape, Three-Quarter Sleeves",
          "th": "ภาพหลักของ เสื้อลายดอก คอปก แขนบอลลูน ทรงสวย แขนสามส่วน"
        }
      },
      {
        "src": "products/lzd-16160640049-02.webp",
        "alt": {
          "en": "Additional view 2 of Floral Pattern Shirt, Collar, Balloon Sleeves, Beautiful Shape, Three-Quarter Sleeves",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อลายดอก คอปก แขนบอลลูน ทรงสวย แขนสามส่วน"
        }
      },
      {
        "src": "products/lzd-16160640049-03.webp",
        "alt": {
          "en": "Additional view 3 of Floral Pattern Shirt, Collar, Balloon Sleeves, Beautiful Shape, Three-Quarter Sleeves",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อลายดอก คอปก แขนบอลลูน ทรงสวย แขนสามส่วน"
        }
      },
      {
        "src": "products/lzd-16160640049-04.webp",
        "alt": {
          "en": "Additional view 4 of Floral Pattern Shirt, Collar, Balloon Sleeves, Beautiful Shape, Three-Quarter Sleeves",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อลายดอก คอปก แขนบอลลูน ทรงสวย แขนสามส่วน"
        }
      },
      {
        "src": "products/lzd-16160640049-05.webp",
        "alt": {
          "en": "Additional view 5 of Floral Pattern Shirt, Collar, Balloon Sleeves, Beautiful Shape, Three-Quarter Sleeves",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อลายดอก คอปก แขนบอลลูน ทรงสวย แขนสามส่วน"
        }
      },
      {
        "src": "products/lzd-16160640049-06.webp",
        "alt": {
          "en": "Additional view 6 of Floral Pattern Shirt, Collar, Balloon Sleeves, Beautiful Shape, Three-Quarter Sleeves",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อลายดอก คอปก แขนบอลลูน ทรงสวย แขนสามส่วน"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Long shirt with a collar, balloon sleeves, chic floral pattern. Beautiful, sweet, stylish design Wear it and you will look polite. But still bright and outstanding Comfortable fabric, beautiful shape, camouflages the figure well. You can wear it for many occasions. Highlights of this model • Chinese collar adds a simple, elegant, classy look. • Balloon sleeves look cute with details. • Loose fit, comfortable to wear, not tight. • Flower pattern in beautiful colors. Wear it and help brighten the skin. • There are many colors to choose from. Free size Can be worn from chest size 34–46 inches. Shirt length 34 inches Arm circumference 20 inches How to care for it It is recommended to soak in salt water for 1 night before washing for the first time. And you should wash it separately 1-2 times to keep the fabric color beautiful and fresh.",
      "th": "เสื้อทรงยาวคอปก แขนบอลลูน ลายดอกสุดเก๋ ดีไซน์สวยหวานแบบมีสไตล์ ใส่แล้วดูสุภาพ แต่ยังคงความสดใสโดดเด่น เนื้อผ้าใส่สบาย ทรงสวย พรางหุ่นได้ดี ใส่ได้หลายโอกาส จุดเด่นของรุ่นนี้ • คอจีนเพิ่มลุคเรียบหรู ดูดีมีระดับ • แขนบอลลูนใส่แล้วดูน่ารัก มีดีเทล • ทรงปล่อยใส่สบาย ไม่รัดตัว • ลายดอกสีสวย ใส่แล้วช่วยขับผิว • มีหลายสีให้เลือก ขนาดฟรีไซส์ ใส่ได้ตั้งแต่อก 34–46 นิ้ว เสื้อยาว 34 นิ้ว วงแขน 20 นิ้ว วิธีดูแลรักษา แนะนำแช่น้ำเกลือทิ้งไว้ 1 คืน ก่อนซักครั้งแรก และควรซักแยก 1–2 ครั้ง เพื่อรักษาสีผ้าให้สวยสดค่ะ"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16160640049-s127175220870.html"
    }
  },
  {
    "code": "LZD-16171009178",
    "name": {
      "en": "Short Batwing Dress Double Vine Pattern, One Size",
      "th": "เดรสสั้นทรงปีกค้างคาว ลายเถาวัลย์คู่ ฟรีไซส์"
    },
    "category": "dresses",
    "is_new": false,
    "price": 199,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "Navy",
        "th": "JJS01 กรมท่า"
      },
      {
        "en": "Blue",
        "th": "JJS02 น้ำเงิน"
      },
      {
        "en": "Sky Blue",
        "th": "JJS03 ฟ้า"
      },
      {
        "en": "Red",
        "th": "JJS04 แดง"
      },
      {
        "en": "Pink",
        "th": "JJS05 ชมพู"
      },
      {
        "en": "Sky Blue",
        "th": "JJS06 ฟ้าแดง"
      },
      {
        "en": "Sky Blue",
        "th": "JJS07 ชมพูฟ้า"
      },
      {
        "en": "Black",
        "th": "JJS08 ดำ"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "Approx. 34–54 in / 86–137 cm",
          "th": "อก 34-54 นิ้ว (ประมาณ 86-137 ซม.)"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "Approx. 34 in / 86 cm",
          "th": "ยาว 34 นิ้ว (ประมาณ 86 ซม.)"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16171009178-01.webp",
        "alt": {
          "en": "Main view of Short Batwing Dress Double Vine Pattern, One Size",
          "th": "ภาพหลักของ เดรสสั้นทรงปีกค้างคาว ลายเถาวัลย์คู่ ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16171009178-02.webp",
        "alt": {
          "en": "Additional view 2 of Short Batwing Dress Double Vine Pattern, One Size",
          "th": "ภาพเพิ่มเติม 2 ของ เดรสสั้นทรงปีกค้างคาว ลายเถาวัลย์คู่ ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16171009178-03.webp",
        "alt": {
          "en": "Additional view 3 of Short Batwing Dress Double Vine Pattern, One Size",
          "th": "ภาพเพิ่มเติม 3 ของ เดรสสั้นทรงปีกค้างคาว ลายเถาวัลย์คู่ ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16171009178-04.webp",
        "alt": {
          "en": "Additional view 4 of Short Batwing Dress Double Vine Pattern, One Size",
          "th": "ภาพเพิ่มเติม 4 ของ เดรสสั้นทรงปีกค้างคาว ลายเถาวัลย์คู่ ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16171009178-05.webp",
        "alt": {
          "en": "Additional view 5 of Short Batwing Dress Double Vine Pattern, One Size",
          "th": "ภาพเพิ่มเติม 5 ของ เดรสสั้นทรงปีกค้างคาว ลายเถาวัลย์คู่ ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16171009178-06.webp",
        "alt": {
          "en": "Additional view 6 of Short Batwing Dress Double Vine Pattern, One Size",
          "th": "ภาพเพิ่มเติม 6 ของ เดรสสั้นทรงปีกค้างคาว ลายเถาวัลย์คู่ ฟรีไซส์"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Short bat wing style dress Awesome boho pattern Wear it and you will look expensive and charming like a fashionable girl. Wear it to travel and it's beautiful. Wear it to chill out and it's chic. Whether it's at the beach, at a cafe, or on a casual day, it can handle it. Flowing fabric, comfortable to wear, not hot. The style can be worn on many body shapes, concealing the arms, concealing the stomach. Wear it and you'll look extremely smaller. Size Chest 34-54 inches (approximately 86-137 cm.) Length 34 inches (approximately 86 cm.)",
      "th": "เดรสสั้นทรงปีกค้างคาว ลายโบโฮสุดปัง ใส่แล้วดูแพง มีเสน่ห์แบบสาวสายแฟชั่น ใส่เที่ยวก็สวย ใส่ชิลก็เก๋ จะทะเล คาเฟ่ หรือวันสบายๆ ก็เอาอยู่ เนื้อผ้าพริ้ว ใส่สบาย ไม่ร้อน ทรงปล่อยใส่ได้หลายหุ่น พรางแขน พรางหน้าท้อง ใส่แล้วดูตัวเล็กลงสุดๆ Size อก 34-54 นิ้ว (ประมาณ 86-137 ซม.) ยาว 34 นิ้ว (ประมาณ 86 ซม.)"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16171009178-s127329386883.html"
    }
  },
  {
    "code": "LZD-16158828472",
    "name": {
      "en": "Long Batwing Dress Small Paisley Pattern Beautiful And Stylish",
      "th": "เดรสยาวทรงปีกค้างคาว ลายลูกน้ำเล็ก สวยแบบมีสไตล์"
    },
    "category": "dresses",
    "is_new": false,
    "price": 259,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "Green",
        "th": "KTL301 สีส้มเขียว"
      },
      {
        "en": "Purple",
        "th": "KTL302 สีม่วง"
      },
      {
        "en": "Sky Blue",
        "th": "KTL303 สีฟ้าแดง"
      },
      {
        "en": "Blue",
        "th": "KTL304น้ำตาลน้ำเงิน"
      },
      {
        "en": "Black",
        "th": "KTL305 สีดำแดง"
      },
      {
        "en": "Pink",
        "th": "KTL306 สีชมพูเขียว"
      },
      {
        "en": "Navy",
        "th": "KTL307กรมท่าน้ำเงิน"
      },
      {
        "en": "Red",
        "th": "KTL308 สีแดงส้ม"
      },
      {
        "en": "Sky Blue",
        "th": "KTL309 สีเลือดหมูฟ้า"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "Fits 32–54 in",
          "th": "อกใส่ได้ 32-54 นิ้ว"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "52 in",
          "th": "ความยาว 52 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16158828472-01.webp",
        "alt": {
          "en": "Main view of Long Batwing Dress Small Paisley Pattern Beautiful And Stylish",
          "th": "ภาพหลักของ เดรสยาวทรงปีกค้างคาว ลายลูกน้ำเล็ก สวยแบบมีสไตล์"
        }
      },
      {
        "src": "products/lzd-16158828472-02.webp",
        "alt": {
          "en": "Additional view 2 of Long Batwing Dress Small Paisley Pattern Beautiful And Stylish",
          "th": "ภาพเพิ่มเติม 2 ของ เดรสยาวทรงปีกค้างคาว ลายลูกน้ำเล็ก สวยแบบมีสไตล์"
        }
      },
      {
        "src": "products/lzd-16158828472-03.webp",
        "alt": {
          "en": "Additional view 3 of Long Batwing Dress Small Paisley Pattern Beautiful And Stylish",
          "th": "ภาพเพิ่มเติม 3 ของ เดรสยาวทรงปีกค้างคาว ลายลูกน้ำเล็ก สวยแบบมีสไตล์"
        }
      },
      {
        "src": "products/lzd-16158828472-04.webp",
        "alt": {
          "en": "Additional view 4 of Long Batwing Dress Small Paisley Pattern Beautiful And Stylish",
          "th": "ภาพเพิ่มเติม 4 ของ เดรสยาวทรงปีกค้างคาว ลายลูกน้ำเล็ก สวยแบบมีสไตล์"
        }
      },
      {
        "src": "products/lzd-16158828472-05.webp",
        "alt": {
          "en": "Additional view 5 of Long Batwing Dress Small Paisley Pattern Beautiful And Stylish",
          "th": "ภาพเพิ่มเติม 5 ของ เดรสยาวทรงปีกค้างคาว ลายลูกน้ำเล็ก สวยแบบมีสไตล์"
        }
      },
      {
        "src": "products/lzd-16158828472-06.webp",
        "alt": {
          "en": "Additional view 6 of Long Batwing Dress Small Paisley Pattern Beautiful And Stylish",
          "th": "ภาพเพิ่มเติม 6 ของ เดรสยาวทรงปีกค้างคาว ลายลูกน้ำเล็ก สวยแบบมีสไตล์"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "🌿✨ Long bat wing style dress. small paisley pattern Beautiful and stylish ✨🌿 Beautiful flowing design Wear it and you will look tall and slender. Hides the figure well Comfortable to wear with every movement Wear it to the beach, cafe, or on a relaxing day, it will look beautiful and expensive 💃 🧡 Small paisley pattern, beautiful details, looks unique. ✨ Bat wing shape Helps conceal the upper arms and torso ✨ V-neck helps make the look look slimmer. ✨ There is a drawstring at the waist to adjust the shape. ✨ Flowy fabric, comfortable to wear, not hot. 🌈 There are many colors to choose from. 📏 Chest can fit 32-54 inches. 📏 Length 52 inches ✨ Free size, can be worn beautifully in many shapes. 💕 Wear it and get a bohemian girl look. Looks sweet but charming Pair it with a hat or high heels for complete beauty in one outfit ✨",
      "th": "🌿✨ เดรสยาวทรงปีกค้างคาว ลายลูกน้ำเล็ก สวยแบบมีสไตล์ ✨🌿 ดีไซน์พลิ้วสวย ใส่แล้วดูสูงโปร่ง พรางหุ่นได้ดี ใส่สบายทุกการเคลื่อนไหว จะใส่เที่ยวทะเล คาเฟ่ หรือวันพักผ่อนก็สวยดูแพง 💃 🧡 ลายลูกน้ำเล็ก ดีเทลสวย ดูมีเอกลักษณ์ ✨ ทรงปีกค้างคาว ช่วยพรางต้นแขนและช่วงตัว ✨ คอวีช่วยให้ลุคดูเพรียว ✨ มีเชือกรูดเอว ปรับทรงได้ ✨ ผ้าพริ้ว ใส่สบาย ไม่ร้อน 🌈 มีหลายสีให้เลือก 📏 อกใส่ได้ 32-54 นิ้ว 📏 ความยาว 52 นิ้ว ✨ ฟรีไซซ์ ใส่สวยได้หลายรูปร่าง 💕 ใส่แล้วได้ลุคสาวโบฮีเมียน ดูอ่อนหวานแต่มีเสน่ห์ แมทช์กับหมวกหรือรองเท้าส้นสูงก็สวยครบจบในชุดเดียว ✨"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16158828472-s127169262413.html"
    }
  },
  {
    "code": "LZD-16171691640",
    "name": {
      "en": "Classic Shoulder Bag, Black And White Pattern",
      "th": "กระเป๋าย่ามสะพายข้าง ทรงคลาสสิค ลายสีขาวดำ"
    },
    "category": "bags",
    "is_new": false,
    "price": 399,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "See available options",
        "th": "ดูตัวเลือกที่มี"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "See the Lazada listing for available options",
          "th": "ดูตัวเลือกขนาดที่มีในหน้าสินค้า Lazada"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16171691640-01.webp",
        "alt": {
          "en": "Main view of Classic Shoulder Bag, Black And White Pattern",
          "th": "ภาพหลักของ กระเป๋าย่ามสะพายข้าง ทรงคลาสสิค ลายสีขาวดำ"
        }
      },
      {
        "src": "products/lzd-16171691640-02.webp",
        "alt": {
          "en": "Additional view 2 of Classic Shoulder Bag, Black And White Pattern",
          "th": "ภาพเพิ่มเติม 2 ของ กระเป๋าย่ามสะพายข้าง ทรงคลาสสิค ลายสีขาวดำ"
        }
      },
      {
        "src": "products/lzd-16171691640-03.webp",
        "alt": {
          "en": "Additional view 3 of Classic Shoulder Bag, Black And White Pattern",
          "th": "ภาพเพิ่มเติม 3 ของ กระเป๋าย่ามสะพายข้าง ทรงคลาสสิค ลายสีขาวดำ"
        }
      },
      {
        "src": "products/lzd-16171691640-04.webp",
        "alt": {
          "en": "Additional view 4 of Classic Shoulder Bag, Black And White Pattern",
          "th": "ภาพเพิ่มเติม 4 ของ กระเป๋าย่ามสะพายข้าง ทรงคลาสสิค ลายสีขาวดำ"
        }
      },
      {
        "src": "products/lzd-16171691640-05.webp",
        "alt": {
          "en": "Additional view 5 of Classic Shoulder Bag, Black And White Pattern",
          "th": "ภาพเพิ่มเติม 5 ของ กระเป๋าย่ามสะพายข้าง ทรงคลาสสิค ลายสีขาวดำ"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "🖤🤍 Chic fabric satchel bag. Must have for hip people! Cool black and white pattern. Easy to match with every look. Whether it's a travel type, a cafe type or a chill type, you can carry it all. ✨ ✔️ Large bag can hold a lot of things. ✔️ Long shoulder strap, comfortable to wear. ✔️ Soft, lightweight fabric ✔️ Handmade, unique boho vintage style. Wear it and you'll get an artistic feel. Cool with style 🌿 There are many patterns and styles ready to ship 💕 #Tote bag #Shoulder bag #Cloth bag #Boho bag #Vintage bag #fashion bags #Handmade fabric work #hip bag #cafe line #women's fashion",
      "th": "🖤🤍 กระเป๋าย่ามผ้าสุดชิค สายฮิปต้องมี! ลายขาวดำเท่ๆ แมทช์ง่ายได้ทุกลุค จะสายเที่ยว สายคาเฟ่ หรือสายชิลก็สะพายได้หมด ✨ ✔️ ใบใหญ่ จุของได้เยอะ ✔️ สายสะพายยาว ใส่สบาย ✔️ ผ้านิ่ม น้ำหนักเบา ✔️ งานแฮนด์เมด สไตล์โบโฮวินเทจไม่ซ้ำใคร สะพายแล้วได้ฟีลสายอาร์ต เท่แบบมีสไตล์ 🌿 มีหลายลาย หลายแบบ พร้อมส่งค่า 💕 #กระเป๋าย่าม #กระเป๋าสะพาย #กระเป๋าผ้า #กระเป๋าโบโฮ #กระเป๋าวินเทจ #กระเป๋าแฟชั่น #งานผ้าแฮนด์เมด #กระเป๋าสายฮิป #สายคาเฟ่ #แฟชั่นผู้หญิง"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16171691640-s127214515908.html"
    }
  },
  {
    "code": "LZD-16185760272",
    "name": {
      "en": "Long Dress, Batwing, Peacock Wing Pattern, Waist Tie",
      "th": "เดรสยาว ทรงปีกค้างคาว ลายปีกนกยูง เชือกผูกเอว"
    },
    "category": "dresses",
    "is_new": false,
    "price": 259,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "Orange",
        "th": "KTL501 สีส้ม"
      },
      {
        "en": "Red",
        "th": "KTL502 สีแดง"
      },
      {
        "en": "สีบานเย็น",
        "th": "KTL503 สีบานเย็น"
      },
      {
        "en": "Sky Blue",
        "th": "KTL504 สีฟ้า"
      },
      {
        "en": "Blue",
        "th": "KTL505 สีน้ำเงิน"
      },
      {
        "en": "Black and White",
        "th": "KTL506 สีดำขาว"
      },
      {
        "en": "White and Black",
        "th": "KTL507 สีขาวดำ"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "52 in",
          "th": "🌸 ความยาว 52 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16185760272-01.webp",
        "alt": {
          "en": "Main view of Long Dress, Batwing, Peacock Wing Pattern, Waist Tie",
          "th": "ภาพหลักของ เดรสยาว ทรงปีกค้างคาว ลายปีกนกยูง เชือกผูกเอว"
        }
      },
      {
        "src": "products/lzd-16185760272-02.webp",
        "alt": {
          "en": "Additional view 2 of Long Dress, Batwing, Peacock Wing Pattern, Waist Tie",
          "th": "ภาพเพิ่มเติม 2 ของ เดรสยาว ทรงปีกค้างคาว ลายปีกนกยูง เชือกผูกเอว"
        }
      },
      {
        "src": "products/lzd-16185760272-03.webp",
        "alt": {
          "en": "Additional view 3 of Long Dress, Batwing, Peacock Wing Pattern, Waist Tie",
          "th": "ภาพเพิ่มเติม 3 ของ เดรสยาว ทรงปีกค้างคาว ลายปีกนกยูง เชือกผูกเอว"
        }
      },
      {
        "src": "products/lzd-16185760272-04.webp",
        "alt": {
          "en": "Additional view 4 of Long Dress, Batwing, Peacock Wing Pattern, Waist Tie",
          "th": "ภาพเพิ่มเติม 4 ของ เดรสยาว ทรงปีกค้างคาว ลายปีกนกยูง เชือกผูกเอว"
        }
      },
      {
        "src": "products/lzd-16185760272-05.webp",
        "alt": {
          "en": "Additional view 5 of Long Dress, Batwing, Peacock Wing Pattern, Waist Tie",
          "th": "ภาพเพิ่มเติม 5 ของ เดรสยาว ทรงปีกค้างคาว ลายปีกนกยูง เชือกผูกเอว"
        }
      },
      {
        "src": "products/lzd-16185760272-06.webp",
        "alt": {
          "en": "Additional view 6 of Long Dress, Batwing, Peacock Wing Pattern, Waist Tie",
          "th": "ภาพเพิ่มเติม 6 ของ เดรสยาว ทรงปีกค้างคาว ลายปีกนกยูง เชือกผูกเอว"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "✨ Long bat wing style dress. \"Peacock Wing Pattern\" Easy to wear, very good at camouflaging the figure. Wear it and it flows beautifully. Looks stylish like a bohemian girl. 🌸 Chest 34-54 inches 🌸 Length 52 inches 🌸 Loose fit, comfortable to wear, not tight. 🌸 There is a drawstring at the waist. Adjust as needed 🌸 Flowing fabric, wear it when traveling, wear it to the beach, wear it to a cafe, or wear it at home. It's beautiful.",
      "th": "✨ เดรสยาวทรงปีกค้างคาว \"ลายปีกนกยูง\" ใส่ง่าย พรางหุ่นเก่งมาก ใส่แล้วพลิ้วสวย ดูมีสไตล์แบบสาวโบฮีเมียน 🌸 อก 34-54 นิ้ว 🌸 ความยาว 52 นิ้ว 🌸 ทรงหลวมใส่สบาย ไม่รัดตัว 🌸 มีเชือกรูดเอว ปรับได้ตามต้องการ 🌸 ผ้าพริ้ว ใส่เที่ยว ใส่ไปทะเล ใส่คาเฟ่ หรือใส่อยู่บ้านก็สวย"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16185760272-s127270309215.html"
    }
  },
  {
    "code": "LZD-4397918293",
    "name": {
      "en": "Dress, Flared Hem Dress, Patchwork Fabric, Cotton Dress, Umbrella Dress, Curved Hem Dress, Umbrella Dress, Dyed Dress, Dress",
      "th": "ชุดแซ่ก ชุดชายบาน ผ้าตัดต่อ ชุดแซ่กผ้าค๊อตต๊อน ชุดแซ่กร่ม ชุดแซ่กชายโค้ง ชุดร่ม ชุดย้อม ชุดเดรส"
    },
    "category": "dresses",
    "is_new": false,
    "price": 299,
    "fabric": {
      "en": "Cotton",
      "th": "ผ้าคอตตอน"
    },
    "colours": [
      {
        "en": "CDD Blue",
        "th": "CDD Blue"
      },
      {
        "en": "CDD Brown",
        "th": "CDD Brown"
      },
      {
        "en": "CDD Green",
        "th": "CDD Green"
      },
      {
        "en": "CDD Yellow",
        "th": "CDD Yellow"
      },
      {
        "en": "CDD Maroon",
        "th": "CDD Maroon"
      },
      {
        "en": "CDD Orange",
        "th": "CDD Orange"
      },
      {
        "en": "CDD Sea",
        "th": "CDD Sea"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "ฟรีไซส์"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-4397918293-01.webp",
        "alt": {
          "en": "Main view of Dress, Flared Hem Dress, Patchwork Fabric, Cotton Dress, Umbrella Dress, Curved Hem Dress, Umbrella Dress, Dyed Dress, Dress",
          "th": "ภาพหลักของ ชุดแซ่ก ชุดชายบาน ผ้าตัดต่อ ชุดแซ่กผ้าค๊อตต๊อน ชุดแซ่กร่ม ชุดแซ่กชายโค้ง ชุดร่ม ชุดย้อม ชุดเดรส"
        }
      },
      {
        "src": "products/lzd-4397918293-02.webp",
        "alt": {
          "en": "Additional view 2 of Dress, Flared Hem Dress, Patchwork Fabric, Cotton Dress, Umbrella Dress, Curved Hem Dress, Umbrella Dress, Dyed Dress, Dress",
          "th": "ภาพเพิ่มเติม 2 ของ ชุดแซ่ก ชุดชายบาน ผ้าตัดต่อ ชุดแซ่กผ้าค๊อตต๊อน ชุดแซ่กร่ม ชุดแซ่กชายโค้ง ชุดร่ม ชุดย้อม ชุดเดรส"
        }
      },
      {
        "src": "products/lzd-4397918293-03.webp",
        "alt": {
          "en": "Additional view 3 of Dress, Flared Hem Dress, Patchwork Fabric, Cotton Dress, Umbrella Dress, Curved Hem Dress, Umbrella Dress, Dyed Dress, Dress",
          "th": "ภาพเพิ่มเติม 3 ของ ชุดแซ่ก ชุดชายบาน ผ้าตัดต่อ ชุดแซ่กผ้าค๊อตต๊อน ชุดแซ่กร่ม ชุดแซ่กชายโค้ง ชุดร่ม ชุดย้อม ชุดเดรส"
        }
      },
      {
        "src": "products/lzd-4397918293-04.webp",
        "alt": {
          "en": "Additional view 4 of Dress, Flared Hem Dress, Patchwork Fabric, Cotton Dress, Umbrella Dress, Curved Hem Dress, Umbrella Dress, Dyed Dress, Dress",
          "th": "ภาพเพิ่มเติม 4 ของ ชุดแซ่ก ชุดชายบาน ผ้าตัดต่อ ชุดแซ่กผ้าค๊อตต๊อน ชุดแซ่กร่ม ชุดแซ่กชายโค้ง ชุดร่ม ชุดย้อม ชุดเดรส"
        }
      },
      {
        "src": "products/lzd-4397918293-05.webp",
        "alt": {
          "en": "Additional view 5 of Dress, Flared Hem Dress, Patchwork Fabric, Cotton Dress, Umbrella Dress, Curved Hem Dress, Umbrella Dress, Dyed Dress, Dress",
          "th": "ภาพเพิ่มเติม 5 ของ ชุดแซ่ก ชุดชายบาน ผ้าตัดต่อ ชุดแซ่กผ้าค๊อตต๊อน ชุดแซ่กร่ม ชุดแซ่กชายโค้ง ชุดร่ม ชุดย้อม ชุดเดรส"
        }
      },
      {
        "src": "products/lzd-4397918293-06.webp",
        "alt": {
          "en": "Additional view 6 of Dress, Flared Hem Dress, Patchwork Fabric, Cotton Dress, Umbrella Dress, Curved Hem Dress, Umbrella Dress, Dyed Dress, Dress",
          "th": "ภาพเพิ่มเติม 6 ของ ชุดแซ่ก ชุดชายบาน ผ้าตัดต่อ ชุดแซ่กผ้าค๊อตต๊อน ชุดแซ่กร่ม ชุดแซ่กชายโค้ง ชุดร่ม ชุดย้อม ชุดเดรส"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Cotton saree dress. Dyed saree is made from natural fibers. which is a cloth that does not make you feel hot after wearing it and irritation because it is well ventilated It's a vintage, bohemian style shirt imported from India. Wear it when traveling and it looks beautiful and unusual. Go for a walk and wear it at home. Or wear it as pajamas, it's comfortable. Can be worn by both people with slim figures. or a plump person Free size, chest 30 - 54 inches, length 40 inches. Every product is inspected before sending. ***If there is a problem with the product Don't just press deduct points. Please notify the shop first*** Thank you to everyone who has come to place an order with products from our store.",
      "th": "เสื้อชุดแซ่กผ้าค๊อตต๊อน ชุดแซ่กย้อม เป็นผ้าจากใยธรรมชาติ ซึ่งเป็นผ้าที่ใส่แล้วไม่ทำให้รู้สึกไม่ร้อน และระคายเคืองเพราะระบายอากาศได้ดี เป็นเสื้อแนววินเทจ แนวโบฮีเมียน นำเข้าจากอินเดีย ใส่ไปเที่ยวก็ดูสวยเด่นแปลกตา ไปเดินเล่น ใส่อยู่กับบ้าน หรือจะใส่เป็นชุดนอนก็สบายๆ ใส่ได้ทั้งคนหุ่นเพรียว หรือคนอวบอ้วน ฟรีไซส์ อก 30 - 54 นิ้ว ยาว 40 นิ้ว มีการตรวจสินค้าก่อนส่งทุกชิ้น ***หากมีปัญหากับสินค้า อย่างเพิ่งกดหักคะแนน ให้แจ้งมาทางร้านก่อนนะคะ*** ขอบคุณทุกๆท่านที่ได้เข้ามาทำการกดสั่งซื้อกับสินค้าทางร้านของเราค่ะ"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i4397918293-s17532228204.html"
    }
  },
  {
    "code": "LZD-16170033844",
    "name": {
      "en": "Short Batwing Dress, Two-Tone Thai Pattern, Soft And Comfortable Fabric",
      "th": "เดรสสั้นทรงปีกค้างคาว ลายไทยทูโทน ผ้านุ่มสบาย"
    },
    "category": "dresses",
    "is_new": false,
    "price": 199,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "Sky Blue",
        "th": "KTS1801 ฟ้าเขียว"
      },
      {
        "en": "Sky Blue",
        "th": "KTS1802 บานเย็นฟ้า"
      },
      {
        "en": "Blue",
        "th": "KTS1803 ฟ้าน้ำเงิน"
      },
      {
        "en": "Sky Blue",
        "th": "KTS1804 ฟ้าทะเลแดง"
      },
      {
        "en": "Purple",
        "th": "KTS1805 ม่วงเขียว"
      },
      {
        "en": "Red",
        "th": "KTS1806 เหลืองแดง"
      },
      {
        "en": "Sky Blue",
        "th": "KTS1807 ฟ้าทะเลม่วง"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "Approx. 34–54 in / 86–137 cm",
          "th": "อก 34-54 นิ้ว (ประมาณ 86-137 ซม.)"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "Approx. 34 in / 86 cm",
          "th": "ยาว 34 นิ้ว (ประมาณ 86 ซม.)"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16170033844-01.webp",
        "alt": {
          "en": "Main view of Short Batwing Dress, Two-Tone Thai Pattern, Soft And Comfortable Fabric",
          "th": "ภาพหลักของ เดรสสั้นทรงปีกค้างคาว ลายไทยทูโทน ผ้านุ่มสบาย"
        }
      },
      {
        "src": "products/lzd-16170033844-02.webp",
        "alt": {
          "en": "Additional view 2 of Short Batwing Dress, Two-Tone Thai Pattern, Soft And Comfortable Fabric",
          "th": "ภาพเพิ่มเติม 2 ของ เดรสสั้นทรงปีกค้างคาว ลายไทยทูโทน ผ้านุ่มสบาย"
        }
      },
      {
        "src": "products/lzd-16170033844-03.webp",
        "alt": {
          "en": "Additional view 3 of Short Batwing Dress, Two-Tone Thai Pattern, Soft And Comfortable Fabric",
          "th": "ภาพเพิ่มเติม 3 ของ เดรสสั้นทรงปีกค้างคาว ลายไทยทูโทน ผ้านุ่มสบาย"
        }
      },
      {
        "src": "products/lzd-16170033844-04.webp",
        "alt": {
          "en": "Additional view 4 of Short Batwing Dress, Two-Tone Thai Pattern, Soft And Comfortable Fabric",
          "th": "ภาพเพิ่มเติม 4 ของ เดรสสั้นทรงปีกค้างคาว ลายไทยทูโทน ผ้านุ่มสบาย"
        }
      },
      {
        "src": "products/lzd-16170033844-05.webp",
        "alt": {
          "en": "Additional view 5 of Short Batwing Dress, Two-Tone Thai Pattern, Soft And Comfortable Fabric",
          "th": "ภาพเพิ่มเติม 5 ของ เดรสสั้นทรงปีกค้างคาว ลายไทยทูโทน ผ้านุ่มสบาย"
        }
      },
      {
        "src": "products/lzd-16170033844-06.webp",
        "alt": {
          "en": "Additional view 6 of Short Batwing Dress, Two-Tone Thai Pattern, Soft And Comfortable Fabric",
          "th": "ภาพเพิ่มเติม 6 ของ เดรสสั้นทรงปีกค้างคาว ลายไทยทูโทน ผ้านุ่มสบาย"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Short bat wing style dress Awesome boho pattern Wear it and you will look expensive and charming like a fashionable girl. Wear it to travel and it's beautiful. Wear it to chill and it's chic. Whether it's at the beach, at a cafe, or on a casual day, it can handle it. Flowing fabric, comfortable to wear, not hot. The style can be worn on many body shapes, concealing the arms, concealing the stomach. Wear it and you'll look extremely smaller. Size Chest 34-54 inches (approximately 86-137 cm.) Length 34 inches (approximately 86 cm.) Beautiful color work, outstanding pattern, very photogenic. Can be worn by both small size girls and plus size girls. It looks beautiful with sandals or boots. There are many colors and patterns, ready to ship ️",
      "th": "เดรสสั้นทรงปีกค้างคาว ลายโบโฮสุดปัง ใส่แล้วดูแพง มีเสน่ห์แบบสาวสายแฟชั่น ใส่เที่ยวก็สวย ใส่ชิลก็เก๋ จะทะเล คาเฟ่ หรือวันสบายๆ ก็เอาอยู่ เนื้อผ้าพริ้ว ใส่สบาย ไม่ร้อน ทรงปล่อยใส่ได้หลายหุ่น พรางแขน พรางหน้าท้อง ใส่แล้วดูตัวเล็กลงสุดๆ Size อก 34-54 นิ้ว (ประมาณ 86-137 ซม.) ยาว 34 นิ้ว (ประมาณ 86 ซม.) งานสีสวย ลายเด่น ถ่ายรูปขึ้นกล้องมาก ใส่ได้ทั้งสาวไซซ์เล็กและสาวพลัสไซซ์ แมทช์กับรองเท้าแตะหรือบูทก็สวย มีหลายสี หลายลาย พร้อมส่งค่า ️"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16170033844-s127209267599.html"
    }
  },
  {
    "code": "LZD-4401383564",
    "name": {
      "en": "Dress With Flared Hem, Cut Fabric 3 Buttoned Cotton Dress With Flared Hem, Cut Fabric Chinese Collar Dress",
      "th": "ชุดแซ่กชายบานผ้าตัดต่อ ชุดแซ่กชายบานคอจีน ผ้าค๊อตต๊อน 3 กระดุม // 3 Buttoned Cotton Dress with flared hem, cut fabric chinese collar dress"
    },
    "category": "dresses",
    "is_new": false,
    "price": 259,
    "fabric": {
      "en": "Cotton",
      "th": "ผ้าคอตตอน"
    },
    "colours": [
      {
        "en": "CBPD",
        "th": "CBPD"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "ฟรีไซส์"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-4401383564-01.webp",
        "alt": {
          "en": "Main view of Dress With Flared Hem, Cut Fabric 3 Buttoned Cotton Dress With Flared Hem, Cut Fabric Chinese Collar Dress",
          "th": "ภาพหลักของ ชุดแซ่กชายบานผ้าตัดต่อ ชุดแซ่กชายบานคอจีน ผ้าค๊อตต๊อน 3 กระดุม // 3 Buttoned Cotton Dress with flared hem, cut fabric chinese collar dress"
        }
      },
      {
        "src": "products/lzd-4401383564-02.webp",
        "alt": {
          "en": "Additional view 2 of Dress With Flared Hem, Cut Fabric 3 Buttoned Cotton Dress With Flared Hem, Cut Fabric Chinese Collar Dress",
          "th": "ภาพเพิ่มเติม 2 ของ ชุดแซ่กชายบานผ้าตัดต่อ ชุดแซ่กชายบานคอจีน ผ้าค๊อตต๊อน 3 กระดุม // 3 Buttoned Cotton Dress with flared hem, cut fabric chinese collar dress"
        }
      },
      {
        "src": "products/lzd-4401383564-03.webp",
        "alt": {
          "en": "Additional view 3 of Dress With Flared Hem, Cut Fabric 3 Buttoned Cotton Dress With Flared Hem, Cut Fabric Chinese Collar Dress",
          "th": "ภาพเพิ่มเติม 3 ของ ชุดแซ่กชายบานผ้าตัดต่อ ชุดแซ่กชายบานคอจีน ผ้าค๊อตต๊อน 3 กระดุม // 3 Buttoned Cotton Dress with flared hem, cut fabric chinese collar dress"
        }
      },
      {
        "src": "products/lzd-4401383564-04.webp",
        "alt": {
          "en": "Additional view 4 of Dress With Flared Hem, Cut Fabric 3 Buttoned Cotton Dress With Flared Hem, Cut Fabric Chinese Collar Dress",
          "th": "ภาพเพิ่มเติม 4 ของ ชุดแซ่กชายบานผ้าตัดต่อ ชุดแซ่กชายบานคอจีน ผ้าค๊อตต๊อน 3 กระดุม // 3 Buttoned Cotton Dress with flared hem, cut fabric chinese collar dress"
        }
      },
      {
        "src": "products/lzd-4401383564-05.webp",
        "alt": {
          "en": "Additional view 5 of Dress With Flared Hem, Cut Fabric 3 Buttoned Cotton Dress With Flared Hem, Cut Fabric Chinese Collar Dress",
          "th": "ภาพเพิ่มเติม 5 ของ ชุดแซ่กชายบานผ้าตัดต่อ ชุดแซ่กชายบานคอจีน ผ้าค๊อตต๊อน 3 กระดุม // 3 Buttoned Cotton Dress with flared hem, cut fabric chinese collar dress"
        }
      },
      {
        "src": "products/lzd-4401383564-06.webp",
        "alt": {
          "en": "Additional view 6 of Dress With Flared Hem, Cut Fabric 3 Buttoned Cotton Dress With Flared Hem, Cut Fabric Chinese Collar Dress",
          "th": "ภาพเพิ่มเติม 6 ของ ชุดแซ่กชายบานผ้าตัดต่อ ชุดแซ่กชายบานคอจีน ผ้าค๊อตต๊อน 3 กระดุม // 3 Buttoned Cotton Dress with flared hem, cut fabric chinese collar dress"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Dress with flared hem, cut fabric A sarong dress with a Chinese collar. Cotton fabric with 3 buttons. A sarong dress shirt cut in cotton fabric. It is a fabric from natural fibers. which is a cloth that does not make you feel hot after wearing it and irritation because it is well ventilated It's a vintage style shirt with a bohemian style. Wear it when traveling and it will look beautiful and unusual. Go for a walk and wear it at home. Or wear it as pajamas, it's comfortable. Can be worn by both people with slim figures. or a plump person Free size, can fit from chest 32 - 54'' inches, length 40 inches. *****Please read and understand before ordering**** *Every edited fabric product is different* because edited fabric is fabric that is cut together from fabric scraps until it becomes a large roll of fabric. Then they are cut into different sets. Therefore, the pattern of each shirt is different. It will not be the same as the sample set according to the illustration shown on the page. Every product is inspected before sending. ***If there is a problem with the product Don't just press deduct points. Please notify the shop first*** Thank you to everyone who has come to place an order with products from our store.",
      "th": "ชุดแซ่กชายบานผ้าตัดต่อ ชุดแซ่กชายบานคอจีน ผ้าค๊อตต๊อน 3 กระดุม เสื้อชุดแซ่กแนวตัดต่อด้วยผ้าค๊อตต๊อน เป็นผ้าจากใยธรรมชาติ ซึ่งเป็นผ้าที่ใส่แล้วไม่ทำให้รู้สึกไม่ร้อน และระคายเคืองเพราะระบายอากาศได้ดี เป็นเสื้อแนววินเทจ แนวโบฮีเมียน ใส่ไปเที่ยวก็ดูสวยเด่นแปลกตา ไปเดินเล่น ใส่อยู่กับบ้าน หรือจะใส่เป็นชุดนอนก็สบายๆ ใส่ได้ทั้งคนหุ่นเพรียว หรือคนอวบอ้วน ฟรีไซส์ ใส่ได้ตั้งแต่ อก 32 - 54'' นิ้ว ยาว 40 นิ้ว *****กรุณาอ่านและทำความเข้าใจก่อนกดสั่งซื้อ**** *สินค้าผ้าตัดต่อทุกชิ้นจะไม่เหมือนกัน* เพราะผ้าตัดต่อเป็นผ้าที่นำเศษผ้ามาตัดต่อกันจนเป็นผ้าม้วนผืนใหญ่ แล้วจึงนำมาตัดเป็นชุดต่างๆ ดังนั้นลายแต่ละลายของเสื้อแต่ละตัวจึงแตกต่างกันออกไป จะไม่เหมือนกันกับชุดตัวอย่างตามภาพประกอบที่โชว์ในเพจ มีการตรวจสินค้าก่อนส่งทุกชิ้น ***หากมีปัญหากับสินค้า อย่างเพิ่งกดหักคะแนน ให้แจ้งมาทางร้านก่อนนะคะ*** ขอบคุณทุกๆท่านที่ได้เข้ามาทำการกดสั่งซื้อกับสินค้าทางร้านของเราค่ะ"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/3-3-buttoned-cotton-dress-with-flared-hem-cut-fabric-chinese-collar-dress-i4401383564-s17547895895.html"
    }
  },
  {
    "code": "LZD-16083397012",
    "name": {
      "en": "Bohemian Style Short Bat Shirt With Peony Pattern And Drawstring To Adjust The Waist",
      "th": "เสื้อค้างคาวตัวสั้นสไตล์โบฮีเมียน ลายดอกโบตั๋น พร้อมเชือกรูดปรับเอว"
    },
    "category": "tops",
    "is_new": false,
    "price": 199,
    "fabric": {
      "en": "Peach-skin fabric",
      "th": "ผ้าพีชสกิน"
    },
    "colours": [
      {
        "en": "Pink",
        "th": "KTS901 สีชมพูบานเย็น"
      },
      {
        "en": "Black",
        "th": "KTS902 สีเหลืองดำ"
      },
      {
        "en": "Blue",
        "th": "KTS903 สีฟ้าน้ำเงิน"
      },
      {
        "en": "Sky Blue",
        "th": "KTS904 สีฟ้าชมพูดำ"
      },
      {
        "en": "Red",
        "th": "KTS905 สีเหลืองแดง"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "35 in / 90 cm",
          "th": "ความยาวเสื้อ : 35 นิ้ว (90 ซม.)"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "Fits 56 in / 142 cm",
          "th": "รอบอก : ใส่ได้ถึง 56 นิ้ว (142 ซม.)"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16083397012-01.webp",
        "alt": {
          "en": "Main view of Bohemian Style Short Bat Shirt With Peony Pattern And Drawstring To Adjust The Waist",
          "th": "ภาพหลักของ เสื้อค้างคาวตัวสั้นสไตล์โบฮีเมียน ลายดอกโบตั๋น พร้อมเชือกรูดปรับเอว"
        }
      },
      {
        "src": "products/lzd-16083397012-02.webp",
        "alt": {
          "en": "Additional view 2 of Bohemian Style Short Bat Shirt With Peony Pattern And Drawstring To Adjust The Waist",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อค้างคาวตัวสั้นสไตล์โบฮีเมียน ลายดอกโบตั๋น พร้อมเชือกรูดปรับเอว"
        }
      },
      {
        "src": "products/lzd-16083397012-03.webp",
        "alt": {
          "en": "Additional view 3 of Bohemian Style Short Bat Shirt With Peony Pattern And Drawstring To Adjust The Waist",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อค้างคาวตัวสั้นสไตล์โบฮีเมียน ลายดอกโบตั๋น พร้อมเชือกรูดปรับเอว"
        }
      },
      {
        "src": "products/lzd-16083397012-04.webp",
        "alt": {
          "en": "Additional view 4 of Bohemian Style Short Bat Shirt With Peony Pattern And Drawstring To Adjust The Waist",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อค้างคาวตัวสั้นสไตล์โบฮีเมียน ลายดอกโบตั๋น พร้อมเชือกรูดปรับเอว"
        }
      },
      {
        "src": "products/lzd-16083397012-05.webp",
        "alt": {
          "en": "Additional view 5 of Bohemian Style Short Bat Shirt With Peony Pattern And Drawstring To Adjust The Waist",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อค้างคาวตัวสั้นสไตล์โบฮีเมียน ลายดอกโบตั๋น พร้อมเชือกรูดปรับเอว"
        }
      },
      {
        "src": "products/lzd-16083397012-06.webp",
        "alt": {
          "en": "Additional view 6 of Bohemian Style Short Bat Shirt With Peony Pattern And Drawstring To Adjust The Waist",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อค้างคาวตัวสั้นสไตล์โบฮีเมียน ลายดอกโบตั๋น พร้อมเชือกรูดปรับเอว"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "🌺 Short Kaftan bat shirt, peony pattern, with drawstring to adjust the waist 🌺 Beautiful, comfortable to wear, looks good on every body Kaftan style shirt (kaftan), a bat-shaped design that is known for its comfort and elegance. Easy to wear, loose and flowy shape, looks good in an effortless style. Features a peony flower pattern that gives a feeling of luxury, sweetness, and charm. Suitable for traveling, relaxing, going to a cafe, or wearing as a beautiful resort outfit. ✨ Product highlights • Kaftan design, bat shape, comfortable to wear, not uncomfortable. • Drawstring to adjust waist size. Adjust to fit the desired style. • Can be worn by women with thin bodies to plump women. • The peony flower pattern is beautiful and outstanding, giving an expensive look. • The fabric is soft, smooth, light, comfortable to wear, not hot. 👗 Fabric Polyester Peach Skin Soft, smooth fabric, good texture, good ventilation, comfortable to wear all day. 📏 Product size • Shirt length: 35 inches (90 cm.) • Chest circumference: fits up to 56 inches (142 cm.) 💎 With a Kaftan design that is a popular fashion around the world. Make this shirt a comfortable shirt, but still look beautiful and stylish.",
      "th": "🌺 เสื้อค้างคาว Kaftan ตัวสั้น ลายดอกโบตั๋น พร้อมเชือกรูดปรับเอว 🌺 สวย ใส่สบาย ดูดีทุกสรีระ เสื้อสไตล์ Kaftan (คาฟตัน) ดีไซน์ทรงค้างคาวที่ขึ้นชื่อเรื่องความใส่สบายและความสง่างาม สวมใส่ง่าย ทรงหลวมพลิ้ว ใส่แล้วดูดีแบบ effortless style โดดเด่นด้วย ลายดอกโบตั๋น ที่ให้ความรู้สึกหรูหรา อ่อนหวาน และมีเสน่ห์ เหมาะสำหรับใส่เที่ยว ใส่พักผ่อน ใส่ไปคาเฟ่ หรือใส่เป็นชุดรีสอร์ทสวย ๆ ✨ จุดเด่นของสินค้า • ดีไซน์ Kaftan ทรงค้างคาว ใส่สบาย ไม่อึดอัด • เชือกรูดปรับขนาดเอวได้ ปรับเข้ารูปตามสไตล์ที่ต้องการ • ใส่ได้ตั้งแต่ สาวหุ่นบาง ไปจนถึงสาวอวบ • ลายดอกโบตั๋นสวยโดดเด่น ให้ลุคดูแพง • เนื้อผ้านุ่ม ลื่น เบา ใส่สบาย ไม่ร้อน 👗 เนื้อผ้า โพลีเอสเตอร์พีชสกิน เนื้อผ้านุ่ม ลื่น ผิวสัมผัสดี ระบายอากาศดี ใส่สบายตลอดวัน 📏 ขนาดสินค้า • ความยาวเสื้อ : 35 นิ้ว (90 ซม.) • รอบอก : ใส่ได้ถึง 56 นิ้ว (142 ซม.) 💎 ด้วยดีไซน์แบบ Kaftan ที่เป็นแฟชั่นยอดนิยมทั่วโลก ทำให้เสื้อตัวนี้เป็นเสื้อที่ ใส่สบาย แต่ยังดูสวยและมีสไตล์"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16083397012-s126673107859.html"
    }
  },
  {
    "code": "LZD-16164282992",
    "name": {
      "en": "Long Dress, Batwing, Thai Modern Pattern, Waist Tie, One Size",
      "th": "เดรสยาว ทรงปีกค้างคาว ลายไทยโมเดิล เชือกผูกเอว ฟรีไซส์"
    },
    "category": "dresses",
    "is_new": false,
    "price": 259,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "Black",
        "th": "KTL401ดำครีม"
      },
      {
        "en": "Red",
        "th": "KTL402 แดง"
      },
      {
        "en": "White and Black",
        "th": "KTL403 ขาวดำ"
      },
      {
        "en": "Pink",
        "th": "KTL404 ชมพู"
      },
      {
        "en": "Sky Blue",
        "th": "KTL405 ฟ้า"
      },
      {
        "en": "Navy",
        "th": "KTL406 กรมท่า"
      },
      {
        "en": "Brown",
        "th": "KTL407 น้ำตาล"
      },
      {
        "en": "Black",
        "th": "KTL408 ดำ"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "Fits 32–54 in",
          "th": "อกใส่ได้ 32-54 นิ้ว"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "52 in",
          "th": "ความยาว 52 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16164282992-01.webp",
        "alt": {
          "en": "Main view of Long Dress, Batwing, Thai Modern Pattern, Waist Tie, One Size",
          "th": "ภาพหลักของ เดรสยาว ทรงปีกค้างคาว ลายไทยโมเดิล เชือกผูกเอว ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16164282992-02.webp",
        "alt": {
          "en": "Additional view 2 of Long Dress, Batwing, Thai Modern Pattern, Waist Tie, One Size",
          "th": "ภาพเพิ่มเติม 2 ของ เดรสยาว ทรงปีกค้างคาว ลายไทยโมเดิล เชือกผูกเอว ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16164282992-03.webp",
        "alt": {
          "en": "Additional view 3 of Long Dress, Batwing, Thai Modern Pattern, Waist Tie, One Size",
          "th": "ภาพเพิ่มเติม 3 ของ เดรสยาว ทรงปีกค้างคาว ลายไทยโมเดิล เชือกผูกเอว ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16164282992-04.webp",
        "alt": {
          "en": "Additional view 4 of Long Dress, Batwing, Thai Modern Pattern, Waist Tie, One Size",
          "th": "ภาพเพิ่มเติม 4 ของ เดรสยาว ทรงปีกค้างคาว ลายไทยโมเดิล เชือกผูกเอว ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16164282992-05.webp",
        "alt": {
          "en": "Additional view 5 of Long Dress, Batwing, Thai Modern Pattern, Waist Tie, One Size",
          "th": "ภาพเพิ่มเติม 5 ของ เดรสยาว ทรงปีกค้างคาว ลายไทยโมเดิล เชือกผูกเอว ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16164282992-06.webp",
        "alt": {
          "en": "Additional view 6 of Long Dress, Batwing, Thai Modern Pattern, Waist Tie, One Size",
          "th": "ภาพเพิ่มเติม 6 ของ เดรสยาว ทรงปีกค้างคาว ลายไทยโมเดิล เชือกผูกเอว ฟรีไซส์"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Long bat wing style dress Wear it and camouflage your beautiful figure and look expensive in an effortless way. Flowing fabric, comfortable to wear. V-neck design helps make the look look slimmer. Easy to match. Wear it out, wear it to a cafe, or wear it to work. It's all beautiful. There are many colors to choose from. Chest can fit 32-54 inches. Length 52 inches Free size, comfortable to wear, not tight. bat wing sleeve Helps conceal the upper arms and torso Beautiful draping Wear it and you will look stylish. Sweet people, chill people, or plus size girls can wear it all beautifully. Just put it on and you're done. Looks good with class from every angle.",
      "th": "เดรสยาวทรงปีกค้างคาว ใส่แล้วพรางหุ่นสวย ดูแพงแบบ effortless ผ้าพริ้วใส่สบาย ดีไซน์คอวีช่วยให้ลุคดูเพรียว แมทช์ง่าย ใส่เที่ยว ใส่คาเฟ่ หรือใส่ทำงานก็สวยครบ มีหลายสีให้เลือก อกใส่ได้ 32-54 นิ้ว ความยาว 52 นิ้ว ทรงฟรีไซซ์ ใส่สบาย ไม่รัดตัว แขนปีกค้างคาว ช่วยพรางต้นแขนและช่วงตัว ผ้าทิ้งตัวสวย ใส่แล้วดูมีสไตล์ สายหวาน สายชิล หรือสาวพลัสไซซ์ ใส่ได้สวยหมด ใส่ตัวเดียวจบ ดูดีแบบมีคลาสทุกมุม"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16164282992-s127195192289.html"
    }
  },
  {
    "code": "LZD-16156337771",
    "name": {
      "en": "Short Dress, Batwing, Ruched Waist, Persian Flower Pattern, One Size",
      "th": "เดรสสั้น ทรงปีกค้างคาว เอวรูด ลายดอกเปอร์เซีย ฟรีไซส์"
    },
    "category": "dresses",
    "is_new": false,
    "price": 199,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "Red",
        "th": "KTS1401 แดง"
      },
      {
        "en": "White and Black",
        "th": "KTS1402 ขาวดำ"
      },
      {
        "en": "Brown",
        "th": "KTS1403 น้ำตาล"
      },
      {
        "en": "Navy",
        "th": "KTS1404 กรมท่า"
      },
      {
        "en": "Black and White",
        "th": "KTS1405 ดำขาว"
      },
      {
        "en": "เปลือกมังคุด",
        "th": "KTS1406 เปลือกมังคุด"
      },
      {
        "en": "Black",
        "th": "KTS1407 ดำลาย"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "Fits 34–54 in",
          "th": "รอบอกใสได้ขนาดตั้งแต่ 34 - 54 นิ้ว (ทรงเสื้อเป็นสี่เหลี่ยม อก เอว และสะโพกจึงมีขนาดเท่ากัน แต่ช่วงเอวมีเชือกรูดปรับขนาด จึงสามารถปรับขนาดเสื้อให้เข้าตามรูปร่างของผู้ใส่ได้)"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "34 in",
          "th": "ความยาว 34 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16156337771-01.webp",
        "alt": {
          "en": "Main view of Short Dress, Batwing, Ruched Waist, Persian Flower Pattern, One Size",
          "th": "ภาพหลักของ เดรสสั้น ทรงปีกค้างคาว เอวรูด ลายดอกเปอร์เซีย ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16156337771-02.webp",
        "alt": {
          "en": "Additional view 2 of Short Dress, Batwing, Ruched Waist, Persian Flower Pattern, One Size",
          "th": "ภาพเพิ่มเติม 2 ของ เดรสสั้น ทรงปีกค้างคาว เอวรูด ลายดอกเปอร์เซีย ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16156337771-03.webp",
        "alt": {
          "en": "Additional view 3 of Short Dress, Batwing, Ruched Waist, Persian Flower Pattern, One Size",
          "th": "ภาพเพิ่มเติม 3 ของ เดรสสั้น ทรงปีกค้างคาว เอวรูด ลายดอกเปอร์เซีย ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16156337771-04.webp",
        "alt": {
          "en": "Additional view 4 of Short Dress, Batwing, Ruched Waist, Persian Flower Pattern, One Size",
          "th": "ภาพเพิ่มเติม 4 ของ เดรสสั้น ทรงปีกค้างคาว เอวรูด ลายดอกเปอร์เซีย ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16156337771-05.webp",
        "alt": {
          "en": "Additional view 5 of Short Dress, Batwing, Ruched Waist, Persian Flower Pattern, One Size",
          "th": "ภาพเพิ่มเติม 5 ของ เดรสสั้น ทรงปีกค้างคาว เอวรูด ลายดอกเปอร์เซีย ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16156337771-06.webp",
        "alt": {
          "en": "Additional view 6 of Short Dress, Batwing, Ruched Waist, Persian Flower Pattern, One Size",
          "th": "ภาพเพิ่มเติม 6 ของ เดรสสั้น ทรงปีกค้างคาว เอวรูด ลายดอกเปอร์เซีย ฟรีไซส์"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Short batwing style shirt with drawstring at the waist. bohemian style Comfortable to wear. There is a drawstring at the waist to adjust the size to your body shape. Can be worn by both girls with slender figures or chubby girls with large figures. It's a simple, basic style shirt that's easy to wear, not hot, and can be worn around the house. Or wear it to go for a walk. Or wear it to travel and it looks good. Looks striking It's a Thai pattern. There are many patterns to choose from. Shirt size - Chest size from 34 - 54 inches (the shirt is square, so the chest, waist, and hips are the same size. But the waist has a drawstring to adjust the size. Therefore, the size of the shirt can be adjusted to fit the wearer's body shape) -Length 34 inches",
      "th": "เสื้อทรงปีกค้างคาวตัวสั้นมีเชือกรูดเอว สไตล์โบฮีเมียน สวมใส่สบาย มีเชือกรูดเอวปรับขนาดให้เข้ากับรูปร่าง ใส่ได้ทั้งสาวหุ่นเพรียวบาง หรือสาวอวบ รูปร่างใหญ่ เป็นเสื้อสไตล์เรียบๆ พื้นๆ ใส่ง่าย ไม่ร้อน ใส่อยู่กับบ้าน หรือจะใส่ไปเดินเล่น หรือจะใส่ไปเที่ยวก็ดูดี ดูเด่นสะดุดตา เป็นลายไทย มีหลายลายให้เลือก ขนาดเสื้อ -รอบอกใสได้ขนาดตั้งแต่ 34 - 54 นิ้ว (ทรงเสื้อเป็นสี่เหลี่ยม อก เอว และสะโพกจึงมีขนาดเท่ากัน แต่ช่วงเอวมีเชือกรูดปรับขนาด จึงสามารถปรับขนาดเสื้อให้เข้าตามรูปร่างของผู้ใส่ได้) -ความยาว 34 นิ้ว"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16156337771-s127164014591.html"
    }
  },
  {
    "code": "LZD-4398742015",
    "name": {
      "en": "Dress, Flared Hem Dress, Patchwork Fabric, Rayon Dress, Umbrella Dress, Curved Hem Dress, Umbrella Dress, Dyed Dress, Dress",
      "th": "ชุดแซ่ก ชุดชายบาน ผ้าตัดต่อ ชุดแซ่กผ้าเรยอน ชุดแซ่กร่ม ชุดแซ่กชายโค้ง ชุดร่ม ชุดย้อม ชุดเดรส"
    },
    "category": "dresses",
    "is_new": false,
    "price": 359,
    "fabric": {
      "en": "Rayon",
      "th": "ผ้าเรยอน"
    },
    "colours": [
      {
        "en": "RDD Black",
        "th": "RDD Black"
      },
      {
        "en": "RDD DColored",
        "th": "RDD DColored"
      },
      {
        "en": "RDD Green",
        "th": "RDD Green"
      },
      {
        "en": "RDD Nature",
        "th": "RDD Nature"
      },
      {
        "en": "RDD Pink",
        "th": "RDD Pink"
      },
      {
        "en": "RDD Red",
        "th": "RDD Red"
      },
      {
        "en": "RDD Yellow",
        "th": "RDD Yellow"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "ฟรีไซส์"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-4398742015-01.webp",
        "alt": {
          "en": "Main view of Dress, Flared Hem Dress, Patchwork Fabric, Rayon Dress, Umbrella Dress, Curved Hem Dress, Umbrella Dress, Dyed Dress, Dress",
          "th": "ภาพหลักของ ชุดแซ่ก ชุดชายบาน ผ้าตัดต่อ ชุดแซ่กผ้าเรยอน ชุดแซ่กร่ม ชุดแซ่กชายโค้ง ชุดร่ม ชุดย้อม ชุดเดรส"
        }
      },
      {
        "src": "products/lzd-4398742015-02.webp",
        "alt": {
          "en": "Additional view 2 of Dress, Flared Hem Dress, Patchwork Fabric, Rayon Dress, Umbrella Dress, Curved Hem Dress, Umbrella Dress, Dyed Dress, Dress",
          "th": "ภาพเพิ่มเติม 2 ของ ชุดแซ่ก ชุดชายบาน ผ้าตัดต่อ ชุดแซ่กผ้าเรยอน ชุดแซ่กร่ม ชุดแซ่กชายโค้ง ชุดร่ม ชุดย้อม ชุดเดรส"
        }
      },
      {
        "src": "products/lzd-4398742015-03.webp",
        "alt": {
          "en": "Additional view 3 of Dress, Flared Hem Dress, Patchwork Fabric, Rayon Dress, Umbrella Dress, Curved Hem Dress, Umbrella Dress, Dyed Dress, Dress",
          "th": "ภาพเพิ่มเติม 3 ของ ชุดแซ่ก ชุดชายบาน ผ้าตัดต่อ ชุดแซ่กผ้าเรยอน ชุดแซ่กร่ม ชุดแซ่กชายโค้ง ชุดร่ม ชุดย้อม ชุดเดรส"
        }
      },
      {
        "src": "products/lzd-4398742015-04.webp",
        "alt": {
          "en": "Additional view 4 of Dress, Flared Hem Dress, Patchwork Fabric, Rayon Dress, Umbrella Dress, Curved Hem Dress, Umbrella Dress, Dyed Dress, Dress",
          "th": "ภาพเพิ่มเติม 4 ของ ชุดแซ่ก ชุดชายบาน ผ้าตัดต่อ ชุดแซ่กผ้าเรยอน ชุดแซ่กร่ม ชุดแซ่กชายโค้ง ชุดร่ม ชุดย้อม ชุดเดรส"
        }
      },
      {
        "src": "products/lzd-4398742015-05.webp",
        "alt": {
          "en": "Additional view 5 of Dress, Flared Hem Dress, Patchwork Fabric, Rayon Dress, Umbrella Dress, Curved Hem Dress, Umbrella Dress, Dyed Dress, Dress",
          "th": "ภาพเพิ่มเติม 5 ของ ชุดแซ่ก ชุดชายบาน ผ้าตัดต่อ ชุดแซ่กผ้าเรยอน ชุดแซ่กร่ม ชุดแซ่กชายโค้ง ชุดร่ม ชุดย้อม ชุดเดรส"
        }
      },
      {
        "src": "products/lzd-4398742015-06.webp",
        "alt": {
          "en": "Additional view 6 of Dress, Flared Hem Dress, Patchwork Fabric, Rayon Dress, Umbrella Dress, Curved Hem Dress, Umbrella Dress, Dyed Dress, Dress",
          "th": "ภาพเพิ่มเติม 6 ของ ชุดแซ่ก ชุดชายบาน ผ้าตัดต่อ ชุดแซ่กผ้าเรยอน ชุดแซ่กร่ม ชุดแซ่กชายโค้ง ชุดร่ม ชุดย้อม ชุดเดรส"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Rayon saree dress shirt, dyed saree dress made from natural fibers. which is a cloth that does not feel hot when worn and irritation because it is well ventilated It's a vintage, bohemian style shirt imported from India. Wear it when traveling and it looks beautiful and unusual. Go for a walk and wear it at home. Or wear it as pajamas, it's comfortable. Can be worn by both people with slim figures. or a plump person Free size, chest 30 - 54 inches, length 40 inches. Every product is inspected before sending. ***If there is a problem with the product Don't just press deduct points. Please notify the shop first*** Thank you to everyone who has come to place an order with products from our store.",
      "th": "เสื้อชุดแซ่กผ้าเรยอน ชุดแซ่กย้อม เป็นผ้าจากใยธรรมชาติ ซึ่งเป็นผ้าที่ใส่แล้รู้สึกไม่ร้อน และระคายเคืองเพราะระบายอากาศได้ดี เป็นเสื้อแนววินเทจ แนวโบฮีเมียน นำเข้าจากอินเดีย ใส่ไปเที่ยวก็ดูสวยเด่นแปลกตา ไปเดินเล่น ใส่อยู่กับบ้าน หรือจะใส่เป็นชุดนอนก็สบายๆ ใส่ได้ทั้งคนหุ่นเพรียว หรือคนอวบอ้วน ฟรีไซส์ อก 30 - 54 นิ้ว ยาว 40 นิ้ว มีการตรวจสินค้าก่อนส่งทุกชิ้น ***หากมีปัญหากับสินค้า อย่างเพิ่งกดหักคะแนน ให้แจ้งมาทางร้านก่อนนะคะ*** ขอบคุณทุกๆท่านที่ได้เข้ามาทำการกดสั่งซื้อกับสินค้าทางร้านของเราค่ะ"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i4398742015-s17537097742.html"
    }
  },
  {
    "code": "LZD-16158094611",
    "name": {
      "en": "Rayon Shirt, Mesh Sleeves, Indian Style",
      "th": "เสื้อเรย่อน แขนตาข่าย สไตล์อินเดีย"
    },
    "category": "tops",
    "is_new": false,
    "price": 499,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "AWHN00",
        "th": "AWHN00"
      },
      {
        "en": "AWHN001",
        "th": "AWHN001"
      },
      {
        "en": "AWHN002",
        "th": "AWHN002"
      },
      {
        "en": "AWHN003",
        "th": "AWHN003"
      },
      {
        "en": "AWHN004",
        "th": "AWHN004"
      },
      {
        "en": "AWHN005",
        "th": "AWHN005"
      },
      {
        "en": "AWHN006",
        "th": "AWHN006"
      },
      {
        "en": "AWHN007",
        "th": "AWHN007"
      },
      {
        "en": "AWHN008",
        "th": "AWHN008"
      },
      {
        "en": "AWHN009",
        "th": "AWHN009"
      },
      {
        "en": "AWHN010",
        "th": "AWHN010"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "40 in",
          "th": "อก 40 นิ้ว"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "25 in",
          "th": "ความยาว 25 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16158094611-01.webp",
        "alt": {
          "en": "Main view of Rayon Shirt, Mesh Sleeves, Indian Style",
          "th": "ภาพหลักของ เสื้อเรย่อน แขนตาข่าย สไตล์อินเดีย"
        }
      },
      {
        "src": "products/lzd-16158094611-02.webp",
        "alt": {
          "en": "Additional view 2 of Rayon Shirt, Mesh Sleeves, Indian Style",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อเรย่อน แขนตาข่าย สไตล์อินเดีย"
        }
      },
      {
        "src": "products/lzd-16158094611-03.webp",
        "alt": {
          "en": "Additional view 3 of Rayon Shirt, Mesh Sleeves, Indian Style",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อเรย่อน แขนตาข่าย สไตล์อินเดีย"
        }
      },
      {
        "src": "products/lzd-16158094611-04.webp",
        "alt": {
          "en": "Additional view 4 of Rayon Shirt, Mesh Sleeves, Indian Style",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อเรย่อน แขนตาข่าย สไตล์อินเดีย"
        }
      },
      {
        "src": "products/lzd-16158094611-05.webp",
        "alt": {
          "en": "Additional view 5 of Rayon Shirt, Mesh Sleeves, Indian Style",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อเรย่อน แขนตาข่าย สไตล์อินเดีย"
        }
      },
      {
        "src": "products/lzd-16158094611-06.webp",
        "alt": {
          "en": "Additional view 6 of Rayon Shirt, Mesh Sleeves, Indian Style",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อเรย่อน แขนตาข่าย สไตล์อินเดีย"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "✨ Rayon shirt with mesh sleeves Indian style embroidery, front slit ✨ Beautiful and charming Comfortable to wear every day With soft rayon fabric, flowing, light, comfortable, and breathable. The design stands out with exquisite Indian-style embroidery. Add simple elegance You can wear it all day long to work, go out, go to a cafe, or wear it casually and it looks good and stylish 💖 🌸 Product highlights • Soft rayon fabric, comfortable to wear, not hot. • Mesh sleeves add a chic, three-dimensional look. • Indian embroidery work, beautiful and detailed. • Front slit design, front buttons, easy to wear. • Can be paired with trousers, jeans, or local fabrics. • There are many colors to choose from. Can be worn in many looks 📏 Product size Chest 40 inches Length 25 inches Arm circumference 20 inches 🎨 The product has many colors to choose from. Choose the right color You can wear it for every occasion. Add uniqueness 🧺 Advice on product care Because it is a dyed and embroidered fabric. It is recommended to wash separately to preserve the color and texture of the fabric. ✔ Should be soaked in salt water for 1 night before washing for the first time. ✔ After that, it is recommended to wash separately for the first 2–3 rounds. ✔ Hand washing or using fabric care mode will help extend its lifespan. ✔ Avoid using bleach and heat treatment. 💖 Beautiful work, comfortable to wear, authentic Indian style. Wear it and look good at any age 💖",
      "th": "✨ เสื้อเรย่อนแขนตาข่าย ปักลายสไตล์อินเดีย ผ่าหน้า ✨ สวยแบบมีเสน่ห์ ใส่สบายทุกวัน ด้วยผ้าเรย่อนเนื้อนิ่ม พลิ้ว เบาสบาย ระบายอากาศดี ดีไซน์โดดเด่นด้วยงานปักสไตล์อินเดียสุดประณีต เพิ่มความหรูแบบเรียบง่าย ใส่ได้ทั้งวันทำงาน เที่ยว คาเฟ่ หรือใส่ลำลองก็ดูดีมีสไตล์ 💖 🌸 จุดเด่นสินค้า • ผ้าเรย่อนนิ่ม ใส่สบาย ไม่ร้อน • แขนตาข่าย เพิ่มความเก๋ ดูมีมิติ • งานปักลายอินเดีย สวยละเอียด • ดีไซน์ผ่าหน้า กระดุมหน้า ใส่ง่าย • แมทช์ได้ทั้งกางเกงขายาว ยีนส์ หรือผ้าพื้นเมือง • มีหลายสีให้เลือก ใส่ได้หลายลุค 📏 ขนาดสินค้า อก 40 นิ้ว ความยาว 25 นิ้ว รอบวงแขน 20 นิ้ว 🎨 สินค้ามีหลายสีให้เลือก เลือกสีที่ใช่ ใส่ได้ทุกโอกาส เพิ่มความโดดเด่นแบบมีเอกลักษณ์ 🧺 คำแนะนำในการดูแลสินค้า เนื่องจากเป็นผ้าย้อมสีและงานปัก แนะนำให้ซักแยกเพื่อถนอมสีและเนื้อผ้า ✔ ควรแช่น้ำเกลือทิ้งไว้ 1 คืนก่อนซักครั้งแรก ✔ หลังจากนั้นแนะนำให้แยกซัก 2–3 รอบแรก ✔ ซักมือหรือใช้โหมดถนอมผ้าจะช่วยยืดอายุการใช้งาน ✔ หลีกเลี่ยงการใช้น้ำยาฟอกขาวและการอบร้อน 💖 งานสวย ใส่สบาย มีสไตล์แบบอินเดียแท้ ใส่แล้วดูดีทุกวัย 💖"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16158094611-s127166814550.html"
    }
  },
  {
    "code": "LZD-16160204409",
    "name": {
      "en": "Floral Shirt, Chinese Collar, Balloon Sleeves, Floral Hemp Shirt. Long Front Slit Shirt",
      "th": "เสื้อลายดอก คอจีน แขนบอลลูน เสื้อป่านลายดอก เสื้อผ่าหน้าตัวยาว"
    },
    "category": "tops",
    "is_new": false,
    "price": 229,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "SMS101",
        "th": "SMS101"
      },
      {
        "en": "SMS102",
        "th": "SMS102"
      },
      {
        "en": "SMS103",
        "th": "SMS103"
      },
      {
        "en": "SMS104",
        "th": "SMS104"
      },
      {
        "en": "SMS105",
        "th": "SMS105"
      },
      {
        "en": "SMS106",
        "th": "SMS106"
      },
      {
        "en": "SMS107",
        "th": "SMS107"
      },
      {
        "en": "SMS108",
        "th": "SMS108"
      },
      {
        "en": "SMS109",
        "th": "SMS109"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16160204409-01.webp",
        "alt": {
          "en": "Main view of Floral Shirt, Chinese Collar, Balloon Sleeves, Floral Hemp Shirt. Long Front Slit Shirt",
          "th": "ภาพหลักของ เสื้อลายดอก คอจีน แขนบอลลูน เสื้อป่านลายดอก เสื้อผ่าหน้าตัวยาว"
        }
      },
      {
        "src": "products/lzd-16160204409-02.webp",
        "alt": {
          "en": "Additional view 2 of Floral Shirt, Chinese Collar, Balloon Sleeves, Floral Hemp Shirt. Long Front Slit Shirt",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อลายดอก คอจีน แขนบอลลูน เสื้อป่านลายดอก เสื้อผ่าหน้าตัวยาว"
        }
      },
      {
        "src": "products/lzd-16160204409-03.webp",
        "alt": {
          "en": "Additional view 3 of Floral Shirt, Chinese Collar, Balloon Sleeves, Floral Hemp Shirt. Long Front Slit Shirt",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อลายดอก คอจีน แขนบอลลูน เสื้อป่านลายดอก เสื้อผ่าหน้าตัวยาว"
        }
      },
      {
        "src": "products/lzd-16160204409-04.webp",
        "alt": {
          "en": "Additional view 4 of Floral Shirt, Chinese Collar, Balloon Sleeves, Floral Hemp Shirt. Long Front Slit Shirt",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อลายดอก คอจีน แขนบอลลูน เสื้อป่านลายดอก เสื้อผ่าหน้าตัวยาว"
        }
      },
      {
        "src": "products/lzd-16160204409-05.webp",
        "alt": {
          "en": "Additional view 5 of Floral Shirt, Chinese Collar, Balloon Sleeves, Floral Hemp Shirt. Long Front Slit Shirt",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อลายดอก คอจีน แขนบอลลูน เสื้อป่านลายดอก เสื้อผ่าหน้าตัวยาว"
        }
      },
      {
        "src": "products/lzd-16160204409-06.webp",
        "alt": {
          "en": "Additional view 6 of Floral Shirt, Chinese Collar, Balloon Sleeves, Floral Hemp Shirt. Long Front Slit Shirt",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อลายดอก คอจีน แขนบอลลูน เสื้อป่านลายดอก เสื้อผ่าหน้าตัวยาว"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Long shirt with Chinese collar, balloon sleeves, chic floral pattern 💙 Beautiful, sweet, stylish design Wear it and you will look polite. But still bright and outstanding Comfortable fabric, beautiful shape, camouflages the figure well. You can wear it for many occasions ✨ 🌸 Highlights of this model • Chinese collar adds a simple, elegant, classy look. • Balloon sleeves look cute with details. • Loose fit, comfortable to wear, not tight. • Flower pattern in beautiful colors. Wear it and help brighten the skin. • There are many colors to choose from. 📏 Free size Can be worn from chest size 34–46 inches. Shirt length 34 inches Arm circumference 20 inches How to care for it It is recommended to soak in salt water for 1 night before washing for the first time. And you should wash it separately 1-2 times to keep the fabric color beautiful and fresh. 🌿",
      "th": "เสื้อทรงยาวคอจีน แขนบอลลูน ลายดอกสุดเก๋ 💙 ดีไซน์สวยหวานแบบมีสไตล์ ใส่แล้วดูสุภาพ แต่ยังคงความสดใสโดดเด่น เนื้อผ้าใส่สบาย ทรงสวย พรางหุ่นได้ดี ใส่ได้หลายโอกาส ✨ 🌸 จุดเด่นของรุ่นนี้ • คอจีนเพิ่มลุคเรียบหรู ดูดีมีระดับ • แขนบอลลูนใส่แล้วดูน่ารัก มีดีเทล • ทรงปล่อยใส่สบาย ไม่รัดตัว • ลายดอกสีสวย ใส่แล้วช่วยขับผิว • มีหลายสีให้เลือก 📏 ขนาดฟรีไซส์ ใส่ได้ตั้งแต่อก 34–46 นิ้ว เสื้อยาว 34 นิ้ว วงแขน 20 นิ้ว วิธีดูแลรักษา แนะนำแช่น้ำเกลือทิ้งไว้ 1 คืน ก่อนซักครั้งแรก และควรซักแยก 1–2 ครั้ง เพื่อรักษาสีผ้าให้สวยสดค่ะ 🌿"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16160204409-s127174014452.html"
    }
  },
  {
    "code": "LZD-16158382295",
    "name": {
      "en": "Batwing Style Shirt With Drawstring Waist, Thai Pattern, Bohemian Style",
      "th": "เสื้อทรงปีกค้างคาวมีเชือกรูดเอว ลายไทย สไตล์โบฮีเมียน"
    },
    "category": "tops",
    "is_new": false,
    "price": 199,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "Green",
        "th": "KTS1101 เขียว"
      },
      {
        "en": "Grey",
        "th": "KTS1103 เทา"
      },
      {
        "en": "Yellow",
        "th": "KTS1105 เหลืองขมิ้น"
      },
      {
        "en": "Red",
        "th": "KTS1106 แดง"
      },
      {
        "en": "Blue",
        "th": "KTS1107 น้ำเงิน"
      },
      {
        "en": "Brown",
        "th": "KTS1108 น้ำตาล"
      },
      {
        "en": "บานเย็น",
        "th": "KTS1109 บานเย็น"
      },
      {
        "en": "Sky Blue",
        "th": "KTS1110 ฟ้า"
      },
      {
        "en": "Sky Blue",
        "th": "KTS1111 ฟ้าเข้ม"
      },
      {
        "en": "Purple",
        "th": "KTS1112 ม่วง"
      },
      {
        "en": "Orange",
        "th": "KTS1113 ส้ม"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "Fits 34–54 in",
          "th": "รอบอกใสได้ขนาดตั้งแต่ 34 - 54 นิ้ว (ทรงเสื้อเป็นสี่เหลี่ยม อก เอว และสะโพกจึงมีขนาดเท่ากัน แต่ช่วงเอวมีเชือกรูดปรับขนาด จึงสามารถปรับขนาดเสื้อให้เข้าตามรูปร่างของผู้ใส่ได้)"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "34 in",
          "th": "ความยาว 34 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16158382295-01.webp",
        "alt": {
          "en": "Main view of Batwing Style Shirt With Drawstring Waist, Thai Pattern, Bohemian Style",
          "th": "ภาพหลักของ เสื้อทรงปีกค้างคาวมีเชือกรูดเอว ลายไทย สไตล์โบฮีเมียน"
        }
      },
      {
        "src": "products/lzd-16158382295-02.webp",
        "alt": {
          "en": "Additional view 2 of Batwing Style Shirt With Drawstring Waist, Thai Pattern, Bohemian Style",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อทรงปีกค้างคาวมีเชือกรูดเอว ลายไทย สไตล์โบฮีเมียน"
        }
      },
      {
        "src": "products/lzd-16158382295-03.webp",
        "alt": {
          "en": "Additional view 3 of Batwing Style Shirt With Drawstring Waist, Thai Pattern, Bohemian Style",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อทรงปีกค้างคาวมีเชือกรูดเอว ลายไทย สไตล์โบฮีเมียน"
        }
      },
      {
        "src": "products/lzd-16158382295-04.webp",
        "alt": {
          "en": "Additional view 4 of Batwing Style Shirt With Drawstring Waist, Thai Pattern, Bohemian Style",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อทรงปีกค้างคาวมีเชือกรูดเอว ลายไทย สไตล์โบฮีเมียน"
        }
      },
      {
        "src": "products/lzd-16158382295-05.webp",
        "alt": {
          "en": "Additional view 5 of Batwing Style Shirt With Drawstring Waist, Thai Pattern, Bohemian Style",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อทรงปีกค้างคาวมีเชือกรูดเอว ลายไทย สไตล์โบฮีเมียน"
        }
      },
      {
        "src": "products/lzd-16158382295-06.webp",
        "alt": {
          "en": "Additional view 6 of Batwing Style Shirt With Drawstring Waist, Thai Pattern, Bohemian Style",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อทรงปีกค้างคาวมีเชือกรูดเอว ลายไทย สไตล์โบฮีเมียน"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Batwing style shirt with drawstring waist, Thai pattern, Bohemian style. Comfortable to wear. There is a drawstring at the waist to adjust the size to your body shape. Can be worn by both girls with slender figures or chubby girls with large figures. It's a simple, basic style shirt that's easy to wear, not hot, and can be worn around the house. Or wear it to go for a walk. Or wear it to travel and it looks good. Looks striking It's a black and white pattern, black and white, and there are many colors to choose from. Shirt size - Chest size from 34 - 54 inches (the shirt is square, so the chest, waist, and hips are the same size. But the waist has a drawstring to adjust the size. Therefore, the size of the shirt can be adjusted to fit the wearer's body shape) -Length 34 inches",
      "th": "เสื้อทรงปีกค้างคาวมีเชือกรูดเอว ลายไทย สไตล์โบฮีเมียน สวมใส่สบาย มีเชือกรูดเอวปรับขนาดให้เข้ากับรูปร่าง ใส่ได้ทั้งสาวหุ่นเพรียวบาง หรือสาวอวบ รูปร่างใหญ่ เป็นเสื้อสไตล์เรียบๆ พื้นๆ ใส่ง่าย ไม่ร้อน ใส่อยู่กับบ้าน หรือจะใส่ไปเดินเล่น หรือจะใส่ไปเที่ยวก็ดูดี ดูเด่นสะดุดตา เป็นลายขาวดำ ดำขาว มีหลายสีให้เลือก ขนาดเสื้อ -รอบอกใสได้ขนาดตั้งแต่ 34 - 54 นิ้ว (ทรงเสื้อเป็นสี่เหลี่ยม อก เอว และสะโพกจึงมีขนาดเท่ากัน แต่ช่วงเอวมีเชือกรูดปรับขนาด จึงสามารถปรับขนาดเสื้อให้เข้าตามรูปร่างของผู้ใส่ได้) -ความยาว 34 นิ้ว"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16158382295-s127418278422.html"
    }
  },
  {
    "code": "LZD-16198051877",
    "name": {
      "en": "Long Batwing Dress \"Diamond Pattern\" One Size",
      "th": "เดรสยาวทรงปีกค้างคาว \"ลายข้าวหลามตัด\" FreeSize"
    },
    "category": "dresses",
    "is_new": false,
    "price": 259,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "Pink",
        "th": "KTL801 ชมพู"
      },
      {
        "en": "Sky Blue",
        "th": "KTL802 ฟ้า"
      },
      {
        "en": "Red",
        "th": "KTL803 แดง"
      },
      {
        "en": "Black",
        "th": "KTL804 ดำ"
      },
      {
        "en": "White",
        "th": "KTL805 ขาว"
      },
      {
        "en": "KTL806",
        "th": "KTL806"
      },
      {
        "en": "Blue",
        "th": "KTL807 น้ำเงิน"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "52 in",
          "th": "🤍 ความยาว 52 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16198051877-01.webp",
        "alt": {
          "en": "Main view of Long Batwing Dress \"Diamond Pattern\" One Size",
          "th": "ภาพหลักของ เดรสยาวทรงปีกค้างคาว \"ลายข้าวหลามตัด\" FreeSize"
        }
      },
      {
        "src": "products/lzd-16198051877-02.webp",
        "alt": {
          "en": "Additional view 2 of Long Batwing Dress \"Diamond Pattern\" One Size",
          "th": "ภาพเพิ่มเติม 2 ของ เดรสยาวทรงปีกค้างคาว \"ลายข้าวหลามตัด\" FreeSize"
        }
      },
      {
        "src": "products/lzd-16198051877-03.webp",
        "alt": {
          "en": "Additional view 3 of Long Batwing Dress \"Diamond Pattern\" One Size",
          "th": "ภาพเพิ่มเติม 3 ของ เดรสยาวทรงปีกค้างคาว \"ลายข้าวหลามตัด\" FreeSize"
        }
      },
      {
        "src": "products/lzd-16198051877-04.webp",
        "alt": {
          "en": "Additional view 4 of Long Batwing Dress \"Diamond Pattern\" One Size",
          "th": "ภาพเพิ่มเติม 4 ของ เดรสยาวทรงปีกค้างคาว \"ลายข้าวหลามตัด\" FreeSize"
        }
      },
      {
        "src": "products/lzd-16198051877-05.webp",
        "alt": {
          "en": "Additional view 5 of Long Batwing Dress \"Diamond Pattern\" One Size",
          "th": "ภาพเพิ่มเติม 5 ของ เดรสยาวทรงปีกค้างคาว \"ลายข้าวหลามตัด\" FreeSize"
        }
      },
      {
        "src": "products/lzd-16198051877-06.webp",
        "alt": {
          "en": "Additional view 6 of Long Batwing Dress \"Diamond Pattern\" One Size",
          "th": "ภาพเพิ่มเติม 6 ของ เดรสยาวทรงปีกค้างคาว \"ลายข้าวหลามตัด\" FreeSize"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "✨ Long bat wing style dress. \"Pearl Night Pattern\" ✨ Beautiful, simple, elegant, wear it and look expensive, camouflage your figure perfectly 💕 🤍 Chest 34–54 inches (approximately 86–137 cm.) 🤍 Length 52 inches 🤍 Waist drawstring, adjustable according to your body. 🤍 Flowy fabric, comfortable to wear, not hot. 🤍 Wear it to travel, wear it to work, wear it to a resort, or wear it to an event and it's beautiful. 🌈 There are many colors to choose from.",
      "th": "✨ เดรสยาวทรงปีกค้างคาว \"ลายราตรีมุก\" ✨ สวย เรียบหรู ใส่แล้วดูแพง พรางหุ่นได้อย่างลงตัว 💕 🤍 อก 34–54 นิ้ว (ประมาณ 86–137 ซม.) 🤍 ความยาว 52 นิ้ว 🤍 เชือกรูดเอว ปรับได้ตามสรีระ 🤍 ผ้าพลิ้ว ใส่สบาย ไม่ร้อน 🤍 ใส่เที่ยว ใส่ทำงาน ใส่รีสอร์ต หรือใส่ออกงานก็สวย 🌈 มีหลายสีให้เลือก"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/freesize-i16198051877-s127322677144.html"
    }
  },
  {
    "code": "LZD-16192979624",
    "name": {
      "en": "\"Batwing Long Dress, Trident Pattern\", One Size",
      "th": "“เดรสยาวทรงปีกค้างคาว ลายตรีศูล” ฟรีไซส์"
    },
    "category": "dresses",
    "is_new": false,
    "price": 259,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "Red",
        "th": "KTL701 แดง"
      },
      {
        "en": "Orange",
        "th": "KTL702 ส้ม"
      },
      {
        "en": "Yellow",
        "th": "KTL703 เหลือง"
      },
      {
        "en": "Blue",
        "th": "KTL704 น้ำเงิน"
      },
      {
        "en": "Green",
        "th": "KTL705 เขียว"
      },
      {
        "en": "Cream",
        "th": "KTL706 ครีม"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "52 in",
          "th": "🌸 ความยาว 52 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16192979624-01.webp",
        "alt": {
          "en": "Main view of \"Batwing Long Dress, Trident Pattern\", One Size",
          "th": "ภาพหลักของ “เดรสยาวทรงปีกค้างคาว ลายตรีศูล” ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16192979624-02.webp",
        "alt": {
          "en": "Additional view 2 of \"Batwing Long Dress, Trident Pattern\", One Size",
          "th": "ภาพเพิ่มเติม 2 ของ “เดรสยาวทรงปีกค้างคาว ลายตรีศูล” ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16192979624-03.webp",
        "alt": {
          "en": "Additional view 3 of \"Batwing Long Dress, Trident Pattern\", One Size",
          "th": "ภาพเพิ่มเติม 3 ของ “เดรสยาวทรงปีกค้างคาว ลายตรีศูล” ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16192979624-04.webp",
        "alt": {
          "en": "Additional view 4 of \"Batwing Long Dress, Trident Pattern\", One Size",
          "th": "ภาพเพิ่มเติม 4 ของ “เดรสยาวทรงปีกค้างคาว ลายตรีศูล” ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16192979624-05.webp",
        "alt": {
          "en": "Additional view 5 of \"Batwing Long Dress, Trident Pattern\", One Size",
          "th": "ภาพเพิ่มเติม 5 ของ “เดรสยาวทรงปีกค้างคาว ลายตรีศูล” ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16192979624-06.webp",
        "alt": {
          "en": "Additional view 6 of \"Batwing Long Dress, Trident Pattern\", One Size",
          "th": "ภาพเพิ่มเติม 6 ของ “เดรสยาวทรงปีกค้างคาว ลายตรีศูล” ฟรีไซส์"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "✨ Add color to your everyday. “Long bat wing style dress. Django Trident pattern”, beautiful and outstanding design, comfortable to wear, flows beautifully with every movement. With drawstring waist for adjusting the shape. Helps to wear both small size girls and plus size girls. 🌸 Chest 34-54 inches (approximately 86-137 cm.) 🌸 Length 52 inches 🌸 Bat wing shape, comfortable to wear, not tight. 🌸 Flowing fabric, good ventilation. 🌸 There are many colors to choose from, easy to match, can be worn on many occasions.",
      "th": "✨ เติมสีสันให้ทุกวันของคุณด้วย “เดรสยาวทรงปีกค้างคาว ลายจังโก้ตรีศูล” ดีไซน์สวยโดดเด่น สวมใส่สบาย พริ้วสวยทุกการเคลื่อนไหว พร้อมเชือกรูดเอวปรับทรงได้ ช่วยให้ใส่ได้ทั้งสาวไซซ์เล็กและสาวพลัสไซซ์ 🌸 อก 34-54 นิ้ว (ประมาณ 86-137 ซม.) 🌸 ความยาว 52 นิ้ว 🌸 ทรงปีกค้างคาว ใส่สบาย ไม่รัดรูป 🌸 เนื้อผ้าพริ้ว ระบายอากาศดี 🌸 มีหลายสีให้เลือก แมทช์ง่าย ใส่ได้หลายโอกาส"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16192979624-s127303593292.html"
    }
  },
  {
    "code": "LZD-16155234787",
    "name": {
      "en": "Long Sleeve Peach Top Bohemian Style, One Size",
      "th": "เสื้อผ้าพีชแขนยาว สไตล์โบฮีเมียน ฟรีไซร์"
    },
    "category": "tops",
    "is_new": false,
    "price": 199,
    "fabric": {
      "en": "Peach-skin fabric",
      "th": "ผ้าพีชสกิน"
    },
    "colours": [
      {
        "en": "PLS001",
        "th": "PLS001"
      },
      {
        "en": "PLS003",
        "th": "PLS003"
      },
      {
        "en": "PLS004",
        "th": "PLS004"
      },
      {
        "en": "PLS005",
        "th": "PLS005"
      },
      {
        "en": "PLS006",
        "th": "PLS006"
      },
      {
        "en": "PLS007",
        "th": "PLS007"
      },
      {
        "en": "PLS008",
        "th": "PLS008"
      },
      {
        "en": "PLS009",
        "th": "PLS009"
      },
      {
        "en": "PLS010",
        "th": "PLS010"
      },
      {
        "en": "PLS011",
        "th": "PLS011"
      },
      {
        "en": "PLS012",
        "th": "PLS012"
      },
      {
        "en": "PLS013",
        "th": "PLS013"
      },
      {
        "en": "PLS014",
        "th": "PLS014"
      },
      {
        "en": "PLS015",
        "th": "PLS015"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "Approx. 44 in / 112 cm",
          "th": "อกใส่ได้ประมาณ 44 นิ้ว หรือ 112 cm"
        }
      },
      {
        "label": {
          "en": "Sleeve",
          "th": "แขนเสื้อ"
        },
        "value": {
          "en": "22 in / 56 cm",
          "th": "แขนยาว 22 นิ้ว หรือ 56 cm"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16155234787-01.webp",
        "alt": {
          "en": "Main view of Long Sleeve Peach Top Bohemian Style, One Size",
          "th": "ภาพหลักของ เสื้อผ้าพีชแขนยาว สไตล์โบฮีเมียน ฟรีไซร์"
        }
      },
      {
        "src": "products/lzd-16155234787-02.webp",
        "alt": {
          "en": "Additional view 2 of Long Sleeve Peach Top Bohemian Style, One Size",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อผ้าพีชแขนยาว สไตล์โบฮีเมียน ฟรีไซร์"
        }
      },
      {
        "src": "products/lzd-16155234787-03.webp",
        "alt": {
          "en": "Additional view 3 of Long Sleeve Peach Top Bohemian Style, One Size",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อผ้าพีชแขนยาว สไตล์โบฮีเมียน ฟรีไซร์"
        }
      },
      {
        "src": "products/lzd-16155234787-04.webp",
        "alt": {
          "en": "Additional view 4 of Long Sleeve Peach Top Bohemian Style, One Size",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อผ้าพีชแขนยาว สไตล์โบฮีเมียน ฟรีไซร์"
        }
      },
      {
        "src": "products/lzd-16155234787-05.webp",
        "alt": {
          "en": "Additional view 5 of Long Sleeve Peach Top Bohemian Style, One Size",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อผ้าพีชแขนยาว สไตล์โบฮีเมียน ฟรีไซร์"
        }
      },
      {
        "src": "products/lzd-16155234787-06.webp",
        "alt": {
          "en": "Additional view 6 of Long Sleeve Peach Top Bohemian Style, One Size",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อผ้าพีชแขนยาว สไตล์โบฮีเมียน ฟรีไซร์"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Bohemian style shirt, peach fabric, vintage pattern. Wear it and you'll stand out and be unique! Wear it and you'll look expensive and stylish. Whether you're going to a cafe or walking on the beach, every look can be taken care of. Beautiful patterns, fresh colors, full details. Wear it and it really flatters your skin. Relaxed fit, comfortable to wear, not tight, not uncomfortable. Very chic tribal pattern, easy to match, wear every day. Wear it with shorts/jeans/dresses for a beautiful, complete look. Size: Free size Chest can fit approximately 44 inches or 112 cm. Arm length 22 inches or 56 cm. Arm circumference 10 inches or 26 cm. Shirt length approximately 33 inches or 84 cm.",
      "th": "เสื้อสไตล์โบฮีเมียน ผ้าพีช ลายวินเทจ ใส่แล้วโดดเด่นไม่ซ้ำใคร! ใส่แล้วดูแพง ดูมีสไตล์ จะเที่ยวคาเฟ่ หรือเดินทะเล ก็เอาอยู่ทุกลุค ลายสวย สีสด ดีเทลจัดเต็ม ใส่แล้วขับผิวสุดๆ ทรงปล่อย ใส่สบาย ไม่รัด ไม่อึดอัด ลายชนเผ่าสุดชิค แมทช์ง่าย ใส่ได้ทุกวัน ใส่กับกางเกงขาสั้น/ยีนส์/เดรสก็สวยครบลุค ขนาด: ฟรีไซซ์ อกใส่ได้ประมาณ 44 นิ้ว หรือ 112 cm แขนยาว 22 นิ้ว หรือ 56 cm รอบวงแขน 10 นิ้ว หรือ 26 cm เสื้อยาวประมาณ 33 นิ้ว หรือ 84 cm"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16155234787-s127223284044.html"
    }
  },
  {
    "code": "LZD-16161711057",
    "name": {
      "en": "Short Dress, Batwing, White Elephant Pattern, Drawstring Waist, One Size",
      "th": "เดรสสั้น ทรงปีกค้างคาว ลายช้างเผือก เชือกรูดเอว ฟรีไซส์"
    },
    "category": "dresses",
    "is_new": false,
    "price": 199,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "Navy",
        "th": "KTS1701 กรมท่า"
      },
      {
        "en": "Green",
        "th": "KTS1702 เขียว"
      },
      {
        "en": "Blue",
        "th": "KTS1703 น้ำเงิน"
      },
      {
        "en": "Black",
        "th": "KTS1704 ดำ"
      },
      {
        "en": "Sky Blue",
        "th": "KTS1705 ฟ้า"
      },
      {
        "en": "Orange",
        "th": "KTS1706 ส้ม"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "34 in",
          "th": "🌿 ความยาว 34 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16161711057-01.webp",
        "alt": {
          "en": "Main view of Short Dress, Batwing, White Elephant Pattern, Drawstring Waist, One Size",
          "th": "ภาพหลักของ เดรสสั้น ทรงปีกค้างคาว ลายช้างเผือก เชือกรูดเอว ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16161711057-02.webp",
        "alt": {
          "en": "Additional view 2 of Short Dress, Batwing, White Elephant Pattern, Drawstring Waist, One Size",
          "th": "ภาพเพิ่มเติม 2 ของ เดรสสั้น ทรงปีกค้างคาว ลายช้างเผือก เชือกรูดเอว ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16161711057-03.webp",
        "alt": {
          "en": "Additional view 3 of Short Dress, Batwing, White Elephant Pattern, Drawstring Waist, One Size",
          "th": "ภาพเพิ่มเติม 3 ของ เดรสสั้น ทรงปีกค้างคาว ลายช้างเผือก เชือกรูดเอว ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16161711057-04.webp",
        "alt": {
          "en": "Additional view 4 of Short Dress, Batwing, White Elephant Pattern, Drawstring Waist, One Size",
          "th": "ภาพเพิ่มเติม 4 ของ เดรสสั้น ทรงปีกค้างคาว ลายช้างเผือก เชือกรูดเอว ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16161711057-05.webp",
        "alt": {
          "en": "Additional view 5 of Short Dress, Batwing, White Elephant Pattern, Drawstring Waist, One Size",
          "th": "ภาพเพิ่มเติม 5 ของ เดรสสั้น ทรงปีกค้างคาว ลายช้างเผือก เชือกรูดเอว ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16161711057-06.webp",
        "alt": {
          "en": "Additional view 6 of Short Dress, Batwing, White Elephant Pattern, Drawstring Waist, One Size",
          "th": "ภาพเพิ่มเติม 6 ของ เดรสสั้น ทรงปีกค้างคาว ลายช้างเผือก เชือกรูดเอว ฟรีไซส์"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "✨ Short bat wing style dress with white elephant pattern, super chic boho style ✨ Easy to wear, comfortable to wear, camouflages every beautiful figure 💕 Comes with a waist drawstring. Adjust your look to be both sweet and lightly sexy. Wear it out, wear it to a cafe, or just chill out and it's beautiful and eye-catching. 🌿 Chest can fit 34-54 inches. 🌿 Length 34 inches 🌿 Free size, comfortable to wear, flows beautifully. 🌿 There are many colors to choose from.",
      "th": "✨ เดรสสั้นทรงปีกค้างคาว ลายช้างเผือก สไตล์โบโฮสุดชิค ✨ ใส่ง่าย ใส่สบาย พรางหุ่นสวยทุกสัดส่วน 💕 มาพร้อมเชือกรูดเอว ปรับลุคได้ทั้งหวานและเซ็กซี่เบาๆ ใส่เที่ยว ใส่คาเฟ่ หรือใส่ชิลๆ ก็สวยสะดุดตา 🌿 อกใส่ได้ 34-54 นิ้ว 🌿 ความยาว 34 นิ้ว 🌿 ทรงฟรีไซส์ ใส่สบาย พลิ้วสวย 🌿 มีหลายสีให้เลือก"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16161711057-s127188306582.html"
    }
  },
  {
    "code": "LZD-16065811661",
    "name": {
      "en": "Bohemian Style Short Bat Dress With Lotus Petal Pattern. Has An Adjustable Waist Strap",
      "th": "ชุดเดรสค้างคาวตัวสั้นสไตล์โบฮีเมียนลายกลีบบัว มีสายปรับรูดเอว"
    },
    "category": "dresses",
    "is_new": false,
    "price": 199,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "White and Black",
        "th": "KTS101 สีขาวดำ"
      },
      {
        "en": "Black and White",
        "th": "KTS102 สีดำขาว"
      },
      {
        "en": "Sky Blue",
        "th": "KTS103 สีฟ้า"
      },
      {
        "en": "Blue",
        "th": "KTS104 สีน้ำเงิน"
      },
      {
        "en": "Black",
        "th": "KTS105 สีดำสี"
      },
      {
        "en": "Sky Blue",
        "th": "KTS106 สีฟ้าเข้ม"
      },
      {
        "en": "Red",
        "th": "KTS107 สีแดง"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "34 in",
          "th": "ความยาวชุด 34 นิ้ว"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "Fits 34 / 54",
          "th": "รอบอกใส่ได้ตั้งแต่ 34\"–54\""
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16065811661-01.webp",
        "alt": {
          "en": "Main view of Bohemian Style Short Bat Dress With Lotus Petal Pattern. Has An Adjustable Waist Strap",
          "th": "ภาพหลักของ ชุดเดรสค้างคาวตัวสั้นสไตล์โบฮีเมียนลายกลีบบัว มีสายปรับรูดเอว"
        }
      },
      {
        "src": "products/lzd-16065811661-02.webp",
        "alt": {
          "en": "Additional view 2 of Bohemian Style Short Bat Dress With Lotus Petal Pattern. Has An Adjustable Waist Strap",
          "th": "ภาพเพิ่มเติม 2 ของ ชุดเดรสค้างคาวตัวสั้นสไตล์โบฮีเมียนลายกลีบบัว มีสายปรับรูดเอว"
        }
      },
      {
        "src": "products/lzd-16065811661-03.webp",
        "alt": {
          "en": "Additional view 3 of Bohemian Style Short Bat Dress With Lotus Petal Pattern. Has An Adjustable Waist Strap",
          "th": "ภาพเพิ่มเติม 3 ของ ชุดเดรสค้างคาวตัวสั้นสไตล์โบฮีเมียนลายกลีบบัว มีสายปรับรูดเอว"
        }
      },
      {
        "src": "products/lzd-16065811661-04.webp",
        "alt": {
          "en": "Additional view 4 of Bohemian Style Short Bat Dress With Lotus Petal Pattern. Has An Adjustable Waist Strap",
          "th": "ภาพเพิ่มเติม 4 ของ ชุดเดรสค้างคาวตัวสั้นสไตล์โบฮีเมียนลายกลีบบัว มีสายปรับรูดเอว"
        }
      },
      {
        "src": "products/lzd-16065811661-05.webp",
        "alt": {
          "en": "Additional view 5 of Bohemian Style Short Bat Dress With Lotus Petal Pattern. Has An Adjustable Waist Strap",
          "th": "ภาพเพิ่มเติม 5 ของ ชุดเดรสค้างคาวตัวสั้นสไตล์โบฮีเมียนลายกลีบบัว มีสายปรับรูดเอว"
        }
      },
      {
        "src": "products/lzd-16065811661-06.webp",
        "alt": {
          "en": "Additional view 6 of Bohemian Style Short Bat Dress With Lotus Petal Pattern. Has An Adjustable Waist Strap",
          "th": "ภาพเพิ่มเติม 6 ของ ชุดเดรสค้างคาวตัวสั้นสไตล์โบฮีเมียนลายกลีบบัว มีสายปรับรูดเอว"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Bohemian style, short, drawstring waist bat-shaped dress with lotus petal pattern. Comfortable to wear, chic style, just wear it and you'll instantly be beautiful! ✅ Dress length 34 inches. ✅ Fits bust size from 34\"–54\". ✅ There is a drawstring under the chest. Adjust to fit as desired. ✅ Soft fabric, comfortable to wear, not hot. ✅ Darika pattern in the style of tribal juncos, beautiful, strange, and unique. 💥 Wear it to travel, wear it to chill, wear it at home and it's chic 💥 📌 Can be worn by every body shape. Wear it and you won't feel uncomfortable. 🛒 Ready to send‼️",
      "th": "ชุดทรงค้างคาวเอวรูดตัวสั้นสไตล์โบฮีเมียนลายกลีบบัว ใส่สบาย สไตล์ชิค ๆ แค่สวมก็สวยปังทันที! ✅ ความยาวชุด 34 นิ้ว ✅ รอบอกใส่ได้ตั้งแต่ 34\"–54\" ✅ มีเชือกรูดใต้อก ปรับเข้ารูปได้ตามต้องการ ✅ เนื้อผ้านิ่ม ใส่สบาย ไม่ร้อน ✅ ลายดาริกาแนวจังโก้ชนเผ่า สวย แปลก ไม่ซ้ำใคร 💥 ใส่เที่ยว ใส่ชิลล์ ใส่อยู่บ้านก็เก๋ 💥 📌 ใส่ได้ทุกหุ่น ใส่แล้วไม่อึดอัด 🛒 พร้อมส่ง‼️"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16065811661-s126488161653.html"
    }
  },
  {
    "code": "LZD-4809282054",
    "name": {
      "en": "Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects",
      "th": "เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ"
    },
    "category": "tops",
    "is_new": false,
    "price": 199,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "Red",
        "th": "KKE 11.1 สีแดง"
      },
      {
        "en": "Green",
        "th": "KKE 11.2 สีเขียว"
      },
      {
        "en": "Sky Blue",
        "th": "KKE 11.4 สีฟ้า"
      },
      {
        "en": "KKE 11.5 สีบานเย็น",
        "th": "KKE 11.5 สีบานเย็น"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "Fits 34 in / 54 in / 35 in",
          "th": "ฟรีไซส์ ใส่ได้ตั้งแต่อก 34 นิ้ว ถึงอก 54 นิ้ว ความยาวเสื้อ 35 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-4809282054-01.webp",
        "alt": {
          "en": "Main view of Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects",
          "th": "ภาพหลักของ เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ"
        }
      },
      {
        "src": "products/lzd-4809282054-02.webp",
        "alt": {
          "en": "Additional view 2 of Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ"
        }
      },
      {
        "src": "products/lzd-4809282054-03.webp",
        "alt": {
          "en": "Additional view 3 of Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ"
        }
      },
      {
        "src": "products/lzd-4809282054-04.webp",
        "alt": {
          "en": "Additional view 4 of Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ"
        }
      },
      {
        "src": "products/lzd-4809282054-05.webp",
        "alt": {
          "en": "Additional view 5 of Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ"
        }
      },
      {
        "src": "products/lzd-4809282054-06.webp",
        "alt": {
          "en": "Additional view 6 of Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "bohemian shirt butterfly wing shirt Bat-shaped shirts, drawstring waist shirts, floral shirts, short dresses. Comfortable bohemian shirt Beautiful and unique flower pattern Can be worn by both chubby people, fat people, or people with a slim figure. There is a drawstring under the bust to give it a form-fitting shape. It is a shirt that is currently very popular, worn when traveling, or walking on the beach. Wearing it at home is comfortable and not hot. Free size, can fit from chest 34 inches to chest 54 inches, shirt length 35 inches. Every product is inspected before sending. ***If there is a problem with the product Don't just press deduct points. Please notify the shop first***",
      "th": "เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เสื้อลายดอก เดรสสั้น เสื้อโบฮีเมียนใส่สบาย ลายดอกสวยไม่ซ้ำใคร ใส่ได้ทั้งคนอวบ คนอ้วน หรือคนรูปร่างเพรียว มีเชือกรูดใต้อกให้เข้ารูป เข้าทรง เป็นเสื้อที่กำลังอยู่ในความนิยมสูง ใส่เที่ยว ใส่เดินเล่นชายหาด ใส่อยู่บ้านก็สบายตัว ไม่ร้อน ฟรีไซส์ ใส่ได้ตั้งแต่อก 34 นิ้ว ถึงอก 54 นิ้ว ความยาวเสื้อ 35 นิ้ว มีการตรวจสินค้าก่อนส่งทุกชิ้น ***หากมีปัญหากับสินค้า อย่างเพิ่งกดหักคะแนน ให้แจ้งมาทางร้านก่อนนะคะ***"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/a-i4809282054-s19897492331.html"
    }
  },
  {
    "code": "LZD-4768748778",
    "name": {
      "en": "Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects, Product Not Like The Market, Quality A+",
      "th": "เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ สินค้าไม่เหมือนตลาด คุณภาพ A+"
    },
    "category": "tops",
    "is_new": false,
    "price": 199,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "Black",
        "th": "KKE 4.1 สีดำ"
      },
      {
        "en": "Navy",
        "th": "KKE 4.2 สีกรมท่า"
      },
      {
        "en": "Sky Blue",
        "th": "KKE 4.3 สีฟ้า"
      },
      {
        "en": "Red",
        "th": "KKE 4.4 สีแดงส้ม"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "Fits 34 in / 54 in / 35 in",
          "th": "ฟรีไซส์ ใส่ได้ตั้งแต่อก 34 นิ้ว ถึงอก 54 นิ้ว ความยาวเสื้อ 35 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-4768748778-01.webp",
        "alt": {
          "en": "Main view of Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects, Product Not Like The Market, Quality A+",
          "th": "ภาพหลักของ เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ สินค้าไม่เหมือนตลาด คุณภาพ A+"
        }
      },
      {
        "src": "products/lzd-4768748778-02.webp",
        "alt": {
          "en": "Additional view 2 of Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects, Product Not Like The Market, Quality A+",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ สินค้าไม่เหมือนตลาด คุณภาพ A+"
        }
      },
      {
        "src": "products/lzd-4768748778-03.webp",
        "alt": {
          "en": "Additional view 3 of Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects, Product Not Like The Market, Quality A+",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ สินค้าไม่เหมือนตลาด คุณภาพ A+"
        }
      },
      {
        "src": "products/lzd-4768748778-04.webp",
        "alt": {
          "en": "Additional view 4 of Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects, Product Not Like The Market, Quality A+",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ สินค้าไม่เหมือนตลาด คุณภาพ A+"
        }
      },
      {
        "src": "products/lzd-4768748778-05.webp",
        "alt": {
          "en": "Additional view 5 of Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects, Product Not Like The Market, Quality A+",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ สินค้าไม่เหมือนตลาด คุณภาพ A+"
        }
      },
      {
        "src": "products/lzd-4768748778-06.webp",
        "alt": {
          "en": "Additional view 6 of Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects, Product Not Like The Market, Quality A+",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ สินค้าไม่เหมือนตลาด คุณภาพ A+"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "bohemian shirt butterfly wing shirt Bat-shaped shirts, drawstring waist shirts, floral shirts, short dresses. Comfortable bohemian shirt Beautiful and unique flower pattern Can be worn by both chubby people, fat people, or people with a slim figure. There is a drawstring under the bust to give it a form-fitting shape. It is a shirt that is currently very popular, worn when traveling, or walking on the beach. Wearing it at home is comfortable and not hot. Free size, can fit from chest 34 inches to chest 54 inches, shirt length 35 inches. Every product is inspected before sending. ***If there is a problem with the product Don't just press deduct points. Please notify the shop first***",
      "th": "เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เสื้อลายดอก เดรสสั้น เสื้อโบฮีเมียนใส่สบาย ลายดอกสวยไม่ซ้ำใคร ใส่ได้ทั้งคนอวบ คนอ้วน หรือคนรูปร่างเพรียว มีเชือกรูดใต้อกให้เข้ารูป เข้าทรง เป็นเสื้อที่กำลังอยู่ในความนิยมสูง ใส่เที่ยว ใส่เดินเล่นชายหาด ใส่อยู่บ้านก็สบายตัว ไม่ร้อน ฟรีไซส์ ใส่ได้ตั้งแต่อก 34 นิ้ว ถึงอก 54 นิ้ว ความยาวเสื้อ 35 นิ้ว มีการตรวจสินค้าก่อนส่งทุกชิ้น ***หากมีปัญหากับสินค้า อย่างเพิ่งกดหักคะแนน ให้แจ้งมาทางร้านก่อนนะคะ***"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/a-a-i4768748778-s19673429638.html"
    }
  },
  {
    "code": "LZD-4387977510",
    "name": {
      "en": "Bohemian Dress, Butterfly-Sleeve Top Batwing Shirt, Beautiful Dress, Comfortable To Wear, Dubai Pajamas, Drawstring Waist Shirt, Dress",
      "th": "ชุดโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว ชุดสวย ใส่สบาย ชุดนอนดูไบ เสื้อเอวรูด ชุดเดรส"
    },
    "category": "dresses",
    "is_new": false,
    "price": 259,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "Blue",
        "th": "KKLT1 Blue"
      },
      {
        "en": "Brown",
        "th": "KKLT2 Brown"
      },
      {
        "en": "- Dark Yellow",
        "th": "KKLT3- Dark Yellow"
      },
      {
        "en": "- Green",
        "th": "KKLT4- Green"
      },
      {
        "en": "- Light Blue",
        "th": "KKLT5- Light Blue"
      },
      {
        "en": "- Orange",
        "th": "KKLT6- Orange"
      },
      {
        "en": "- Pink",
        "th": "KKLT7- Pink"
      },
      {
        "en": "- Purple",
        "th": "KKLT8- Purple"
      },
      {
        "en": "- Lake Blue",
        "th": "KKLT9- Lake Blue"
      },
      {
        "en": "- Light yellow",
        "th": "KKLT10- Light yellow"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "ฟรีไซส์"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "Fits 34 in / 54 in / 52 in",
          "th": "ฟรีไซส์ ใส่ได้ตั้งแต่อก 34 นิ้ว ถึงอก 54 นิ้ว ความยาวเสื้อ 52 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-4387977510-01.webp",
        "alt": {
          "en": "Main view of Bohemian Dress, Butterfly-Sleeve Top Batwing Shirt, Beautiful Dress, Comfortable To Wear, Dubai Pajamas, Drawstring Waist Shirt, Dress",
          "th": "ภาพหลักของ ชุดโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว ชุดสวย ใส่สบาย ชุดนอนดูไบ เสื้อเอวรูด ชุดเดรส"
        }
      },
      {
        "src": "products/lzd-4387977510-02.webp",
        "alt": {
          "en": "Additional view 2 of Bohemian Dress, Butterfly-Sleeve Top Batwing Shirt, Beautiful Dress, Comfortable To Wear, Dubai Pajamas, Drawstring Waist Shirt, Dress",
          "th": "ภาพเพิ่มเติม 2 ของ ชุดโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว ชุดสวย ใส่สบาย ชุดนอนดูไบ เสื้อเอวรูด ชุดเดรส"
        }
      },
      {
        "src": "products/lzd-4387977510-03.webp",
        "alt": {
          "en": "Additional view 3 of Bohemian Dress, Butterfly-Sleeve Top Batwing Shirt, Beautiful Dress, Comfortable To Wear, Dubai Pajamas, Drawstring Waist Shirt, Dress",
          "th": "ภาพเพิ่มเติม 3 ของ ชุดโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว ชุดสวย ใส่สบาย ชุดนอนดูไบ เสื้อเอวรูด ชุดเดรส"
        }
      },
      {
        "src": "products/lzd-4387977510-04.webp",
        "alt": {
          "en": "Additional view 4 of Bohemian Dress, Butterfly-Sleeve Top Batwing Shirt, Beautiful Dress, Comfortable To Wear, Dubai Pajamas, Drawstring Waist Shirt, Dress",
          "th": "ภาพเพิ่มเติม 4 ของ ชุดโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว ชุดสวย ใส่สบาย ชุดนอนดูไบ เสื้อเอวรูด ชุดเดรส"
        }
      },
      {
        "src": "products/lzd-4387977510-05.webp",
        "alt": {
          "en": "Additional view 5 of Bohemian Dress, Butterfly-Sleeve Top Batwing Shirt, Beautiful Dress, Comfortable To Wear, Dubai Pajamas, Drawstring Waist Shirt, Dress",
          "th": "ภาพเพิ่มเติม 5 ของ ชุดโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว ชุดสวย ใส่สบาย ชุดนอนดูไบ เสื้อเอวรูด ชุดเดรส"
        }
      },
      {
        "src": "products/lzd-4387977510-06.webp",
        "alt": {
          "en": "Additional view 6 of Bohemian Dress, Butterfly-Sleeve Top Batwing Shirt, Beautiful Dress, Comfortable To Wear, Dubai Pajamas, Drawstring Waist Shirt, Dress",
          "th": "ภาพเพิ่มเติม 6 ของ ชุดโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว ชุดสวย ใส่สบาย ชุดนอนดูไบ เสื้อเอวรูด ชุดเดรส"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Bohemian dress, butterfly wing shirt Bat-shaped dress, drawstring waist shirt, Dubai pajamas Bohemian shirts are comfortable, beautiful, and can be worn by chubby people, fat people, or people with slim figures. There is a drawstring under the bust to give it a form-fitting shape. It is a shirt that is currently very popular, worn when traveling, or walking on the beach. Wearing it at home as pajamas is comfortable and not hot. Free size, can fit from chest 34 inches to chest 54 inches, shirt length 52 inches. Every product is inspected before sending. ***If there is a problem with the product Don't just press deduct points. Please notify the shop first***",
      "th": "ชุดโบฮีเมียน เสื้อปีกผีเสื้อ ชุดทรงค้างคาว เสื้อเอวรูด ชุดนอนดูไบ เสื้อโบฮีเมียนใส่สบาย สวย ใส่ได้ทั้งคนอวบ คนอ้วน หรือคนรูปร่างเพรียว มีเชือกรูดใต้อกให้เข้ารูป เข้าทรง เป็นเสื้อที่กำลังอยู่ในความนิยมสูง ใส่เที่ยว ใส่เดินเล่นชายหาด ใส่อยู่บ้านเป็นชุดนอนก็สบายตัว ไม่ร้อน ฟรีไซส์ ใส่ได้ตั้งแต่อก 34 นิ้ว ถึงอก 54 นิ้ว ความยาวเสื้อ 52 นิ้ว มีการตรวจสินค้าก่อนส่งทุกชิ้น ***หากมีปัญหากับสินค้า อย่างเพิ่งกดหักคะแนน ให้แจ้งมาทางร้านก่อนนะคะ***"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i4387977510-s17475827266.html"
    }
  },
  {
    "code": "LZD-4386959106",
    "name": {
      "en": "Floral Pattern Shirt. Floral Pattern Hemp Shirt. Songkran Shirts, Beach Shirts, Comfortable Shirts, Long Shirts, Front Slit Shirts",
      "th": "เสื้อลายดอก เสื้อป่านลายดอก เสื้อสงกรานต์ เสื้อชายหาด เสื้อใส่สบาย เสื้อทรงยาว เสื้อผ่าหน้า"
    },
    "category": "tops",
    "is_new": false,
    "price": 229,
    "fabric": {
      "en": "Lightweight woven fabric",
      "th": "ผ้าป่าน"
    },
    "colours": [
      {
        "en": "Black",
        "th": "สีดำ"
      },
      {
        "en": "Royal Blue",
        "th": "Royal Blue"
      },
      {
        "en": "Green",
        "th": "สีเขียว"
      },
      {
        "en": "Blue",
        "th": "สีน้ำเงินเข้ม"
      },
      {
        "en": "Sky Blue",
        "th": "สีฟ้าอ่อน"
      },
      {
        "en": "Orange",
        "th": "ส้ม"
      },
      {
        "en": "Purple",
        "th": "สีม่วง"
      },
      {
        "en": "Pink",
        "th": "สีชมพู"
      },
      {
        "en": "Yellow",
        "th": "Yellow"
      },
      {
        "en": "Red",
        "th": "สีแดง"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "ฟรีไซส์"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-4386959106-01.webp",
        "alt": {
          "en": "Main view of Floral Pattern Shirt. Floral Pattern Hemp Shirt. Songkran Shirts, Beach Shirts, Comfortable Shirts, Long Shirts, Front Slit Shirts",
          "th": "ภาพหลักของ เสื้อลายดอก เสื้อป่านลายดอก เสื้อสงกรานต์ เสื้อชายหาด เสื้อใส่สบาย เสื้อทรงยาว เสื้อผ่าหน้า"
        }
      },
      {
        "src": "products/lzd-4386959106-02.webp",
        "alt": {
          "en": "Additional view 2 of Floral Pattern Shirt. Floral Pattern Hemp Shirt. Songkran Shirts, Beach Shirts, Comfortable Shirts, Long Shirts, Front Slit Shirts",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อลายดอก เสื้อป่านลายดอก เสื้อสงกรานต์ เสื้อชายหาด เสื้อใส่สบาย เสื้อทรงยาว เสื้อผ่าหน้า"
        }
      },
      {
        "src": "products/lzd-4386959106-03.webp",
        "alt": {
          "en": "Additional view 3 of Floral Pattern Shirt. Floral Pattern Hemp Shirt. Songkran Shirts, Beach Shirts, Comfortable Shirts, Long Shirts, Front Slit Shirts",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อลายดอก เสื้อป่านลายดอก เสื้อสงกรานต์ เสื้อชายหาด เสื้อใส่สบาย เสื้อทรงยาว เสื้อผ่าหน้า"
        }
      },
      {
        "src": "products/lzd-4386959106-04.webp",
        "alt": {
          "en": "Additional view 4 of Floral Pattern Shirt. Floral Pattern Hemp Shirt. Songkran Shirts, Beach Shirts, Comfortable Shirts, Long Shirts, Front Slit Shirts",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อลายดอก เสื้อป่านลายดอก เสื้อสงกรานต์ เสื้อชายหาด เสื้อใส่สบาย เสื้อทรงยาว เสื้อผ่าหน้า"
        }
      },
      {
        "src": "products/lzd-4386959106-05.webp",
        "alt": {
          "en": "Additional view 5 of Floral Pattern Shirt. Floral Pattern Hemp Shirt. Songkran Shirts, Beach Shirts, Comfortable Shirts, Long Shirts, Front Slit Shirts",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อลายดอก เสื้อป่านลายดอก เสื้อสงกรานต์ เสื้อชายหาด เสื้อใส่สบาย เสื้อทรงยาว เสื้อผ่าหน้า"
        }
      },
      {
        "src": "products/lzd-4386959106-06.webp",
        "alt": {
          "en": "Additional view 6 of Floral Pattern Shirt. Floral Pattern Hemp Shirt. Songkran Shirts, Beach Shirts, Comfortable Shirts, Long Shirts, Front Slit Shirts",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อลายดอก เสื้อป่านลายดอก เสื้อสงกรานต์ เสื้อชายหาด เสื้อใส่สบาย เสื้อทรงยาว เสื้อผ่าหน้า"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Floral pattern shirt, made from linen, imported product, comfortable to wear, suitable for walking on the beach. Or wear it to travel It's a collared shirt with buttons and front slit throughout. There are cuts on both sides. Free size, can fit from chest 34 - 46 inches, length 34 inches, arm circumference 20 inches. ****Recommended washing method Should be soaked in salt water for 1 night and washed separately 1-2 times**** Every product is inspected before sending. ***If there is a problem with the product Don't just press deduct points. Please notify the shop first***",
      "th": "เสื้อลายดอก เป็นผ้าป่าน สินค้านำเข้า ใส่สบาย ใส่เดินเล่นชายหาด หรือใส่เที่ยว เป็นเสื้อคอปกกระดุมผ่าหน้าตลอด มีผ่าข้างทั้งสองข้าง ฟรีไซส์ ใส่ได้ตั้งแต่อก 34 - 46 นิ้ว ยาว 34 นิ้ว วงแขน 20 นิ้ว ****แนะนำวิธีซัก ควรแช่น้ำเกลือทิ้งไว้ 1 คืน และนำไปซักแยก 1-2 ครั้ง**** มีการตรวจสินค้าก่อนส่งทุกชิ้น ***หากมีปัญหากับสินค้า อย่างเพิ่งกดหักคะแนน ให้แจ้งมาทางร้านก่อนนะคะ***"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i4386959106-s17470479874.html"
    }
  },
  {
    "code": "LZD-16184292052",
    "name": {
      "en": "Long Dress, Batwing. There Is A Drawstring To Tighten The Waist Size, Thai Pattern, Bohemian Style",
      "th": "เดรสยาว ทรงปีกค้างคาวตัวยาว มีเชือกรูดปรัดขนาดเอว ลายไทย สไตล์โบฮีเมียน"
    },
    "category": "dresses",
    "is_new": false,
    "price": 259,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "Green",
        "th": "KTL101 สีเขียว"
      },
      {
        "en": "Yellow",
        "th": "KTL102 สีเหลืองขมิ้น"
      },
      {
        "en": "Red",
        "th": "KTL103 สีแดง"
      },
      {
        "en": "Grey",
        "th": "KTL104 สีเทา"
      },
      {
        "en": "Green",
        "th": "KTL105 สีเขียวเข้ม"
      },
      {
        "en": "Blue",
        "th": "KTL106 สีน้ำเงิน"
      },
      {
        "en": "Brown",
        "th": "KTL107 สีน้ำตาล"
      },
      {
        "en": "Yellow",
        "th": "KTL108 สีเหลืองอ่อน"
      },
      {
        "en": "สีบานเย็น",
        "th": "KTL109 สีบานเย็น"
      },
      {
        "en": "Sky Blue",
        "th": "KTL110 สีฟ้า"
      },
      {
        "en": "Purple",
        "th": "KTL111 สีม่วง"
      },
      {
        "en": "Orange",
        "th": "KTL112 สีส้ม"
      },
      {
        "en": "Sky Blue",
        "th": "KTL1113 ฟ้าทะเล"
      },
      {
        "en": "Grey",
        "th": "KTL114 เทาเข้ม"
      },
      {
        "en": "Green",
        "th": "KTL115 สีเขียวสด"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "52 in / 132 cm",
          "th": "เดรสมีความยาวที่ 52 นิ้ว หรือ 132 เซนติเมตร"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "Fits 34–54 in",
          "th": "อกใส่ได้ตั้งแต่ขนาด 34 - 54 นิ้ว มีสายรูดปรับขนาดอยู่บริเวณช่วงเอว สามารถใส่ได้ทั้งสาวร้างเพรียวบาง ไปจนถึงสาวอวบร่างใหญ่"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16184292052-01.webp",
        "alt": {
          "en": "Main view of Long Dress, Batwing. There Is A Drawstring To Tighten The Waist Size, Thai Pattern, Bohemian Style",
          "th": "ภาพหลักของ เดรสยาว ทรงปีกค้างคาวตัวยาว มีเชือกรูดปรัดขนาดเอว ลายไทย สไตล์โบฮีเมียน"
        }
      },
      {
        "src": "products/lzd-16184292052-02.webp",
        "alt": {
          "en": "Additional view 2 of Long Dress, Batwing. There Is A Drawstring To Tighten The Waist Size, Thai Pattern, Bohemian Style",
          "th": "ภาพเพิ่มเติม 2 ของ เดรสยาว ทรงปีกค้างคาวตัวยาว มีเชือกรูดปรัดขนาดเอว ลายไทย สไตล์โบฮีเมียน"
        }
      },
      {
        "src": "products/lzd-16184292052-03.webp",
        "alt": {
          "en": "Additional view 3 of Long Dress, Batwing. There Is A Drawstring To Tighten The Waist Size, Thai Pattern, Bohemian Style",
          "th": "ภาพเพิ่มเติม 3 ของ เดรสยาว ทรงปีกค้างคาวตัวยาว มีเชือกรูดปรัดขนาดเอว ลายไทย สไตล์โบฮีเมียน"
        }
      },
      {
        "src": "products/lzd-16184292052-04.webp",
        "alt": {
          "en": "Additional view 4 of Long Dress, Batwing. There Is A Drawstring To Tighten The Waist Size, Thai Pattern, Bohemian Style",
          "th": "ภาพเพิ่มเติม 4 ของ เดรสยาว ทรงปีกค้างคาวตัวยาว มีเชือกรูดปรัดขนาดเอว ลายไทย สไตล์โบฮีเมียน"
        }
      },
      {
        "src": "products/lzd-16184292052-05.webp",
        "alt": {
          "en": "Additional view 5 of Long Dress, Batwing. There Is A Drawstring To Tighten The Waist Size, Thai Pattern, Bohemian Style",
          "th": "ภาพเพิ่มเติม 5 ของ เดรสยาว ทรงปีกค้างคาวตัวยาว มีเชือกรูดปรัดขนาดเอว ลายไทย สไตล์โบฮีเมียน"
        }
      },
      {
        "src": "products/lzd-16184292052-06.webp",
        "alt": {
          "en": "Additional view 6 of Long Dress, Batwing. There Is A Drawstring To Tighten The Waist Size, Thai Pattern, Bohemian Style",
          "th": "ภาพเพิ่มเติม 6 ของ เดรสยาว ทรงปีกค้างคาวตัวยาว มีเชือกรูดปรัดขนาดเอว ลายไทย สไตล์โบฮีเมียน"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Long batwing style dress with a drawstring to tighten the waist, Thai pattern, Bohemian style. Dresses that can be worn while traveling go to a party or wear it at home Can also be worn as pajamas. Wear it anywhere and it will stand out and be eye-catching. Dress size The dress is 52 inches or 132 centimeters long. Chest size can be worn from 34 - 54 inches. There is a drawstring to adjust the size around the waist. Can be worn by both slim and young women. to a plump girl with a big figure",
      "th": "เดรสทรงปีกค้างคาวตัวยาวมีเชือกรูดปรัดขนาดเอว ลายไทย สไตล์โบฮีเมียน เดรสที่สามารถใส่ไปเที่ยว ไปงานสังสรรค์ หรือใส่อยู่บ้าน ใส่เป็นชุดนอนก็ยังได้ ใส่ไปที่ไหนก็ดูเด่นสะดุดตา ขนาดของเดรส เดรสมีความยาวที่ 52 นิ้ว หรือ 132 เซนติเมตร อกใส่ได้ตั้งแต่ขนาด 34 - 54 นิ้ว มีสายรูดปรับขนาดอยู่บริเวณช่วงเอว สามารถใส่ได้ทั้งสาวร้างเพรียวบาง ไปจนถึงสาวอวบร่างใหญ่"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16184292052-s127280572735.html"
    }
  },
  {
    "code": "LZD-16176662795",
    "name": {
      "en": "Embroidered Lightweight Woven Top, Bright Colors, Floral Pattern, Ties At The Back",
      "th": "เสื้อผ้าป่านงานปัก สีสดใส ลวดลายลายดอก ผูกหลัง"
    },
    "category": "tops",
    "is_new": false,
    "price": 459,
    "fabric": {
      "en": "Lightweight woven fabric",
      "th": "ผ้าป่าน"
    },
    "colours": [
      {
        "en": "TPM001",
        "th": "TPM001"
      },
      {
        "en": "TPM002",
        "th": "TPM002"
      },
      {
        "en": "TPM003",
        "th": "TPM003"
      },
      {
        "en": "TPM004",
        "th": "TPM004"
      },
      {
        "en": "TPM005",
        "th": "TPM005"
      },
      {
        "en": "TPM006",
        "th": "TPM006"
      },
      {
        "en": "TPM007",
        "th": "TPM007"
      },
      {
        "en": "TPM009",
        "th": "TPM009"
      },
      {
        "en": "TPM010",
        "th": "TPM010"
      },
      {
        "en": "TPM011",
        "th": "TPM011"
      },
      {
        "en": "TPM012",
        "th": "TPM012"
      },
      {
        "en": "TPM013",
        "th": "TPM013"
      },
      {
        "en": "TPM014",
        "th": "TPM014"
      },
      {
        "en": "TPM015",
        "th": "TPM015"
      },
      {
        "en": "TPM016",
        "th": "TPM016"
      },
      {
        "en": "TPM017",
        "th": "TPM017"
      },
      {
        "en": "TPM018",
        "th": "TPM018"
      },
      {
        "en": "TPM019",
        "th": "TPM019"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "Approx. 46 in / 117 cm",
          "th": "อก 46 นิ้ว (ประมาณ 117 ซม.)"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "Approx. 27 in / 69 cm",
          "th": "ความยาว 27 นิ้ว (ประมาณ 69 ซม.)"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16176662795-01.webp",
        "alt": {
          "en": "Main view of Embroidered Lightweight Woven Top, Bright Colors, Floral Pattern, Ties At The Back",
          "th": "ภาพหลักของ เสื้อผ้าป่านงานปัก สีสดใส ลวดลายลายดอก ผูกหลัง"
        }
      },
      {
        "src": "products/lzd-16176662795-02.webp",
        "alt": {
          "en": "Additional view 2 of Embroidered Lightweight Woven Top, Bright Colors, Floral Pattern, Ties At The Back",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อผ้าป่านงานปัก สีสดใส ลวดลายลายดอก ผูกหลัง"
        }
      },
      {
        "src": "products/lzd-16176662795-03.webp",
        "alt": {
          "en": "Additional view 3 of Embroidered Lightweight Woven Top, Bright Colors, Floral Pattern, Ties At The Back",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อผ้าป่านงานปัก สีสดใส ลวดลายลายดอก ผูกหลัง"
        }
      },
      {
        "src": "products/lzd-16176662795-04.webp",
        "alt": {
          "en": "Additional view 4 of Embroidered Lightweight Woven Top, Bright Colors, Floral Pattern, Ties At The Back",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อผ้าป่านงานปัก สีสดใส ลวดลายลายดอก ผูกหลัง"
        }
      },
      {
        "src": "products/lzd-16176662795-05.webp",
        "alt": {
          "en": "Additional view 5 of Embroidered Lightweight Woven Top, Bright Colors, Floral Pattern, Ties At The Back",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อผ้าป่านงานปัก สีสดใส ลวดลายลายดอก ผูกหลัง"
        }
      },
      {
        "src": "products/lzd-16176662795-06.webp",
        "alt": {
          "en": "Additional view 6 of Embroidered Lightweight Woven Top, Bright Colors, Floral Pattern, Ties At The Back",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อผ้าป่านงานปัก สีสดใส ลวดลายลายดอก ผูกหลัง"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "🌸 My dear friend...this one is very cute 💕 Beautiful hemp clothes, comfortable to wear, light fabric, good ventilation, can be worn every day, whether it be traveling, working or just chilling, it's beautiful. ✨ Highlights 🌼 Beautiful and unique patterns. 🌼 Each color melts, but there is only one. 🌼 Embroidered decorations add uniqueness. 🌼 There is a drawstring at the back for adjusting the shape. 🌼 Comfortable shape, camouflages a cute figure. 📏 Size Chest 46 inches (approx. 117 cm.) Length 27 inches (approximately 69 cm) 💖 Those who like unique shirts must hurry. You can choose only what is in the picture. because there is only one dissolved It's all gone. 📦 Ready to send Please chat to ask about your favorite colors and patterns.",
      "th": "🌸 เพื่อนสาวจ๋าาาาาา...ตัวนี้น่ารักมากกก 💕 เสื้อผ้าป่านทรงสวย ใส่สบาย เนื้อผ้าเบา ระบายอากาศดี ใส่ได้ทุกวัน จะใส่เที่ยว ใส่ทำงาน หรือใส่ชิลๆ ก็สวยค่ะ ✨ จุดเด่น 🌼 ลวดลายสวยไม่ซ้ำ 🌼 แต่ละสี แต่ละลาย มีเพียงตัวเดียวเท่านั้น 🌼 งานแต่งลายปักเพิ่มความโดดเด่น 🌼 มีเชือกผูกด้านหลัง ปรับทรงได้ 🌼 ทรงใส่สบาย พรางหุ่นน่ารัก 📏 ขนาด อก 46 นิ้ว (ประมาณ 117 ซม.) ความยาว 27 นิ้ว (ประมาณ 69 ซม.) 💖 สายชอบเสื้อไม่ซ้ำใครต้องรีบเลยค่ะ เลือกได้เฉพาะตัวที่มีในภาพ เพราะแต่ละลายมีแค่ตัวเดียว หมดแล้วหมดเลยนะคะ 📦 พร้อมส่ง ทักแชทสอบถามสีและลายที่ชอบได้เลยค่ะ"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16176662795-s127231507403.html"
    }
  },
  {
    "code": "LZD-16066044781",
    "name": {
      "en": "Short Bohemian Style Batwing Shirt With Black And White Pattern. There Is A Drawstring To Adjust The Waist Size",
      "th": "เสื้อทรงค้างคาวสไตล์โบฮีเมียนลายขาวดำตัวสั้น มีสายปรับรูดขนาดเอว"
    },
    "category": "tops",
    "is_new": false,
    "price": 199,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "White and Black",
        "th": "KTS201 สีขาวดำ"
      },
      {
        "en": "Black and White",
        "th": "KTS202 สีดำขาว"
      },
      {
        "en": "Black and White",
        "th": "KTS301 สีดำขาว"
      },
      {
        "en": "White and Black",
        "th": "KTS302 สีขาวดำ"
      },
      {
        "en": "Black and White",
        "th": "KTS701 สีดำขาว"
      },
      {
        "en": "White and Black",
        "th": "KTS702 สีขาวดำ"
      },
      {
        "en": "Black and White",
        "th": "KTS1201 สีดำขาว"
      },
      {
        "en": "White and Black",
        "th": "KTS1202 สีขาวดำ"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "34 in",
          "th": "ความยาวชุด 34 นิ้ว"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "Fits 34 / 54",
          "th": "รอบอกใส่ได้ตั้งแต่ 34\"–54\""
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16066044781-01.webp",
        "alt": {
          "en": "Main view of Short Bohemian Style Batwing Shirt With Black And White Pattern. There Is A Drawstring To Adjust The Waist Size",
          "th": "ภาพหลักของ เสื้อทรงค้างคาวสไตล์โบฮีเมียนลายขาวดำตัวสั้น มีสายปรับรูดขนาดเอว"
        }
      },
      {
        "src": "products/lzd-16066044781-02.webp",
        "alt": {
          "en": "Additional view 2 of Short Bohemian Style Batwing Shirt With Black And White Pattern. There Is A Drawstring To Adjust The Waist Size",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อทรงค้างคาวสไตล์โบฮีเมียนลายขาวดำตัวสั้น มีสายปรับรูดขนาดเอว"
        }
      },
      {
        "src": "products/lzd-16066044781-03.webp",
        "alt": {
          "en": "Additional view 3 of Short Bohemian Style Batwing Shirt With Black And White Pattern. There Is A Drawstring To Adjust The Waist Size",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อทรงค้างคาวสไตล์โบฮีเมียนลายขาวดำตัวสั้น มีสายปรับรูดขนาดเอว"
        }
      },
      {
        "src": "products/lzd-16066044781-04.webp",
        "alt": {
          "en": "Additional view 4 of Short Bohemian Style Batwing Shirt With Black And White Pattern. There Is A Drawstring To Adjust The Waist Size",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อทรงค้างคาวสไตล์โบฮีเมียนลายขาวดำตัวสั้น มีสายปรับรูดขนาดเอว"
        }
      },
      {
        "src": "products/lzd-16066044781-05.webp",
        "alt": {
          "en": "Additional view 5 of Short Bohemian Style Batwing Shirt With Black And White Pattern. There Is A Drawstring To Adjust The Waist Size",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อทรงค้างคาวสไตล์โบฮีเมียนลายขาวดำตัวสั้น มีสายปรับรูดขนาดเอว"
        }
      },
      {
        "src": "products/lzd-16066044781-06.webp",
        "alt": {
          "en": "Additional view 6 of Short Bohemian Style Batwing Shirt With Black And White Pattern. There Is A Drawstring To Adjust The Waist Size",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อทรงค้างคาวสไตล์โบฮีเมียนลายขาวดำตัวสั้น มีสายปรับรูดขนาดเอว"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "✨ Short, bohemian style, bat-shaped, drawstring waisted dress with black and white pattern ✨ 🌺 Comfortable to wear, chic style. Just wear it and you'll instantly be beautiful! 🌺 ✅ Dress length 34 inches. ✅ Fits bust size from 34\"–54\". ✅ There is a drawstring under the chest. Adjust to fit as desired. ✅ Soft fabric, comfortable to wear, not hot. ✅ Darika pattern in the style of tribal juncos, beautiful, strange, and unique. 💥 Wear it to travel, wear it to chill, wear it at home and it's chic 💥 📌 Can be worn by every body shape. Wear it and you won't feel uncomfortable. 🛒 Ready to send‼️",
      "th": "✨ ชุดทรงค้างคาวเอวรูดตัวสั้นสไตล์โบฮีเมียนลายขาวดำ ✨ 🌺 ใส่สบาย สไตล์ชิค ๆ แค่สวมก็สวยปังทันที! 🌺 ✅ ความยาวชุด 34 นิ้ว ✅ รอบอกใส่ได้ตั้งแต่ 34\"–54\" ✅ มีเชือกรูดใต้อก ปรับเข้ารูปได้ตามต้องการ ✅ เนื้อผ้านิ่ม ใส่สบาย ไม่ร้อน ✅ ลายดาริกาแนวจังโก้ชนเผ่า สวย แปลก ไม่ซ้ำใคร 💥 ใส่เที่ยว ใส่ชิลล์ ใส่อยู่บ้านก็เก๋ 💥 📌 ใส่ได้ทุกหุ่น ใส่แล้วไม่อึดอัด 🛒 พร้อมส่ง‼️"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16066044781-s126488313799.html"
    }
  },
  {
    "code": "LZD-4497143899",
    "name": {
      "en": "Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects, Product Not Like The Market, Quality A+",
      "th": "เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ สินค้าไม่เหมือนตลาด คุณภาพ A+"
    },
    "category": "tops",
    "is_new": false,
    "price": 199,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": ".1",
        "th": "KKE1.1"
      },
      {
        "en": ".2",
        "th": "KKE1.2"
      },
      {
        "en": ".3",
        "th": "KKE1.3"
      },
      {
        "en": ".4",
        "th": "KKE1.4"
      },
      {
        "en": ".5",
        "th": "KKE1.5"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "ฟรีไซส์"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "Fits 34 in / 54 in / 35 in",
          "th": "ฟรีไซส์ ใส่ได้ตั้งแต่อก 34 นิ้ว ถึงอก 54 นิ้ว ความยาวเสื้อ 35 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-4497143899-01.webp",
        "alt": {
          "en": "Main view of Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects, Product Not Like The Market, Quality A+",
          "th": "ภาพหลักของ เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ สินค้าไม่เหมือนตลาด คุณภาพ A+"
        }
      },
      {
        "src": "products/lzd-4497143899-02.webp",
        "alt": {
          "en": "Additional view 2 of Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects, Product Not Like The Market, Quality A+",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ สินค้าไม่เหมือนตลาด คุณภาพ A+"
        }
      },
      {
        "src": "products/lzd-4497143899-03.webp",
        "alt": {
          "en": "Additional view 3 of Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects, Product Not Like The Market, Quality A+",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ สินค้าไม่เหมือนตลาด คุณภาพ A+"
        }
      },
      {
        "src": "products/lzd-4497143899-04.webp",
        "alt": {
          "en": "Additional view 4 of Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects, Product Not Like The Market, Quality A+",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ สินค้าไม่เหมือนตลาด คุณภาพ A+"
        }
      },
      {
        "src": "products/lzd-4497143899-05.webp",
        "alt": {
          "en": "Additional view 5 of Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects, Product Not Like The Market, Quality A+",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ สินค้าไม่เหมือนตลาด คุณภาพ A+"
        }
      },
      {
        "src": "products/lzd-4497143899-06.webp",
        "alt": {
          "en": "Additional view 6 of Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects, Product Not Like The Market, Quality A+",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ สินค้าไม่เหมือนตลาด คุณภาพ A+"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "bohemian shirt butterfly wing shirt Bat-shaped shirts, drawstring waist shirts, floral shirts, short dresses. Comfortable bohemian shirt Beautiful and unique flower pattern Can be worn by both chubby people, fat people, or people with a slim figure. There is a drawstring under the bust to give it a form-fitting shape. It is a shirt that is currently very popular, worn when traveling, or walking on the beach. Wearing it at home is comfortable and not hot. Free size, can fit from chest 34 inches to chest 54 inches, shirt length 35 inches. Every product is inspected before sending. ***If there is a problem with the product Don't just press deduct points. Please notify the shop first***",
      "th": "เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เสื้อลายดอก เดรสสั้น เสื้อโบฮีเมียนใส่สบาย ลายดอกสวยไม่ซ้ำใคร ใส่ได้ทั้งคนอวบ คนอ้วน หรือคนรูปร่างเพรียว มีเชือกรูดใต้อกให้เข้ารูป เข้าทรง เป็นเสื้อที่กำลังอยู่ในความนิยมสูง ใส่เที่ยว ใส่เดินเล่นชายหาด ใส่อยู่บ้านก็สบายตัว ไม่ร้อน ฟรีไซส์ ใส่ได้ตั้งแต่อก 34 นิ้ว ถึงอก 54 นิ้ว ความยาวเสื้อ 35 นิ้ว มีการตรวจสินค้าก่อนส่งทุกชิ้น ***หากมีปัญหากับสินค้า อย่างเพิ่งกดหักคะแนน ให้แจ้งมาทางร้านก่อนนะคะ***"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/a-a-i4497143899-s18214934221.html"
    }
  },
  {
    "code": "LZD-16196174324",
    "name": {
      "en": "Short Batwing Dress, Safari Flowers, Pattern All Over",
      "th": "เดรสสั้นทรงปีกค้างคาว บุปผาซาฟารี ลวดลายทั้งตัว"
    },
    "category": "dresses",
    "is_new": false,
    "price": 199,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "Sky Blue",
        "th": "KTS2301 ฟ้า"
      },
      {
        "en": "Green",
        "th": "KTS2302 เขียว"
      },
      {
        "en": "Orange",
        "th": "KTS2303 ส้ม"
      },
      {
        "en": "Blue",
        "th": "KTS2304 น้ำเงิน"
      },
      {
        "en": "Purple",
        "th": "KTS2305 ม่วง"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "34–54 in",
          "th": "อก 34-54 นิ้ว"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "34 in",
          "th": "ยาว 34 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16196174324-01.webp",
        "alt": {
          "en": "Main view of Short Batwing Dress, Safari Flowers, Pattern All Over",
          "th": "ภาพหลักของ เดรสสั้นทรงปีกค้างคาว บุปผาซาฟารี ลวดลายทั้งตัว"
        }
      },
      {
        "src": "products/lzd-16196174324-02.webp",
        "alt": {
          "en": "Additional view 2 of Short Batwing Dress, Safari Flowers, Pattern All Over",
          "th": "ภาพเพิ่มเติม 2 ของ เดรสสั้นทรงปีกค้างคาว บุปผาซาฟารี ลวดลายทั้งตัว"
        }
      },
      {
        "src": "products/lzd-16196174324-03.webp",
        "alt": {
          "en": "Additional view 3 of Short Batwing Dress, Safari Flowers, Pattern All Over",
          "th": "ภาพเพิ่มเติม 3 ของ เดรสสั้นทรงปีกค้างคาว บุปผาซาฟารี ลวดลายทั้งตัว"
        }
      },
      {
        "src": "products/lzd-16196174324-04.webp",
        "alt": {
          "en": "Additional view 4 of Short Batwing Dress, Safari Flowers, Pattern All Over",
          "th": "ภาพเพิ่มเติม 4 ของ เดรสสั้นทรงปีกค้างคาว บุปผาซาฟารี ลวดลายทั้งตัว"
        }
      },
      {
        "src": "products/lzd-16196174324-05.webp",
        "alt": {
          "en": "Additional view 5 of Short Batwing Dress, Safari Flowers, Pattern All Over",
          "th": "ภาพเพิ่มเติม 5 ของ เดรสสั้นทรงปีกค้างคาว บุปผาซาฟารี ลวดลายทั้งตัว"
        }
      },
      {
        "src": "products/lzd-16196174324-06.webp",
        "alt": {
          "en": "Additional view 6 of Short Batwing Dress, Safari Flowers, Pattern All Over",
          "th": "ภาพเพิ่มเติม 6 ของ เดรสสั้นทรงปีกค้างคาว บุปผาซาฟารี ลวดลายทั้งตัว"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "💖 Short bat wing style dress, comfortable to wear, camouflages your beautiful figure, perfect for every size! Chest 34-54 inches | Length 34 inches | Many colors Wear it and you'll be beautiful, all in one ✨ Which color do you like? Hurry and talk to us. Limited quantity. 🛍️",
      "th": "💖 เดรสสั้นทรงปีกค้างคาว ใส่สบาย พรางหุ่นสวย เป๊ะทุกไซซ์! อก 34-54 นิ้ว | ยาว 34 นิ้ว | มีหลายสี ใส่แล้วสวย จบในตัวเดียว ✨ สีไหนถูกใจ รีบทักเลย มีจำนวนจำกัดนะคะ 🛍️"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16196174324-s127313137259.html"
    }
  },
  {
    "code": "LZD-16157119451",
    "name": {
      "en": "Short Dress With Bat Wings Shape Small Paisley Pattern, One Size",
      "th": "เดรสสั้น ทรงปีกค้างคาว ลายลูกน้ำเล็ก ฟรีไซส์"
    },
    "category": "dresses",
    "is_new": false,
    "price": 199,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "Green",
        "th": "KTS1501 สีส้มเขียว"
      },
      {
        "en": "Purple",
        "th": "KTS1502 สีม่วง"
      },
      {
        "en": "Sky Blue",
        "th": "KTS1503 สีฟ้าแดง"
      },
      {
        "en": "Sky Blue",
        "th": "KTS1504 สีน้ำตาลฟ้า"
      },
      {
        "en": "Black",
        "th": "KTS1505 สีดำแดง"
      },
      {
        "en": "Sky Blue",
        "th": "KTS1506 สีชมพูฟ้า"
      },
      {
        "en": "Navy",
        "th": "KTS1507 สีกรมท่า"
      },
      {
        "en": "Red",
        "th": "KTS1508 สีแดงส้ม"
      },
      {
        "en": "Red",
        "th": "KTS1509 สีแดงเข้ม"
      },
      {
        "en": "Black and White",
        "th": "KTS1510 สีดำขาว"
      },
      {
        "en": "White and Black",
        "th": "KTS1511 สีขาวดำ"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "Fits 34–54 in",
          "th": "รอบอกใสได้ขนาดตั้งแต่ 34 - 54 นิ้ว (ทรงเสื้อเป็นสี่เหลี่ยม อก เอว และสะโพกจึงมีขนาดเท่ากัน แต่ช่วงเอวมีเชือกรูดปรับขนาด จึงสามารถปรับขนาดเสื้อให้เข้าตามรูปร่างของผู้ใส่ได้)"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "34 in",
          "th": "ความยาว 34 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16157119451-01.webp",
        "alt": {
          "en": "Main view of Short Dress With Bat Wings Shape Small Paisley Pattern, One Size",
          "th": "ภาพหลักของ เดรสสั้น ทรงปีกค้างคาว ลายลูกน้ำเล็ก ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16157119451-02.webp",
        "alt": {
          "en": "Additional view 2 of Short Dress With Bat Wings Shape Small Paisley Pattern, One Size",
          "th": "ภาพเพิ่มเติม 2 ของ เดรสสั้น ทรงปีกค้างคาว ลายลูกน้ำเล็ก ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16157119451-03.webp",
        "alt": {
          "en": "Additional view 3 of Short Dress With Bat Wings Shape Small Paisley Pattern, One Size",
          "th": "ภาพเพิ่มเติม 3 ของ เดรสสั้น ทรงปีกค้างคาว ลายลูกน้ำเล็ก ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16157119451-04.webp",
        "alt": {
          "en": "Additional view 4 of Short Dress With Bat Wings Shape Small Paisley Pattern, One Size",
          "th": "ภาพเพิ่มเติม 4 ของ เดรสสั้น ทรงปีกค้างคาว ลายลูกน้ำเล็ก ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16157119451-05.webp",
        "alt": {
          "en": "Additional view 5 of Short Dress With Bat Wings Shape Small Paisley Pattern, One Size",
          "th": "ภาพเพิ่มเติม 5 ของ เดรสสั้น ทรงปีกค้างคาว ลายลูกน้ำเล็ก ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16157119451-06.webp",
        "alt": {
          "en": "Additional view 6 of Short Dress With Bat Wings Shape Small Paisley Pattern, One Size",
          "th": "ภาพเพิ่มเติม 6 ของ เดรสสั้น ทรงปีกค้างคาว ลายลูกน้ำเล็ก ฟรีไซส์"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Kaftan style dresses with beautiful bohemian patterns like this sell for many looks. Whether you wear it to the beach, go to the mall, or wear it at home in a chic way. Comfortable to wear. There is a drawstring at the waist to adjust the size to your body shape. Can be worn by both girls with slender figures or chubby girls with large figures. Shirt size - Chest size from 34 - 54 inches (the shirt is square, so the chest, waist, and hips are the same size. But the waist has a drawstring to adjust the size. Therefore, the size of the shirt can be adjusted to fit the wearer's body shape) -Length 34 inches",
      "th": "ชุดเดรสสไตล์คาฟทัน (Kaftan) ลายโบฮีเมียนสวยๆ แบบนี้ ขายได้หลายลุคเลยครับ ไม่ว่าจะใส่ไปเที่ยวทะเล เดินห้าง หรือใส่อยู่บ้านเก๋ๆ สวมใส่สบาย มีเชือกรูดเอวปรับขนาดให้เข้ากับรูปร่าง ใส่ได้ทั้งสาวหุ่นเพรียวบาง หรือสาวอวบ รูปร่างใหญ่ ขนาดเสื้อ -รอบอกใสได้ขนาดตั้งแต่ 34 - 54 นิ้ว (ทรงเสื้อเป็นสี่เหลี่ยม อก เอว และสะโพกจึงมีขนาดเท่ากัน แต่ช่วงเอวมีเชือกรูดปรับขนาด จึงสามารถปรับขนาดเสื้อให้เข้าตามรูปร่างของผู้ใส่ได้) -ความยาว 34 นิ้ว"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16157119451-s127153093575.html"
    }
  },
  {
    "code": "LZD-16196194453",
    "name": {
      "en": "Short Batwing Dress Persian Paisley Pattern, One Size",
      "th": "เดรสสั้นทรงปีกค้างคาว ลายลูกน้ำเปอร์เซีย ฟรีไซส์"
    },
    "category": "dresses",
    "is_new": false,
    "price": 199,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "Blue",
        "th": "KTS2101 น้ำเงิน"
      },
      {
        "en": "Sky Blue",
        "th": "KTS2102 ฟ้า"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16196194453-01.webp",
        "alt": {
          "en": "Main view of Short Batwing Dress Persian Paisley Pattern, One Size",
          "th": "ภาพหลักของ เดรสสั้นทรงปีกค้างคาว ลายลูกน้ำเปอร์เซีย ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16196194453-02.webp",
        "alt": {
          "en": "Additional view 2 of Short Batwing Dress Persian Paisley Pattern, One Size",
          "th": "ภาพเพิ่มเติม 2 ของ เดรสสั้นทรงปีกค้างคาว ลายลูกน้ำเปอร์เซีย ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16196194453-03.webp",
        "alt": {
          "en": "Additional view 3 of Short Batwing Dress Persian Paisley Pattern, One Size",
          "th": "ภาพเพิ่มเติม 3 ของ เดรสสั้นทรงปีกค้างคาว ลายลูกน้ำเปอร์เซีย ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16196194453-04.webp",
        "alt": {
          "en": "Additional view 4 of Short Batwing Dress Persian Paisley Pattern, One Size",
          "th": "ภาพเพิ่มเติม 4 ของ เดรสสั้นทรงปีกค้างคาว ลายลูกน้ำเปอร์เซีย ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16196194453-05.webp",
        "alt": {
          "en": "Additional view 5 of Short Batwing Dress Persian Paisley Pattern, One Size",
          "th": "ภาพเพิ่มเติม 5 ของ เดรสสั้นทรงปีกค้างคาว ลายลูกน้ำเปอร์เซีย ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16196194453-06.webp",
        "alt": {
          "en": "Additional view 6 of Short Batwing Dress Persian Paisley Pattern, One Size",
          "th": "ภาพเพิ่มเติม 6 ของ เดรสสั้นทรงปีกค้างคาว ลายลูกน้ำเปอร์เซีย ฟรีไซส์"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "✨ Beautiful work, wear it and look expensive! Bat wing style dress, bust 34-54 inches. Can be worn by small size girls to chubby girls 💕 There are many colors ready to ship. Hurry and reserve before the colors are sold out.",
      "th": "✨ งานสวย ใส่แล้วดูแพง! เดรสทรงปีกค้างคาว อก 34-54 นิ้ว ใส่ได้ตั้งแต่สาวไซซ์เล็กถึงสาวอวบ 💕 มีหลายสี พร้อมส่ง รีบจองก่อนสีหมดค่ะ"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16196194453-s127329094943.html"
    }
  },
  {
    "code": "LZD-16202777990",
    "name": {
      "en": "Batwing Style Rayon Shirt With Boho Embroidery. Chest 48 Inches",
      "th": "เสื้อเรยอนทรงปีกค้างคาว งานปักโบโฮ อก 48 นิ้ว"
    },
    "category": "tops",
    "is_new": false,
    "price": 499,
    "fabric": {
      "en": "Rayon",
      "th": "ผ้าเรยอน"
    },
    "colours": [
      {
        "en": "Red",
        "th": "RK201 แดง"
      },
      {
        "en": "Green",
        "th": "RK202 เขียว"
      },
      {
        "en": "RK203",
        "th": "RK203"
      },
      {
        "en": "RK204",
        "th": "RK204"
      },
      {
        "en": "RK205",
        "th": "RK205"
      },
      {
        "en": "RK206",
        "th": "RK206"
      },
      {
        "en": "RK207",
        "th": "RK207"
      },
      {
        "en": "RK208",
        "th": "RK208"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "48 in",
          "th": "อก 48 นิ้ว"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "27 in",
          "th": "ยาว 27 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16202777990-01.webp",
        "alt": {
          "en": "Main view of Batwing Style Rayon Shirt With Boho Embroidery. Chest 48 Inches",
          "th": "ภาพหลักของ เสื้อเรยอนทรงปีกค้างคาว งานปักโบโฮ อก 48 นิ้ว"
        }
      },
      {
        "src": "products/lzd-16202777990-02.webp",
        "alt": {
          "en": "Additional view 2 of Batwing Style Rayon Shirt With Boho Embroidery. Chest 48 Inches",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อเรยอนทรงปีกค้างคาว งานปักโบโฮ อก 48 นิ้ว"
        }
      },
      {
        "src": "products/lzd-16202777990-03.webp",
        "alt": {
          "en": "Additional view 3 of Batwing Style Rayon Shirt With Boho Embroidery. Chest 48 Inches",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อเรยอนทรงปีกค้างคาว งานปักโบโฮ อก 48 นิ้ว"
        }
      },
      {
        "src": "products/lzd-16202777990-04.webp",
        "alt": {
          "en": "Additional view 4 of Batwing Style Rayon Shirt With Boho Embroidery. Chest 48 Inches",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อเรยอนทรงปีกค้างคาว งานปักโบโฮ อก 48 นิ้ว"
        }
      },
      {
        "src": "products/lzd-16202777990-05.webp",
        "alt": {
          "en": "Additional view 5 of Batwing Style Rayon Shirt With Boho Embroidery. Chest 48 Inches",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อเรยอนทรงปีกค้างคาว งานปักโบโฮ อก 48 นิ้ว"
        }
      },
      {
        "src": "products/lzd-16202777990-06.webp",
        "alt": {
          "en": "Additional view 6 of Batwing Style Rayon Shirt With Boho Embroidery. Chest 48 Inches",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อเรยอนทรงปีกค้างคาว งานปักโบโฮ อก 48 นิ้ว"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "✨ Batwing style rayon shirt, beautiful embroidery, comfortable to wear ✨ 🌿 Rayon fabric is soft, light and comfortable to wear. 🪡 Beautiful embroidery, looks stylish. 📏 Chest 48 inches | Length 27 inches 👖 Matches beautifully with jeans or cloth pants. There are many colors to choose from 💕",
      "th": "✨ เสื้อเรยอนทรงปีกค้างคาว งานปักสวย ใส่สบาย ✨ 🌿 ผ้าเรยอนนุ่ม เบา ใส่สบาย 🪡 งานปักสวย ดูมีสไตล์ 📏 อก 48 นิ้ว | ยาว 27 นิ้ว 👖 แมทช์กับกางเกงยีนส์หรือกางเกงผ้าก็สวย มีหลายสีให้เลือกค่ะ 💕"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/48-i16202777990-s127333649712.html"
    }
  },
  {
    "code": "LZD-4393625809",
    "name": {
      "en": "Cropped Shirts, Front Slit Collar Shirts, Collared Shirts, Cotton Shirts Collared Shirt",
      "th": "เสื้อตัดต่อ เสื้อคอปกผ่าหน้า เสื้อคอปก เสื้อค๊อตต๊อน เสื้อเชิ้ตคอปก"
    },
    "category": "tops",
    "is_new": false,
    "price": 259,
    "fabric": {
      "en": "Cotton",
      "th": "ผ้าคอตตอน"
    },
    "colours": [
      {
        "en": "PS",
        "th": "PS"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "Fits 36–46 in / 36 in / 3",
          "th": "ขนาดตัวใส่ได้ตั้งแต่อก 36-46 นิ้ว ความยาว 36 นิ้ว แขน 3 ส่วน"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-4393625809-01.webp",
        "alt": {
          "en": "Main view of Cropped Shirts, Front Slit Collar Shirts, Collared Shirts, Cotton Shirts Collared Shirt",
          "th": "ภาพหลักของ เสื้อตัดต่อ เสื้อคอปกผ่าหน้า เสื้อคอปก เสื้อค๊อตต๊อน เสื้อเชิ้ตคอปก"
        }
      },
      {
        "src": "products/lzd-4393625809-02.webp",
        "alt": {
          "en": "Additional view 2 of Cropped Shirts, Front Slit Collar Shirts, Collared Shirts, Cotton Shirts Collared Shirt",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อตัดต่อ เสื้อคอปกผ่าหน้า เสื้อคอปก เสื้อค๊อตต๊อน เสื้อเชิ้ตคอปก"
        }
      },
      {
        "src": "products/lzd-4393625809-03.webp",
        "alt": {
          "en": "Additional view 3 of Cropped Shirts, Front Slit Collar Shirts, Collared Shirts, Cotton Shirts Collared Shirt",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อตัดต่อ เสื้อคอปกผ่าหน้า เสื้อคอปก เสื้อค๊อตต๊อน เสื้อเชิ้ตคอปก"
        }
      },
      {
        "src": "products/lzd-4393625809-04.webp",
        "alt": {
          "en": "Additional view 4 of Cropped Shirts, Front Slit Collar Shirts, Collared Shirts, Cotton Shirts Collared Shirt",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อตัดต่อ เสื้อคอปกผ่าหน้า เสื้อคอปก เสื้อค๊อตต๊อน เสื้อเชิ้ตคอปก"
        }
      },
      {
        "src": "products/lzd-4393625809-05.webp",
        "alt": {
          "en": "Additional view 5 of Cropped Shirts, Front Slit Collar Shirts, Collared Shirts, Cotton Shirts Collared Shirt",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อตัดต่อ เสื้อคอปกผ่าหน้า เสื้อคอปก เสื้อค๊อตต๊อน เสื้อเชิ้ตคอปก"
        }
      },
      {
        "src": "products/lzd-4393625809-06.webp",
        "alt": {
          "en": "Additional view 6 of Cropped Shirts, Front Slit Collar Shirts, Collared Shirts, Cotton Shirts Collared Shirt",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อตัดต่อ เสื้อคอปกผ่าหน้า เสื้อคอปก เสื้อค๊อตต๊อน เสื้อเชิ้ตคอปก"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "It is another vintage shirt that has been widely popular for a long time and has never gone out of style. No matter what era or time, you can wear it and look unique. *Plus, each one is only one in the world* Because each editing pattern will be different. None of them are the same. Whether it's a man Or women can wear it. Fits from chest 36-46 inches, length 36 inches, 3/4 sleeves. Cotton fabric is not hot when worn. Doesn't irritate the skin. There is no need to iron a lot. But it is recommended to wash it separately first 1-2 times because the uncut fabric with printed patterns may have rayon work mixed in. The color may fade. *****Please read and understand before ordering**** Every cut fabric product is different. Because cut cloth is a cloth that takes scraps of cloth and cuts them together to become a large roll of cloth. Then they are cut into different sets. Therefore, the pattern of each shirt is different. It will not be the same as the sample set according to the illustration shown on the page. Every product is inspected before sending. ***If there is a problem with the product Don't just press deduct points. Please notify the shop first***",
      "th": "เป็นเสื้อวินเทจอีกตัวที่เป็นที่นิยมกันอย่างแพร่หลายมาเป็นเวลานานไม่มีตกรุ่น ไม่ว่าจะยุคไหน เวลาไหน ก็ใส่ได้ ดูเด่นแปลกตา *แถมแต่ละตัวมีเพียงตัวเดียวในโลก* เพราะลายงานตัดต่อแต่ละตัวจะแตกต่างกันออกไป ไม่มีตัวไหนที่เหมือนกันเลย ไม่ว่าจะเป็นผู้ชาย หรือผู้หญิงก็ใส่ได้ ขนาดตัวใส่ได้ตั้งแต่อก 36-46 นิ้ว ความยาว 36 นิ้ว แขน 3 ส่วน ผ้าค๊อตต๊อนใส่แล้วไม่ร้อน ไม่ระคายเคืองผิว ไม่จำเป็นต้องรีดมาก แต่แนะนำให้ซักแยกก่อน 1-2 ครั้ง เพราะผ้าลายแต่ละลายที่นำม่ตัดต่ออาจจะมีงานเรย่อนผสมเข้ามา สีอาจตกได้บ้าง *****กรุณาอ่านและทำความเข้าใจก่อนกดสั่งซื้อ**** สินค้าผ้าตัดต่อทุกชิ้นจะไม่เหมือนกัน เพราะผ้าตัดต่อเป็นผ้าที่นำเศษผ้ามาตัดต่อกันจนเป็นผ้าม้วนผืนใหญ่ แล้วจึงนำมาตัดเป็นชุดต่างๆ ดังนั้นลายแต่ละลายของเสื้อแต่ละตัวจึงแตกต่างกันออกไป จะไม่เหมือนกันกับชุดตัวอย่างตามภาพประกอบที่โชว์ในเพจ มีการตรวจสินค้าก่อนส่งทุกชิ้น ***หากมีปัญหากับสินค้า อย่างเพิ่งกดหักคะแนน ให้แจ้งมาทางร้านก่อนนะคะ***"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i4393625809-s17506371317.html"
    }
  },
  {
    "code": "LZD-16103407871",
    "name": {
      "en": "Songkran Shirt With Beautiful Floral Pattern, Three-Quarter Sleeves, Linen Fabric With Pierced Chinese Collar",
      "th": "เสื้อสงกรานต์ลายดอกสวยๆ แขนสามส่วน ผ้าป่านคอจีนเจาะ"
    },
    "category": "tops",
    "is_new": false,
    "price": 199,
    "fabric": {
      "en": "Lightweight woven fabric",
      "th": "ผ้าป่าน"
    },
    "colours": [
      {
        "en": "บานเย็น",
        "th": "SMJ001 บานเย็น"
      },
      {
        "en": "Purple",
        "th": "SMJ002 ม่วง"
      },
      {
        "en": "Red",
        "th": "SMJ003 แดง"
      },
      {
        "en": "Yellow",
        "th": "SMJ004 เหลือง"
      },
      {
        "en": "Navy",
        "th": "SMJ005 กรมท่า"
      },
      {
        "en": "Black",
        "th": "SMJ006 ดำ"
      },
      {
        "en": "Green",
        "th": "SMJ007 เขียว"
      },
      {
        "en": "Sky Blue",
        "th": "SMJ008 ฟ้า"
      },
      {
        "en": "Orange",
        "th": "SMJ009 ส้ม"
      },
      {
        "en": "White",
        "th": "SMJ010 ขาวแดง"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "46 in",
          "th": "รอบอก 46 นิ้ว"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "16 in",
          "th": "ความยาวของแขน 16 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16103407871-01.webp",
        "alt": {
          "en": "Main view of Songkran Shirt With Beautiful Floral Pattern, Three-Quarter Sleeves, Linen Fabric With Pierced Chinese Collar",
          "th": "ภาพหลักของ เสื้อสงกรานต์ลายดอกสวยๆ แขนสามส่วน ผ้าป่านคอจีนเจาะ"
        }
      },
      {
        "src": "products/lzd-16103407871-02.webp",
        "alt": {
          "en": "Additional view 2 of Songkran Shirt With Beautiful Floral Pattern, Three-Quarter Sleeves, Linen Fabric With Pierced Chinese Collar",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อสงกรานต์ลายดอกสวยๆ แขนสามส่วน ผ้าป่านคอจีนเจาะ"
        }
      },
      {
        "src": "products/lzd-16103407871-03.webp",
        "alt": {
          "en": "Additional view 3 of Songkran Shirt With Beautiful Floral Pattern, Three-Quarter Sleeves, Linen Fabric With Pierced Chinese Collar",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อสงกรานต์ลายดอกสวยๆ แขนสามส่วน ผ้าป่านคอจีนเจาะ"
        }
      },
      {
        "src": "products/lzd-16103407871-04.webp",
        "alt": {
          "en": "Additional view 4 of Songkran Shirt With Beautiful Floral Pattern, Three-Quarter Sleeves, Linen Fabric With Pierced Chinese Collar",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อสงกรานต์ลายดอกสวยๆ แขนสามส่วน ผ้าป่านคอจีนเจาะ"
        }
      },
      {
        "src": "products/lzd-16103407871-05.webp",
        "alt": {
          "en": "Additional view 5 of Songkran Shirt With Beautiful Floral Pattern, Three-Quarter Sleeves, Linen Fabric With Pierced Chinese Collar",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อสงกรานต์ลายดอกสวยๆ แขนสามส่วน ผ้าป่านคอจีนเจาะ"
        }
      },
      {
        "src": "products/lzd-16103407871-06.webp",
        "alt": {
          "en": "Additional view 6 of Songkran Shirt With Beautiful Floral Pattern, Three-Quarter Sleeves, Linen Fabric With Pierced Chinese Collar",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อสงกรานต์ลายดอกสวยๆ แขนสามส่วน ผ้าป่านคอจีนเจาะ"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Looking for a beautiful flower shirt Wear it for Songkran Must be here. Popular flower pattern shirt, linen fabric, Chinese collar, long body, 3/4 sleeves, comfortable to wear, not hot, not irritating. Suitable for traveling Go for a walk outside, play Songkran, wear it at home. The shirt size is free size. Chest 46 inches Arm circumference to shoulder 22 inches Arm length 16 inches Length of shirt 35 inches",
      "th": "กำลังมองหาเสื้อดอกสวยๆ ใส่เล่นสงกรานต์ ต้องที่นี่เลย เสื้อลายดอกไม้ยอดนิยม ผ้าป่าน คอจีนเจาะ ตัวยาว แขน 3 ส่วน ใส่สบาย ไม่ร้อน ไม่ระคายเคือง เหมาะกับใส่เที่ยว ออกไปเดินเล่นข้างนอก เล่นสงกรานต์ ใส่อยู่บ้าน ขนาดเสื้อเป็นฟรีไซส์ รอบอก 46 นิ้ว รอบวงแขนติดไหล่ 22 นิ้ว ความยาวของแขน 16 นิ้ว ความยาวของเสื้อ 35 นิ้ว"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16103407871-s126883102446.html"
    }
  },
  {
    "code": "LZD-16102532180",
    "name": {
      "en": "Songkran Shirt, Linen Fabric With Floral Pattern, Three-Quarter Sleeves, Pierced Neck, Vintage Style",
      "th": "เสื้อสงกราต์ ผ้าป่านลายดอกไม้ แขนสามส่วน คอเจาะ สไตล์วินเทจ"
    },
    "category": "tops",
    "is_new": false,
    "price": 229,
    "fabric": {
      "en": "Lightweight woven fabric",
      "th": "ผ้าป่าน"
    },
    "colours": [
      {
        "en": "Orange",
        "th": "SMS001 ส้ม"
      },
      {
        "en": "บานเย็น",
        "th": "SMS002 บานเย็น"
      },
      {
        "en": "Sky Blue",
        "th": "SMS003 ฟ้า"
      },
      {
        "en": "Red",
        "th": "SMS004 แดง"
      },
      {
        "en": "Black",
        "th": "SMS005 ดำ"
      },
      {
        "en": "Green",
        "th": "SMS006 เขียว"
      },
      {
        "en": "Purple",
        "th": "SMS007 ม่วง"
      },
      {
        "en": "Yellow",
        "th": "SMS008 เหลือง"
      },
      {
        "en": "Navy",
        "th": "SMS009 กรมท่า"
      },
      {
        "en": "White",
        "th": "SMS010 ขาวแดง"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "44 in",
          "th": "รอบอก 44 นิ้ว"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "15 in",
          "th": "ความยาวของแขน 15 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16102532180-01.webp",
        "alt": {
          "en": "Main view of Songkran Shirt, Linen Fabric With Floral Pattern, Three-Quarter Sleeves, Pierced Neck, Vintage Style",
          "th": "ภาพหลักของ เสื้อสงกราต์ ผ้าป่านลายดอกไม้ แขนสามส่วน คอเจาะ สไตล์วินเทจ"
        }
      },
      {
        "src": "products/lzd-16102532180-02.webp",
        "alt": {
          "en": "Additional view 2 of Songkran Shirt, Linen Fabric With Floral Pattern, Three-Quarter Sleeves, Pierced Neck, Vintage Style",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อสงกราต์ ผ้าป่านลายดอกไม้ แขนสามส่วน คอเจาะ สไตล์วินเทจ"
        }
      },
      {
        "src": "products/lzd-16102532180-03.webp",
        "alt": {
          "en": "Additional view 3 of Songkran Shirt, Linen Fabric With Floral Pattern, Three-Quarter Sleeves, Pierced Neck, Vintage Style",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อสงกราต์ ผ้าป่านลายดอกไม้ แขนสามส่วน คอเจาะ สไตล์วินเทจ"
        }
      },
      {
        "src": "products/lzd-16102532180-04.webp",
        "alt": {
          "en": "Additional view 4 of Songkran Shirt, Linen Fabric With Floral Pattern, Three-Quarter Sleeves, Pierced Neck, Vintage Style",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อสงกราต์ ผ้าป่านลายดอกไม้ แขนสามส่วน คอเจาะ สไตล์วินเทจ"
        }
      },
      {
        "src": "products/lzd-16102532180-05.webp",
        "alt": {
          "en": "Additional view 5 of Songkran Shirt, Linen Fabric With Floral Pattern, Three-Quarter Sleeves, Pierced Neck, Vintage Style",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อสงกราต์ ผ้าป่านลายดอกไม้ แขนสามส่วน คอเจาะ สไตล์วินเทจ"
        }
      },
      {
        "src": "products/lzd-16102532180-06.webp",
        "alt": {
          "en": "Additional view 6 of Songkran Shirt, Linen Fabric With Floral Pattern, Three-Quarter Sleeves, Pierced Neck, Vintage Style",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อสงกราต์ ผ้าป่านลายดอกไม้ แขนสามส่วน คอเจาะ สไตล์วินเทจ"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Hemp clothes with beautiful floral patterns, bright colors, cute, not too big or too small. You can wear it on every occasion, whether you're at home. Go out for a walk, go to the beach, or wear it to play Songkran and it will look chic and stand out. Light linen fabric, comfortable to wear, not hot, not irritating. Chest 44 inches Arm circumference 11 inches Arm length 15 inches Length of shirt 29 inches",
      "th": "เสื้อผ้าป่านลายดอกไม้สวยงามสีสันสดใส น่ารัก ขนาดไม่เล็กไม่ใหญ่ ใส่ได้ทุกโอกาสไม่ว่าจะอยู่กับบ้าน ออกไปเดินเล่น ไปทะเล หรือใส่เล่นสงกรานต์ก็ดูเก๋ ดูเด่น ผ้าป่านเบา ใส่สบาย ไม่ร้อน ไม่ระคายเคือง รอบอก 44 นิ้ว รอบวงแขน 11 นิ้ว ความยาวของแขน 15 นิ้ว ความยาวของเสื้อ 29 นิ้ว"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16102532180-s126868306829.html"
    }
  },
  {
    "code": "LZD-16161438578",
    "name": {
      "en": "Patchwork Fabric Skirt Cotton Mixed With Rayon Bohemian Style, One Size",
      "th": "กระโปรงผ้าตัดต่อ  คอตตอนผสมเรยอน สไตล์โบฮีเมียน ฟรีไซส์"
    },
    "category": "skirts",
    "is_new": false,
    "price": 559,
    "fabric": {
      "en": "Cotton-rayon blend",
      "th": "ผ้าคอตตอนผสมเรยอน"
    },
    "colours": [
      {
        "en": "Green",
        "th": "LDS001 โทนเขียว"
      },
      {
        "en": "Orange",
        "th": "LDS002 โทนส้ม"
      },
      {
        "en": "Red",
        "th": "LDS003 โทนแดง"
      },
      {
        "en": "Yellow",
        "th": "LDS004 โทนเหลือง"
      },
      {
        "en": "Sky Blue",
        "th": "LDS005 โทนฟ้า"
      },
      {
        "en": "Blue",
        "th": "LDS006 โทนน้ำเงิน"
      },
      {
        "en": "Grey",
        "th": "LDS007 โทนเทา"
      },
      {
        "en": "Pink",
        "th": "LDS008 โทนชมพู"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Waist",
          "th": "รอบเอว"
        },
        "value": {
          "en": "Approx. 26–44 in / 66–112 cm",
          "th": "เอว 26-44 นิ้ว (ประมาณ 66-112 ซม.)"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "Approx. 37 in / 94 cm",
          "th": "ความยาว 37 นิ้ว (ประมาณ 94 ซม.)"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16161438578-01.webp",
        "alt": {
          "en": "Main view of Patchwork Fabric Skirt Cotton Mixed With Rayon Bohemian Style, One Size",
          "th": "ภาพหลักของ กระโปรงผ้าตัดต่อ  คอตตอนผสมเรยอน สไตล์โบฮีเมียน ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16161438578-02.webp",
        "alt": {
          "en": "Additional view 2 of Patchwork Fabric Skirt Cotton Mixed With Rayon Bohemian Style, One Size",
          "th": "ภาพเพิ่มเติม 2 ของ กระโปรงผ้าตัดต่อ  คอตตอนผสมเรยอน สไตล์โบฮีเมียน ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16161438578-03.webp",
        "alt": {
          "en": "Additional view 3 of Patchwork Fabric Skirt Cotton Mixed With Rayon Bohemian Style, One Size",
          "th": "ภาพเพิ่มเติม 3 ของ กระโปรงผ้าตัดต่อ  คอตตอนผสมเรยอน สไตล์โบฮีเมียน ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16161438578-04.webp",
        "alt": {
          "en": "Additional view 4 of Patchwork Fabric Skirt Cotton Mixed With Rayon Bohemian Style, One Size",
          "th": "ภาพเพิ่มเติม 4 ของ กระโปรงผ้าตัดต่อ  คอตตอนผสมเรยอน สไตล์โบฮีเมียน ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16161438578-05.webp",
        "alt": {
          "en": "Additional view 5 of Patchwork Fabric Skirt Cotton Mixed With Rayon Bohemian Style, One Size",
          "th": "ภาพเพิ่มเติม 5 ของ กระโปรงผ้าตัดต่อ  คอตตอนผสมเรยอน สไตล์โบฮีเมียน ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16161438578-06.webp",
        "alt": {
          "en": "Additional view 6 of Patchwork Fabric Skirt Cotton Mixed With Rayon Bohemian Style, One Size",
          "th": "ภาพเพิ่มเติม 6 ของ กระโปรงผ้าตัดต่อ  คอตตอนผสมเรยอน สไตล์โบฮีเมียน ฟรีไซส์"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "🌸 Bohemian style tailored skirt 🌸 Cotton mixed with rayon, comfortable to wear, beautiful flowing, and good ventilation. Brightly colored patchwork patterns, easy to match for a chill and stylish look 💕 ✨ Elastic waist, can fit many sizes. 📏 Waist 26-44 inches (approximately 66-112 cm.) 📏 Length 37 inches (approximately 94 cm.) 🎨 There are many colors and patterns to choose from. Wear it to travel, wear to a cafe, or just chill out on a casual day. It's super cute. 💖",
      "th": "🌸 กระโปรงตัดต่อสไตล์โบฮีเมียน 🌸 ผ้าคอตตอนผสมเรยอน ใส่สบาย พลิ้วสวย ระบายอากาศดี ลายผ้าต่อสีสันสดใส แมทช์ง่าย ได้ลุคชิลๆ แบบมีสไตล์ 💕 ✨ เอวยางยืด ใส่ได้หลายไซซ์ 📏 เอว 26-44 นิ้ว (ประมาณ 66-112 ซม.) 📏 ความยาว 37 นิ้ว (ประมาณ 94 ซม.) 🎨 มีหลายสี หลายลายให้เลือก ใส่เที่ยว ใส่คาเฟ่ หรือใส่ชิลวันสบายๆ ก็น่ารักสุดๆ 💖"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16161438578-s127169725591.html"
    }
  },
  {
    "code": "LZD-16151044004",
    "name": {
      "en": "A Cute, Brightly Colored Floral Shirt With A Round Neck And Three-Quarter Balloon Sleeves",
      "th": "เสื้อดอกสีสดใสสวยๆ น่ารักๆ คอกลมแขนบอลลูนสามส่วน"
    },
    "category": "tops",
    "is_new": false,
    "price": 199,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "Yellow",
        "th": "SMS501 สีเหลือง"
      },
      {
        "en": "สีบานเย็น",
        "th": "SMS502 สีบานเย็น"
      },
      {
        "en": "Black",
        "th": "SMS503 สีดำ"
      },
      {
        "en": "Red",
        "th": "SMS504 สีแดง"
      },
      {
        "en": "Orange",
        "th": "SMS505 สีส้ม"
      },
      {
        "en": "Sky Blue",
        "th": "SMS506 สีฟ้า"
      },
      {
        "en": "Navy",
        "th": "SMS507 สีกรมท่า"
      },
      {
        "en": "Green",
        "th": "SMS508 สีเขียว"
      },
      {
        "en": "White",
        "th": "SMS509 สีขาวแดง"
      },
      {
        "en": "Purple",
        "th": "SMS510 สีม่วง"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "44 in",
          "th": "รอบอก 44 นิ้ว"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "15 in",
          "th": "ความยาวของแขน 15 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16151044004-01.webp",
        "alt": {
          "en": "Main view of A Cute, Brightly Colored Floral Shirt With A Round Neck And Three-Quarter Balloon Sleeves",
          "th": "ภาพหลักของ เสื้อดอกสีสดใสสวยๆ น่ารักๆ คอกลมแขนบอลลูนสามส่วน"
        }
      },
      {
        "src": "products/lzd-16151044004-02.webp",
        "alt": {
          "en": "Additional view 2 of A Cute, Brightly Colored Floral Shirt With A Round Neck And Three-Quarter Balloon Sleeves",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อดอกสีสดใสสวยๆ น่ารักๆ คอกลมแขนบอลลูนสามส่วน"
        }
      },
      {
        "src": "products/lzd-16151044004-03.webp",
        "alt": {
          "en": "Additional view 3 of A Cute, Brightly Colored Floral Shirt With A Round Neck And Three-Quarter Balloon Sleeves",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อดอกสีสดใสสวยๆ น่ารักๆ คอกลมแขนบอลลูนสามส่วน"
        }
      },
      {
        "src": "products/lzd-16151044004-04.webp",
        "alt": {
          "en": "Additional view 4 of A Cute, Brightly Colored Floral Shirt With A Round Neck And Three-Quarter Balloon Sleeves",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อดอกสีสดใสสวยๆ น่ารักๆ คอกลมแขนบอลลูนสามส่วน"
        }
      },
      {
        "src": "products/lzd-16151044004-05.webp",
        "alt": {
          "en": "Additional view 5 of A Cute, Brightly Colored Floral Shirt With A Round Neck And Three-Quarter Balloon Sleeves",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อดอกสีสดใสสวยๆ น่ารักๆ คอกลมแขนบอลลูนสามส่วน"
        }
      },
      {
        "src": "products/lzd-16151044004-06.webp",
        "alt": {
          "en": "Additional view 6 of A Cute, Brightly Colored Floral Shirt With A Round Neck And Three-Quarter Balloon Sleeves",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อดอกสีสดใสสวยๆ น่ารักๆ คอกลมแขนบอลลูนสามส่วน"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Beautiful floral shirt, bright colors, short, free size, not too small or too big. Wear it and look cute. Looks strange and eye-catching and wears it at home. Wear it to go for a walk. Wear it to travel. Three quarter sleeves. The cuffs are balloon sleeves. Size of shirt Chest 44 inches Arm circumference to shoulder 22 inches Arm length 15 inches Length of shirt 29 inches",
      "th": "เสื้อดอกไม้ลายสวยๆ สีสันสดใส ตัวสั้น ฟรีไซส์ ไม่เล็กไม่ใหญ๋ ใส่แล้วดูน่ารัก ดูดแปลกสะดุดตาใส่อยู่บ้าน ใส่ไปเดินเล่น ใส่ไปเที่ยว แขนสามส่วน ปลายแขนเป็นแขนบอลลูน ขนาดของเสื้อ รอบอก 44 นิ้ว รอบวงแขนติดไหล่ 22 นิ้ว ความยาวของแขน 15 นิ้ว ความยาวของเสื้อ 29 นิ้ว"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16151044004-s127133219345.html"
    }
  },
  {
    "code": "LZD-16176548408",
    "name": {
      "en": "Skirts Of Patchwork Fabric, Assorted Patterns, Assorted Colors, Each One Is Different",
      "th": "กระโปรงผ้าตัดต่อ คละลาย คละสี แต่ละตัวไม่เหมือนกัน"
    },
    "category": "skirts",
    "is_new": false,
    "price": 359,
    "fabric": {
      "en": "Cotton",
      "th": "ผ้าคอตตอน"
    },
    "colours": [
      {
        "en": "สุ่มสี คละลาย",
        "th": "สุ่มสี คละลาย"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Waist",
          "th": "รอบเอว"
        },
        "value": {
          "en": "Approx. 26–44 in / 66–112 cm",
          "th": "เอว 26-44 นิ้ว (ประมาณ 66-112 ซม.)"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "Approx. 37 in / 94 cm",
          "th": "ความยาว 37 นิ้ว (ประมาณ 94 ซม.)"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16176548408-01.webp",
        "alt": {
          "en": "Main view of Skirts Of Patchwork Fabric, Assorted Patterns, Assorted Colors, Each One Is Different",
          "th": "ภาพหลักของ กระโปรงผ้าตัดต่อ คละลาย คละสี แต่ละตัวไม่เหมือนกัน"
        }
      },
      {
        "src": "products/lzd-16176548408-02.webp",
        "alt": {
          "en": "Additional view 2 of Skirts Of Patchwork Fabric, Assorted Patterns, Assorted Colors, Each One Is Different",
          "th": "ภาพเพิ่มเติม 2 ของ กระโปรงผ้าตัดต่อ คละลาย คละสี แต่ละตัวไม่เหมือนกัน"
        }
      },
      {
        "src": "products/lzd-16176548408-03.webp",
        "alt": {
          "en": "Additional view 3 of Skirts Of Patchwork Fabric, Assorted Patterns, Assorted Colors, Each One Is Different",
          "th": "ภาพเพิ่มเติม 3 ของ กระโปรงผ้าตัดต่อ คละลาย คละสี แต่ละตัวไม่เหมือนกัน"
        }
      },
      {
        "src": "products/lzd-16176548408-04.webp",
        "alt": {
          "en": "Additional view 4 of Skirts Of Patchwork Fabric, Assorted Patterns, Assorted Colors, Each One Is Different",
          "th": "ภาพเพิ่มเติม 4 ของ กระโปรงผ้าตัดต่อ คละลาย คละสี แต่ละตัวไม่เหมือนกัน"
        }
      },
      {
        "src": "products/lzd-16176548408-05.webp",
        "alt": {
          "en": "Additional view 5 of Skirts Of Patchwork Fabric, Assorted Patterns, Assorted Colors, Each One Is Different",
          "th": "ภาพเพิ่มเติม 5 ของ กระโปรงผ้าตัดต่อ คละลาย คละสี แต่ละตัวไม่เหมือนกัน"
        }
      },
      {
        "src": "products/lzd-16176548408-06.webp",
        "alt": {
          "en": "Additional view 6 of Skirts Of Patchwork Fabric, Assorted Patterns, Assorted Colors, Each One Is Different",
          "th": "ภาพเพิ่มเติม 6 ของ กระโปรงผ้าตัดต่อ คละลาย คละสี แต่ละตัวไม่เหมือนกัน"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "🌸✨ Boho style edited fabric skirt. Very unique handmade work ✨🌸 Who likes unique fabric work? Must love this model 💕 Skirts made from various patterns Beautiful, eye-catching colors Wear it and you will look outstanding. It is unique and unique. 🧵 Elastic smocked waist, comfortable to wear. 🎀 There is a drawstring at the waist. Adjustable for tightness 🌈 Assorted patterns, assorted colors, every pattern is unique. ✨ Fabric editing work. Each item has only one style. 📏 Size • Waist 26-44 inches (approximately 66-112 cm.) • Length 37 inches (approximately 94 cm.) 🌿 Easy to match with a t-shirt, shirt or cotton shirt. 🌿 Wear it to travel, wear it to work, wear it to a cafe, it's beautiful and chic. 💖 \"One piece, one pattern, never repeated. It's like getting the only skirt in the world.\" 📦 Ready to send Hurry and message me to reserve your favorite pattern before it's gone. 🥰💕",
      "th": "🌸✨ กระโปรงผ้าตัดต่อสไตล์โบโฮ งานแฮนด์เมดสุดยูนีค ✨🌸 ใครชอบงานผ้าไม่ซ้ำใคร ต้องหลงรักรุ่นนี้ 💕 กระโปรงผ้าตัดต่อหลากหลายลวดลาย สีสันสวยสะดุดตา ใส่แล้วดูโดดเด่น มีเอกลักษณ์ไม่เหมือนใคร 🧵 เอวสม็อคยืดหยุ่น ใส่สบาย 🎀 มีเชือกผูกเอว ปรับกระชับได้ 🌈 คละลาย คละสี ทุกตัวลายไม่ซ้ำกัน ✨ งานผ้าตัดต่อ แต่ละตัวมีเพียงแบบเดียว 📏 ขนาด • เอว 26-44 นิ้ว (ประมาณ 66-112 ซม.) • ความยาว 37 นิ้ว (ประมาณ 94 ซม.) 🌿 แมทช์ง่ายกับเสื้อยืด เสื้อเชิ้ต หรือเสื้อผ้าฝ้าย 🌿 ใส่เที่ยว ใส่ทำงาน ใส่เดินคาเฟ่ได้สวยเก๋ 💖 \"หนึ่งตัว หนึ่งลาย ไม่มีซ้ำ เหมือนได้กระโปรงตัวเดียวในโลก\" 📦 พร้อมส่ง รีบทักมาจับจองลายที่ชอบก่อนหมดนะคะ 🥰💕"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16176548408-s127245250090.html"
    }
  },
  {
    "code": "LZD-4401136919",
    "name": {
      "en": "Patchwork Skirt Cotton Pleated Skirt, Long Skirt",
      "th": "กระโปรงผ้าต่อ กระโปรงค๊อตต๊อนผ้าต่อ กระโปรงยาว"
    },
    "category": "skirts",
    "home_showcase": {
      "image_index": 1,
      "name": {
        "en": "Pleated Patchwork Skirt",
        "th": "กระโปรงยาวผ้าต่อทรงพลีท"
      }
    },
    "is_new": false,
    "price": 259,
    "fabric": {
      "en": "Cotton-rayon blend",
      "th": "ผ้าคอตตอนผสมเรยอน"
    },
    "colours": [
      {
        "en": "PSC",
        "th": "PSC"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "ฟรีไซส์"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "28–42 / 50 / 37",
          "th": "ฟรีไซส์ ขนาด เอว 28-42\" สะโพก 50\" ความยาว 37\""
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-4401136919-01.webp",
        "alt": {
          "en": "Main view of Patchwork Skirt Cotton Pleated Skirt, Long Skirt",
          "th": "ภาพหลักของ กระโปรงผ้าต่อ กระโปรงค๊อตต๊อนผ้าต่อ กระโปรงยาว"
        }
      },
      {
        "src": "products/lzd-4401136919-02.webp",
        "alt": {
          "en": "Additional view 2 of Patchwork Skirt Cotton Pleated Skirt, Long Skirt",
          "th": "ภาพเพิ่มเติม 2 ของ กระโปรงผ้าต่อ กระโปรงค๊อตต๊อนผ้าต่อ กระโปรงยาว"
        }
      },
      {
        "src": "products/lzd-4401136919-03.webp",
        "alt": {
          "en": "Additional view 3 of Patchwork Skirt Cotton Pleated Skirt, Long Skirt",
          "th": "ภาพเพิ่มเติม 3 ของ กระโปรงผ้าต่อ กระโปรงค๊อตต๊อนผ้าต่อ กระโปรงยาว"
        }
      },
      {
        "src": "products/lzd-4401136919-04.webp",
        "alt": {
          "en": "Additional view 4 of Patchwork Skirt Cotton Pleated Skirt, Long Skirt",
          "th": "ภาพเพิ่มเติม 4 ของ กระโปรงผ้าต่อ กระโปรงค๊อตต๊อนผ้าต่อ กระโปรงยาว"
        }
      },
      {
        "src": "products/lzd-4401136919-05.webp",
        "alt": {
          "en": "Additional view 5 of Patchwork Skirt Cotton Pleated Skirt, Long Skirt",
          "th": "ภาพเพิ่มเติม 5 ของ กระโปรงผ้าต่อ กระโปรงค๊อตต๊อนผ้าต่อ กระโปรงยาว"
        }
      },
      {
        "src": "products/lzd-4401136919-06.webp",
        "alt": {
          "en": "Additional view 6 of Patchwork Skirt Cotton Pleated Skirt, Long Skirt",
          "th": "ภาพเพิ่มเติม 6 ของ กระโปรงผ้าต่อ กระโปรงค๊อตต๊อนผ้าต่อ กระโปรงยาว"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Editable fabric skirt It's a patterned cotton fabric. and the floors are edited in a vintage, chic, modern style. Wear them when traveling, going for a walk, and wearing them at home. It's a comfortable fabric that's not hot. Free size, size waist 28-42\", hip 50\", length 37\" ***Precautions*** After receiving the product, you should soak it in salt water for 1 night and then wash it separately 1-2 times first. *****Please read and understand before ordering**** Every cut fabric product is different. Because cut cloth is a cloth that takes scraps of cloth and cuts them together to become a large roll of cloth. Then they are cut into different sets. Therefore, the pattern of each shirt is different. It will not be the same as the sample set according to the illustration shown on the page. Every product is inspected before sending. ***If there is a problem with the product Don't just press deduct points. Please notify the shop first***",
      "th": "กระโปรงผ้าตัดต่อ เป็นผ้าค๊อตต๊อนลาย และพื้นนำมาตัดต่อ แนววินเทจ เก๋ ทันสมัย ใส่ไปเที่ยว ไปเดินเล่น ใส่อยู่กับบ้าน เป็นผ้าที่ใส่สบายไม่ร้อน ฟรีไซส์ ขนาด เอว 28-42\" สะโพก 50\" ความยาว 37\" ***ข้อควรปฏิบัติ*** หลังจะได้รับสินค้าแล้วควรนำไปแช่น้ำเกลือทิ้งไว้ 1 คืน แล้วซักแยกก่อน 1-2 ครั้ง *****กรุณาอ่านและทำความเข้าใจก่อนกดสั่งซื้อ**** สินค้าผ้าตัดต่อทุกชิ้นจะไม่เหมือนกัน เพราะผ้าตัดต่อเป็นผ้าที่นำเศษผ้ามาตัดต่อกันจนเป็นผ้าม้วนผืนใหญ่ แล้วจึงนำมาตัดเป็นชุดต่างๆ ดังนั้นลายแต่ละลายของเสื้อแต่ละตัวจึงแตกต่างกันออกไป จะไม่เหมือนกันกับชุดตัวอย่างตามภาพประกอบที่โชว์ในเพจ มีการตรวจสินค้าก่อนส่งทุกชิ้น ***หากมีปัญหากับสินค้า อย่างเพิ่งกดหักคะแนน ให้แจ้งมาทางร้านก่อนนะคะ***"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i4401136919-s17547369017.html"
    }
  },
  {
    "code": "LZD-4388791725",
    "name": {
      "en": "Black Rayon Skirt, Beautiful Skirt, Sequined Skirt, Pattern A",
      "th": "กระโปรงเรย่อนพื้นดำ กระโปรงสวยๆ กระโปรงปักเลื่อม ลาย A"
    },
    "category": "skirts",
    "is_new": false,
    "price": 249,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "BSA Blue",
        "th": "BSA Blue"
      },
      {
        "en": "BSA Brown",
        "th": "BSA Brown"
      },
      {
        "en": "BSA Green",
        "th": "BSA Green"
      },
      {
        "en": "BSA Lightblue",
        "th": "BSA Lightblue"
      },
      {
        "en": "BSA Orange",
        "th": "BSA Orange"
      },
      {
        "en": "BSA Purple",
        "th": "BSA Purple"
      },
      {
        "en": "BSA Red",
        "th": "BSA Red"
      },
      {
        "en": "BSA Yellow",
        "th": "BSA Yellow"
      },
      {
        "en": "BSA Maroon",
        "th": "BSA Maroon"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "ฟรีไซส์"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "36 in",
          "th": "ยาว 36 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-4388791725-01.webp",
        "alt": {
          "en": "Main view of Black Rayon Skirt, Beautiful Skirt, Sequined Skirt, Pattern A",
          "th": "ภาพหลักของ กระโปรงเรย่อนพื้นดำ กระโปรงสวยๆ กระโปรงปักเลื่อม ลาย A"
        }
      },
      {
        "src": "products/lzd-4388791725-02.webp",
        "alt": {
          "en": "Additional view 2 of Black Rayon Skirt, Beautiful Skirt, Sequined Skirt, Pattern A",
          "th": "ภาพเพิ่มเติม 2 ของ กระโปรงเรย่อนพื้นดำ กระโปรงสวยๆ กระโปรงปักเลื่อม ลาย A"
        }
      },
      {
        "src": "products/lzd-4388791725-03.webp",
        "alt": {
          "en": "Additional view 3 of Black Rayon Skirt, Beautiful Skirt, Sequined Skirt, Pattern A",
          "th": "ภาพเพิ่มเติม 3 ของ กระโปรงเรย่อนพื้นดำ กระโปรงสวยๆ กระโปรงปักเลื่อม ลาย A"
        }
      },
      {
        "src": "products/lzd-4388791725-04.webp",
        "alt": {
          "en": "Additional view 4 of Black Rayon Skirt, Beautiful Skirt, Sequined Skirt, Pattern A",
          "th": "ภาพเพิ่มเติม 4 ของ กระโปรงเรย่อนพื้นดำ กระโปรงสวยๆ กระโปรงปักเลื่อม ลาย A"
        }
      },
      {
        "src": "products/lzd-4388791725-05.webp",
        "alt": {
          "en": "Additional view 5 of Black Rayon Skirt, Beautiful Skirt, Sequined Skirt, Pattern A",
          "th": "ภาพเพิ่มเติม 5 ของ กระโปรงเรย่อนพื้นดำ กระโปรงสวยๆ กระโปรงปักเลื่อม ลาย A"
        }
      },
      {
        "src": "products/lzd-4388791725-06.webp",
        "alt": {
          "en": "Additional view 6 of Black Rayon Skirt, Beautiful Skirt, Sequined Skirt, Pattern A",
          "th": "ภาพเพิ่มเติม 6 ของ กระโปรงเรย่อนพื้นดำ กระโปรงสวยๆ กระโปรงปักเลื่อม ลาย A"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "It is a rayon skirt with a black background and a gold print paired with colored patterns with sequins embroidered all around the skirt. It's imported. Wear it and you will look beautiful and cute. When you see it, it will stand out. Soft fabric, not thin, no lining, comfortable to wear. Free size, waist 28-38 inches Length 36 inches There are 2 patterns to choose from, 8-10 colors each. Every product is inspected before sending. ***If there is a problem with the product Don't just press deduct points. Please notify the shop first***",
      "th": "เป็นกระโปรงผ้าเรย่อนพื้นดำพิมพ์ทองคู่กับลายสีพร้อมปักเลื่อมรอบตัวกระโปรง เป็นของนำเข้า ใส่แล้วดูสวย น่ารัก เห็นแล้วดูเด่นสะดุดตา ผ้านุ่มไม่บาง ไม่มีซับใน ใส่สบาย ฟรีไซส์ เอว 28-38 นิ้ว ยาว 36 นิ้ว มีให้เลือก 2 ลายๆ ละ 8-10 สี มีการตรวจสินค้าก่อนส่งทุกชิ้น ***หากมีปัญหากับสินค้า อย่างเพิ่งกดหักคะแนน ให้แจ้งมาทางร้านก่อนนะคะ***"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/a-i4388791725-s17500578009.html"
    }
  },
  {
    "code": "LZD-4793074098",
    "name": {
      "en": "Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects, Product Not Like The Market, Quality A+",
      "th": "เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ สินค้าไม่เหมือนตลาด คุณภาพ A+"
    },
    "category": "tops",
    "is_new": false,
    "price": 199,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "KKE 8.1 Blue",
        "th": "KKE 8.1 Blue"
      },
      {
        "en": "KKE 8.2 Black",
        "th": "KKE 8.2 Black"
      },
      {
        "en": "KKE 8.3 Orange",
        "th": "KKE 8.3 Orange"
      },
      {
        "en": "KKE 8.4 LB",
        "th": "KKE 8.4 LB"
      },
      {
        "en": "KKE 8.5 Pink",
        "th": "KKE 8.5 Pink"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "ฟรีไซส์"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "Fits 34 in / 54 in / 35 in",
          "th": "ฟรีไซส์ ใส่ได้ตั้งแต่อก 34 นิ้ว ถึงอก 54 นิ้ว ความยาวเสื้อ 35 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-4793074098-01.webp",
        "alt": {
          "en": "Main view of Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects, Product Not Like The Market, Quality A+",
          "th": "ภาพหลักของ เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ สินค้าไม่เหมือนตลาด คุณภาพ A+"
        }
      },
      {
        "src": "products/lzd-4793074098-02.webp",
        "alt": {
          "en": "Additional view 2 of Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects, Product Not Like The Market, Quality A+",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ สินค้าไม่เหมือนตลาด คุณภาพ A+"
        }
      },
      {
        "src": "products/lzd-4793074098-03.webp",
        "alt": {
          "en": "Additional view 3 of Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects, Product Not Like The Market, Quality A+",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ สินค้าไม่เหมือนตลาด คุณภาพ A+"
        }
      },
      {
        "src": "products/lzd-4793074098-04.webp",
        "alt": {
          "en": "Additional view 4 of Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects, Product Not Like The Market, Quality A+",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ สินค้าไม่เหมือนตลาด คุณภาพ A+"
        }
      },
      {
        "src": "products/lzd-4793074098-05.webp",
        "alt": {
          "en": "Additional view 5 of Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects, Product Not Like The Market, Quality A+",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ สินค้าไม่เหมือนตลาด คุณภาพ A+"
        }
      },
      {
        "src": "products/lzd-4793074098-06.webp",
        "alt": {
          "en": "Additional view 6 of Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects, Product Not Like The Market, Quality A+",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ สินค้าไม่เหมือนตลาด คุณภาพ A+"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "bohemian shirt butterfly wing shirt Bat-shaped shirts, drawstring waist shirts, floral shirts, short dresses. Comfortable bohemian shirt Beautiful and unique flower pattern Can be worn by both chubby people, fat people, or people with a slim figure. There is a drawstring under the bust to give it a form-fitting shape. It is a shirt that is currently very popular, worn when traveling, or walking on the beach. Wearing it at home is comfortable and not hot. Free size, can fit from chest 34 inches to chest 54 inches, shirt length 35 inches. Every product is inspected before sending. ***If there is a problem with the product Don't just press deduct points. Please notify the shop first***",
      "th": "เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เสื้อลายดอก เดรสสั้น เสื้อโบฮีเมียนใส่สบาย ลายดอกสวยไม่ซ้ำใคร ใส่ได้ทั้งคนอวบ คนอ้วน หรือคนรูปร่างเพรียว มีเชือกรูดใต้อกให้เข้ารูป เข้าทรง เป็นเสื้อที่กำลังอยู่ในความนิยมสูง ใส่เที่ยว ใส่เดินเล่นชายหาด ใส่อยู่บ้านก็สบายตัว ไม่ร้อน ฟรีไซส์ ใส่ได้ตั้งแต่อก 34 นิ้ว ถึงอก 54 นิ้ว ความยาวเสื้อ 35 นิ้ว มีการตรวจสินค้าก่อนส่งทุกชิ้น ***หากมีปัญหากับสินค้า อย่างเพิ่งกดหักคะแนน ให้แจ้งมาทางร้านก่อนนะคะ***"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/a-a-i4793074098-s19795493475.html"
    }
  },
  {
    "code": "LZD-16183823239",
    "name": {
      "en": "Edited Saree Skirt, Smocked Waist, Mixed Work, Mixed Colors, Every Pattern Is Unique",
      "th": "กระโปรงผ้าส่าหรีตัดต่อ  เอวสม็อค งานคละลาย คละสี ทุกตัวลายไม่ซ้ำ"
    },
    "category": "skirts",
    "is_new": false,
    "price": 799,
    "fabric": {
      "en": "Sari fabric",
      "th": "ผ้าส่าหรี"
    },
    "colours": [
      {
        "en": "Assorted colours",
        "th": "คละสี คละลาย"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Waist",
          "th": "รอบเอว"
        },
        "value": {
          "en": "26–40 in / 66–102 cm",
          "th": "เอว 26-40 นิ้ว (66-102 ซม.)"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "42 in / 107 cm",
          "th": "ความยาว 42 นิ้ว (107 ซม.)"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16183823239-01.webp",
        "alt": {
          "en": "Main view of Edited Saree Skirt, Smocked Waist, Mixed Work, Mixed Colors, Every Pattern Is Unique",
          "th": "ภาพหลักของ กระโปรงผ้าส่าหรีตัดต่อ  เอวสม็อค งานคละลาย คละสี ทุกตัวลายไม่ซ้ำ"
        }
      },
      {
        "src": "products/lzd-16183823239-02.webp",
        "alt": {
          "en": "Additional view 2 of Edited Saree Skirt, Smocked Waist, Mixed Work, Mixed Colors, Every Pattern Is Unique",
          "th": "ภาพเพิ่มเติม 2 ของ กระโปรงผ้าส่าหรีตัดต่อ  เอวสม็อค งานคละลาย คละสี ทุกตัวลายไม่ซ้ำ"
        }
      },
      {
        "src": "products/lzd-16183823239-03.webp",
        "alt": {
          "en": "Additional view 3 of Edited Saree Skirt, Smocked Waist, Mixed Work, Mixed Colors, Every Pattern Is Unique",
          "th": "ภาพเพิ่มเติม 3 ของ กระโปรงผ้าส่าหรีตัดต่อ  เอวสม็อค งานคละลาย คละสี ทุกตัวลายไม่ซ้ำ"
        }
      },
      {
        "src": "products/lzd-16183823239-04.webp",
        "alt": {
          "en": "Additional view 4 of Edited Saree Skirt, Smocked Waist, Mixed Work, Mixed Colors, Every Pattern Is Unique",
          "th": "ภาพเพิ่มเติม 4 ของ กระโปรงผ้าส่าหรีตัดต่อ  เอวสม็อค งานคละลาย คละสี ทุกตัวลายไม่ซ้ำ"
        }
      },
      {
        "src": "products/lzd-16183823239-05.webp",
        "alt": {
          "en": "Additional view 5 of Edited Saree Skirt, Smocked Waist, Mixed Work, Mixed Colors, Every Pattern Is Unique",
          "th": "ภาพเพิ่มเติม 5 ของ กระโปรงผ้าส่าหรีตัดต่อ  เอวสม็อค งานคละลาย คละสี ทุกตัวลายไม่ซ้ำ"
        }
      },
      {
        "src": "products/lzd-16183823239-06.webp",
        "alt": {
          "en": "Additional view 6 of Edited Saree Skirt, Smocked Waist, Mixed Work, Mixed Colors, Every Pattern Is Unique",
          "th": "ภาพเพิ่มเติม 6 ของ กระโปรงผ้าส่าหรีตัดต่อ  เอวสม็อค งานคละลาย คละสี ทุกตัวลายไม่ซ้ำ"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "🌸 Edited sari skirt Beautiful and unique work 🌸 ✨ Colorful edited saree fabric, boho, vintage style. Wear it when traveling, wearing it at a cafe, or wearing it at the beach. It's beautiful and outstanding. 💖 Highlights ✔ Elastic smocked waist, comfortable to wear. ✔ Fabric cut in many patterns, beautiful colors. ✔ Each pattern and color are different. ✔ Mixed designs, mixed colors, special and unique. ✔ Long, flowing style. Wear it and you will look tall and slender. 📏 Size • Waist 26-40 inches (66-102 cm.) • Length 42 inches (107 cm.) 🎨 The product is assorted designs, assorted colors. Every item is made from cut saree fabric. So it has a unique pattern. Can't choose pattern 🛍 Suitable for Wear it to travel | Wear it to work | Wear it to a cafe | Wear it to take photos | Boho type | Muay Thai type | Chill type ✨ Beautiful, flowy, comfortable to wear. You can stand out every day with just one. ✨",
      "th": "🌸 กระโปรงผ้าส่าหรีตัดต่อ งานสวยไม่ซ้ำใคร 🌸 ✨ ผ้าส่าหรีตัดต่อหลากสีสัน สไตล์โบโฮ วินเทจ ใส่เที่ยว ใส่คาเฟ่ หรือใส่เดินทะเลก็สวยโดดเด่น 💖 จุดเด่น ✔ เอวสม็อคยืดหยุ่น ใส่สบาย ✔ ผ้าตัดต่อหลายลวดลาย สีสันสวยงาม ✔ แต่ละตัวลายและสีไม่เหมือนกัน ✔ งานคละลาย คละสี ได้ความพิเศษไม่ซ้ำใคร ✔ ทรงยาวพลิ้ว ใส่แล้วดูสูงเพรียว 📏 ขนาด • เอว 26-40 นิ้ว (66-102 ซม.) • ความยาว 42 นิ้ว (107 ซม.) 🎨 สินค้าเป็นงานคละลาย คละสี ทุกตัวผลิตจากผ้าส่าหรีตัดต่อ จึงมีลวดลายเฉพาะตัว ไม่สามารถเลือกลายได้ 🛍 เหมาะสำหรับ ใส่เที่ยว | ใส่ทำงาน | ใส่คาเฟ่ | ใส่ถ่ายรูป | สายโบโฮ | สายมู | สายชิล ✨ สวย พลิ้ว ใส่สบาย มีตัวเดียวก็โดดเด่นได้ทุกวัน ✨"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16183823239-s127265513635.html"
    }
  },
  {
    "code": "LZD-16168526022",
    "name": {
      "en": "Black And White Lightweight Woven Top, Collar, Chinese Collar, Long Sleeves, Beautiful Shape",
      "th": "เสื้อผ้าป่านขาวดำ คอปก คอจีน แขนยาว ทรงสวย"
    },
    "category": "tops",
    "is_new": false,
    "price": 259,
    "fabric": {
      "en": "Lightweight woven fabric",
      "th": "ผ้าป่าน"
    },
    "colours": [
      {
        "en": "TBWF001",
        "th": "TBWF001"
      },
      {
        "en": "TBWF002",
        "th": "TBWF002"
      },
      {
        "en": "TBWF003",
        "th": "TBWF003"
      },
      {
        "en": "TBWF004",
        "th": "TBWF004"
      },
      {
        "en": "TBWF005",
        "th": "TBWF005"
      },
      {
        "en": "TBWF006",
        "th": "TBWF006"
      },
      {
        "en": "TBWF007",
        "th": "TBWF007"
      },
      {
        "en": "TBWF008",
        "th": "TBWF008"
      },
      {
        "en": "TBWF009",
        "th": "TBWF009"
      },
      {
        "en": "TBWF010",
        "th": "TBWF010"
      },
      {
        "en": "TBWF011",
        "th": "TBWF011"
      },
      {
        "en": "TBWF012",
        "th": "TBWF012"
      },
      {
        "en": "TBWF013",
        "th": "TBWF013"
      },
      {
        "en": "TBWF014",
        "th": "TBWF014"
      },
      {
        "en": "TBWF015",
        "th": "TBWF015"
      },
      {
        "en": "TBWF016",
        "th": "TBWF016"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "40 in / 102 cm",
          "th": "อก 40 นิ้ว / 102 ซม."
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "29 in / 74 cm",
          "th": "ความยาวเสื้อ 29 นิ้ว / 74 ซม."
        }
      },
      {
        "label": {
          "en": "Sleeve",
          "th": "แขนเสื้อ"
        },
        "value": {
          "en": "17 in / 43 cm",
          "th": "แขนยาว 17 นิ้ว / 43 ซม."
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16168526022-01.webp",
        "alt": {
          "en": "Main view of Black And White Lightweight Woven Top, Collar, Chinese Collar, Long Sleeves, Beautiful Shape",
          "th": "ภาพหลักของ เสื้อผ้าป่านขาวดำ คอปก คอจีน แขนยาว ทรงสวย"
        }
      },
      {
        "src": "products/lzd-16168526022-02.webp",
        "alt": {
          "en": "Additional view 2 of Black And White Lightweight Woven Top, Collar, Chinese Collar, Long Sleeves, Beautiful Shape",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อผ้าป่านขาวดำ คอปก คอจีน แขนยาว ทรงสวย"
        }
      },
      {
        "src": "products/lzd-16168526022-03.webp",
        "alt": {
          "en": "Additional view 3 of Black And White Lightweight Woven Top, Collar, Chinese Collar, Long Sleeves, Beautiful Shape",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อผ้าป่านขาวดำ คอปก คอจีน แขนยาว ทรงสวย"
        }
      },
      {
        "src": "products/lzd-16168526022-04.webp",
        "alt": {
          "en": "Additional view 4 of Black And White Lightweight Woven Top, Collar, Chinese Collar, Long Sleeves, Beautiful Shape",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อผ้าป่านขาวดำ คอปก คอจีน แขนยาว ทรงสวย"
        }
      },
      {
        "src": "products/lzd-16168526022-05.webp",
        "alt": {
          "en": "Additional view 5 of Black And White Lightweight Woven Top, Collar, Chinese Collar, Long Sleeves, Beautiful Shape",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อผ้าป่านขาวดำ คอปก คอจีน แขนยาว ทรงสวย"
        }
      },
      {
        "src": "products/lzd-16168526022-06.webp",
        "alt": {
          "en": "Additional view 6 of Black And White Lightweight Woven Top, Collar, Chinese Collar, Long Sleeves, Beautiful Shape",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อผ้าป่านขาวดำ คอปก คอจีน แขนยาว ทรงสวย"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "🖤🤍 Classic black and white tone hemp clothes, easy to wear, easy to match, can be worn every day 🤍🖤 Beautiful and unique patterns. There are many patterns to choose from. Whether it's a chill look, a cafe look or wear to work, it looks good and stylish ✨ Light linen fabric, comfortable to wear, breathable, flows beautifully and doesn't feel hot when worn. 🪡 Collar detail, Chinese collar, front buttons. 👖 Easy to wear and looks beautiful with jeans or linen. 📸 Take more photos. Black and white tones look very expensive. 📏 Shirt size • Chest 40 inches / 102 cm. • Shirt length 29 inches / 74 cm. • Arm length 17 inches / 43 cm. • Shoulder 3 inches / 7.5 cm. 🌿 Genuine linen fabric, comfortable to wear. 🖤 There are many patterns and styles to choose from. 📦 Ready to send all items.",
      "th": "🖤🤍 เสื้อผ้าป่านโทนขาวดำสุดคลาสสิก ใส่ง่าย แมทช์ง่าย ใส่ได้ทุกวัน 🤍🖤 ลายสวยไม่ซ้ำ มีให้เลือกหลายลาย จะลุคชิลล์ ลุคคาเฟ่ หรือใส่ทำงานก็ดูดีแบบมีสไตล์ ✨ ผ้าป่านเนื้อเบา ใส่สบาย ระบายอากาศดี ใส่แล้วพลิ้วสวย ไม่ร้อน 🪡 ดีเทลคอปก คอจีน กระดุมหน้า 👖 ใส่ง่ายแมทช์กับกางเกงยีนส์หรือผ้าลินินก็สวย 📸 ถ่ายรูปขึ้นมาก โทนขาวดำดูแพงสุดๆ 📏 ขนาดเสื้อ • อก 40 นิ้ว / 102 ซม. • ความยาวเสื้อ 29 นิ้ว / 74 ซม. • แขนยาว 17 นิ้ว / 43 ซม. • ไหล่ 3 นิ้ว / 7.5 ซม. 🌿 ผ้าป่านแท้ ใส่สบาย 🖤 มีหลายลาย หลายแบบให้เลือก 📦 พร้อมส่งทุกตัว"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16168526022-s127214224850.html"
    }
  },
  {
    "code": "LZD-4406606701",
    "name": {
      "en": "Embroidered Skirts, Skirts, Edited Rayon Skirts, Beautiful Skirts, Long Skirts, Rope Skirts",
      "th": "กระโปรงปัก กระโปรง กระโปรงผ้าเรยอนตัดต่อ กระโปรงสวย กระโปรงยาว กระโปรงเชือก"
    },
    "category": "skirts",
    "is_new": false,
    "price": 599,
    "fabric": {
      "en": "Rayon",
      "th": "ผ้าเรยอน"
    },
    "colours": [
      {
        "en": "DS Darkpink",
        "th": "DS Darkpink"
      },
      {
        "en": "DS Green",
        "th": "DS Green"
      },
      {
        "en": "DS Colored",
        "th": "DS Colored"
      },
      {
        "en": "DS Cream",
        "th": "DS Cream"
      },
      {
        "en": "DS Lightblue",
        "th": "DS Lightblue"
      },
      {
        "en": "DS Pink",
        "th": "DS Pink"
      },
      {
        "en": "DS Grey",
        "th": "DS Grey"
      },
      {
        "en": "DS Kapi",
        "th": "DS Kapi"
      },
      {
        "en": "DS Yellow",
        "th": "DS Yellow"
      },
      {
        "en": "DS Purple",
        "th": "DS Purple"
      },
      {
        "en": "DS Red",
        "th": "DS Red"
      },
      {
        "en": "DS Blue",
        "th": "DS Blue"
      },
      {
        "en": "DS Brown",
        "th": "DS Brown"
      },
      {
        "en": "DS Base",
        "th": "DS Base"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "ฟรีไซส์"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-4406606701-01.webp",
        "alt": {
          "en": "Main view of Embroidered Skirts, Skirts, Edited Rayon Skirts, Beautiful Skirts, Long Skirts, Rope Skirts",
          "th": "ภาพหลักของ กระโปรงปัก กระโปรง กระโปรงผ้าเรยอนตัดต่อ กระโปรงสวย กระโปรงยาว กระโปรงเชือก"
        }
      },
      {
        "src": "products/lzd-4406606701-02.webp",
        "alt": {
          "en": "Additional view 2 of Embroidered Skirts, Skirts, Edited Rayon Skirts, Beautiful Skirts, Long Skirts, Rope Skirts",
          "th": "ภาพเพิ่มเติม 2 ของ กระโปรงปัก กระโปรง กระโปรงผ้าเรยอนตัดต่อ กระโปรงสวย กระโปรงยาว กระโปรงเชือก"
        }
      },
      {
        "src": "products/lzd-4406606701-03.webp",
        "alt": {
          "en": "Additional view 3 of Embroidered Skirts, Skirts, Edited Rayon Skirts, Beautiful Skirts, Long Skirts, Rope Skirts",
          "th": "ภาพเพิ่มเติม 3 ของ กระโปรงปัก กระโปรง กระโปรงผ้าเรยอนตัดต่อ กระโปรงสวย กระโปรงยาว กระโปรงเชือก"
        }
      },
      {
        "src": "products/lzd-4406606701-04.webp",
        "alt": {
          "en": "Additional view 4 of Embroidered Skirts, Skirts, Edited Rayon Skirts, Beautiful Skirts, Long Skirts, Rope Skirts",
          "th": "ภาพเพิ่มเติม 4 ของ กระโปรงปัก กระโปรง กระโปรงผ้าเรยอนตัดต่อ กระโปรงสวย กระโปรงยาว กระโปรงเชือก"
        }
      },
      {
        "src": "products/lzd-4406606701-05.webp",
        "alt": {
          "en": "Additional view 5 of Embroidered Skirts, Skirts, Edited Rayon Skirts, Beautiful Skirts, Long Skirts, Rope Skirts",
          "th": "ภาพเพิ่มเติม 5 ของ กระโปรงปัก กระโปรง กระโปรงผ้าเรยอนตัดต่อ กระโปรงสวย กระโปรงยาว กระโปรงเชือก"
        }
      },
      {
        "src": "products/lzd-4406606701-06.webp",
        "alt": {
          "en": "Additional view 6 of Embroidered Skirts, Skirts, Edited Rayon Skirts, Beautiful Skirts, Long Skirts, Rope Skirts",
          "th": "ภาพเพิ่มเติม 6 ของ กระโปรงปัก กระโปรง กระโปรงผ้าเรยอนตัดต่อ กระโปรงสวย กระโปรงยาว กระโปรงเชือก"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Embroidered skirts, rope skirts, edited rayon skirts, beautiful skirts, long skirts, edited work. Wear it beautifully and uniquely. The placement of each colored cloth is different. You can choose the color tone as you like. Free size, fits waist 28-42 inches, length 40 inches. Every product is inspected before sending. ***If there is a problem with the product Don't just press deduct points. Please notify the shop first***",
      "th": "กระโปรงปัก กระโปรงเชือก กระโปรงผ้าเรยอนตัดต่อ กระโปรงสวย กระโปรงยาว งานตัดต่อ ใส่สวยเท่ไม่ซ้ำใคร การวางผ้าสีแต่ละตัวจะไม่เหมือนกัน สามารถเลือกโทนสีตามที่ชอบ ฟรีไซส์ใส่ได้เอว 28-42 นิ้ว ยาว 40 นิ้ว มีการตรวจสินค้าก่อนส่งทุกชิ้น ***หากมีปัญหากับสินค้า อย่างเพิ่งกดหักคะแนน ให้แจ้งมาทางร้านก่อนนะคะ***"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i4406606701-s17574583138.html"
    }
  },
  {
    "code": "LZD-4389148570",
    "name": {
      "en": "Black Rayon Skirt, Beautiful Skirt, Sequined Skirt, Pattern B",
      "th": "กระโปรงเรย่อนพื้นดำ กระโปรงสวยๆ กระโปรงปักเลื่อม ลาย B"
    },
    "category": "skirts",
    "is_new": false,
    "price": 359,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "BSB Blue",
        "th": "BSB Blue"
      },
      {
        "en": "BSB Brown",
        "th": "BSB Brown"
      },
      {
        "en": "BSB Green",
        "th": "BSB Green"
      },
      {
        "en": "BSB Lightblue",
        "th": "BSB Lightblue"
      },
      {
        "en": "BSB Maroon",
        "th": "BSB Maroon"
      },
      {
        "en": "BSB Pink",
        "th": "BSB Pink"
      },
      {
        "en": "BSB Purple",
        "th": "BSB Purple"
      },
      {
        "en": "BSB Yellow",
        "th": "BSB Yellow"
      },
      {
        "en": "BSB Orange",
        "th": "BSB Orange"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "ฟรีไซส์"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "36 in",
          "th": "ยาว 36 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-4389148570-01.webp",
        "alt": {
          "en": "Main view of Black Rayon Skirt, Beautiful Skirt, Sequined Skirt, Pattern B",
          "th": "ภาพหลักของ กระโปรงเรย่อนพื้นดำ กระโปรงสวยๆ กระโปรงปักเลื่อม ลาย B"
        }
      },
      {
        "src": "products/lzd-4389148570-02.webp",
        "alt": {
          "en": "Additional view 2 of Black Rayon Skirt, Beautiful Skirt, Sequined Skirt, Pattern B",
          "th": "ภาพเพิ่มเติม 2 ของ กระโปรงเรย่อนพื้นดำ กระโปรงสวยๆ กระโปรงปักเลื่อม ลาย B"
        }
      },
      {
        "src": "products/lzd-4389148570-03.webp",
        "alt": {
          "en": "Additional view 3 of Black Rayon Skirt, Beautiful Skirt, Sequined Skirt, Pattern B",
          "th": "ภาพเพิ่มเติม 3 ของ กระโปรงเรย่อนพื้นดำ กระโปรงสวยๆ กระโปรงปักเลื่อม ลาย B"
        }
      },
      {
        "src": "products/lzd-4389148570-04.webp",
        "alt": {
          "en": "Additional view 4 of Black Rayon Skirt, Beautiful Skirt, Sequined Skirt, Pattern B",
          "th": "ภาพเพิ่มเติม 4 ของ กระโปรงเรย่อนพื้นดำ กระโปรงสวยๆ กระโปรงปักเลื่อม ลาย B"
        }
      },
      {
        "src": "products/lzd-4389148570-05.webp",
        "alt": {
          "en": "Additional view 5 of Black Rayon Skirt, Beautiful Skirt, Sequined Skirt, Pattern B",
          "th": "ภาพเพิ่มเติม 5 ของ กระโปรงเรย่อนพื้นดำ กระโปรงสวยๆ กระโปรงปักเลื่อม ลาย B"
        }
      },
      {
        "src": "products/lzd-4389148570-06.webp",
        "alt": {
          "en": "Additional view 6 of Black Rayon Skirt, Beautiful Skirt, Sequined Skirt, Pattern B",
          "th": "ภาพเพิ่มเติม 6 ของ กระโปรงเรย่อนพื้นดำ กระโปรงสวยๆ กระโปรงปักเลื่อม ลาย B"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "It is a rayon skirt with a black background and a gold print paired with colored patterns with sequins embroidered all around the skirt. It's imported. Wear it and you will look beautiful and cute. When you see it, it will stand out. Soft fabric, not thin, no lining, comfortable to wear. Free size, waist 28-38 inches Length 36 inches There are 2 patterns to choose from, 8-10 colors each. Every product is inspected before sending. ***If there is a problem with the product Don't just press deduct points. Please notify the shop first***",
      "th": "เป็นกระโปรงผ้าเรย่อนพื้นดำพิมพ์ทองคู่กับลายสีพร้อมปักเลื่อมรอบตัวกระโปรง เป็นของนำเข้า ใส่แล้วดูสวย น่ารัก เห็นแล้วดูเด่นสะดุดตา ผ้านุ่มไม่บาง ไม่มีซับใน ใส่สบาย ฟรีไซส์ เอว 28-38 นิ้ว ยาว 36 นิ้ว มีให้เลือก 2 ลายๆ ละ 8-10 สี มีการตรวจสินค้าก่อนส่งทุกชิ้น ***หากมีปัญหากับสินค้า อย่างเพิ่งกดหักคะแนน ให้แจ้งมาทางร้านก่อนนะคะ***"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/b-i4389148570-s17483184723.html"
    }
  },
  {
    "code": "LZD-16171842158",
    "name": {
      "en": "Satchel Bag, Vintage, Boho, Hippie Style, Available In Many Colors (Choose A Color As Shown Above)",
      "th": "กระเป๋าย่าม สไตล์วินเทจ โบโฮ ฮิปปี้ๆ มีหลายสี (เลือกสีตามแทบด้านบน)"
    },
    "category": "bags",
    "is_new": false,
    "price": 359,
    "fabric": {
      "en": "Woven fabric",
      "th": "ผ้าทอ"
    },
    "colours": [
      {
        "en": "Green",
        "th": "MS001 เขียวเข้ม"
      },
      {
        "en": "Purple",
        "th": "MS002 ม่วง"
      },
      {
        "en": "Green",
        "th": "MS003 เขียวมะนาว"
      },
      {
        "en": "Black",
        "th": "MS004 ดำ"
      },
      {
        "en": "Red",
        "th": "MS005 แดงสด"
      },
      {
        "en": "Yellow",
        "th": "MS006 เหลือง"
      },
      {
        "en": "Pink",
        "th": "MS007 ชมพู"
      },
      {
        "en": "Pink",
        "th": "MS008 ชมพูเข้ม"
      },
      {
        "en": "Green",
        "th": "MS009 เขียว"
      },
      {
        "en": "ขมิ้น",
        "th": "MS010 ขมิ้น"
      },
      {
        "en": "Blue",
        "th": "MS011 น้ำเงิน"
      },
      {
        "en": "เปลือกมังคุด",
        "th": "MS012 เปลือกมังคุด"
      },
      {
        "en": "MS013",
        "th": "MS013"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "See the Lazada listing for available options",
          "th": "ดูตัวเลือกขนาดที่มีในหน้าสินค้า Lazada"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16171842158-01.webp",
        "alt": {
          "en": "Main view of Satchel Bag, Vintage, Boho, Hippie Style, Available In Many Colors (Choose A Color As Shown Above)",
          "th": "ภาพหลักของ กระเป๋าย่าม สไตล์วินเทจ โบโฮ ฮิปปี้ๆ มีหลายสี (เลือกสีตามแทบด้านบน)"
        }
      },
      {
        "src": "products/lzd-16171842158-02.webp",
        "alt": {
          "en": "Additional view 2 of Satchel Bag, Vintage, Boho, Hippie Style, Available In Many Colors (Choose A Color As Shown Above)",
          "th": "ภาพเพิ่มเติม 2 ของ กระเป๋าย่าม สไตล์วินเทจ โบโฮ ฮิปปี้ๆ มีหลายสี (เลือกสีตามแทบด้านบน)"
        }
      },
      {
        "src": "products/lzd-16171842158-03.webp",
        "alt": {
          "en": "Additional view 3 of Satchel Bag, Vintage, Boho, Hippie Style, Available In Many Colors (Choose A Color As Shown Above)",
          "th": "ภาพเพิ่มเติม 3 ของ กระเป๋าย่าม สไตล์วินเทจ โบโฮ ฮิปปี้ๆ มีหลายสี (เลือกสีตามแทบด้านบน)"
        }
      },
      {
        "src": "products/lzd-16171842158-04.webp",
        "alt": {
          "en": "Additional view 4 of Satchel Bag, Vintage, Boho, Hippie Style, Available In Many Colors (Choose A Color As Shown Above)",
          "th": "ภาพเพิ่มเติม 4 ของ กระเป๋าย่าม สไตล์วินเทจ โบโฮ ฮิปปี้ๆ มีหลายสี (เลือกสีตามแทบด้านบน)"
        }
      },
      {
        "src": "products/lzd-16171842158-05.webp",
        "alt": {
          "en": "Additional view 5 of Satchel Bag, Vintage, Boho, Hippie Style, Available In Many Colors (Choose A Color As Shown Above)",
          "th": "ภาพเพิ่มเติม 5 ของ กระเป๋าย่าม สไตล์วินเทจ โบโฮ ฮิปปี้ๆ มีหลายสี (เลือกสีตามแทบด้านบน)"
        }
      },
      {
        "src": "products/lzd-16171842158-06.webp",
        "alt": {
          "en": "Additional view 6 of Satchel Bag, Vintage, Boho, Hippie Style, Available In Many Colors (Choose A Color As Shown Above)",
          "th": "ภาพเพิ่มเติม 6 ของ กระเป๋าย่าม สไตล์วินเทจ โบโฮ ฮิปปี้ๆ มีหลายสี (เลือกสีตามแทบด้านบน)"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "🌈 Chic Bohemian bag ✨ Woven fabric, bright colors, unique design. Just one piece can instantly change your look to stand out. 💖 👜 Easy to carry, can match any style. 🎨 There are many colors to choose from as seen above. 🌞 Super chic sun pattern. vintage boho style 📱 Carry mobile phone, wallet and necessary items easily 🌿 Handmade fabric work It is unique and unique.",
      "th": "🌈 กระเป๋าย่ามโบฮีเมียนสุดชิค ✨ งานผ้าทอสีสันสดใส ดีไซน์ไม่ซ้ำ ใบเดียวก็เปลี่ยนลุคให้โดดเด่นได้ทันที 💖 👜 สะพายง่าย แมทช์ได้ทุกสไตล์ 🎨 มีหลายสีให้เลือกตามแทบด้านบน 🌞 ลายพระอาทิตย์สุดเก๋ สไตล์วินเทจโบโฮ 📱 ใส่มือถือ กระเป๋าสตางค์ และของใช้จำเป็นได้สบาย 🌿 งานผ้าแนวแฮนด์เมด มีเอกลักษณ์ไม่เหมือนใคร"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16171842158-s127213195250.html"
    }
  },
  {
    "code": "LZD-16158886042",
    "name": {
      "en": "Short Dress, Batwing, New Pattern, Waist Tie, One Size",
      "th": "เดรสสั้น ทรงปีกค้างคาว ลายใหม่ เชือกผูกเอว ฟรีไซส์"
    },
    "category": "dresses",
    "is_new": true,
    "price": 199,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "Black and White",
        "th": "KTS1601 ดำขาว"
      },
      {
        "en": "White and Black",
        "th": "KTS1602 ขาวดำ"
      },
      {
        "en": "Brown",
        "th": "KTS1603 น้ำตาล"
      },
      {
        "en": "Sky Blue",
        "th": "KTS1604 ฟ้า"
      },
      {
        "en": "Red",
        "th": "KTS1605 แดง"
      },
      {
        "en": "Red",
        "th": "KTS1606 แดงครีม"
      },
      {
        "en": "Navy",
        "th": "KTS1607 กรมท่า"
      },
      {
        "en": "Pink",
        "th": "KTS1608 ชมพู"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "Fits 32–54 in",
          "th": "อกใส่ได้ 32-54 นิ้ว"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "34 in",
          "th": "ความยาว 34 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16158886042-01.webp",
        "alt": {
          "en": "Main view of Short Dress, Batwing, New Pattern, Waist Tie, One Size",
          "th": "ภาพหลักของ เดรสสั้น ทรงปีกค้างคาว ลายใหม่ เชือกผูกเอว ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16158886042-02.webp",
        "alt": {
          "en": "Additional view 2 of Short Dress, Batwing, New Pattern, Waist Tie, One Size",
          "th": "ภาพเพิ่มเติม 2 ของ เดรสสั้น ทรงปีกค้างคาว ลายใหม่ เชือกผูกเอว ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16158886042-03.webp",
        "alt": {
          "en": "Additional view 3 of Short Dress, Batwing, New Pattern, Waist Tie, One Size",
          "th": "ภาพเพิ่มเติม 3 ของ เดรสสั้น ทรงปีกค้างคาว ลายใหม่ เชือกผูกเอว ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16158886042-04.webp",
        "alt": {
          "en": "Additional view 4 of Short Dress, Batwing, New Pattern, Waist Tie, One Size",
          "th": "ภาพเพิ่มเติม 4 ของ เดรสสั้น ทรงปีกค้างคาว ลายใหม่ เชือกผูกเอว ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16158886042-05.webp",
        "alt": {
          "en": "Additional view 5 of Short Dress, Batwing, New Pattern, Waist Tie, One Size",
          "th": "ภาพเพิ่มเติม 5 ของ เดรสสั้น ทรงปีกค้างคาว ลายใหม่ เชือกผูกเอว ฟรีไซส์"
        }
      },
      {
        "src": "products/lzd-16158886042-06.webp",
        "alt": {
          "en": "Additional view 6 of Short Dress, Batwing, New Pattern, Waist Tie, One Size",
          "th": "ภาพเพิ่มเติม 6 ของ เดรสสั้น ทรงปีกค้างคาว ลายใหม่ เชือกผูกเอว ฟรีไซส์"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "✨ Short bat wing style dress. Wear it and camouflage your beautiful figure and look expensive effortlessly ✨ Flowing fabric, comfortable to wear. V-neck design helps make the look look slimmer. Easy to match. Wear it out, wear it to a cafe, or wear it to work. It's all beautiful. 💖 🌈 There are many colors to choose from. 📏 Chest can fit 32-54 inches. 📏 Length 34 inches ✨ Free size, comfortable to wear, not tight. ✨ Bat wing sleeves Helps conceal the upper arms and torso ✨ Beautiful dressing gown Wear it and you will look stylish. 💕 Sweet people, chill people, or plus size girls can wear it all beautifully. Just put it on and you're done. Look good with class from every angle ✨",
      "th": "✨ เดรสสั้นทรงปีกค้างคาว ใส่แล้วพรางหุ่นสวย ดูแพงแบบ effortless ✨ ผ้าพริ้วใส่สบาย ดีไซน์คอวีช่วยให้ลุคดูเพรียว แมทช์ง่าย ใส่เที่ยว ใส่คาเฟ่ หรือใส่ทำงานก็สวยครบ 💖 🌈 มีหลายสีให้เลือก 📏 อกใส่ได้ 32-54 นิ้ว 📏 ความยาว 34 นิ้ว ✨ ทรงฟรีไซซ์ ใส่สบาย ไม่รัดตัว ✨ แขนปีกค้างคาว ช่วยพรางต้นแขนและช่วงตัว ✨ ผ้าทิ้งตัวสวย ใส่แล้วดูมีสไตล์ 💕 สายหวาน สายชิล หรือสาวพลัสไซซ์ ใส่ได้สวยหมด ใส่ตัวเดียวจบ ดูดีแบบมีคลาสทุกมุม ✨"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16158886042-s127287302800.html"
    }
  },
  {
    "code": "LZD-4528240178",
    "name": {
      "en": "Chiffon Shirts, Bat Shirts, Blazers, Travel Shirts, Bohemian Shirts",
      "th": "เสื้อชีฟอง เสื้อค้างคาว เสื้อคลุม เสื้อเที่ยว เสื้อโบฮีเมียน"
    },
    "category": "kaftans",
    "home_showcase": {
      "image_index": 0,
      "name": {
        "en": "Bohemian Chiffon Kaftan",
        "th": "คาฟตันชีฟองสไตล์โบฮีเมียน"
      }
    },
    "is_new": false,
    "price": 259,
    "fabric": {
      "en": "Chiffon",
      "th": "ผ้าชีฟอง"
    },
    "colours": [
      {
        "en": "C1 Black",
        "th": "C1 Black"
      },
      {
        "en": "C1 DBlue",
        "th": "C1 DBlue"
      },
      {
        "en": "C1 Cream",
        "th": "C1 Cream"
      },
      {
        "en": "C1 Green",
        "th": "C1 Green"
      },
      {
        "en": "C1 LB",
        "th": "C1 LB"
      },
      {
        "en": "C1 Orange",
        "th": "C1 Orange"
      },
      {
        "en": "C1 Yellow",
        "th": "C1 Yellow"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "ฟรีไซส์"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-4528240178-01.webp",
        "alt": {
          "en": "Main view of Chiffon Shirts, Bat Shirts, Blazers, Travel Shirts, Bohemian Shirts",
          "th": "ภาพหลักของ เสื้อชีฟอง เสื้อค้างคาว เสื้อคลุม เสื้อเที่ยว เสื้อโบฮีเมียน"
        }
      },
      {
        "src": "products/lzd-4528240178-02.webp",
        "alt": {
          "en": "Additional view 2 of Chiffon Shirts, Bat Shirts, Blazers, Travel Shirts, Bohemian Shirts",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อชีฟอง เสื้อค้างคาว เสื้อคลุม เสื้อเที่ยว เสื้อโบฮีเมียน"
        }
      },
      {
        "src": "products/lzd-4528240178-03.webp",
        "alt": {
          "en": "Additional view 3 of Chiffon Shirts, Bat Shirts, Blazers, Travel Shirts, Bohemian Shirts",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อชีฟอง เสื้อค้างคาว เสื้อคลุม เสื้อเที่ยว เสื้อโบฮีเมียน"
        }
      },
      {
        "src": "products/lzd-4528240178-04.webp",
        "alt": {
          "en": "Additional view 4 of Chiffon Shirts, Bat Shirts, Blazers, Travel Shirts, Bohemian Shirts",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อชีฟอง เสื้อค้างคาว เสื้อคลุม เสื้อเที่ยว เสื้อโบฮีเมียน"
        }
      },
      {
        "src": "products/lzd-4528240178-05.webp",
        "alt": {
          "en": "Additional view 5 of Chiffon Shirts, Bat Shirts, Blazers, Travel Shirts, Bohemian Shirts",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อชีฟอง เสื้อค้างคาว เสื้อคลุม เสื้อเที่ยว เสื้อโบฮีเมียน"
        }
      },
      {
        "src": "products/lzd-4528240178-06.webp",
        "alt": {
          "en": "Additional view 6 of Chiffon Shirts, Bat Shirts, Blazers, Travel Shirts, Bohemian Shirts",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อชีฟอง เสื้อค้างคาว เสื้อคลุม เสื้อเที่ยว เสื้อโบฮีเมียน"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "chiffon shirt, bat shirt Chiffon bat shirt, beautiful and luxurious, can be worn on any occasion. It's a coat. Wear it to go for a walk. Wear it to travel. Can be worn by both plump people. and a person with a flowing figure free size Every product is inspected before sending. ***If there is a problem with the product Don't just press deduct points. Please notify the shop first*** Thank you to everyone who has come to place an order with products from our store.",
      "th": "เสื้อชีฟอง เสื้อค้างคาว เสื้อค้างคาวผ้าชีฟอง สวย ดูหรู ใส่ได้ทุกโอกาส เป็นเสื้อคลุม ใส่ไปเดินเล่น ใส่เที่ยว ใส่ได้ทั้งคนรูปร่างอวบ และคนรูปร่างพริ้ว ฟรีไซส์ มีการตรวจสินค้าก่อนส่งทุกชิ้น ***หากมีปัญหากับสินค้า อย่างเพิ่งกดหักคะแนน ให้แจ้งมาทางร้านก่อนนะคะ*** ขอบคุณทุกๆท่านที่ได้เข้ามาทำการกดสั่งซื้อกับสินค้าทางร้านของเราค่ะ"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i4528240178-s18429024566.html"
    }
  },
  {
    "code": "LZD-4386216636",
    "name": {
      "en": "Floral Pattern Shirt. Floral Pattern Hemp Shirt. Songkran Shirts, Beach Shirts, Comfortable Shirts, Long Shirts, Front Slit Shirts",
      "th": "เสื้อลายดอก เสื้อป่านลายดอก เสื้อสงกรานต์ เสื้อชายหาด เสื้อใส่สบาย เสื้อทรงยาว เสื้อผ่าหน้า"
    },
    "category": "tops",
    "is_new": false,
    "price": 229,
    "fabric": {
      "en": "Lightweight woven fabric",
      "th": "ผ้าป่าน"
    },
    "colours": [
      {
        "en": "W- Light Blue",
        "th": "W- Light Blue"
      },
      {
        "en": "W- Pink",
        "th": "W- Pink"
      },
      {
        "en": "W- Green",
        "th": "W- Green"
      },
      {
        "en": "W- Orange",
        "th": "W- Orange"
      },
      {
        "en": "W- Purple",
        "th": "W- Purple"
      },
      {
        "en": "W- Red",
        "th": "W- Red"
      },
      {
        "en": "W- Yellow",
        "th": "W- Yellow"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-4386216636-01.webp",
        "alt": {
          "en": "Main view of Floral Pattern Shirt. Floral Pattern Hemp Shirt. Songkran Shirts, Beach Shirts, Comfortable Shirts, Long Shirts, Front Slit Shirts",
          "th": "ภาพหลักของ เสื้อลายดอก เสื้อป่านลายดอก เสื้อสงกรานต์ เสื้อชายหาด เสื้อใส่สบาย เสื้อทรงยาว เสื้อผ่าหน้า"
        }
      },
      {
        "src": "products/lzd-4386216636-02.webp",
        "alt": {
          "en": "Additional view 2 of Floral Pattern Shirt. Floral Pattern Hemp Shirt. Songkran Shirts, Beach Shirts, Comfortable Shirts, Long Shirts, Front Slit Shirts",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อลายดอก เสื้อป่านลายดอก เสื้อสงกรานต์ เสื้อชายหาด เสื้อใส่สบาย เสื้อทรงยาว เสื้อผ่าหน้า"
        }
      },
      {
        "src": "products/lzd-4386216636-03.webp",
        "alt": {
          "en": "Additional view 3 of Floral Pattern Shirt. Floral Pattern Hemp Shirt. Songkran Shirts, Beach Shirts, Comfortable Shirts, Long Shirts, Front Slit Shirts",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อลายดอก เสื้อป่านลายดอก เสื้อสงกรานต์ เสื้อชายหาด เสื้อใส่สบาย เสื้อทรงยาว เสื้อผ่าหน้า"
        }
      },
      {
        "src": "products/lzd-4386216636-04.webp",
        "alt": {
          "en": "Additional view 4 of Floral Pattern Shirt. Floral Pattern Hemp Shirt. Songkran Shirts, Beach Shirts, Comfortable Shirts, Long Shirts, Front Slit Shirts",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อลายดอก เสื้อป่านลายดอก เสื้อสงกรานต์ เสื้อชายหาด เสื้อใส่สบาย เสื้อทรงยาว เสื้อผ่าหน้า"
        }
      },
      {
        "src": "products/lzd-4386216636-05.webp",
        "alt": {
          "en": "Additional view 5 of Floral Pattern Shirt. Floral Pattern Hemp Shirt. Songkran Shirts, Beach Shirts, Comfortable Shirts, Long Shirts, Front Slit Shirts",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อลายดอก เสื้อป่านลายดอก เสื้อสงกรานต์ เสื้อชายหาด เสื้อใส่สบาย เสื้อทรงยาว เสื้อผ่าหน้า"
        }
      },
      {
        "src": "products/lzd-4386216636-06.webp",
        "alt": {
          "en": "Additional view 6 of Floral Pattern Shirt. Floral Pattern Hemp Shirt. Songkran Shirts, Beach Shirts, Comfortable Shirts, Long Shirts, Front Slit Shirts",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อลายดอก เสื้อป่านลายดอก เสื้อสงกรานต์ เสื้อชายหาด เสื้อใส่สบาย เสื้อทรงยาว เสื้อผ่าหน้า"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Floral pattern shirt, made from linen, imported product, comfortable to wear, suitable for walking on the beach. Or wear it to travel It's a collared shirt with buttons and front slit throughout. There are cuts on both sides. Free size, can fit from chest 34 - 46 inches, length 34 inches, arm circumference 20 inches. ****Recommended washing method Should be soaked in salt water for 1 night and washed separately 1-2 times**** Every product is inspected before sending. ***If there is a problem with the product Don't just press deduct points. Please notify the shop first***",
      "th": "เสื้อลายดอก เป็นผ้าป่าน สินค้านำเข้า ใส่สบาย ใส่เดินเล่นชายหาด หรือใส่เที่ยว เป็นเสื้อคอปกกระดุมผ่าหน้าตลอด มีผ่าข้างทั้งสองข้าง ฟรีไซส์ ใส่ได้ตั้งแต่อก 34 - 46 นิ้ว ยาว 34 นิ้ว วงแขน 20 นิ้ว ****แนะนำวิธีซัก ควรแช่น้ำเกลือทิ้งไว้ 1 คืน และนำไปซักแยก 1-2 ครั้ง**** มีการตรวจสินค้าก่อนส่งทุกชิ้น ***หากมีปัญหากับสินค้า อย่างเพิ่งกดหักคะแนน ให้แจ้งมาทางร้านก่อนนะคะ***"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i4386216636-s17468492082.html"
    }
  },
  {
    "code": "LZD-16157121705",
    "name": {
      "en": "Large Shopping Bag, Cotton Fabric With Cartoon Elephant Pattern",
      "th": "กระเป๋าสะพาย ทรงช๊อปปิ้ง ผ้าฝ้ายลายช้างการ์ตูน ขนาดใหญ่"
    },
    "category": "bags",
    "is_new": false,
    "price": 199,
    "fabric": {
      "en": "Cotton",
      "th": "ผ้าคอตตอน"
    },
    "colours": [
      {
        "en": "ECB001",
        "th": "ECB001"
      },
      {
        "en": "ECB006",
        "th": "ECB006"
      },
      {
        "en": "ECB009",
        "th": "ECB009"
      },
      {
        "en": "ECB0011",
        "th": "ECB0011"
      },
      {
        "en": "ECB0013",
        "th": "ECB0013"
      },
      {
        "en": "ECB0014",
        "th": "ECB0014"
      },
      {
        "en": "ECB0015",
        "th": "ECB0015"
      },
      {
        "en": "ECB0016",
        "th": "ECB0016"
      },
      {
        "en": "ECB0017",
        "th": "ECB0017"
      },
      {
        "en": "ECB0019",
        "th": "ECB0019"
      },
      {
        "en": "ECB0020",
        "th": "ECB0020"
      },
      {
        "en": "ECB0021",
        "th": "ECB0021"
      },
      {
        "en": "ECB0022",
        "th": "ECB0022"
      },
      {
        "en": "ECB0023",
        "th": "ECB0023"
      },
      {
        "en": "ECB0024",
        "th": "ECB0024"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Dimensions",
          "th": "ขนาด"
        },
        "value": {
          "en": "16 / 18 / 5 in",
          "th": "ขนาดกว้างขวาง: 16 x 18 x 5 นิ้ว ใส่ของได้จุใจ"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16157121705-01.webp",
        "alt": {
          "en": "Main view of Large Shopping Bag, Cotton Fabric With Cartoon Elephant Pattern",
          "th": "ภาพหลักของ กระเป๋าสะพาย ทรงช๊อปปิ้ง ผ้าฝ้ายลายช้างการ์ตูน ขนาดใหญ่"
        }
      },
      {
        "src": "products/lzd-16157121705-02.webp",
        "alt": {
          "en": "Additional view 2 of Large Shopping Bag, Cotton Fabric With Cartoon Elephant Pattern",
          "th": "ภาพเพิ่มเติม 2 ของ กระเป๋าสะพาย ทรงช๊อปปิ้ง ผ้าฝ้ายลายช้างการ์ตูน ขนาดใหญ่"
        }
      },
      {
        "src": "products/lzd-16157121705-03.webp",
        "alt": {
          "en": "Additional view 3 of Large Shopping Bag, Cotton Fabric With Cartoon Elephant Pattern",
          "th": "ภาพเพิ่มเติม 3 ของ กระเป๋าสะพาย ทรงช๊อปปิ้ง ผ้าฝ้ายลายช้างการ์ตูน ขนาดใหญ่"
        }
      },
      {
        "src": "products/lzd-16157121705-04.webp",
        "alt": {
          "en": "Additional view 4 of Large Shopping Bag, Cotton Fabric With Cartoon Elephant Pattern",
          "th": "ภาพเพิ่มเติม 4 ของ กระเป๋าสะพาย ทรงช๊อปปิ้ง ผ้าฝ้ายลายช้างการ์ตูน ขนาดใหญ่"
        }
      },
      {
        "src": "products/lzd-16157121705-05.webp",
        "alt": {
          "en": "Additional view 5 of Large Shopping Bag, Cotton Fabric With Cartoon Elephant Pattern",
          "th": "ภาพเพิ่มเติม 5 ของ กระเป๋าสะพาย ทรงช๊อปปิ้ง ผ้าฝ้ายลายช้างการ์ตูน ขนาดใหญ่"
        }
      },
      {
        "src": "products/lzd-16157121705-06.webp",
        "alt": {
          "en": "Additional view 6 of Large Shopping Bag, Cotton Fabric With Cartoon Elephant Pattern",
          "th": "ภาพเพิ่มเติม 6 ของ กระเป๋าสะพาย ทรงช๊อปปิ้ง ผ้าฝ้ายลายช้างการ์ตูน ขนาดใหญ่"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "✨ Cotton bag with colorful elephant pattern - outstanding design, convenient to use ✨ Brighten up every day with this eye-catching cotton bag! With cartoon elephant pattern printed on both sides. With a colorful background that helps make the colors of the elephants stand out even more. 👜 Quality material: Made from good quality cotton. Soft to the touch but strong and durable. 📏 Spacious size: 16 x 18 x 5 inches, can fit your stuff. 🛡 Good lining: increases strength. and helps protect the items inside 🔐 Bag closing system: Comes with a zipper for opening and closing the bag confidently. 📂 Special storage compartment: Inside there is another zipper compartment for separating small items. Perfect for any occasion—use it as a storage bag. Or a shopping bag is perfect! 🌟",
      "th": "✨ กระเป๋าผ้าฝ้ายลายช้างหลากสี – ดีไซน์โดดเด่น ใช้งานสะดวก ✨ เพิ่มสีสันให้ทุกวันด้วยกระเป๋าผ้าฝ้ายที่สะดุดตาใบนี้! ด้วยลวดลายช้างการ์ตูนที่พิมพ์ทั้งสองด้าน พร้อมพื้นหลังหลากสีที่ช่วยขับให้สีสันของช้างโดดเด่นยิ่งขึ้น 👜 วัสดุคุณภาพ: ผลิตจากผ้าฝ้ายเนื้อดี สัมผัสนุ่มแต่แข็งแรงทนทาน 📏 ขนาดกว้างขวาง: 16 x 18 x 5 นิ้ว ใส่ของได้จุใจ 🛡 ซับในอย่างดี: เพิ่มความแข็งแรง และช่วยปกป้องสิ่งของด้านใน 🔐 ระบบปิดกระเป๋า: มาพร้อมซิปสำหรับเปิด-ปิดปากกระเป๋าอย่างมั่นใจ 📂 ช่องจัดเก็บพิเศษ: ด้านในมีช่องซิปอีก 1 ช่อง สำหรับแยกเก็บของชิ้นเล็ก เหมาะสำหรับทุกโอกาส—จะใช้เป็นกระเป๋าใส่ของ หรือกระเป๋าช้อปปิ้งก็ลงตัว! 🌟"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16157121705-s127166421000.html"
    }
  },
  {
    "code": "LZD-4393862481",
    "name": {
      "en": "Pants From Fabric, Cotton Pants With Jean Legs",
      "th": "กางเกงผ้าต่อ กางเกงค๊อตต๊อนผ้าต่อขาจั้ม"
    },
    "category": "pants",
    "home_showcase": {
      "image_index": 1,
      "name": {
        "en": "Patchwork Cotton Pants",
        "th": "กางเกงผ้าคอตตอนตัดต่อ"
      }
    },
    "is_new": false,
    "price": 259,
    "fabric": {
      "en": "Cotton-rayon blend",
      "th": "ผ้าคอตตอนผสมเรยอน"
    },
    "colours": [
      {
        "en": "ขาจัมพ์",
        "th": "ขาจัมพ์"
      },
      {
        "en": "ขาปล่อย",
        "th": "ขาปล่อย"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "26–46 / 50 / 37",
          "th": "ฟรีไซส์ ขนาด เอว 26-46\" สะโพก 50\" ความยาว 37\""
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-4393862481-01.webp",
        "alt": {
          "en": "Main view of Pants From Fabric, Cotton Pants With Jean Legs",
          "th": "ภาพหลักของ กางเกงผ้าต่อ กางเกงค๊อตต๊อนผ้าต่อขาจั้ม"
        }
      },
      {
        "src": "products/lzd-4393862481-02.webp",
        "alt": {
          "en": "Additional view 2 of Pants From Fabric, Cotton Pants With Jean Legs",
          "th": "ภาพเพิ่มเติม 2 ของ กางเกงผ้าต่อ กางเกงค๊อตต๊อนผ้าต่อขาจั้ม"
        }
      },
      {
        "src": "products/lzd-4393862481-03.webp",
        "alt": {
          "en": "Additional view 3 of Pants From Fabric, Cotton Pants With Jean Legs",
          "th": "ภาพเพิ่มเติม 3 ของ กางเกงผ้าต่อ กางเกงค๊อตต๊อนผ้าต่อขาจั้ม"
        }
      },
      {
        "src": "products/lzd-4393862481-04.webp",
        "alt": {
          "en": "Additional view 4 of Pants From Fabric, Cotton Pants With Jean Legs",
          "th": "ภาพเพิ่มเติม 4 ของ กางเกงผ้าต่อ กางเกงค๊อตต๊อนผ้าต่อขาจั้ม"
        }
      },
      {
        "src": "products/lzd-4393862481-05.webp",
        "alt": {
          "en": "Additional view 5 of Pants From Fabric, Cotton Pants With Jean Legs",
          "th": "ภาพเพิ่มเติม 5 ของ กางเกงผ้าต่อ กางเกงค๊อตต๊อนผ้าต่อขาจั้ม"
        }
      },
      {
        "src": "products/lzd-4393862481-06.webp",
        "alt": {
          "en": "Additional view 6 of Pants From Fabric, Cotton Pants With Jean Legs",
          "th": "ภาพเพิ่มเติม 6 ของ กางเกงผ้าต่อ กางเกงค๊อตต๊อนผ้าต่อขาจั้ม"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "The pants are a patterned cotton fabric. and the floor are cut together. The bottom of the leg is an ankle cuff. Vintage style, chic, modern. Wear it to travel, go for a walk, wear it around the house, wear it to sleep. It's a comfortable fabric that's not hot. Free size, size waist 26-46\", hip 50\", length 37\" ***Precautions*** After receiving the product, you should soak it in salt water for 1 night and then wash it separately 1-2 times first. *****Please read and understand before ordering**** Every cut fabric product is different. Because cut cloth is a cloth that takes scraps of cloth and cuts them together to become a large roll of cloth. Then they are cut into different sets. Therefore, the pattern of each shirt is different. It will not be the same as the sample set according to the illustration shown on the page. Every product is inspected before sending. ***If there is a problem with the product Don't just press deduct points. Please notify the shop first***",
      "th": "กางเกงผ้า เป็นผ้าค๊อตต๊อนลาย และพื้นนำมาตัดต่อกัน ปลายขาเป็นขาจั้มรัดข้อเท้า แนววินเทจ เก๋ ทันสมัย ใส่ไปเที่ยว ไปเดินเล่น ใส่อยู่กับบ้าน ใส่นอน เป็นผ้าที่ใส่สบายไม่ร้อน ฟรีไซส์ ขนาด เอว 26-46\" สะโพก 50\" ความยาว 37\" ***ข้อควรปฏิบัติ*** หลังจะได้รับสินค้าแล้วควรนำไปแช่น้ำเกลือทิ้งไว้ 1 คืน แล้วซักแยกก่อน 1-2 ครั้ง *****กรุณาอ่านและทำความเข้าใจก่อนกดสั่งซื้อ**** สินค้าผ้าตัดต่อทุกชิ้นจะไม่เหมือนกัน เพราะผ้าตัดต่อเป็นผ้าที่นำเศษผ้ามาตัดต่อกันจนเป็นผ้าม้วนผืนใหญ่ แล้วจึงนำมาตัดเป็นชุดต่างๆ ดังนั้นลายแต่ละลายของเสื้อแต่ละตัวจึงแตกต่างกันออกไป จะไม่เหมือนกันกับชุดตัวอย่างตามภาพประกอบที่โชว์ในเพจ มีการตรวจสินค้าก่อนส่งทุกชิ้น ***หากมีปัญหากับสินค้า อย่างเพิ่งกดหักคะแนน ให้แจ้งมาทางร้านก่อนนะคะ***"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i4393862481-s26023252385.html"
    }
  },
  {
    "code": "LZD-4546253956",
    "name": {
      "en": "Chiffon Shirts, Bat Shirts, Blazers, Travel Shirts, Bohemian Shirts, Kiminos",
      "th": "เสื้อชีฟอง เสื้อค้างคาว เสื้อคลุม เสื้อเที่ยว เสื้อโบฮีเมียน คิมิโนะ"
    },
    "category": "kaftans",
    "is_new": false,
    "price": 259,
    "fabric": {
      "en": "Chiffon",
      "th": "ผ้าชีฟอง"
    },
    "colours": [
      {
        "en": "C2 Black",
        "th": "C2 Black"
      },
      {
        "en": "C2 DB",
        "th": "C2 DB"
      },
      {
        "en": "C2 Blue",
        "th": "C2 Blue"
      },
      {
        "en": "C2 LB",
        "th": "C2 LB"
      },
      {
        "en": "C2 Orange",
        "th": "C2 Orange"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "ฟรีไซส์"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-4546253956-01.webp",
        "alt": {
          "en": "Main view of Chiffon Shirts, Bat Shirts, Blazers, Travel Shirts, Bohemian Shirts, Kiminos",
          "th": "ภาพหลักของ เสื้อชีฟอง เสื้อค้างคาว เสื้อคลุม เสื้อเที่ยว เสื้อโบฮีเมียน คิมิโนะ"
        }
      },
      {
        "src": "products/lzd-4546253956-02.webp",
        "alt": {
          "en": "Additional view 2 of Chiffon Shirts, Bat Shirts, Blazers, Travel Shirts, Bohemian Shirts, Kiminos",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อชีฟอง เสื้อค้างคาว เสื้อคลุม เสื้อเที่ยว เสื้อโบฮีเมียน คิมิโนะ"
        }
      },
      {
        "src": "products/lzd-4546253956-03.webp",
        "alt": {
          "en": "Additional view 3 of Chiffon Shirts, Bat Shirts, Blazers, Travel Shirts, Bohemian Shirts, Kiminos",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อชีฟอง เสื้อค้างคาว เสื้อคลุม เสื้อเที่ยว เสื้อโบฮีเมียน คิมิโนะ"
        }
      },
      {
        "src": "products/lzd-4546253956-04.webp",
        "alt": {
          "en": "Additional view 4 of Chiffon Shirts, Bat Shirts, Blazers, Travel Shirts, Bohemian Shirts, Kiminos",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อชีฟอง เสื้อค้างคาว เสื้อคลุม เสื้อเที่ยว เสื้อโบฮีเมียน คิมิโนะ"
        }
      },
      {
        "src": "products/lzd-4546253956-05.webp",
        "alt": {
          "en": "Additional view 5 of Chiffon Shirts, Bat Shirts, Blazers, Travel Shirts, Bohemian Shirts, Kiminos",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อชีฟอง เสื้อค้างคาว เสื้อคลุม เสื้อเที่ยว เสื้อโบฮีเมียน คิมิโนะ"
        }
      },
      {
        "src": "products/lzd-4546253956-06.webp",
        "alt": {
          "en": "Additional view 6 of Chiffon Shirts, Bat Shirts, Blazers, Travel Shirts, Bohemian Shirts, Kiminos",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อชีฟอง เสื้อค้างคาว เสื้อคลุม เสื้อเที่ยว เสื้อโบฮีเมียน คิมิโนะ"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "chiffon shirt, bat shirt Chiffon bat shirt, beautiful and luxurious, can be worn on any occasion. It's a coat. Wear it to go for a walk. Wear it to travel. Can be worn by both plump people. and a person with a flowing figure free size Every product is inspected before sending. ***If there is a problem with the product Don't just press deduct points. Please notify the shop first*** Thank you to everyone who has come to place an order with products from our store.",
      "th": "เสื้อชีฟอง เสื้อค้างคาว เสื้อค้างคาวผ้าชีฟอง สวย ดูหรู ใส่ได้ทุกโอกาส เป็นเสื้อคลุม ใส่ไปเดินเล่น ใส่เที่ยว ใส่ได้ทั้งคนรูปร่างอวบ และคนรูปร่างพริ้ว ฟรีไซส์ มีการตรวจสินค้าก่อนส่งทุกชิ้น ***หากมีปัญหากับสินค้า อย่างเพิ่งกดหักคะแนน ให้แจ้งมาทางร้านก่อนนะคะ*** ขอบคุณทุกๆท่านที่ได้เข้ามาทำการกดสั่งซื้อกับสินค้าทางร้านของเราค่ะ"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i4546253956-s18497912107.html"
    }
  },
  {
    "code": "LZD-16183482255",
    "name": {
      "en": "Woven Bag Popular Vintage Style, Available In 3 Colors, Size 10 Inches",
      "th": "กระเป๋าย่ามผ้าทอ สไตล์วินเทจสุดฮิต มีให้เลือก 3 สี ขนาด 10 นิ้ว"
    },
    "category": "bags",
    "is_new": false,
    "price": 129,
    "fabric": {
      "en": "Woven fabric",
      "th": "ผ้าทอ"
    },
    "colours": [
      {
        "en": "Blue",
        "th": "NM001 น้ำเงิน 10นิ้ว"
      },
      {
        "en": "Red",
        "th": "NM002 แดง 10นิ้ว"
      },
      {
        "en": "Green",
        "th": "NM003 เขียว 10นิ้ว"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Dimensions",
          "th": "ขนาด"
        },
        "value": {
          "en": "10 in",
          "th": "ขนาด 10 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16183482255-01.webp",
        "alt": {
          "en": "Main view of Woven Bag Popular Vintage Style, Available In 3 Colors, Size 10 Inches",
          "th": "ภาพหลักของ กระเป๋าย่ามผ้าทอ สไตล์วินเทจสุดฮิต มีให้เลือก 3 สี ขนาด 10 นิ้ว"
        }
      },
      {
        "src": "products/lzd-16183482255-02.webp",
        "alt": {
          "en": "Additional view 2 of Woven Bag Popular Vintage Style, Available In 3 Colors, Size 10 Inches",
          "th": "ภาพเพิ่มเติม 2 ของ กระเป๋าย่ามผ้าทอ สไตล์วินเทจสุดฮิต มีให้เลือก 3 สี ขนาด 10 นิ้ว"
        }
      },
      {
        "src": "products/lzd-16183482255-03.webp",
        "alt": {
          "en": "Additional view 3 of Woven Bag Popular Vintage Style, Available In 3 Colors, Size 10 Inches",
          "th": "ภาพเพิ่มเติม 3 ของ กระเป๋าย่ามผ้าทอ สไตล์วินเทจสุดฮิต มีให้เลือก 3 สี ขนาด 10 นิ้ว"
        }
      },
      {
        "src": "products/lzd-16183482255-04.webp",
        "alt": {
          "en": "Additional view 4 of Woven Bag Popular Vintage Style, Available In 3 Colors, Size 10 Inches",
          "th": "ภาพเพิ่มเติม 4 ของ กระเป๋าย่ามผ้าทอ สไตล์วินเทจสุดฮิต มีให้เลือก 3 สี ขนาด 10 นิ้ว"
        }
      },
      {
        "src": "products/lzd-16183482255-05.webp",
        "alt": {
          "en": "Additional view 5 of Woven Bag Popular Vintage Style, Available In 3 Colors, Size 10 Inches",
          "th": "ภาพเพิ่มเติม 5 ของ กระเป๋าย่ามผ้าทอ สไตล์วินเทจสุดฮิต มีให้เลือก 3 สี ขนาด 10 นิ้ว"
        }
      },
      {
        "src": "products/lzd-16183482255-06.webp",
        "alt": {
          "en": "Additional view 6 of Woven Bag Popular Vintage Style, Available In 3 Colors, Size 10 Inches",
          "th": "ภาพเพิ่มเติม 6 ของ กระเป๋าย่ามผ้าทอ สไตล์วินเทจสุดฮิต มีให้เลือก 3 สี ขนาด 10 นิ้ว"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "🌿 Woven fabric satchel bag, a must-have for chill people. Carrying a trip to a cafe ☕ Carry it to university 🎓 Carry it to work 💼 There are 3 patterns to choose from. ✔ Size 10 inches Beautiful, cool, and really usable. Wear it to your heart's content and carry it comfortably all day.",
      "th": "🌿 กระเป๋าย่ามผ้าทอ สายชิลต้องมี สะพายเที่ยวคาเฟ่ ☕ สะพายไปมหาวิทยาลัย 🎓 สะพายไปทำงาน 💼 มี 3 ลายให้เลือก ✔ ขนาด 10 นิ้ว สวย เท่ ใช้งานได้จริง ใส่ของจุใจ สะพายสบายทั้งวัน 🤎"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/3-10-i16183482255-s127277002203.html"
    }
  },
  {
    "code": "LZD-16167562980",
    "name": {
      "en": "Single Strap, Very Cute Fabric Work. Soft Fabric, Comfortable To Wear, Great Price",
      "th": "สายเดี่ยวงานผ้าสุดน่ารัก ผ้านุ่มใส่สบาย ราคาคุ้มๆ"
    },
    "category": "tops",
    "is_new": true,
    "price": 129,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "SDS001",
        "th": "SDS001"
      },
      {
        "en": "SDS002",
        "th": "SDS002"
      },
      {
        "en": "SDS003",
        "th": "SDS003"
      },
      {
        "en": "SDS004",
        "th": "SDS004"
      },
      {
        "en": "SDS005",
        "th": "SDS005"
      },
      {
        "en": "SDS006",
        "th": "SDS006"
      },
      {
        "en": "SDS007",
        "th": "SDS007"
      },
      {
        "en": "SDS008",
        "th": "SDS008"
      },
      {
        "en": "SDS009",
        "th": "SDS009"
      },
      {
        "en": "SDS011",
        "th": "SDS011"
      },
      {
        "en": "SDS012",
        "th": "SDS012"
      },
      {
        "en": "SDS013",
        "th": "SDS013"
      },
      {
        "en": "SDS014",
        "th": "SDS014"
      },
      {
        "en": "SDS015",
        "th": "SDS015"
      },
      {
        "en": "SDS016",
        "th": "SDS016"
      },
      {
        "en": "SDS017",
        "th": "SDS017"
      },
      {
        "en": "SDS018",
        "th": "SDS018"
      },
      {
        "en": "SDS019",
        "th": "SDS019"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "36 in / 91 cm",
          "th": "อกได้ถึง 36 นิ้ว (91 ซม.)"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16167562980-01.webp",
        "alt": {
          "en": "Main view of Single Strap, Very Cute Fabric Work. Soft Fabric, Comfortable To Wear, Great Price",
          "th": "ภาพหลักของ สายเดี่ยวงานผ้าสุดน่ารัก ผ้านุ่มใส่สบาย ราคาคุ้มๆ"
        }
      },
      {
        "src": "products/lzd-16167562980-02.webp",
        "alt": {
          "en": "Additional view 2 of Single Strap, Very Cute Fabric Work. Soft Fabric, Comfortable To Wear, Great Price",
          "th": "ภาพเพิ่มเติม 2 ของ สายเดี่ยวงานผ้าสุดน่ารัก ผ้านุ่มใส่สบาย ราคาคุ้มๆ"
        }
      },
      {
        "src": "products/lzd-16167562980-03.webp",
        "alt": {
          "en": "Additional view 3 of Single Strap, Very Cute Fabric Work. Soft Fabric, Comfortable To Wear, Great Price",
          "th": "ภาพเพิ่มเติม 3 ของ สายเดี่ยวงานผ้าสุดน่ารัก ผ้านุ่มใส่สบาย ราคาคุ้มๆ"
        }
      },
      {
        "src": "products/lzd-16167562980-04.webp",
        "alt": {
          "en": "Additional view 4 of Single Strap, Very Cute Fabric Work. Soft Fabric, Comfortable To Wear, Great Price",
          "th": "ภาพเพิ่มเติม 4 ของ สายเดี่ยวงานผ้าสุดน่ารัก ผ้านุ่มใส่สบาย ราคาคุ้มๆ"
        }
      },
      {
        "src": "products/lzd-16167562980-05.webp",
        "alt": {
          "en": "Additional view 5 of Single Strap, Very Cute Fabric Work. Soft Fabric, Comfortable To Wear, Great Price",
          "th": "ภาพเพิ่มเติม 5 ของ สายเดี่ยวงานผ้าสุดน่ารัก ผ้านุ่มใส่สบาย ราคาคุ้มๆ"
        }
      },
      {
        "src": "products/lzd-16167562980-06.webp",
        "alt": {
          "en": "Additional view 6 of Single Strap, Very Cute Fabric Work. Soft Fabric, Comfortable To Wear, Great Price",
          "th": "ภาพเพิ่มเติม 6 ของ สายเดี่ยวงานผ้าสุดน่ารัก ผ้านุ่มใส่สบาย ราคาคุ้มๆ"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Single strap, cute pattern, new arrivals 🌼🤍 Real work, very beautiful colors Wear it and you will look very bright. The fit is good, not tight, not uncomfortable, and it's effortless and cute ✨ 💫 There are many patterns and tones. 💫 Easy to match, wear every day. 💫 Light and comfortable fabric. 📏 Chest up to 36 inches (91 cm.) 📏 Shirt length 24 inches (61 cm.) Such a cute job. Hurry and message me to choose a color 🌸",
      "th": "สายเดี่ยวลายน่ารักเข้าใหม่ 🌼🤍 งานจริงสีสวยมาก ใส่แล้วดูสดใสสุดๆ ทรงใส่กำลังดี ไม่รัด ไม่อึดอัด ใส่แล้วน่ารักแบบ effortless ✨ 💫 มีหลายลาย หลายโทนสี 💫 แมตช์ง่าย ใส่ได้ทุกวัน 💫 ผ้าเบา ใส่สบาย 📏 อกได้ถึง 36 นิ้ว (91 ซม.) 📏 เสื้อยาว 24 นิ้ว (61 ซม.) งานน่ารักแบบนี้ รีบทักมาเลือกสีเลยค่า 🌸"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16167562980-s127209496763.html"
    }
  },
  {
    "code": "LZD-4393447229",
    "name": {
      "en": "5-Pocket Pants, Patchwork Pants, Cotton Pants With Jumpsuit Legs",
      "th": "กางเกงต่อ 5 ส่วน กางเกงผ้าต่อ กางเกงค๊อตต๊อนผ้าต่อขาจั้ม"
    },
    "category": "pants",
    "is_new": false,
    "price": 229,
    "fabric": {
      "en": "Cotton-rayon blend",
      "th": "ผ้าคอตตอนผสมเรยอน"
    },
    "colours": [
      {
        "en": "ขาจั้มพ์",
        "th": "ขาจั้มพ์"
      },
      {
        "en": "ขาปล่อย",
        "th": "ขาปล่อย"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "30–50 / 50 / 30",
          "th": "ฟรีไซส์ ขนาด เอว 30-50\" สะโพก 50\" ความยาว 30\""
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-4393447229-01.webp",
        "alt": {
          "en": "Main view of 5-Pocket Pants, Patchwork Pants, Cotton Pants With Jumpsuit Legs",
          "th": "ภาพหลักของ กางเกงต่อ 5 ส่วน กางเกงผ้าต่อ กางเกงค๊อตต๊อนผ้าต่อขาจั้ม"
        }
      },
      {
        "src": "products/lzd-4393447229-02.webp",
        "alt": {
          "en": "Additional view 2 of 5-Pocket Pants, Patchwork Pants, Cotton Pants With Jumpsuit Legs",
          "th": "ภาพเพิ่มเติม 2 ของ กางเกงต่อ 5 ส่วน กางเกงผ้าต่อ กางเกงค๊อตต๊อนผ้าต่อขาจั้ม"
        }
      },
      {
        "src": "products/lzd-4393447229-03.webp",
        "alt": {
          "en": "Additional view 3 of 5-Pocket Pants, Patchwork Pants, Cotton Pants With Jumpsuit Legs",
          "th": "ภาพเพิ่มเติม 3 ของ กางเกงต่อ 5 ส่วน กางเกงผ้าต่อ กางเกงค๊อตต๊อนผ้าต่อขาจั้ม"
        }
      },
      {
        "src": "products/lzd-4393447229-04.webp",
        "alt": {
          "en": "Additional view 4 of 5-Pocket Pants, Patchwork Pants, Cotton Pants With Jumpsuit Legs",
          "th": "ภาพเพิ่มเติม 4 ของ กางเกงต่อ 5 ส่วน กางเกงผ้าต่อ กางเกงค๊อตต๊อนผ้าต่อขาจั้ม"
        }
      },
      {
        "src": "products/lzd-4393447229-05.webp",
        "alt": {
          "en": "Additional view 5 of 5-Pocket Pants, Patchwork Pants, Cotton Pants With Jumpsuit Legs",
          "th": "ภาพเพิ่มเติม 5 ของ กางเกงต่อ 5 ส่วน กางเกงผ้าต่อ กางเกงค๊อตต๊อนผ้าต่อขาจั้ม"
        }
      },
      {
        "src": "products/lzd-4393447229-06.webp",
        "alt": {
          "en": "Additional view 6 of 5-Pocket Pants, Patchwork Pants, Cotton Pants With Jumpsuit Legs",
          "th": "ภาพเพิ่มเติม 6 ของ กางเกงต่อ 5 ส่วน กางเกงผ้าต่อ กางเกงค๊อตต๊อนผ้าต่อขาจั้ม"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Patterned cotton pants and the floor are cut together. The legs have both jumpers and loose legs. Vintage style, chic, modern. Wear them to travel, go for a walk, wear them around the house, wear them to bed. The fabric is comfortable and not hot. Free size, size waist 30-50\", hip 50\", length 30\" ***Precautions*** After receiving the product, you should soak it in salt water for 1 night and then wash it separately 1-2 times first. *****Please read and understand before ordering**** Every cut fabric product is different. Because cut cloth is a cloth that takes scraps of cloth and cuts them together to become a large roll of cloth. Then they are cut into different sets. Therefore, the pattern of each shirt is different. It will not be the same as the sample set according to the illustration shown on the page. Every product is inspected before sending. ***If there is a problem with the product Don't just press deduct points. Please notify the shop first***",
      "th": "กางเกงผ้าค๊อตต๊อนลาย และพื้นนำมาตัดต่อกัน ปลายขามีทั้งขาจั้ม และขาปล่อย แนววินเทจ เก๋ ทันสมัย ใส่ไปเที่ยว ไปเดินเล่น ใส่อยู่กับบ้าน ใส่นอน เป็นผ้าที่ใส่สบายไม่ร้อน ฟรีไซส์ ขนาด เอว 30-50\" สะโพก 50\" ความยาว 30\" ***ข้อควรปฏิบัติ*** หลังจะได้รับสินค้าแล้วควรนำไปแช่น้ำเกลือทิ้งไว้ 1 คืน แล้วซักแยกก่อน 1-2 ครั้ง *****กรุณาอ่านและทำความเข้าใจก่อนกดสั่งซื้อ**** สินค้าผ้าตัดต่อทุกชิ้นจะไม่เหมือนกัน เพราะผ้าตัดต่อเป็นผ้าที่นำเศษผ้ามาตัดต่อกันจนเป็นผ้าม้วนผืนใหญ่ แล้วจึงนำมาตัดเป็นชุดต่างๆ ดังนั้นลายแต่ละลายของเสื้อแต่ละตัวจึงแตกต่างกันออกไป จะไม่เหมือนกันกับชุดตัวอย่างตามภาพประกอบที่โชว์ในเพจ มีการตรวจสินค้าก่อนส่งทุกชิ้น ***หากมีปัญหากับสินค้า อย่างเพิ่งกดหักคะแนน ให้แจ้งมาทางร้านก่อนนะคะ***"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/5-i4393447229-s127390369877.html"
    }
  },
  {
    "code": "LZD-16164407055",
    "name": {
      "en": "Lightweight Woven Top With Embroidery, Front Buttons, Round Neck, Size S-M",
      "th": "เสื้อผ้าป่านงานปัก กระดุมหน้า คอกลม ไซส์ S-M"
    },
    "category": "tops",
    "is_new": false,
    "price": 259,
    "fabric": {
      "en": "Lightweight woven fabric",
      "th": "ผ้าป่าน"
    },
    "colours": [
      {
        "en": "TBM001",
        "th": "TBM001"
      },
      {
        "en": "TBM002",
        "th": "TBM002"
      },
      {
        "en": "TBM003",
        "th": "TBM003"
      },
      {
        "en": "TBM004",
        "th": "TBM004"
      },
      {
        "en": "TBM005",
        "th": "TBM005"
      },
      {
        "en": "TBM006",
        "th": "TBM006"
      },
      {
        "en": "TBM007",
        "th": "TBM007"
      },
      {
        "en": "TBM008",
        "th": "TBM008"
      },
      {
        "en": "TBM009",
        "th": "TBM009"
      },
      {
        "en": "TBM010",
        "th": "TBM010"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "36 in",
          "th": "อก 36 นิ้ว"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "24 in",
          "th": "ยาว 24 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16164407055-01.webp",
        "alt": {
          "en": "Main view of Lightweight Woven Top With Embroidery, Front Buttons, Round Neck, Size S-M",
          "th": "ภาพหลักของ เสื้อผ้าป่านงานปัก กระดุมหน้า คอกลม ไซส์ S-M"
        }
      },
      {
        "src": "products/lzd-16164407055-02.webp",
        "alt": {
          "en": "Additional view 2 of Lightweight Woven Top With Embroidery, Front Buttons, Round Neck, Size S-M",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อผ้าป่านงานปัก กระดุมหน้า คอกลม ไซส์ S-M"
        }
      },
      {
        "src": "products/lzd-16164407055-03.webp",
        "alt": {
          "en": "Additional view 3 of Lightweight Woven Top With Embroidery, Front Buttons, Round Neck, Size S-M",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อผ้าป่านงานปัก กระดุมหน้า คอกลม ไซส์ S-M"
        }
      },
      {
        "src": "products/lzd-16164407055-04.webp",
        "alt": {
          "en": "Additional view 4 of Lightweight Woven Top With Embroidery, Front Buttons, Round Neck, Size S-M",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อผ้าป่านงานปัก กระดุมหน้า คอกลม ไซส์ S-M"
        }
      },
      {
        "src": "products/lzd-16164407055-05.webp",
        "alt": {
          "en": "Additional view 5 of Lightweight Woven Top With Embroidery, Front Buttons, Round Neck, Size S-M",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อผ้าป่านงานปัก กระดุมหน้า คอกลม ไซส์ S-M"
        }
      },
      {
        "src": "products/lzd-16164407055-06.webp",
        "alt": {
          "en": "Additional view 6 of Lightweight Woven Top With Embroidery, Front Buttons, Round Neck, Size S-M",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อผ้าป่านงานปัก กระดุมหน้า คอกลม ไซส์ S-M"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "💖 This linen embroidery shirt is so soft when worn~ Light fabric, comfortable to wear, not hot, very suitable for the weather in our country 🌤️ Cute, detailed embroidery pattern all over. The arms also have embroidery. Looks much more expensive than the price ✨ Easy to match with jeans, skirts or shorts, it's beautiful. 🌈 There are many colors to choose from. 📏 Size S-M Chest 36 inches Length 24 inches Wear it to go to a cafe, walk in the mall, or just have a chill day. Every look will survive. 🤍 There are not many jobs. If you like any color, hurry up and talk to us~",
      "th": "💖 เสื้องานปักผ้าป่านตัวนี้คือใส่แล้วดูละมุนมากกก~ เนื้อผ้าเบา ใส่สบาย ไม่ร้อน เหมาะกับอากาศบ้านเราสุดๆ 🌤️ ลายปักน่ารักละเอียดทั้งตัว แขนก็มีลายปักด้วยนะ ดูแพงเกินราคาไปมาก ✨ แมทช์ง่ายกับกางเกงยีนส์ กระโปรง หรือขาสั้นก็สวย 🌈 มีหลายสีให้เลือก 📏 ไซส์ S-M อก 36 นิ้ว ยาว 24 นิ้ว ใส่เที่ยว คาเฟ่ เดินห้าง หรือวันชิลล์ๆ คือรอดทุกลุค 🤍 งานมีจำนวนไม่เยอะน้า ชอบสีไหนรีบทักเลยค่า~"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/s-m-i16164407055-s127184497300.html"
    }
  },
  {
    "code": "LZD-16158800325",
    "name": {
      "en": "Short Batwing Dress Bohemian Style There Is A Drawstring To Adjust The Waist Size",
      "th": "เดรสสั้นทรงค้างคาว สไตล์โบฮีเมียน มีเชือกรูดปรับขนาดเอว"
    },
    "category": "dresses",
    "is_new": false,
    "price": 199,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "Green",
        "th": "KTS1001 เขียว"
      },
      {
        "en": "เลือดหมู",
        "th": "KTS1002 เลือดหมู"
      },
      {
        "en": "Red",
        "th": "KTS1003 แดง"
      },
      {
        "en": "Navy",
        "th": "KTS1004 กรมท่า"
      },
      {
        "en": "Pink",
        "th": "KTS1006 ชมพู"
      },
      {
        "en": "Black and White",
        "th": "KTS1007 ดำขาว1"
      },
      {
        "en": "Black and White",
        "th": "KTS1008 ดำขาว2"
      },
      {
        "en": "Black",
        "th": "KTS1009 ดำครีม"
      },
      {
        "en": "Blue",
        "th": "KTS1010 น้ำเงิน"
      },
      {
        "en": "Brown",
        "th": "KTS1011 น้ำตาลเข้ม"
      },
      {
        "en": "Sky Blue",
        "th": "KTS1012 ฟ้า"
      },
      {
        "en": "Purple",
        "th": "KTS1013 ม่วง"
      },
      {
        "en": "Orange",
        "th": "KTS1014 ส้ม"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "One Size"
        }
      },
      {
        "label": {
          "en": "Bust",
          "th": "รอบอก"
        },
        "value": {
          "en": "Fits 34–54 in",
          "th": "อกใส่ได้ตั้งแต่ขนาด 34 - 54 นิ้ว มีสายรูดปรับขนาดอยู่บริเวณช่วงเอว สามารถใส่ได้ทั้งสาวร้างเพรียวบาง ไปจนถึงสาวอวบร่างใหญ่"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16158800325-01.webp",
        "alt": {
          "en": "Main view of Short Batwing Dress Bohemian Style There Is A Drawstring To Adjust The Waist Size",
          "th": "ภาพหลักของ เดรสสั้นทรงค้างคาว สไตล์โบฮีเมียน มีเชือกรูดปรับขนาดเอว"
        }
      },
      {
        "src": "products/lzd-16158800325-02.webp",
        "alt": {
          "en": "Additional view 2 of Short Batwing Dress Bohemian Style There Is A Drawstring To Adjust The Waist Size",
          "th": "ภาพเพิ่มเติม 2 ของ เดรสสั้นทรงค้างคาว สไตล์โบฮีเมียน มีเชือกรูดปรับขนาดเอว"
        }
      },
      {
        "src": "products/lzd-16158800325-03.webp",
        "alt": {
          "en": "Additional view 3 of Short Batwing Dress Bohemian Style There Is A Drawstring To Adjust The Waist Size",
          "th": "ภาพเพิ่มเติม 3 ของ เดรสสั้นทรงค้างคาว สไตล์โบฮีเมียน มีเชือกรูดปรับขนาดเอว"
        }
      },
      {
        "src": "products/lzd-16158800325-04.webp",
        "alt": {
          "en": "Additional view 4 of Short Batwing Dress Bohemian Style There Is A Drawstring To Adjust The Waist Size",
          "th": "ภาพเพิ่มเติม 4 ของ เดรสสั้นทรงค้างคาว สไตล์โบฮีเมียน มีเชือกรูดปรับขนาดเอว"
        }
      },
      {
        "src": "products/lzd-16158800325-05.webp",
        "alt": {
          "en": "Additional view 5 of Short Batwing Dress Bohemian Style There Is A Drawstring To Adjust The Waist Size",
          "th": "ภาพเพิ่มเติม 5 ของ เดรสสั้นทรงค้างคาว สไตล์โบฮีเมียน มีเชือกรูดปรับขนาดเอว"
        }
      },
      {
        "src": "products/lzd-16158800325-06.webp",
        "alt": {
          "en": "Additional view 6 of Short Batwing Dress Bohemian Style There Is A Drawstring To Adjust The Waist Size",
          "th": "ภาพเพิ่มเติม 6 ของ เดรสสั้นทรงค้างคาว สไตล์โบฮีเมียน มีเชือกรูดปรับขนาดเอว"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "Short batwing style dress with drawstring to tighten the waist, batik elephant pattern, Bohemian style. Dresses that can be worn while traveling go to a party or wear it at home Wear it anywhere and it will stand out and be eye-catching. Dress size Chest size can be worn from 34 - 54 inches. There is a drawstring to adjust the size around the waist. Can be worn by both slim and young women. to a plump girl with a big figure",
      "th": "เดรสทรงปีกค้างคาวตัวสั้นมีเชือกรูดปรัดขนาดเอว ลายช้างบาติก สไตล์โบฮีเมียน เดรสที่สามารถใส่ไปเที่ยว ไปงานสังสรรค์ หรือใส่อยู่บ้าน ใส่ไปที่ไหนก็ดูเด่นสะดุดตา ขนาดของเดรส อกใส่ได้ตั้งแต่ขนาด 34 - 54 นิ้ว มีสายรูดปรับขนาดอยู่บริเวณช่วงเอว สามารถใส่ได้ทั้งสาวร้างเพรียวบาง ไปจนถึงสาวอวบร่างใหญ่"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16158800325-s127155873513.html"
    }
  },
  {
    "code": "LZD-16103283808",
    "name": {
      "en": "Songkran Shirt Men's Hawaiian Style, Floral Pattern, Short Sleeves, Peach Skin Fabric",
      "th": "เสื้อสงกรานต์ สไตล์ฮาวายผู้ชาย ลายดอก แขนสั้น ผ้าพีชสกิน"
    },
    "category": "tops",
    "is_new": false,
    "price": 299,
    "fabric": {
      "en": "Peach-skin fabric",
      "th": "ผ้าพีชสกิน"
    },
    "colours": [
      {
        "en": "GS001",
        "th": "GS001"
      },
      {
        "en": "GS002",
        "th": "GS002"
      },
      {
        "en": "GS003",
        "th": "GS003"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "M, L, XL, XXL",
          "th": "M, L, XL, XXL"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-16103283808-01.webp",
        "alt": {
          "en": "Main view of Songkran Shirt Men's Hawaiian Style, Floral Pattern, Short Sleeves, Peach Skin Fabric",
          "th": "ภาพหลักของ เสื้อสงกรานต์ สไตล์ฮาวายผู้ชาย ลายดอก แขนสั้น ผ้าพีชสกิน"
        }
      },
      {
        "src": "products/lzd-16103283808-02.webp",
        "alt": {
          "en": "Additional view 2 of Songkran Shirt Men's Hawaiian Style, Floral Pattern, Short Sleeves, Peach Skin Fabric",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อสงกรานต์ สไตล์ฮาวายผู้ชาย ลายดอก แขนสั้น ผ้าพีชสกิน"
        }
      },
      {
        "src": "products/lzd-16103283808-03.webp",
        "alt": {
          "en": "Additional view 3 of Songkran Shirt Men's Hawaiian Style, Floral Pattern, Short Sleeves, Peach Skin Fabric",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อสงกรานต์ สไตล์ฮาวายผู้ชาย ลายดอก แขนสั้น ผ้าพีชสกิน"
        }
      },
      {
        "src": "products/lzd-16103283808-04.webp",
        "alt": {
          "en": "Additional view 4 of Songkran Shirt Men's Hawaiian Style, Floral Pattern, Short Sleeves, Peach Skin Fabric",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อสงกรานต์ สไตล์ฮาวายผู้ชาย ลายดอก แขนสั้น ผ้าพีชสกิน"
        }
      },
      {
        "src": "products/lzd-16103283808-05.webp",
        "alt": {
          "en": "Additional view 5 of Songkran Shirt Men's Hawaiian Style, Floral Pattern, Short Sleeves, Peach Skin Fabric",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อสงกรานต์ สไตล์ฮาวายผู้ชาย ลายดอก แขนสั้น ผ้าพีชสกิน"
        }
      },
      {
        "src": "products/lzd-16103283808-06.webp",
        "alt": {
          "en": "Additional view 6 of Songkran Shirt Men's Hawaiian Style, Floral Pattern, Short Sleeves, Peach Skin Fabric",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อสงกรานต์ สไตล์ฮาวายผู้ชาย ลายดอก แขนสั้น ผ้าพีชสกิน"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "🌴 Aloha Summer! Hawaiian shirt with hibiscus pattern bright blue Change your look to look good, stylish, and extremely comfortable. ☀️ Must have this summer! A Hawaiian shirt with a collar and front slit, a white hibiscus flower pattern, contrasting with a dark blue background, gives a cool, resort-style look that whether you wear it to the beach, a cafe, or to the mall, it looks good and stands out. Highlights you must love: ✨ Peach Skin fabric (Peach Skin): Made from premium grade polyester fabric. Through a special process, the skin is soft and smooth, similar to Peach Skin, giving a light and comfortable feeling. Gentle on the skin 🌬️ Excellent ventilation: with the properties of peach skin fabric. Makes this shirt excellent for heat dissipation. Wear it and feel cool and comfortable all day. Suitable for the weather conditions in Thailand. ✂️ Exquisite tailoring: beautiful shape, perfect fit. Comes with a Hawaiian style collar that looks relaxed but still polite. and white front buttons that go together perfectly. 💪 Easy to wash and dry quickly: Easy to maintain. No need to iron a lot. There are 4 sizes to choose from.",
      "th": "🌴 Aloha Summer! เสื้อฮาวายลายดอกชบา สีน้ำเงินสดใส เปลี่ยนลุคให้ดูดี มีสไตล์ สบายสุดๆ ☀️ ร้อนนี้ต้องมี! เสื้อเชิ้ตฮาวายคอปกผ่าหน้า ลายดอกชบาขาว ตัดกับพื้นหลังสีน้ำเงินเข้ม มอบลุคเท่ๆ คูลๆ สไตล์รีสอร์ท ที่ไม่ว่าจะใส่ไปทะเล คาเฟ่ หรือเดินห้าง ก็ดูดีโดดเด่นสะดุดตา จุดเด่นที่คุณต้องหลงรัก: ✨ เนื้อผ้า Peach Skin (พีชสกิน): ผลิตจากผ้าโพลีเอสเตอร์เกรดพรีเมียม ผ่านกระบวนการพิเศษทำให้ผิวสัมผัสนุ่มลื่นละมุนคล้ายผิวลูกพีช (Peach Skin) ให้ความรู้สึกเบาสบาย อ่อนโยนต่อผิว 🌬️ ระบายอากาศเยี่ยม: ด้วยคุณสมบัติของผ้าพีชสกิน ทำให้เสื้อรุ่นนี้ระบายความร้อนได้ดีเยี่ยม สวมใส่แล้วรู้สึกเย็นสบายตลอดวัน เหมาะกับสภาพอากาศเมืองไทยสุดๆ ✂️ ตัดเย็บประณีต: ทรงสวย เข้ารูปพอดีตัว มาพร้อมคอปกทรงฮาวายที่ดูผ่อนคลายแต่ยังคงความสุภาพ และกระดุมหน้าสีขาวที่เข้ากันได้อย่างลงตัว 💪 ซักง่าย แห้งไว: ดูแลรักษาง่าย ไม่ต้องรีดเยอะ มี 4 ไซส์ ให้เลือก"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/i16103283808-s126880848685.html"
    }
  },
  {
    "code": "LZD-4783627905",
    "name": {
      "en": "Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects, Product Not Like The Market, Quality A+",
      "th": "เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ สินค้าไม่เหมือนตลาด คุณภาพ A+"
    },
    "category": "tops",
    "is_new": false,
    "price": 199,
    "fabric": {
      "en": "Fabric not specified",
      "th": "ไม่ได้ระบุชนิดผ้า"
    },
    "colours": [
      {
        "en": "KKE 5.1 Black",
        "th": "KKE 5.1 Black"
      },
      {
        "en": "KKE 5.2 Blue",
        "th": "KKE 5.2 Blue"
      },
      {
        "en": "KKE 5.3 LB",
        "th": "KKE 5.3 LB"
      },
      {
        "en": "KKE 5.4 Orange",
        "th": "KKE 5.4 Orange"
      },
      {
        "en": "KKE 5.5 Pink",
        "th": "KKE 5.5 Pink"
      }
    ],
    "measurements": [
      {
        "label": {
          "en": "Size",
          "th": "ขนาด"
        },
        "value": {
          "en": "One Size",
          "th": "ฟรีไซส์"
        }
      },
      {
        "label": {
          "en": "Length",
          "th": "ความยาว"
        },
        "value": {
          "en": "Fits 34 in / 54 in / 35 in",
          "th": "ฟรีไซส์ ใส่ได้ตั้งแต่อก 34 นิ้ว ถึงอก 54 นิ้ว ความยาวเสื้อ 35 นิ้ว"
        }
      }
    ],
    "care": null,
    "stock": "in_stock",
    "images": [
      {
        "src": "products/lzd-4783627905-01.webp",
        "alt": {
          "en": "Main view of Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects, Product Not Like The Market, Quality A+",
          "th": "ภาพหลักของ เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ สินค้าไม่เหมือนตลาด คุณภาพ A+"
        }
      },
      {
        "src": "products/lzd-4783627905-02.webp",
        "alt": {
          "en": "Additional view 2 of Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects, Product Not Like The Market, Quality A+",
          "th": "ภาพเพิ่มเติม 2 ของ เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ สินค้าไม่เหมือนตลาด คุณภาพ A+"
        }
      },
      {
        "src": "products/lzd-4783627905-03.webp",
        "alt": {
          "en": "Additional view 3 of Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects, Product Not Like The Market, Quality A+",
          "th": "ภาพเพิ่มเติม 3 ของ เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ สินค้าไม่เหมือนตลาด คุณภาพ A+"
        }
      },
      {
        "src": "products/lzd-4783627905-04.webp",
        "alt": {
          "en": "Additional view 4 of Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects, Product Not Like The Market, Quality A+",
          "th": "ภาพเพิ่มเติม 4 ของ เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ สินค้าไม่เหมือนตลาด คุณภาพ A+"
        }
      },
      {
        "src": "products/lzd-4783627905-05.webp",
        "alt": {
          "en": "Additional view 5 of Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects, Product Not Like The Market, Quality A+",
          "th": "ภาพเพิ่มเติม 5 ของ เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ สินค้าไม่เหมือนตลาด คุณภาพ A+"
        }
      },
      {
        "src": "products/lzd-4783627905-06.webp",
        "alt": {
          "en": "Additional view 6 of Bohemian Shirt Butterfly-Sleeve Top Batwing Shirt, Drawstring Waist Shirt, Grade A, No Defects, Product Not Like The Market, Quality A+",
          "th": "ภาพเพิ่มเติม 6 ของ เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เกรด A ไม่มีตำหนิ สินค้าไม่เหมือนตลาด คุณภาพ A+"
        }
      }
    ],
    "video": null,
    "description": {
      "en": "bohemian shirt butterfly wing shirt Bat-shaped shirts, drawstring waist shirts, floral shirts, short dresses. Comfortable bohemian shirt Beautiful and unique flower pattern Can be worn by both chubby people, fat people, or people with a slim figure. There is a drawstring under the bust to give it a form-fitting shape. It is a shirt that is currently very popular, worn when traveling, or walking on the beach. Wearing it at home is comfortable and not hot. Free size, can fit from chest 34 inches to chest 54 inches, shirt length 35 inches. Every product is inspected before sending. ***If there is a problem with the product Don't just press deduct points. Please notify the shop first***",
      "th": "เสื้อโบฮีเมียน เสื้อปีกผีเสื้อ เสื้อทรงค้างคาว เสื้อเอวรูด เสื้อลายดอก เดรสสั้น เสื้อโบฮีเมียนใส่สบาย ลายดอกสวยไม่ซ้ำใคร ใส่ได้ทั้งคนอวบ คนอ้วน หรือคนรูปร่างเพรียว มีเชือกรูดใต้อกให้เข้ารูป เข้าทรง เป็นเสื้อที่กำลังอยู่ในความนิยมสูง ใส่เที่ยว ใส่เดินเล่นชายหาด ใส่อยู่บ้านก็สบายตัว ไม่ร้อน ฟรีไซส์ ใส่ได้ตั้งแต่อก 34 นิ้ว ถึงอก 54 นิ้ว ความยาวเสื้อ 35 นิ้ว มีการตรวจสินค้าก่อนส่งทุกชิ้น ***หากมีปัญหากับสินค้า อย่างเพิ่งกดหักคะแนน ให้แจ้งมาทางร้านก่อนนะคะ***"
    },
    "marketplace_links": {
      "line": "",
      "tiktok": "",
      "shopee": "",
      "lazada": "https://www.lazada.co.th/products/a-a-i4783627905-s19754100287.html"
    }
  }
];
