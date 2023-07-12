import { createSlice } from "@reduxjs/toolkit";

export const watchlistSlice  = createSlice({
    name : "watchlistId",
    initialState : {
        watchlistId : [],
    },

    reducers : {
        setWatchlist : (state,action) =>{
            const id = action.payload;
            state.watchlistId.push(id);
        },
        removeWishlistId : (state,action) => {
            const id = action.payload;
            const index = state.watchlistId.indexOf(id);
            state.watchlistId.splice(index,1);
        }
    }

})

export const {setWatchlist,removeWishlistId} = watchlistSlice.actions;
export default watchlistSlice.reducer;