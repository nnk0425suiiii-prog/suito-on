/* ==================================================
   EVENT PAGE

   event-data.js の calendarEvents から

   ・今日以降のイベントを表示
   ・開催日が近い順
   ・TYPE FILTER
   ・REGION FILTER
   ・STATUS表示
   ・左側に日付＋曜日を表示
================================================== */


/* ==================================================
   EVENT LIST
================================================== */

const eventList =
  document.getElementById(
    "eventList"
  );


/* ==================================================
   FILTER STATE
================================================== */

let selectedEventType =
  "all";


let selectedEventRegion =
  "all";


/* ==================================================
   TODAY

   YYYY-MM-DD に変換
================================================== */

function getTodayString() {

  const today =
    new Date();


  const year =
    today.getFullYear();


  const month =
    String(
      today.getMonth() + 1
    ).padStart(
      2,
      "0"
    );


  const day =
    String(
      today.getDate()
    ).padStart(
      2,
      "0"
    );


  return (
    `${year}-${month}-${day}`
  );

}


/* ==================================================
   DATE DISPLAY

   2026-09-12
   ↓
   2026.09.12
================================================== */

function formatEventDate(
  dateString
) {

  if (!dateString) {
    return "";
  }


  return dateString.replace(
    /-/g,
    "."
  );

}


/* ==================================================
   EVENT DATE DISPLAY

   1日開催
   2026.09.12

   複数日
   2026.09.12 — 09.14
================================================== */

function getEventDateHTML(
  event
) {


  const startDate =
    formatEventDate(
      event.startDate
    );


  /* endDateなし */

  if (!event.endDate) {

    return startDate;

  }


  /* 1日開催 */

  if (
    event.startDate ===
    event.endDate
  ) {

    return startDate;

  }


  /* =========================
     複数日開催
  ========================= */

  const endParts =
    event.endDate.split(
      "-"
    );


  const endMonth =
    endParts[1] || "";


  const endDay =
    endParts[2] || "";


  return `
    ${startDate}

    <span class="event-date-separator">
      —
    </span>

    ${endMonth}.${endDay}
  `;

}


/* ==================================================
   SIDE DATE DISPLAY

   2026-09-27
   ↓
   9/27
   (SUN)

   複数日
   ↓
   9/19
   (SAT)
    —
   9/20
   (SUN)
================================================== */

function getEventSideDateHTML(
  event
) {


  const weekNames = [

    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT"

  ];


  /* =========================
     DATE PARTS
  ========================= */

  function createDateParts(
    dateString
  ) {


    const date =
      new Date(
        `${dateString}T00:00:00`
      );


    return {

      month:
        date.getMonth() + 1,

      day:
        date.getDate(),

      week:
        weekNames[
          date.getDay()
        ]

    };

  }


  const start =
    createDateParts(
      event.startDate
    );


  /* ==================================================
     1日開催
  ================================================== */

  if (
    !event.endDate
    ||
    event.startDate ===
      event.endDate
  ) {

    return `

      <div class="event-card-side-date">

        <div class="event-card-side-date-part">

          <span class="event-card-side-main">
            ${start.month}/${start.day}
          </span>

          <span class="event-card-side-week">
            (${start.week})
          </span>

        </div>

      </div>

    `;

  }


  /* ==================================================
     複数日開催
  ================================================== */

  const end =
    createDateParts(
      event.endDate
    );


  return `

    <div class="event-card-side-date">


      <div class="event-card-side-date-part">

        <span class="event-card-side-main">
          ${start.month}/${start.day}
        </span>

        <span class="event-card-side-week">
          (${start.week})
        </span>

      </div>


      <span class="event-card-side-separator">
        —
      </span>


      <div class="event-card-side-date-part">

        <span class="event-card-side-main">
          ${end.month}/${end.day}
        </span>

        <span class="event-card-side-week">
          (${end.week})
        </span>

      </div>


    </div>

  `;

}


/* ==================================================
   TYPE LABEL
================================================== */

function getEventTypeLabel(
  type
) {


  if (
    type === "adoption"
  ) {

    return "譲渡会";

  }


  return "EVENT";

}


/* ==================================================
   TYPE CLASS
================================================== */

function getEventTypeClass(
  type
) {


  if (
    type === "adoption"
  ) {

    return "event-type-adoption";

  }


  return "event-type-normal";

}


/* ==================================================
   STATUS
================================================== */

function getEventStatusHTML(
  status
) {


  /* 中止 */

  if (
    status === "cancelled"
  ) {

    return `

      <span
        class="
          event-status
          event-status-cancelled
        "
      >
        中止
      </span>

    `;

  }


  /* 延期 */

  if (
    status === "postponed"
  ) {

    return `

      <span
        class="
          event-status
          event-status-postponed
        "
      >
        延期
      </span>

    `;

  }


  /* 通常 */

  return "";

}


/* ==================================================
   UPCOMING EVENTS CREATE
================================================== */

function getUpcomingEvents() {


  if (
    typeof calendarEvents ===
    "undefined"
  ) {

    return [];

  }


  const todayString =
    getTodayString();


  return calendarEvents


    /* =========================
       今日以降

       複数日イベントは
       endDate が今日以降なら表示
    ========================= */

    .filter(
      event => {


        if (
          !event.startDate
        ) {

          return false;

        }


        const eventLastDate =
          event.endDate
          ||
          event.startDate;


        return (
          eventLastDate >=
          todayString
        );

      }
    )


    /* =========================
       開催日の近い順
    ========================= */

    .sort(
      (a, b) => {


        return (

          new Date(
            `${a.startDate}T00:00:00`
          )

          -

          new Date(
            `${b.startDate}T00:00:00`
          )

        );

      }
    );

}


/* ==================================================
   DISPLAY EVENTS
================================================== */

function displayEvents(
  eventsToDisplay
) {


  if (!eventList) {
    return;
  }


  /* 一度空にする */

  eventList.innerHTML =
    "";


  /* ==================================================
     0 EVENTS
  ================================================== */

  if (
    eventsToDisplay.length === 0
  ) {

    eventList.innerHTML = `

      <p class="events-empty">

        この条件の開催予定は
        まだありません。

      </p>

    `;


    return;

  }


  /* ==================================================
     EVENT LOOP
  ================================================== */

  eventsToDisplay.forEach(
    event => {


      const article =
        document.createElement(
          "article"
        );


      article.className =
        "event-card";


      /* =========================
         TYPE
      ========================= */

      const typeLabel =
        getEventTypeLabel(
          event.type
        );


      const typeClass =
        getEventTypeClass(
          event.type
        );


      /* =========================
         STATUS
      ========================= */

      const statusHTML =
        getEventStatusHTML(
          event.status
        );


      /* =========================
         DATE
      ========================= */

      const dateHTML =
        getEventDateHTML(
          event
        );


      /* =========================
         SIDE DATE
      ========================= */

      const sideDateHTML =
        getEventSideDateHTML(
          event
        );


      /* =========================
         LOCATION
      ========================= */

      const locationParts =
        [];


      if (
        event.prefecture
      ) {

        locationParts.push(
          event.prefecture
        );

      }


      if (
        event.place
      ) {

        locationParts.push(
          event.place
        );

      }


      const locationText =
        locationParts.join(
          " / "
        );


      /* =========================
         IMAGE
      ========================= */

      const imageHTML =
        event.image

          ? `

            <div class="event-card-image">

              <img
                src="${event.image}"
                alt="${event.title}"
              >

            </div>

          `

          : `

            <div
              class="
                event-card-image
                event-card-no-image
                ${typeClass}
              "
            >

              <span>

                ${
                  event.type ===
                  "adoption"

                    ? "ADOPTION"

                    : "DOG EVENT"
                }

              </span>

            </div>

          `;


      /* =========================
         DESCRIPTION
      ========================= */

      const descriptionHTML =
        event.description

          ? `

            <p class="event-card-description">

              ${event.description}

            </p>

          `

          : "";


      /* =========================
         ADDRESS
      ========================= */

      const addressHTML =
        event.address

          ? `

            <p class="event-card-address">

              ${event.address}

            </p>

          `

          : "";


      /* =========================
         LINK

         event-detail.htmlへ
      ========================= */

      const linkHTML = `

        <a
          href="event-detail.html?id=${encodeURIComponent(event.id)}"
          class="event-detail-link"
        >

          イベントを見る →

        </a>

      `;


      /* ==================================================
         CARD
      ================================================== */

      article.innerHTML = `


        <!-- SIDE DATE -->

        ${sideDateHTML}



        <!-- IMAGE -->

        ${imageHTML}



        <!-- CONTENT -->

        <div class="event-card-content">


          <!-- TYPE / STATUS -->

          <div class="event-card-meta">


            <span
              class="
                event-type-label
                ${typeClass}
              "
            >

              ${typeLabel}

            </span>


            ${statusHTML}


          </div>



          <!-- ORIGINAL DATE
               CSSで非表示
               必要になったら再表示可能 -->

          <p class="event-card-date">

            ${dateHTML}

          </p>



          <!-- TITLE -->

          <h3 class="event-card-title">

            ${event.title || ""}

          </h3>



          <!-- PLACE -->

          ${
            locationText

              ? `

                <p class="event-card-place">

                  ${locationText}

                </p>

              `

              : ""
          }



          <!-- ADDRESS -->

          ${addressHTML}



          <!-- DESCRIPTION -->

          ${descriptionHTML}



          <!-- DETAIL LINK -->

          ${linkHTML}


        </div>


      `;


      eventList.appendChild(
        article
      );


    }
  );

}


/* ==================================================
   APPLY FILTER
================================================== */

function applyEventFilter() {


  const upcomingEvents =
    getUpcomingEvents();


  const filteredEvents =
    upcomingEvents.filter(
      event => {


        /* =========================
           TYPE
        ========================= */

        const typeMatch =

          selectedEventType ===
            "all"

          ||

          event.type ===
            selectedEventType;


        /* =========================
           REGION
        ========================= */

        const regionMatch =

          selectedEventRegion ===
            "all"

          ||

          event.region ===
            selectedEventRegion;


        return (

          typeMatch
          &&
          regionMatch

        );

      }
    );


  displayEvents(
    filteredEvents
  );

}


/* ==================================================
   TYPE FILTER
================================================== */

const eventTypeButtons =
  document.querySelectorAll(
    ".event-type-button[data-type]"
  );


eventTypeButtons.forEach(
  button => {


    button.addEventListener(
      "click",
      () => {


        selectedEventType =
          button.dataset.type;


        /* 全部OFF */

        eventTypeButtons.forEach(
          btn => {


            btn.classList.remove(
              "active"
            );

          }
        );


        /* 押したものだけON */

        button.classList.add(
          "active"
        );


        applyEventFilter();

      }
    );


  }
);


/* ==================================================
   REGION FILTER
================================================== */

const eventRegionButtons =
  document.querySelectorAll(
    ".event-region-button[data-region]"
  );


eventRegionButtons.forEach(
  button => {


    button.addEventListener(
      "click",
      () => {


        selectedEventRegion =
          button.dataset.region;


        /* 全部OFF */

        eventRegionButtons.forEach(
          btn => {


            btn.classList.remove(
              "active"
            );

          }
        );


        /* 押したものだけON */

        button.classList.add(
          "active"
        );


        applyEventFilter();

      }
    );


  }
);


/* ==================================================
   FIRST DISPLAY
================================================== */

applyEventFilter();
