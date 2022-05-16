import React, { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import classes from "./FilterHearder.module.css";
import { BiSort } from "react-icons/bi";
import { Fragment } from "react/cjs/react.production.min";
import SortList from "../../components/Banner/SortList";
const FilterHeader = () => {
  const optionList = [
    { optionName: "popularity", selected: false },
    { optionName: "price low to high", selected: false },
    { optionName: "Price high to low", selected: false },
    { optionName: "bestseller", selected: false },
    { optionName: "new arrivals", selected: false },
    { optionName: "discount high to low", selected: false },
  ];
  const defaultOption = optionList[0].optionName;
  const [selected, setSeleted] = useState(false);
  const [optionSelect, setOptionSelect] = useState(defaultOption);
  const optionSelectHandler = (value) => {
    setOptionSelect(value);
  };

  const optionChangeHandler = () => {
    setSeleted(!selected);
  };

  return (
    <Fragment>
      <div className={classes["filter-header"]}>
        <div className={classes["filter-header-filter"]}>
          <h1>Jacket</h1>
          <span>(25898)</span>
        </div>

        <div className={classes["filter-header-sort"]}>
          <div className={classes["logo"]}>
            <BiSort className={classes["icon"]} />
          </div>
          <div className={classes["sort"]} onClick={optionChangeHandler}>
            <h2>Sort By</h2>
            <div className={classes["relevance"]}>
              <h3>{optionSelect}</h3>
              <span>
                <MdOutlineArrowDropDown className={classes["drop-icon"]} />
              </span>
            </div>
          </div>
        </div>
        {selected ? (
          <SortList
            optionChangeHandler={optionChangeHandler}
            optionSelectHandler={optionSelectHandler}
            optionSelect={optionSelect}
            optionList={optionList}
          />
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
};

export default FilterHeader;
