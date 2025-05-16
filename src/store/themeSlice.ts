import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "light",
  },
  reducers: {
    toggleTheme(state, action: PayloadAction<"light" | "dark">) {
      state.theme = action.payload;
    },
  },
});

export default themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;
