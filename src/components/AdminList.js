import React, { useEffect, useContext, useState } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useLocalStorage } from "@har4s/use-local-storage";
import "./list.css";
import { useHistory } from "react-router-dom";
import StarRating from "./StarRating";

const AdminList = (props) => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  const [uid, setUid] = useLocalStorage("UID");

  let clientTime = new Date().toLocaleString();
  let history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get("/");
        console.log(response.data.data);
        setRestaurants(response.data.data.restaurants);
      } catch (err) {}
    };

    fetchData();
  }, []);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await RestaurantFinder.delete(`/${id}`);
      setRestaurants(
        restaurants.filter((restaurant) => {
          return restaurant.resaurant_id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    history.push(`/restaurants/${id}/update`);
  };

  const handleRestaurantSelect = (id) => {
    history.push(`/restaurants/${id}`);
  };

  const renderRating = (restaurant) => {
    if (!restaurant.count) {
      return <span className="text-warning">0 reviews</span>;
    }
    return (
      <>
        <StarRating rating={restaurant.average_rating} />
        <span className="text-warning ml-1">({restaurant.count})</span>
      </>
    );
  };

  return (
    <div className="list-group">
      <span className="bg-info">
        Current logged user: {uid}, {clientTime}
      </span>
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-info">
            <th scope="col">Restaurant</th>
            <th scope="col"></th>
            <th scope="col">Type</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants &&
            restaurants.map((restaurant) => {
              return (
                <tr
                  onClick={() =>
                    handleRestaurantSelect(restaurant.restaurant_id)
                  }
                  key={restaurant.restaurant_id}
                >
                  <td>{restaurant.name}</td>

                  <td>
                    <img
                      src={restaurant.image_url}
                      width="120px"
                      height="120px"
                    ></img>
                  </td>
                  <td>{restaurant.type_of_food}</td>
                  <td>{restaurant.location}</td>
                  <td>{"$".repeat(restaurant.price_range)}</td>
                  <td>{renderRating(restaurant)}</td>
                  <td>
                    <button
                      onClick={(e) => handleUpdate(e, restaurant.restaurant_id)}
                      className="btn btn-warning"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => handleDelete(e, restaurant.restaurant_id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminList;
