import { Box, Slider } from "@mui/material";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { globalContext } from "../CONTEXT/Context";

const AccessoriesPageSidebar = () => {
  const [sliderValue, setSliderValue] = useState([50, 300]);
  const { menProducts, womenProducts, Accessories, FilteredAccessoriesProducts } = globalContext();


  return (
    <>
      <div className="flex items-start gap-2">
        <input
          className="w-full py-2 px-3 border outline-none placeholder:font-thin"
          type="text"
          placeholder="Search products..."
        />
        <button className="flex justify-center items-center bg-blue-500 hover:bg-blue-600 duration-300 px-2 py-3 text-white">
          <FaChevronRight />
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl text-slate-700">Filter by Price</h3>
        {/* mui */}
        <Box sx={{ width: "100%", px: "10px" }}>
          <Slider
            value={sliderValue}
            onChange={(e) => setSliderValue(e.target.value)}
            valueLabelDisplay="off"
            min={50}
            max={300}
          />
        </Box>

        <div className="flex justify-between items-center">
          <button
            onClick={() => FilteredAccessoriesProducts(sliderValue)}
            className="bg-blue-500 hover:bg-blue-600 duration-300 px-4 py-1 text-white text-sm"
          >
            FILTER
          </button>
          <p className="text-sm">
            Price: <span className="text-base">${sliderValue[0]}</span> -{" "}
            <span className="text-base">${sliderValue[1]}</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="text-2xl text-slate-600">Categories</h3>
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
    </>
  );
};

export default AccessoriesPageSidebar;
