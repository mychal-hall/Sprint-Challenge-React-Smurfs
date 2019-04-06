import React from "react";
import { Link } from "react-router-dom";
import "./components.css";

const Navigation = () => {
  return (
    <div>
      <div className="navbar">
        <h1 className="navhead">Smurf Village</h1>
        <div className="navlinks">
          <Link className="link" to="/">Village</Link>
          <Link className="link" to="/smurf-form">Add a Smurf</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
