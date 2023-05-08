import { configureStore } from "@reduxjs/toolkit";
import { cardsSlice } from "./cardsSlice";
import { pageSlice } from "./pageSlice";
import { filterSlice } from "./filterSlice";

export const store = configureStore({
  reducer: {
    users: cardsSlice.reducer,
    page: pageSlice.reducer,
    filter: filterSlice.reducer,
  },
});
