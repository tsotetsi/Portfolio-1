import React, { Component, Fragment } from "react";
import "./Parallax.css";
import Css from "../pics/css.png";
import Html from "../pics/html-5.png";
import Java from "../pics/java.png";
import Mysql from "../pics/mysql.png";
import ReactPic from "../pics/react.png";
import Python from "../pics/python.png";
import Pic1 from "../pics/pic1.jpg";
import Pic2 from "../pics/pic2.jpg";
import Pic3 from "../pics/black3.jpg";
import Pic4 from "../pics/black.jpg";
import Pic5 from "../pics/black2.jpg";

class ParallaxItem extends Component {
  render() {
    return (
      <Fragment>
        <div className="parallax-container">
          <div className="parallax-container">
            <img src={Pic1} alt="pic1" />
          </div>
        </div>
        <div className="section white">
          <div className="row container">
            <h2 className="header">About</h2>
            <p className="grey-text text-darken-3 lighten-3">
              " I'm an exceptional peer, I always going the extra mile to
              complete MY work and I give 100 % to everything I do. My passion
              and effort shows in the work I delivers and I am always willing to
              help others where I can. I am a hard worker, disciplined and
              punctual too. I am able to see things from different perspectives
              therefore find different solutions for problems. My character
              reflects confidence and humility at the same time, I have a great
              way with people and I works just as well in a group as I do
              individually. "
            </p>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img src={Pic2} alt="pic1" />
          </div>
        </div>
        <div className="section white">
          <div className="row container">
            <h2 className="header">Skills</h2>
            <p className="grey-text text-darken-3 lighten-3">
              " These are the skills that I have acquired in the past 6
              months... "<br></br>
              <img id="skills_pics" src={Html} alt="html-p" />
              <img id="skills_pics" src={Css} alt="css-p" />
              <img id="skills_pics" src={Java} alt="javascript-p" />
              <img id="skills_pics" src={ReactPic} alt="react-p" />
              <img id="skills_pics" src={Python} alt="python-p" />
              <img id="skills_pics" src={Mysql} alt="mysql-p" />
            </p>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img src={Pic4} alt="pic1" />
          </div>
        </div>
        <div className="section white">
          <div className="row container">
            <h2 className="header">Work</h2>
            <p className="grey-text text-darken-3 lighten-3">
              "Take a look to at the work I've done during my time at
              Lifechoices Academy ... "
              <div>
                <ul class="collapsible popout">
                  <li>
                    <div class="collapsible-header">
                      <i class="material-icons">place</i>Github Finder
                    </div>
                    <div class="collapsible-body">
                      <span>
                        <a
                          className="waves-effect-green waves-dark"
                          href="https://github.com/AkoliweMtukuse/React-App"
                        >
                          Go <i class=" material-icons">arrow_forward</i>
                        </a>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="collapsible-header">
                      <i class="material-icons">place</i>Contact Keeper
                    </div>
                    <div class="collapsible-body">
                      <span>
                        <a
                          className="waves-effect-green waves-dark"
                          href="https://github.com/AkoliweMtukuse/contact-keeper"
                        >
                          Go <i class=" material-icons">arrow_forward</i>
                        </a>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="collapsible-header">
                      <i class="material-icons">place</i>System Logs
                    </div>
                    <div class="collapsible-body">
                      <span>
                        <a
                          className="waves-effect-green waves-dark"
                          href="https://github.com/AkoliweMtukuse/React-Redux"
                        >
                          Go <i class="material-icons">arrow_forward</i>
                        </a>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </p>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img src={Pic5} alt="pic1" />
          </div>
        </div>
        <div className="section white">
          <div className="row container">
            <h2 className="header">Contact</h2>
            <p className="grey-text text-darken-3 lighten-3">
              " If you have any questions to ask or any other proporsitions, you
              can keep in touch with me here ..."
              <div>
                <a
                  className="waves-effect waves-light btn modal-trigger"
                  href="#modal1"
                >
                  Write to Akoliwe
                </a>
                <div id="modal1" className="modal bottom-sheet">
                  <div className="modal-content">
                    <h2>Write to Akoliwe</h2>
                    <div class="row">
                      <form class="col s12">
                        <div class="row">
                          <div class="input-field col s6">
                            <i class="material-icons prefix">account_circle</i>
                            <input
                              id="icon_prefix"
                              type="text"
                              class="validate"
                            />
                            <label for="icon_prefix">First Name</label>
                          </div>
                          <div class="input-field col s6">
                            <i class="material-icons prefix">phone</i>
                            <input
                              id="icon_prefix"
                              type="text"
                              class="validate"
                            />
                            <label for="icon_prefix">Cellphone Number</label>
                          </div>
                        </div>
                        <div class="row">
                          <form class="col s12">
                            <div class="row">
                              <div class="input-field col s12">
                                <i class="material-icons prefix">email</i>
                                <input
                                  id="email"
                                  type="email"
                                  class="validate"
                                />
                                <label for="email">Email</label>
                                <span
                                  class="helper-text"
                                  data-error="wrong"
                                  data-success="right"
                                >
                                  write your email here
                                </span>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div class="row">
                          <form class="col s12">
                            <div class="row">
                              <div class="input-field col s6">
                                <i class="material-icons prefix">mode_edit</i>
                                <textarea
                                  id="icon_prefix2"
                                  class="materialize-textarea"
                                ></textarea>
                                <label for="icon_prefix2">Message</label>
                              </div>
                            </div>
                          </form>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <a
                      href="#!"
                      className="modal-close waves-effect waves-green btn-flat"
                    >
                      <i class="material-icons">send</i>
                    </a>
                  </div>
                </div>
              </div>
            </p>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img src={Pic3} alt="pic1" />
          </div>
        </div>
      </Fragment>
    );
  }
}
export default ParallaxItem;
