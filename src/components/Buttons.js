import React from "react";
import { NavLink } from "react-router-dom";

export default function Buttons(props) {
  return (
    <div className="scroll-bottom">
      {props.left && (
        <NavLink to={props.left} className="left hover">
          <span>&#10092;</span> //chevron gauche
        </NavLink>
      )}
      {props.right && (
        <NavLink to={props.right} className="right hover">
          <span>&#10093;</span> // chevron droite
        </NavLink>
      )}
    </div>
  );
}
