import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateList } from "../Actions";

export default function Navbar() {
  const [text, setText] = useState("");
  const location = useSelector((state) => state.location);
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  const handleClick = () => {
    const newData = courses.filter((item) => {
      if (item.name.toLowerCase().includes(text.toLowerCase())) {
        return item;
      }
      if (item.instructor.toLowerCase().includes(text.toLowerCase())) {
        return item;
      }
    });
    dispatch(updateList(newData));
  };

  const clickHandler = () => {
    dispatch(updateList(courses));
    setText("");
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={clickHandler}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
        </li>
      </ul>
      {location === "/" && (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="search-button" onClick={handleClick}>
            Search
          </button>
        </div>
      )}
    </nav>
  );
}
