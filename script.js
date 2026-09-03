/* ==================================================
   BACKGROUND PHOTOS
================================================== */

const photos = [
  "images/background-photos/suitoon.jpeg",

  /* 写真を増やしたらここに追加 */
  // "images/background-photos/suitoon02.jpeg",
  // "images/background-photos/suitoon03.jpeg"
];


const heroImage =
  document.getElementById("heroImage");

const floatingPhoto =
  document.getElementById("floatingPhoto");


let currentPhotoIndex = 0;


/* ==================================================
   写真の表示位置
================================================== */

const positions = [

  {
    top: "12%",
    right: "4%",
    left: "auto",
    bottom: "auto",
    transform: "rotate(-3deg)"
  },

  {
    top: "24%",
    left: "2%",
    right: "auto",
    bottom: "auto",
    transform: "rotate(2deg)"
  },

  {
    bottom: "4%",
    right: "8%",
    top: "auto",
    left: "auto",
    transform: "rotate(1deg)"
  },

  {
    top: "8%",
    left: "18%",
    right: "auto",
    bottom: "auto",
    transform: "rotate(-1deg)"
  }

];


/* ==================================================
   背景写真切り替え
================================================== */

function changeHeroPhoto() {

  /*
    heroImage / floatingPhoto が存在しないページでは
    背景写真処理を行わない
  */

  if (!heroImage || !floatingPhoto) {
    return;
  }


  /* 写真を一度消す */

  floatingPhoto.style.opacity = 0;


  setTimeout(() => {

    if (photos.length > 1) {

      currentPhotoIndex =
        (currentPhotoIndex + 1)
        % photos.length;


      heroImage.src =
        photos[currentPhotoIndex];

    }


    /* ランダムな位置を選ぶ */

    const position =
      positions[
        Math.floor(
          Math.random()
          * positions.length
        )
      ];


    floatingPhoto.style.top =
      position.top;

    floatingPhoto.style.left =
      position.left;

    floatingPhoto.style.right =
      position.right;

    floatingPhoto.style.bottom =
      position.bottom;

    floatingPhoto.style.transform =
      position.transform;


    /* 再表示 */

    floatingPhoto.style.opacity =
      0.18;

  }, 700);

}


/* ==================================================
   背景写真タイマー
================================================== */

/*
  背景写真が存在するページだけ
  8秒ごとの処理を開始
*/

if (heroImage && floatingPhoto) {

  setInterval(
    changeHeroPhoto,
    8000
  );

}



/* ==================================================
   MOBILE MENU
================================================== */

/* ==================================================
   MOBILE MENU
================================================== */

const menuButton = document.getElementById("menuButton");
const mobileNav = document.getElementById("mobileNav");

if (menuButton && mobileNav) {

  const setMenuState = (open) => {
    mobileNav.classList.toggle("active", open);
    menuButton.classList.toggle("is-open", open);
    document.body.classList.toggle("mobile-menu-open", open);

    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute(
      "aria-label",
      open ? "メニューを閉じる" : "メニューを開く"
    );
  };

  menuButton.setAttribute("aria-controls", "mobileNav");
  menuButton.setAttribute("aria-expanded", "false");

  menuButton.addEventListener("click", () => {
    setMenuState(!mobileNav.classList.contains("active"));
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuState(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
      setMenuState(false);
    }
  });
}
