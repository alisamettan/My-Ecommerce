export default function AboutHeader() {
  return (
    <div className="flex items-center px-96 py-36 sm:flex-col sm:justify-center-center sm:gap-16 sm:px-0 sm:py-20">
      <div className="flex flex-col  gap-8 justify-center sm:text-center">
        <h3 className=" text-textColor font-extrabold text-lg ">
          ABOUT COMPANY
        </h3>
        <h1 className=" text-5xl  font-bold   text-textColor  ">ABOUT US</h1>
        <p className="text-secondText ">
          We know how large objects will act,
          <br /> but things on a small scale
        </p>
        <button className="w-[60%] text-base rounded-md py-4 bg-primaryColor text-lightText sm:w-[100%]">
          GET QUOTE NOW
        </button>
      </div>
      <div className="w-[40rem] m-auto relative pt-24 sm:flex sm:justify-center sm:right-[120px]">
        <div className="relative z-0 bg-[#FFE9EA] rounded-[100%] p-32 "></div>
        <div className="absolute top-0 bg-[#FFE9EA] rounded-[100%] p-6"></div>
        <div className="absolute bg-[#977DF4] rounded-[100%] p-2"></div>
        <div className="absolute right-0 top-0 bg-[#977DF4] rounded-[100%] p-2"></div>
        <img
          src="assets/AboutPagepicsvideo/technology 1 (1).png"
          className="absolute bottom-0 z-40 right-0 sm:w-full sm:h-full"
        />
      </div>
    </div>
  );
}
