import { createSlice } from "@reduxjs/toolkit";
import { fetchAllUsers, fetchMoreUsers, fetchOneUser } from "./operations";
const initialState = {
  data: [],
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllUsers.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [fetchMoreUsers.fulfilled]: (state, action) => {
      state.data = [...state.data, ...action.payload];
    },
    [fetchOneUser.fulfilled]: (state, action) => {
      state.data.splice(action.payload.id - 1, 1, action.payload);
    },
  },
});
