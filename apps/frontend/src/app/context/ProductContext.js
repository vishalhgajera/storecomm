import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useProduct = () => useContext(AuthContext);

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const fetchProduct = () => {
    axios
      .get('http://localhost:3333/product')
      .then(function (response) {
        // handle success
        console.log(response);
        setProducts(response.data.products);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <AuthContext.Provider value={{ products}}>
      {children}
    </AuthContext.Provider>
  );
};

export default ProductProvider;






