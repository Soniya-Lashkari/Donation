import React from "react";
import "./header.css";

import image from "./header img/Shape (1).png";
import imag from "./header img/Shape.png";
import image1 from "./header img/Shape.svg";
import img from "./header img/Shape232.png";
const Header = () => {
  return (
    <>
      <div className="head">
        <img src={imag} />

        <h2>बाबू की रसोई </h2>

        <div className="img">
          <img src={image} />
        </div>
        <div className="image">
          <img src={img} />
          <img src={image1} />
        </div>
      </div>
    </>
  );
};
export default Header;
