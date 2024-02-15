export default function Social() {
  return (
    <div>
      <div className="flex  gap-36 justify-center sm:flex-col-reverse sm:pt-24 sm:items-center">
        <img
          className="sm:w-[80%] "
          src="src/assets/HomePagepics/asian-woman-man.png"
          alt=""
        />
        <div className="flex flex-col gap-10 justify-center sm:text-center">
          <h4 className="text-2xl font-bold text-gray-500">Summer 2023</h4>
          <h1 className="text-5xl font-extrabold mt-4">
            Part of the Neural <br /> Universe
          </h1>
          <p className="text-2xl text-gray-600 ">
            We know how large objects will act,
            <br /> but things on a small scale
          </p>
          <div className="flex gap-4 sm:flex-col sm:px-44">
            <button className="py-6 px-14 bg-green-500 rounded text-white font-extrabold  hover:text-black hover:bg-white transition">
              BUY NOW
            </button>
            <button className="py-6 px-14 border-2 border-green-500 rounded text-green-500 font-extrabold hover:text-white hover:bg-green-500 transition">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
