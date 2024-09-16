import { PRODUCT_SORT_OPTION } from '@/components/product/index.types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
  products: [],
} as {
  products: string[]
}

const productCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart(state, action: PayloadAction<string>) {
      state.products = [...state.products, action.payload]
    }
  }
})

export const { updateCart } = productCartSlice.actions
export default productCartSlice.reducer