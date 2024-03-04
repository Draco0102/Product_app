import { productTypes } from "../types/actionTypes";
export const productReducer = (state, action) => {
  switch (action.type) {
    case productTypes.STORE_PRODUCTS:
      return { ...state, products: action.payload };
    case productTypes.ACTIVE_PRODUCT:
      return { ...state, activeProduct: action.payload };
      case productTypes.ACTIVE_MODE:
        return { ...state, activeMode: action.payload };
    default:
      return state;
  }
};
