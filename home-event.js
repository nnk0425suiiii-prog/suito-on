/* ==================================================
   HOME EVENT
   直近2イベントを表示
================================================== */

const homeEventList =
  document.getElementById(
    "homeEventList"
  );


if (
  homeEventList
  &&
  typeof calendarEvents !== "undefined"
  &&
  Array.isArray(calendarEvents)
) {


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
     UPCOMING EVENTS
  ================================================== */

  const upcomingEvents =
    [...calendarEvents]

      .filter(
        event => {

          if (
            !event.startDate
          ) {
            return false;
          }


          const endDate =
            event.endDate ||
            event.startDate;


          const eventEnd =
            new Date(
              `${endDate}T00:00:00`
            );


          return (
            eventEnd >= today
          );

        }
      )

      .sort(
        (a, b) =>
          new Date(
            `${a.startDate}T00:00:00`
          )
          -
          new Date(
            `${b.startDate}T00:00:00`
          )
      )

      .slice(
        0,
        2
      );


  /* ==================================================
     EMPTY
  ================================================== */

  if (
    upcomingEvents.length === 0
  ) {

    homeEventList.innerHTML = `

      <p class="home-event-empty">
        現在予定されているイベントはありません。
      </p>

    `;

  }


  /* ==================================================
     DISPLAY
  ================================================== */

  upcomingEvents.forEach(
    event => {


      const article =
        document.createElement(
          "article"
        );


      article.className =
        "home-event-card";


      const startDate =
        new Date(
          `${event.startDate}T00:00:00`
        );


      const month =
        String(
          startDate.getMonth() + 1
        ).padStart(
          2,
          "0"
        );


      const day =
        String(
          startDate.getDate()
        ).padStart(
          2,
          "0"
        );


      article.innerHTML = `

        <a
          href="event-detail.html?id=${encodeURIComponent(event.id)}"
        >

          <div class="home-event-date">

            <span class="home-event-month">
              ${month}
            </span>

            <span class="home-event-day">
              ${day}
            </span>

          </div>


          <div class="home-event-content">

            <span class="home-event-label">
              EVENT
            </span>


            <h3>
              ${event.title || ""}
            </h3>


            ${
              event.place
                ? `
                  <p class="home-event-place">
                    ${event.place}
                  </p>
                `
                : ""
            }


            <span class="home-event-link">
              VIEW EVENT →
            </span>

          </div>

        </a>

      `;


      homeEventList.appendChild(
        article
      );

    }
  );

}