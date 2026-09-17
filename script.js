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

/* Match the category illustrations on the journal home. Decorative only. */
(() => {
  const paths = {
    HOME:'M3 11l9-8 9 8 M5 10v11h5v-7h4v7h5V10',
    BLOG:'M7 3h7l4 4v14H7z M14 3v5h4 M10 12h5 M10 16h5',
    GUIDE:'M12 5Q6 2 2 5v15q5-3 10 0q5-3 10 0V5q-5-3-10 0v15',
    ITEMS:'M5 8h14l1 13H4z M9 9V6a3 3 0 0 1 6 0v3',
    EVENT:'M4 6h16v15H4z M8 3v6 M16 3v6 M4 11h16 M8 15h2 M14 15h2',
    COMIC:'M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18 M8 9h1 M15 9h1 M8 14q4 5 8 0',
    ABOUT:'M12 11c-3 0-7 6-5 9s4 0 5 0s4 3 5 0s-2-9-5-9 M5 5v3 M10 3v3 M15 3v3 M20 5v3'
  };
  document.querySelectorAll('.mobile-nav a').forEach(link => {
    const label=link.textContent.trim().toUpperCase();
    if(!paths[label] || link.querySelector('svg')) return;
    const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('viewBox','0 0 24 24');
    svg.setAttribute('aria-hidden','true');
    svg.setAttribute('focusable','false');
    svg.setAttribute('class','journal-menu-icon');
    const path=document.createElementNS('http://www.w3.org/2000/svg','path');
    path.setAttribute('d',paths[label]);svg.appendChild(path);link.prepend(svg);
  });
})();
