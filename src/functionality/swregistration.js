export default function RegisterSW() {
  let swConfig = `${process.env.PUBLIC_URL}/swconfig.js`;
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register(swConfig).then((app) => {
      console.log(navigator.serviceWorker, "service worker registration", app);
    });
  }
}
