import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const API_URL = process.env.NX_API_URL;
const ProductContext = createContext();

export const useProduct = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);
  
  const fetchProduct = (product) => {
    const url = `${API_URL}/product/${product}`;
    axios
    .get(url)
    .then(function (response) {
      // handle success
      console.log(response.data);
      setIsLoaded(true);
      setItems(response.data.product);
      setProducts(response.data.product);
    })
    .catch(function (error) {
      // handle error
      setIsLoaded(true);
    })
    .finally(function () {
      // always executed
    });

  };

const setFilterProduct = (value) => {
    const newItems = items.filter(e =>(e.category.name === value));
    // console.log(newItems.map(e=>e.category));
    setProducts(newItems.slice(0, 20))
}
const setFullList = () => {
  setProducts(items.slice(0, 20))
}

  return (
    <ProductContext.Provider value={{ products, setFilterProduct,setFullList, isLoaded, fetchProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;








