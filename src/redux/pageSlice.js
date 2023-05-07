import { createSlice } from "@reduxjs/toolkit";

const initialState = 2;

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    increasePage(state, action) {
      return (state = state + 1);
    },
  },
});

export const { increasePage } = pageSlice.actions;
