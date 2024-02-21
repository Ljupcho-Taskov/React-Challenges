import React, { useContext } from "react";
import { RestaurantContext } from "../context/RestaurantContext";
import { useNavigate } from "react-router-dom";

const Cuisines: React.FC = () => {
  const { restaurants } = useContext(RestaurantContext);
  const navigate = useNavigate();

  const cuisineType: string[] = [];

  restaurants.forEach((restaurant) => {
    if (!cuisineType.includes(restaurant.restauranttype)) {
      cuisineType.push(restaurant.restauranttype);
    }
  });

  const navigateToCuisineDetails = (cuisine: string) => {
    navigate(`/cuisine-details/${cuisine}`);
  };

  return (
    <div className="container">
      <h2 className="text-center">Cuisines</h2>
      <div className="flex justify-content-center text-white">
        {cuisineType.map((cuisine, index) => (
          <button
            className="red-background mr-2"
            key={index}
            onClick={() => navigateToCuisineDetails(cuisine)}
          >
            {cuisine}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Cuisines;
