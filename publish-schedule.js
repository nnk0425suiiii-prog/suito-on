/* ==================================================
   SUI TO ON. WEEKLY PUBLISH SCHEDULE

   予約公開したい新規コンテンツに
     queue: true
   を付けるだけで、各ジャンルの開始日時から
   上から順番に1週間ずつずらして公開します。

   queue記事の date / datetime は自動で公開日に更新されるので、
   新規予約記事では日付を手入力しなくてもOKです。

   BLOG  : Tuesday 10:00 JST  (start 2026-09-08)
   GUIDE : Thursday 10:00 JST (start 2026-09-10)
   COMIC : Sunday 10:00 JST   (start 2026-09-06)

   既存コンテンツ（queueなし）は今まで通り表示。
================================================== */

const SUI_TO_ON_PUBLISH_SCHEDULE = {
  blog:  "2026-09-08T10:00:00+09:00",
  guide: "2026-09-10T10:00:00+09:00",
  comic: "2026-09-06T10:00:00+09:00"
};

function formatPublishDateJP(date) {
  const parts = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(date);

  const values = Object.fromEntries(
    parts.map(part => [part.type, part.value])
  );

  return `${values.year}.${values.month}.${values.day}`;
}

function formatPublishDateISO(date) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(date);

  const values = Object.fromEntries(
    parts.map(part => [part.type, part.value])
  );

  return `${values.year}-${values.month}-${values.day}`;
}

function applyWeeklyPublishQueue(items, type) {
  if (!Array.isArray(items)) return items;

  const start = SUI_TO_ON_PUBLISH_SCHEDULE[type];
  if (!start) return items;

  const startTime = new Date(start).getTime();
  const oneWeek = 7 * 24 * 60 * 60 * 1000;
  let queueIndex = 0;

  items.forEach(item => {
    if (!item || item.queue !== true) return;

    if (!item.publishDate) {
      item.publishDate = new Date(
        startTime + (queueIndex * oneWeek)
      ).toISOString();
    }

    const publishDate = new Date(item.publishDate);

    if (!Number.isNaN(publishDate.getTime())) {
      item.datetime = formatPublishDateISO(publishDate);
      item.date = formatPublishDateJP(publishDate);
    }

    queueIndex += 1;
  });

  return items;
}

function isContentPublished(item, now = new Date()) {
  if (!item) return false;

  // 既存記事は予約日時がなければ常に公開
  if (!item.publishDate) return true;

  const publishTime = new Date(item.publishDate).getTime();
  if (Number.isNaN(publishTime)) return true;

  return now.getTime() >= publishTime;
}

function syncComicComingSoon(items) {
  if (!Array.isArray(items)) return;

  items.forEach(item => {
    if (item && item.queue === true) {
      item.comingSoon = !isContentPublished(item);
    }
  });
}
