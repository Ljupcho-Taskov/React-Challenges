import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { RestaurantContext } from "../context/RestaurantContext";
import { ReviewsList } from "../types/types";

const RestaurantDetail = () => {
  const { restaurants, reviews } = useContext(RestaurantContext);
  const { businessName } = useParams();

  const [newReview, setNewReview] = useState({
    author: "",
    comment: "",
    stars: 0,
  });

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

  const restaurant = restaurants.find((r) => r.businessname === businessName);
  if (!restaurant) {
    return <div>restaurant not found</div>;
  }

  return (
    <div className="container">
      <h2 className="text-center">{restaurant.businessname}</h2>
      <picture className="">
        <img className="rounded-lg" src={restaurant.image} alt="" />
      </picture>
      <div className="bg-light rounded-bottom">
        <p>
          Ratings: {calculateAverageRating(restaurant.reviewsList).toFixed(2)}
        </p>
        <p>Based on {restaurant.reviews} reviews</p>
        <p>{restaurant.email}</p>
        <p>{restaurant.address}</p>
        <p>{`${
          restaurant.parkinglot ? "We have a parking lot for you" : ""
        }`}</p>
      </div>
      <h2 className="text-center">Reviews</h2>

      <form>
        <label htmlFor="name">Name</label>
        <br />
        <input
          className="w-100"
          id="name"
          type="text"
          placeholder="Your Name"
        />

        <label htmlFor="comment">Comment</label>
        <br />
        <textarea id="comment" className="w-100" placeholder="Your Review" />
        <label htmlFor="stars">Stars</label>
        <input
          className="w-100"
          id="stars"
          name="stars"
          type="range"
          min="0"
          max="5"
        />
        <button className="w-100 btn btn-success" type="submit">
          Add Review
        </button>
      </form>

      <div>
        <>
          {reviews.map((review) => {
            <p>{review.author}</p>;
          })}
        </>
      </div>
    </div>
  );
};

export default RestaurantDetail;
