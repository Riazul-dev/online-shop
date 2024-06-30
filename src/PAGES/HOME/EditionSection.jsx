import React from "react";
import Button from "../../COMPONENTS/Button";

const EditionSection = () => {
  return (
    <div className="px-4">
      <div
        style={{ backgroundImage: "url(./bg-image2.png)" }}
        className="bg-[#226590] bg-no-repeat lg:bg-fixed bg-left-top md:bg-right-top lg:bg-right-bottom text-white py-16 px-5 md:px-12 md:place-items-center"
      >
        <div className="flex flex-col text-center md:text-start gap-3 md:gap-6">
          <div className="flex flex-col gap-3 md:w-[450px] lg:w-[600px]">
            <p className="text-xl">Limited Time Offer</p>
            <h2 className="text-2xl lg:text-5xl flex flex-col gap-2 tracking-wider font-semibold">
              Special Edition
            </h2>
            <p className="leading-8 text-sm md:pr-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <p className="font-bold md:text-lg">
              Buy This T-shirt At 20% Discount, Use Code OFF20
            </p>
          </div>
          <div className="md:flex">
            <Button
              className="bg-white text-black hover:bg-black hover:text-white flex justify-center items-center"
              text="shop now"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditionSection;
