import React from "react";

export default function ListCard({ id, title, text, subtext }) {
  return (
    <div className="card">
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
