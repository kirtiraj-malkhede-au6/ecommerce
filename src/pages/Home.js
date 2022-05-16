import React, { Fragment } from "react";
import FilterContentBox from "../components/FilterContentBox/FilterContentBox";

import ProductCard from "../components/ProductCard/ProductCard";
import FilterHeader from "../Layout/FilterHeader/FilterHeader";
import SelectedFilterOption from "../Layout/SelectedFilterOption/SelectedFilterOption";
import classes from "./Home.module.css";
const Home = (props) => {
  console.log([props.filterData]);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  scrollToTop();
  return (
    <Fragment className={classes["page"]}>
      <FilterHeader></FilterHeader>
      <layout className={classes["product-page"]}>
        <div className={classes["product-page-filter-section"]}>
          <h4 className={classes["filter-title"]}>Filters</h4>
          <div className={classes["filter-content"]}>
            {props.filterData.map((element) => (
              <FilterContentBox filterData={element} />
            ))}
          </div>
        </div>
        <div className={classes["product-main-container"]}>
          <div className={classes["product-main-container-1"]}>
            <SelectedFilterOption></SelectedFilterOption>
          </div>
          <section className={classes["product-page-layout"]}>
            {props.productData.map((element) => (
              <ProductCard
                key={element.id}
                productDetail={element}
              ></ProductCard>
            ))}
          </section>
        </div>
      </layout>
    </Fragment>
  );
};

export default Home;
