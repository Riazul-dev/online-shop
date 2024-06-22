import React from "react";
import { globalContext } from "../../CONTEXT/Context";
import CardProduct from "../../COMPONENTS/Card_Product";
import CategoryPageSidebar from "../../COMPONENTS/CategoryPageSidebar";
import BestSellers from "../../COMPONENTS/BestSellers";

const Accessories = () => {
  const { Accessories } = globalContext();

  return (
    <div className="bg-[#F5F7F9] pt-10 mt-10">
      <div className="grid lg:grid-cols-4 py-10">
        {/* Side bar */}
        <div className="px-4 py-6 flex flex-col gap-12 order-1 lg:order-none">
          <CategoryPageSidebar />
          <BestSellers />
        </div>

        {/* Main */}
        <div className="lg:col-span-3 bg-white px-2 pt-10 md:px-4 mx-4 lg:px-28">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <p className="text-slate-500">Home / Accessories</p>
              <h3 className="text-3xl lg:text-6xl">Accessories</h3>
            </div>

            <p className="leading-8">
              Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
              mauris vitae erat consequat auctor eu in elit. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus
              condimentum sit amet a augue. Sed non neque elit sed ut.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-2 pt-12">
            <p>Showing 1-12 of 14 results</p>
            <select className="outline-none border-none shadow-sm py-2 px-3 w-3/5 md:w-2/5 border rounded-md text-slate-500">
              <option value="#">Default Sorting</option>
              <option value="#">Sort by Popularity</option>
              <option value="#">Sort by average rating</option>
              <option value="#">Sort by latest</option>
              <option value="#">Sort by price: low to high</option>
              <option value="#">Sort by price: high to low</option>
            </select>
          </div>

          {/* Products */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 py-6 md:py-20">
            {Accessories.map((product) => {
              return <CardProduct key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
