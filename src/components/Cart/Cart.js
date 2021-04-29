import React from "react";
import { Container, Typography, Grid, Button } from "@material-ui/core";
import CartItem from "./CartItem/CartItem";

import useStyles from "./styles";

const Cart = ({ cart }) => {
  const { line_items, subtotal } = cart;
  const classes = useStyles();

  const EmptyCart = () => {
    return (
      <Typography variant="subtitle1">
        You have no items in your shopping cart. Let's add your shopping cart
        now!
      </Typography>
    );
  };

  const FilledCart = () => {
    return (
      <>
        <Grid container spacing={3}>
          {line_items.map((item) => {
            return (
              <Grid item xs={12} sm={4} key={item.id}>
                <CartItem item={item} />
              </Grid>
            );
          })}
        </Grid>

        <div className={classes.cardDetails}>
          <Typography variant="h4">
            Subtotal : {subtotal.formatted_with_symbol}
          </Typography>

          <div>
            <Button
              variant="contained"
              color="secondary"
              className={classes.emptyButton}
              type="button"
              size="large"
            >
              Clear Cart
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.checkoutButton}
              type="button"
              size="large"
            >
              Checkout
            </Button>
          </div>
        </div>
      </>
    );
  };

  if (!line_items) return "Loading...";

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h4" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
