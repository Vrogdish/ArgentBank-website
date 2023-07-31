import { ActionCreatorWithPayload, createSlice } from "@reduxjs/toolkit";

interface ProfilAction {
  type: string;
  payload: {
    createdAt: string;
    email: string;
    firstName: string;
    id: string;
    lastName: string;
    updateAt: string;
    userName: string;
  };
}

export const profilSlice = createSlice({
  name: "profil",
  initialState: {
    createdAt: "",
    email: "",
    firstName: "",
    id: "",
    lastName: "",
    updateAt: "",
    userName: "",
  },
  reducers: {
    loadProfilState: (state, action: ProfilAction) => {
      state.createdAt = action.payload.createdAt;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.id = action.payload.id;
      state.lastName = action.payload.lastName;
      state.updateAt = action.payload.updateAt;
      state.userName = action.payload.userName;
    },
    resetProfilState: (state) => { 
      state.createdAt = "";
      state.email = "";
      state.firstName = "";
      state.id = "";
      state.lastName = "";
      state.updateAt = "";
      state.userName = "";
    },
  },
});

export const { loadProfilState } = profilSlice.actions;
export const { resetProfilState} = profilSlice.actions
