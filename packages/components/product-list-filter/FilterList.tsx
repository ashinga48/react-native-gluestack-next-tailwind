import { Text } from "../ui/text"
import { Button, ButtonText } from "../ui/button"
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetIcon,
} from "../ui/actionsheet"

export const ProductFilterButton = ({ title = `Sort by...`, onPress = () => {} }) => {
  return (
    <Button size="lg" variant="solid" className=" bg-info-600  ml-4 mr-4 mb-2" onPress={onPress}>
      <ButtonText className="text-md font-normal text-white  ml-4 mr-4">{title}</ButtonText>
    </Button>
  );
};

export const ProductFilterSheet = ({ options = [], isOpen = false, onClose = () => {}, onPressItem = () => {} }) => {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
    <ActionsheetBackdrop />
    <ActionsheetContent>
      <ActionsheetItem onPress={onPressItem}>
        <ActionsheetItemText>
        Sample 1
        </ActionsheetItemText>
      </ActionsheetItem>
    </ActionsheetContent>
  </Actionsheet>
  );
};
