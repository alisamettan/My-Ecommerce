import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { TeamData } from "../../mocks/TeamData/TeamData";

export default function AboutTeam() {
  const newData = TeamData.slice(0, 3);

  return (
    <div className="py-24 flex justify-center">
      <div className=" flex flex-col gap-20">
        <div className="flex flex-col items-center text-center gap-8 ">
          <h2 className=" text-textColor font-bold text-4xl ">Meet Our Team</h2>
          <p className="text-secondText ">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div className="flex justify-center ">
          <div className="flex items-center flex-row gap-16">
            {newData.map((data, index) => {
              return (
                <Link
                  key={index}
                  to="/team"
                  className="flex flex-col gap-6 w-1/3 items-center"
                >
                  <img src={data.img} />
                  <div className="flex flex-col  gap-3">
                    <h4 className="  text-center font-semibold ">
                      {data.header}
                    </h4>
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
      </div>
    </div>
  );
}
