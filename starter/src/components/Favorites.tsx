import React, { useContext, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { Data } from "../types/types";
import { useFavorites } from "../context/FavouritesContext";
import { RestaurantContext } from "../context/RestaurantContext"; // Import the context

const Favorites: React.FC = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const [favoriteRestaurants, setFavoriteRestaurants] = React.useState<Data[]>(
    []
  );

  // Access the restaurants from the context
  const { restaurants } = useContext(RestaurantContext);

  // Read favorite restaurants from localStorage on component mount
  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    // Transform stored favorites (IDs) into actual restaurant objects
    const favoriteRestaurantsFromStorage = storedFavorites.map((id: number) => {
      return restaurants.find((r) => r.id === id);
    });

    setFavoriteRestaurants(favoriteRestaurantsFromStorage);
  }, [restaurants]);

  return (
    <div className="container">
      <h2 className="text-center">Favorite Restaurants</h2>
      <div className="flex">
        {favoriteRestaurants.map(
          (restaurant: Data) =>
            restaurant && (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                addToFavorites={toggleFavorite}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Favorites;

// import React, { useState, useEffect, useContext } from "react";
// import RestaurantCard from "./RestaurantCard";
// import { Data } from "../types/types";
// import RestaurantContext from "../context/RestaurantContext";

// const Favorites: React.FC = () => {
//   const [favoriteRestaurants, setFavoriteRestaurants] = useState<Data[]>([]);

//   // Read favorite restaurants from local storage on component mount
//   useEffect(() => {
//     const storedFavorites = JSON.parse(
//       localStorage.getItem("favorites") || "[]"
//     );
//     setFavoriteRestaurants(storedFavorites);
//   }, []);

//   // Access the allRestaurants array from the RestaurantContext
//   const { restaurants } = useContext(RestaurantContext);

//   const toggleFavorite = (restaurantId: number) => {
//     setFavoriteRestaurants((prevFavorites) => {
//       const index = prevFavorites.indexOf(restaurantId);
//       if (index !== -1) {
//         // Remove from favorites
//         const updatedFavorites = [...prevFavorites];
//         updatedFavorites.splice(index, 1);
//         localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//         return updatedFavorites;
//       } else {
//         // Add to favorites
//         const updatedFavorites = [...prevFavorites, restaurantId];
//         localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//         return updatedFavorites;
//       }
//     });
//   };

//   return (
//     <div className="container">
//       <h2 className="text-center">Favorite Restaurants</h2>
//       <div className="flex">
//         {favoriteRestaurants.map((restaurantId: number) => {
//           const restaurant = restaurants.find((r) => r.id === restaurantId);
//           if (restaurant) {
//             return (
//               <RestaurantCard
//                 key={restaurant.id}
//                 restaurant={restaurant}
//                 addToFavorites={() => toggleFavorite(restaurant.id)}
//                 isFavorite={true}
//               />
//             );
//           }
//           return null;
//         })}
//       </div>
//     </div>
//   );
// };

// export default Favorites;
