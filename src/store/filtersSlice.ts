import { createSlice } from "@reduxjs/toolkit";
import { type CategoryType, type PriorityType } from "@shared-types/filters";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    priority: "",
    category: "",
  },
  reducers: {
    setPriority(state, action) {
      state.priority = action.payload satisfies PriorityType;
    },
    setCategory(state, action) {
      state.category = action.payload satisfies CategoryType;
    },
  },
});

export default filterSlice.reducer;
export const { setCategory, setPriority } = filterSlice.actions;
