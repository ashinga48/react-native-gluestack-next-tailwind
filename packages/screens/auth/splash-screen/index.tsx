// import { Button, ButtonText, VStack, Icon } from "@/components/gluestack-base"

import { Button, ButtonText } from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";
// import { Heading } from "@/components/ui/heading";

import useRouter from "@unitools/router";
import { AuthLayout } from "../layout";

const SplashScreenWithLeftBackground = () => {
  const router = useRouter();
  return (
    <VStack>
      <VStack>
        <Button
          onPress={() => {
            router.push("/auth/signin");
          }}
        >
          <ButtonText >Log in</ButtonText>
        </Button>
        <Button
          onPress={() => {
            router.push("/auth/signup");
          }}
        >
          <ButtonText >Sign Up</ButtonText>
        </Button>
      </VStack>
    </VStack>
  );
};

export const SplashScreen = () => {
  return (
    <AuthLayout>
      <SplashScreenWithLeftBackground />
    </AuthLayout>
  );
};
