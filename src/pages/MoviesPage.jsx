import { useEffect, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";
import getSearchMovie from "../components//Service/searchMovie-api";
import MovieList from "../components/MovieList/MovieList";
import style from "../pages/MoviesPage.module.css";

export default function MoviesPage() {
  const [list, setList] = useState([]);
  const [params, setParams] = useSearchParams();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    if (form.elements.searchMovie.value.trim() === "") {
      return toast("What? You must entered text", {
        icon: "🔎",
      });
    }
    const searchMovie =
      form.elements.searchMovie.value !== ""
        ? form.elements.searchMovie.value
        : {};
    params.set("query", searchMovie);
    setParams(params);
    form.reset();
  };

  useEffect(() => {
    const query = params.get("query");
    if (!query) {
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
  }, [params]);

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
