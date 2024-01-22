import React, { useState } from "react";

export default function DashboardCard({ iD, title, text, subtext, check }) {
  const [boxcheck, setBoxCheck] = useState(check);

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
        <h3 className="dcard-title">{title}</h3>
        <p className="dcard-text">{text}</p>
        <p className="dcard-subtext">{subtext}</p>
        <div className="custom-progress">
          <div className="custom-progress-bar" style={{ width: `${iD * 8}%` }}>
            {iD * 8}% {iD * 8 > 20 ? "Completed" : ""}
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
