import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FETCH_STATES } from "../../store/reducers/productReducer";

export default function ProductsCards({ products, productFetched }) {
  return (
    <div className="flex flex-col gap-11 py-20">
      {productFetched ? (
        <div>aloooooo</div>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-14 sm:flex-col sm:flex ">
          {products?.map((product, index) => {
            return (
              <Link
                to="/product"
                className="flex flex-col items-center gap-3 w-[25rem] shadow-xl p-5"
                key={index}
              >
                <img className="" src={product.images[0].url} alt="" />

                <h1 className="text-textColor font-extrabold text-lg">
                  {product.name}
                </h1>
                <h2 className="text-secondText font-medium">
                  {product.description}
                </h2>
                <div className="flex gap-2 font-extrabold">
                  <span className="text-mutedColor">$200.0</span>
                  <span className="text-secondaryColorGreen font-bold">
                    ${product.price}
                  </span>
                </div>
                <div className="flex flex-row gap-2">
                  <button className="h-5 w-5 bg-primaryColor rounded-full"></button>
                  <button className="h-5 w-5 bg-secondaryColorGreen rounded-full"></button>
                  <button className="h-5 w-5 bg-alertColor rounded-full"></button>
                  <button className="h-5 w-5 bg-darkBg rounded-full"></button>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
