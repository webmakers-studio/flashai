import { Stack } from "expo-router";
import "./global.css";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <Stack />
    </SafeAreaProvider>
  );
}
