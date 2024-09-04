import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import modalSlice from "./slices/modalSlice";
import filterSlice from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    auth: userSlice,
    modal: modalSlice,
    filter: filterSlice,
  },
  devTools: import.meta.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
