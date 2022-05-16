import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import classes from "./WishlistButton.module.css";
const WishlistButton = () => {
  return (
    <button className={classes["icon-button"]}>
      <AiOutlineHeart className={classes["cart-icon"]} />
    </button>
  );
};

export default WishlistButton;
