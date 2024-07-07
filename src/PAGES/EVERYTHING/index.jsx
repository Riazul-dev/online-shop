import React from "react";
import CardProduct from "../../COMPONENTS/Card_Product";
import { globalContext } from "../../CONTEXT/Context";
import EverythingPageSidebar from "../../COMPONENTS/EverythingPageSidebar";
import BestSellers from "../../COMPONENTS/BestSellers";

const Everything = () => {
  const { sortingProducts, filteredProducts, products } = globalContext();
  return (
    <div className="bg-[#F5F7F9] pt-10 mt-10">
      <div className="grid lg:grid-cols-4 py-10">
        {/* Side bar */}
        <div className="px-4 py-6 flex flex-col gap-12 order-1 lg:order-none">
          <EverythingPageSidebar />
          <BestSellers />
        </div>

        {/* Main */}
        <div className="lg:col-span-3 bg-white px-2 pt-10 md:px-4 mx-4 lg:px-28">
          <div>
            <p className="text-slate-500">Home / Store</p>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-2 pt-6">
            <p>Showing 1-12 of 14 results</p>
            <form action="#">
              <label htmlFor="sort"></label>
              <select
                name="sort"
                id="sort"
                onChange={(e) => sortingProducts({sortedValue: e.target.value, data: products})}
                className="outline-none border-none shadow-sm py-2 px-3 border rounded-md text-slate-500"
              >
                {/* <option value="default">Default Sorting</option> */}
                {/* <option value="popularity">Sort by Popularity</option>
                <option value="average">Sort by average rating</option>
                <option value="latest">Sort by latest</option> */}
                <option value="lowest">Sort by price: low to high</option>
                <option value="highest">Sort by price: high to low</option>
              </select>
            </form>
          </div>

          {/* Products */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 py-6 md:py-10">
            {filteredProducts.map((product) => {
              return <CardProduct key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Everything;
