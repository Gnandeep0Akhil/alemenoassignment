import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectCourse } from "../Actions/index";

export default function ListCard({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clickHandler = (id) => {
    navigate(`/course/${id}`);
    dispatch(selectCourse(item));
  };
  return (
    <div
      className="card"
      onClick={() => {
        clickHandler(item.id);
      }}
    >
      <img
        src="https://placekitten.com/200/150"
        className="card-image"
        alt="CardI"
      />
      <div className="card-content">
        <h3 className="card-title">{item.name}</h3>
        <p className="card-text">{item.description}</p>
        <p className="card-subtext">{item.subtext}</p>
      </div>
    </div>
  );
}
