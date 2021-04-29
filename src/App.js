import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
// import {Products, Navbar} from "./components"
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

export const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await commerce.products.list();
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div>
      <Navbar />
      <Products products={products} />
    </div>
  );
};

export default App;
