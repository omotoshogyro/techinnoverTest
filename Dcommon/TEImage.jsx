import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";

const TEImage = ({
  url,
  cover = false,
  width = "100%",
  height = "100%",
  bG = "#0553",
}) => {
  return (
    <Image
      style={{ width: width, height: height, backgroundColor: bG }}
      source={url}
      contentFit={cover ? "cover" : "contain"}
      transition={400}
    />
  );
};

export default TEImage;
