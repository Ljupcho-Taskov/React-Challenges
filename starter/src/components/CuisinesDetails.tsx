import React, { useContext } from "react";
import { RestaurantContext } from "../context/RestaurantContext";
import { useParams } from "react-router-dom";
import { ReviewsList } from "../types/types";
import RestaurantCard from "./RestaurantCard";
import { useFavorites } from "../context/FavouritesContext";

const CuisineDetails: React.FC = () => {
  const { cuisineType } = useParams();
  const { restaurants } = useContext(RestaurantContext);
  const { toggleFavorite } = useFavorites();

  const calculateAverageRating = (reviewsList: ReviewsList[]) => {
    if (reviewsList.length > 0) {
      const totalStars = reviewsList.reduce(
        (acc, review) => acc + review.stars,
        0
      );
      return totalStars / reviewsList.length;
    }
    return 0;
  };

  const filteredRestaurants = restaurants.filter(
    (restaurant) => restaurant.restauranttype === cuisineType
  );
  if (!filteredRestaurants) {
    return <div>restaurant not found</div>;
  }
  const restaurant = restaurants.find((r) => r.restauranttype === cuisineType);
  return (
    <div className="container">
      <h2>{restaurant?.restauranttype}</h2>
      <div className="row d-flex">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            addToFavorites={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default CuisineDetails;
