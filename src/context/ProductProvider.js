import React, { createContext, useReducer, useContext } from 'react';
import { productReducer } from './reducers/productReducer';
// Define the initial state
const initialState = {
    products: [],
    activeMode : 'list'
};

// Create a context
export const ProductContext = createContext();

// Create a custom provider
export const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductContext.Provider> 
  );
};

// Custom hook to consume the context
export const useAppContext = () => useContext(ProductContext);