import { Button, ButtonText, SafeAreaView, VStack } from "@/components/gluestack-base";
import { router } from "expo-router";

export default function TabTwoScreen() {
  return (
    <SafeAreaView >
      <VStack >
        <Button
          onPress={() => {
            // router.push("auth/splash-screen");
          }}
        >
          <ButtonText>SplashScreen</ButtonText>
        </Button>
        <Button
          onPress={() => {
            // router.push("auth/signup");
          }}
        >
          <ButtonText>Sign up</ButtonText>
        </Button>
        <Button
          onPress={() => {
            // router.push("auth/forgot-password");
          }}
        >
          <ButtonText>Forgot password</ButtonText>
        </Button>
        <Button
          onPress={() => {
            // router.push("auth/create-password");
          }}
        >
          <ButtonText>Create password</ButtonText>
        </Button>
        <Button
          onPress={() => {
            // router.push("news-feed/news-and-feed");
          }}
        >
          <ButtonText>News feed</ButtonText>
        </Button>
        <Button
          onPress={() => {
            // router.push("dashboard/dashboard-layout");
          }}
        >
          <ButtonText>Dashboard</ButtonText>
        </Button>
        <Button
          onPress={() => {
            // router.push("profile/profile");
          }}
        >
          <ButtonText>Profile</ButtonText>
        </Button>
      </VStack>
    </SafeAreaView>
  );
};
