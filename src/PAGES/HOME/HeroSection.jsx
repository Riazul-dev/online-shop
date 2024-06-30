import React from "react";
import Button from "../../COMPONENTS/Button";

const HeroSection = () => {
  return (
    <div
      style={{ backgroundImage: "url(./bg-image.png)" }}
      className="bg-[#1F576D] bg-no-repeat bg-right-top bg-contain bg-fixed pt-5 md:pt-0"
    >
      <div className="bg-gradient-to-br from-[#2075a6]/40 to-[#2096a6]/20 w-full h-[65vh] md:h-[55vh] lg:h-[92vh] py-10 flex items-center justify-center lg:justify-start text-white lg:px-10">
        <div className="flex flex-col gap-8 w-full md:w-auto px-5 md:px-14">
          <div className="flex flex-col items-center md:items-start gap-8">
            <h1 className="text-3xl md:text-6xl text-center md:text-start lg:w-[600px] md:leading-tight tracking-wider font-semibold">
              Raining Offers For Hot Summer!
            </h1>
            <p className="text-xl">25% Off On All Products</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <Button
              className="bg-white text-black hover:bg-black hover:text-white"
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
