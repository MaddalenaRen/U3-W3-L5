import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import songReducer from "../reducers/songReducer";
import userReducer from "../reducers/userReducer";

const rootReducer = combineReducers({
  songs: songReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
