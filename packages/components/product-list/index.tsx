import { ProductCard, ProductType } from "../product";
import { Grid, GridItem } from "../ui/grid"
import { ScrollView } from "../ui/scroll-view"
import { Box } from "../ui/box"


export const ProductsList = ({
    products = []
}: {
    products: ProductType[];
}) => {
  return (
    <ScrollView>
      <Box className="mb-12">
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
          >
            <ProductCard data={eachProduct} />
          </GridItem>
        ))}
      </Grid>
      </Box>
    </ScrollView>
  );
};
