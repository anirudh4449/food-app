import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";

function UserRegistration() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    fName: "",
    lName: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    location: "",
  });

  const inputStyle = {
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid black",
    width: "100%",
    color: "black",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "goldenrod",
    color: "black",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await UserService.addUser(userData);
      console.log("Registration response:", response);
      alert("User registered successfully. Please login.");
      navigate("/user/login");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "300px", textAlign: "center" }}>
        <h2 style={{ color: "goldenrod" }}>User Registration</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fName"
            placeholder="First Name"
            value={userData.fName}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
          <input
            type="text"
            name="lName"
            placeholder="Last Name"
            value={userData.lName}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={userData.username}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={userData.password}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={userData.phone}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={userData.location}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
          <button type="submit" style={buttonStyle}>
            Register
          </button>
        </form>
        <div style={{ marginTop: "15px" }}>
          <Link to="/user/login" style={{ color: "black" }}>
            Login Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserRegistration;
