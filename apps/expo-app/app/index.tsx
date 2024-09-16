import { SafeAreaView } from "@/components/gluestack-base";

import { ProductSortFilter, ProductsScreen } from "@/screens/products"
import { SpinnerStyled, SpinningText } from "@/components/spinner"
import { Provider } from 'react-redux';
import { store, useAppDispatch, useAppSelector } from '@/shared/store/store'
import { useGetProductsQuery, useGetProductCategoriesQuery } from '@/shared/store/productsApiReducer'
import { PRODUCT_SORT_OPTION, ProductType } from "@/components/product";
import { CategoryList } from "@/components/product-category-list";
import { setCategoryFilter, setSortByFilter } from "@/shared/store/productsFilters";
import { useEffect, useState } from "react";

const sortProducts = (products: ProductType[], sortBy: PRODUCT_SORT_OPTION): ProductType[] => {
  console.log(products)
  console.log(typeof products)
  console.log([...products].length)
  const sorted = [...products]
  sorted.sort((a, b) => {
    switch (sortBy) {
      case PRODUCT_SORT_OPTION.biggest_discount:
        return (b.discount || 0) - (a.discount || 0);
      case PRODUCT_SORT_OPTION.lowest_price:
        return (a.price || 0) - (b.price || 0);
      case PRODUCT_SORT_OPTION.highest_price:
        return b.price - a.price;
      default:
        return 0;
    }
  });
  console.log(typeof sorted)
  console.log(sorted.length)
  return sorted
};

const useProducts = (orderBy: PRODUCT_SORT_OPTION) => {
  const { filterCategory } = useAppSelector(state => state.filters);
  const [products, setProducts] = useState<ProductType[]>([]);
  const { data, error, isFetching } = useGetProductsQuery(filterCategory);

  useEffect(() => {
    if (data) {
      const sortedProducts = sortProducts(data as unknown as ProductType[], orderBy);
      // console.log((sortProducts as unknown as any[] || []).map(each => console.log(each.price)))
      setProducts(sortedProducts);
    }
  }, [data, orderBy]);

  return { products, error, isFetching };
};

const ProductsWithApi = () => {
  
  const dispatch = useAppDispatch();
  const { filterCategory, orderBy } = useAppSelector(state => state.filters);
  const { data: categories } = useGetProductCategoriesQuery();
  const categories_updated = [ 'All', ...(categories as unknown as string[] || [])] as string[];

  const updateCategory = (chosenCategory: string) => dispatch(setCategoryFilter(chosenCategory))
  const updateFilter = (chosenFilter: PRODUCT_SORT_OPTION) => dispatch(setSortByFilter(chosenFilter))

  const { products, error, isFetching } = useProducts(orderBy);

  if (error) {
    return <SpinningText label={`Error while loading data`} />;
  }

  if (!products) {
    return <SpinningText label={`No Data`} />;
  }

  return (
    <>
      <CategoryList data={categories_updated as never[]} selectedCategory={filterCategory} onCategorySelected={updateCategory} />
      {isFetching && <SpinnerStyled />}
      
      <ProductSortFilter updateFilter={updateFilter} />
      <ProductsScreen 
        products={products as unknown as ProductType[]} 
      />
    </>
  );
};

export default function ProductsWithProvider() {
  return (
    <SafeAreaView >
      <Provider store={store}>
        <ProductsWithApi />
      </Provider>
    </SafeAreaView>
  );
};
