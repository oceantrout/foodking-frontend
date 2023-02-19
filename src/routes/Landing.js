import "./Landing.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import React from "react";
function Landing() {
  return (
    <div className="Canvas">
      <Link to="/Login">
        <Button className="button1">Log in</Button>
      </Link>
      <Link to="/Register">
        <Button className="button1">Sign up</Button>
      </Link>
      <Link to="/AdminLogin">
        <Button className="button1">Admin</Button>
      </Link>
      <img src="/logo.jpg" height="100px"></img>
      <div className="nav">
        <span className="text">Food King</span>
        <Link to="/Home">
          <Button className="button2">Let us Explore</Button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
