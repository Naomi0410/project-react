import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { getPerson } from "../api/api";
import { Alert, Image } from "react-bootstrap";
import Loader from "../components/Loader";
import Headings from "../components/Headings";
import { Link } from "react-router-dom";

export default function Person() {
  const { id } = useParams();
  const { data, error, isLoading } = useFetch(getPerson, id);
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
        <div className="cover px-3 py-3 px-lg-5 mt-5">
          <div className="d-lg-flex text-center gap-5">
            <Image
              src={`https://image.tmdb.org/t/p/original/${data.profile_path}`}
              className="personImg"
            />
            <div className="text-start">
              <Headings text={data.name} />
              <p>{data.biography}</p>
              <p>
                <span className="fw-bold">GENDER : </span>
                {data.gender === 1
                  ? "Female"
                  : "" || data.gender === 2
                  ? "Male"
                  : "" || data.gender === 3
                  ? "Non-binary"
                  : "" || data.gender === 0
                  ? "NIL"
                  : ""}
              </p>
              <p>
                <span className="fw-bold">DATE OF BIRTH : </span>
                {data.birthday}
              </p>
              <p>
                <span className="fw-bold">PLACE OF BIRTH : </span>
                {data.place_of_birth}
              </p>
              <div>
                <span className="fw-bold">ALSO KNOWN AS : </span>
                {data?.also_known_as?.map((person, i) => (
                  <span key={i} className="me-3">
                    {person}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div>
            {data?.movie_credits?.cast?.map((item) => (
              <div key={item.id}></div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
