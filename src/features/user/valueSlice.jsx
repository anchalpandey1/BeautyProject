import { createSlice } from "@reduxjs/toolkit";


const valueSlice = createSlice({
    name : 'value',
    initialState : {
        ShowSideMenuBar : false,
        selectedArtistServicesCategory: '',
    },

    reducers: {
        toggleSideMenuBar : (state, action) =>{
            state.ShowSideMenuBar = action.payload;
        },
        selecteArtistServiceCategory : (state, action) =>{
            state.selectedArtistServicesCategory = action.payload;
        }
        
    }
})

export default valueSlice.reducer;
export const { toggleSideMenuBar , selecteArtistServiceCategory } = valueSlice.actions;