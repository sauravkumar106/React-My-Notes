import React from "react";
import ReactDOM from "react-dom/client";

/*
* Header
* - Logo
* - Nav Items
* Body
* - Search
* - RestaurantCard
    - Img
    - Name, star rating, cuisines
* Footer
* - Copyright
* - Links
* - Address
* - Contact
*/

// Corrected restaurant data structure
const resObj = {
    "restaurants": [
      {
        "name": "Bella Italia",
        "img": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
        "cuisines": ["Italian", "Continental"],
        "avgRating": 4.5,
        "costForTwo": 50
      },
      {
        "name": "Spice Hub",
        "img": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
        "cuisines": ["Indian", "Chinese"],
        "avgRating": 4.2,
        "costForTwo": 40
      },
      {
        "name": "Le Gourmet",
        "img": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
        "cuisines": ["French", "Italian"],
        "avgRating": 4.7,
        "costForTwo": 60
      },
      {
        "name": "Sushi World",
        "img": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
        "cuisines": ["Japanese", "Sushi"],
        "avgRating": 4.6,
        "costForTwo": 70
      },
      {
        "name": "El Mexicano",
        "img": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
        "cuisines": ["Mexican"],
        "avgRating": 4.3,
        "costForTwo": 45
      },
      {
        "name": "BBQ Heaven",
        "img": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
        "cuisines": ["American", "BBQ"],
        "avgRating": 4.1,
        "costForTwo": 55
      },
      {
        "name": "Thai Delight",
        "img": "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
        "cuisines": ["Thai", "Vietnamese"],
        "avgRating": 4.4,
        "costForTwo": 35
      },
      {
        "name": "Mediterraneo",
        "img": "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
        "cuisines": ["Mediterranean"],
        "avgRating": 4.8,
        "costForTwo": 65
      },
      {
        "name": "Tapas Corner",
        "img": "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
        "cuisines": ["Spanish", "Tapas"],
        "avgRating": 4.2,
        "costForTwo": 50
      },
      {
        "name": "Lebanese Lounge",
        "img": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
        "cuisines": ["Lebanese"],
        "avgRating": 4.5,
        "costForTwo": 55
      },
      {
        "name": "Green Garden",
        "img": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
        "cuisines": ["Vegan", "Organic"],
        "avgRating": 4.7,
        "costForTwo": 40
      },
      {
        "name": "Korean BBQ",
        "img": "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80",
        "cuisines": ["Korean", "BBQ"],
        "avgRating": 4.3,
        "costForTwo": 50
      }
    ]  
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="
          alt="Food Delivery Logo"
        />
      </div>

      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ resData }) => {
  return (
    <div className="res-card">
      <img src={resData.img} alt={resData.name} className="res-img" />
      <h3>{resData.name}</h3>
      <p>Cuisines: {resData.cuisines.join(", ")}</p>
      <p>Rating: {resData.avgRating}</p>
      <p>Cost for Two: ${resData.costForTwo}</p>
    </div>
  );
};

/*
Props (Properties): Props allow you to pass data to a component.
They are simply arguments to a function component.
*/
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input className="search-bar" placeholder="What do you want to eat?" />
        <button className="search-button">Search</button>
      </div>
      <div className="res-container">
        {resObj.restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

// Render the AppLayout into the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
