import { NavLink } from "react-router-dom";
import clsx from "clsx";
import style from "../Navigation/Navigation.module.css";

const getNavLinkClass = (props) => {
  return clsx(style.link, props.isActive && style.active);
};

export default function Navigation() {
  return (
    <header className={style.container}>
      <nav>
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={getNavLinkClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
