// categoryReducer for categoryContext

const categoryReducer = (state, action) => {
  switch (action.type) {
    case "GET_CATEGORIES":
      return action.payload;
    case "ADD_CATEGORY":
      return [...state, action.payload];
    case "DELETE_CATEGORY":
      return state.filter((category) => category._id !== action.payload);
    case "UPDATE_CATEGORY":
      return state.map((category) =>
        category._id === action.payload._id ? action.payload : category
      );
    default:
      return state;
  }
};

export default categoryReducer;
