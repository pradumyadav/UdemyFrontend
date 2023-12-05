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
// {
//   "name": "front",
//   "version": "0.1.0",
//   "private": true,
//   "dependencies": {
//     "@reduxjs/toolkit": "^1.9.7",
//     "@stripe/stripe-js": "^2.2.0",
//     "@testing-library/jest-dom": "^5.17.0",
//     "@testing-library/react": "^13.4.0",
//     "@testing-library/user-event": "^13.5.0",
//     "axios": "^1.6.2",
//     "mdb-react-ui-kit": "^7.0.0",
//     "react": "^18.2.0",
//     "react-dom": "^18.2.0",
//     "react-icons": "^4.12.0",
//     "react-redux": "^8.1.3",
//     "react-router-dom": "^6.20.0",
//     "react-scripts": "5.0.1",
//     "redux": "^4.2.1",
//     "redux-persist": "^6.0.0",
//     "redux-thunk": "^2.4.2",
//     "reduxjs": "file:../../../../toolkit",
//     "web-vitals": "^2.1.4"
//   },
//   "scripts": {
//     "start": "react-scripts start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",
//     "eject": "react-scripts eject"
//   },
//   "eslintConfig": {
//     "extends": [
//       "react-app",
//       "react-app/jest"
//     ]
//   },
//   "browserslist": {
//     "production": [
//       ">0.2%",
//       "not dead",
//       "not op_mini all"
//     ],
//     "development": [
//       "last 1 chrome version",
//       "last 1 firefox version",
//       "last 1 safari version"
//     ]
//   }
// }
