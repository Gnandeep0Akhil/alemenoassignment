import React from "react";
import { useNavigate } from "react-router-dom";

export default function ListCard({ iD, title, text, subtext }) {
  const navigate = useNavigate();
  const clickHandler = (id) => {
    navigate(`/course/${id}`);
  };
  return (
    <div
      className="card"
      onClick={() => {
        clickHandler(iD);
      }}
    >
      <img
        src="https://placekitten.com/200/150"
        className="card-image"
        alt="CardI"
      />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
        <p className="card-subtext">{subtext}</p>
      </div>
    </div>
  );
}
