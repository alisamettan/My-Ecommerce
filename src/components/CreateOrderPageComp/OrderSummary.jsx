import { faChevronRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { instance } from "../../hooks/useAxios";
import {
  orderThunkAction,
  setLoading,
} from "../../store/actions/shoppingCartAction";

export default function OrderSummary({ setOption, option, selectedAddress }) {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const cart = useSelector((state) => state.shoppingCart.cartList);
  const checkedCard = useSelector((state) => state.shoppingCart.checkedCard);
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

  function giveOrder() {
    const productsBought = [];
    for (const product of cart) {
      productsBought.push({
        product_id: product.id,
        count: product.count,
        detail: product.name,
      });
    }
    const postData = {
      address_id: selectedAddress.id,
      order_date: new Date().toISOString(),
      card_no: checkedCard.card_no,
      card_name: checkedCard.name_on_card,
      card_expire_month: checkedCard.expire_month,
      card_expire_year: checkedCard.expire_year,
      card_ccv: 111,
      price: cargoCalculator(),
      products: [...productsBought],
    };
    if (option === "payment") {
      dispatch(orderThunkAction(postData));
    } else {
      setOption("payment");
    }
  }
  return (
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
          <p className="text-orange-500">{toFixed2(cargoCalculator())} $</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-1 items-center">
          <input type="checkbox" name="" id="" />
          <label className="text-xs">
            <span className="font-extrabold text-black underline cursor-pointer">
              Ön Bilgilendirme Koşulları
            </span>
            'nı ve{" "}
            <span className="font-extrabold text-black underline cursor-pointer">
              Mesafeli Satış Sözleşmesi
            </span>
            'ni okudum,onaylıyorum.
          </label>
        </div>
        <button
          onClick={giveOrder}
          className="text-sm border-1 rounded-md py-2 px-5 bg-orange-500 text-white"
        >
          {option === "address" ? " Kaydet ve Devam Et" : "Ödeme Yap"}{" "}
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}
