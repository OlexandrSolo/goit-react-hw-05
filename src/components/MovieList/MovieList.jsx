import PropTypes from "prop-types";
import MovieCard from "../MovieCard/MovieCard";

export default function MovieList({ movies, onClick }) {
  const onClickCard = (evt) => {
    onClick(evt.target);
  };
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id} onClick={onClickCard}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
