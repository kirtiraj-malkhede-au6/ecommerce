import React from "react";
import classes from "./SelectedFilterOption.module.css";
import { AiOutlineClose } from "react-icons/ai";
const SelectedFilterOption = () => {
  return (
    <div className={classes["selected-option"]}>
      <button className={classes["reset"]}>Clear</button>
      <div className={classes["selection-container"]}>
        <li>
          <p>Jacket</p>
          <button>
            <AiOutlineClose className={classes["cancel-icon"]}></AiOutlineClose>
          </button>
        </li>

        <li>
          <p>Bomber</p>
          <button>
            <AiOutlineClose className={classes["cancel-icon"]}></AiOutlineClose>
          </button>
        </li>
        <li>
          <p>Bomber</p>
          <button>
            <AiOutlineClose className={classes["cancel-icon"]}></AiOutlineClose>
          </button>
        </li>
        <li>
          <p>Jacket</p>
          <button>
            <AiOutlineClose className={classes["cancel-icon"]}></AiOutlineClose>
          </button>
        </li>
      </div>
    </div>
  );
};

export default SelectedFilterOption;
