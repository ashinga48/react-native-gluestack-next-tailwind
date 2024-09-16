import { SafeAreaView } from "@/components/gluestack-base";

import { SpinnerStyled, SpinningText } from "@/components/spinner"

import { useAppSelector } from '@/shared/store/store'
import { useGetProductsQuery } from '@/shared/store/productsApiReducer'
import { CartButton } from "@/components/product-cart";
import { ProductCardHorizontal } from "@/components/product";
import { ProductType } from "@/components/product";

const getUniqueItemsWithCounts = (array: any[]) => {
  const countOccurrences = array.reduce((acc, value) => {
    acc.set(value, (acc.get(value) || 0) + 1);
    return acc;
  }, new Map());

  return Array.from(countOccurrences.entries());
}


export const CartButtonWithData = () => {
  const { products } = useAppSelector(state => state.cart);
  return <CartButton count={`${products?.length}`} />
}

const CartWithApi = () => {
  const { data: allProducts, error, isFetching } = useGetProductsQuery(`All`);
  const { products: productsFromCart } = useAppSelector(state => state.cart);

  const productsFromCartUnique = getUniqueItemsWithCounts(productsFromCart);

  if (isFetching) {
    return <SpinnerStyled />;
  }

  return productsFromCartUnique.map((eachItem: any, eachIndx: number) => {
    const findProduct = (allProducts as any).find((each: ProductType) => each.id == eachItem[0])
    return (
      <ProductCardHorizontal data={findProduct as ProductType} quantity={eachItem[1]} />
    )
  })
};

export default function CartWithProvider() {
  return (
    <SafeAreaView >
      <CartWithApi />
    </SafeAreaView>
  );
};
