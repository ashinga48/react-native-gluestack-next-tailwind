import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    products: [],
};
const productCartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        updateCart(state, action) {
            state.products = [...state.products, action.payload];
        }
    }
});
export const { updateCart } = productCartSlice.actions;
export default productCartSlice.reducer;
