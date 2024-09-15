import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateProps {
  authModal: boolean;
  redirect: string;
}

const initialState: InitialStateProps = {
  authModal: false,
  redirect: ""
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    // Simplified to accept a boolean directly
    setOpenAuthModal: (state, action: PayloadAction<InitialStateProps>) => {
      state.authModal = action.payload.authModal;
      state.redirect = action.payload.redirect
    },
    // Close action remains the same
    closeAuthModal: (state) => {
      state.authModal = false;
    },
  },
});

export const { setOpenAuthModal, closeAuthModal } = modalSlice.actions;
export default modalSlice.reducer;
