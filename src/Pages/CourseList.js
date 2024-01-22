import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import ListCard from "../Components/ListCard";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateCourse, setLocation } from "../Actions/index";
import { cardData } from "../utilis";

export default function CourseList() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);
  let loc = useLocation();

  useEffect(() => {
    dispatch(setLocation(loc.pathname));
    dispatch(updateCourse(cardData));
  }, [dispatch, loc.pathname]);

  return (
    <>
      <Navbar />
      <div className="card-container">
        {courses?.map((card) => (
          <ListCard key={card.id} item={card} />
        ))}
      </div>
    </>
  );
}
