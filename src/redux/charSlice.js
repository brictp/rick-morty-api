import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  character: [],
  count: 1,
};

const charSlice = createSlice({
  name: "char",
  initialState,
  reducers: {
    axChart: (state, action) => {
      state.data = action.payload.info;
      state.character = action.payload.results;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { axChart, setCount } = charSlice.actions;
export default charSlice.reducer;
