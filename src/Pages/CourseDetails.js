import React from "react";
import { useParams } from "react-router-dom";

export default function CourseDetails() {
  let { id } = useParams();
  return <div>CourseDetails, {id}</div>;
}
