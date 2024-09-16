// import "@/global.css";
// import { GluestackConfig, GluestackUIProvider } from "@/components/gluestack-base";
import { GluestackUIProvider } from "@/components/gluestack-ui-provider";
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { Provider } from 'react-redux';
import { store } from '@/shared/store/store'

import "../global.css";
import { CartButtonWithData } from "./cart";

// Prevent the splash screen from au`to-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
    <GluestackUIProvider >
      <Stack>
        
        <Stack.Screen name="index" options={{
          title: 'Products',
          headerRight: () => <CartButtonWithData />,
        }} />
        <Stack.Screen name="product/[pid]" options={{
          title: 'Product Description',
          headerRight: () => <CartButtonWithData />,
        }} />
        <Stack.Screen name="cart" options={{
          title: 'Cart',
          headerRight: () => <CartButtonWithData />,
        }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </GluestackUIProvider>
    </Provider>
  );
}
