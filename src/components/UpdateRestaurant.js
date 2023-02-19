import React, { useState, useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";

const UpdateRestaurant = (props) => {
  const { id } = useParams();
  let history = useHistory();
  const { restaurants } = useContext(RestaurantsContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [address, setAddress] = useState("");
  const [image_url, setImage] = useState("");
  const [type_of_food, setFood] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/${id}`);
      console.log(response.data.data);
      setName(response.data.data.restaurant.name);
      setLocation(response.data.data.restaurant.location);
      setPriceRange(response.data.data.restaurant.price_range);
      setAddress(response.data.data.restaurant.address);
      setImage(response.data.data.restaurant.image_url);
      setFood(response.data.data.restaurant.type_of_food);
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedRestaurant = await RestaurantFinder.put(`/${id}`, {
      name,
      location,
      address,
      image_url,
      price_range: priceRange,
      type_of_food,
    });
    history.push("/Admin");
    alert("Update the resturant info");
  };

  return (
    <div>
      <form action="">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            className="form-control"
            type="text"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            id="address"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image_url">image link</label>
          <input
            value={image_url}
            onChange={(e) => setImage(e.target.value)}
            id="image_url"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="type_of_food">Type of food</label>
          <input
            value={type_of_food}
            onChange={(e) => setFood(e.target.value)}
            id="type_of_food"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Price Range</label>
          <input
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            id="price_range"
            className="form-control"
            type="number"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
