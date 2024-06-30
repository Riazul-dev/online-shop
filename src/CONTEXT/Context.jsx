import React, { createContext, useContext, useEffect, useReducer } from "react";
import { ProductData } from "../PRODUCTS-DATA/ProductData";
import reducer from "./reducer";

export const Context = createContext();

export const globalContext = () => {
  return useContext(Context);
};
const initialState = {
  products: [],
  cartProducts: [],
  menProducts: [],
  womenProducts: [],
  Accessories: [], 
  detailProduct: [],
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product) => {
    const singleProduct = state.cartProducts;
    singleProduct.push(product);

    dispatch({
      type: "ADD_TO_CART",
      payload: singleProduct,
    });
  };

  const removeFromCart = (product) => {
    const updatedProduct = state.cartProducts.filter(
      (currentProduct) => currentProduct.id !== product.id
    );

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: updatedProduct,
    });
  };

  const showProductDetails = (productId) => {
    const showProduct = ProductData.filter(
      (currentProduct) => currentProduct.id === productId
    );

    dispatch({
      type: "PRODUCT_DETAILS",
      payload: showProduct,
    });
  };

  useEffect(() => {
    dispatch({
      type: "ADD",
      payload: ProductData,
    });
    // Men Products
    const menProduct = ProductData.filter((product) => {
      return product.productCategory === "Men";
    });
    dispatch({
      type: "ADD_TO_MEN_PRODUCT",
      payload: menProduct,
    });

    // Women Products
    const womenProduct = ProductData.filter((product) => {
      return product.productCategory === "Women";
    });
    dispatch({
      type: "ADD_TO_WOMEN_PRODUCT",
      payload: womenProduct,
    });

    // Accessories Products
    const AccessoriesProduct = ProductData.filter((product) => {
      return product.productCategory === "Accessories";
    });
    dispatch({
      type: "ADD_TO_ACCESSORIES",
      payload: AccessoriesProduct,
    });
  }, []);

  return (
    <Context.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        showProductDetails,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
