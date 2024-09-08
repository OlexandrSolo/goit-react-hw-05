import { useEffect, useState } from "react";
import getSearchMovie from "../Service/searchMovie-api";
import MovieList from "../MovieList/MovieList";
import getMovieById from "../Service/movieDetails-api";
import { func } from "prop-types";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);
  const [idMovie, setIdMovie] = useState(0);
  const [movie, setMovie] = useState(null);

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
        setQuery("");
      }
    }
    getMovie();
  }, [query]);

  useEffect(() => {
    if (idMovie === 0) {
      return;
    }
    async function fetchMovieById() {
      try {
        const movie = await getMovieById(idMovie);
        console.log(movie);
        setMovie(movie);
      } catch (error) {
        console.log(error);
      } finally {
        setIdMovie(0);
      }
    }
    fetchMovieById();
  }, [idMovie]);

  const onClickMovieCard = (id) => {
    setIdMovie(id);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchMovie">Search</label>
        <input type="text" id="searchMovie" name="searchMovie" />
      </form>

      {list.length > 0 && (
        <MovieList movies={list} onClick={onClickMovieCard} />
      )}
    </div>
  );
}
