import { useEffect, useState } from "react";
import { NavLink, useParams, Outlet } from "react-router-dom";
import getMovieById from "../Service/movieDetails-api";
import style from "./MovieDetailsPage.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loading from "../Loading/Loading";

export default function MovieDetailsPage() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieById() {
      try {
        setLoading(true);
        const movieQuery = await getMovieById(movieId);
        setMovie(movieQuery);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieById();
  }, [movieId]);

  return (
    <div className={style.container}>
      <NavLink to="/movies">Go Back</NavLink>
      <h1 className={style.title}>About Movie</h1>
      {loading && <Loading />}
      {error && <ErrorMessage />}

      {movie && (
        <div>
          <div className={style.cardWrapper}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${
                  movie.poster_path && movie.poster_path
                }`}
                alt={`${movie.original_title}`}
              />
            </div>
            <div className={style.movieDescription}>
              <p className={style.movieTitle}>{movie.original_title}</p>
              <p> Rating: {movie.vote_average}</p>
              <p>{movie.overview}</p>
            </div>
            <ul>
              <li>
                <NavLink to="cast">Cast</NavLink>
              </li>
              <li>
                <NavLink to="reviews">Reviews</NavLink>
              </li>
            </ul>
          </div>
          <Outlet />
        </div>
      )}
    </div>
  );
}
