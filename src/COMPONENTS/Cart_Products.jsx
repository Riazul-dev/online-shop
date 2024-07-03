import React, { useState } from "react";
import { globalContext } from "../CONTEXT/Context";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BsCartDash } from "react-icons/bs";
import { Link } from "react-router-dom";

const Cart_Products = () => {
  const { cartProducts, removeFromCart, totalPrice } = globalContext();

  return (
    <div className="px-6 bg-white py-10 mx-4">
      <div className="py-8">
        <h2 className="text-3xl">Cart</h2>
      </div>

      {cartProducts.length > 0 ? (
        <div>
          <section className="border lg:hidden">
            {cartProducts.map((product) => {
              const [updateQuantity, setUpdateQuantity] = useState(0);
              const { productImage, productName, newPrice, quantity } = product;
              return (
                <div key={product.id} className="flex flex-col">
                  <div className="flex justify-end border-b py-3 px-2">
                    <button
                      className="text-slate-400 text-3xl"
                      onClick={() => removeFromCart(product)}
                    >
                      <IoIosCloseCircleOutline />
                    </button>
                  </div>
                  <div className="flex items-center justify-center border-b py-3 px-2">
                    <img
                      className="w-20"
                      src={productImage}
                      alt={productName}
                    />
                  </div>

                  <div className="flex justify-between items-center border-b py-3 px-2">
                    <span>Product:</span>
                    <span>{productName}</span>
                  </div>

                  <div className="flex justify-between items-center border-b py-3 px-2">
                    <span>Price:</span>
                    <span>${newPrice.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between items-center border-b py-3 px-2">
                    <p>Quantity:</p>
                    <input
                      type="number"
                      onChange={(e) => setUpdateQuantity(e.target.value)}
                      min={1}
                      defaultValue={quantity}
                      className="w-14 border-b px-2 py-1 border outline-none flex justify-center items-center"
                    />
                  </div>

                  <div className="flex justify-between items-center border-b py-3 px-2">
                    <span>Subtotal:</span>
                    <span>
                      {updateQuantity > 0
                        ? (updateQuantity * newPrice).toFixed(2)
                        : totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              );
            })}

            <div className="flex flex-col md:flex-row md:justify-between gap-2 px-4 py-4">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center gap-2 w-full md:w-1/2"
              >
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="border py-1 px-2 w-1/2 placeholder:text-sm"
                />
                <button className="bg-blue-500 w-1/2 py-2.5 text-white text-nowrap text-sm">
                  APPLY COUPON
                </button>
              </form>

              <div>
                <button className="bg-blue-500 w-full py-2.5 md:px-6 text-white text-sm">
                  UPDATE CART
                </button>
              </div>
            </div>
          </section>

          <section className="border hidden lg:block">
            <div className="grid grid-cols-7 border-b py-4 bg-gray-50">
              <div className="col-span-2"></div>
              <p className="col-span-2">Products</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>
            {cartProducts.map((product) => {
              const [updateQuantity, setUpdateQuantity] = useState(0);

              const { productImage, productName, newPrice, quantity } = product;
              return (
                <div key={product.id} className="grid grid-cols-7 border-b">
                  <div className="col-span-2 flex items-center justify-between px-3">
                    <div className=" py-3 px-2">
                      <button
                        className="text-slate-400 text-3xl"
                        onClick={() => removeFromCart(product)}
                      >
                        <IoIosCloseCircleOutline />
                      </button>
                    </div>
                    <div className="flex items-center justify-center py-3 px-2">
                      <img
                        className="w-20"
                        src={productImage}
                        alt={productName}
                      />
                    </div>
                  </div>

                  <div className="col-span-5  grid grid-cols-5 place-content-center">
                    <div className="col-span-2">
                      <span>{productName}</span>
                    </div>
                    <div>
                      <span>${newPrice.toFixed(2)}</span>
                    </div>
                    <div>
                      <input
                        type="number"
                        onChange={(e) => setUpdateQuantity(e.target.value)}
                        min={1}
                        defaultValue={quantity}
                        className="w-14 border outline-none px-2 py-1 flex justify-center items-center"
                      />
                    </div>
                    <div>
                      {updateQuantity > 0
                        ? (updateQuantity * newPrice).toFixed(2)
                        : totalPrice.toFixed(2)}
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="flex flex-col md:flex-row md:justify-between gap-2 px-4 py-4">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center gap-2 w-full md:w-1/2"
              >
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="border py-1 px-2 w-1/2 placeholder:text-sm"
                />
                <button className="bg-blue-500 w-1/2 py-2.5 text-white text-nowrap text-sm">
                  APPLY COUPON
                </button>
              </form>

              <div>
                <button className="bg-blue-500 w-full py-2.5 md:px-6 text-white text-sm">
                  UPDATE CART
                </button>
              </div>
            </div>
          </section>

          <section className="border mt-10 lg:max-w-sm lg:ml-auto">
            <div className="py-4 border-b bg-gray-50">
              <h2 className="text-xl px-4">Cart totals</h2>
            </div>
            <div className="p-6">
              <div className="flex justify-between border-b p-3 text-sm">
                <p>Subtotal:</p>
                <p>$ {totalPrice.toFixed(2)}</p>
              </div>

              <div className="flex justify-between border-b p-3 text-sm">
                <p>Total:</p>
                <p>$ {totalPrice.toFixed(2)}</p>
              </div>

              <div className="pt-4">
                <button className="uppercase bg-blue-500 py-4 w-full text-white">
                  CheckOut
                </button>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          <div className="flex justify-start items-center border-t-4 border-slate-800 bg-slate-100 text-slate-700 p-5 w-full">
            <p className="flex items-center gap-3">
              <span>
                <BsCartDash />
              </span>
              Your cart is currently empty.
            </p>
          </div>
          <div className="flex">
            <Link
              to="/"
              className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600"
            >
              RETURN TO SHOP
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart_Products;
