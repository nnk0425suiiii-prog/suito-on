/* ==================================================
   EVENT DETAIL

   URL

   event-detail.html?id=イベントID

   のIDを読み取り、

   event-data.js の calendarEvents から
   該当イベントを表示
================================================== */


/* ==================================================
   ELEMENTS
================================================== */

const eventDetail =
  document.getElementById(
    "eventDetail"
  );


const eventNotFound =
  document.getElementById(
    "eventNotFound"
  );


const eventDetailMeta =
  document.getElementById(
    "eventDetailMeta"
  );


const eventDetailDate =
  document.getElementById(
    "eventDetailDate"
  );


const eventDetailTitle =
  document.getElementById(
    "eventDetailTitle"
  );


const eventDetailLocation =
  document.getElementById(
    "eventDetailLocation"
  );


const eventDetailImageSection =
  document.getElementById(
    "eventDetailImageSection"
  );


const eventDetailImage =
  document.getElementById(
    "eventDetailImage"
  );


const eventDetailContent =
  document.getElementById(
    "eventDetailContent"
  );


/* INFORMATION */

const eventInfoDate =
  document.getElementById(
    "eventInfoDate"
  );


const eventInfoPlace =
  document.getElementById(
    "eventInfoPlace"
  );


const eventAddressRow =
  document.getElementById(
    "eventAddressRow"
  );


const eventInfoAddress =
  document.getElementById(
    "eventInfoAddress"
  );


const eventMapRow =
  document.getElementById(
    "eventMapRow"
  );


const eventInfoMap =
  document.getElementById(
    "eventInfoMap"
  );


const eventOfficialRow =
  document.getElementById(
    "eventOfficialRow"
  );


const eventInfoOfficial =
  document.getElementById(
    "eventInfoOfficial"
  );



/* ==================================================
   GET EVENT ID

   ?id=xxxxxxxx
================================================== */

const params =
  new URLSearchParams(
    window.location.search
  );


const eventId =
  params.get(
    "id"
  );



/* ==================================================
   FIND EVENT
================================================== */

let currentEvent =
  null;


if (
  typeof calendarEvents !==
  "undefined"
  &&
  Array.isArray(calendarEvents)
) {

  currentEvent =
    calendarEvents.find(
      event => {

        return (
          event.id ===
          eventId
        );

      }
    );

}



/* ==================================================
   DATE FORMAT

   2026-09-12
   ↓
   2026.09.12
================================================== */

function formatDetailDate(
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
   FULL DATE

   1日
   2026.09.12

   複数日
   2026.09.12 — 09.13
================================================== */

function getDetailDate(
  event
) {


  if (!event.startDate) {

    return "";

  }


  const start =
    formatDetailDate(
      event.startDate
    );


  /* endDateなし */

  if (!event.endDate) {

    return start;

  }


  /* 同じ日 */

  if (
    event.startDate ===
    event.endDate
  ) {

    return start;

  }


  /* 複数日 */

  const endParts =
    event.endDate.split(
      "-"
    );


  const endMonth =
    endParts[1] || "";


  const endDay =
    endParts[2] || "";


  return (
    `${start} — ${endMonth}.${endDay}`
  );

}



/* ==================================================
   TYPE LABEL
================================================== */

function getDetailTypeLabel(
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

function getDetailTypeClass(
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

function getDetailStatusHTML(
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
   NOT FOUND
================================================== */

function showEventNotFound() {


  if (eventDetail) {

    eventDetail.hidden =
      true;

  }


  if (eventNotFound) {

    eventNotFound.hidden =
      false;

  }


  document.title =
    "EVENT | すいとおん。";

}



/* ==================================================
   DISPLAY EVENT
================================================== */

function displayEventDetail(
  event
) {


  /* ==================================================
     PAGE TITLE
  ================================================== */

  document.title =
    `${event.title} | EVENT | すいとおん。`;



  /* ==================================================
     TYPE
  ================================================== */

  const typeLabel =
    getDetailTypeLabel(
      event.type
    );


  const typeClass =
    getDetailTypeClass(
      event.type
    );


  const statusHTML =
    getDetailStatusHTML(
      event.status
    );


  eventDetailMeta.innerHTML = `

    <span
      class="
        event-type-label
        ${typeClass}
      "
    >
      ${typeLabel}
    </span>

    ${statusHTML}

  `;



  /* ==================================================
     DATE
  ================================================== */

  const dateText =
    getDetailDate(
      event
    );


  eventDetailDate.textContent =
    dateText;


  eventInfoDate.textContent =
    dateText;



  /* ==================================================
     TITLE
  ================================================== */

  eventDetailTitle.textContent =
    event.title;



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


  eventDetailLocation.textContent =
    locationText;



  /* ==================================================
     IMAGE
  ================================================== */

  if (
    event.image
  ) {


    eventDetailImage.innerHTML = `

      <img
        src="${event.image}"
        alt="${event.title}"
      >

    `;


  } else {


    /* 画像がない場合 */

    eventDetailImage.innerHTML = `

      <div
        class="
          event-detail-no-image
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

  }



  /* ==================================================
     CONTENT
  ================================================== */

  if (
    event.content
  ) {


    eventDetailContent.innerHTML =
      event.content;


  } else if (
    event.description
  ) {


    eventDetailContent.innerHTML = `

      <p>
        ${event.description}
      </p>

    `;


  } else {


    eventDetailContent.innerHTML =
      "";

  }



  /* ==================================================
     PLACE
  ================================================== */

  if (
    event.place
  ) {


    eventInfoPlace.innerHTML = `

      <p>
        ${event.place}
      </p>

      ${
        event.prefecture

          ? `

            <span>
              ${event.prefecture}
            </span>

          `

          : ""
      }

    `;


  } else {


    eventInfoPlace.textContent =
      "未定";

  }



  /* ==================================================
     ADDRESS
  ================================================== */

  if (
    event.address
  ) {


    eventAddressRow.hidden =
      false;


    eventInfoAddress.textContent =
      event.address;


  } else {


    eventAddressRow.hidden =
      true;

  }



  /* ==================================================
     MAP
  ================================================== */

  if (
    event.mapUrl
  ) {


    eventMapRow.hidden =
      false;


    eventInfoMap.innerHTML = `

      <a
        href="${event.mapUrl}"
        target="_blank"
        rel="noopener noreferrer"
        class="event-info-link"
      >
        地図・会場情報を見る →
      </a>

    `;


  } else {


    eventMapRow.hidden =
      true;

  }



  /* ==================================================
     OFFICIAL
  ================================================== */

  if (
    event.url
  ) {


    eventOfficialRow.hidden =
      false;


    eventInfoOfficial.innerHTML = `

      <a
        href="${event.url}"
        target="_blank"
        rel="noopener noreferrer"
        class="event-info-link"
      >
        公式情報を見る →
      </a>

    `;


  } else {


    eventOfficialRow.hidden =
      true;

  }

}



/* ==================================================
   INITIAL DISPLAY
================================================== */

if (
  !eventId
  ||
  !currentEvent
) {


  showEventNotFound();


} else {


  displayEventDetail(
    currentEvent
  );

}

/* ==================================================
   EVENT LIKE
================================================== */

const EVENT_LIKE_API =
  "https://suito-on-api.nnk0425suiiii.workers.dev";


const eventLikeButton =
  document.getElementById(
    "eventLikeButton"
  );

const eventLikeCount =
  document.getElementById(
    "eventLikeCount"
  );

const eventLikeHeart =
  document.getElementById(
    "eventLikeHeart"
  );


/* ==================================================
   EVENT DATA
================================================== */

function getEventLikeData() {

  if (!currentEvent) {
    return null;
  }


  return {

    content_id:
      `event-${currentEvent.id}`,

    content_type:
      "EVENT",

    title:
      currentEvent.title,

    url:
      `event-detail.html?id=${currentEvent.id}`

  };

}


/* ==================================================
   LOCAL STORAGE
================================================== */

function getEventLikeStorageKey(
  contentId
) {

  return `suito-on-liked-${contentId}`;

}


function hasLikedEvent(
  contentId
) {

  return (
    localStorage.getItem(
      getEventLikeStorageKey(
        contentId
      )
    )
    ===
    "true"
  );

}


/* ==================================================
   UI
================================================== */

function setEventLikedUI(
  liked
) {

  if (!eventLikeButton) {
    return;
  }


  if (liked) {

    eventLikeButton.classList.add(
      "liked"
    );

    eventLikeHeart.textContent =
      "♥";

  } else {

    eventLikeButton.classList.remove(
      "liked"
    );

    eventLikeHeart.textContent =
      "♡";

  }

}


/* ==================================================
   LOAD LIKE COUNT
================================================== */

async function loadEventLikeCount() {

  const data =
    getEventLikeData();


  if (
    !data
    ||
    !eventLikeCount
  ) {
    return;
  }


  try {

    const response =
      await fetch(
        `${EVENT_LIKE_API}/likes?content_id=${encodeURIComponent(data.content_id)}`
      );


    if (!response.ok) {

      throw new Error(
        "いいね数を取得できませんでした"
      );

    }


    const result =
      await response.json();


    eventLikeCount.textContent =
      Number(result.likes) || 0;


    setEventLikedUI(
      hasLikedEvent(
        data.content_id
      )
    );


  } catch (error) {

    console.error(
      "Event like count error:",
      error
    );

  }

}


/* ==================================================
   ADD LIKE
================================================== */

async function addEventLike() {

  const data =
    getEventLikeData();


  if (
    !data
    ||
    !eventLikeButton
  ) {
    return;
  }


  if (
    hasLikedEvent(
      data.content_id
    )
  ) {

    setEventLikedUI(true);

    return;

  }


  eventLikeButton.disabled =
    true;


  try {

    const response =
      await fetch(
        `${EVENT_LIKE_API}/like`,
        {

          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body:
            JSON.stringify(data)

        }
      );


    if (!response.ok) {

      throw new Error(
        "いいねできませんでした"
      );

    }


    const result =
      await response.json();


    eventLikeCount.textContent =
      Number(result.likes) || 0;


    localStorage.setItem(
      getEventLikeStorageKey(
        data.content_id
      ),
      "true"
    );


    setEventLikedUI(true);


  } catch (error) {

    console.error(
      "Event like error:",
      error
    );


  } finally {

    eventLikeButton.disabled =
      false;

  }

}


/* ==================================================
   EVENT
================================================== */

if (eventLikeButton) {

  eventLikeButton.addEventListener(
    "click",
    addEventLike
  );

}


loadEventLikeCount();