import { SafeAreaView } from "@/components/gluestack-base";

import { useLocalSearchParams } from 'expo-router';
import { SpinnerStyled, SpinningText } from "@/components/spinner"

import { useGetProductByIdQuery } from '@/shared/store/productsApiReducer'
import { ProductCard, ProductCardHorizontal, ProductType } from "@/components/product";
import { ProductDescriptionScreen } from "@/screens/product-description";
import { useAppDispatch } from "@/shared/store/store";
import { updateCart } from "@/shared/store/cart";

const ProductsWithApi = () => {

  const dispatch = useAppDispatch();
  const { pid } = useLocalSearchParams<{ pid: string }>();

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

export default function ProductsWithProvider() {
  return (
    <SafeAreaView >
      <ProductsWithApi />
    </SafeAreaView>
  );
};
