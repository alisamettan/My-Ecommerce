import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductsActionCreator } from "../../store/actions/productAction";

export default function BestSeller() {
  const dispatch = useDispatch();
  const fetchStat = useSelector((state) => state.product.fetchState);

  useEffect(() => {
    dispatch(setProductsActionCreator());
  }, []);
  const products = useSelector((state) => state.product.productList);
  const mostRating = products.sort((a, b) => {
    return b.rating - a.rating;
  });
  const bestProducts = mostRating.slice(0, 8);

  return (
    <div className="flex items-center flex-col py-32 gap-5">
      <div className="flex items-center flex-col gap-3">
        <h2 className="text-secondText text-xl  font-medium">
          Featured Products
        </h2>
        <h1 className="text-textColor font-extrabold text-2xl ">
          BESTSELLER PRODUCTS
        </h1>
        <p className="text-secondText font-medium">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-20 sm:flex-col sm:flex ">
        {bestProducts.map((product) => {
          return (
            <div className="flex flex-col items-center gap-3 w-[18%] shadow-xl p-5">
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
