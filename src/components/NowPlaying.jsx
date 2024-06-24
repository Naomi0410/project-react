import Headings from "./Headings";
import MovieCard from "./MovieCard";
import useScroll from "../hooks/useScroll";
import Scrollicons from "./Scrollicons";

export default function NowPlaying({ results }) {
  const [scroll, scrollRef] = useScroll();
  return (
    <>
      <Headings text="Now Playing" size="1.1rem" />
      <div className="position-relative mt-3">
        <div
          className="d-flex gap-4 overflow-x-scroll overflow-y-hidden scrollBody"
          ref={scrollRef}
        >
          {results?.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
          <Scrollicons scroll={scroll} />
        </div>
      </div>
    </>
  );
}
