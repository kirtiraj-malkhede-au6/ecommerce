import React from "react";
import { Route, Routes } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import Navbar from "../components/Navigation/Navbar";
import NavbarMini from "../components/Navigation/NavbarMini";

const Header = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/:productId" exact element={<Navbar />} />
        <Route path="/:productId/:productId" element={<NavbarMini />} />
      </Routes>
    </Fragment>
  );
};

export default Header;
