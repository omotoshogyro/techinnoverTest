import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const PageWrapper = ({ bottom = false, top= true, children }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: top ? insets.top : 0,
        backgroundColor: "#000",
        paddingBottom: bottom ? insets.bottom : 0,
      }}
    >
      <StatusBar 
      animated={true}
      barStyle="light-content"
      // showHideTransition={statusBarTransition}
      />
      {children}
    </View>
  );
};

export default PageWrapper;

const styles = StyleSheet.create({});
