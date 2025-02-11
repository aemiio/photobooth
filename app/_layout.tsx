import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            animation: "none",
          }}
        />
        <Stack.Screen
          name="countdown"
          options={{
            animation: "none",
          }}
        />
        <Stack.Screen
          name="printing"
          options={{
            animation: "none",
          }}
        />
      </Stack>
    </View>
  );
}
