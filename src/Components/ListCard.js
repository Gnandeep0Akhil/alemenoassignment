import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectCourse } from "../Actions/index";
import myImage1 from "../Images/react.png";
import myImage2 from "../Images/redux.jpeg";
import myImage3 from "../Images/bootstrap.png";

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
      {item.name === "React Web Development" && (
        <img src={myImage1} className="card-image" alt="CardI" />
      )}
      {item.name === "Redux with Reactjs" && (
        <img src={myImage2} className="card-image" alt="CardI" />
      )}
      {item.name === "Bootstrap in React applications" && (
        <img src={myImage3} className="card-image" alt="CardI" />
      )}
      <div className="card-content">
        <h3 className="card-title">{item.name}</h3>
        <p className="card-text">{item.description}</p>
        <p className="card-subtext">{item.subtext}</p>
      </div>
    </div>
  );
}
