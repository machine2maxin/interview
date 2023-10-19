import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Token from "./Token";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} /> {/* 👈 Renders at /app/ */}
      <Route path="/token" element={<Token />} /> {/* 👈 Renders at /app/ */}
    </Routes>
  </BrowserRouter>
);