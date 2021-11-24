/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable quotes */
import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalState: false,
    modalStateTwo: false,
  },
  reducers: {
    setModal: (state, action) => {
      state.modalState = action.payload;
    },
    setModalTwo: (state, action) => {
      state.modalStateTwo = action.payload;
    },
  },
});

export const selectModal = (state) => state.modal.modalState;
export const selectModalTwo = (state) => state.modal.modalStateTwo;

export const { setModal, setModalTwo } = modalSlice.actions;
export default modalSlice.reducer;
