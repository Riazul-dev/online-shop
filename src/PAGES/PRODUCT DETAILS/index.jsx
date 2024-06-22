import React, { useState } from "react";
import { globalContext } from "../../CONTEXT/Context";
// import { NavLink } from "react-router-dom";
// import NavComponent from "./NavComponent";
import DescReviewSection from "./DescReviewSection";
import ProductColor from "./ProductColor";

const ProductDetails = () => {
  const [component, setComponent] = useState(false);
  const [productQty, setProductQty] = useState(0);
  const { addToCart, detailProduct, cartProducts } = globalContext();
  const displayProduct = detailProduct[0];
  const {
    productCategory,
    productName,
    productImage,
    prevPrice,
    newPrice,
    colors,
  } = displayProduct;

  const handleClick = () => {
    addToCart(displayProduct);
  };



  return (
    <div className="bg-[#F5F7F9]">
      <div className="max-w-screen-xl mx-auto pt-24">
        {/* conditional component */}
        {cartProducts.length > 0 && (
          <div className="flex justify-end border-t-4 border-slate-800 px-10 pt-4">
            {/* <p>"{cartProducts.productName}" has been added to your cart.</p> */}
            <button className="bg-blue-500 px-4 py-2 text-white">
              VIEW CART
            </button>
          </div>
        )}

        <div className=" grid lg:grid-cols-2 gap-6 px-4 lg:px-6 py-24">
          <div>
            <img className="w-full" src={productImage} alt={productName} />
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <p className="text-slate-400">
                Home / {productCategory} /{productName}
              </p>
            </div>
            <p>{productCategory}</p>
            <h2 className="text-2xl lg:text-3xl">{productName}</h2>
            <p>
              <span className="text-slate-400 line-through text-2xl">
                ${prevPrice.toFixed(2)}
              </span>
              <span className="text-2xl"> ${newPrice.toFixed(2)}</span>
              <span className="text-slate-700"> + Free Shipping</span>
            </p>
            <p className="text-slate-700">
              Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
              mauris vitae erat consequat auctor eu in elit. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus
              condimentum sit amet a augue. Sed non neque elit sed.
            </p>
            <div>
              {/* Product color */}
              {colors && (
                <div className="flex flex-col gap-4">
                  <ProductColor colors={colors} />
                  <div>
                    <button>Clear</button>
                    <div className="border-b-2"></div>
                    <p>${newPrice.toFixed(2)}</p>
                  </div>
                </div>
              )}

              <div className="flex gap-4 py-4 border-b-2">
                <input
                  onChange={(e) => setProductQty(e.target.value)}
                  className="w-12 pl-3 py-1 border outline-none"
                  min={1}
                  type="number"
                  defaultValue={1}
                />
                <button
                  onClick={handleClick}
                  className="bg-blue-500 text-white border px-10 lg:px-20 py-1"
                >
                  ADD TO CART
                </button>
              </div>
              <div className="py-4">
                {/* <p>SKU:N/A</p> */}
                <p>Category:{productCategory}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Description and Review section */}
        <DescReviewSection component={component} setComponent={setComponent} />
      </div>
    </div>
  );
};

export default ProductDetails;
