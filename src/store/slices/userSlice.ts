import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";

export interface IntialStateProps {
  isUserActivated: boolean;
  userData: User | null;
  role: string;
}

const initialState: IntialStateProps = {
  isUserActivated: false,
  userData: null,
  role: "",
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IntialStateProps>) => {
      const { isUserActivated, userData, role } = action.payload;
      state.isUserActivated = isUserActivated;
      state.userData = userData;
      state.role = role;
    },
    clearAuth: (state) => {
      state.isUserActivated = false;
      state.userData = null;
      state.role = "";
    },
  },
});

export const { setAuthData, clearAuth } = userSlice.actions;
export default userSlice.reducer;
