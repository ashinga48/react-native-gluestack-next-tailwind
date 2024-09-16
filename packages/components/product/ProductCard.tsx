// import { Button, ButtonText, HStack, VStack, Icon, Heading } from "@gluestack-ui/themed"
import { Card } from "../ui/card"
import { Image } from "../ui/image"
import { Heading } from "../ui/heading"
import { Link, LinkText } from "../ui/link"
import { HStack } from "../ui/hstack"
import { ProductType } from "./index.types"
import { Button, ButtonText } from "../ui/button"
import { Text } from "../ui/text"
import { Box } from "../ui/box"
import { VStack } from "../ui/vstack"

export const ProductCard = ({ data }: { data: ProductType}) => {
  return (
      <Card className="rounded-lg text-center">
        <Image
          source={{
            uri: data?.image,
          }}
          alt=""
          resizeMode="contain"
          className="mb-2 h-[120px] w-full rounded-md"
        />
        <Text bold={true} isTruncated={true} numberOfLines={1} className="text-sm text-center text-typography-900 mb-1 mt-1">
          {data?.title}
        </Text>
        <HStack className="items-center justify-center">
          <Text strikeThrough={true} className="text-sm mb-2 mt-0 strikeThrough">
            {`$${data?.price}`}
          </Text>
          <Text bold={true} className="text-sm text-typography-700 mb-2 mt-0 ml-2 text-success-500">
            {`$${data?.discountedPrice}`}
          </Text>
        </HStack>
        

        <Box className="flex flex-row justify-center">
          <Button size="xs" variant="solid" action="negative" className=" rounded-full">
            <ButtonText className="p-0 m-0">{data?.discountPercentage}% OFF</ButtonText>
          </Button>
        </Box>
        <LinkText
          size="xs"
          className="font-semibold text-info-700 no-underline mt-2 text-center"
        >
          You save {`$${data?.savingAmount}`}
        </LinkText>
      </Card>
  );
};



export const ProductCardHorizontal = ({ data, quantity = `1` }: { data: ProductType, quantity: string}) => {
  return (
      <Card className="rounded-lg">
        <HStack>
        <Image
          source={{
            uri: data?.image,
          }}
          alt=""
          resizeMode="contain"
          className="mb-2 h-[80px] w-[80px] rounded-md"
        />
        <VStack>
          <Text bold={true} isTruncated={true} numberOfLines={1} className="text-sm text-center text-typography-900 mb-1 mt-1">
            {data?.title}
          </Text>
          <HStack className="">
            <Text strikeThrough={true} className="text-sm mb-2 mt-0 strikeThrough">
              {`$${data?.price}`}
            </Text>
            <Text bold={true} className="text-sm text-typography-700 mb-2 mt-0 ml-2 text-success-500">
              {`$${data?.discountedPrice}`}
            </Text>
          </HStack>
          <Text bold={true} numberOfLines={1} className="text-lg text-typography-900 ml-0">
            Quantity: {quantity}
          </Text>
        </VStack>
        </HStack>
        
      
      </Card>
  );
};


