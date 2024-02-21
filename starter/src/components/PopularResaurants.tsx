import React, { useContext } from "react";
import { useFavorites } from "../context/FavouritesContext";
import RestaurantCard from "./RestaurantCard";
import { RestaurantContext } from "../context/RestaurantContext";

const PopularRestaurants: React.FC = () => {
  const { toggleFavorite } = useFavorites();
  const { top10Restaurants } = useContext(RestaurantContext);

  return (
    <div className="container">
      <h2 className="text-center">Popular Restaurants</h2>
      <div className="flex">
        {top10Restaurants.map((restaurant) => (
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

export default PopularRestaurants;
