import React, { useState } from "react";
import { Login } from "./Login";
import "./SignupForm.css";

export const SignupForm = () => {
  const [values, setValues] = useState({
    name: ``,
    email: ``,
    phone: ``,
    profession: ``,
    password: ``,
  });

  const [signUp, onSignUp] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    const { name, email, phone, profession, password } = values;

    if (
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !profession.trim() ||
      !password.trim()
    ) {
      alert("please fill all fields");
      return;
    }

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    onSignUp((prev) => !prev);
  };

  return (
    <>
      {!signUp ? (
        <form id="signup-form-container" onSubmit={handleSignUp}>
          <h2>Sign up</h2>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="number"
            value={values.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="profession">Profession</label>
          <select
            id="profession"
            name="profession"
            value={values.profession}
            onChange={handleChange}
            required
          >
            <option value=""> -select- </option>
            <option value={"Employee"}>Employee</option>
            <option value={"Employer"}>Employer</option>
            <option value={"Student"}>Student</option>
          </select>

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      ) : (
        <Login />
      )}
    </>
  );
};
