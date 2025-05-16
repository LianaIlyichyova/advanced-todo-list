import { combineReducers, configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice";
import themeSlice from "./themeSlice";
import filtersSlice from "./filtersSlice";

const RootReducer = combineReducers({
  count: countSlice,
  theme: themeSlice,
  filters: filtersSlice,
});

export const store = configureStore({
  reducer: RootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
