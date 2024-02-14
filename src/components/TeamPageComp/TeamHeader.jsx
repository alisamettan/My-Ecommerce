import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function TeamHeader() {
  return (
    <div className="flex flex-col items-center gap-8 py-20">
      <h2 className="text-lg font-bold">WHAT WE DO</h2>
      <h1 className="text-6xl font-semibold">Innovation tailored for you</h1>
      <div className="flex gap-3 justify-center items-center text-lg">
        <Link className="font-extrabold" to="/">
          Home
        </Link>
        <FontAwesomeIcon icon={faChevronRight} />
        <Link to="/team">Team</Link>
      </div>
    </div>
  );
}
