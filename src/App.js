import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import './App.css';
import Home from './components/';
import Education from "./components/Eucation";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <CssBaseline />
      <HashRouter basename="/">
        <Route exact path="/" component={Home} />
        <Route path="/education" component={Education} />
        <Route path="/skills" component={Skills} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contacts" component={Contacts} />
      </HashRouter>
    </>
  );
}

export default App;
