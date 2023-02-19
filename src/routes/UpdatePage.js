import React from "react";
import UpdateRestaurant from "../components/UpdateRestaurant";
import "./UpdatePage.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
const UpdatePage = () => {
  return (
    <div>
      <Link to="/Admin">
        <a>Go back</a>
      </Link>
      <div className="updatePage">
        <UpdateRestaurant />
      </div>
    </div>
  );
};

export default UpdatePage;
