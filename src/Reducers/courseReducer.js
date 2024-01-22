const initialState = [];

const modifycourseData = (payload) => {
  return payload;
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_COURSE":
      return [...modifycourseData(action.payload)];
    default:
      return state;
  }
};

export default courseReducer;
