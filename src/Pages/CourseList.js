import React from "react";
import Navbar from "../Components/Navbar";
import ListCard from "../Components/ListCard";

export default function CourseList() {
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
    // Add more card data as needed
  ];

  return (
    <>
      <Navbar />
      <div className="card-container">
        {cardData.map((card) => (
          <ListCard
            key={card.id}
            title={card.title}
            text={card.text}
            subtext={card.subtext}
          />
        ))}
      </div>
    </>
  );
}
