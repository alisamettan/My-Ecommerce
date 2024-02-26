import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import chair from "../../../public/assets/ProductPagepics/productchair.png";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Feature() {
  return (
    <div className=" flex flex-col items-center gap-14 py-16">
      <div className="w-4/5 py-10  border-b-4 border-gray-200">
        <ul className="flex justify-center items-center gap-10  text-lg  text-secondText font-bold  ">
          <li>Description</li>
          <li>Additional Information</li>
          <li>
            Reviews <span className="text-secondaryColorGreen">(0)</span>
          </li>
        </ul>
      </div>
      <div className="w-3/4">
        <div className="flex justify-between gap-12 sm:flex-col sm:gap-8 sm:justify-center sm:items-center">
          <div className="w-[28rem] relative ">
            <img className="w-full h-full z-40 rounded-md" src={chair} />
            <div className="h-full w-full bg-stone absolute -right-3 -bottom-2 -z-30 rounded-md"></div>
          </div>
          <div className="w-[25rem] font-normal text-md flex flex-col gap-4">
            <h3 className="font-semibold  text-xl">
              the quick fox jumps over{" "}
            </h3>
            <p className="font-normal text-md">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="font-normal text-md">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="font-normal text-md">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <div className="w-[32rem] font-normal flex flex-col gap-6 sm:justify-center sm:items-center">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold   text-xl text-start  text-textColor">
                the quick fox jumps over{" "}
              </h3>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <FontAwesomeIcon
                    className="h-6 w-6 text-secondText"
                    icon={faChevronRight}
                  />
                  <p className="text-secondText font-normal  text-base">
                    the quick fox jumps over the lazy dog
                  </p>
                </div>
                <div className="flex gap-3">
                  <FontAwesomeIcon
                    className="h-6 w-6 text-secondText"
                    icon={faChevronRight}
                  />
                  <p className="text-secondText font-normal  text-base">
                    the quick fox jumps over the lazy dog
                  </p>
                </div>
                <div className="flex gap-3">
                  <FontAwesomeIcon
                    className="h-6 w-6 text-secondText"
                    icon={faChevronRight}
                  />
                  <p className="text-secondText font-normal text-base">
                    the quick fox jumps over the lazy dog
                  </p>
                </div>
                <div className="flex gap-3">
                  <FontAwesomeIcon
                    className="h-6 w-6 text-secondText"
                    icon={faChevronRight}
                  />
                  <p className="text-secondText font-normal text-base">
                    the quick fox jumps over the lazy dog
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold  text-start text-xl text-textColor">
                the quick fox jumps over{" "}
              </h3>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <FontAwesomeIcon
                    className="h-6 w-6 text-secondText"
                    icon={faChevronRight}
                  />
                  <p className="text-secondText font-normal ttext-base">
                    the quick fox jumps over the lazy dog
                  </p>
                </div>
                <div className="flex gap-3">
                  <FontAwesomeIcon
                    className="h-6 w-6 text-secondText"
                    icon={faChevronRight}
                  />
                  <p className="text-secondText font-normal text-base">
                    the quick fox jumps over the lazy dog
                  </p>
                </div>
                <div className="flex gap-3">
                  <FontAwesomeIcon
                    className="h-6 w-6 text-secondText"
                    icon={faChevronRight}
                  />
                  <p className="text-secondText font-normal  text-base">
                    the quick fox jumps over the lazy dog
                  </p>
                </div>
                <div className="flex gap-3">
                  <FontAwesomeIcon
                    className="h-6 w-6 text-secondText"
                    icon={faChevronRight}
                  />
                  <p className="text-secondText font-normal  text-base">
                    the quick fox jumps over the lazy dog
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
