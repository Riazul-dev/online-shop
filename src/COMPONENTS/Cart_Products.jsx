import React from "react";
import { globalContext } from "../CONTEXT/Context";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Cart_Products = () => {
  const { cartProducts, removeFromCart } = globalContext();

  return (
    <div className="px-6 bg-white py-10">
      <h2 className="text-2xl">Cart</h2>

      <div className="">
        {cartProducts.map((product) => {
          const { productImage, productName, newPrice, productCategory } =
            product;
          return (
            <div key={product.id} className="flex flex-col my-2">
              <div className="flex justify-end border py-3 px-2">
                <button
                  className="text-slate-400 text-3xl"
                  onClick={() => removeFromCart(product)}
                >
                  <IoIosCloseCircleOutline />
                </button>
              </div>
              <div className="flex items-center justify-center border py-3 px-2">
                <img className="w-20" src={productImage} alt={productName} />
              </div>
              <div className="flex justify-between items-center border py-3 px-2">
                <span>Product:</span>
                <span>{productName}</span>
              </div>
              <div className="flex justify-between items-center border py-3 px-2">
                <span>Price:</span>
                <span>${newPrice}</span>
              </div>
              <div className="flex justify-between items-center border py-3 px-2">
                <span>Quantity:</span>
                <span>0</span>
              </div>
              <div className="flex justify-between items-center border py-3 px-2">
                <span>Subtotal:</span>
                <span>000</span>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <form className="flex justify-between items-center">
          <input type="text" placeholder="Coupon code" className="border p-1" />
          <input type="button" value="APPLY COUPON" className="bg-blue-500 px-2 py-3 text-white" />
        </form>
        <div>
          <button>UPDATE CART</button>
        </div>
      </div>
    </div>
  );
};

export default Cart_Products;
