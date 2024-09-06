import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <>
      <Link>{movie.original_title}</Link>
      <p>Rating: {movie.vote_average}</p>
    </>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

// adult: false;
// backdrop_path: "/cgKZtNSETjXJPkAQ4rasV7dnyQH.jpg";
// genre_ids: (4)[(35, 27, 14, 9648)];
// id: 917496;
// media_type: "movie";
// original_language: "en";
// original_title: "Beetlejuice Beetlejuice";
// overview: "After a family tragedy, three generations of the Deetz family return home to Winter River. Still haunted by Beetlejuice, Lydia's life is turned upside down when her teenage daughter, Astrid, accidentally opens the portal to the Afterlife.";
// popularity: 763.466;
// poster_path: "/kKgQzkUCnQmeTPkyIwHly2t6ZFI.jpg";
// release_date: "2024-09-04";
// title: "Beetlejuice Beetlejuice";
// video: false;
// vote_average: 7.565;
// vote_count: 31;
