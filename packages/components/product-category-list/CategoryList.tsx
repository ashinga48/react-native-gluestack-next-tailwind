import { HStack } from "../ui/hstack"
import { ScrollView } from "../ui/scroll-view"
import { Button, ButtonText } from "../ui/button"

export const CategoryItem = ({ title = `` }: { title: string }) => {
  return (
    <Button size="lg" variant="solid" className=" bg-secondary-200 rounded-full ml-1 mr-1">
      <ButtonText className="text-md font-normal text-color-black">{title}</ButtonText>
    </Button>
  );
};

export const CategoryList = ({ data = [] }: { data: string[]}) => {
  return (
    <ScrollView horizontal={true} >
    <HStack className="items-center justify-center p-3">
      <CategoryItem title="hey" />
      <CategoryItem title="hey" />
      <CategoryItem title="hey" />
      <CategoryItem title="hey" />
      <CategoryItem title="hey" />
      <CategoryItem title="hey" />
      <CategoryItem title="hey" />
      <CategoryItem title="hey" />
      <CategoryItem title="hey" />
      <CategoryItem title="hey" />
      <CategoryItem title="hey" />
      <CategoryItem title="hey" />
      <CategoryItem title="hey" />
      <CategoryItem title="hey" />
      <CategoryItem title="hey" />
      <CategoryItem title="hey" />
      <CategoryItem title="hey" />
      <CategoryItem title="hey" />
      <CategoryItem title="hey" />
    </HStack>
    </ScrollView>
  );
};
