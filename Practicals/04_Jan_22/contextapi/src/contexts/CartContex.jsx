import { createContext } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  // in below line value can be anything like arr num str fun
  return <CartContext.Provider value={1}>{children}</CartContext.Provider>;
};
