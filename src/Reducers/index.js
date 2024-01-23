import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import selectReducer from "./selectReducer";
import listReducer from "./listReducer";
const initialLocation = null;

const locationReducer = (state = initialLocation, action) => {
  switch (action.type) {
    case "SET_LOCATION":
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  courses: courseReducer,
  select: selectReducer,
  location: locationReducer,
  list: listReducer,
});

export default rootReducer;
