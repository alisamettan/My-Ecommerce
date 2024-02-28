import {
  faChevronRight,
  faPlus,
  faTrash,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  removeProductAction,
  setCartListAction,
  toggleCheckItemAction,
} from "../../store/actions/shoppingCartAction";

export default function CartProductsCard() {
  const cart = useSelector((state) => state.shoppingCart.cartList);
  const dispatch = useDispatch();

  function productAdder(item) {
    dispatch(setCartListAction(item));
  }
  function productRemover(item) {
    dispatch(setCartListAction(item, "decrement"));
  }

  function toggleCheckbox(item) {
    dispatch(toggleCheckItemAction(item));
  }

  function removeAllProduct(item) {
    dispatch(removeProductAction(item));
  }

  return (
    <div className="flex py-16 px-3">
      <div className="flex flex-col">
        {cart.map((item, index) => {
          if (item.count > 0) {
            return (
              <div
                key={index}
                className="flex items-center gap-6  py-5 px-12 border-1"
              >
                <input
                  class="w-5 h-5 border-gray-800 rounded "
                  type="checkbox"
                  checked={item.checked}
                  onClick={() => toggleCheckbox(item)}
                />
                <img
                  className="w-[9rem] h-[12rem] border-2 rounded-lg"
                  src={item.images[0].url}
                  alt=""
                />
                <div className="flex flex-col gap-3">
                  <h1>{item.name}</h1>
                  <h2 className="text-gray-500 w-[25rem]">
                    {item.description}
                  </h2>
                  <span>Beden : 38</span>
                  <span>Adet : {item.count}</span>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      className="text-green-500"
                      icon={faTruck}
                    />
                    <p className="text-gray-600">
                      <span className="font-extrabold text-black">
                        39 dk içinde
                      </span>{" "}
                      sipariş verirsen{" "}
                      <span className="font-extrabold text-black">
                        en geç yarın
                      </span>{" "}
                      kargoda!
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-12 ">
                  <div className="flex items-center">
                    <button
                      onClick={() => productRemover(item)}
                      className="px-3 py-3 border-1 bg-gray-200"
                    >
                      -
                    </button>
                    <p className="px-3 py-3 border-t-2 border-b-2">
                      {item.count}
                    </p>
                    <button
                      onClick={() => productAdder(item)}
                      className="px-3 py-3 border-1 bg-gray-200 text-orange-400"
                    >
                      +
                    </button>
                  </div>
                  <h1 className="text-xl text-orange-500">
                    {item.price * item.count}$
                  </h1>
                  <FontAwesomeIcon
                    className="w-5 h-5 text-gray-700"
                    icon={faTrash}
                    onClick={() => removeAllProduct(item)}
                  />
                </div>
              </div>
            );
          }
        })}
      </div>
      {cart.length > 0 ? (
        <div className="flex flex-col gap-2 items-center border-1 h-[23rem] mx-4">
          <div className="flex flex-col px-3 py-4 gap-2 ">
            <h1 className="pb-4 text-2xl">Sipariş Özeti</h1>
            <div className="flex justify-between gap-28">
              <p>Ürün Toplamı</p>
              <p>55555 $</p>
            </div>
            <div className="flex justify-between gap-28">
              <p>Kargo Toplam</p>
              <p>29.99 $</p>
            </div>
            <div className="flex justify-between gap-28 border-b-2 pb-2">
              <p>Kargo İndirimi</p>
              <p className="text-orange-500">29.99 $</p>
            </div>
            <div className="flex justify-between gap-28">
              <p>Toplam</p>
              <p className="text-orange-500">88888 $</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <button className="text-sm border-1 rounded-md py-2 px-5">
              <FontAwesomeIcon className="text-orange-500" icon={faPlus} />{" "}
              İNDİRİM KODU GİR
            </button>
            <button className="text-sm border-1 rounded-md py-2 px-5 bg-orange-500 text-white">
              Sepeti Onayla <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      ) : (
        <h1 className="m-auto text-3xl bg-gray-300 shadow-2xl p-4 rounded-lg">
          Sepetinizde Ürün Yok!!
        </h1>
      )}
    </div>
  );
}
