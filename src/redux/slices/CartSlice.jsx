import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
	name: "cart",
	initialState: {
		cartItems: [],
	},
	reducers: {
		add: (state, action) => {
			state.cartItems = [...state.cartItems, action.payload];
		},
		remove: (state, action) => {
			let filteredItems = state.cartItems.filter(
				(item) => item.id !== action.payload
			);
			state.cartItems = filteredItems;
		},
	},
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
