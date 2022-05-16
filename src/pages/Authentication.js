import React from "react";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import classes from "./Authentication.module.css";
const Authentication = () => {
  return (
    <div className={classes["authpage"]}>
      <container className={classes["container"]}>
        <div className={classes["logo"]}>
          <div className={classes["logo-box"]}>
            <span className={classes["logo-name"]}>US</span>
          </div>
          <div className={classes["title"]}>
            <span className={classes["title-name"]}>URBAN STREET</span>
          </div>
        </div>
        <div className={classes["auth-container"]}>
          <div className={classes["auth-logo"]}>
            <span className={classes["auth-logo-icon"]}>US</span>
            <span className={classes["auth-logo-name"]}>URBAN STREET</span>
          </div>
          <p className={classes["auth-welcome"]}></p>
          <div className={classes["auth-option-box"]}>
            <span className={classes["auth-option-1"]}>
              <FcGoogle />
            </span>
            <span className={classes["auth-option-2"]}>
              <SiFacebook />
            </span>
          </div>
          <span className={classes["auth-or"]}>- OR -</span>
          <form>
            <div className={classes["auth-form-box"]}>
              <div className={classes["auth-email-box"]}>
                <span>Email Address</span>
                <input placeholder="jonas@mail.com" />
              </div>
              <div className={classes["auth-password-box"]}>
                <span>Password</span>
                <input placeholder="at least 8 charectar" />
              </div>
              <div className={classes["auth-extra-box"]}>
                <label>
                  <input type="radio" name="remember"></input>
                  Remember
                </label>

                <span>Forgot Password ?</span>
              </div>
              <div className={classes["auth-button-box"]}>
                <button>Login</button>
                <button>Sign up</button>
              </div>
              <div className={classes["auth-terms-box"]}>
                <p>
                  By continuing, you agree that you have read and accept our
                  <a href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/">{`T&Cs`}</a>
                  and
                  <a href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/">{`Privacy Policy.`}</a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </container>
    </div>
  );
};

export default Authentication;
