import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import CryptoJS from "crypto-js";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const user = useSelector((store) => store.user.userInfo.token);
  const userName = useSelector((store) => store.user.userInfo.name);
  const userMail = useSelector((store) => store.user.userInfo.email);
  const history = useHistory();

  const hash = CryptoJS.MD5(userMail);
  const gravatarUrl = `https://www.gravatar.com/avatar/${hash}?s=20`;

  function openerCloser() {
    setIsVisible(!isVisible);
  }

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
          <NavLink to="/shopping">Shop</NavLink>
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
        </div>
      </div>
    </header>
  );
}
