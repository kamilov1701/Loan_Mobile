import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // default export bo'lishi kerak
import "./index.css"; // TailwindCSS yoki umumiy CSS

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);