import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import globalStyles from "../style";

export default function Create() {
  return (
    <SafeAreaProvider>
      <View style={globalStyles.container}>
        <Text style={globalStyles.text}>Create yourt first plan</Text>
      </View>
    </SafeAreaProvider>
  );
}
