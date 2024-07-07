const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      };

    case "ADD_TO_CART":
      return {
        ...state,
        cartProducts: action.payload.updatedProducts,
        totalCartQuantity: action.payload.totalQuantity,
      };

    case "UPDATE_PRICE":
      return {
        ...state,
        totalPrice: action.payload,
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartProducts: action.payload.updatedProduct,
        totalCartQuantity: action.payload.totalQuantity,
      };

    case "UPDATE_CART":
      return {
        ...state,
        cartProducts: action.payload.updatedProduct,
        totalCartQuantity: action.payload.totalQuantity,
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

    case "FILTERED_EVERYTHING_PRODUCTS":
      return {
        ...state,
        filteredProducts: action.payload,
      };

    case "FILTERED_MEN_PRODUCTS":
      return {
        ...state,
        menProducts: action.payload,
      };

    case "FILTERED_WOMEN_PRODUCTS":
      return {
        ...state,
        womenProducts: action.payload,
      };

    case "SORTING_PRODUCTS":
      return {
        ...state,
        sortedValue: action.payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
