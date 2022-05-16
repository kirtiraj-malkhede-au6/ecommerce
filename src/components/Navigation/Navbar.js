import React, { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearchAlt2 } from "react-icons/bi";
import CartlistOverlay from "../Banner/CartlistOverlay";
import WishlistOverlay from "../Banner/WishlistOverlay";
import ProfileOverlay from "../Banner/ProfileOverlay";
import classes from "./Navbar.module.css";
const Navbar = () => {
  const [isShowWishlist, setIsShowWishlist] = useState(false);
  const [isShowCartlist, setIsShowCartlist] = useState(false);
  const [isShowProfile, setIsShowProfile] = useState(false);

  return (
    <Fragment>
      <nav className={classes["main-nav"]}>
        <div className={classes["logo"]}>
          <Link to="/">
            <h2>Urban Street</h2>
          </Link>
        </div>

        <div className={classes["search-bar"]}>
          <input
            className={classes["search-bar-input"]}
            placeholder=" Search for products, styles, categories"
          />
          <button>
            <BiSearchAlt2 className={classes["search-icon"]} />
          </button>
        </div>
        <div className={classes["menu-link"]}>
          <ul>
            <li>
              <NavLink activeClassName={classes.active} to="/tshirt">
                t-shirt
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={classes.active} to="/shirt">
                shirt
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={classes.active} to="/jeans">
                Jeans
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={classes.active} to="/jacket">
                Jackets
              </NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className={classes["shoping-box"]}>
          <ul className={classes["shopping-list"]}>
            <li>
              <AiOutlineHeart
                className={classes["shoping-icon"]}
                onClick={() => {
                  setIsShowWishlist(!isShowWishlist);
                  setIsShowCartlist(false);
                  setIsShowProfile(false);
                }}
              />
            </li>
            <li>
              <AiOutlineShoppingCart
                className={classes["shoping-icon"]}
                onClick={() => {
                  setIsShowCartlist(!isShowCartlist);
                  setIsShowWishlist(false);
                  setIsShowProfile(false);
                }}
              />
            </li>
            <li>
              <CgProfile
                className={classes["shoping-icon"]}
                onClick={() => {
                  setIsShowProfile(!isShowProfile);
                  setIsShowCartlist(false);
                  setIsShowWishlist(false);
                }}
              />
            </li>
          </ul>
        </div>
        <div className={classes["hamburger-menu"]}>
          <GiHamburgerMenu
            className={classes["shoping-icon"]}
          ></GiHamburgerMenu>
        </div>
      </nav>
      {isShowWishlist && <WishlistOverlay />}
      {isShowCartlist && <CartlistOverlay />}
      {isShowProfile === true ? <ProfileOverlay /> : null}
    </Fragment>
  );
};

export default Navbar;
