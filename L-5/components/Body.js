import { useState } from "react";
import { resObj } from "../utils/resObj";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState(resObj.restaurants);

  const filterTopRated = () => {
    const topRated = resObj.restaurants.filter((restaurant) => restaurant.avgRating > 4.5);
    setFilteredRestaurants(topRated);
  };

  return (
    <div className="body">
      <div className="filter">
        {/* <input className="search-bar" placeholder="What do you want to eat?" /> */}
        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
          // Unique key properties mean that each item is uniquely represented for each component.
          // The key makes list updates faster by tracking items efficiently.
        ))}
      </div>
    </div>
  );
};

export default Body;
