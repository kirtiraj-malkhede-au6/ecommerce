import React, { useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineCheck } from "react-icons/ai";
import classes from "./FilterContentBox.module.css";

const FilterContentBox = (props) => {
  const filterList = { ...Object.values(props.filterData) };
  const categoryData = [];

  const finalFilterFunction = () => {
    filterList[0].map((element) =>
      categoryData.push({ id: element, name: element, checked: false })
    );
  };
  finalFilterFunction();
  console.log(categoryData);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoryData);
    console.log("api call");
  }, []);

  const selectCategoryHandler = (item, index) => {
    console.log(item, index);
    let selectedList = categories.map((ele, i) => {
      if (i === index) {
        return { id: ele.id, name: ele.name, checked: !ele.checked };
      }
      return ele;
    });
    setCategories(selectedList);
  };

  return (
    <div className={classes["filter-content-box"]}>
      <div className={classes["filter-content-box-header"]}>
        <span>{Object.keys(props.filterData)}</span>
      </div>
      <div className={classes["filter-content-box-searchbar"]}>
        <div>
          <AiOutlineSearch />
        </div>
        <input placeholder={`Search ${Object.keys(props.filterData)}`} />
      </div>
      <div className={classes["filter-content-box-list"]}>
        {categories.map((item, i) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <div
              className={item.checked ? classes["active"] : ""}
              // name={item.name}
              // checked={item?.isChecked || false}
              onClick={() => selectCategoryHandler(item, i)}
            >
              {item.checked ? <AiOutlineCheck /> : ""}
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default FilterContentBox;
