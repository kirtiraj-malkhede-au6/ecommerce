import React from "react";
import { MdOutlineLocalShipping, MdLocationOn } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";
import classes from "./DeliveryReturnBanner.module.css";

const DeliveryReturnBanner = () => {
  return (
    <div className={classes["deliver-return"]}>
      <div className={classes["deliver-return-box"]}>
        <div className={classes["deiver-return-icon-box"]}>
          <MdOutlineLocalShipping className={classes["deiver-return-icon"]} />
        </div>
        <div className={classes["deiver-return-headline"]}>
          <span>free shipping</span>
        </div>
        <div className={classes["deiver-return-detail"]}>
          <span>Applies to orders above 500 INR</span>
        </div>
      </div>
      <div className={classes["deliver-return-box"]}>
        <div className={classes["deiver-return-icon-box"]}>
          <MdLocationOn className={classes["deiver-return-icon"]} />
        </div>
        <div className={classes["deiver-return-headline"]}>
          <span>FAST AND TRACEABLE</span>
        </div>
        <div className={classes["deiver-return-detail"]}>
          <span>Shipping with UPS</span>
        </div>
      </div>
      <div className={classes["deliver-return-box"]}>
        <div className={classes["deiver-return-icon-box"]}>
          <FaExchangeAlt className={classes["deiver-return-icon"]} />
        </div>
        <div className={classes["deiver-return-headline"]}>
          <span>HASSLE-FREE RETURNS</span>
        </div>
        <div className={classes["deiver-return-detail"]}>
          <span>Pre-printed return labels</span>
        </div>
      </div>
    </div>
  );
};

export default DeliveryReturnBanner;
