import { Container } from "react-bootstrap";
import { SiThemoviedatabase } from "react-icons/si";
import { NavLink } from "react-router-dom";

const links = [
  {
    path: "movies",
    name: "Movies",
  },
  {
    path: "people",
    name: "People",
  },
  {
    path: "search",
    name: "Search",
  },
];

export default function Nav() {
  return (
    <Container fluid className="bg-black">
      <div className="cover py-3 px-3 px-lg-5  d-flex justify-content-between align-items-center">
        <NavLink to="/">
          <SiThemoviedatabase color="white" size="40px" />
        </NavLink>
        <div>
          {links.map((link, index) => (
            <NavLink
              to={`/${link.path}`}
              key={index}
              className={({ isActive }) =>
                isActive
                  ? "text-success ms-4 navlink"
                  : "text-white ms-4 navlink"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </Container>
  );
}
