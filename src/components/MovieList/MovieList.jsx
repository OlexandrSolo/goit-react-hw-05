import PropTypes from "prop-types";
import MovieCard from "../MovieCard/MovieCard";

export default function MovieList({ movies, onClick }) {
  const onClickCard = (id) => {
    onClick(id);
  };
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id} onClick={() => onClickCard(movie.id)}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
