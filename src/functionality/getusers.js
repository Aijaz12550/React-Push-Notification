import { db } from "../credentials/firebase";

export const getUsers = (callback) => {
  return db.ref("fcmToken").on("value", (snapshot) => {
    let data = snapshot.val();
    callback(Object.values(data) || []);
  });
};
