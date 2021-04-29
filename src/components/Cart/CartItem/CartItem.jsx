import React from "react";
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
} from "@material-ui/core";

import useStyles from "./styles";

const CartItem = ({ item }) => {
  const { media, name, price, quantity } = item;
  const classes = useStyles();

  return (
    <Card>
      <CardMedia image={media.source} alt={name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body1">{price.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small">
            -
          </Button>
          <Typography>{quantity}</Typography>
          <Button type="button" size="small">
            +
          </Button>
        </div>
        <Button variant="contained" color="secondary" type="button">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
