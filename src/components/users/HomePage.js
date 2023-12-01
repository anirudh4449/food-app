import React from "react";
import "../users/styling.css"; // Import the CSS file
import Logo from "../users/images/Logo.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <img src={Logo} className="logo" alt="logo" />
        </div>

        <div className="col-sm" id="text">
          <h1>Hungry?</h1>
          <small>Order a delicious dish now</small>
          <br />
          <br />
          <br />
          <Link to="/user/login" className="btn btn-dark">
            Sign In
          </Link>{" "}
          <Link to="/user/register" className="btn btn-warning">
            Sign Up
          </Link>
        </div>

        <div className="col-md-5">
          <img
            className="rightphoto"
            src="https://www.awesomecuisine.com/wp-content/uploads/2007/10/Chicken-Biryani_resized-500x436.jpg"
            alt="rightimage"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
