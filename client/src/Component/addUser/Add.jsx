import React, { useState } from "react";
import "./Add.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
export default function Add() {
  
   const [hide,setHide]=useState(false);
   const userInital={
    fname:"",
    lname:"",
    email:"",
    password:"",
   } 

   const [user,setUser]=useState(userInital);
  const navigate=useNavigate()
   const inputHandler=(e)=>{
      const {name,value}=e.target;
      setUser({...user,[name]:value})
   }

   const submitForm= async(e)=>{
    setHide(true)
    e.preventDefault();
    await axios.post("http://localhost:8000/api/create",user)
    .then((response)=>{
      toast.success(response.data.msg,{position:"top-right"})
      setHide(false);
      navigate("/");
    }).catch(error=>console.log(error))

   }

    return (
    <div className="addUser">
      <Link to={"/"}>Back</Link>

      <h3>Add New User</h3>

      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="fname">First Name:- </label>
          <input
            type="text"
            name="fname"
            id="fname"
            autoComplete="off"
            placeholder="First Name"
           onChange={inputHandler}
        />
        </div>
        <div className="inputGroup">
          <label htmlFor="fname">Last Name:- </label>
          <input
            type="text"
            name="lname"
            id="lname"
            autoComplete="off"
            placeholder="Last Name"
            onChange={inputHandler}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="fname">Mail:- </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="Email"
            onChange={inputHandler}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="fname">Password:- </label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            placeholder="Password"
            onChange={inputHandler}
          />
        </div>
        <div className="inputGroup">
          <button type="submit" disabled={hide}>Add User</button>
        </div>
      </form>
    </div>
  );
}
