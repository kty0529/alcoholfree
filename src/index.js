import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./pages/Main/Main";

// common
import "./assets/scss/reset.scss";
import "./assets/scss/common.scss";

// vendor
import "material-icons/iconfont/material-icons.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
