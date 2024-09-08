import { useEffect, useState } from "react";
import { NavLink, useParams, Outlet } from "react-router-dom";
import getMovieById from "../Service/movieDetails-api";

export default function MovieDetailsPage() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieById() {
      try {
        const movieQuery = await getMovieById(movieId);
        setMovie(movieQuery);
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
    fetchMovieById();
  }, [movieId]);

  return (
    <div>
      <NavLink to="/movies">Go Back</NavLink>
      <h1>About Movie</h1>
      {movie && (
        <>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${
                movie.poster_path && movie.poster_path
              }`}
              alt={`${movie.original_title}`}
            />
          </div>
          <p>{movie.original_title}</p>
          <p>{movie.vote_average}</p>
          <p>Rating: {movie.overview}</p>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
          <Outlet />
        </>
      )}
    </div>
  );
}

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
