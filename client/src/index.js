import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./style.scss";
import PropertieProvider from "./useContext/StateProperties";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <PropertieProvider>
      <App />
    </PropertieProvider>
  </React.StrictMode>
);
