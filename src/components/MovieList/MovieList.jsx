import PropTypes from "prop-types";
import MovieCard from "../MovieCard/MovieCard";

export function MovieList({ movies }) {
  console.log(movies);
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
