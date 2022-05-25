import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    city: "",
    state: "",
    email: "",
    age: "",
    web: ""
  });
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);
  
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <h1 className="display-4">User Id: </h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">First name: {user.first_name}</li>
        <li className="list-group-item">Last name: {user.last_name}</li>
        <li className="list-group-item">City: {user.city}</li>
        <li className="list-group-item">City: {user.state}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">age: {user.age}</li>
        <li className="list-group-item">website: {user.web}</li>
      </ul>
      <Link className="btn btn-primary" to="/LoginForm">
        Log out
      </Link>
    </div>
  );
};

export default User;
