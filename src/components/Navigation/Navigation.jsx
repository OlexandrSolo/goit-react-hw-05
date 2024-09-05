import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function Navigation() {
  return (
    <div>
      <nav>
        <NavLink to="/homepage">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes> */}
    </div>
  );
}
