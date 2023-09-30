import React, { useState } from "react";
import { Stack } from "expo-router";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "../components/Header";
import { useGlobalState } from "../app/store";

export default function HomeLayout() {
  const state = useGlobalState();

  useState(() => {
    state.init();
  }, []);
  return (
    <SafeAreaProvider>
      <Header />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            headerTransparent: true,
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
