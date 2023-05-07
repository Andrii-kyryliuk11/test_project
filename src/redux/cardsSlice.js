import { createSlice } from "@reduxjs/toolkit";
import { fetchOneUser, fetchUsers } from "./operations";
const initialState = {
  data: [],
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    filteredValue(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
      state.data = [...state.data, ...action.payload];
    },
    [fetchOneUser.fulfilled]: (state, action) => {
      state.data.splice(action.payload.id - 1, 1, action.payload);
    },
  },
});

export const { filteredValue } = cardsSlice.actions;
