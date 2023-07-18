import { priceWithoutOffer } from "@/utils/commonFunc";
import { createSlice } from "@reduxjs/toolkit";

export const cart2Slice = createSlice({
    name : "cart",
    initialState : {
        cartData : [],
        totalPrice : 1,
        totalDiscount : 0,
    },
    reducers : {
        setCartData : (state,action) => {
            const data = action.payload;
            state.cartData.push(data);
        },
        removeCartItem : (state,action) =>{
            const id = action.payload;
            state.cartData = state.cartData.filter((item)=> item.id !== id);
        },
        updateTotalPrice : (state) => {
            let price = 0;
            state.cartData.forEach((item)=>{
                price = price + (item.price * item.qty);
            });
            state.totalPrice = price;
        },
        updateDiscount : (state) => {
            let discount = 0;
            state.cartData.forEach((item)=> {
                let  discountPercent = item.discount;
                let pwo = priceWithoutOffer(item.price,discountPercent);
                discount = discount + ((pwo - item.price) * item.qty);
            })
            state.totalDiscount = Math.ceil(discount);
        },
        updateProductQty : (state,action) => {
            const {id,quantity} = action.payload;
            const product = state.cartData.find((item)=>item.id === id);
            if(product){
                product.qty = quantity;

            }
        },
        clearCartItems : (state) => {
            state.cartData = [];
        }

    }
})

export const {setCartData,removeCartItem,updateDiscount,updateTotalPrice,updateProductQty,clearCartItems} = cart2Slice.actions;
export default cart2Slice.reducer;