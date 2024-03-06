import { useEffect, useState } from "react";
import CardModal from "./CardModal";
import { instance } from "../../hooks/useAxios";

export default function Payment() {
  const [cardModal, setCardModal] = useState(false);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});
  const token = localStorage.getItem("token");

  function editCard(card) {
    setSelectedCard(card);
    setCardModal(true);
  }

  useEffect(() => {
    instance
      .get("/user/card", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => setCards(res.data));
  }, []);

  function formatCardNumber(cardNumber) {
    // Kart numarasının sadece 6. ve 13. karakterleri gösterilsin, geri kalanları * olarak değiştirilsin
    const visiblePart =
      cardNumber.slice(0, 6) + "*".repeat(7) + cardNumber.slice(13);
    return visiblePart.match(/.{1,4}/g).join(" "); // Dört rakamlık gruplara ayır ve aralarına boşluk ekle
  }

  return (
    <div className="">
      <div className="w-full border-2 py-4 px-4 mt-3 flex gap-2 items-center">
        <input type="checkbox" checked="true" />
        <p>
          Kart ile ödemeyi seçtiniz.Banka veya Kredi Kartı kullanarak ödemenizi
          güvenle yapabilirsiniz.
        </p>
      </div>
      <div className="border-1 py-3 mt-2 px-3">
        <div className="flex">
          <div className="flex flex-col w-[50%]">
            <div className="flex justify-between pr-6 items-center">
              <h1 className="text-xl">Kart Bilgileri</h1>
              <p
                onClick={() => setCardModal(!cardModal)}
                className="underline cursor-pointer"
              >
                Başka bir Kart ile Ödeme Yap
              </p>
              <CardModal
                cardModal={cardModal}
                setCardModal={setCardModal}
                card={selectedCard}
              />
            </div>
            <div className="py-6 flex flex-wrap gap-3">
              {cards.map((card, index) => {
                return (
                  <div
                    onClick={() => editCard(card)}
                    key={index}
                    className="flex flex-col gap-2 cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <input type="checkbox" />
                      <label className="text-black font-extrabold" htmlFor="">
                        Bonus Kartım
                      </label>
                    </div>
                    <div className="w-[300px] h-[150px] border-1 rounded-lg">
                      <div className="flex flex-col px-3">
                        <div className="flex items-center justify-between ">
                          <img
                            className="w-20"
                            src="https://mekaskablo.com/wp-content/uploads/2019/10/bonus.png"
                            alt=""
                          />
                          <img
                            className="w-12 h-8"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png"
                            alt=""
                          />
                        </div>
                        <div className="text-end flex flex-col pt-6">
                          <p>{formatCardNumber(card.card_no)}</p>
                          <p>
                            {card.expire_month} / {card.expire_year}
                          </p>
                          <p>{card.name_on_card}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-[50%] border-l-2 px-3">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl">Taksit Seçenekleri</h1>
              <p>Kartınıza uygun taksit seçeneği seçiniz.</p>
            </div>
            <div className="border-1 w-[70%] flex flex-col gap-3 mt-4 py-3 px-4 rounded-lg">
              <div className="flex justify-between border-b-2 py-2">
                <p>Taksit Sayısı</p>
                <p>Aylık Ödeme</p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-1">
                  <input type="checkbox" checked="true" />
                  <label htmlFor="">Tek Çekim</label>
                </div>
                <p>6666 $</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}