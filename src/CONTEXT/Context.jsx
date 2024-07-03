import React, { createContext, useContext, useEffect, useReducer } from "react";
import { ProductData } from "../PRODUCTS-DATA/ProductData";
import reducer from "./reducer";

export const Context = createContext();

export const globalContext = () => {
  return useContext(Context);
};

const initialState = {
  totalPrice: 0,
  totalCartQuantity: 0,
  products: [],
  cartProducts: [],
  menProducts: [],
  womenProducts: [],
  Accessories: [],
  detailProduct: [],
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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

  // Functions
  const addToCart = ({ product, qty }) => {
    const updatedProducts = state.cartProducts;
    const productIndex = updatedProducts.findIndex(
      (value) => product.id === value.id
    );

    if (!updatedProducts[productIndex]) {
      updatedProducts.push(product);
    }

    const filteredProducts = updatedProducts.map((item) => {
      if (item.id === product.id) {
        return {
          ...item,
          quantity: Number(item.quantity) + Number(qty),
        };
      }
      return item;
    });

    const totalQuantity = filteredProducts.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);

    updatePrice(filteredProducts);

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        updatedProducts: filteredProducts,
        totalQuantity: totalQuantity,
      },
    });
  };

  const removeFromCart = (product) => {
    const updatedProduct = state.cartProducts.filter(
      (currentProduct) => currentProduct.id !== product.id
    );

    const totalQuantity = updatedProduct.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);

    updatePrice(updatedProduct);

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { updatedProduct: updatedProduct, totalQuantity: totalQuantity },
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

  const updatePrice = (products) => {
    let totalPrice = 0;
    products.forEach((product) => {
      return (totalPrice += product.newPrice * product.quantity);
    });

    dispatch({
      type: "UPDATE_PRICE",
      payload: totalPrice,
    });
  };

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
