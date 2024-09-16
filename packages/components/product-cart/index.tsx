import { ButtonText, Button, ButtonIcon } from "../ui/button"
import { ShoppingCartIcon } from "lucide-react-native"
import useRouter from "@unitools/router";

export const CartButton = ({ count = `3` }) => {
  
  const router = useRouter();

    return (
      <Button size="md" className="rounded-full bg-secondary-200" onPress={() => {
        router.push("/cart")
      }}>
        <ButtonIcon as={ShoppingCartIcon}  />
        <ButtonText className="text-md ml-2 text-color-black">{count}</ButtonText>
      </Button>
    )
  
  }
  