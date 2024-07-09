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
  sortedValue: "lowest",
  sortedProducts: [],
  filteredProducts: [],
  sliderValue: [],
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

  const updateCart = ({ product, updatedQuantity }) => {
    const updatedProduct = state.cartProducts.map((item) => {
      if (product.id === item.id) {
        return {
          ...item,
          quantity: Number(updatedQuantity),
        };
      }
      return item;
    });

    const totalQuantity = updatedProduct.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);

    updatePrice(updatedProduct);

    dispatch({
      type: "UPDATE_CART",
      payload: {
        updatedProduct: updatedProduct,
        totalQuantity: totalQuantity,
      },
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

  const FilteredEverythingProducts = (sliderValue) => {
    const filteredItem = state.products.filter(
      (item) => item.newPrice > sliderValue[0] && item.newPrice < sliderValue[1]
    );

    // sorting products
    if (state.sortedValue === "lowest") {
      filteredItem.sort((a, b) => a.newPrice - b.newPrice);
    }

    if (state.sortedValue === "highest") {
      filteredItem.sort((a, b) => b.newPrice - a.newPrice);
    }

    dispatch({
      type: "FILTERED_EVERYTHING_PRODUCTS",
      payload: filteredItem,
    });
  };

  const FilteredMenProducts = (sliderValue) => {
    const menProduct = state.products.filter(
      (item) => item.productCategory === "Men"
    );

    const filteredItem = menProduct.filter(
      (item) => item.newPrice > sliderValue[0] && item.newPrice < sliderValue[1]
    );

    // sorting products
    if (state.sortedValue === "lowest") {
      filteredItem.sort((a, b) => a.newPrice - b.newPrice);
    }

    if (state.sortedValue === "highest") {
      filteredItem.sort((a, b) => b.newPrice - a.newPrice);
    }

    dispatch({
      type: "FILTERED_MEN_PRODUCTS",
      payload: filteredItem,
    });
  };
  
  const FilteredWomenProducts = (sliderValue) => {
    const womenProduct = state.products.filter(
      (item) => item.productCategory === "Women"
    );

    const filteredItem = womenProduct.filter(
      (item) => item.newPrice > sliderValue[0] && item.newPrice < sliderValue[1]
    );

    // sorting products
    if (state.sortedValue === "lowest") {
      filteredItem.sort((a, b) => a.newPrice - b.newPrice);
    }

    if (state.sortedValue === "highest") {
      filteredItem.sort((a, b) => b.newPrice - a.newPrice);
    }

    dispatch({
      type: "FILTERED_WOMEN_PRODUCTS",
      payload: filteredItem,
    });
  };
  
  const FilteredAccessoriesProducts = (sliderValue) => {
    const accessoriesProduct = state.products.filter(
      (item) => item.productCategory === "Accessories"
    );

    const filteredItem = accessoriesProduct.filter(
      (item) => item.newPrice > sliderValue[0] && item.newPrice < sliderValue[1]
    );

    // sorting products
    if (state.sortedValue === "lowest") {
      filteredItem.sort((a, b) => a.newPrice - b.newPrice);
    }

    if (state.sortedValue === "highest") {
      filteredItem.sort((a, b) => b.newPrice - a.newPrice);
    }

    dispatch({
      type: "FILTERED_ACCESSORIES_PRODUCTS",
      payload: filteredItem,
    });
  };

  const sortingProducts = ({ sortedValue, data }) => {
    if (state.sortedValue === "lowest") {
      data.sort((a, b) => a.newPrice - b.newPrice);
    }

    if (state.sortedValue === "highest") {
      data.sort((a, b) => b.newPrice - a.newPrice);
    }
    dispatch({
      type: "SORTING_PRODUCTS",
      payload: sortedValue,
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
        updateCart,
        showProductDetails,
        sortingProducts,
        FilteredEverythingProducts,
        FilteredMenProducts,
        FilteredWomenProducts,
        FilteredAccessoriesProducts,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
