import { Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import globalStyles from "../../style";
import { FlatList } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

export default function Settings() {
  return (
    <SafeAreaProvider>
      <View style={globalStyles.container}>
        <View style={globalStyles.content}>
          <View style={{ marginTop: 15 }}>
            <TouchableOpacity style={globalStyles.profileButton}>
              <FontAwesome
                size={24}
                style={{ marginBottom: -3, marginLeft: 10 }}
                name="globe"
                color={"white"}
              />
              <Text style={globalStyles.cardTitle}>Language </Text>
            </TouchableOpacity>
            <TouchableOpacity style={globalStyles.profileButton}>
              <FontAwesome
                size={24}
                style={{ marginBottom: -3, marginLeft: 10 }}
                name="sign-out"
                color={"white"}
              />
              <Text style={globalStyles.cardTitle}>Sign out </Text>
            </TouchableOpacity>
            <TouchableOpacity style={globalStyles.profileButton}>
              <FontAwesome
                size={24}
                style={{ marginBottom: -3, marginLeft: 10 }}
                name="trash"
                color={"white"}
              />
              <Text style={globalStyles.cardTitle}>Delete profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
