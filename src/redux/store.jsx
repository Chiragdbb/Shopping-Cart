import { configureStore } from "@reduxjs/toolkit";
import  CartSliceReducer  from "./slices/CartSlice";

export const store = configureStore({
	reducer: {
		cart: CartSliceReducer,
	},
});
