import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NavBar from "./components/elements/NavBar/NavBar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
