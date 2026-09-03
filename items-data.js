/* ==================================================
   ITEMS DATA

   BLOGに登場していないけれど
   ITEMSには載せたい商品を
   手動で追加する場所。


   ★ BLOGの商品はここに書かなくてOK

   blog-data.js
   ↓
   products
   ↓
   ITEMSへ自動追加


   dog:

   "SUI"
   "ON"
   "BOTH"

================================================== */


const manualItems = [


  /* ==================================================
     SAMPLE 01
  ================================================== */

  {
    id:
      "deerdear-dog-gum",

    name:
      "エゾシカの角 無添加おやつ【半割Lサイズ】deerdear dog gum/鹿の角ガム 鹿の角おやつ 天然素材 鹿の角犬",

    addedDate: "2026-08-27",

    category:
      "おうち",

    categoryId:
      "home",

    dog:
      "BOTH",

    image:
      "images/items/beer.jpg",

    price:
      "¥3,080",

    shopUrl:
      "https://item.rakuten.co.jp/denis-store/717448/",

    /*
      関連BLOGがない場合は
      空欄でOK
    */

    blogUrl:
      "",

    recommendation:
      "長く楽しめるおやつとして、すいとおん。で愛用しているアイテムです。"
  },


  /* ==================================================
     SAMPLE 02
  ================================================== */

  {
    id:
      "BIOGANCE",

    name:
      "BIOGANCE エクストラ・リス タングルリムーバー 犬用 250mL",

    addedDate: "2026-08-26",

    category:
      "ケア",

    categoryId:
      "care",

    dog:
      "BOTH",

    image:
      "images/items/BIOGANCE.jpg",

    price:
      "¥2,950",

    shopUrl:
      "https://www.amazon.co.jp/dp/B07F3MC4ZG?ref=ppx_yo2ov_dt_b_fed_asin_title",

    blogUrl:
      "",

    recommendation:
      "日々のブラッシングや毛玉ケアで使っている、すいとおん。のケア用品です。"
  }


];