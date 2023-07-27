import { createSlice } from "@reduxjs/toolkit";

interface authAction  {
    type : string,
    payload : boolean
}

export const authSlice = createSlice({
    name : "auth",
    initialState : {isLogged : false},
    reducers : {
        authState : (state,action : authAction) => {
             state.isLogged = action.payload
        }
    }
})

export const {authState}=authSlice.actions
