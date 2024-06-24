import useFetch from "../hooks/useFetch";
import { getMoviesByGenres } from "../api/api";
import { Alert, Button } from "react-bootstrap";
import Headings from "./Headings";
import useScroll from "../hooks/useScroll";
import Scrollicons from "./Scrollicons";
import { Link } from "react-router-dom";

export default function MovieGenre() {
  const { data, error } = useFetch(getMoviesByGenres);
  const [scroll, scrollRef] = useScroll();

  return (
    <div className="mt-4">
      {error && (
        <Alert variant="danger" className="mt-4">
          {error}
        </Alert>
      )}
      <Headings text="Genres" size="1.1rem" />
      <div className="position-relative mt-3">
        <div
          className="d-flex gap-4 overflow-x-scroll overflow-y-hidden scrollBody"
          ref={scrollRef}
        >
          {data?.genres?.map((genre) => (
            <Button
              key={genre.id}
              as={Link}
              to={`/movies/${genre.id}`}
              className="bg-secondary-subtle rounded-4 text-black border-0 p-3 btnStyle"
              style={{minWidth: "fit-content"}}
            >
              {genre.name}
            </Button>
          ))}
          <Scrollicons scroll={scroll} />
        </div>
      </div>
    </div>
  );
}
