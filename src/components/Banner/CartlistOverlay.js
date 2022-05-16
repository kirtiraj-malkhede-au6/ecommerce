import React from "react";
import classes from "./CartlistOverlay.module.css";
const CartlistOverlay = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["cartlist-box"]}>
        <h3>Cart 🛒</h3>
      </div>
      <div className={classes["cartlist-item-box"]}>
        <li className={classes["cartlist-item"]}>
          <div className={classes["cartlist-item-image"]}>
            <img
              src="https://images.bewakoof.com/original/brown-mocha-classic-black-oversized-sweatshirt-403211-1631699410-2.jpg?tr=q-100"
              alt="Italian Trulli"
              // height="700"
              // width="300"
            />
          </div>
          <div className={classes["cartlist-item-info"]}>
            <h3>Zara Half Sleeves T-Shirt</h3>
            <span className={classes["cartlist-item-size"]}>L</span>
            <div>
              <span>2 ×</span>
              <span>599 INR</span>
            </div>
          </div>
          <div className={classes["cartlist-item-button-box"]}>
            <div className={classes["cartlist-item-button"]}>
              <span>–</span>
              <span>+</span>
            </div>
          </div>
        </li>
        <li className={classes["cartlist-item"]}>
          <div className={classes["cartlist-item-image"]}>
            <img
              src="https://images.bewakoof.com/original/brown-mocha-classic-black-oversized-sweatshirt-403211-1631699410-2.jpg?tr=q-100"
              alt="Italian Trulli"
              // height="700"
              // width="300"
            />
          </div>
          <div className={classes["cartlist-item-info"]}>
            <h3>Zara Half Sleeves T-Shirt</h3>
            <span className={classes["cartlist-item-size"]}>L</span>
            <div>
              <span>2 ×</span>
              <span>599 INR</span>
            </div>
          </div>
          <div className={classes["cartlist-item-button-box"]}>
            <div className={classes["cartlist-item-button"]}>
              <span>–</span>
              <span>+</span>
            </div>
          </div>
        </li>
        <li className={classes["cartlist-item"]}>
          <div className={classes["cartlist-item-image"]}>
            <img
              src="https://images.bewakoof.com/original/brown-mocha-classic-black-oversized-sweatshirt-403211-1631699410-2.jpg?tr=q-100"
              alt="Italian Trulli"
              // height="700"
              // width="300"
            />
          </div>
          <div className={classes["cartlist-item-info"]}>
            <h3>Zara Half Sleeves T-Shirt</h3>
            <span className={classes["cartlist-item-size"]}>L</span>
            <div>
              <span>2 ×</span>
              <span>599 INR</span>
            </div>
          </div>
          <div className={classes["cartlist-item-button-box"]}>
            <div className={classes["cartlist-item-button"]}>
              <span>–</span>
              <span>+</span>
            </div>
          </div>
        </li>
        <li className={classes["cartlist-item"]}>
          <div className={classes["cartlist-item-image"]}>
            <img
              src="https://images.bewakoof.com/original/brown-mocha-classic-black-oversized-sweatshirt-403211-1631699410-2.jpg?tr=q-100"
              alt="Italian Trulli"
              // height="700"
              // width="300"
            />
          </div>
          <div className={classes["cartlist-item-info"]}>
            <h3>Zara Half Sleeves T-Shirt</h3>
            <span className={classes["cartlist-item-size"]}>L</span>
            <div>
              <span>2 ×</span>
              <span>599 INR</span>
            </div>
          </div>
          <div className={classes["cartlist-item-button-box"]}>
            <div className={classes["cartlist-item-button"]}>
              <span>–</span>
              <span>+</span>
            </div>
          </div>
        </li>
        <li className={classes["cartlist-item"]}>
          <div className={classes["cartlist-item-image"]}>
            <img
              src="https://images.bewakoof.com/original/brown-mocha-classic-black-oversized-sweatshirt-403211-1631699410-2.jpg?tr=q-100"
              alt="Italian Trulli"
              // height="700"
              // width="300"
            />
          </div>
          <div className={classes["cartlist-item-info"]}>
            <h3>Zara Half Sleeves T-Shirt</h3>
            <span className={classes["cartlist-item-size"]}>L</span>
            <div>
              <span>2 ×</span>
              <span>599 INR</span>
            </div>
          </div>
          <div className={classes["cartlist-item-button-box"]}>
            <div className={classes["cartlist-item-button"]}>
              <span>–</span>
              <span>+</span>
            </div>
          </div>
        </li>
        <li className={classes["cartlist-item"]}>
          <div className={classes["cartlist-item-image"]}>
            <img
              src="https://images.bewakoof.com/original/brown-mocha-classic-black-oversized-sweatshirt-403211-1631699410-2.jpg?tr=q-100"
              alt="Italian Trulli"
              // height="700"
              // width="300"
            />
          </div>
          <div className={classes["cartlist-item-info"]}>
            <h3>Zara Half Sleeves T-Shirt</h3>
            <span className={classes["cartlist-item-size"]}>L</span>
            <div>
              <span>2 ×</span>
              <span>599 INR</span>
            </div>
          </div>
          <div className={classes["cartlist-item-button-box"]}>
            <div className={classes["cartlist-item-button"]}>
              <span>–</span>
              <span>+</span>
            </div>
          </div>
        </li>
      </div>
      <div className={classes["cartlist-checkout-box"]}>
        <span className={classes["cartlist-total-price"]}>
          {`PRODUCT TOTAL: 1797 INR`}
        </span>
        <span className={classes["cartlist-shipping-charge"]}>
          YOU HAVE GOT FREE SHIPPING!
        </span>
        <span className={classes["cartlist-checkout"]}>
          <button className={classes["cartlist-checkout-button"]}>
            Checkout
          </button>
        </span>
      </div>
    </div>
  );
};

export default CartlistOverlay;
