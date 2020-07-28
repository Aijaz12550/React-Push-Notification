export const sendNotification = (payload, token) => {
  console.log("payload", payload, "token", token);
  fetch(`http://localhost:8000/${token}/send/notification`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin":"*"
    },
    body: JSON.stringify({ payload }),
  })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};
