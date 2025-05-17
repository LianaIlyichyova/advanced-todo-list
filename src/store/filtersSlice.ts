import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  priority: string[];
  category: string[];
}

const initialState: FiltersState = {
  priority: [],
  category: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setPriority(state, action: PayloadAction<string[]>) {
      state.priority = action.payload;
    },
    setCategory(state, action: PayloadAction<string[]>) {
      state.category = action.payload;
    },
    resetFilters() {
      return initialState;
    },
  },
});

export default filterSlice.reducer;
export const { setCategory, setPriority, resetFilters } = filterSlice.actions;
