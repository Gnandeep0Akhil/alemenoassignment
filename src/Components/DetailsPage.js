import {
  faBook,
  faCalendar,
  faClock,
  faListUl,
  faMapMarker,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import myImage from "../Images/bootstrap.png";

export default function DetailsPage() {
  const select = useSelector((state) => state.select);

  return (
    <div className="course-details">
      <img src={myImage} className="decard-image" alt="CardI" />
      <h1 style={{ margin: "30px 5px" }}>{select.name}</h1>
      <p className="info">
        <FontAwesomeIcon icon={faUser} /> <strong>Instructor:</strong>{" "}
        {select.instructor}
      </p>
      <p className="info">
        <FontAwesomeIcon icon={faBook} /> <strong>Description:</strong>{" "}
        {select.description}
      </p>
      <p className="info">
        <FontAwesomeIcon icon={faListUl} /> <strong>Enrollment Status:</strong>{" "}
        {select.enrollmentStatus}
      </p>
      <p className="info">
        <FontAwesomeIcon icon={faClock} /> <strong>Duration:</strong>{" "}
        {select.duration}
      </p>
      <p className="info">
        <FontAwesomeIcon icon={faCalendar} /> <strong>Schedule:</strong>{" "}
        {select.schedule}
      </p>
      <p className="info">
        <FontAwesomeIcon icon={faMapMarker} /> <strong>Location:</strong>{" "}
        {select.location}
      </p>
      <p className="info">
        <strong>Pre-requisites:</strong>
        {select.prerequisites.map((prerequisite, index) => (
          <span key={index} className="custom-chip">
            {prerequisite}
          </span>
        ))}
      </p>
      <details className="info">
        <summary className="syllabus-heading">
          <strong>Syllabus:</strong>
        </summary>
        <p className="syllabus-content">{select.syllabus}</p>
      </details>
    </div>
  );
}
