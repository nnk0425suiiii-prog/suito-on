// ==================================================
// HOME MINI CALENDAR
// すいとおん。
// ==================================================

document.addEventListener(
  "DOMContentLoaded",
  function () {


    const calendarDays =
      document.getElementById(
        "homeCalendarDays"
      );


    const calendarMonth =
      document.getElementById(
        "homeCalendarMonth"
      );


    const calendarYear =
      document.getElementById(
        "homeCalendarYear"
      );


    const prevButton =
      document.getElementById(
        "homeCalendarPrev"
      );


    const nextButton =
      document.getElementById(
        "homeCalendarNext"
      );


    if (
      !calendarDays ||
      !calendarMonth ||
      !calendarYear
    ) {
      return;
    }



    // ==================================================
    // CURRENT MONTH
    // ==================================================

    const today =
      new Date();


    let displayYear =
      today.getFullYear();


    let displayMonth =
      today.getMonth();



    // ==================================================
    // MONTH NAME
    // ==================================================

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



    // ==================================================
    // DATE STRING
    // YYYY-MM-DD
    // ==================================================

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



    // ==================================================
    // EVENT CHECK
    // 複数日イベントにも対応
    // ==================================================

    function getEventsForDate(
      dateString
    ) {


      if (
        typeof calendarEvents ===
        "undefined" ||
        !Array.isArray(calendarEvents)
      ) {

        return [];

      }


      return calendarEvents.filter(
        event => {


          if (!event.startDate) {
            return false;
          }


          const start =
            event.startDate;


          const end =
            event.endDate ||
            event.startDate;


          return (
            dateString >= start &&
            dateString <= end
          );

        }
      );

    }



    // ==================================================
    // RENDER
    // ==================================================

    function renderCalendar() {


      calendarDays.innerHTML =
        "";


      calendarMonth.textContent =
        monthNames[
          displayMonth
        ];


      calendarYear.textContent =
        displayYear;



      // ==================================================
      // MONTH INFO
      // ==================================================

      const firstDay =
        new Date(
          displayYear,
          displayMonth,
          1
        ).getDay();


      const lastDate =
        new Date(
          displayYear,
          displayMonth + 1,
          0
        ).getDate();



      // ==================================================
      // EMPTY DAYS
      // ==================================================

      for (
        let i = 0;
        i < firstDay;
        i++
      ) {

        const empty =
          document.createElement(
            "span"
          );


        empty.className =
          "home-hero-calendar-day empty";


        calendarDays.appendChild(
          empty
        );

      }



      // ==================================================
      // DAYS
      // ==================================================

      for (
        let day = 1;
        day <= lastDate;
        day++
      ) {


        const dateString =
          createDateString(
            displayYear,
            displayMonth,
            day
          );


        const events =
          getEventsForDate(
            dateString
          );


        const dayElement =
          document.createElement(
            events.length
              ? "a"
              : "span"
          );


        dayElement.className =
          "home-hero-calendar-day";


        dayElement.textContent =
          day;



        // ==================================================
        // TODAY
        // ==================================================

        if (
          displayYear ===
            today.getFullYear() &&
          displayMonth ===
            today.getMonth() &&
          day ===
            today.getDate()
        ) {

          dayElement.classList.add(
            "today"
          );

        }



        // ==================================================
        // EVENT
        // ==================================================

        if (events.length) {


          dayElement.classList.add(
            "has-event"
          );


          dayElement.href =
            "event.html";


          dayElement.title =
            events
              .map(
                event =>
                  event.title
              )
              .join(" / ");


          const dot =
            document.createElement(
              "i"
            );


          dayElement.appendChild(
            dot
          );

        }


        calendarDays.appendChild(
          dayElement
        );

      }

    }



    // ==================================================
    // PREV MONTH
    // ==================================================

    if (prevButton) {

      prevButton.addEventListener(
        "click",
        function () {


          displayMonth--;


          if (displayMonth < 0) {

            displayMonth =
              11;

            displayYear--;

          }


          renderCalendar();

        }
      );

    }



    // ==================================================
    // NEXT MONTH
    // ==================================================

    if (nextButton) {

      nextButton.addEventListener(
        "click",
        function () {


          displayMonth++;


          if (displayMonth > 11) {

            displayMonth =
              0;

            displayYear++;

          }


          renderCalendar();

        }
      );

    }



    // ==================================================
    // INITIAL
    // ==================================================

    renderCalendar();


  }
);