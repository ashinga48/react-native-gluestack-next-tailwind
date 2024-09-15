import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { ScrollView } from "@/components/ui/scroll-view";
import { Image } from "@/components/ui/image";


type AuthLayoutProps = {
  children: React.ReactNode;
};

export const AuthLayout = (props: AuthLayoutProps) => {
  return (
    <SafeAreaView >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <HStack >
          <VStack
          >
            <Image
              source={require("@/assets/auth/radialGradient.png")}
              alt="Radial Gradient"           />
            <Image
              source={require("@/assets/auth/logo.png")}
              alt="Gluestack Logo"          />
          </VStack>
          <VStack >
            {props.children}
          </VStack>
        </HStack>
      </ScrollView>
    </SafeAreaView>
  );
};