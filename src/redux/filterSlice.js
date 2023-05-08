import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    showAllUsers(state) {
      return (state = null);
    },
    showFollowedUsers(state) {
      return (state = true);
    },
    showUnfollowedUsers(state) {
      return (state = false);
    },
  },
});
export const { showAllUsers, showFollowedUsers, showUnfollowedUsers } =
  filterSlice.actions;
