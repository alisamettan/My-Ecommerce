import { useEffect, useState } from "react";
import { instance } from "../hooks/useAxios";

export default function PreviousOrders() {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    instance
      .get("/order", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setOrders(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }, [token]);

  return (
    <div className="py-16 px-12 w-[70%] m-auto sm:w-[100%]">
      <div className="flex flex-col gap-2">
        {orders.map((order, orderIndex) => {
          return (
            <div key={orderIndex} className="flex flex-col gap-2">
              {order.products?.map((product, productIndex) => {
                return (
                  <div
                    key={productIndex}
                    className="flex items-center gap-6 py-5 px-10 border-1 rounded-md shadow-md"
                  >
                    <img
                      className="w-[9rem] h-[12rem] border-2 rounded-lg"
                      src={product.images[0].url}
                      alt=""
                    />
                    <div className="flex flex-col gap-3">
                      <h1>{product.name}</h1>
                      <h2 className="text-gray-500 w-[30]">
                        {product.description}
                      </h2>
                      <span>Beden : 38</span>
                      <span>Adet : {product.count}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
