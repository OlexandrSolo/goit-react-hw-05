import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <>
      <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
      <p>Rating: {movie.vote_average}</p>
    </>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
