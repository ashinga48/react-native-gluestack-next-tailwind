import { ProductType } from './../../components/product/index.types';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const generateRandomDiscount = () => {
  return Math.random() * 0.5; // Random number between 0 and 0.5
};

const transformProduct = (product: any) => {
  const discount = generateRandomDiscount();
  const discountedPrice = product.price * (1 - discount);
  const savingAmount = product.price * discount;
  return {
    ...product,
    discountedPrice: discountedPrice.toFixed(2),
    discountPercentage: (discount * 100).toFixed(1),
    savingAmount: savingAmount.toFixed(2)
  } as ProductType
};

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: builder => ({
    getProducts: builder.query<{ data: ProductType[] }, string>({
      query: (category = `All`) => category !== 'All' ? `products/category/${category}`: `products`,
      transformResponse: (response: any) => {
        return response.map(transformProduct);
      },
    }),
    getProductCategories: builder.query<{ data: string[] }, void>({
      query: () => 'products/categories',
      transformResponse: (response: any) => {
        return response.reverse();
      },
    }),
    getProductById: builder.query<{ data: ProductType }, string>({
      query: (pid) => `products/${pid}`,
      transformResponse: (response: any) => {
        return transformProduct(response) as any;
      },
    }),
  }),
});

export const { useGetProductsQuery, useGetProductCategoriesQuery, useGetProductByIdQuery } = productsApi;
