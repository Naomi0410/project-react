import { Container } from "react-bootstrap";
import { SiThemoviedatabase } from "react-icons/si";
import { NavLink } from "react-router-dom";
import Searchbox from "./Searchbox";
import { useState } from "react";

const links = [
  {
    path: "movies",
    name: "Movies",
  },
  {
    path: "people",
    name: "People",
  },
];

export default function Nav() {
  const [showSearch, setShowSearch] = useState(false);
  
  return (
    <Container fluid className="bg-black">
      <div className="cover py-3 px-3 px-lg-5  d-flex justify-content-between align-items-center">
        <NavLink to="/">
          <SiThemoviedatabase color="white" size="40px" />
        </NavLink>
        <div className="d-flex gap-3 gap-md-5 align-items-center">
          {!showSearch &&
          <div>
          {links.map((link, index) => (
            <NavLink
              to={`/${link.path}`}
              key={index}
              className={({ isActive }) =>
                isActive
                  ? "text-success ms-3 ms-md-5 navlink"
                  : "text-white ms-3 ms-md-5 navlink"
              }
            >
              {link.name}
            </NavLink>
          ))}
          </div>
          }
           <Searchbox showSearch={showSearch} setShowSearch={setShowSearch}/>
        </div>
      </div>
     
    </Container>
    
  );
}
