import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      alert("El Producto ya fue agregado");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const increaseQuantity = (itemId) => {
    setCart((disStock) =>
      disStock.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCart((aumStock) =>
      aumStock.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };
  const getTotal = () => {
    let total = 0;
    cart.forEach((element) => {
      total += element.quantity * element.price;
    });
    return total;
  };

  const getTotalItems = () => {
    let totalProducts = 0;
    cart.forEach((element) => {
      totalProducts += element.quantity;
    });
    return totalProducts;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        getTotal,
        increaseQuantity,
        decreaseQuantity,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
