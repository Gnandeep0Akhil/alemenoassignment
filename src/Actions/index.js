export const updateCourse = (courseData) => {
  return {
    type: "UPDATE_COURSE",
    payload: courseData,
  };
};

export const selectCourse = (courseData) => {
  return {
    type: "SELECT_COURSE",
    payload: courseData,
  };
};

export const setLocation = (location) => {
  return {
    type: "SET_LOCATION",
    payload: location,
  };
};
