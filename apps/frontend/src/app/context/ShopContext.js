import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const API_URL = process.env.NX_API_URL;
const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);
const ShopProvider = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [products, setproducts] = useState([]);
  
  const fetchShop = () => {
    const url = `${API_URL}/product/all`;
    axios
    .get(url)
    .then(function (response) {
      // handle success
      setIsLoaded(true);
      setItems(response.data.product);
      setproducts(response.data.product.slice(0, 20));
    })
    .catch(function (error) {
      // handle error
      setIsLoaded(true);
    })
    .finally(function () {
      // always executed
    });

  };

const setFilterShop = (value) => {
    const newItems = items.filter(e =>(e.category.name === value));
    // console.log(newItems.map(e=>e.category));
    setproducts(newItems.slice(0, 20))
}
const setFullList = () => {
  setproducts(items.slice(0, 20))
}

  return (
    <ShopContext.Provider value={{ products, setFilterShop,setFullList, isLoaded, fetchShop }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;








