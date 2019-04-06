import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink to="/">
        <p>List of Smurfs</p>
      </NavLink>

      <NavLink to="/smurf-form">
        <p>Add a Smurf</p>
      </NavLink>
    </div>
  );
}

export default NavBar;
