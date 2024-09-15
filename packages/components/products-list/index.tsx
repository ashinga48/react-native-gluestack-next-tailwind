import { Button, ButtonText, HStack, VStack, Icon } from "@gluestack-ui/themed"
import { Product } from "../product";

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}

export const ProductsList = ({
    products = []
}: {
    products: IProduct[];
}) => {
  return (
    products.map(eachProduct => <Product title={`item ${eachProduct.title}`} />)
  );
};

