import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const element = document.getElementById("root") as HTMLElement;

const root = createRoot(element);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
