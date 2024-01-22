const initialState = {};

const modifyselectData = (payload) => {
  return payload;
};

const selectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_COURSE":
      return modifyselectData(action.payload);
    default:
      return state;
  }
};

export default selectReducer;
