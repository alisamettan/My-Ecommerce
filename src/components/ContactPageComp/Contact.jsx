import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <div className="w-full h-[calc(100vh_-_144px)]  items-center flex  justify-center gap-8 relative px-56 sm:flex-col sm:px-0 sm:pt-48 sm:pl-20">
      <div className=" w-1/3 h-full flex flex-col items-center py-60 ">
        <div className="w-4/5 h-3/4 sm:w-[15rem]">
          <div className="flex  flex-col h-full justify-center items-start gap-10  text-textColor sm:text-center">
            <h2 className="uppercase font-semibold text-start ">Contact Us</h2>
            <h3 className="font-bold  tracking-wider text-start  text-5xl leading-snug">
              Get in touch
              <br /> today!
            </h3>

            <p className="text-secondText text-start  font-medium">
              We know how large objects will act,
              <br /> but things on a small scale
            </p>
            <p className="text-lg font-bold text-start ">
              Phone ; +451 215 215{" "}
            </p>
            <p className="text-lg  font-bold text-start ">Fax : +451 215 215</p>
            <div className="flex justify-start  gap-7  pt-4">
              <FontAwesomeIcon icon={faTwitter} className="h-8 w-8" />
              <FontAwesomeIcon icon={faFacebook} className="h-8 w-8" />
              <FontAwesomeIcon icon={faInstagram} className="h-8 w-8" />
              <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2  h-full relative sm:hidden">
        <div className="absolute w-[375px]  h-[300px]  bg-roseBg rounded-full right-[11%] bottom-[32%]"></div>
        <div className="absolute w-3 h-3 bg-violet rounded-full right-[10%]  z-40 bottom-3/4"></div>
        <div className="absolute w-3 h-3 bg-violet rounded-full left-[34.5%] z-40   bottom-[42%]"></div>
        <div className="absolute w-16 h-16 bg-roseBg rounded-full  left-[8%] top-[5%]"></div>
        <div className="absolute w-7 h-7 bg-roseBg rounded-full right-[5%]  top-[40%]"></div>
        <img
          src="assets/ContactPagepic/family.png"
          className="absolute bottom-0 right-[5%]  h-full "
        />
      </div>
      ;
    </div>
  );
}
