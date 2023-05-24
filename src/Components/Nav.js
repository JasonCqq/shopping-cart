import React from "react";
import "../Styles/Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="navBar">
        <a href="#" className="logo">
          The Cap Shop
        </a>
        <input id="bmenub" type="checkbox" className="show"></input>
        <label htmlFor="bmenub" className="burger pseudo button">
          MENU
        </label>
        <div className="menu">
          <Link to={"/"}>HOME</Link>
          <Link to={"Store"}>STORE</Link>
          <a>ABOUT</a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
