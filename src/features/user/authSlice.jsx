import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : 'auth',
    initialState : {
        isAuthenticated: !!localStorage.getItem('isAuthenticated') || false,
        accountType : localStorage.getItem('accountType') || null,
        expirationTime : parseFloat(localStorage.getItem('expirationTime')) || null
    },
    reducers : {
        getAuthentication : (state, action) => {
            state.isAuthenticated = true,
            state.accountType = action.payload;
            localStorage.setItem('isAuthenticated', state.isAuthenticated)
            localStorage.setItem('accountType', state.accountType)

            // state.expirationTime =  Date.now() +  600000; // for 3 days in milliseconds
            state.expirationTime =  Date.now() + 3 * 24 * 60 * 60 * 1000; // for 3 days in milliseconds
            localStorage.setItem('expirationTime', state.expirationTime );
        },
        removeAuthentication : (state, action) => {
            state.isAuthenticated = false,
            state.accountType = null
            state.expirationTime = null

            localStorage.setItem('isAuthenticated', state.isAuthenticated)
            localStorage.setItem('accountType', state.accountType)
            localStorage.setItem('expirationTime', state.expirationTime );
        },

    }
})


export const { getAuthentication, removeAuthentication } = authSlice.actions;
export default authSlice.reducer;