import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../Auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/auth/login", { email, password })
      .then((res) => {
        console.log("Login response:", res);

        if (res.status === 200) {
          const token = res.data.token;

          localStorage.setItem("token", token);

          auth.login({ name: res.data.user.name, email: res.data.user.email });
          if (res.data.user.email === "jeyaprakashponraj188@gmail.com") {
            navigate("/app/dashboard");
          } else {
            navigate("/user/dashboard");
          }
        } else {
          console.log("Unexpected response structure:", res);
          setMessage("Login failed. Please check your mail and password.");
        }
      })
      .catch((err) => {
        console.error("Login error:", err);
        setMessage("Login failed.");
      });
  };

  return (
    <div className="login">
      <div className="login-container">
        <h2 className="text-center">Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-btn">
            Login
          </button>
          {message && <p className="error-msg">{message}</p>}
        </form>
        <p className="signup-link">
          <NavLink to="/">Home</NavLink> Don't have an account?{" "}
          <NavLink to="/signup">Sign Up</NavLink>
        </p>
      </div>
    </div>
  );
}
