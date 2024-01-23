const initialState = [];

const modifylistData = (payload) => {
  return payload;
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_LIST":
      return [...modifylistData(action.payload)];
    default:
      return state;
  }
};

export default listReducer;
