import { Route, Routes } from "react-router-dom";
import "./App.css";
import CourseList from "./Pages/CourseList";
import Dashboard from "./Pages/Dashboard";
import CourseDetails from "./Pages/CourseDetails";
import { useDispatch } from "react-redux";
import { updateCourse, updateList } from "./Actions/index";
import { getDatabase, ref, get } from "firebase/database";
import { app } from "./firebase";

function App() {
  const dispatch = useDispatch();
  const courseRef = ref(getDatabase(app), "courses");
  get(courseRef).then((snapshot) => {
    dispatch(updateCourse(makeArray(snapshot)));
    dispatch(updateList(makeArray(snapshot)));
  });
  let list = [];
  const makeArray = (snapshot) => {
    snapshot.forEach((element) => {
      list = [...list, element.val()];
    });
    return list;
  };

  return (
    <Routes>
      <Route path="/" element={<CourseList />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/course/:id" element={<CourseDetails />} />
    </Routes>
  );
}

export default App;
