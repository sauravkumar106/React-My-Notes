import { useState,useEffect } from "react";
import { resObj } from "../utils/resObj";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    /*
      A Hooks is just a normal JS functions which is given to us by React.
      This functions comes with some power
      
      There is many types of Hooks
      1. useState()
      2. useEffect()
    */

      /*
      If we need to call api 
      
      2. useEffect()
      */

      // Empty dependency array => once after render

      // If dep array [searchText] => once after initial render + everytime after rerender (my searchText changes)
      useEffect(()=>{
        console.log("Hello ");
        // API call
        getRestaurants();
      },[]);
      
async function getRestaurants() {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
  const json = await data.json();
  console.log(json);
}

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
 