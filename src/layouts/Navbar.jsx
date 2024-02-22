import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faCartShopping,
  faMagnifyingGlass,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import CryptoJS from "crypto-js";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [toggle, setToggle] = useState(false);
  const user = useSelector((store) => store.user.userInfo.token);
  const userName = useSelector((store) => store.user.userInfo.name);
  const userMail = useSelector((store) => store.user.userInfo.email);
  const categories = useSelector((store) => store.global.categories);
  const history = useHistory();
  const location = useLocation();

  const hash = CryptoJS.MD5(userMail);
  const gravatarUrl = `https://www.gravatar.com/avatar/${hash}?s=20`;

  function openerCloser() {
    setIsVisible(!isVisible);
  }
  useEffect(() => {
    // Close dropdown when navigating to another page
    setToggle(false);
  }, [location.pathname]); // Listen for changes in the route

  function logOut() {
    localStorage.removeItem("token");
    history.push("/login");
    location.reload();
  }
  const womanCategories = categories.filter((category) =>
    category.code.includes("k:")
  );
  const manCategories = categories.filter((category) =>
    category.code.includes("e:")
  );
  const clickHandle = (e) => {
    setToggle(!toggle);
  };
  return (
    <header className=" bg-white flex justify-between items-center px-24 py-6 sm:flex-col">
      <div className=" flex justify-center items-center gap-44 sm:flex-col sm:gap-14">
        <div className="sm:flex sm:items-center sm:gap-48 ">
          <NavLink className="font-bold text-[30px]" to="/">
            Bandage
          </NavLink>
          <div className="hidden sm:gap-4 sm:flex ">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faCartShopping} />
            <FontAwesomeIcon onClick={openerCloser} icon={faBars} />
          </div>
        </div>
        <div
          className={
            isVisible
              ? `flex gap-6 font-normal text-lg sm:flex-col sm:gap-4 sm:font-semibold sm:text-2xl sm:text-gray-600 `
              : "sm:hidden flex gap-6 font-normal text-lg sm:flex-col sm:gap-4 sm:font-semibold sm:text-2xl sm:text-gray-600"
          }
        >
          <NavLink to="/">Home</NavLink>
          <div className="flex gap-1">
            <NavLink to="/shopping">Shop</NavLink>
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="py-1 text-md font-semibold  ring-inset ring-gray-300 "
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  <svg
                    className=" h-6 w-6 hover:text-red-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    onClick={clickHandle}
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {toggle && (
                <div
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div className="py-1" role="none">
                    <p className="font-bold text-black text-xl p-2">Woman</p>
                    {womanCategories.map((category) => (
                      <NavLink
                        to={`/shopping/${
                          category.code.includes("k:")
                            ? `kadin/${category.code.slice(
                                2,
                                category.code.length
                              )}`
                            : `erkek/${category.code.slice(
                                2,
                                category.code.length
                              )}`
                        }`}
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                      >
                        {category.title}
                      </NavLink>
                    ))}
                  </div>
                  <div className="py-1" role="none">
                    <p className="font-bold text-black text-xl p-2">Men</p>
                    {manCategories.map((category) => (
                      <NavLink
                        to={`/shopping/${category.code}`}
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                      >
                        {category.title}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/team">Team</NavLink>
        </div>
      </div>
      <div className="font-bold text-lg text-[_#23A6F0] flex flex-row gap-6 items-center sm:hidden">
        <div className="flex justify-center items-center gap-1">
          {user ? (
            <>
              <img src={gravatarUrl} alt="" />
              <h1
                className="cursor-pointer hover:text-blue-900"
                onClick={() => history.push("/login")}
              >
                {userName}
              </h1>
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faUser} />
              <NavLink to="/login">Login /</NavLink>
              <NavLink to="/signup"> Register</NavLink>
            </>
          )}
        </div>
        <div className="flex gap-6">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <FontAwesomeIcon icon={faCartShopping} />
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon
            onClick={logOut}
            className="text-gray-800 pl-4 cursor-pointer"
            icon={faRightFromBracket}
          />
        </div>
      </div>
    </header>
  );
}
