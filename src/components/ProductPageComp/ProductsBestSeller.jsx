import { ProductData } from "../../mocks/ProductData/ProductData";

export default function ProductsBestSeller() {
  return (
    <div className="flex flex-wrap gap-36 p-20 justify-center">
      {ProductData.map((data, index) => {
        return (
          <div key={index} className="flex flex-col items-center gap-3">
            <img src={data} alt="" />
            <h1 className="text-textColor font-extrabold text-lg">
              Graphic Design
            </h1>
            <h2 className="text-secondText font-medium">English Department</h2>
            <div className="flex gap-2 font-extrabold">
              <span className="text-mutedColor">$16.48</span>
              <span className="text-secondaryColorGreen font-bold">$6.48</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
