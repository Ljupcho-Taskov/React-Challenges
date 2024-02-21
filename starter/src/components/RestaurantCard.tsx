import React from "react";
import { Data, ReviewsList } from "../types/types";
import { useFavorites } from "../context/FavouritesContext";
import { Link } from "react-router-dom";

interface RestaurantCardProps {
  restaurant: Data;
  addToFavorites: (restaurantId: number) => void;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  const { favorites, toggleFavorite } = useFavorites();

  const calculateAverageRating = (reviewsList: ReviewsList[]) => {
    if (reviewsList?.length > 0) {
      const totalStars = reviewsList.reduce(
        (acc, review) => acc + review.stars,
        0
      );
      return totalStars / reviewsList.length;
    }
    return 0;
  };

  return (
    <Link to={`/restaurant-details/${restaurant.businessname}`} className="res">
      <picture className="position-relative">
        <img className="rounded-lg" src={restaurant.image} alt="" />
        <i
          className={`fa-heart small-heart ${
            favorites.includes(restaurant.id) ? "fa-solid" : "fa-regular"
          }`}
          onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => {
            event.preventDefault();
            toggleFavorite(restaurant.id);
          }}
        ></i>
      </picture>
      <div className="bg-light rounded-bottom">
        <h5>{restaurant.businessname}</h5>
        <p>{restaurant.restauranttype}</p>
        Ratings: {calculateAverageRating(restaurant.reviewsList).toFixed(2)}
        <p>Based on {restaurant.reviews} reviews</p>
      </div>
    </Link>
  );
};

export default RestaurantCard;
