import axios from "axios";
import type { Movie } from "../types/movie";

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get<{ results: Movie[] }>("https://api.themoviedb.org/3/search/movie", {
    params: {
      query: query,
      language: "en-US",
      page: 1,
    },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  });

  return response.data.results;
};