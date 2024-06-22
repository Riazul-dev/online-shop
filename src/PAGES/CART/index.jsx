import React from "react";
import CategoryPageSidebar from "../../COMPONENTS/CategoryPageSidebar";
import Cart_Products from "../../COMPONENTS/Cart_Products";

const Cart = () => {
  return (
    <div className="bg-[#F5F7F9] pt-10">
      <div className="py-20 grid grid-cols-1 lg:grid-cols-4">
        <div className="order-1">
          <CategoryPageSidebar />
        </div>
        <div className="">
          <Cart_Products />
        </div>
      </div>
    </div>
  );
};

export default Cart;
