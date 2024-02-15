import {
  faCartShopping,
  faChevronRight,
  faEye,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import card1 from "../../assets/ProductPagepics/card1.jpg";
import card2 from "../../assets/ProductPagepics/card2.jpg";
import card3 from "../../assets/ProductPagepics/card3.jpg";
import { Carousel } from "@material-tailwind/react";

export default function ProductCard() {
  return (
    <div className=" flex justify-center bg-lightGray ">
      <div className="flex flex-col ">
        <div className="flex flex-row  justify-start  items-center  gap-3  font-semibold py-8 text-lg">
          <Link to="/">
            <h3 className="text-textColor text-lg ">Home</h3>
          </Link>
          <FontAwesomeIcon
            className="h-5 w-5 text-mutedColor"
            icon={faChevronRight}
          />{" "}
          <Link to="/shopping">
            <h3 className="text-mutedColor text-lg ">Shop</h3>
          </Link>
        </div>
        <div className="flex flex-row justify-between ">
          <div className="w-[40%] flex flex-col gap-8">
            <Carousel className="">
              <img className="w-full" src={card1} />
              <img className="w-full" src={card1} />
            </Carousel>
            <div className=" flex gap-6 pb-10">
              <img src={card2} />
              <img src={card3} />
            </div>
          </div>
          <div className="w-[48%]  flex-col  flex gap-6">
            <h2 className="text-lg xl:text-2xl text-textColor pt-4 font-semibold ">
              Floating Phone
            </h2>
            <div className="flex  items-center gap-4">
              <div className="flex gap-1">
                <FontAwesomeIcon
                  icon={faStar}
                  className="w-7 h-7 text-yellow "
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="w-7 h-7 text-yellow "
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="w-7 h-7 text-yellow "
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="w-7 h-7 text-yellow "
                />
              </div>
              <p className="text-secondText font-bold">10 Reviews</p>
            </div>
            <p className="text-textColor text-2xl font-bold ">$1,139.33</p>
            <div className="flex  items-center">
              <p className="text-secondText text-lg font-semibold">
                Availability &nbsp;&nbsp;&nbsp;:
              </p>
              <p className="capitalize text-primaryColor text-lg font-semibold">
                &nbsp; In Stock
              </p>
            </div>
            <p className=" text-zinc">
              <span>
                Met minim Mollie non desert Alamo est sit cliquey dolor <br />
                do met sent. RELIT official consequent door ENIM RELIT Mollie.
                <br />
                Excitation venial consequent sent nostrum met.
              </span>
            </p>
            <div className="w-[90%] h-[2px] bg-mutedColor"></div>
            <div className="flex  gap-3">
              <div className=" w-7 h-7 bg-primaryColor rounded-full"></div>
              <div className=" w-7 h-7 bg-successColor rounded-full"></div>
              <div className=" w-7 h-7 bg-alertColor rounded-full"></div>
              <div className=" w-7 h-7 bg-darkBg rounded-full"></div>
            </div>
            <div className="flex  items-center gap-2 xl:gap-4 pt-7">
              <button className="font-semibold xl:tracking-wider text-md  bg-primaryColor text-lightText py-3 px-4 rounded-lg">
                Select Options
              </button>
              <div className="h-11 w-11 border rounded-full flex justify-center items-center bg-white">
                <FontAwesomeIcon
                  className="h-6 w-6 text-textColor"
                  icon={faHeart}
                />
              </div>
              <div className="h-11 w-11 border rounded-full flex justify-center items-center bg-white">
                <FontAwesomeIcon
                  className="h-6 w-6 text-textColor"
                  icon={faCartShopping}
                />
              </div>
              <div className="h-11 w-11 border rounded-full flex justify-center items-center bg-white">
                <FontAwesomeIcon
                  className="h-6 w-6 text-textColor"
                  icon={faEye}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
