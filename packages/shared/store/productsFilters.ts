import { PRODUCT_SORT_OPTION } from '@/components/product/index.types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const productFilterSlice = createSlice({
  name: "products",
  initialState: {
    filterCategory: 'All',
    orderBy: PRODUCT_SORT_OPTION.biggest_discount
  },
  reducers: {
    setCategoryFilter(state, action: PayloadAction<string>) {
      state.filterCategory = action.payload
    },
    setSortByFilter(state, action: PayloadAction<PRODUCT_SORT_OPTION>) {
      state.orderBy = action.payload
    }
  }
})

export const { setCategoryFilter, setSortByFilter } = productFilterSlice.actions
export default productFilterSlice.reducer