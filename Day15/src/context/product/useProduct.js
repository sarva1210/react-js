import { useContext } from "react";
import ProductContext from "./product.context";

const useProduct = () => {
  const ctx = useContext(ProductContext);
  if (!ctx) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return ctx;
};

export { useProduct };