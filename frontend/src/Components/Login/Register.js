import React, { useState } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import './Login.css';

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/auth/register", {
        name,
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        setName('');
        setEmail('');
        setPassword('');
        alert("Registered Successfully");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="signin">
      <div className="login-container">
        <h2 className="text-center">SignUp</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <label>Name :</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
          <br />
          <label>Email :</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <br />
          <label>Password :</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <br />
          <button className="login-btn" type="submit">
            Submit
          </button>
        </form>
        <p className="signup-link">
          <NavLink to="/">Home</NavLink> I have an account? <NavLink to="/login">Sign in</NavLink>
        </p>
      </div>
    </div>
  );
}
