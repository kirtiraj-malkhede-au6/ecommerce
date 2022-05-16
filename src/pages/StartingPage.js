import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navigation/Navbar";
import classes from "./StartingPage.module.css";
const StartingPage = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/jeans");
    navigate(1);
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  scrollToTop();

  return (
    <React.Fragment>
      <div className={classes["container"]}>
        <div className={classes["section-block"]} onClick={handleClick}>
          <div div className={classes["image"]}>
            <img
              src="https://images.bewakoof.com/original/mickey-trio-call-half-sleeve-t-shirt-dl-276320-1637854957-1.jpg?tr=q-100"
              alt="Italian Trulli"
            />
          </div>
          <div className={classes["title"]}>
            <span>T-Shirts</span>
          </div>
        </div>
        <div className={classes["section-block"]} onClick={handleClick}>
          <div div className={classes["image"]}>
            <img
              src="https://images.bewakoof.com/original/snitch-curvet-red-shirt-snitch-men-s-shirt2-in-printed-363551-1622457929.jpg?tr=q-100"
              alt="Italian Trulli"
            />
          </div>
          <div className={classes["title"]}>
            <span>Shirts</span>
          </div>
        </div>
        <div className={classes["section-block"]} onClick={handleClick}>
          <div div className={classes["image"]}>
            <img
              src="https://images.bewakoof.com/original/snitch-whippy-blue-washed-denim-snitch-men-s-jeans-in-cotton-355692-1620453006.jpg?tr=q-100"
              alt="Italian Trulli"
            />
          </div>
          <div className={classes["title"]}>
            <span>Jeans</span>
          </div>
        </div>
        <div className={classes["section-block"]} onClick={handleClick}>
          <div div className={classes["image"]}>
            <img
              src="https://images.bewakoof.com/original/campus-sutra-men-full-sleeve-stylish-windcheater-casual-jacket-446097-1636624736-1.jpg?tr=q-100"
              alt="Italian Trulli"
            />
          </div>
          <div className={classes["title"]}>
            <span>Jackets</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StartingPage;
