import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './components/Nav';
import AboutMe from './views/AboutMe';
import Contact from './views/Contact';
import Home from './views/Home';
import Project from './views/Project';
import Thanks from './views/Thanks';
import {ABOUT_ME, CONTACT, HOME, PROJECT, THANKS} from './config/routes';

export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path={ABOUT_ME}>
            <AboutMe />
          </Route>
          <Route path={CONTACT}>
            <Contact />
          </Route>
          <Route path={PROJECT}>
            <Project />
          </Route>
          <Route path={THANKS}>
            <Thanks />
          </Route>
          <Route path={HOME} exact> 
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}