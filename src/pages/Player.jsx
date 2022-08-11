import React from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Player() {
  const { moviename } = useParams();
  return (
    <>
      <h1 style={{ color: "white" }}>Player {moviename}</h1>
      <NavLink to="/">Go Home</NavLink>
    </>
  );
}
