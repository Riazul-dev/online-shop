import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { globalContext } from "../CONTEXT/Context";

const ViewCartSidebar = () => {
  const { menProducts, womenProducts, Accessories } = globalContext();

  return (
    <div className="flex flex-col gap-10 px-4 py-5">
      <div className="flex items-start gap-2">
        <input
          className="w-full py-2 px-3 border placeholder:font-thin"
          type="text"
          placeholder="Search products..."
        />
        <button className="flex justify-center items-center bg-blue-500 hover:bg-blue-600 duration-300 px-2 py-3 text-white">
          <FaChevronRight />
        </button>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="text-xl text-slate-600">Categories</h3>
        <div className="flex justify-between items-center text-slate-700">
          <Link to="/accessories" className="hover:text-blue-600 duration-300">
            Accessories
          </Link>
          <p>({Accessories.length})</p>
        </div>
        <div className="flex justify-between items-center text-slate-700">
          <Link to="/menProducts" className="hover:text-blue-600 duration-300">
            Men
          </Link>
          <p>({menProducts.length})</p>
        </div>
        <div className="flex justify-between items-center text-slate-700">
          <Link
            to="/womenProducts"
            className="hover:text-blue-600 duration-300"
          >
            Women
          </Link>
          <p>({womenProducts.length})</p>
        </div>
      </div>
    </div>
  );
};

export default ViewCartSidebar;
