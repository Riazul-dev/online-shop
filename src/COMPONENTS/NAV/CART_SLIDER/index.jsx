import React from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { globalContext } from "../../../CONTEXT/Context";
import { IoIosCloseCircleOutline } from "react-icons/io";

const CartSlider = ({ toggleCart, setToggleCart }) => {
  const { cartProducts, removeFromCart } = globalContext();

  return (
    <>
      {cartProducts.length > 0 ? (
        <div className="min-h-screen flex flex-col justify-between py-4">
          <div className="flex justify-between px-4 pb-4 border-b">
            <p className="text-sm text-slate-800">Shopping Cart</p>
            <button onClick={() => setToggleCart(!toggleCart)}>
              <IoClose />
            </button>
          </div>

          {/* products */}
          <div className="h-[60vh] px-4">
            {cartProducts.map((product) => {
              const { productImage, productName, newPrice } = product;
              return (
                <div
                  key={product.id}
                  className="flex justify-between items-center"
                >
                  <div className="flex gap-4">
                    <div>
                      <img
                        className="w-20"
                        src={productImage}
                        alt={productName}
                      />
                    </div>
                    <div>
                      <p>{productName}</p>
                      <p>${newPrice.toFixed(2)}</p>
                    </div>
                  </div>
                  <div>
                    <button onClick={() => removeFromCart(product)}>
                      <IoIosCloseCircleOutline />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* buttons */}
          <div className="">
            <div className="flex justify-between border px-4 py-2">
              <p>Subtotal:</p>
              <p>$3424</p>
            </div>
            <div className="flex flex-col px-4 gap-3 py-4">
              <button className="bg-blue-500 py-3 text-white">VIEW CART</button>
              <button className="bg-blue-500 py-3 text-white">CHECKOUT</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col justify-between py-4">
          <div className="flex justify-between px-4 pb-4 border-b">
            <p className="text-sm text-slate-800">Shopping Cart</p>
            <button onClick={() => setToggleCart(!toggleCart)}>
              <IoClose />
            </button>
          </div>

          <div className="flex items-center justify-center">
            <p className="text-slate-600">No product in the cart.</p>
          </div>

          <div className="flex justify-center items-center px-6">
            <Link
              to="/"
              onClick={() => setToggleCart(false)}
              className="bg-blue-500 text-white w-full text-center py-2"
            >
              CONTINUE SHOPPING
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CartSlider;
