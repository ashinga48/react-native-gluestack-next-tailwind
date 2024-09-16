import { configureStore } from '@reduxjs/toolkit';
import productFilters from './productsFilters';
import productCart from './cart';
import { productsApi } from './productsApiReducer';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

export const store = configureStore({
  reducer: {
    filters: productFilters,
    cart: productCart,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;