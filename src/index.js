import { EuiProvider } from "@elastic/eui";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@elastic/eui/dist/eui_theme_light.css";
import "@elastic/eui/dist/eui_theme_dark.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // USED ELASTIC UI FOR THE WHOLR PROJECT
  <EuiProvider colorMode="dark">
    <App />
  </EuiProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
