export default function AboutStats() {
  return (
    <div className="py-24 px-24 flex flex-row  items-center justify-center">
      <div className="flex flex-col gap-6 items-center w-[20%]">
        <h1 className="font-bold text-5xl text-textColor">15K</h1>
        <p className="text-secondText">Happy Customers</p>
      </div>
      <div className="flex flex-col gap-6 items-center w-[20%]">
        <h1 className="font-bold text-5xl text-textColor">150K</h1>
        <p className="text-secondText">Monthly Visitors</p>
      </div>
      <div className="flex flex-col gap-6 items-center w-[20%]">
        <h1 className="font-bold text-5xl text-textColor">15</h1>
        <p className="text-secondText">Countries Worldwide</p>
      </div>
      <div className="flex flex-col gap-6 items-center w-[20%]">
        <h1 className="font-bold text-5xl text-textColor">100+</h1>
        <p className="text-secondText">Top Partners</p>
      </div>
    </div>
  );
}
