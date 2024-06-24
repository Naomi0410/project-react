import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

export default function Scrollicons({ scroll }) {
  return (
    <>
      <MdArrowBackIosNew
        className="text-white cursor position-absolute z-3"
        size="35px"
        style={{ top: "35%", left: 0 }}
        onClick={() => scroll("left")}
      />
      <MdArrowForwardIos
        className="text-white cursor position-absolute z-3"
        size="35px"
        style={{ top: "35%", right: 0 }}
        onClick={() => scroll("right")}
      />
    </>
  );
}
