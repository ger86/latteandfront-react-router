import { NavLink } from "react-router-dom";
import { ABOUT_ME, CONTACT, HOME, PROJECTS } from "../config/routes";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to={HOME}
            className={({ isActive }) => (isActive ? " nav-active" : "")}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to={ABOUT_ME}
            className={({ isActive }) => (isActive ? " nav-active" : "")}
          >
            Sobre mí
          </NavLink>
        </li>
        <li>
          <NavLink
            to={PROJECTS}
            className={({ isActive }) => (isActive ? " nav-active" : "")}
          >
            Proyectos
          </NavLink>
        </li>
        <li>
          <NavLink
            to={CONTACT}
            className={({ isActive }) => (isActive ? " nav-active" : "")}
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
