import React from "react";
import Button from "../../COMPONENTS/Button";

const EditionSection = () => {
  return (
    <div className="bg-[#226590] bg-no-repeat bg-right bg-contain bg-fixed mx-5" style={{backgroundImage: 'url(./bg-image2.png)'}}>
      <div className="grid lg:grid-cols-2 text-white py-12 px-6 md:px-12 md:place-items-center">
        <div className="flex flex-col text-center md:text-start gap-3 md:gap-5 md:pr-24 lg:pr-0">
          <p className="text-2xl">Limited Time Offer</p>
          <h2 className="text-3xl lg:text-5xl flex flex-col gap-2 tracking-wider font-semibold">
            Special Edition
          </h2>
          <p className="leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <p className="font-bold md:text-2xl">
            Buy This T-shirt At 20% Discount, Use Code OFF20
          </p>
          <div>
            <Button
              className="bg-white text-black hover:bg-black hover:text-white w-full md:w-auto"
              text="shop now"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditionSection;
