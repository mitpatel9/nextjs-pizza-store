import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducer/cartslice"


export default configureStore({
    reducer:{
        cart: cartReducer,
    }
})