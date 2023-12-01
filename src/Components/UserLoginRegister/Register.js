import React, { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import "./Style.css";
import { useRegisterMutation } from "../../Api/Query";

export default function Register() {
  const nav = useNavigate();

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [register, { isLoading }] = useRegisterMutation();

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await register({ ...formdata });
      nav("/");
    } catch (error) {
      console.log("SignUp Error", error.message);
    }
  };
  return (
    <>
      <div className="loginParent">
        <h1>Register</h1>
        <br />
        <br />

        <form onSubmit={handleSignup}>
          <label className="word" htmlFor="name">
            Name
          </label>
          <input
            className="text"
            type="text"
            name="name"
            id="name"
            onChange={handleOnchange}
            value={formdata.name}
            required
          />
          <br />
          <br />
          <label className="word" htmlFor="email">
            Email
          </label>
          <input
            className="text"
            type="email"
            name="email"
            id="email"
            onChange={handleOnchange}
            value={formdata.email}
            required
          />
          <br />
          <br />
          <label className="word" id="font" htmlFor="Password">
            {" "}
            Set Password
          </label>
          <input
            className="text"
            type="password"
            maxLength="8"
            name="password"
            id="Password"
            onChange={handleOnchange}
            value={formdata.password}
            required
          ></input>
          <br />
          <br />

          <button className="btn1" disabled={isLoading}>
            {" "}
            Submit
          </button>
        </form>
        <div className="or1">OR</div>
        <NavLink to="/login">Go To Login Page</NavLink>
      </div>
    </>
  );
}
