import { db, messaging } from "../credentials/firebase";

async function requestforpermision() {
  await messaging
    .requestPermission()
    .then(function () {
      getfcmtoken();
    })
    .catch(function (error) {
      console.error("Unable to get permission to notify.", error);
      alert("Your Notifications Are Disabled");
    });
}
export const getfcmtoken = (user) => {
  messaging
    .requestPermission()
    .then(() => {
      return messaging.getToken();
    })
    .then((token) => {
      db.ref("/fcmToken").child(user).set({ user, token });
      console.log("Token : ", token);
    })
    .catch((err) => {
      requestforpermision();
      console.log(err);
    });
};
