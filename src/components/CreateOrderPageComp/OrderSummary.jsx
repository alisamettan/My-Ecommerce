import { faChevronRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

export default function OrderSummary() {
  const cart = useSelector((state) => state.shoppingCart.cartList);
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
        <button className="text-sm border-1 rounded-md py-2 px-5 bg-orange-500 text-white">
          Kaydet ve Devam Et <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}
