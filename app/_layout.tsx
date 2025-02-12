import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "../theme";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 100);
  }, []);

  return (
    <>
      <GluestackUIProvider config={config}>
        <View style={{ flex: 1 }}>
          <StatusBar style="light" />
          <Stack
            screenOptions={{
              headerShown: false,
              animation: "none",
            }}
          >
            <Stack.Screen name="index" options={{ animation: "none" }} />
            <Stack.Screen name="countdown" options={{ animation: "none" }} />
            <Stack.Screen name="printing" options={{ animation: "none" }} />
          </Stack>
        </View>
      </GluestackUIProvider>
    </>
  );
}
