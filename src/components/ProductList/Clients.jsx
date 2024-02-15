import {
  faAws,
  faHooli,
  faLyft,
  faPiedPiperHat,
  faRedditAlien,
  faStripe,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Clients() {
  return (
    <div className=" bg-lightGray py-12 px-44">
      <div className="flex justify-between  text-secondText sm:flex-col sm:items-center">
        <FontAwesomeIcon icon={faHooli} className="w-24 h-24 " />
        <FontAwesomeIcon icon={faLyft} className="w-24 h-24 " />
        <FontAwesomeIcon icon={faPiedPiperHat} className="w-24 h-24 " />
        <FontAwesomeIcon icon={faStripe} className="w-24 h-24 " />
        <FontAwesomeIcon icon={faAws} className="w-24 h-24 " />
        <FontAwesomeIcon icon={faRedditAlien} className="w-24 h-24 " />
      </div>
    </div>
  );
}
