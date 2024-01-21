import { Route, Routes } from "react-router-dom";
import "./App.css";
import CourseList from "./Pages/CourseList";
import Dashboard from "./Pages/Dashboard";
import CourseDetails from "./Pages/CourseDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CourseList />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/course/:id" element={<CourseDetails />} />
    </Routes>
  );
}

export default App;
