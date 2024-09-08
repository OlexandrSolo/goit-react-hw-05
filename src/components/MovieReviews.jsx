import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getMovieReviews from "./Service/movieReviews-api";

export default function MovieReviews() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieById() {
      try {
        const movieInfo = await getMovieReviews(movieId);
        setReviews(movieInfo);
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
    fetchMovieById();
  }, [movieId]);
  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <p>{review.author}</p>
          <p>{review.content}</p>
          <a href={review.url}>Link</a>
        </li>
      ))}
    </ul>
  );
}
