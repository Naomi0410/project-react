import http from "../utils/http";

const apikey = import.meta.env.VITE_TMDB_API_KEY;

const getNowPlayingMovies = () => {
  return http.get(`/movie/now_playing?api_key=${apikey}`);
};

const getUpcomingMovies = () => {
  return http.get(`/movie/upcoming?api_key=${apikey}`);
};

const getMoviesByGenres = () => {
  return http.get(`/genre/movie/list?api_key=${apikey}`);
};

const getToprated = () => {
  return http.get(`/movie/top_rated?api_key=${apikey}`);
};

const getMovieDetail = (id) => {
  return http.get(
    `/movie/${id}?api_key=${apikey}&append_to_response=credits,recommendations`
  );
};

const getMovies = (id) => {
  return http.get(`/discover/movie?api_key=${apikey}&with_genres=${id}`);
};

const getPerson = (id) => {
  return http.get(`/person/${id}?api_key=${apikey}&append_to_response=movie_credits`);
}
const getSearch = (searchQuery) => {
  return http.get(`/search/multi?api_key=${apikey}&query=${searchQuery}`);
};

export {
  getNowPlayingMovies,
  getUpcomingMovies,
  getMoviesByGenres,
  getToprated,
  getMovieDetail,
  getMovies,
  getPerson,
  getSearch
};
