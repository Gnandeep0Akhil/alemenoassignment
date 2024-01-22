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

export default function DetailsPage({ identity }) {
  const SampleCourse = {
    name: "Sample Course",
    instructor: "John Doe",
    description: "This is a sample course description.",
    enrollmentStatus: "Open",
    duration: "8 weeks",
    schedule: "Mon & Wed, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: [
      "Basic Knowledge of Programming",
      "Intro to Web Development",
      "Intro to Web Development",
      "Intro to Web Development",
      "Intro to Web Development",
      "Intro to Web Development",
      "Basic Knowledge of Programming",
    ],
    syllabus: "Course syllabus goes here...",
  };

  return (
    <div className="course-details">
      <img
        src="https://placekitten.com/200/150"
        className="decard-image"
        alt="CardI"
      />
      <h1 style={{ margin: "30px 5px" }}>
        {SampleCourse.name + " " + identity}
      </h1>
      <p className="info">
        <FontAwesomeIcon icon={faUser} /> <strong>Instructor:</strong>{" "}
        {SampleCourse.instructor}
      </p>
      <p className="info">
        <FontAwesomeIcon icon={faBook} /> <strong>Description:</strong>{" "}
        {SampleCourse.description}
      </p>
      <p className="info">
        <FontAwesomeIcon icon={faListUl} /> <strong>Enrollment Status:</strong>{" "}
        {SampleCourse.enrollmentStatus}
      </p>
      <p className="info">
        <FontAwesomeIcon icon={faClock} /> <strong>Duration:</strong>{" "}
        {SampleCourse.duration}
      </p>
      <p className="info">
        <FontAwesomeIcon icon={faCalendar} /> <strong>Schedule:</strong>{" "}
        {SampleCourse.schedule}
      </p>
      <p className="info">
        <FontAwesomeIcon icon={faMapMarker} /> <strong>Location:</strong>{" "}
        {SampleCourse.location}
      </p>
      <p className="info">
        <strong>Pre-requisites:</strong>
        {SampleCourse.prerequisites.map((prerequisite, index) => (
          <span key={index} className="custom-chip">
            {prerequisite}
          </span>
        ))}
      </p>
      <details className="info">
        <summary className="syllabus-heading">
          <strong>Syllabus:</strong>
        </summary>
        <p className="syllabus-content">{SampleCourse.syllabus}</p>
      </details>
    </div>
  );
}
