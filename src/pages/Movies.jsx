import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { getMovies } from "../api/api";
import { Alert, Image } from "react-bootstrap";
import Loader from "../components/Loader";


export default function Movies() {
  const { id } = useParams();
  const { data, error, isLoading } = useFetch(getMovies, id);
  console.log(data);
  return (
    <>
      {error && (
        <Alert variant="danger" className="mt-4">
          {error}
        </Alert>
      )}
      {isLoading && <Loader />}
      {!error && !isLoading && data && (
        <>
          <div className="d-flex flex-wrap justify-content-between mt-3 cover px-3 py-3 px-lg-5">
            {data?.results?.map((movie) => (
            <div  key={movie.id} className="genreCard">
             <Link to={`/movie/${movie.id}`}>
             <Image
               src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
               className="rounded-4 shadow-sm object-fit-cover w-100 h-75"
             />
             <p className="small text-black mt-2">{movie.title}</p>
           </Link>
           </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
