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

export const ProductCard = ({ data }: { data: ProductType}) => {
  return (
      <Card className="rounded-lg text-center">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1529693662653-9d480530a697?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          alt=""
          className="mb-2 h-[120px] w-full rounded-md"
        />
        <Text bold={true} isTruncated={true} numberOfLines={1} className="text-sm text-typography-900 mb-1 mt-1">
          The Power of Positive Thinking asdf {data?.title}
        </Text>
        <HStack className="items-center justify-center">
          <Text strikeThrough={true} className="text-xs mb-2 mt-0 strikeThrough">
            $22.39
          </Text>
          <Text bold={true} className="text-sm text-typography-700 mb-2 mt-0 ml-2 text-success-500">
            $22.39
          </Text>
        </HStack>
        

        <Box className="flex flex-row justify-center">
          <Button size="xs" variant="solid" action="negative" className=" rounded-full">
            <ButtonText className="p-0 m-0">15% OFF</ButtonText>
          </Button>
        </Box>
        <Link href="https://gluestack.io/" isExternal>
          <LinkText
            size="xs"
            className="font-semibold text-info-700 no-underline mt-2 text-center"
          >
            You save $8.25
          </LinkText>
        </Link>
      </Card>
  );
};

{/* <Card className="p-5 rounded-lg max-w-[360px] m-3">
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1529693662653-9d480530a697?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        className="mb-6 h-[240px] w-full rounded-md"
      />
      <Text className="text-sm font-normal mb-2 text-typography-700">
        May 15, 2023
      </Text>
      <Heading size="md" className="mb-4">
        The Power of Positive Thinking
      </Heading>
      <Link href="https://gluestack.io/" isExternal>
        <HStack className="items-center">
          <LinkText
            size="sm"
            className="font-semibold text-info-600 no-underline"
          >
            Read Blog
          </LinkText>
          <Icon
            as={ArrowRightIcon}
            size="sm"
            className="text-info-600 mt-0.5 ml-0.5"
          />
        </HStack>
      </Link>
    </Card> */}