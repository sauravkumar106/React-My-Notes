 import { CDN_LOGO } from "../utils/constants";
 const Header = () => {
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
      </div>
    );
  };
  
  export default Header;