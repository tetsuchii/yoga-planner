import { FlatList, Text, View, Image, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import globalStyles from "../../style";
import { useEffect, useState } from "react";
import { router } from "expo-router";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Morning yoga",
    duration: 20,
    tags: ["morning", "easy", "beginner", "feelgood"],
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Back stretch",
    duration: 30,
    tags: ["stretch", "easy"],
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Full body yoga",
    duration: 60,
    tags: ["fullbody", "advanced", "hard"],
  },
];

export default function Home() {
  const [options, setOptions] = useState(DATA);

  useEffect(() => {
    //....
  }, []);

  return (
    <SafeAreaProvider>
      <View style={globalStyles.container}>
        <View
          style={
            Platform.OS == "web"
              ? globalStyles.webContent
              : globalStyles.content
          }
        >
          <FlatList
            data={options}
            style={{ marginBottom: Platform.OS == "ios" ? 80 : 0 }}
            numColumns={Platform.OS == "web" ? options.length : 1}
            renderItem={({ item }) => (
              <View style={globalStyles.card}>
                <Image
                  style={globalStyles.cardImage}
                  source={require("../../../assets/placeholder.png")}
                />
                <View style={globalStyles.rowHeader}>
                  <Text
                    style={globalStyles.cardTitle}
                    onPress={() => router.push("/details")}
                  >
                    {item.title}
                  </Text>
                  <View style={globalStyles.timeBox}>
                    <Text style={globalStyles.cardText}>
                      {item.duration} min
                    </Text>
                  </View>
                </View>
                <FlatList
                  style={globalStyles.row}
                  data={item.tags}
                  renderItem={({ item }) => (
                    <Text style={globalStyles.cardText}>#{item} </Text>
                  )}
                  keyExtractor={(item) => item}
                />
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaProvider>
  );
}
