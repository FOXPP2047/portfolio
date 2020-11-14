import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import './App.css';
import Home from './components/';
import Education from "./components/Eucation";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";

// import Contacts from "./components/Contacts";
import Page404 from "./components/Page404";

function App() {
  return (
    <>
      <CssBaseline />
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/education" component={Education} />
          <Route path="/skills" component={Skills} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio" component={Portfolio} />
          <Route component={Page404} />
        </Switch>
        {/* <Route path="/contacts" component={Contacts} /> */}
      </HashRouter>
    </>
  );
}

export default App;
