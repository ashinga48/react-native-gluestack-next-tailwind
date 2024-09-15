import { Button, ButtonText, HStack, VStack, Icon, Heading } from "@gluestack-ui/themed"
// import { Button, ButtonText } from "@gluestack-ui/button"
import { Card } from "gluestack-ui"

export const Product = ({
    title = ``
}: {
    title: string;
}) => {
  return (
    <Card size="md" variant="elevated" className="m-3">
      <Heading size="md" className="mb-1">
        Quick Start
      </Heading>
      <Text size="sm">Start building your next project in minutes</Text>
      <Button size="sm" variant="solid" >
        <ButtonText>{title}</ButtonText>
      </Button>
    </Card>
  );
};

