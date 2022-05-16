import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import ProfileOverlay from "../Banner/ProfileOverlay";
import WishlistOverlay from "../Banner/WishlistOverlay";
import CartlistOverlay from "../Banner/CartlistOverlay";
import classes from "./NavbarMini.module.css";
import { Fragment } from "react/cjs/react.production.min";
const NavbarMini = () => {
  const [isClickedWishlist, setIsClickedWishlist] = useState(false);
  const [isClickedCartlist, setIsClickedCartlist] = useState(false);
  const [isClickedProfile, setIsClickedProfile] = useState(false);

  let navigate = useNavigate();
  const changePageHandler = () => {
    navigate(`/`);
    navigate(1);
  };

  return (
    <Fragment>
      <div className={classes["container"]}>
        <h1 onClick={changePageHandler}>
          <span>U</span>rban <span>s</span>treet
        </h1>
        <div className={classes["button-box"]}>
          <div>
            <AiOutlineHeart
              className={classes["whilist-icon"]}
              onClick={() => {
                setIsClickedWishlist(!isClickedWishlist);
                setIsClickedCartlist(false);
                setIsClickedProfile(false);
              }}
            />
          </div>
          <div>
            <AiOutlineShoppingCart
              className={classes["cart-icon"]}
              onClick={() => {
                setIsClickedCartlist(!isClickedCartlist);
                setIsClickedWishlist(false);
                setIsClickedProfile(false);
              }}
            />
          </div>
          <div>
            <CgProfile
              className={classes["profile-icon"]}
              onClick={() => {
                setIsClickedProfile(!isClickedProfile);
                setIsClickedWishlist(false);
                setIsClickedCartlist(false);
              }}
            />
          </div>
        </div>
      </div>
      {isClickedWishlist && <WishlistOverlay />}
      {isClickedCartlist && <CartlistOverlay />}
      {isClickedProfile && <ProfileOverlay />}
    </Fragment>
  );
};

export default NavbarMini;
