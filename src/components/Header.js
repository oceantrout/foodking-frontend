import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header1">
      <img src="/logo.jpg" width="100px" height="100px"></img>
      <a className="heading-text">Food King </a> <br></br>
      <a className="subheading">
        Discover a unique makan experience in Singapore
      </a>
      <br></br>
      <a className="subheading2" href="/">
        retrun to home
      </a>
    </div>
  );
};

export default Header;
