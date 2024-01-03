import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  timeTravelInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTimeTravelInformation: (state, action) => {
      state.timeTravelInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTimeTravelInformation } =
  navSlice.actions;

// Selectors

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTimeTravelInformation = (state) =>
  state.nav.timeTravelInformation;

export default navSlice.reducer;
