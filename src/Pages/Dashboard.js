import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import ListCard from "../Components/ListCard";
import { useLocation } from "react-router-dom";

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
    },
    {
      id: 2,
      title: "Card 2",
      text: "This is the content of Card 2.",
      subtext: "Subtext for Card 2",
    },
    {
      id: 3,
      title: "Card 3",
      text: "This is the content of Card 3.",
      subtext: "Subtext for Card 3",
    },
    {
      id: 4,
      title: "Card 4",
      text: "This is the content of Card 4.",
      subtext: "Subtext for Card 4",
    },
    {
      id: 5,
      title: "Card 5",
      text: "This is the content of Card 5.",
      subtext: "Subtext for Card 5",
    },
    {
      id: 6,
      title: "Card 6",
      text: "This is the content of Card 6.",
      subtext: "Subtext for Card 6",
    },
    {
      id: 7,
      title: "Card 7",
      text: "This is the content of Card 7.",
      subtext: "Subtext for Card 7",
    },
    {
      id: 8,
      title: "Card 8",
      text: "This is the content of Card 8.",
      subtext: "Subtext for Card 8",
    },
    {
      id: 9,
      title: "Card 9",
      text: "This is the content of Card 9.",
      subtext: "Subtext for Card 9",
    },
    {
      id: 10,
      title: "Card 10",
      text: "This is the content of Card 10.",
      subtext: "Subtext for Card 10",
    },
    {
      id: 11,
      title: "Card 11",
      text: "This is the content of Card 11.",
      subtext: "Subtext for Card 11",
    },
    {
      id: 12,
      title: "Card 12",
      text: "This is the content of Card 12.",
      subtext: "Subtext for Card 12",
    },
    // Add more card data as needed
  ];

  return (
    <>
      <Navbar loc={location} />
      <div className="card-container">
        {cardData.map((card) => (
          <ListCard
            key={card.id}
            iD={card.id}
            title={card.title}
            text={card.text}
            subtext={card.subtext}
          />
        ))}
      </div>
    </>
  );
}
