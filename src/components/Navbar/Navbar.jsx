import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src="https://icons.iconarchive.com/icons/jozef89/services-flat/512/ecommerce-icon.png"
              alt="Commerce.js"
              height="25px"
              className={classes.image}
            />
            Simple E-Commerce
          </Typography>
          <div className={classes.grow} />
          <div className={classes.menuButton}>
            <IconButton aria-label="show-cart" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
