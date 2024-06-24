import useFetch from "../hooks/useFetch";
import { getUpcomingMovies } from "../api/api";
import { Alert } from "react-bootstrap";
import Headings from "./Headings";
import useScroll from "../hooks/useScroll";
import MovieCard from "./MovieCard";
import Scrollicons from "./Scrollicons";

export default function Upcoming() {
  const { data, error } = useFetch(getUpcomingMovies);
  const [scroll, scrollRef] = useScroll();

  return (
    <div className="mt-4">
      {error && (
        <Alert variant="danger" className="mt-4">
          {error}
        </Alert>
      )}
      <Headings text="Upcoming" size="1.1rem" />
      <div className="position-relative mt-3">
        <div
          className="d-flex gap-4 overflow-x-scroll overflow-y-hidden scrollBody"
          ref={scrollRef}
        >
          {data?.results?.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
          <Scrollicons scroll={scroll} />
        </div>
      </div>
    </div>
  );
}
