import { configureStore } from "@reduxjs/toolkit";
import charReducer from "./charSlice";

const store = configureStore({
  reducer: {
    char: charReducer,
  },
});
export default store;
