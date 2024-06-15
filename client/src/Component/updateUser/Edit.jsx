import React, { useEffect, useState } from "react";
import "../addUser/Add.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate(); // To navigate after successful update

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target; // Correctly destructuring name and value from the event target

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getone/${id}`)
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const formSubmitHandler = async(e) => {
    e.preventDefault(); // Prevent default form submission
    await axios
      .put(`http://localhost:8000/api/update/${id}`, user)
      .then((response) => {
        toast.success(response.data.msg, {position:"top-right"})
        navigate("/"); // Navigate back to the home page after successful update
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="addUser">
      <Link to="/">Back</Link>

      <h3>Update User</h3>
      <form className="addUserForm" onSubmit={formSubmitHandler}>
        <div className="inputGroup">
          <label htmlFor="fname">First Name:- </label>
          <input
            type="text"
            name="fname"
            id="fname"
            autoComplete="off"
            placeholder="First Name"
            value={user.fname} // Set value to reflect current state
            onChange={inputChangeHandler}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="lname">Last Name:- </label>
          <input
            type="text"
            name="lname"
            id="lname"
            autoComplete="off"
            placeholder="Last Name"
            value={user.lname} // Set value to reflect current state
            onChange={inputChangeHandler}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Mail:- </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="Email"
            value={user.email} // Set value to reflect current state
            onChange={inputChangeHandler}
          />
        </div>

        <div className="inputGroup">
          <button type="submit">Update User</button>
        </div>
      </form>
    </div>
  );
}
