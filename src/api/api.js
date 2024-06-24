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
  return http.get(`/movie/${id}?api_key=${apikey}&append_to_response=credits,recommendations`);
};

export {
  getNowPlayingMovies,
  getUpcomingMovies,
  getMoviesByGenres,
  getToprated,
  getMovieDetail,
};
