import React from "react";

import "../styles/NavBar.css";

const Navigation = () => {
  return (
    <div className="Nav-wrap">
      <img
        className="SurrealLogo"
        src="/Users/ninaspray/Desktop/Projects/Surreal Estate/surreal-estate/src/Images/surrealLogo.png"
        alt="Logo"
      />
      <ul className="navbar-links">
        <li className="navbar-links-item">View Properties</li>
        <li className="navbar-links-item">Add a Property</li>
      </ul>
    </div>
  );
};
export default Navigation;
