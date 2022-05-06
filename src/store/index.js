import { configureStore } from "@reduxjs/toolkit";
import currentUserSlice from "./currentUserSlice";

const store = configureStore({
  reducer: {
    currentUserSlice,
  },
});

export default store;
