import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PageWrapper } from "../components";
import TEText from "../Dcommon/TEText";

const ProfileScreen = () => {
  return (
    <PageWrapper>
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <TEText>PROFILE SCREEN</TEText>
      </View>
    </PageWrapper>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
