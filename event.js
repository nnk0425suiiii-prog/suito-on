/* ==================================================
   EVENT PAGE
   すいとおん。

   event-data.js の calendarEvents から

   ・今日以降のイベントを表示
   ・開催日が近い順
   ・TYPE FILTER
   ・REGION FILTER
   ・STATUS表示
   ・左側に日付＋曜日を表示

   CALENDAR
   ・月送り
   ・日曜 / 祝日 = 赤
   ・土曜 = 青
   ・今日 = 背景色
   ・イベント開催日 = 足あと
   ・祝日名 = カレンダー下に表示
   ・日付クリックでイベントカードへ移動
================================================== */


/* ==================================================
   ELEMENTS
================================================== */

const eventList =
  document.getElementById(
    "eventList"
  );


const calendarTitle =
  document.getElementById(
    "eventCalendarTitle"
  );


const calendarDays =
  document.getElementById(
    "eventCalendarDays"
  );


const prevMonthButton =
  document.getElementById(
    "eventCalendarPrev"
  );


const nextMonthButton =
  document.getElementById(
    "eventCalendarNext"
  );


const calendarHolidays =
  document.getElementById(
    "eventCalendarHolidays"
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
================================================== */

const today =
  new Date();


today.setHours(
  0,
  0,
  0,
  0
);


/* ==================================================
   CALENDAR STATE
================================================== */

let calendarYear =
  today.getFullYear();


let calendarMonth =
  today.getMonth();


/* ==================================================
   JAPANESE HOLIDAYS
   2026

   2027年になったら
   ここへ追加すればOK
================================================== */

const japaneseHolidays = {

  "2026-01-01":
    "元日",

  "2026-01-12":
    "成人の日",

  "2026-02-11":
    "建国記念の日",

  "2026-02-23":
    "天皇誕生日",

  "2026-03-20":
    "春分の日",

  "2026-04-29":
    "昭和の日",

  "2026-05-03":
    "憲法記念日",

  "2026-05-04":
    "みどりの日",

  "2026-05-05":
    "こどもの日",

  "2026-05-06":
    "振替休日",

  "2026-07-20":
    "海の日",

  "2026-08-11":
    "山の日",

  "2026-09-21":
    "敬老の日",

  "2026-09-22":
    "国民の休日",

  "2026-09-23":
    "秋分の日",

  "2026-10-12":
    "スポーツの日",

  "2026-11-03":
    "文化の日",

  "2026-11-23":
    "勤労感謝の日"

};


/* ==================================================
   WEEK
================================================== */

const eventWeekNames = [

  "SUN",
  "MON",
  "TUE",
  "WED",
  "THU",
  "FRI",
  "SAT"

];


/* ==================================================
   DATE UTILITIES
================================================== */


/* ==================================================
   YYYY-MM-DD
================================================== */

function createDateString(
  year,
  month,
  day
) {

  const monthString =
    String(
      month + 1
    ).padStart(
      2,
      "0"
    );


  const dayString =
    String(
      day
    ).padStart(
      2,
      "0"
    );


  return (
    `${year}-${monthString}-${dayString}`
  );

}


/* ==================================================
   TODAY STRING
================================================== */

function getTodayString() {

  return createDateString(

    today.getFullYear(),

    today.getMonth(),

    today.getDate()

  );

}


/* ==================================================
   DATE OBJECT
================================================== */

function createLocalDate(
  dateString
) {

  if (!dateString) {
    return null;
  }


  return new Date(
    `${dateString}T00:00:00`
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

   1日
   2026.09.12

   複数日
   2026.09.12 — 09.13
================================================== */

function getEventDateHTML(
  event
) {

  const startDate =
    formatEventDate(
      event.startDate
    );


  if (!event.endDate) {

    return startDate;

  }


  if (
    event.startDate ===
    event.endDate
  ) {

    return startDate;

  }


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
   SIDE DATE

   9/13
   (SUN)

   複数日
   9/19 (SAT)
     —
   9/20 (SUN)
================================================== */

function getEventSideDateHTML(
  event
) {


  function createDateParts(
    dateString
  ) {

    const date =
      createLocalDate(
        dateString
      );


    return {

      month:
        date.getMonth() + 1,

      day:
        date.getDate(),

      week:
        eventWeekNames[
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


  return "";

}


/* ==================================================
   UPCOMING EVENTS
================================================== */

function getUpcomingEvents() {

  if (
    typeof calendarEvents ===
      "undefined"

    ||

    !Array.isArray(
      calendarEvents
    )
  ) {

    return [];

  }


  const todayString =
    getTodayString();


  return [

    ...calendarEvents

  ]


    /* ==================================================
       終了日が今日以降
    ================================================== */

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


    /* ==================================================
       開催日の近い順
    ================================================== */

    .sort(
      (a, b) => {

        return (

          createLocalDate(
            a.startDate
          )

          -

          createLocalDate(
            b.startDate
          )

        );

      }
    );

}


/* ==================================================
   FILTER EVENTS
================================================== */

function getFilteredEvents() {

  const upcomingEvents =
    getUpcomingEvents();


  return upcomingEvents.filter(
    event => {


      const typeMatch =

        selectedEventType ===
          "all"

        ||

        event.type ===
          selectedEventType;


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


  eventList.innerHTML =
    "";


  /* ==================================================
     EMPTY
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


      /* カレンダー移動用 */

      article.id =
        `event-${event.id}`;


      article.dataset.startDate =
        event.startDate;


      article.dataset.endDate =
        event.endDate
        ||
        event.startDate;


      /* ==================================================
         TYPE
      ================================================== */

      const typeLabel =
        getEventTypeLabel(
          event.type
        );


      const typeClass =
        getEventTypeClass(
          event.type
        );


      /* ==================================================
         STATUS
      ================================================== */

      const statusHTML =
        getEventStatusHTML(
          event.status
        );


      /* ==================================================
         DATE
      ================================================== */

      const dateHTML =
        getEventDateHTML(
          event
        );


      const sideDateHTML =
        getEventSideDateHTML(
          event
        );


      /* ==================================================
         LOCATION
      ================================================== */

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


      /* ==================================================
         IMAGE
      ================================================== */

      const imageHTML =
        event.image

          ? `

            <div class="event-card-image">

              <img
                src="${event.image}"
                alt="${event.title || "イベント画像"}"
                loading="lazy"
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


      /* ==================================================
         DESCRIPTION
      ================================================== */

      const descriptionHTML =
        event.description

          ? `

            <p class="event-card-description">

              ${event.description}

            </p>

          `

          : "";


      /* ==================================================
         ADDRESS
      ================================================== */

      const addressHTML =
        event.address

          ? `

            <p class="event-card-address">

              ${event.address}

            </p>

          `

          : "";


      /* ==================================================
         DETAIL LINK
      ================================================== */

      const detailLinkHTML = `

        <a
          href="event-detail.html?id=${encodeURIComponent(event.id)}"
          class="event-detail-link"
        >
          イベントを見る →
        </a>

      `;


      /* ==================================================
         CARD HTML
      ================================================== */

      article.innerHTML = `


        ${sideDateHTML}


        ${imageHTML}


        <div class="event-card-content">


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


          <p class="event-card-date">
            ${dateHTML}
          </p>


          <h3 class="event-card-title">
            ${event.title || ""}
          </h3>


          ${
            locationText

              ? `

                <p class="event-card-place">
                  ${locationText}
                </p>

              `

              : ""
          }


          ${addressHTML}


          ${descriptionHTML}


          ${detailLinkHTML}


        </div>

      `;


      eventList.appendChild(
        article
      );


    }
  );

}


/* ==================================================
   CALENDAR EVENT CHECK
================================================== */

function isDateInsideEvent(
  dateString,
  event
) {

  if (
    !event.startDate
  ) {

    return false;

  }


  const endDate =
    event.endDate
    ||
    event.startDate;


  return (

    dateString >=
      event.startDate

    &&

    dateString <=
      endDate

  );

}


/* ==================================================
   EVENTS ON DATE
================================================== */

function getEventsOnDate(
  dateString
) {

  const events =
    getFilteredEvents();


  return events.filter(
    event => {

      return isDateInsideEvent(
        dateString,
        event
      );

    }
  );

}


/* ==================================================
   TODAY CHECK
================================================== */

function isTodayDate(
  year,
  month,
  day
) {

  return (

    year ===
      today.getFullYear()

    &&

    month ===
      today.getMonth()

    &&

    day ===
      today.getDate()

  );

}


/* ==================================================
   CALENDAR TITLE
================================================== */

function renderCalendarTitle() {

  if (!calendarTitle) {
    return;
  }


  const monthNumber =
    String(
      calendarMonth + 1
    ).padStart(
      2,
      "0"
    );


  calendarTitle.textContent =
    `${calendarYear}. ${monthNumber}`;

}


/* ==================================================
   CALENDAR HOLIDAYS
================================================== */

function renderCalendarHolidays() {

  if (!calendarHolidays) {
    return;
  }


  const holidaysThisMonth =
    Object.entries(
      japaneseHolidays
    )
    .filter(
      ([dateString]) => {

        const parts =
          dateString
            .split("-")
            .map(Number);


        const year =
          parts[0];


        const month =
          parts[1];


        return (

          year === calendarYear

          &&

          month ===
            calendarMonth + 1

        );

      }
    )
    .sort(
      (a, b) => {

        return (
          a[0].localeCompare(
            b[0]
          )
        );

      }
    );


  /* ==================================================
     祝日なし
  ================================================== */

  if (
    holidaysThisMonth.length === 0
  ) {

    calendarHolidays.innerHTML =
      "";

    calendarHolidays.hidden =
      true;

    return;

  }


  calendarHolidays.hidden =
    false;


  calendarHolidays.innerHTML = `

    <p class="event-calendar-holiday-title">
      今月の祝日
    </p>


    <div class="event-calendar-holiday-list">

      ${
        holidaysThisMonth

          .map(
            ([dateString, holidayName]) => {

              const parts =
                dateString.split("-");


              const month =
                Number(
                  parts[1]
                );


              const day =
                Number(
                  parts[2]
                );


              return `

                <div class="event-calendar-holiday-row">

                  <span>
                    ${month}/${day}
                  </span>

                  <p>
                    ${holidayName}
                  </p>

                </div>

              `;

            }
          )

          .join("")
      }

    </div>

  `;

}


/* ==================================================
   RENDER CALENDAR
================================================== */

function renderCalendar() {

  if (
    !calendarDays
  ) {

    return;

  }


  renderCalendarTitle();


  calendarDays.innerHTML =
    "";


  /* ==================================================
     MONTH INFO
  ================================================== */

  const firstDay =
    new Date(
      calendarYear,
      calendarMonth,
      1
    );


  const firstWeekDay =
    firstDay.getDay();


  const lastDate =
    new Date(
      calendarYear,
      calendarMonth + 1,
      0
    ).getDate();


  const previousMonthLastDate =
    new Date(
      calendarYear,
      calendarMonth,
      0
    ).getDate();


  /* ==================================================
     42 CELLS
     6週間表示
  ================================================== */

  for (
    let cellIndex = 0;
    cellIndex < 42;
    cellIndex++
  ) {


    let cellYear =
      calendarYear;


    let cellMonth =
      calendarMonth;


    let cellDay;


    let outsideMonth =
      false;


    /* ==================================================
       PREVIOUS MONTH
    ================================================== */

    if (
      cellIndex <
      firstWeekDay
    ) {

      cellDay =
        previousMonthLastDate
        -
        firstWeekDay
        +
        cellIndex
        +
        1;


      cellMonth =
        calendarMonth - 1;


      if (
        cellMonth < 0
      ) {

        cellMonth =
          11;

        cellYear =
          calendarYear - 1;

      }


      outsideMonth =
        true;

    }


    /* ==================================================
       CURRENT MONTH
    ================================================== */

    else if (
      cellIndex <
      firstWeekDay
      +
      lastDate
    ) {

      cellDay =
        cellIndex
        -
        firstWeekDay
        +
        1;

    }


    /* ==================================================
       NEXT MONTH
    ================================================== */

    else {

      cellDay =
        cellIndex
        -
        firstWeekDay
        -
        lastDate
        +
        1;


      cellMonth =
        calendarMonth + 1;


      if (
        cellMonth > 11
      ) {

        cellMonth =
          0;

        cellYear =
          calendarYear + 1;

      }


      outsideMonth =
        true;

    }


    /* ==================================================
       DATE INFO
    ================================================== */

    const dateObject =
      new Date(
        cellYear,
        cellMonth,
        cellDay
      );


    const weekDay =
      dateObject.getDay();


    const dateString =
      createDateString(
        cellYear,
        cellMonth,
        cellDay
      );


    const holidayName =
      japaneseHolidays[
        dateString
      ]
      ||
      "";


    const eventsOnDate =
      getEventsOnDate(
        dateString
      );


    const hasEvent =
      eventsOnDate.length > 0;


    /* ==================================================
       DAY BUTTON
    ================================================== */

    const dayButton =
      document.createElement(
        "button"
      );


    dayButton.type =
      "button";


    dayButton.className =
      "calendar-day";


    dayButton.dataset.date =
      dateString;


    /* ==================================================
       OUTSIDE
    ================================================== */

    if (
      outsideMonth
    ) {

      dayButton.classList.add(
        "calendar-day-outside"
      );

    }


    /* ==================================================
       SUNDAY
    ================================================== */

    if (
      weekDay === 0
    ) {

      dayButton.classList.add(
        "calendar-day-sunday"
      );

    }


    /* ==================================================
       SATURDAY
    ================================================== */

    if (
      weekDay === 6
    ) {

      dayButton.classList.add(
        "calendar-day-saturday"
      );

    }


    /* ==================================================
       HOLIDAY
    ================================================== */

    if (
      holidayName
    ) {

      dayButton.classList.add(
        "calendar-day-holiday"
      );

    }


    /* ==================================================
       TODAY
    ================================================== */

    if (
      isTodayDate(
        cellYear,
        cellMonth,
        cellDay
      )
    ) {

      dayButton.classList.add(
        "calendar-day-today"
      );

    }


    /* ==================================================
       EVENT
    ================================================== */

    if (
      hasEvent
    ) {

      dayButton.classList.add(
        "calendar-day-has-event"
      );

    }


    /* ==================================================
       ACCESSIBILITY
    ================================================== */

    let ariaLabel =
      `${cellYear}年${cellMonth + 1}月${cellDay}日`;


    if (
      holidayName
    ) {

      ariaLabel +=
        ` ${holidayName}`;

    }


    if (
      hasEvent
    ) {

      ariaLabel +=
        ` イベント${eventsOnDate.length}件`;

    }


    dayButton.setAttribute(
      "aria-label",
      ariaLabel
    );


    /* ==================================================
       HTML

       祝日名はここには入れない
       ↓
       カレンダー下にまとめて表示
    ================================================== */

    dayButton.innerHTML = `

      <span class="calendar-day-number">
        ${cellDay}
      </span>


      ${
        hasEvent

          ? `

            <span
              class="calendar-event-paw"
              aria-hidden="true"
            >
              🐾
            </span>

          `

          : ""
      }

    `;


    /* ==================================================
       CLICK
    ================================================== */

    dayButton.addEventListener(
      "click",
      () => {


        /* 前月・翌月の日付 */

        if (
          outsideMonth
        ) {

          calendarYear =
            cellYear;


          calendarMonth =
            cellMonth;


          renderCalendar();

          return;

        }


        /* イベントなし */

        if (
          !hasEvent
        ) {

          return;

        }


        scrollToEventOnDate(
          dateString
        );

      }
    );


    calendarDays.appendChild(
      dayButton
    );

  }


  /* ==================================================
     HOLIDAY LIST
  ================================================== */

  renderCalendarHolidays();

}


/* ==================================================
   SCROLL TO EVENT
================================================== */

function scrollToEventOnDate(
  dateString
) {

  const events =
    getEventsOnDate(
      dateString
    );


  if (
    events.length === 0
  ) {

    return;

  }


  const firstEvent =
    events[0];


  const target =
    document.getElementById(
      `event-${firstEvent.id}`
    );


  if (!target) {
    return;
  }


  target.scrollIntoView({

    behavior:
      "smooth",

    block:
      "center"

  });


  /* ==================================================
     HIGHLIGHT
  ================================================== */

  target.classList.add(
    "event-card-highlight"
  );


  window.setTimeout(
    () => {

      target.classList.remove(
        "event-card-highlight"
      );

    },
    1600
  );

}


/* ==================================================
   PREVIOUS MONTH
================================================== */

if (
  prevMonthButton
) {

  prevMonthButton.addEventListener(
    "click",
    () => {


      calendarMonth--;


      if (
        calendarMonth < 0
      ) {

        calendarMonth =
          11;


        calendarYear--;

      }


      renderCalendar();

    }
  );

}


/* ==================================================
   NEXT MONTH
================================================== */

if (
  nextMonthButton
) {

  nextMonthButton.addEventListener(
    "click",
    () => {


      calendarMonth++;


      if (
        calendarMonth > 11
      ) {

        calendarMonth =
          0;


        calendarYear++;

      }


      renderCalendar();

    }
  );

}


/* ==================================================
   APPLY FILTER
================================================== */

function applyEventFilter() {

  const filteredEvents =
    getFilteredEvents();


  /* ==================================================
     EVENT LIST
  ================================================== */

  displayEvents(
    filteredEvents
  );


  /* ==================================================
     CALENDAR
  ================================================== */

  renderCalendar();

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


        eventTypeButtons.forEach(
          btn => {

            btn.classList.remove(
              "active"
            );

          }
        );


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


        eventRegionButtons.forEach(
          btn => {

            btn.classList.remove(
              "active"
            );

          }
        );


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
