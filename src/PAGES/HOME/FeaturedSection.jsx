import React from "react";
import CardProduct from "../../COMPONENTS/Card_Product";
import { globalContext } from "../../CONTEXT/Context";

const FeaturedSection = () => {
  const { products } = globalContext();

  return (
    <div className="bg-slate-100 py-20 md:px-8 lg:px-10">
      <div className="flex flex-col items-center gap-10">
        <h2 className="text-center text-4xl font-semibold text-[#6EC1E4]">
          Featured Products
        </h2>
        <span className="w-28 h-0.5 bg-[#2A85D6]"></span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 py-20 px-4">
        {products.map((product) => {
          return <CardProduct key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedSection;
