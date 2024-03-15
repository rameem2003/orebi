import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [allproducts, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = () => {
      axios.get("https://dummyjson.com/products").then((data) => {
        setProducts(data.data.products);
        // setCategoryFilter(data.data.products);
      });
    };

    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ allproducts, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
