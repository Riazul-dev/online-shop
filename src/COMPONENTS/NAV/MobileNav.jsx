import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MobilMenu from "./MobilMenu";
import { CgClose, CgMenu } from "react-icons/cg";
import { BiSolidCartDownload } from "react-icons/bi";
import { globalContext } from "../../CONTEXT/Context";
import CartSlider from "./CART_SLIDER";
import { GoDash } from "react-icons/go";

const MobileNav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const { cartProducts } = globalContext();

  return (
    <>
      <div className="flex justify-between">
        {/* Logo */}
        <div>
          <NavLink
            className="flex justify-center items-center text-xl font-serif hover:text-blue-300 duration-200"
            to="/"
          >
            E<GoDash />
            SHOP
          </NavLink>
        </div>
        <div className="flex justify-center items-center gap-3">
          {/* cart icon */}
          <div className="relative px-4">
            <NavLink
              className="flex gap-2 text-black hover:text-blue-400 duration-500"
              onClick={() => setToggleCart(!toggleCart)}
            >
              <p className="text-lg font-medium">$0.00</p>
              <BiSolidCartDownload className="text-2xl" />
              <span className="absolute min-h-5 min-w-5 flex justify-center items-center -top-4 right-0 border rounded-full text-xs p-0.5 bg-white text-slate-900">
                {cartProducts.length > 0 ? cartProducts.length : 0}
              </span>
            </NavLink>
          </div>

          <div
            className="cursor-pointer lg:hidden bg-black p-2"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            {!toggleMenu ? <CgMenu /> : <CgClose />}
          </div>
        </div>

        {/* Slider Menu */}
        <div
          className={`fixed top-20 ${
            toggleMenu ? "right-0" : "-right-full"
          } duration-700 w-[90vw] h-screen bg-white text-black z-50`}
        >
          <MobilMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        </div>

        <div
          className={`fixed top-0 ${
            toggleCart ? "right-0" : "-right-[110%]"
          } duration-700 w-[98vw] h-screen bg-white text-black z-50`}
        >
          <CartSlider toggleCart={toggleCart} setToggleCart={setToggleCart} />
        </div>
      </div>
    </>
  );
};

export default MobileNav;
