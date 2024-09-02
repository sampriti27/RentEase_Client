import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateProps {
  authModal: boolean;
}

const initialState: InitialStateProps = {
  authModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    // Simplified to accept a boolean directly
    setOpenAuthModal: (state, action: PayloadAction<boolean>) => {
      state.authModal = action.payload;
    },
    // Close action remains the same
    closeAuthModal: (state) => {
      state.authModal = false;
    },
  },
});

export const { setOpenAuthModal, closeAuthModal } = modalSlice.actions;
export default modalSlice.reducer;
