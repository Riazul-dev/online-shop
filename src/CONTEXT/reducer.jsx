import React from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        products: action.payload,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cartProducts: action.payload,
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartProducts: action.payload,
      };

    case "ADD_TO_MEN_PRODUCT":
      return {
        ...state,
        menProducts: action.payload,
      };

    case "ADD_TO_WOMEN_PRODUCT":
      return {
        ...state,
        womenProducts: action.payload,
      };

    case "ADD_TO_ACCESSORIES":
      return {
        ...state,
        Accessories: action.payload,
      };

    case "PRODUCT_DETAILS":
      return {
        ...state,
        detailProduct: action.payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;