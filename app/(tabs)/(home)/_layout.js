import React, { useState } from "react";
import { Stack } from "expo-router";

export default () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="details"
        options={{ headerShown: false, headerTransparent: true }}
      />
    </Stack>
  );
};
