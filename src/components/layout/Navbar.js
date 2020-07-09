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
              <a href="#about">
                <i className="material-icons">home</i>
              </a>
            </li>
            <li>
              <a href="#skill">
                <i className="material-icons">remove_red_eye</i>
              </a>
            </li>
            <li>
              <a href="#work">
                <i className="material-icons">fingerprint</i>
              </a>
            </li>
            <li>
              <a href="#contact">
                <i className="material-icons">email</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavB;
