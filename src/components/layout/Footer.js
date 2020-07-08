import React from "react";
import "./Footer.css";

const Foot = () => {
  return (
    <footer className="page-footer" id="footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Akoliwe Mtukuse's Portfolio</h5>
            <a className="grey-text " href="#!">
              https://github.com/AkoliweMtukuse/
            </a>
            <br></br>
            <a className="grey-text " href="mailto:akoliwemtukuse@gmail.com">
              akoliwemtukuse@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2020 Copyright
          <a className="grey-text text-lighten-4 right" href="#!">
            Made by AKOLIWE MTUKUSE
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Foot;
