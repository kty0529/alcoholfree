import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import Detail from "./pages/Detail/Detail";

// common
import "./assets/scss/reset.scss";
import "./assets/scss/common.scss";

// vendor
import "material-icons/iconfont/material-icons.css";

const router = createBrowserRouter([
  {
    path: "alcoholfree",
    element: <Main />,
  },
  {
    path: "alcoholfree/:page_id",
    element: <Detail />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <Header />

      <RouterProvider router={router} />

      <Footer />
    </div>
  </React.StrictMode>
);
