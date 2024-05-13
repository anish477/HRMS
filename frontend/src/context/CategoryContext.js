// create a category context

import { createContext, useReducer } from "react";

export const CategoryContext = createContext();

export const categoryReducer = (state, action) => {
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

export const CategoryContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(categoryReducer, []);

  return (
    <CategoryContext.Provider value={{ state, dispatch }}>
      {children}
    </CategoryContext.Provider>
  );
};
