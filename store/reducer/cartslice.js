const { createSlice } = require("@reduxjs/toolkit");

const cartSlice= createSlice({
    name:"cart",
    initialState:{
        product:[],
        quantity:0,
        total:0,
    },

    reducers:{
        addProduct:(state,action)=>{
           state.product.push(action.payload);
           state.quantity +=1;
           state.total += action.payload.price * action.payload.quantity;
        },
        reset:(state,action)=>{
           return state=action.payload;
        }
    }
})


export const{ addProduct,reset} =cartSlice.actions;
export default cartSlice.reducer;