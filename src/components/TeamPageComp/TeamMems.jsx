import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { TeamData } from "../../mocks/TeamData/TeamData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function TeamMems() {
  return (
    <div className="flex flex-col items-center gap-20 py-20">
      <h1 className="text-5xl font-bold">Meet Our Team</h1>
      <div className="grid grid-rows-3 grid-flow-col gap-24 px-64 sm:flex sm:flex-col">
        {TeamData.map((data, index) => {
          return (
            <Link
              key={index}
              to="/team"
              className="flex flex-col items-center gap-4 sm:w-[20rem]"
            >
              <img src={data.img} />
              <div className="flex flex-col  gap-3">
                <h4 className="text-center font-semibold ">{data.header}</h4>
                <p className="text-sm text-center ">{data.role}</p>
                <div className="flex gap-3  text-primaryColor">
                  <FontAwesomeIcon icon={faInstagram} />
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
