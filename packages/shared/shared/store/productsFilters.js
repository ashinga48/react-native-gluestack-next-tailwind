import { PRODUCT_SORT_OPTION } from '@/components/product/index.types';
import { createSlice } from "@reduxjs/toolkit";
const productFilterSlice = createSlice({
    name: "products",
    initialState: {
        filterCategory: 'All',
        orderBy: PRODUCT_SORT_OPTION.biggest_discount
    },
    reducers: {
        setCategoryFilter(state, action) {
            state.filterCategory = action.payload;
        },
        setSortByFilter(state, action) {
            state.orderBy = action.payload;
        }
    }
});
export const { setCategoryFilter, setSortByFilter } = productFilterSlice.actions;
export default productFilterSlice.reducer;
