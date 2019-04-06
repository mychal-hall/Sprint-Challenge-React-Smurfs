import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="">
        <h1>Smurf Village</h1>
        <div>
          <Link to="/">Village</Link>
        </div>
        <div>
          <Link to="/smurf-form">Add a Smurf</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;