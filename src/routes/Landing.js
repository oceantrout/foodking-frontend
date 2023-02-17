import "./Landing.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import React from "react";
function Landing() {
  return (
    <div className="Canvas">
      <Button className="button1">Log in</Button>
      <Button className="button1">Sign up</Button>
      <div className="nav">
        <span className="text">Food King</span>
        <img src="/logo.jpg" height="300px"></img>
      </div>
      <Link to="/Home">
        <h2 class="h1-1">Let us Explore</h2>
      </Link>
    </div>
  );
}

export default Landing;
