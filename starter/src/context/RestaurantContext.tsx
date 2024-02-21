import React, { createContext, useEffect, useState } from "react";
import { Data, ReviewsList } from "../types/types";

interface RestaurantContextType {
  restaurants: Data[];
  reviews: ReviewsList[];
  top10Restaurants: Data[];
  setReviews: React.Dispatch<React.SetStateAction<ReviewsList[]>>;
  setRestaurants: React.Dispatch<React.SetStateAction<Data[]>>;
}

export const RestaurantContext = createContext<RestaurantContextType>({
  restaurants: [],
  reviews: [],
  top10Restaurants: [],
  setReviews: () => {},
  setRestaurants: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const RestaurantContextConstructor: React.FC<Props> = ({ children }) => {
  const [restaurants, setRestaurants] = useState<Data[]>([
    {
      reviews: 0,
      parkinglot: false,
      phone: "",
      image: "",
      restauranttype: "",
      businessname: "",
      address: "",
      slug: "",
      email: "",
      id: 0,
      reviewsList: [],
    },
  ]);

  const [reviews, setReviews] = useState<ReviewsList[]>([]);
  const [top10Restaurants, setTop10Restaurants] = useState<Data[]>([]);

  useEffect(() => {
    fetch("http://localhost:5001/restaurants/")
      .then((res) => res.json())
      .then((data) => {
        const sortedRestaurants = [...data].sort(
          (a, b) => b.reviews - a.reviews
        );

        const top10 = sortedRestaurants.slice(0, 10);

        setRestaurants(data);
        setReviews(data);
        setTop10Restaurants(top10);
      });
  }, []);

  const contextValue: RestaurantContextType = {
    restaurants,
    reviews,
    top10Restaurants,
    setRestaurants,
    setReviews,
  };

  return (
    <RestaurantContext.Provider value={contextValue}>
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantContextConstructor;

// import React, { createContext, useContext, useEffect, useState } from "react";
// import { Data, ReviewsList } from "../types/types";
// import { Link } from "react-router-dom";

// interface RestaurantContextType {
//   restaurants: Data[];
//   reviews: ReviewsList[];
//   top10Restaurants: Data[];
//   favorites: number[]; // Add favorites property
//   toggleToFavorites: (restaurantId: number) => void; // Add toggleToFavorites property
// }

// export const RestaurantContext = createContext<
//   RestaurantContextType | undefined
// >(undefined);

// interface Props {
//   children: React.ReactNode;
// }

// const RestaurantContextProvider: React.FC<Props> = ({ children }) => {
//   const [restaurants, setRestaurants] = useState<Data[]>([]);
//   const [reviews, setReviews] = useState<ReviewsList[]>([]);
//   const [top10Restaurants, setTop10Restaurants] = useState<Data[]>([]);
//   const [favorites, setFavorites] = useState<number[]>([]);

//   // Function to toggle favorites
//   const toggleToFavorites = (restaurantId: number) => {
//     setFavorites((prevFavorites) => {
//       if (prevFavorites.includes(restaurantId)) {
//         // Remove from favorites
//         return prevFavorites.filter((id) => id !== restaurantId);
//       } else {
//         // Add to favorites
//         return [...prevFavorites, restaurantId];
//       }
//     });
//   };

//   useEffect(() => {
//     fetch("http://localhost:5001/restaurants/")
//       .then((res) => res.json())
//       .then((data) => {
//         const sortedRestaurants = [...data].sort(
//           (a, b) => b.reviews - a.reviews
//         );

//         const top10 = sortedRestaurants.slice(0, 10);

//         setRestaurants(data);
//         setReviews(data);
//         setTop10Restaurants(top10);
//       });
//   }, []);

//   const contextValue: RestaurantContextType = {
//     restaurants,
//     reviews,
//     top10Restaurants,
//     favorites, // Include favorites in the context
//     toggleToFavorites, // Include toggleToFavorites in the context
//   };

//   return (
//     <RestaurantContext.Provider value={contextValue}>
//       {children}
//     </RestaurantContext.Provider>
//   );
// };

// export default RestaurantContextProvider;
