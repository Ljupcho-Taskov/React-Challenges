import React, { useContext } from "react";
import { RestaurantContext } from "../context/RestaurantContext";
import { useParams } from "react-router-dom";
import { ReviewsList } from "../types/types";

const CuisineDetails: React.FC = () => {
  const { cuisineType } = useParams();
  const { restaurants } = useContext(RestaurantContext);

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
      <div className="flex">
        {filteredRestaurants.map((restaurant) => (
          <div className="res" key={restaurant.id}>
            <picture className="">
              <img className="rounded-lg" src={restaurant.image} alt="" />
            </picture>
            <div className="bg-light rounded-bottom">
              <h5>{restaurant.businessname}</h5>
              <p>{restaurant.restauranttype}</p>
              <p>
                Ratings:
                {calculateAverageRating(restaurant.reviewsList).toFixed(2)}
              </p>
              <p>Based on {restaurant.reviews} reviews</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CuisineDetails;
