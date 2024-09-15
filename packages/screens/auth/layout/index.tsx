import { HStack, VStack, SafeAreaView, ScrollView, Image } from "@/components/gluestack-base"

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