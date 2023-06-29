import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import Detail from "./pages/Detail/Detail";

// vendor
import "material-icons/iconfont/material-icons.css";

// assets
import "./assets/scss/reset.scss";
import "./assets/scss/common.scss";

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <Header />

        <RouterProvider router={router} />

        <Footer />
      </div>
    </QueryClientProvider>
  </React.StrictMode>
);
