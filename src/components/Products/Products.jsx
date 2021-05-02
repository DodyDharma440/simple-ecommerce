import React from "react";
import { Grid, Container } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";

export const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Container maxWidth="lg" style={{ margin: 0 }}>
        <Grid container justify="center" spacing={4}>
          {products.map((product, index) => {
            return (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <Product product={product} onAddToCart={onAddToCart} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </main>
  );
};

export default Products;
