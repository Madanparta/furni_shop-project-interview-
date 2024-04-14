import { createContext, useContext, useEffect, useState } from "react"

const CartContext = createContext();
export const CartProvider  = ({children}) => {
    const [cart,setCart]=useState('');

    useEffect(()=>{
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    },[]);

    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
      setCart([...cart, product]);
    };

    const removeFromCart = (productId) => {
      const updatedCart = cart.filter((item) => item.id !== productId);
      setCart(updatedCart);
    };

    const clearCart = () => {
      setCart([]);
    };

    const value = {
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        // setCart,
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};

export const useCart = () => useContext(CartContext);