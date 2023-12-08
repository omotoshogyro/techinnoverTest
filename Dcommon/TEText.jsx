import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TEText = ({ styles, size=14, color = "#fff", bold=false, ...rest }) => {
  return (
    <Text
      style={[
        {
          fontFamily: !bold ? "Segoeui" : 'SegoeuiBold',
          fontSize: size,
          color: color,
        },
        styles,
      ]}
      minimumFontScale={1}
      maxFontSizeMultiplier={1}
      {...rest}
    />
  );
};

export default TEText;

const styles = StyleSheet.create({});
