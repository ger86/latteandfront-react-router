import React from "react";
import {NavLink} from "react-router-dom";
import {ABOUT_ME, CONTACT, HOME} from '../config/routes';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={HOME} activeClassName="nav-active">Inicio</NavLink>
        </li>
        <li>
          <NavLink to={ABOUT_ME} activeClassName="nav-active">Sobre mí</NavLink>
        </li>
        <li>
          <NavLink to={CONTACT} activeClassName="nav-active">Contacto</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
