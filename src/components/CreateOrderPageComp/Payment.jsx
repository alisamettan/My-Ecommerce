import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Payment() {
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
              <p className="underline">Başka bir Kart ile Ödeme Yap</p>
            </div>
            <div className="py-6 flex flex-wrap gap-3">
              <div className="flex flex-col gap-2">
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
                      <p>555555555555555</p>
                      <p>8 / 2027</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
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
                      <p>555555555555555</p>
                      <p>8 / 2027</p>
                    </div>
                  </div>
                </div>
              </div>
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
