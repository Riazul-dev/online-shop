import React from "react";
import {BestProducts} from "../PRODUCTS-DATA/BestProducts";

const BestSellers = () => {
  return (
    <div>
      <h2 className="text-2xl text-slate-600 py-4">Our Best Sellers</h2>

      <div>
        {BestProducts.map((product) => {
            const {productImage, productName, newPrice, star} = product;
          return (
            <div key={product.id} className="flex items-start gap-4 py-4 border-b border-slate-300">
              <img
                className="w-20"
                src={productImage}
                alt={productName}
              />
              <div className="text-slate-500 flex flex-col gap-2">
                <h4>{productName}</h4>
                <div className="flex items-center gap-0.5 text-orange-400">{star}{star}{star}{star}{star}</div>
                <p>${newPrice.toFixed(2)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestSellers;
