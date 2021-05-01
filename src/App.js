import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { commerce } from "./lib/commerce";

import { Navbar, Products, Cart, Checkout } from "./components";

export const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    const response = await commerce.cart.retrieve();

    setCart(response);
  };

  const handleAddCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleClearCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <Navbar totalItems={cart.total_items} />
      <Switch>
        <Route exact path="/">
          <Products products={products} onAddToCart={handleAddCart} />
        </Route>
        <Route path="/cart">
          <Cart
            cart={cart}
            handleUpdateCartQty={handleUpdateCartQty}
            handleRemoveFromCart={handleRemoveFromCart}
            handleClearCart={handleClearCart}
          />
        </Route>
        <Route path="/checkout">
          <Checkout cart={cart} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
