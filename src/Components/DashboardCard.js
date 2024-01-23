import React, { useState } from "react";
import myImage1 from "../Images/react.png";
import myImage2 from "../Images/redux.jpeg";
import myImage3 from "../Images/bootstrap.png";

export default function DashboardCard({ item }) {
  const [boxcheck, setBoxCheck] = useState(item.isChecked);
  const handleCheckboxChange = () => {
    setBoxCheck(!boxcheck);
  };

  return (
    <div className="dcard">
      {item.name === "React Web Development" && (
        <img src={myImage1} alt="CardI" style={{ width: "400px" }} />
      )}
      {item.name === "Redux with Reactjs" && (
        <img src={myImage2} alt="CardI" style={{ width: "400px" }} />
      )}
      {item.name === "Bootstrap in React applications" && (
        <img src={myImage3} alt="CardI" style={{ width: "400px" }} />
      )}
      <div className="dcard-content">
        <h3 className="dcard-title">{item.name}</h3>
        <p className="dcard-text">{item.description}</p>
        <p className="dcard-subtext">{item.subtext}</p>
        <div className="custom-progress">
          <div
            className="custom-progress-bar"
            style={{ width: `${item.progress * 100}%` }}
          >
            {item.progress * 100}% {item.progress * 100 > 20 ? "Completed" : ""}
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
