import { ButtonText, Button } from "@/components/ui/button"

export const ProductDescriptionScreen = ({
    pid = ``,
    onAddToCartPressed = (pid: string) => console.log(pid)
}) => {
    return (
    <Button size="lg" className="m-8 bg-success-700 text-color-white" onPress={() => onAddToCartPressed(`${pid}`)}>
        <ButtonText className="text-md ml-2">Add to Cart</ButtonText>
    </Button>
    )
}