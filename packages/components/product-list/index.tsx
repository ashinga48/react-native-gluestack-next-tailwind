import { ProductCard, ProductType } from "../product";
import { Grid, GridItem } from "../ui/grid"
import { ScrollView } from "../ui/scroll-view"
import { Pressable } from "../ui/pressable"
import { Box } from "../ui/box"


export const ProductsList = ({
    products = [],
    onPressItem = () => {}
}: {
    products: ProductType[];
    onPressItem: (d: ProductType) => void
}) => {
  return (
    <ScrollView>
      <Box className="mb-[300px]">
      <Grid
        className="gap-0"
        _extra={{
          className: "grid-cols-6",
        }}
      >
        {products.map((eachProduct) => (
          <GridItem
            className="p-2 rounded-rmd text-center"
            _extra={{
              className: "col-span-3",
            }}
            key={`eachProduct-${eachProduct.id}`}
          >
            <Pressable onPress={() => onPressItem(eachProduct)}>
              <ProductCard data={eachProduct} />
            </Pressable>
          </GridItem>
        ))}
      </Grid>
      </Box>
    </ScrollView>
  );
};
