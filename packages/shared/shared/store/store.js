import { configureStore } from '@reduxjs/toolkit';
import productFilters from './productsFilters';
import productCart from './cart';
import { productsApi } from './productsApiReducer';
import { useDispatch, useSelector } from 'react-redux';
export const store = configureStore({
    reducer: {
        filters: productFilters,
        cart: productCart,
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productsApi.middleware),
});
export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;
