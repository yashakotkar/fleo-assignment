import { configureStore } from "@reduxjs/toolkit";
import repoDataReducer from './../features/repoDataSlice';

export const store = configureStore({
  reducer: repoDataReducer,
});
