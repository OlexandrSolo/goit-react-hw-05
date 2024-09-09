import getDefaultMoviesList from "../Service/trendingMovies-api";
import { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";
import style from "../pages/HomePage.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loading from "../Loading/Loading";

export default function HomePage() {
  const [defaultList, setDefaultList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMoviesList() {
      try {
        setLoading(true);
        const movieList = await getDefaultMoviesList();
        setDefaultList(movieList.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getMoviesList();
  }, []);

  return (
    <>
      {loading && <Loading />}
      {error && <ErrorMessage />}
      <h1 className={style.title}>Trending today</h1>
      {defaultList.length > 0 && <MovieList movies={defaultList} />}
    </>
  );
}
