import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../App.css";

const StyledNav = styled.div`
  background-color: #3b98e4;
  display: flex;
  justify-content: space-evenly;
  width: 500px;
  border: 1px solid white;
`;

const StyledP = styled.p`
  color: white;
`;

function NavBar() {
  return (
    <StyledNav>
      <NavLink to="/" className="NavLink">
        <StyledP>List of Smurfs</StyledP>
      </NavLink>

      <NavLink to="/smurf-form" className="NavLink">
        <StyledP>Add a Smurf</StyledP>
      </NavLink>
    </StyledNav>
  );
}

export default NavBar;
