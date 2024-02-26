import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutVideo() {
  return (
    <div className=" relative w-[60rem] m-auto py-20 sm:w-[20rem]">
      <video className=" w-full rounded-2xl" controls>
        <source src="assets/AboutPagepicsvideo/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <FontAwesomeIcon
        className="absolute sm:hidden top-[40%] left-[45%] bx bx-play text-6xl text-white border-2 px-7 py-4 rounded-[100%] bg-primaryColor"
        icon={faPlay}
      />
    </div>
  );
}
