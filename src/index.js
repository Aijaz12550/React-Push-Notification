import React from "react";
import ReactDOM from "react-dom";
import NavigationManager from "./routing";
import RegisterSW from "./functionality/swregistration";
import "./style/index.css";

ReactDOM.render(
  <React.StrictMode>
    <NavigationManager />
  </React.StrictMode>,
  document.getElementById("root")
);
RegisterSW();
