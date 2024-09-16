import useRouter from "@unitools/router";
import { ProductsList } from "@/components/product-list"
import { ProductFilterButton, ProductFilterSheet } from "@/components/product-list-filter"
import { useState } from "react"
import { ProductType, PRODUCT_SORT_OPTION, PRODUCT_SORT_OPTION_LABELS } from "@/components/product";


export const ProductSortFilter = ({ updateFilter = (d: PRODUCT_SORT_OPTION) => {console.log(d)} }) => {
  
  const [showActionsheet, setShowActionsheet] = useState(false)
  const handleClose = () => setShowActionsheet(false)
  
  const onSortBySelected = ((selectedOption: string) => {
    setShowActionsheet(false)
    updateFilter(selectedOption as unknown as PRODUCT_SORT_OPTION)
  })

  return (
    <>
      <ProductFilterButton title="Sort by..." onPress={() => setShowActionsheet(true)} />
      <ProductFilterSheet
        options={PRODUCT_SORT_OPTION_LABELS}
        onPressItem={onSortBySelected}
        isOpen={showActionsheet}
        onClose={handleClose} 
        />
    </>
  )
}

export const ProductsScreen = (
  { products = []}: 
  { products: ProductType[] }) => {
  const router = useRouter();

  const onPressItem = (product: ProductType) => {
    console.log(`product id ${product.id}`)
    router.push("/product/"+product.id)
  }

  return (
    <ProductsList products={
      products
    } onPressItem={onPressItem} />
  );
};
