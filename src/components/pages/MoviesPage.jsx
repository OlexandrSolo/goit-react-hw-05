import { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";
import getSearchMovie from "../Service/searchMovie-api";
import MovieList from "../MovieList/MovieList";
import style from "../pages/MoviesPage.module.css";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    if (form.elements.searchMovie.value.trim() === "") {
      return toast("What? You must entered text", {
        icon: "🔎",
      });
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
      <form
        onSubmit={handleSubmit}
        className={style.searchForm}
        autoComplete="off"
      >
        <div className={style.group}>
          <FcSearch className={style.searchIcon} />
          <input
            type="text"
            id="searchMovie"
            name="searchMovie"
            className={style.formField}
            placeholder="Search Movie"
          />
        </div>
      </form>
      <Toaster position="bottom-center" reverseOrder={false} />
      {list.length > 0 && <MovieList movies={list} />}
    </div>
  );
}
