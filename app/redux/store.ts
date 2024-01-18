import { configureStore } from "@reduxjs/toolkit";
import breakifySlice from "./breakify-slice";

export const store = configureStore({
  reducer: {
    counter: breakifySlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
