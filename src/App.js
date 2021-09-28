import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/organisms/Navbar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Download from "./components/pages/Download";
import Features from "./components/pages/Features";
import Home from "./components/pages/Home";
const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/features" component={Features}></Route>
        <Route exact path="/download" component={Download}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/about" component={About}></Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </>
  );
};

export default App;
