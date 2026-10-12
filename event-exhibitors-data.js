/* ブランド情報と開催回ごとの出展確認を分けて管理。過去回の出展を流用しない。 */
const eventExhibitorsData = {
  "brands": {
    "0": {
      "name": "Dailor",
      "category": "犬服・ドレス",
      "description": "華やかなドレスや日常のお洋服を扱う犬服ブランド。記念日のおめかしを探したい方にも。",
      "tags": [
        "小型犬向け商品あり",
        "一部サイズオーダー可"
      ],
      "sizeNote": "公式ショップに小型犬向けタキシードの案内あり。一部ドレスはサイズオーダー可能。大型犬への対応は未確認です。",
      "url": "https://dailor.base.shop/",
      "linkLabel": "公式ショップ",
      "sourceUrl": "https://pomeranian-festival.com/market/4324/",
      "checkedAt": "2026-10-12"
    },
    "1": {
      "name": "もこあむあむ®︎",
      "category": "首輪・リード",
      "description": "カラフルなパラコードで首輪とリードを制作。色や組み合わせを相談して選びたい方に。",
      "tags": [
        "オーダー受付",
        "サイズ要確認"
      ],
      "sizeNote": "対応する体重・首回りの範囲は未確認。オーダーの可否と金具の強度をお店に確認してください。",
      "url": "http://www.instagram.com/moco.amu.amu",
      "linkLabel": "公式Instagram",
      "sourceUrl": "https://pomeranian-festival.com/market/3022/",
      "checkedAt": "2026-10-12"
    },
    "2": {
      "name": "Klotho",
      "category": "首輪・リード",
      "description": "パラコードを編んだ首輪・リードのお店。軽さや色の組み合わせに注目して見たいブランドです。",
      "tags": [
        "サイズ要確認"
      ],
      "sizeNote": "小型犬・大型犬それぞれの対応範囲は未確認。体重と首回りを伝え、商品の適合サイズを確認してください。",
      "url": "https://www.instagram.com/klotho_321",
      "linkLabel": "公式Instagram",
      "sourceUrl": "https://pomeranian-festival.com/market/5072/",
      "checkedAt": "2026-10-12"
    },
    "3": {
      "name": "BIOGANCE",
      "category": "シャンプー・ケア",
      "description": "フランス生まれのペットケアブランド。シャンプーやコンディショナー、ブラッシング用品などを扱います。",
      "tags": [
        "商品ごとに確認"
      ],
      "sizeNote": "犬の体格だけでなく、毛質や商品の用途・使用表示に合わせて選ぶケア用品です。",
      "url": "https://www.ino-japan.com/",
      "linkLabel": "公式サイト",
      "sourceUrl": "https://pomeranian-festival.com/market/907/",
      "checkedAt": "2026-10-12"
    },
    "4": {
      "name": "わんこのおやつ本舗",
      "category": "おやつ",
      "description": "天然素材にこだわる犬用おやつ専門店。素材を見ながら、いつものごほうびを探したい方に。",
      "tags": [
        "商品ごとに確認"
      ],
      "sizeNote": "硬さ・大きさ・原材料を商品ごとに確認。小型犬用／大型犬用としての区分は未確認です。",
      "url": "http://www.wanko-oyatu.shop/",
      "linkLabel": "公式ショップ",
      "sourceUrl": "https://pomeranian-festival.com/market/5258/",
      "checkedAt": "2026-10-12"
    },
    "5": {
      "name": "Weekends embroidery",
      "category": "飼い主向け雑貨・刺繍",
      "description": "犬のイラスト刺繍を使ったバッグやキャップなど。名入れトートバッグの受注も案内されています。",
      "tags": [
        "飼い主向けグッズ"
      ],
      "sizeNote": "犬が着用する服のサイズではなく、犬種モチーフや名入れを選ぶグッズです。",
      "url": "https://ec.weekends-dog.com/",
      "linkLabel": "公式ショップ",
      "sourceUrl": "https://pomeranian-festival.com/market/2217/",
      "checkedAt": "2026-10-12"
    }
  },
  "events": {
    "pomeranian-festival-2026-10-17": {
      "brandIds": [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5"
      ],
      "sourceUrl": "https://pomeranian-festival.com/event/2026-10-17/market/",
      "checkedAt": "2026-10-12",
      "partial": true
    }
  }
};
