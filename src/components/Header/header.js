import React from "react";
import "./header.css";

import image from "./header img/Shape (1).png";
import imag from "./header img/Shape.png";
const Header = () => {
  return (
    <>
      <div className="head">
        <img src={imag} />
        <h4>बाबू की रसोई </h4>
        <img src={image} />
      </div>
    </>
  );
};
export default Header;
