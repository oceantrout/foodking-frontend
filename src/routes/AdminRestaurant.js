import React from "react";
import AdmintList from "../components/AdminList";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const AdminRestaurant = () => {
  return (
    <div>
      <Link to="/">
        <Button variant="info">Go back</Button>
      </Link>
      <AdmintList />
    </div>
  );
};

export default AdminRestaurant;
