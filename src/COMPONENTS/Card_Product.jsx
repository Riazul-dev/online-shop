import React from "react";
import { Link } from "react-router-dom";
import { globalContext } from "../CONTEXT/Context";

const CardProduct = ({ product }) => {
  const { showProductDetails } = globalContext();

  const {
    id,
    productImage,
    productName,
    newPrice,
    productCategory,
    colors,
    star,
  } = product;

  return (
    <div className="flex flex-col">
      <Link
        onClick={() => showProductDetails(id)}
        to={`/productDetails`}
        className="cursor-pointer"
      >
        <img className="w-full" src={productImage} alt={productName} />
      </Link>
      <div className="pb-3">
        <p>{productName}</p>
        <p>{productCategory}</p>
        <p>${newPrice?.toFixed(2)}</p>

        {/* products colors */}
        <div className="flex items-center gap-3">
          {colors?.map((color, i) => {
            return (
              <div key={i} className="border border-slate-300 px-2">
                <span>{color}</span>
              </div>
            );
          })}
        </div>

        <div>
          <span className="flex items-center gap-0.5 text-orange-400">
            {star}
            {star}
            {star}
            {star}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
