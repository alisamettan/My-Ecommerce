import {
  faAws,
  faHooli,
  faLyft,
  faPiedPiperHat,
  faRedditAlien,
  faStripe,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactCTA() {
  return (
    <div className=" py-20 flex flex-col items-center">
      <div className="w-4/5 ">
        <div className=" flex flex-col gap-24 sm:gap-12">
          <div className="flex flex-col gap-6 text-textColor">
            <h2 className="font-semibold text-lg text-center">
              VISIT OUR OFFICE
            </h2>
            <p className="font-bold text-4xl text-center">
              We help small businesses <br /> with big ideas
            </p>
          </div>
          <div className="flex  justify-center  gap-4 sm:flex-col sm:items-center">
            <div className="w-[28rem] bg-white flex flex-col items-center gap-7 py-14">
              <FontAwesomeIcon
                className="w-16 h-16 text-primaryColor"
                icon={faPhone}
              />{" "}
              <div className="text-textColor font-medium text-lg flex flex-col text-center">
                <p>georgia.young@example.com</p>
                <p>georgia.young@ple.com</p>
              </div>
              <p className="text-textColor font-bold text-lg">Get Support</p>
              <button className="w-1/2  font-bold   text-xs px-6 py-3 bg-white border border-primaryColor text-primaryColor rounded-3xl">
                Submit Request
              </button>
            </div>
            <div className="w-[28rem] bg-darkBg flex flex-col items-center gap-7 py-14 rounded-lg">
              <FontAwesomeIcon
                className="w-16 h-16 text-primaryColor"
                icon={faLocationDot}
              />{" "}
              <div className="text-lightText font-medium text-lg flex flex-col text-center">
                <p>georgia.young@example.com</p>
                <p>georgia.young@ple.com</p>
              </div>
              <p className="text-lightText font-bold text-lg">Get Support</p>
              <button className="w-1/2  font-bold text-xs px-6 py-3 bg-darkBg border border-primaryColor text-primaryColor rounded-3xl">
                Submit Request
              </button>
            </div>
            <div className="w-[28rem] bg-white flex flex-col items-center gap-7 py-14">
              <FontAwesomeIcon
                className="w-16 h-16 text-primaryColor"
                icon={faEnvelope}
              />{" "}
              <div className="text-textColor font-medium text-lg flex flex-col text-center">
                <p>georgia.young@example.com</p>
                <p>georgia.young@ple.com</p>
              </div>
              <p className="text-textColor font-bold text-lg">Get Support</p>
              <button className="w-1/2  font-bold   text-xs px-6 py-3 bg-white border border-primaryColor text-primaryColor rounded-3xl">
                Submit Request
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-12 pb-10 items-center text-textColor">
            <p className="font-semibold text-lg">WE Can't WAIT TO MEET YOU</p>
            <p className="text-6xl font-bold ">Let’s Talk</p>
            <button className="w-1/6 font-bold text-xs px-5 py-4 bg-primaryColor border border-primaryColor text-lightText rounded-md sm:w-3/6 sm:text-lg">
              Try it free now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
