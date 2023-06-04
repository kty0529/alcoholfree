import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./pages/Main/Main";

// reset css
import "./assets/scss/reset.scss";

// vendor
import "material-icons/iconfont/material-icons.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
