import { createSlice } from "@reduxjs/toolkit";

interface authAction {
  type: string;
  payload: boolean;
}

interface TokenAction {
  type: string;
  payload: string;
}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogged: false,
    token: "",
  },
  reducers: {
    authState: (state, action: authAction) => {
      state.isLogged = action.payload;
    },
    tokenState: (state, action: TokenAction) => {
      state.token = action.payload;
    },
  },
});

export const { authState } = authSlice.actions;
export const { tokenState } = authSlice.actions;
