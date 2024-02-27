import {
  faCartShopping,
  faChevronRight,
  faEye,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Carousel } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { instance } from "../../hooks/useAxios";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCartListAction } from "../../store/actions/shoppingCartAction";

export default function ProductCard() {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [dropdownOpen, setDropdownOpen] = useState(true);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.shoppingCart.cartList);

  useEffect(() => {
    instance.get(`/products/${productId}`).then((res) => {
      setProduct(res.data);
    });
  }, [productId]);

  const handleToggle = () => setDropdownOpen(!dropdownOpen);

  function addtoShoppingCart() {
    dispatch(setCartListAction(product));
  }

  return (
    <div className=" flex justify-center bg-lightGray ">
      <div className="flex flex-col ">
        <div className="flex flex-row justify-start  items-center  gap-3  font-semibold py-8 text-lg sm:justify-center">
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
        <div className="flex justify-between sm:flex-col sm:items-center sm:justify-center sm:py-20">
          {product?.images?.map((img, index) => {
            return (
              <div className="w-[40rem] flex flex-col gap-8 sm:m-auto">
                <Carousel
                  key={index}
                  className="w-[30rem] h-[40rem] sm:w-[30rem] sm:h-[30rem]"
                >
                  <img className="w-full h-full" src={img.url} />
                  <img className="w-full h-full" src={img.url} />
                </Carousel>

                <div className="flex gap-6 pb-10 w-28 h-32">
                  <img src={img.url} />
                  <img src={img.url} />
                </div>
              </div>
            );
          })}
          <div className="w-[48%] flex-col  flex gap-6">
            <h2 className="text-lg  text-textColor pt-4 font-semibold ">
              {product?.name}
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
              <p className="text-secondText font-bold">
                {product?.sell_count} Reviews
              </p>
            </div>
            <p className="text-textColor text-2xl font-bold ">
              ${product?.price}
            </p>
            <div className="flex  items-center">
              <p className="text-secondText text-lg font-semibold">
                Availability &nbsp;&nbsp;&nbsp;:
              </p>
              <p className="capitalize text-primaryColor text-lg font-semibold">
                &nbsp; In Stock
              </p>
            </div>
            <p className=" text-zinc">{product?.description}</p>
            <div className="w-[90%] h-[2px] bg-mutedColor"></div>
            <div className="flex  gap-3">
              <div className=" w-7 h-7 bg-primaryColor rounded-full"></div>
              <div className=" w-7 h-7 bg-successColor rounded-full"></div>
              <div className=" w-7 h-7 bg-alertColor rounded-full"></div>
              <div className=" w-7 h-7 bg-darkBg rounded-full"></div>
            </div>
            <div className="flex items-center gap-4 sm:gap-4 pt-7 ">
              <div className=" bg-primaryColor rounded-lg hover:bg-blue-900">
                <Dropdown
                  className=""
                  toggle={handleToggle}
                  isOpen={!dropdownOpen}
                >
                  <DropdownToggle caret>Select Options</DropdownToggle>
                  <DropdownMenu container="body">
                    <DropdownItem onClick={function noRefCheck() {}}>
                      Small
                    </DropdownItem>
                    <DropdownItem onClick={function noRefCheck() {}}>
                      Medium
                    </DropdownItem>
                    <DropdownItem onClick={function noRefCheck() {}}>
                      Large
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="h-11 w-11 border rounded-full flex justify-center items-center bg-white">
                <FontAwesomeIcon
                  className="h-6 w-6 text-textColor"
                  icon={faHeart}
                />
              </div>
              <div className="h-11 w-11 border rounded-full flex justify-center items-center bg-white">
                <FontAwesomeIcon
                  className="h-6 w-6 text-textColor cursor-pointer hover:text-blue-gray-500"
                  icon={faCartShopping}
                  onClick={addtoShoppingCart}
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
