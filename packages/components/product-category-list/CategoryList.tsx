import { HStack } from "../ui/hstack"
import { ScrollView } from "../ui/scroll-view"
import { Button, ButtonText } from "../ui/button"

export const CategoryList = ({ data = [], selectedCategory = ``, onCategorySelected = (d: string) => {console.log(d)} }) => {

  return (
    <ScrollView horizontal={true} >
    <HStack className="items-center justify-center p-3">
      {data.map((eachCategory: string) => {
        const highlightClass = selectedCategory === eachCategory ? `bg-info-400 ` : `bg-primary-0 text-color-black`;
        return (
          <Button size="lg" variant="solid" className={" rounded-full ml-1 mr-1 "+highlightClass} onPress={() => onCategorySelected(eachCategory)}>
            <ButtonText className="text-md font-normal capitalize">{eachCategory}</ButtonText>
          </Button>
        )
      })}
    </HStack>
    </ScrollView>
  );
};
