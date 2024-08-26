import { Link, useParams } from "react-router-dom"; //use to grab the parameter of a given route
import useFetch from "../hooks/useFetch";
import { Alert, Image, Row, Col } from "react-bootstrap";
import Loader from "../components/Loader";
import Headings from "../components/Headings";
import { getMovieDetail } from "../api/api";
import styles from "./pages.module.css";
import Cast from "../components/Cast"
import Recommendation from "../components/Recommendation";

export default function MovieDetail() {
  const { id } = useParams(); //the name you give it in the route is what you will call here
  const { data, error, isLoading } = useFetch(getMovieDetail, id);
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
          <div className="position-relative">
            <Image
              src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
              className={styles.backdrop}
              loading="lazy"
            />
            <div className="cover px-5 position-absolute top-50 start-50 translate-middle w-100">
              <Row className="justify-content-between text-white">
                <Col md={4}>
                  <div className="my-5">
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                      className={`${styles.posterImg} shadow-sm`}
                      loading="lazy"
                    />
                    <div className="d-lg-none mt-4 text-center">
                      <Headings text={data.title} size="2rem" />
                    </div>
                  </div>
                </Col>
                <Col md={6} lg={7} className="d-none d-lg-block">
                  <div className="my-5 mx-auto">
                    <Headings
                      text={data.title}
                      size="2.5rem"
                      marginBottom="24px"
                    />
                    <Headings text="PLOT" size="1.2rem" marginBottom="8px" />
                    <p className="pText">{data.overview}</p>
                    <div className="mt-5 d-flex justify-content-between align-items-center">
                      <div>
                        <Headings text="RELEASED" size="1rem" />
                        <p>{data.release_date}</p>
                      </div>
                      <div>
                        <Headings text="RATING" size="1rem" />
                        <p>{data?.vote_average?.toFixed(1)}</p>
                      </div>
                      <div>
                        <Headings text="RUNTIME" size="1rem" />
                        <p>{data.runtime} minutes</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div>
                        <Headings text="GENRE" size="1rem" />
                        <div className="d-flex flex-wrap gap-2">
                          {data?.genres?.map((genre) => (
                            <Link
                              key={genre.id}
                              to={`/movies/${genre.id}`}
                              style={{ backgroundColor: "orange" }}
                              className="small rounded-3 p-2 text-dark fw-bold"
                            >
                              {genre.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <p className="mt-4">
                        <span className="fw-bold">
                          {data.credits?.crew[0]?.job}
                        </span>{" "}
                        - {data.credits?.crew[0]?.name}
                      </p>
                      <div className="mt-3 d-flex justify-content-between align-items-center">
                        <div>
                          <Headings text="BUDGET" size="1rem" />
                          <p>
                            {new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "USD",
                            }).format(data.budget)}
                          </p>
                        </div>
                        <div>
                          <Headings text="REVENUE" size="1rem" />
                          <p>
                            {new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "USD",
                            }).format(data.revenue)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          {/* mobile view */}
          <div className="d-lg-none my-4 p-3">
            <div>
              <Headings text="PLOT" size="1.2rem" marginBottom="8px" />
              <p className="pText">{data.overview}</p>
            </div>
            <div className="mt-5 d-flex flex-wrap justify-content-between align-items-center">
              <div>
                <Headings text="RELEASED" size="1rem" />
                <p>{data.release_date}</p>
              </div>
              <div>
                <Headings text="RATING" size="1rem" />
                <p>{data?.vote_average?.toFixed(1)}</p>
              </div>
              <div>
                <Headings text="RUNTIME" size="1rem" />
                <p>{data.runtime} minutes</p>
              </div>
            </div>
            <p className="mt-2">
              <span className="fw-bold">{data.credits?.crew[0]?.job}</span> -{" "}
              {data.credits?.crew[0]?.name}
            </p>
          </div>
          {/* all screen */}
          <div className="cover mt-4 py-3 px-3 px-lg-5">
            <Cast cast={data?.credits?.cast}/>
            <hr />
            <Recommendation recommend={data.recommendations}/>
          </div>
        </>
      )}
    </>
  );
}
