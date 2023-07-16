import { createSlice } from "@reduxjs/toolkit";

export const notifySlice = createSlice({
    name  : "notification",
    initialState : {
        notification : [],
    },

    reducers  : {
        setNotification  : (state,action) => {
            const data = action.payload;
            if(state.notification.length >= 4){
                state.notification.shift();
            }
            state.notification.push(data);
        },
        clearNotification : (state) => {
            state.notification = [];
        }
    }
})


export const {setNotification,clearNotification} = notifySlice.actions;
export default notifySlice.reducer;