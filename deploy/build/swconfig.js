this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("Notification_App").then((data) => {
      data.addAll(["../src/index.js", "./index.html"]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.responedWith(
      caches.match(event.request).then((data) => {
        console.log("data from service worker", data);
        if (data) {
          return data;
        }
      })
    );
  }
});
