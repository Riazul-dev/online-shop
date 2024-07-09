import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const NavComponent = ({ component, displayProduct }) => {
  const { productName } = displayProduct;

  const [clickValue, setClickValue] = useState(0);

  const starRatings = Array.from({ length: 5 }, (elem, index) => {
    return (
      <span
        key={index}
        onClick={() => setClickValue(index + 1)}
        className="cursor-pointer text-2xl"
      >
        {clickValue >= index + 1 ? <FaStar /> : <FaRegStar />}
      </span>
    );
  });

  return (
    <>
      {component ? (
        // Review section
        <div className="border p-4 flex flex-col gap-5 text-slate-600">
          <div className="flex flex-col gap-2">
            <h3>
              Be the first to review
              <span className="text-xl font-light">"{productName}"</span>
            </h3>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>

          {/* Rating field */}
          <div className="flex items-center gap-4">
            <p>Your rating *</p>
            <div className="flex items-center gap-1">{starRatings}</div>
          </div>

          <form action="#" onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
            {/* Review field */}
            <div>
              <p>Your review *</p>
              <textarea
                className="w-full border outline-none p-4"
                name="#"
                id="#"
                rows={3}
              />
            </div>

            {/* Name & Email field */}
            <div className="flex items-center gap-5">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name">Name *</label>
                <input
                  className="px-4 py-3 outline-none border"
                  type="text"
                  id="name"
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="email">Email *</label>
                <input
                  className="px-4 py-3 outline-none border"
                  type="email"
                  id="email"
                />
              </div>
            </div>

            {/* Checkbox field */}
            <div className="flex items-center gap-4">
              <input className="cursor-pointer" type="checkbox" id="check" />
              <label htmlFor="check">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>

            {/* Button */}
            <div>
              <button className="uppercase bg-blue-500 text-white px-7 py-3">
                submit
              </button>
            </div>
          </form>
        </div>
      ) : (
        // Description section
        <div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl">Product description</h3>
            <p>
              Since it’s creation lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
            <p className="py-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
          <div className="">
            <div className="grid md:grid-cols-2">
              <img
                className="w-full"
                src="./products/Basic-Gray-Jeans.jpeg"
                alt=""
              />
              <img
                className="w-full"
                src="./products/Yellow-Shoes.jpeg"
                alt=""
              />
            </div>

            <div className="grid md:grid-cols-2">
              <div className="md:order-1 flex flex-col justify-center gap-4 p-8 bg-white">
                <div>
                  <h4 className="text-xl">Ut enim ad minim</h4>
                  <p className="text-slate-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl">Quis nostrud</h4>
                  <p className="text-slate-500">
                    Sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl">Duis aute irure</h4>
                  <p className="text-slate-500">
                    Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore.
                  </p>
                </div>
              </div>
              <img className="w-full" src="./products/Blue-Shoes.jpeg" alt="" />
            </div>

            <div className="grid md:grid-cols-2">
              <div className="bg-white flex flex-col justify-center gap-3 p-8">
                <h4 className="text-xl">More about the product</h4>
                <p className="text-sm text-slate-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in.
                </p>
              </div>
              <img className="w-full" src="./products/Blue-Shoes.jpeg" alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavComponent;
