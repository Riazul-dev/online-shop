import React from "react";

const data = [
  {
    id: 1,
    icon: "globe-free-img.png",
    title: "Worldwide Shipping",
    desc: "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    id: 2,
    icon: "quality-free-img.png",
    title: "Best Quality",
    desc: "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    id: 3,
    icon: "tag-free-img.png",
    title: "Best Offers",
    desc: "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    id: 4,
    icon: "lock-free-img.png",
    title: "Secure Payments",
    desc: "It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
];

const CardFooter = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:place-items-center gap-20 lg:gap-0  py-20">
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className="lg:min-w-60 lg:max-w-80 flex flex-col justify-center items-center gap-5 px-8"
          >
            <img className="w-16" src={item.icon} alt="icon" />
            <div className="flex flex-col justify-center items-center gap-4">
              <p className="text-[#6EC1E4] text-lg font-semibold">
                {item.title}
              </p>
              <p className="text-center text-slate-500 leading-7">
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardFooter;
