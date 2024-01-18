import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  firstName: string;
  secondName: string;
}

const initialState: CounterState = {
  firstName: "Breaking",
  secondName: "Bad",
};

const breakifySlice = createSlice({
  name: "breakify",
  initialState,
  reducers: {
    setInput(
      state,
      action: PayloadAction<{ firstName: string; lastName: string }>
    ) {
      state.firstName = action.payload.firstName;
      state.secondName = action.payload.lastName;
    },
  },
});

export const { setInput } = breakifySlice.actions;
export default breakifySlice.reducer;
