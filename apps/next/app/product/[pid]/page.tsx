'use client'
import { SpinnerStyled, SpinningText } from "@/components/spinner"

import { useGetProductByIdQuery } from '@/shared/store/productsApiReducer'
import { ProductCard, ProductCardHorizontal, ProductType } from "@/components/product";
import { ProductDescriptionScreen } from "@/screens/product-description";
import { useAppDispatch } from "@/shared/store/store";
import { updateCart } from "@/shared/store/cart";

export default function ProductsWithProvider({ params }: { params: { pid: string } }) {

  const dispatch = useAppDispatch();
  const { pid } = params || { pid: '' };

  const { data: product, error, isFetching } = useGetProductByIdQuery(pid as any);
  const onAddToCartPressed = (pid: string) => dispatch(updateCart(pid))

  if (isFetching) {
    return <SpinnerStyled />;
  }

  if (error) {
    return <SpinningText label={`Error while loading data`} />;
  }

  if (!product) {
    return <SpinningText label={`No Data`} />;
  }

  return (
    <>
      <ProductCard data={product as unknown as ProductType} />
      <ProductDescriptionScreen onAddToCartPressed={onAddToCartPressed} pid={pid} />
    </>
  );
};
