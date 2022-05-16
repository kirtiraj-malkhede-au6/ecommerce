import React from "react";
import { useNavigate } from "react-router-dom";
import CartButton from "../Buttons/CartButton";
// import SizeListButton from "../Buttons/SizeListButton";
import classes from "./ProductCard.module.css";
import WishlistButton from "../Buttons/WishlistButton";
const ProductCard = (props) => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${props.productDetail.category}/${props.productDetail.id}`);
    navigate(1);
  };

  const offeredprice = parseInt(props.productDetail.originalPrice) * 2;

  // console.log(Object.keys(props.productDetail.size));
  return (
    <div className={classes["container"]} onClick={handleClick}>
      <div className={classes["image-box"]}>
        <img
          src={props.productDetail.image}
          alt="Italian Trulli"
          // height="700"
          // width="300"
        />
      </div>
      <div className={classes["headline-box"]}>
        <span>{props.productDetail.description}</span>
      </div>
      <div className={classes["price-box"]}>
        <span className={classes["final"]}>
          <span>{`₹${props.productDetail.originalPrice}`}</span>
        </span>
        <span className={classes["original"]}>
          <span>{`₹${offeredprice}`}</span>
        </span>
        <span className={classes["offer"]}>
          <span>50% Off</span>
        </span>
      </div>
      <div className={classes["conatiner-buttons"]}>
        <div className={classes["cart-button-1"]}>
          <WishlistButton />
        </div>
        <div className={classes["cart-button-2"]}>
          <CartButton />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
