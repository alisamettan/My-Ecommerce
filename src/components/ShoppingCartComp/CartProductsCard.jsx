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
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function CartProductsCard() {
  const cart = useSelector((state) => state.shoppingCart.cartList);
  const dispatch = useDispatch();
  const [inputOpen, setInputOpen] = useState(false);
  const [filterText, setFilterText] = useState("");
  const history = useHistory();

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
  const handleChange = (e) => {
    setFilterText(e.target.value);
  };

  const toFixed2 = (number) => {
    return (Math.round(number * 100) / 100).toFixed(2);
  };
  let totalCargo = 29;

  function cargoCalculator() {
    if (totalPricefunc() > 150) {
      return totalPricefunc();
    } else {
      return totalPricefunc() + totalCargo;
    }
  }

  function totalPricefunc() {
    let totalPrice = 0;

    for (let item of cart) {
      if (item.checked) {
        totalPrice += item.count * item.price;
      } else {
        totalPrice = 0;
        totalCargo = 0;
      }
    }
    return totalPrice;
  }
  return (
    <div className="flex py-16 px-12">
      <div className="flex flex-col">
        {cart.map((item, index) => {
          if (item.count > 0) {
            return (
              <div
                key={index}
                className="flex items-center gap-6  py-5 px-10 border-1 w-full"
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
                  <h2 className="text-gray-500 w-[30]">{item.description}</h2>
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
                    {toFixed2(item.price * item.count)}$
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
        <div className="flex flex-col gap-2  mx-8 border-1 px-4  py-3 h-[20%] w-[25%]">
          <div className="flex flex-col gap-2 ">
            <h1 className="pb-4 text-2xl">Sipariş Özeti</h1>
            <div className="flex justify-between">
              <p>Ürün Toplamı</p>
              <p>{toFixed2(totalPricefunc())} $</p>
            </div>
            <div className="flex justify-between">
              <p>Kargo Toplam</p>
              <p>{totalCargo} $</p>
            </div>
            <div className="flex justify-between border-b-2 pb-2">
              <p>
                150 $ ve Üzeri <br /> Kargo Bedava(Satıcı Karşılar)
              </p>
              <p className="text-orange-500">-{totalCargo} $</p>
            </div>
            <div className="flex justify-between">
              <p>Toplam</p>
              <p className="text-orange-500">{cargoCalculator()} $</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => setInputOpen(!inputOpen)}
              className="text-sm border-1 rounded-md py-2 px-5"
            >
              <FontAwesomeIcon className="text-orange-500" icon={faPlus} />{" "}
              İNDİRİM KODU GİR
            </button>
            {inputOpen && (
              <form onSubmit={""} className="flex flex-col gap-2">
                <input
                  onChange={handleChange}
                  value={filterText}
                  type="text"
                  placeholder="İndirim Kodu"
                  className="pl-[35%] border-1 py-2"
                />
                <button
                  type="submit"
                  className="border-1 w-24 m-auto py-2 rounded-lg bg-orange-500 text-white"
                >
                  Submit
                </button>
              </form>
            )}
            <button
              onClick={() => history.push("/createOrder")}
              className="text-sm border-1 rounded-md py-2 px-5 bg-orange-500 text-white"
            >
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
