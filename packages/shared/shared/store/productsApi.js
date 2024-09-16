import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit';
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    return (await response.json()).data;
});
const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: false
    },
    reducers: {
        setproducts(state, action) {
            state.products = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchProducts.pending, state => {
            state.loading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchProducts.rejected, state => {
            state.loading = false;
        });
    }
});
export const { setproducts } = productsSlice.actions;
export default productsSlice.reducer;
