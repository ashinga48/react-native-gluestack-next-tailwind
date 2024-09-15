import { VStack } from "@/components/gluestack-base"
import { ProductsList } from "@/components/product-list"
import { ProductFilterButton, ProductFilterSheet } from "@/components/product-list-filter"
import { CategoryList } from "@/components/product-category-list"
import { useState } from "react"

const CATEGORY_LIST = [
  'All',
  "Men's Clothing",
  "Jewelery"
]

export const ProductsScreen = () => {
  const [showActionsheet, setShowActionsheet] = useState(false)
  const handleClose = () => setShowActionsheet(false)

  return (
    <VStack>
      <CategoryList data={[
        ...CATEGORY_LIST,
        ...CATEGORY_LIST,
        ...CATEGORY_LIST,
        ...CATEGORY_LIST,
      ]} />
      <ProductFilterButton title="Sort by..." onPress={() => setShowActionsheet(true)} />
      <ProductFilterSheet options={[]} isOpen={showActionsheet} onClose={handleClose} />
      <ProductsList products={
        [
          ...CATEGORY_LIST,
          ...(new Array(19).fill({
          title: 'item '
          }))
        ]
      } />
    </VStack>
  );
};
