import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import globalStyles from "../../style";

export default function Profile() {
  return (
    <SafeAreaProvider>
      <View style={globalStyles.container}>
        <Text style={globalStyles.text}>This is your profile</Text>
      </View>
    </SafeAreaProvider>
  );
}
