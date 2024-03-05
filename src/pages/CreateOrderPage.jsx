import {
  faInfo,
  faPhone,
  faPlus,
  faTrash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OrderSummary from "../components/CreateOrderPageComp/OrderSummary";
import { useEffect, useState } from "react";
import { instance } from "../hooks/useAxios";
import { useDispatch, useSelector } from "react-redux";
import {
  removeAddressThunkAction,
  setAddress,
} from "../store/actions/shoppingCartAction";
import AddressModal from "../components/CreateOrderPageComp/AddressModal";
import Payment from "../components/CreateOrderPageComp/Payment";

export default function CreateOrderPage() {
  const dispatch = useDispatch();
  const address = useSelector((state) => state.shoppingCart.address);
  const token = localStorage.getItem("token");
  const [modal, setModal] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState({});
  const [option, setOption] = useState("address");

  useEffect(() => {
    instance
      .get("/user/address", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        dispatch(setAddress(res.data));
      });
  }, []);

  function removeAddress(id) {
    dispatch(removeAddressThunkAction(id));
    console.log(id);
  }

  function openEditModal(address) {
    setSelectedAddress(address);
    setModal(true);
  }

  const handleCheckboxChange = (checked, address) => {
    // Eğer checkbox işaretlendiyse ve seçili adres varsa
    if (checked && address) {
      // Seçili adresin bilgilerini set et
      setSelectedAddress(address);
    } else {
      // Checkbox işareti kaldırıldıysa ve seçili adres varsa
      if (selectedAddress) {
        // Seçili adresi temizle
        setSelectedAddress({});
      }
    }
  };

  const setterAP = (secenek) => {
    setOption(secenek);
  };

  return (
    <div className="flex px-10 py-10">
      <div className="flex flex-col w-3/4">
        <div className="flex">
          <div
            onClick={() => setterAP("address")}
            className={
              option === "address"
                ? `flex flex-col gap-2 border-2 py-3 w-3/4 px-3 border-b-orange-500 cursor-pointer bg-gray-200`
                : `flex flex-col gap-2 border-2 py-3 w-3/4 px-3 border-b-orange-500 cursor-pointer`
            }
          >
            <h1 className="text-2xl text-orange-500">Adres Bilgileri</h1>
            <p>
              {selectedAddress?.name} {selectedAddress?.surname}
            </p>
            <p>
              {selectedAddress?.address} {selectedAddress?.city}{" "}
              {selectedAddress?.district}
            </p>
          </div>
          <div
            onClick={() => setterAP("payment")}
            className={
              option === "payment"
                ? `flex flex-col gap-2 border-2 py-3 w-3/4 px-3 border-b-orange-500 cursor-pointer bg-gray-200`
                : `flex flex-col gap-2 border-2 py-3 w-3/4 px-3 border-b-orange-500 cursor-pointer`
            }
          >
            <h1 className="text-2xl text-orange-500">Ödeme Seçenekleri</h1>
            <p>
              <span className="font-extrabold text-black">
                Banka/Kredi Kartı
              </span>{" "}
              veya{" "}
              <span className="font-extrabold text-black">
                Alışveriş Kredisi
              </span>{" "}
              ile ödemenizi güvenle yapabilirsiniz
            </p>
          </div>
        </div>
        <div
          className={
            option === "payment"
              ? "w-full border-2 py-4 px-4 mt-3 gap-2 items-center hidden"
              : "w-full border-2 py-4 px-4 mt-3 flex gap-2 items-center"
          }
        >
          <FontAwesomeIcon
            className="rounded-full text-white border-1 h-6 w-6 bg-orange-500"
            icon={faInfo}
          />
          <p>
            Kurumsal faturalı alışveriş yapmak için "Faturamı Aynı Adrese
            Gönder" tikini kaldırın ve Fatura adresi olarak kayıtlı kurumsal
            fatura adresinizi seçin.
          </p>
        </div>
        {option === "address" && (
          <div className="flex flex-col mt-3 border-2 py-3 px-10">
            <div className="flex justify-between items-center">
              <h1 className="text-xl">Teslimat Adresi</h1>
              <div className="flex gap-1">
                <input type="checkbox" />
                <label htmlFor="">Faturamı aynı adrese gönder</label>
              </div>
            </div>
            <div className="flex flex-col gap-2 py-4">
              <div
                onClick={() => setModal(!modal)}
                className="flex flex-col items-center gap-2 border-1 rounded-md w-[40%] justify-center py-5 hover:bg-gray-200 cursor-pointer"
              >
                <FontAwesomeIcon
                  className="text-orange-500 text-xl"
                  icon={faPlus}
                />
                <h1 className="text-lg">Yeni Adres Ekle</h1>
              </div>
              {true && (
                <AddressModal
                  modal={modal}
                  setModal={setModal}
                  address={selectedAddress}
                />
              )}
              <div className="flex flex-wrap gap-x-10 ">
                {address.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="w-[40%] flex flex-col gap-2 py-4"
                    >
                      <div className="flex justify-between">
                        <div className="flex gap-2 ">
                          <input
                            type="checkbox"
                            checked={selectedAddress?.id === item.id}
                            onChange={(e) =>
                              handleCheckboxChange(e.target.checked, item)
                            }
                          />
                          <label htmlFor="">{item.title}</label>
                        </div>
                        <p
                          onClick={() => openEditModal(item)}
                          className="text-sm underline cursor-pointer"
                        >
                          Düzenle
                        </p>
                      </div>
                      <div className="border-1 rounded-md flex flex-col gap-7 px-3 h-[150px] justify-center">
                        <div className="flex justify-between">
                          <div className="flex gap-2">
                            <FontAwesomeIcon
                              className="text-orange-500"
                              icon={faUser}
                            />
                            <h2>
                              {item.name} <br />
                              {item.surname}
                            </h2>
                          </div>
                          <div className="flex gap-2">
                            <FontAwesomeIcon
                              className="text-orange-500"
                              icon={faPhone}
                            />
                            <h2 className="text-sm">{item.phone}</h2>
                          </div>
                        </div>
                        <p>
                          {item.address}
                          <br />
                          {item.neighborhood} <br />
                          {item.city} {item.district}
                        </p>
                      </div>
                      <FontAwesomeIcon
                        onClick={() => removeAddress(item.id)}
                        className="h-4 w-4 text-white bg-gray-500 p-2 rounded-full cursor-pointer"
                        icon={faTrash}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {option === "payment" && <Payment />}
      </div>
      <OrderSummary />
    </div>
  );
}
