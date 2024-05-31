import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const myEnum = [
  [
    "Are you a K-pop song? Because you make my heart dance to your beat!",
    "Are you a K-pop idol? Because every time I see you, my heart does a fan chant!",
    "Do you have a bias in K-pop? Because I think you just became mine!",
  ],
  [
    "Are you a movie ticket? Because I'd stand in line just to be with you!",

    "Are we at the movies? Because every moment with you feels like a blockbuster hit!",

    "Are you a director? Because you've just cast me in the leading role of your love story!",
  ],
  [
    "Are you a sports field? Because whenever I'm with you, I feel like I've scored a goal in the game of life!",

    "Are you a coach? Because you've got me motivated to win your heart!",

    "Are you a sports fan? Because you just became the MVP (Most Valuable Person) in my life!",
  ],
];

interface CounterState {
  firstName: string;
  counter: number;
  myEnum: string[];
}

const initialState: CounterState = {
  firstName: "Don't keep them waiting!",
  counter: 0,
  myEnum: [],
};

const breakifySlice = createSlice({
  name: "breakify",
  initialState,
  reducers: {
    setInput(state, action: PayloadAction<{ firstName: string }>) {
      state.myEnum = myEnum[state.counter];
      state.counter = state.counter + 1;
    },
  },
});

export const { setInput } = breakifySlice.actions;
export default breakifySlice.reducer;
