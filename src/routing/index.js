import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Signup, NotificationSender } from "../components";
import { messaging } from "../credentials/firebase";

const NavigationManager = () => {
  messaging.onMessage((payload) => {
    console.log("Message received. ", payload);
  });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/NotficationSender" element={<NotificationSender />} />
      </Routes>
    </Router>
  );
};

export default NavigationManager;
