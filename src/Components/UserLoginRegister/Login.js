



import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Style.css"
import { useLoginMutation } from "../../Api/Query";
export default function Login () {
    
    const nav = useNavigate()
    
    const [formdata, setFormdata] = useState(
      {
        email:'', password:''
      }
    )
  
    const [login,{isLoading}] = useLoginMutation()
  
    const handleChange = (event)=>{
      const  {name, value} = event.target
      setFormdata({...formdata , [name]:value})
  }
  
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login({ ...formdata });
      localStorage.setItem("userId", response.data.userid);
      if (response.data) {
        nav('/');
      } else if (response.error && response.error.message === 'Invalid Credentials') {
        console.log('Invalid Credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  }
  return (
    <div className="loginParent">
      <h1 id="heading">Log in</h1>
      <form onSubmit={handleOnSubmit}>
        <label className="word" htmlFor="email">Email: </label>
        <input className="text" type="email" name="email" id="email" onChange={handleChange} value={formdata.email}/>
        <br />
        <br />
        <label className="word" htmlFor="password">  Password: </label>
        <input className="text" type="password" maxLength="8" name="password" id="password"onChange={handleChange}value={formdata.password}/>
        <br />
        <br />
        <button className="btn1" disabled={isLoading}>Submit</button>
      </form>
      <div>OR</div>
      <NavLink to="/Register" className="nextpage">
        please Register First
      </NavLink>
    </div>
  );
}
