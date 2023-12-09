import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PageWrapper } from "../components";
import TEText from "../Dcommon/TEText";

const NewpostScreen = () => {
  return (
    <PageWrapper>
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <TEText>NEWPOST SCREEN</TEText>
      </View>
    </PageWrapper>
  );
};

export default NewpostScreen;

const styles = StyleSheet.create({});
