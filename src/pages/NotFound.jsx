import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      {/* <h1 className="d-flex justify-content-center align-items-center">
        Page Not Found❌
      </h1> */}
      <h1 className="notFoundHeading">
        Page Not Found❌
      </h1>
      <button className='notFoundBtn'><NavLink to='/' className='text-decoration-none'>Back To Home</NavLink></button>
    </div>
  );
}
