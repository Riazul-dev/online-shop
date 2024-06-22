import React from "react";
import Button from "./Button";

const CardHome = ({ title, desc, img }) => {
  return (
    <div
      className="h-[300px] max-w-96 lg:h-[500px] bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          `url(${img})`,
      }}
    >
      <div className="bg-black/70 h-full flex flex-col justify-end gap-5 border p-5 lg:p-10 text-white">
        <p className="text-xl lg:text-2xl">{title}</p>
        <p>{desc}</p>
        <div>
          <Button
            className="bg-white text-black hover:bg-black hover:text-white w-full md:w-auto"
            text="shop now"
            to="/everything"
          />
        </div>
      </div>
    </div>
  );
};

export default CardHome;
