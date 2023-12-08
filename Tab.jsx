import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
  HomeScreen,
  NewpostScreen,
  ProfileScreen,
  ReelsScreen,
  SearchScreen,
} from "./screens";
import {
  Hometabicon,
  Newposticon,
  Profiletabicon,
  Reelstabicon,
  Searchtabicon,
} from "./assets/icons";


const Tab = createBottomTabNavigator();

let TabIcon = (name, focused) => {
  switch (name) {
    case "Home":
      return <Hometabicon focused={focused} />;
    case "Search":
      return <Searchtabicon focused={focused} />;
    case "Reels":
      return <Reelstabicon focused={focused} />;
    case "Newpost":
      return <Newposticon focused={focused} />;
    case "Profile":
      return <Newposticon focused={focused} />;
    default:
      break;
  }
};

const BottomTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => TabIcon(route.name, focused),
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#000"
          },
        })}
        initialRouteName="Home"
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Reels" component={ReelsScreen} />
        <Tab.Screen name="Newpost" component={NewpostScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
