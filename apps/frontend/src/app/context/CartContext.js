import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const CartContext = createContext();
const API_URL = process.env.NX_API_URL;

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  // const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  
  const fetchCart = async () => {
    const url = `${API_URL}/cart/all`;
    try {
      const token = JSON.parse(localStorage.getItem('accessToken')); 
      // Assuming you have stored the JWT token in localStorage
      const config = {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      };

      const response = await axios.get(url, config);
      setCartItems(response.data.cart);
      setIsLoaded(true)
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUpdateCart = async (product,qty) => {

    const url = `${API_URL}/cart/${product._id}/${qty}`;
    
    // updateCartHandler(productId,qty);
    try {
      const token = JSON.parse(localStorage.getItem('accessToken')); 

      console.log(token.token);
      // Assuming you have stored the JWT token in localStorage
      const config = {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      };

      const response = await axios.post(url, null, config);
      console.log(response);
      // fetchCart();
      updateCartHandler(product,qty);
      // setIsLoaded(true);
    } catch (error) {
      console.error(error);
    }
  };

  const updateCartHandler = (item, qty) => {
    const newCartItems = [...cartItems];
    const findById = newCartItems.findIndex((e) => e.product._id === item._id);
    if(findById > -1){
      newCartItems.map((e) => e.product._id === item._id ? e.qty = qty : e);
      const deleteItem = newCartItems.filter(e => e.qty > 0)
      setCartItems(deleteItem)
    }
    else{
      newCartItems.push({product:item,qty});
      setCartItems(newCartItems);
    }
  }

  return (
    <CartContext.Provider value={{ cartItems, isLoaded, fetchCart , fetchUpdateCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;