import React from "react";
import { globalContext } from "../CONTEXT/Context";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BsCartDash } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartItem = ({product}) => {
  const { removeFromCart, updateCart, totalPrice } = globalContext();
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
        <img className="w-20" src={productImage} alt={productName} />
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
          onChange={(e) => updateCart({product, updatedQuantity: e.target.value})}
          min={1}
          defaultValue={quantity}
          className="w-14 border-b px-2 py-1 border outline-none flex justify-center items-center"
        />
      </div>

      <div className="flex justify-between items-center border-b py-3 px-2">
        <span>Subtotal:</span>
        <span>
          { (quantity * newPrice).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
