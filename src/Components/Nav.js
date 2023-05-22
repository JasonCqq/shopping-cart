import React from "react";
import "../Styles/Nav.css";

function Nav() {
  return (
    <div>
      <nav className="navBar">
        <a href="#" className="logo">
          <span>The Cap Shop</span>
        </a>
        <input id="bmenub" type="checkbox" class="show"></input>
        <label for="bmenub" class="burger pseudo button">
          MENU
        </label>
        <div class="menu">
          <a href="#">HOME</a>
          <a href="#">STORE</a>
          <a href="#">CART</a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
