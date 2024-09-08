import { useEffect, useState } from "react";
import getSearchMovie from "../Service/searchMovie-api";
import MovieList from "../MovieList/MovieList";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    if (form.elements.searchMovie.value.trim() === "") {
      return;
    }
    setQuery(form.elements.searchMovie.value);
    form.reset();
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getMovie() {
      try {
        const movie = await getSearchMovie(query);
        setList(movie.results);
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
    getMovie();
  }, [query]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchMovie">Search</label>
        <input type="text" id="searchMovie" name="searchMovie" />
      </form>

      {list.length > 0 && <MovieList movies={list} />}
    </div>
  );
}
