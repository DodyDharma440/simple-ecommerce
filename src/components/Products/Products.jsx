import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";

// const products = [
//   {
//     id: 1,
//     name: "Shoes",
//     description: "Shoes for run",
//     price: "$10",
//     image:
//       "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/01/268453-Best_Running_Shoes_for_Flat_Feet-1296x728-header-1296x728.jpg?w=1155&h=1528",
//   },
//   {
//     id: 2,
//     name: "PC Gaming",
//     description: "PC for gaming in home",
//     price: "$1000",
//     image:
//       "https://cdn.shopify.com/s/files/1/0074/6530/4123/articles/Suka_Bermain_Game_Ini_5_Rekomendasi_PC_Gaming_Terbaik_2020.jpg?v=1599029182",
//   },
// ];

export const Products = ({ products }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product, index) => {
          return (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;
