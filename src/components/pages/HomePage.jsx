import Navigation from "../Navigation/Navigation";
import getDefaultMoviesList from "../Service/movie-api";
import { useEffect, useState } from "react";

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
    <header>
      <p>Home</p>
      <Navigation />
    </header>
  );
}
