import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useLocation } from "react-router-dom";
import DashboardCard from "../Components/DashboardCard";
import { cardData } from "../utilis";
import { setLocation } from "../Actions";
import { useDispatch } from "react-redux";

export default function Dashboard() {
  let loc = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLocation(loc.pathname));
  }, [dispatch, loc.pathname]);

  return (
    <>
      <Navbar />
      <div className="card-container">
        <div className="heading">Courses you have enrolled...</div>
        {cardData.map((card) => (
          <DashboardCard key={card.id} item={card} />
        ))}
      </div>
    </>
  );
}
