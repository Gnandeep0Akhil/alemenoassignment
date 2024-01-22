import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import DetailsPage from "../Components/DetailsPage";
import { setLocation } from "../Actions";
import { useDispatch } from "react-redux";

export default function CourseDetails() {
  let loc = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLocation(loc.pathname));
  }, [dispatch, loc.pathname]);

  return (
    <>
      <Navbar />
      <DetailsPage />
    </>
  );
}
