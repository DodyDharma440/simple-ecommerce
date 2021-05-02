import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

export const Product = ({ product, onAddToCart }) => {
  const { id, name, price, description, media } = product;
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const addToCart = () => {
    setLoading(true);
    onAddToCart(id, 1, (cart) => {
      if (cart) {
        setLoading(false);
      }
    });
  };

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={media.source} title={name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="body2">{price.formatted_with_symbol}</Typography>
        </div>
        <Typography noWrap variant="h6" className={classes.productTitle}>
          {name}
        </Typography>
        <Typography
          dangerouslySetInnerHTML={{ __html: description }}
          variant="body2"
          color="textSecondary"
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <Button
          variant="contained"
          onClick={addToCart}
          endIcon={
            loading ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              <AddShoppingCart />
            )
          }
          className={classes.button}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
