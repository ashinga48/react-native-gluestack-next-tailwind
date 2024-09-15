import { VStack } from "@/components/gluestack-base"
import { ProductsList } from "@/components/products-list"

import useRouter from "@unitools/router";

export const ProductsScreen = () => {
  return (
    <VStack>
        <ProductsList products={(new Array(5).fill({
          title: 'item '
        }))} />
    </VStack>
  );
};
