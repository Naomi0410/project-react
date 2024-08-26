import { useState } from "react";
import { Form } from "react-bootstrap";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

export default function Searchbox({ showSearch, setShowSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const closeSearchBox = () => {
    setShowSearch(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery && searchQuery.length > 3) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <>
      {showSearch && (
        <div style={{ height: "40px" }} className="position-relative">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              placeholder="Search Movies, People"
              style={{ height: "40px" }}
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
            />
          </Form>
          <IoIosClose
            onClick={closeSearchBox}
            size="25px"
            className="cursor position-absolute top-50 translate-middle"
            style={{ right: "5px" }}
          />
        </div>
      )}
      {!showSearch && (
        <span className="text-white cursor" onClick={() => setShowSearch(true)}>
          Search
        </span>
      )}
    </>
  );
}
