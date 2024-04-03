import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  firstName: string;
}

const initialState: CounterState = {
  firstName: "Don't keep them waiting!",
};

const breakifySlice = createSlice({
  name: "breakify",
  initialState,
  reducers: {
    setInput(state, action: PayloadAction<{ firstName: string }>) {
      state.firstName = action.payload.firstName;
    },
  },
});

export const { setInput } = breakifySlice.actions;
export default breakifySlice.reducer;
