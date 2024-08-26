import Headings from "./Headings";
import MovieCard from "./MovieCard";
import useScroll from "../hooks/useScroll";
import Scrollicons from "./Scrollicons";

export default function Recommendation({ recommend }) {
  const [scroll, scrollRef] = useScroll();
  return (
    <>
      <Headings text="RECOMMENDATIONS" size="1rem" />
      {recommend?.results?.length > 0 ? (
        <div className="position-relative mt-3">
          <div
            className="d-flex gap-4 overflow-x-scroll overflow-y-hidden scrollBody"
            ref={scrollRef}
          >
            {recommend?.results?.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
            <Scrollicons scroll={scroll} /> 
          </div>
        </div>
      ) : (
        <p>No recommendations for this movie</p>
      )}
    </>
  );
}
