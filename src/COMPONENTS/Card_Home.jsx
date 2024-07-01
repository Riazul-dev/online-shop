import React from "react";
import Button from "./Button";

const CardHome = ({ title, desc, img }) => {
  return (
    <div
      className="h-[300px] md:h-[450px] lg:h-[500px] lg:max-w-96 bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="bg-black/70 h-full flex flex-col justify-end gap-6 border p-5 lg:p-6 text-white">
        <div className="flex flex-col gap-3 md:gap-2">
          <p className="text-xl md:text-lg lg:text-2xl">{title}</p>
          <p className="leading-loose md:text-sm md:leading-9">{desc}</p>
        </div>
        <div className="md:flex">
          <Button
            className="bg-white text-black hover:bg-black hover:text-white flex items-center justify-center"
            text="shop now"
            to="/everything"
          />
        </div>
      </div>
    </div>
  );
};

export default CardHome;
