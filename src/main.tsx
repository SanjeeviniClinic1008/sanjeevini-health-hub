import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import React from "react";
import ScrolltoTop from "./components/ScrolltoTop.tsx";

const rawBase = import.meta.env.BASE_URL || "/";
const basename = rawBase.replace(/\/$/, ""); // "/sanjeevini-health-hub" or ""

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
        <ScrolltoTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);