import React, { useState } from "react";
import { Homepage } from "./Homepage";
import "./Login.css";

export const Login = () => {
  const [loginValues, setLoginValues] = useState({
    loginEmail: ``,
    loginPassword: ``,
  });

  const [loginValid, setLoginValid] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");

    if (
      storedEmail === loginValues.loginEmail &&
      storedPassword === loginValues.loginPassword
    ) {
      setLoginValid(true);
    } else {
      alert(`invalid login credentials`);
      setLoginValid(false);
    }

    console.log(storedEmail, storedPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginValues({
      ...loginValues,
      [name]: value,
    });
  };

  return (
    <>
      {loginValid ? (
        <Homepage />
      ) : (
        <div className="login">
          <h2>Login</h2>
          <form onSubmit={handleLogin} id="login-form-container">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="loginEmail"
              type="email"
              value={loginValues.loginEmail}
              onChange={handleChange}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="loginPassword"
              type="password"
              value={loginValues.loginPassword}
              onChange={handleChange}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </>
  );
};
