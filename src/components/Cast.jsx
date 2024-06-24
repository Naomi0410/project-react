import { Link } from "react-router-dom";
import useScroll from "../hooks/useScroll";
import Headings from "./Headings";
import Scrollicons from "./Scrollicons";
import { Image } from "react-bootstrap";

export default function Cast({ cast }) {
  const [scroll, scrollRef] = useScroll();
  return (
    <>
      <Headings text="CAST" size="1rem" />
      <div className="mt-3 position-relative" style={{ minHeight: "160px" }}>
        <div
          className="d-flex gap-4 overflow-x-scroll overflow-y-hidden scrollBody"
          ref={scrollRef}
        >
          {cast?.map((item) => (
            <div className="text-center me-3" key={item.id}>
              <Link to={`/person/${item.id}`}>
                <Image
                  src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                  loading="lazy"
                  alt={item.name}
                  style={{ width: "100px", height: "100px" }}
                  roundedCircle
                />
              </Link>
              <Link to={`/person/${item.id}`} className="small mb-1 text-black">
                {item.name}
              </Link>
              <p className="small text-secondary">{item.character}</p>
            </div>
          ))}
          <Scrollicons scroll={scroll} />
        </div>
      </div>
    </>
  );
}
