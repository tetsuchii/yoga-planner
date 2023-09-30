import React, { useState } from "react";
import { Stack } from "expo-router";

export default () => {
  return (
    <Stack>
      <Stack.Screen
        name="profile"
        options={{ headerShown: false, headerTransparent: true }}
      />
    </Stack>
  );
};
