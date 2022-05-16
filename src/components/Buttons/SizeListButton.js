import React from "react";
import classes from "./SizeListButton.module.css";
const SizeListButton = (props) => {
  // console.log(typeof props.sizeType[1]);
  const checkSizehandler = () => {
    if (props.sizeType[1] > 0) {
      return true;
    }
    return false;
  };
  const availableSize = checkSizehandler();
  return (
    <button
      className={
        availableSize
          ? classes["container-size-button"]
          : classes["container-size-button-unable"]
      }
    >
      <span className={classes["container-size-button-span"]}>
        {props.sizeType[0]}
      </span>
    </button>
  );
};

export default SizeListButton;
