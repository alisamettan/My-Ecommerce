import { Link } from "react-router-dom";

export default function AboutHeader() {
  return (
    <div className="flex flex-row items-center px-64 py-36">
      <div className="flex flex-col  gap-8 justify-center">
        <h3 className=" text-textColor font-extrabold text-lg ">
          ABOUT COMPANY
        </h3>
        <h1 className=" text-5xl  font-bold   text-textColor  ">ABOUT US</h1>
        <p className="text-secondText ">
          We know how large objects will act,
          <br /> but things on a small scale
        </p>
        <button className="w-[60%] text-base rounded-md py-4 bg-primaryColor text-lightText">
          GET QUOTE NOW
        </button>
      </div>
      <div className="relative z-0 m-auto w-1/2 h-1/2">
        <div className="relative z-0 bg-[#FFE9EA] rounded-[100%] p-32 sm:p-52"></div>
        <div className="absolute top-0 bg-[#FFE9EA] rounded-[100%] p-6"></div>
        <div className="absolute bg-[#977DF4] rounded-[100%] p-2"></div>
        <div className="absolute right-0 top-0 bg-[#977DF4] rounded-[100%] p-2"></div>
        <img
          src="src/assets/AboutPagepicsvideo/technology 1 (1).png"
          className="absolute bottom-0 z-40 right-0"
        />
      </div>
    </div>
  );
}
