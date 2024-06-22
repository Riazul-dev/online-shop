import React from "react";
import { BiSolidUser } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const MobilMenu = ({ toggleMenu, setToggleMenu }) => {
  return (
    <>
      <div className="flx flex-col">
        <div className="py-4 px-6">
          <NavLink to="/logIn" onClick={() => setToggleMenu(!toggleMenu)}>
            <BiSolidUser className="bg-gray-400 p-1 text-4xl text-white rounded-full" />
          </NavLink>
        </div>

        <div className="flex flex-col bg-slate-200">
          <NavLink
            to="everything"
            className="py-6 px-6 border-b border-slate-500"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            EVERYTHING
          </NavLink>
          <NavLink
            to="/womenProducts"
            className="py-6 px-6 border-b border-slate-500"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            WOMEN
          </NavLink>
          <NavLink
            to="/menProducts"
            className="py-6 px-6 border-b border-slate-500"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            MEN
          </NavLink>
          <NavLink
            to="/accessories"
            className="py-6 px-6 border-b border-slate-500"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            ACCESSORIES
          </NavLink>
        </div>

        <div className="flex flex-col gap-4 bg-slate-200 mt-10">
          <NavLink
            to="/about"
            className="py-6 px-6 border-b border-slate-500"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contactUs"
            className="py-6 px-6 border-b border-slate-500"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            CONTACT US
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default MobilMenu;
