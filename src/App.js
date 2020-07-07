import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.css";
import M from "materialize-css/dist/js/materialize.min.js";
import NavB from "./components/layout/Navbar";
import Foot from "./components/layout/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Work from "./components/pages/Work";
import Skills from "./components/pages/Skills";
import Contact from "./components/pages/Contact";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Router>
      <div className="wrapper">
        <NavB />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/contact" component={Contact} />
        </Switch>

        <Foot />
      </div>
    </Router>
  );
};

export default App;
