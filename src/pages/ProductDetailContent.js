import React, { Fragment, useState } from "react";
import DeliveryReturnBanner from "../components/Banner/DeliveryReturnBanner";
import { RiArrowLeftSFill } from "react-icons/ri";
import { FcApproval } from "react-icons/fc";

import classes from "./ProductDetailContent.module.css";
const ProductDetailContent = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  scrollToTop();

  const articleData = {
    id: "artical00001",
    title: "zara half sleeves t-shirt",
    description:
      "Loose fit jeans with a wide leg made in outstanding dry selvage denim woven in the legendary denim-town Kojima, in Okayama, Japan.",
    price: { offer: "50%", original: "1198", final: "599" },
    size: { xs: "10", s: "6", m: "10", l: "12", xl: "6", xxl: "2" },
    color: {
      option1: "black",
      option2: "blue",
      option3: "grey",
      option4: "brown",
    },
    image: {
      image1:
        "https://images.bewakoof.com/original/brown-mocha-classic-black-oversized-sweatshirt-403211-1631699410-2.jpg?tr=q-100",
      image2:
        "https://images.bewakoof.com/original/brown-mocha-classic-black-oversized-sweatshirt-403211-1631699416-3.jpg?tr=q-100",
      image3:
        "https://images.bewakoof.com/original/brown-mocha-classic-black-oversized-sweatshirt-403211-1631699422-4.jpg?tr=q-100",
      image4:
        "https://images.bewakoof.com/original/brown-mocha-classic-black-oversized-sweatshirt-403211-1631699433-6.jpg?tr=q-100",
      image5:
        "https://images.bewakoof.com/original/brown-mocha-classic-black-oversized-sweatshirt-403211-1631699428-5.jpg?tr=q-100",
      image6:
        "https://images.bewakoof.com/original/jet-black-half-sleeve-t-shirt-106-1637159837-8.jpg?tr=q-100",
    },
  };

  const [displayImage, setDisplayImage] = useState(articleData.image.image1);
  const [sizeSelected, setSizeSelected] = useState(null);
  const [colorSelected, setColorSelected] = useState(null);
  const sizeSelectedHandler = (size) => {
    setSizeSelected(size);
  };
  const colorSelectedHandler = (color) => {
    setColorSelected(color);
  };
  const sliderImageHandler = (value, index) => {
    setDisplayImage(value);
    console.log(index);
  };

  return (
    <Fragment>
      <div className={classes["product-container"]}>
        <div className={classes["image-section"]}>
          <div className={classes["image-portion"]}>
            <div className={classes["image-slider"]}>
              {Object.values(articleData.image).map((item, index) => (
                <div
                  key={index}
                  onClick={() => sliderImageHandler(item, index)}
                >
                  <img src={item} alt="Italian Trulli" />
                </div>
              ))}
            </div>
            <div className={classes["image-loader"]}>
              <div className={classes["slide-area"]}>
                {Object.values(articleData.image).map((item, index) => {
                  if (item === displayImage) {
                    return (
                      <div key={index}>
                        <RiArrowLeftSFill className={classes["left-arrow"]} />
                      </div>
                    );
                  }
                  return <div key={index}></div>;
                })}
              </div>
            </div>
          </div>

          <div className={classes["image-zoom"]}>
            <img
              src={displayImage}
              alt="Italian Trulli"
              // height="700"
              // width="300"
            />
          </div>
        </div>
        <div className={classes["detail-section"]}>
          <div className={classes["article-name"]}>
            <h2>{articleData.title}</h2>
          </div>
          <div className={classes["article-description"]}>
            <p>{articleData.description}</p>
            <div className={classes["assurance"]}>
              <span>
                <FcApproval className={classes["verify-icon"]} />
              </span>
              <div>
                <span className={classes["verify"]}>Verified by</span>
                <span className={classes["verify-by"]}>urban street.</span>
              </div>
            </div>
          </div>
          <div className={classes["article-price"]}>
            <div className={classes["article-price-headline"]}>
              <span>Price</span>
            </div>
            <div className={classes["article-price-box"]}>
              {Object.entries(articleData.price).map((element, index) => (
                <span
                  className={classes[`article-price-${element[0]}`]}
                  key={index}
                >
                  ₹ {element[1]}
                </span>
              ))}
            </div>
          </div>
          <div className={classes["article-size"]}>
            <div className={classes["article-size-headline"]}>
              <span>size</span>
            </div>
            <div className={classes["article-size-list"]}>
              {Object.keys(articleData.size).map((item, index) => (
                <li
                  className={
                    item === sizeSelected
                      ? classes["list-active"]
                      : classes["list"]
                  }
                  key={index}
                  onClick={() => sizeSelectedHandler(item)}
                >
                  <span>{item}</span>
                </li>
              ))}
            </div>
          </div>
          <div className={classes["article-color"]}>
            <div className={classes["article-color-headline"]}>
              <span>color</span>
            </div>
            <div className={classes["article-color-list"]}>
              {Object.values(articleData.color).map((item, index) => (
                <li key={index}>
                  <div
                    className={
                      item === colorSelected
                        ? classes["color-chart-active"]
                        : classes["color-chart"]
                    }
                    style={{ backgroundColor: item }}
                    onClick={() => colorSelectedHandler(item)}
                  ></div>
                  <span
                    className={
                      item === colorSelected
                        ? classes["color-name-active"]
                        : classes["color-name"]
                    }
                  >
                    {item}
                  </span>
                </li>
              ))}
            </div>
          </div>
          <div className={classes["article-cart"]}>
            <button className={classes["article-cart-button"]}>
              add to cart
            </button>
          </div>
        </div>
      </div>
      <DeliveryReturnBanner />
    </Fragment>
  );
};

export default ProductDetailContent;
