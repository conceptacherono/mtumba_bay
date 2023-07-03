import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../../api/auth";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const userData = { email, password };
      const response = await loginUser(userData);
      console.log("Login successful!", response);
      // Add any success handling logic here, such as redirecting to another page
    } catch (error) {
      console.error("Login failed!", error);
      // Add error handling logic here, such as displaying an error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Login</button>

      <p>
        Dont have an account? <Link to={"/register"}>Register</Link>
      </p>
    </form>
  );
};

export default Login;
