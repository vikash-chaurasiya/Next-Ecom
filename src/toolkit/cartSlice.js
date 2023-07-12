import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name : "cartProduct",
    initialState : {
        cartProduct : [],
    },

    reducers : {
        setCartProduct : (state,action) => {
            const data = action.payload;
            state.cartProduct.push(data);
        },
        removeCardProductId : (state,action) => {
            const id = action.payload;
            const index = state.cartProduct.indexOf(id);
            state.cartProduct.splice(index,1);
        }
    }
})


export const {setCartProduct,removeCardProductId} = cartSlice.actions;
export default cartSlice.reducer;