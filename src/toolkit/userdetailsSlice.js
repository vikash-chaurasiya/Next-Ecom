import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name : 'profile',
    initialState : {
        profile : null,
        pan : null
    },
    reducers : {
        setProfile : (state,action) =>{
            state.profile = action.payload;
        },
        setPan : (state,action) =>{
            state.pan = action.payload;
        }
    }
})


export const {setProfile,setPan} = profileSlice.actions;
export default profileSlice.reducer;
