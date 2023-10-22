import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import authReducer from "../../redux/slice/Authslice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});