import React from "react";
import MobileNav from "./MobileNav";
import LgNav from "./LgNav";

const Navbar = () => {
  return (
    <div className="w-full bg-[#1F576D]/70 text-white px-10 py-5 fixed top-0">
      

      {/* Large device Navbar */}
      <div className="w-full hidden lg:block">
        <LgNav />
      </div>

      {/* Mobile device Navbar */}
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
