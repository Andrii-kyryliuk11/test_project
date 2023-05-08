import { createSlice } from "@reduxjs/toolkit";

const initialState = 1;

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    increasePage(state) {
      return (state += 1);
    },
    resetPage(state) {
      return (state = 1);
    },
  },
});

export const { increasePage, resetPage } = pageSlice.actions;
