import React, { useState } from "react";
import { BiSolidCartDownload, BiSolidUser } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { globalContext } from "../../CONTEXT/Context";
import { GoDash } from "react-icons/go";
import CartSlider from "./CART_SLIDER";

const LgNav = () => {
  const [toggleCart, setToggleCart] = useState(false);
  const { cartProducts } = globalContext();

  return (
    <div>
      <div className="flex justify-between items-center tracking-wider font-thin text-sm">
        <div className="flex items-center font-medium gap-4">
          <NavLink
            className="flex justify-center items-center text-3xl font-serif hover:text-blue-300 duration-200"
            to="/"
          >
            E<GoDash />
            SHOP
          </NavLink>

          <NavLink
            className="hover:text-blue-300 duration-200"
            to="/everything"
          >
            EVERYTHING
          </NavLink>
          <NavLink
            to="/womenProducts"
            className="hover:text-blue-300 duration-200"
          >
            WOMEN
          </NavLink>
          <NavLink
            to="/menProducts"
            className="hover:text-blue-300 duration-200"
          >
            MEN
          </NavLink>
          <NavLink
            to="/accessories"
            className="hover:text-blue-300 duration-200"
          >
            ACCESSORIES
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          <NavLink to="/about" className="hover:text-blue-300 duration-200">
            ABOUT
          </NavLink>
          <NavLink to="/contactUs" className="hover:text-blue-300 duration-200">
            CONTACT US
          </NavLink>

          <div className="relative px-4">
            <NavLink onClick={() => setToggleCart(!toggleCart)}>
              <BiSolidCartDownload className="text-2xl hover:text-blue-300 duration-200" />
              <span className="absolute min-h-5 min-w-5 flex justify-center items-center -top-4 right-0 border rounded-full text-xs p-0.5 bg-white text-slate-900">
                {cartProducts.length > 0 ? cartProducts.length : 0}
              </span>
            </NavLink>
          </div>
          <NavLink
            to="/logIn"
            className="border rounded-full p-1 flex justify-center items-center"
          >
            <BiSolidUser />
          </NavLink>
        </div>
      </div>

      <div
        className={`fixed top-0 ${
          toggleCart ? "right-0" : "-right-[110%]"
        } duration-700 w-[45vw] h-screen bg-white text-black z-50`}
      >
        <CartSlider toggleCart={toggleCart} setToggleCart={setToggleCart} />
      </div>
    </div>
  );
};

export default LgNav;
