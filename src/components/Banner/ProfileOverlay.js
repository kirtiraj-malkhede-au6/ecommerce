import React from "react";
import classes from "./ProfileOverlay.module.css";
import { RiMenLine } from "react-icons/ri";
const ProfileOverlay = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["profile-icon-box"]}>
        <RiMenLine className={classes["profile-icon"]} />
      </div>
      <div className={classes["welcome-box"]}>
        <h3>Hello Kirtiraj!</h3>
      </div>
      <div className={classes["account-box"]}>
        <span>Account</span>
      </div>
      <div className={classes["order-history-box"]}>
        <span>Order history</span>
      </div>
      <div className={classes["signout-box"]}>
        <button>Sign out</button>
      </div>
    </div>
  );
};

export default ProfileOverlay;
