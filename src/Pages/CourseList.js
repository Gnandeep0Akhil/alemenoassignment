import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import ListCard from "../Components/ListCard";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../Actions/index";

export default function CourseList() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.list);
  let loc = useLocation();

  useEffect(() => {
    dispatch(setLocation(loc.pathname));
  }, [dispatch, loc.pathname]);

  return (
    <>
      <Navbar />
      <div className="card-container">
        {courses?.map((card, key) => (
          <ListCard key={key} item={card} />
        ))}
      </div>
    </>
  );
}
