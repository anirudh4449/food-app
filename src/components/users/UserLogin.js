import React, { useState } from "react";
import UserAuthService from "../../services/UserAuthService";
import Cookies from "js-cookie";
import { useNavigate, Link } from "react-router-dom";
import "./styling.css";

function UserLogin() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [loginError, setLoginError] = useState(false);

  const handleSuccessfulLogin = async () => {
    try {
      const response = await UserAuthService.userLogin(loginData);
      console.log("success-out");
      console.log(response.data);
      if (response.status === 200) {
        console.log("success");
        console.log(response.data);
        const userRole = response.data.role;
        Cookies.set("loggedInUserRole", userRole);

        if (userRole === "admin") {
          navigate("/admin/add");
        } else {
          navigate("/menu");
        }
      } else {
        setLoginError(true);
      }
    } catch (error) {
      console.error("Login failed:", error);
      setLoginError(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleSuccessfulLogin();
    setLoginData({ username: "", password: "" });
  };
  return (
    <div className="login-container">
      <div className="login-form">
        <h3>SIGN IN</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={loginData.username}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
            required
          />

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        {loginError && (
          <div className="error-message">Login failed, please try again.</div>
        )}

        {/* Buttons to navigate to home and sign-up pages */}
        <div className="navigation-buttons">
          <Link to="/" className="btn">
            HOME
          </Link>
          <Link to="/user/register" className="btn">
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
