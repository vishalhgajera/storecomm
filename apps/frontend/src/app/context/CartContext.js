import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider(props) {
    const [items, setItems] = useState([])
    const cartItems = items
    const setCartItem = (value) => {
        console.log(value);
        value.qty = 1
        const newItems = items.filter(e => !(e._id === value._id))
        setItems([...newItems, value])
    }
    const updateQty = (id, qty) => {
        const newItems = [...items];
        newItems.map((e) => e._id === id ? e.qty = qty : e)
        const deleteItem = newItems.filter(e => e.qty > 0)
        setItems(deleteItem)
    }

    return (
        <CartContext.Provider value={{ cartItems, setCartItem, updateQty }}>
            {props.children}
        </CartContext.Provider>
    )
}