import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function CourseDetails() {
  let { id } = useParams();
  let loc = useLocation();
  const [location, setLocation] = useState();

  useEffect(() => {
    setLocation(loc.pathname);
  }, [loc.pathname]);

  return (
    <>
      <Navbar loc={location} />
      <div className="card-container">CourseDetails, {id}</div>
    </>
  );
}
