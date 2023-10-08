import { FontAwesome } from "@expo/vector-icons";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, View, Text } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: "#546aa6",
        tabBarStyle: Platform.OS === "ios" && {
          backgroundColor: "white",
        },
        headerShown: false,
      }}
      tabBar={(props) =>
        Platform.OS === "ios" ? (
          <View
            style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
            intensity={95}
          >
            <BottomTabBar {...props} />
          </View>
        ) : Platform.OS === "web" ? (
          <View
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
            }}
          >
            <BottomTabBar {...props} />
          </View>
        ) : (
          <BottomTabBar {...props} />
        )
      }
    >
      <Tabs.Screen
        name="(home)"
        options={{
          headerShown: false,
          href: "/",
          title: "",
          tabBarIcon: ({ color }) => (
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginTop: Platform.OS === "web" ? 0 : 15,
                backgroundColor: "transparent",
              }}
            >
              <TabBarIcon name="home" color={color} size={24} />
              <Text style={{ marginTop: 5, fontSize: 10, opacity: 0.5 }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "",
          headerShown: false,
          href: {
            pathname: "/create",
          },
          tabBarIcon: ({ color }) => (
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginTop: Platform.OS === "web" ? 0 : 15,

                backgroundColor: "transparent",
              }}
            >
              <TabBarIcon name="plus" color={color} size={24} />
              <Text style={{ marginTop: 5, fontSize: 10, opacity: 0.5 }}>
                Create
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          title: "",
          headerShown: false,
          href: {
            pathname: "/profile",
          },
          tabBarIcon: ({ color }) => (
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginTop: Platform.OS === "web" ? 0 : 15,
                backgroundColor: "transparent",
              }}
            >
              <TabBarIcon name="user" color={color} size={24} />
              <Text style={{ marginTop: 5, fontSize: 10, opacity: 0.5 }}>
                Account
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

function TabBarIcon(props) {
  return (
    <FontAwesome
      size={props.size || 26}
      style={{ marginBottom: -3 }}
      {...props}
    />
  );
}
