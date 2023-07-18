import { createSlice } from "@reduxjs/toolkit";


export const orderSlice = createSlice({
    name  : "order",
    initialState : {
        order : [],
    },
    reducers :{
        setOrderData  : (state,action) => {
            const data = action.payload;
            state.order.unshift(data);
        },
    }
})

export const {setOrderData} = orderSlice.actions;
export default orderSlice.reducer;