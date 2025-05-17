import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Theme, type ThemeType } from "@styles/constants";

interface ThemeState {
  theme: ThemeType;
}

const getInitialTheme = (): ThemeType => {
  const stored = localStorage.getItem("theme");
  if (stored === Theme.Dark || stored === Theme.Light) {
    return stored;
  }
  return Theme.Light;
};

const initialState: ThemeState = {
  theme: getInitialTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state, action: PayloadAction<ThemeType>) {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload); // сохраняем в localStorage
    },
  },
});

export default themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;
