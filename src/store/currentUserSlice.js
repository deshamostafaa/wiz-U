import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: { currentUser: {} },
  reducers: {
    currentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    follow: (state, { payload }) => {
      state.currentUser.followings = [...state.currentUser.followings, payload];
    },
    unfollow: (state, { payload }) => {
      state.currentUser.followings = state.currentUser.followings.filter(
        (f) => f !== payload
      );
    },
  },
});

export const userAction = currentUserSlice.actions;

export default currentUserSlice.reducer;
