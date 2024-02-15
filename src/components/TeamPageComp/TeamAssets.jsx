export default function TeamAssets() {
  return (
    <div className="flex gap-4 w-full py-20 sm:flex-col">
      <img className="w-full" src="src/assets/TeamPagepics/hero1.png" alt="" />
      <div className="flex flex-col gap-4 w-full sm:w-[15rem]">
        <div className="flex gap-4 h-full">
          <img
            className="w-full "
            src="src/assets/TeamPagepics/hero2.png"
            alt=""
          />
          <img
            className="w-full"
            src="src/assets/TeamPagepics/hero3.png"
            alt=""
          />
        </div>
        <div className="flex gap-4">
          <img
            className="w-full"
            src="src/assets/TeamPagepics/hero4.png"
            alt=""
          />
          <img
            className="w-full"
            src="src/assets/TeamPagepics/hero5.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
