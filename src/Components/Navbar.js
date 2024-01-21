import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="dashboard" className="nav-link">
            Dashboard
          </Link>
        </li>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-button">Search</button>
      </div>
    </nav>
  );
}
