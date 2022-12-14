import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav class="navbar navbar-expand-sm navbar-dark sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="/purchase">Distributed Danishes</a>
        <ul class="navbar-nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link" href="/home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/purchase">Purchase</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/cart">Shopping Cart</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

/*
      <>
        <nav className="navbar">
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
              Distributed Danishes
              <i className="fas fa-code"></i>
            </NavLink>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                    exact
                    to="/home"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                    exact
                    to="/about"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                    exact
                    to="/purchase"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                >
                  Purchase
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                    exact
                    to="/cart"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                >
                  Shopping Cart
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </nav>
      </>
*/