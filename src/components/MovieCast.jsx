import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getMovieCast from "./Service/movieCredits-api";

export default function MovieCast() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [casts, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieById() {
      try {
        const movieInfo = await getMovieCast(movieId);
        setCast(movieInfo.cast);
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
    fetchMovieById();
  }, [movieId]);
  return (
    <ul>
      {casts.map((cast) => (
        <li key={cast.id}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${
                cast.profile_path && cast.profile_path
              }`}
              alt={`${cast.original_name}`}
              width="150px"
            />
          </div>
          <p>{cast.name}</p>
          <p>{cast.character}</p>
        </li>
      ))}
    </ul>
  );
}
