import { configureStore } from "@reduxjs/toolkit";
import { cardsSlice } from "./cardsSlice";
import { pageSlice } from "./pageSlice";

export const store = configureStore({
  reducer: {
    users: cardsSlice.reducer,
    page: pageSlice.reducer,
  },
});
