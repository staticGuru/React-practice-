import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Search from "./Search";

import Register from "./Register";
// import Country from "./Country";
import Dropdown from "./Dropdown";
import Country from "./Country";
import MultiStepForm from "./MultiStepForm";

import FetchApi from "./FetchApi";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Register} />
        <Route exact path={"/Search"} component={Search} />
        <Route path={"/Search/:id"} component={Search} />
        <Route path={"/dropdown"} component={Dropdown} />
        <Route path={"/country"} component={Country} />
        <Route path={"/multistepform"} component={MultiStepForm} />
        <Route path={"/autosuggestion"} component={FetchApi} />
      </Switch>
    </Router>
  );
};

export default App;
