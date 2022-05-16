import React from "react";
import { useState } from "react";
import { MdArrowDropUp } from "react-icons/md";
import { GrClose } from "react-icons/gr";
import classes from "./SortList.module.css";
const SortList = (props) => {
  const activeOptionList = props.optionList.map((item, index) => {
    if (item.optionName === props.optionSelect) {
      return { optionName: item.optionName, selected: true };
    }
    if (item.optionName === props.optionSelect) {
      return { optionName: item.optionName, selected: true };
    }

    return { optionName: item.optionName, selected: false };
  });
  console.log(props.optionList);
  console.log(activeOptionList);

  const [selected, setSeleted] = useState(activeOptionList);
  const onCloseHandler = () => {
    props.optionChangeHandler();
  };

  const chageHandler = (i) => {
    setSeleted(
      selected.map((item, index) => {
        if (index === i) {
          return { optionName: item.optionName, selected: true };
        }
        return { optionName: item.optionName, selected: false };
      })
    );
  };

  const optionSelectHandler = (value) => {
    props.optionSelectHandler(value);
  };
  console.log(selected);

  return (
    <div className={classes["container"]}>
      <span>
        <MdArrowDropUp className={classes["arrow-icon"]} />
      </span>
      <div className={classes["list-box"]}>
        <span>
          <GrClose className={classes["close-icon"]} onClick={onCloseHandler} />
        </span>
        {selected.map((item, i) => (
          <button
            className={classes["option-button"]}
            onClick={() => {
              chageHandler(i);
              optionSelectHandler(item.optionName);
            }}
            key={i}
          >
            <div className={classes["selection-box"]}>
              {item.selected ? <div></div> : ""}
            </div>
            {item.optionName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SortList;
