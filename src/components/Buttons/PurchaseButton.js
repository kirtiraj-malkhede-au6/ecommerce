import React from "react";
import { BiPurchaseTag } from "react-icons/bi";
import classes from "./PurchaseButton.module.css";
const PurchaseButton = () => {
  return (
    <button className={classes["icon-button"]}>
      <BiPurchaseTag className={classes["cart-icon"]} />
    </button>
  );
};

export default PurchaseButton;
