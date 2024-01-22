import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { useLocation } from "react-router-dom";
import DashboardCard from "../Components/DashboardCard";

export default function Dashboard() {
  let loc = useLocation();
  const [location, setLocation] = useState();

  useEffect(() => {
    setLocation(loc.pathname);
  }, [loc.pathname]);

  const cardData = [
    {
      id: 1,
      title: "Card 1",
      text: "This is the content of Card 1.",
      subtext: "Subtext for Card 1",
      isChecked: true,
    },
    {
      id: 2,
      title: "Card 2",
      text: "This is the content of Card 2.",
      subtext: "Subtext for Card 2",
      isChecked: false,
    },
    {
      id: 3,
      title: "Card 3",
      text: "This is the content of Card 3.",
      subtext: "Subtext for Card 3",
      isChecked: true,
    },
    {
      id: 4,
      title: "Card 4",
      text: "This is the content of Card 4.",
      subtext: "Subtext for Card 4",
      isChecked: false,
    },
    {
      id: 5,
      title: "Card 5",
      text: "This is the content of Card 5.",
      subtext: "Subtext for Card 5",
      isChecked: true,
    },
    {
      id: 6,
      title: "Card 6",
      text: "This is the content of Card 6.",
      subtext: "Subtext for Card 6",
      isChecked: false,
    },
    {
      id: 7,
      title: "Card 7",
      text: "This is the content of Card 7.",
      subtext: "Subtext for Card 7",
      isChecked: false,
    },
    {
      id: 8,
      title: "Card 8",
      text: "This is the content of Card 8.",
      subtext: "Subtext for Card 8",
      isChecked: false,
    },
    {
      id: 9,
      title: "Card 9",
      text: "This is the content of Card 9.",
      subtext: "Subtext for Card 9",
      isChecked: false,
    },
    {
      id: 10,
      title: "Card 10",
      text: "This is the content of Card 10.",
      subtext: "Subtext for Card 10",
      isChecked: false,
    },
    {
      id: 11,
      title: "Card 11",
      text: "This is the content of Card 11.",
      subtext: "Subtext for Card 11",
      isChecked: false,
    },
    {
      id: 12,
      title: "Card 12",
      text: "This is the content of Card 12.",
      subtext: "Subtext for Card 12",
      isChecked: false,
    },
    // Add more card data as needed
  ];

  return (
    <>
      <Navbar loc={location} />
      <div className="card-container">
        <div className="heading">Courses you have enrolled...</div>
        {cardData.map((card) => (
          <DashboardCard
            key={card.id}
            iD={card.id}
            title={card.title}
            text={card.text}
            subtext={card.subtext}
            check={card.isChecked}
          />
        ))}
      </div>
    </>
  );
}
