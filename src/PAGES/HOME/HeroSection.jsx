import React from "react";
import Button from "../../COMPONENTS/Button";

const HeroSection = () => {
  return (
    <div
      className="bg-[#1F576D] bg-no-repeat bg-right-top bg-contain bg-fixed"
      style={{ backgroundImage: "url(./bg-image.png)" }}
    >
      <div className="bg-gradient-to-br from-[#2075a6]/40 to-[#2096a6]/20 w-full h-screen flex items-center justify-center text-white lg:px-40">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl md:text-7xl flex flex-col gap-2 tracking-wider font-semibold">
            <span>Raining Offers For</span> <span>Hot Summer!</span>
          </h1>
          <p className="text-2xl">25% Off On All Products</p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button
              className="bg-white text-black hover:bg-black hover:text-white w-full md:w-auto"
              text="shop now"
              to="/everything"
            />
            <Button
              className="border border-white text-white hover:bg-white hover:text-black w-full md:w-auto"
              text="find more"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
