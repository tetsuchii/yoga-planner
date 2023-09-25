import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import globalStyles from "../style";

export default function Login() {
  return (
    <SafeAreaProvider>
      <View style={globalStyles.container}>
        <Text style={globalStyles.text}>Login</Text>
      </View>
    </SafeAreaProvider>
  );
}
