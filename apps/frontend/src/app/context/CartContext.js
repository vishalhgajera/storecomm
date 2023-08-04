import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import env from '../../../env.json'

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  // const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  
  const fetchCart = async () => {
    const url = `${env.API_URL}/cart/all`;
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

  const fetchUpdateCart = async (productId,qty) => {

    const url = `${env.API_URL}/cart/${productId}/${qty}`;
    
    updateCartHandler(productId,qty);
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
      fetchCart();
      // setIsLoaded(true);
    } catch (error) {
      console.error(error);
    }
  };

  const updateCartHandler = (id, qty) => {
    console.log(id, qty);
    const newCartItems = [...cartItems];
    newCartItems.map((e) => e.product._id === id ? e.qty = qty : e)
    const deleteItem = newCartItems.filter(e => e.qty > 0)
    setCartItems(deleteItem)
  }

  return (
    <CartContext.Provider value={{ cartItems, isLoaded, fetchCart , fetchUpdateCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;