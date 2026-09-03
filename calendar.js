/* ==================================================
   CALENDAR

   ・EVENT表示
   ・BLOG更新表示
   ・EVENT詳細ページへリンク
================================================== */


/* ==================================================
   ELEMENTS
================================================== */

const calendarDays =
  document.getElementById(
    "calendarDays"
  );

const calendarTitle =
  document.getElementById(
    "calendarTitle"
  );

const prevMonthButton =
  document.getElementById(
    "prevMonth"
  );

const nextMonthButton =
  document.getElementById(
    "nextMonth"
  );


/* ==================================================
   TODAY
================================================== */

const today =
  new Date();

let currentYear =
  today.getFullYear();

let currentMonth =
  today.getMonth();


/* ==================================================
   MONTH NAME
================================================== */

const monthNames = [

  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER"

];


/* ==================================================
   DATE STRING

   2026-8-1
   ↓
   2026-08-01
================================================== */

function createDateString(
  year,
  month,
  day
) {

  return (
    `${year}-` +
    `${String(month + 1).padStart(2, "0")}-` +
    `${String(day).padStart(2, "0")}`
  );

}


/* ==================================================
   CALENDAR CREATE
================================================== */

function createCalendar() {


  /* 要素がないページでは何もしない */

  if (
    !calendarDays ||
    !calendarTitle
  ) {

    return;

  }


  /* =========================
     RESET
  ========================= */

  calendarDays.innerHTML =
    "";


  /* =========================
     TITLE
  ========================= */

  calendarTitle.textContent =
    `${currentYear} ${monthNames[currentMonth]}`;


  /* =========================
     FIRST DAY
  ========================= */

  const firstDay =
    new Date(
      currentYear,
      currentMonth,
      1
    ).getDay();


  /* =========================
     LAST DATE
  ========================= */

  const lastDate =
    new Date(
      currentYear,
      currentMonth + 1,
      0
    ).getDate();



  /* ==================================================
     EMPTY DAYS
  ================================================== */

  for (
    let i = 0;
    i < firstDay;
    i++
  ) {

    const emptyDay =
      document.createElement(
        "div"
      );


    emptyDay.className =
      "calendar-day empty";


    calendarDays.appendChild(
      emptyDay
    );

  }



  /* ==================================================
     DAYS
  ================================================== */

  for (
    let day = 1;
    day <= lastDate;
    day++
  ) {


    const dayElement =
      document.createElement(
        "div"
      );


    dayElement.className =
      "calendar-day";



    /* ==================================================
       TODAY
    ================================================== */

    if (

      currentYear ===
        today.getFullYear()

      &&

      currentMonth ===
        today.getMonth()

      &&

      day ===
        today.getDate()

    ) {

      dayElement.classList.add(
        "today"
      );

    }



    /* ==================================================
       DATE NUMBER
    ================================================== */

    const dateElement =
      document.createElement(
        "span"
      );


    dateElement.className =
      "calendar-date";


    dateElement.textContent =
      day;


    dayElement.appendChild(
      dateElement
    );



    /* ==================================================
       YYYY-MM-DD
    ================================================== */

    const dateString =
      createDateString(
        currentYear,
        currentMonth,
        day
      );



    /* ==================================================
       EVENT SEARCH
    ================================================== */

    let eventsForDay =
      [];


    if (
      typeof calendarEvents !==
        "undefined"

      &&

      Array.isArray(
        calendarEvents
      )
    ) {

      eventsForDay =
        calendarEvents.filter(
          event => {


            if (
              !event.startDate
            ) {

              return false;

            }


            const startDate =
              event.startDate;


            const endDate =
              event.endDate ||
              event.startDate;


            return (

              dateString >=
                startDate

              &&

              dateString <=
                endDate

            );

          }
        );

    }



    /* ==================================================
       BLOG SEARCH
    ================================================== */

    let blogsForDay =
      [];


    if (
      typeof blogPosts !==
        "undefined"

      &&

      Array.isArray(
        blogPosts
      )
    ) {

      blogsForDay =
        blogPosts.filter(
          post => {

            return (
              post.datetime ===
              dateString
            );

          }
        );

    }



    /* ==================================================
       EVENT DISPLAY
    ================================================== */

    eventsForDay.forEach(
      event => {


        const eventElement =
          document.createElement(
            "div"
          );


        eventElement.className =
          `calendar-event ${event.type || "event"}`;



        const eventLink =
          document.createElement(
            "a"
          );


        eventLink.className =
          "calendar-event-link";


        /* =========================
           EVENT DETAIL PAGE
        ========================= */

        eventLink.href =
          `event-detail.html?id=${encodeURIComponent(event.id)}`;



        eventLink.innerHTML = `

          <span class="calendar-event-title">
            ${event.title || ""}
          </span>

          ${
            event.place
              ? `
                <span class="calendar-event-place">
                  ${event.place}
                </span>
              `
              : ""
          }

        `;



        eventElement.appendChild(
          eventLink
        );


        dayElement.appendChild(
          eventElement
        );

      }
    );



    /* ==================================================
       BLOG DISPLAY
    ================================================== */

    blogsForDay.forEach(
      post => {


        const blogElement =
          document.createElement(
            "a"
          );


        blogElement.className =
          "calendar-blog";


        blogElement.href =
          `article.html?id=${encodeURIComponent(post.id)}`;


        blogElement.innerHTML = `

          <span class="calendar-blog-label">
            BLOG
          </span>

          <span class="calendar-blog-title">
            ${post.title || ""}
          </span>

        `;


        dayElement.appendChild(
          blogElement
        );

      }
    );



    /* ==================================================
       ADD DAY
    ================================================== */

    calendarDays.appendChild(
      dayElement
    );

  }

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


      currentMonth--;


      if (
        currentMonth < 0
      ) {

        currentMonth =
          11;

        currentYear--;

      }


      createCalendar();

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


      currentMonth++;


      if (
        currentMonth > 11
      ) {

        currentMonth =
          0;

        currentYear++;

      }


      createCalendar();

    }
  );

}



/* ==================================================
   INITIAL DISPLAY
================================================== */

createCalendar();