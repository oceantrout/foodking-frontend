import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h1>
        <img src="/logo.jpg" width="100px" height="100px"></img>
        <a className="heading-text">Food King </a> <br></br>
        <h5>Discover a unique makan experience in Singapore</h5>
        <br></br>
      </h1>
    </div>
  );
};

export default Header;
