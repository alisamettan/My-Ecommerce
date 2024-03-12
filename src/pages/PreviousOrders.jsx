import { useSelector } from "react-redux";

export default function PreviousOrders() {
  const products = useSelector((state) => state.product.productList);
  const slicedProducts = products.slice(0, 4);

  return (
    <div className="py-16 px-12 w-[70%] m-auto sm:w-[100%]">
      <div className="flex flex-col gap-2">
        {slicedProducts.map((product, index) => {
          return (
            <div
              key={index}
              className="flex items-center gap-6  py-5 px-10 border-1 rounded-md"
            >
              <img
                className="w-[9rem] h-[12rem] border-2 rounded-lg"
                src={product.images[0].url}
                alt=""
              />
              <div className="flex flex-col gap-3">
                <h1>{product.name}</h1>
                <h2 className="text-gray-500 w-[30]">{product.description}</h2>
                <span>Beden : 38</span>
                <span>Adet : {product.id}</span>
              </div>
              <div className="flex items-center justify-between gap-12 ">
                <div className="flex items-center"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
