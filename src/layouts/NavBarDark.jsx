import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBarDark() {
  return (
    <div className="flex bg-[#23856D] w-full sm:hidden">
      <div className="flex justify-evenly container  p-4 h-14 items-center text-white">
        <div className="flex font-normal text-sm gap-6 ">
          {" "}
          <a className="flex items-center gap-2" href="tel:5394816079">
            <FontAwesomeIcon icon={faPhone} />
            +90 (212) 246 66 66
          </a>
          <a
            className="flex items-center gap-2"
            href="mailto:alisamettn@@gmail.com"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            alisamettn@gmail.com
          </a>
        </div>
        <div className="font-bold text-sm">
          <p>Follow Us and get a chance to win 80% off</p>
        </div>
        <div className="flex justify-between items-center font-bold text-sm gap-3">
          <h6>Follow Us :</h6>
          <a href="">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a>
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </div>
  );
}
