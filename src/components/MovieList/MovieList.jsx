import PropTypes from "prop-types";
import MovieCard from "../MovieCard/MovieCard";
import style from "../MovieList/MovieList.module.css";

export default function MovieList({ movies }) {
  return (
    <ul className={style.movieGallery}>
      {movies.map((movie) => (
        <li key={movie.id} className={style.itemGallery}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
