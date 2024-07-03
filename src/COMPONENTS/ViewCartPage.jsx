import React from "react";
import Cart_Products from "./Cart_Products";
import ViewCartSidebar from "./ViewCartSidebar";

const ViewCartPage = () => {

  return (
    <div className="bg-[#F5F7F9] pt-10">
      <div className="py-20 grid grid-cols-1 lg:grid-cols-4">
        <div className="order-1 lg:order-none col-span-1">
          <ViewCartSidebar />
        </div>
        <div className="col-span-3">
            <Cart_Products />
        </div>
      </div>
    </div>
  );
};

export default ViewCartPage;
