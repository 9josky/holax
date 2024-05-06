import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import "./assets/themify-icon/themify-icons.css";
import "./assets/simple-line-icon/simple-line-icons.css";
import "./assets/font-awesome/css/all.css";
import "./assets/elagent/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/main.css";
import "./assets/responsive.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import "popper.js";
import Popper from "popper.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
