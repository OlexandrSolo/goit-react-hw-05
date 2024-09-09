import getDefaultMoviesList from "../Service/trendingMovies-api";
import { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";
import style from "../pages/HomePage.module.css";

export default function HomePage() {
  const [defaultList, setDefaultList] = useState([]);

  useEffect(() => {
    async function getMoviesList() {
      try {
        const movieList = await getDefaultMoviesList();
        setDefaultList(movieList.results);
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
    getMoviesList();
  }, []);

  return (
    <>
      <h1 className={style.title}>Trending today</h1>
      {defaultList.length > 0 && <MovieList movies={defaultList} />}
    </>
  );
}
