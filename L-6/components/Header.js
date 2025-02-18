import { useState } from "react";
import { CDN_LOGO } from "../utils/constants";
 
const authentication = () =>{
  // API call to check authentication
  return true;
};


 const Header = () => {

 const [isLoggedIn,setisLoggedIn] = useState(false);

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={CDN_LOGO}
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
        {
        // JS Expression & Statement
        // No if else
        // use ternary Operator
        isLoggedIn ? (
          <button onClick={()=> setisLoggedIn(false)}>LogOut</button>
        ) : (
          <button onClick={()=> setisLoggedIn(true)}>LogIn</button>
        )}
      </div>
    );
  };
  
  export default Header;