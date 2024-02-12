import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white flex flex-row justify-between items-center px-24 py-6">
      <div className="flex flex-row justify-center items-center gap-44">
        <div>
          <NavLink className="font-bold text-[30px]" to="/">
            Bandage
          </NavLink>
        </div>
        <div className="flex gap-5 font-normal text-lg">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/pages">Pages</NavLink>
        </div>
      </div>
      <div className="font-bold text-lg text-[_#23A6F0] flex flex-row gap-6 items-center">
        <div className="flex justify-center items-center gap-1">
          <FontAwesomeIcon icon={faUser} />
          <NavLink to="/login">Login /</NavLink>
          <NavLink to="/signup"> Register</NavLink>
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

{
  /* <div className="  m-auto">
        <div className="flex justify-between  items-center px-10 py-6">
          <div>
            {" "}
            <NavLink to="/" exact className="font-bold text-[26px]">
              Bandage
            </NavLink>
          </div>
          <div className="font-semibold text-lg flex flex-start gap-[1rem]">
            {" "}
            <NavLink to="/" className="" activeClassName="text-black" exact>
              Home
            </NavLink>
            <NavLink to="/shopping" className="" activeClassName="text-black">
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className=""
              activeClassName="text-black"
              exact
            >
              About
            </NavLink>
            <NavLink to="/blog" className="" activeClassName="text-black" exact>
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className=""
              activeClassName="text-black"
              exact
            >
              Contact
            </NavLink>
            <NavLink to="/team" className="" activeClassName="text-black" exact>
              Pages
            </NavLink>
          </div>
          <div className="flex items-center gap-2 text-black sm:text-primary-color font-bold ">
            <div className="flex">
              {" "}
              <NavLink to="/login" exact>
                Login /
              </NavLink>
              <NavLink to="/signup" exact>
                Register
              </NavLink>
            </div>

            <input
              type="text"
              name="searchingItem"
              className="border border-[#DADADA] rounded-md bg-[#F5F5F5] text-black p-2 sm:w-72"
              placeholder="Search"
            ></input>

            <button className="flex items-center ">
              <i className="bx bx-search  text-2xl"></i>
            </button>
          </div>
        </div>
      </div> */
}
