import React from "react";
import { NavLink } from "react-router-dom";

export default function Buttons(props) {
  return (
    <div className="button-left-right">
      {props.left && (
        <NavLink to={props.left} className="left hover">
          <span>&#10092;</span>
        </NavLink>
      )}
      {props.right && (
        <NavLink to={props.right} className="right hover">
          <span>&#10093;</span>
        </NavLink>
      )}
    </div>
  );
}
