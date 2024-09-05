import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";

export interface IntialStateProps {
  isAuth: boolean;
  isUserActivated: boolean;
  userData: User | null;
  role: string | null;
}

const initialState: IntialStateProps = {
  isAuth: false,
  isUserActivated: false,
  userData: null,
  role: null,
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IntialStateProps>) => {
      const { isUserActivated, userData, role } = action.payload;
      state.isAuth = true;
      state.isUserActivated = isUserActivated;
      state.userData = userData;
      state.role = role;
    },
    clearAuth: (state) => {
      state.isAuth = false
      state.isUserActivated = false;
      state.userData = null;
      state.role = "";
    },
  },
});

export const { setAuthData, clearAuth } = userSlice.actions;
export default userSlice.reducer;
