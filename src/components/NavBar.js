import React from "react";
import { Link } from "react-router-dom";

import "../styles/NavBar.css";

const Navigation = () => {
  return (
    <div className="Nav-wrap">
      <img className="SurrealLogo" src="../surrealLogo.png" alt="Logo" />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/">View Properties</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/add-property">Add a Property</Link>
        </li>
      </ul>
    </div>
  );
};
export default Navigation;
