import { StyleSheet, View, Platform, Text } from "react-native";
import React, { useState } from "react";
import * as Font from "expo-font";

if (Platform.OS != "web") {
  let customFont = {
    "Cooper-Black": require("../assets/fonts/CooperFiveOpti-Black.otf"),
  };
}

export default function Header() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [webFont] = Font.useFonts({
    "Cooper-Black": require("../assets/fonts/CooperFiveOpti-Black.otf"),
  });

  useState(() => {
    if (Platform.OS === "web") {
      loadFontsAsync;
    }
  }, []);

  const loadFontsAsync = async () => {
    await Font.loadAsync(customFont);
    setFontLoaded(true);
  };

  if (Platform.OS != "web" || !fontLoaded) {
    return (
      <View style={styles.headerBox}>
        <Text style={styles.headerTitle}>Yoga Planner</Text>
      </View>
    );
  } else if (Platform.OS === "web") {
    return (
      <View style={styles.headerBox}>
        <Text style={styles.headerTitle}>Yoga Planner</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerBox: {
    width: "100%",
    backgroundColor: "#546aa6",
    height: Platform.OS === "web" ? 60 : 100,
  },
  headerTitle: {
    color: "#cddad8",
    fontSize: 26,
    textAlign: "center",
    fontFamily: "Cooper-Black",
    marginTop: Platform.OS === "ios" ? 50 : 10,
  },
});
