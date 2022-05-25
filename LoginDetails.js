import React from "react";
//import axios from "axios";
import { Link } from "react-router-dom";


const LoginDetails = ({loggedInUser}) => {
  
  console.log("page", loggedInUser);


  return (
    <div className="container py-4">
      <h1 className="display-4">Details of user </h1>
      <hr />
      <Link className="btn btn-primary my-3" to="/Login">
        Log out
      </Link>
      {/* {loggedInUser.map((logged) => ( */}
        <ul className="list-group w-50">
          <li className="list-group-item">First name: {loggedInUser}</li>
          <li className="list-group-item">Last name: {loggedInUser}</li>
          <li className="list-group-item">City: {loggedInUser}</li>
          <li className="list-group-item">City: {loggedInUser}</li>
          <li className="list-group-item">email: {loggedInUser}</li>
          <li className="list-group-item">age: {loggedInUser}</li>
          <li className="list-group-item">website: {loggedInUser}</li>
        </ul>
        {/* ))}; */}
    </div>
  );
};

export default LoginDetails;
