import { Button, ButtonText, HStack, VStack, Icon, Heading } from "@gluestack-ui/themed"
// import { Button, ButtonText } from "@gluestack-ui/button"
// import { Card } from "gluestack-ui"

export const Product = ({
    title = ``
}: {
    title: string;
}) => {
  return (
    <Button size="sm" variant="solid" >
      <ButtonText>{title}</ButtonText>
    </Button>
  );
};

