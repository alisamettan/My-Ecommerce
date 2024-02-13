import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function ProductHeader() {
  return (
    <div className=" bg-lightGray">
      <div className="flex flex-row justify-between py-8 px-24">
        <h2 className="bg- text-textColor text-3xl font-extrabold">Shop</h2>
        <div className="flex flex-row items-center gap-3  font-semibold text-lg">
          <Link to="/">
            <h3 className="text-textColor ">Home</h3>
          </Link>
          <FontAwesomeIcon
            className="h-5 w-5 text-mutedColor"
            icon={faChevronRight}
          />
          <h3 className="text-mutedColor ">Shop</h3>
        </div>
      </div>
    </div>
  );
}
