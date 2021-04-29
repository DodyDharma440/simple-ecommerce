import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";

import { Navbar, Products, Cart } from "./components";

export const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  console.log(cart);

  const fetchProducts = async () => {
    try {
      const response = await commerce.products.list();
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCart = async () => {
    const response = await commerce.cart.retrieve();
    setCart(response);
  };

  const handleAddCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div>
      <Navbar totalItems={cart.total_items} />
      {/* <Products products={products} onAddToCart={handleAddCart} /> */}
      <Cart cart={cart} />
    </div>
  );
};

export default App;
