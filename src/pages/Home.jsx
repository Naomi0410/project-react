import { getNowPlayingMovies } from "../api/api";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import { Alert, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import styles from "./pages.module.css";
import NowPlaying from "../components/NowPlaying";
import Upcoming from "../components/Upcoming";
import MovieGenre from "../components/MovieGenre";
import Toprated from "../components/Toprated";

export default function Home() {
  const { data, error, isLoading } = useFetch(getNowPlayingMovies);
  const [shuffledMovie, setShuffledMovie] = useState({});


  const { results } = data;

  //shuttle data
  function getRandomMovie(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  useEffect(() => {
    if (results && results.length > 0) {
      const getRandom = getRandomMovie(results);
      setShuffledMovie(getRandom);
    }
  }, [results]);

  return (
    <>
      {error && (
        <Alert variant="danger" className="mt-4">
          {error}
        </Alert>
      )}
      {isLoading && <Loader />}
      {!error && !isLoading && results?.length > 0 && (
        <div className="position-relative">
          <Image
            src={`https://image.tmdb.org/t/p/original/${shuffledMovie.backdrop_path}`}
            className={styles.backdrop}
          />
          <div className="cover w-100 position-absolute top-50 start-50 translate-middle-x px-3 text-white">
            <div className={styles.overviewWidth}>
              <h1 className="fs-1 fw-semibold">{shuffledMovie.title}</h1>
              <p className="mt-4">{shuffledMovie.overview}</p>
            </div>
          </div>
        </div>
      )}
      <div className="cover mt-4 py-5 px-3">
        <NowPlaying results={results} />
        <hr />
        <Upcoming/>
        <hr />
        <MovieGenre/>
        <hr />
        <Toprated/>
      </div>
    </>
  );
}
