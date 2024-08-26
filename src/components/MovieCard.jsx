import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MovieCard({ poster_path, id, title }) {
  return (
    <Link to={`/movie/${id}`}>
      <Image
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        className="rounded-4 shadow-sm object-fit-cover mediaImg"
      />
      <p className="small text-black mt-2" style={{width: "250px"}}>{title}</p>
    </Link>
  );
}
