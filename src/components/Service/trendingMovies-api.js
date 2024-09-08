"use strict"

import axios from "axios"

const options = {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjAwN2JjYzg0ZDc5ZGY5NWI5MzVkYzcxZTBkYTFmNSIsIm5iZiI6MTcyNTU0NTk4Ny40NDk1ODcsInN1YiI6IjY2ZDlhY2UyOGU5MzQxMGQ3ODE4NDUzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KlA9V3NXj1qEhN0iOqZn8SozLWQCsZb7-s9DyymloGA'
    }
};

axios.defaults.baseURL = "https://api.themoviedb.org"

export default async function getDefaultMoviesList() {
    const response = await axios.get("/3/trending/movie/day?language=en-US", options)
    return response.data
}
