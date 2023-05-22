import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Nav />
    <Home />
  </React.StrictMode>
);
