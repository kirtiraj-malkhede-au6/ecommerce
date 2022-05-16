import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Layout/Header";
import ProductDetailContent from "./pages/ProductDetailContent";
import Home from "./pages/Home";
import StartingPage from "./pages/StartingPage";
import Authentication from "./pages/Authentication";

const DUMMY_DATA = [
  {
    id: "tshirt1",
    category: "tshirt",
    description: "full sleave T-Shirt",
    originalPrice: "899",
    size: { s: 12, m: 10, l: 25, xl: 6 },
    image:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/d/l/dlgrfs013cst_gry_1_ff25fb20.jpg?rnd=20200526195200",
    brand: "allen solly",
    type: "casual",
    sleaves: "full sleave",
    occasion: "party wear",
    print: "patched design",
    fabric: "cotton",
  },
  {
    id: "tshirt2",
    category: "tshirt",
    description: "Round Neck 3/4th Sleeves T-shirt",
    originalPrice: "799",
    size: { s: 14, m: 13, l: 15, xl: 0 },
    image: "https://images.meesho.com/images/products/44011597/qj9ka_512.jpg",
    brand: "peter england",
    type: "funkey casual",
    sleaves: "half sleave",
    occasion: "outdoor trip",
    print: "korean design",
    fabric: "reckzine",
  },
  {
    id: "tshirt3",
    category: "tshirt",
    description: "Color Block Men Round Neck Grey T-Shirt",
    originalPrice: "599",
    size: { s: 16, m: 0, l: 15, xl: 0 },
    image:
      "https://rukminim1.flixcart.com/image/880/1056/khnqqa80-0/t-shirt/q/g/l/m-t322-cgbl-seven-rocks-original-imafxm9jvah3hrpk.jpeg?q=50",
    brand: "flying machine",
    type: "college wear",
    sleaves: "off sleave",
    occasion: "travel wear",
    print: "baby print",
    fabric: "polymer",
  },

  {
    id: "tshirt4",
    category: "tshirt",
    description: "Color Block Men Round Neck Red T-Shirt",
    originalPrice: "2999",
    size: { s: 0, m: 0, l: 0, xl: 3 },
    image:
      "https://rukminim1.flixcart.com/image/880/1056/ksgehzk0/t-shirt/3/v/p/s-trdwtylrn-d39-tripr-original-imag6yufzhwn3zct.jpeg?q=50",
    brand: "baffelow",
    type: "office wear",
    sleaves: "long sleave",
    occasion: "outdoor wear",
    print: "3d design",
    fabric: "lilen",
  },
  {
    id: "tshirt5",
    category: "tshirt",
    description: "Printed Men Hooded Neck Black T-Shirt",
    originalPrice: "999",
    size: { s: 22, m: 16, l: 35, xl: 0 },
    image:
      "https://static.cilory.com/484593-thickbox_default/grunt-grey-melange-solid-round-neck-t-shirt.jpg",
    brand: "killer",
    type: "casual",
    sleaves: "full sleave",
    occasion: "party wear",
    print: "Grey Melange",
    fabric: "90% Cotton",
  },
  {
    id: "tshirt6",
    category: "tshirt",
    description: "Contrast Collar Daily wear",
    originalPrice: "699",
    size: { s: 22, m: 16, l: 35, xl: 10 },
    image:
      "https://static.cilory.com/448779-thickbox_default/nologo-white-polo-full-sleeves-t-shirt.jpg",
    brand: "killer",
    type: "casual",
    sleaves: "full sleave color",
    occasion: "party wear",
    print: "solid design",
    fabric: "cotton",
  },
  {
    id: "tshirt7",
    category: "tshirt",
    description: "Printed Men Hooded Neck Black T-Shirt",
    originalPrice: "999",
    size: { s: 22, m: 16, l: 35, xl: 0 },
    image:
      "https://rukminim1.flixcart.com/image/880/1056/kk4c13k0/t-shirt/t/c/b/xs-t339hs-blyl-new-eyebogler-original-imafzgnhz2hef86n.jpeg?q=50",
    brand: "lee",
    type: "casual",
    sleaves: "full sleave",
    occasion: "party wear",
    print: "plain design",
    fabric: "cotton",
  },
];
const brand = [];
const type = [];
const sleaves = [];
const occasion = [];
const print = [];
const fabric = [];
const filterData = [
  { brand },
  { type },
  { sleaves },
  { occasion },
  { print },
  { fabric },
];
const filterDatafunction = () => {
  DUMMY_DATA.map((element) => {
    if (!brand.includes(element.brand)) {
      brand.push(element.brand);
    }
    if (!type.includes(element.type)) {
      type.push(element.type);
    }
    if (!sleaves.includes(element.sleaves)) {
      sleaves.push(element.sleaves);
    }
    if (!occasion.includes(element.occasion)) {
      occasion.push(element.occasion);
    }
    if (!print.includes(element.print)) {
      print.push(element.print);
    }
    if (!fabric.includes(element.fabric)) {
      fabric.push(element.fabric);
    }
    return null;
  });
};
filterDatafunction();
// console.log(filterData);
const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/welcome" />} />
        <Route path="/welcome" element={<StartingPage />} />
        <Route
          path="/:productId"
          exact
          element={
            <Home productData={DUMMY_DATA} filterData={filterData}></Home>
          }
        />
        <Route
          path="/:productId/:productId"
          element={<ProductDetailContent />}
        />
        <Route path="/auth" element={<Authentication></Authentication>} />
      </Routes>
    </Fragment>
  );
};

export default App;
