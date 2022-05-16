import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import classes from "./CartButton.module.css";
const CartButton = () => {
  return (
    <button className={classes["icon-button"]}>
      <AiOutlineShoppingCart className={classes["cart-icon"]} />
    </button>
  );
};

export default CartButton;
