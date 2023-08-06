import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const API_URL = process.env.NX_API_URL;
const ProductContext = createContext();

export const useProduct = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [product, setProduct] = useState([]);
  
  const fetchProduct = (product) => {
    const url = `${API_URL}/product/${product}`;
    axios
    .get(url)
    .then(function (response) {
      // handle success
      console.log(response.data);
      setIsLoaded(true);
      setProduct(response.data.product);
    })
    .catch(function (error) {
      // handle error
      setIsLoaded(true);
    })

  };
  return (
    <ProductContext.Provider value={{ product, isLoaded, fetchProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;








