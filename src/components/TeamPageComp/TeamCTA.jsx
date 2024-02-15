import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TeamCTA() {
  return (
    <div className="flex flex-col items-center text-center gap-10 py-20">
      <h2 className=" text-textColor font-bold text-5xl ">
        Start your 14 days free trial
      </h2>
      <p className="text-secondText text-lg sm:px-16">
        Met minim Mollie non desert Alamo est sit cliquey dolor <br /> the two
        major do met sent. RELIT official consequent.
      </p>
      <button className=" font-montserrat font-bold  text-md px-5 py-4 bg-primaryColor border border-primaryColor text-lightText rounded-md">
        Try it free now
      </button>
      <div className="flex gap-10 ">
        <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
        <FontAwesomeIcon icon={faFacebook} className="w-8 h-8" />
        <FontAwesomeIcon icon={faTwitter} className="w-8 h-8" />
        <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8" />
      </div>
    </div>
  );
}
