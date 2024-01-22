import React, { useState } from "react";

export default function DashboardCard({ item }) {
  const [boxcheck, setBoxCheck] = useState(item.isChecked);

  const handleCheckboxChange = () => {
    setBoxCheck(!boxcheck);
  };

  return (
    <div className="dcard">
      <img
        src="https://placekitten.com/200/150"
        className="dcard-image"
        alt="dCardI"
      />
      <div className="dcard-content">
        <h3 className="dcard-title">{item.name}</h3>
        <p className="dcard-text">{item.description}</p>
        <p className="dcard-subtext">{item.subtext}</p>
        <div className="custom-progress">
          <div
            className="custom-progress-bar"
            style={{ width: `${item.id * 8}%` }}
          >
            {item.id * 8}% {item.id * 8 > 20 ? "Completed" : ""}
          </div>
        </div>
        <div
          className={`custom-checkbox ${boxcheck ? "checked" : ""}`}
          onClick={handleCheckboxChange}
        >
          <input type="checkbox" checked={boxcheck} onChange={() => {}} />
          <label htmlFor="customCheckbox"></label>
          <span>Completed the course?</span>
        </div>
      </div>
    </div>
  );
}
