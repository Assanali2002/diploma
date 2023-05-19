import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUser: false,
};

const authCheck = createSlice({
  name: "authCheck",
  initialState,
  reducers: {
    openUser: (state) => {
      state.isUser = true;
    },
    closeUser: (state) => {
      state.isUser = false;
    },
  },
});

export const { openUser, closeUser } = authCheck.actions;

export default authCheck.reducer;
