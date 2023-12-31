import { Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import globalStyles from "../../style";
import { FlatList } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Profile() {
  const changePicture = () => {};

  return (
    <SafeAreaProvider>
      <View style={globalStyles.container}>
        <View style={globalStyles.content}>
          <View style={globalStyles.row}>
            <Image
              style={globalStyles.profileImage}
              source={require("../../../assets/placeholder.png")}
            />
            <View style={{ alignItems: "center" }}>
              <Text style={globalStyles.cardTitle}>yogalover33</Text>
              <Text
                style={globalStyles.cardText && { color: "#546aa6" }}
                onPress={() => changePicture()}
              >
                Change profile picture
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <TouchableOpacity style={globalStyles.profileButton}>
              <FontAwesome
                size={24}
                style={{ marginBottom: -3, marginLeft: 10 }}
                name="thumbs-up"
                color={"white"}
              />
              <Text style={globalStyles.cardTitle}>Liked sequences </Text>
            </TouchableOpacity>
            <TouchableOpacity style={globalStyles.profileButton}>
              <FontAwesome
                size={24}
                style={{ marginBottom: -3, marginLeft: 10 }}
                name="heart"
                color={"white"}
              />
              <Text style={globalStyles.cardTitle}>Your sequences </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={globalStyles.profileButton}
              onPress={() => {
                router.push("/settings");
              }}
            >
              <FontAwesome
                size={24}
                style={{ marginBottom: -3, marginLeft: 10 }}
                name="gear"
                color={"white"}
              />
              <Text style={globalStyles.cardTitle}>Settings </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
