import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    priority: [],
    category: [],
  },
  reducers: {
    setPriority(state, action) {
      state.priority = action.payload satisfies string[];
    },
    setCategory(state, action) {
      state.category = action.payload satisfies string[];
    },
  },
});

export default filterSlice.reducer;
export const { setCategory, setPriority } = filterSlice.actions;
