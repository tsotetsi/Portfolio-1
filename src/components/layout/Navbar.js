import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

const NavB = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">
            <i className="material-icons" id="font_download">
              font_download
            </i>
            <i className="material-icons" id="funtions">
              functions
            </i>
            Akoliwe
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/">
                <i className="material-icons">home</i>
              </Link>
            </li>
            <li>
              <Link to="/work">
                <i className="material-icons">remove_red_eye</i>
              </Link>
            </li>
            <li>
              <Link to="/skills">
                <i className="material-icons">fingerprint</i>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <i className="material-icons">email</i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavB;
