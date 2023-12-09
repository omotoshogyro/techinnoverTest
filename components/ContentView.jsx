import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { Video } from "expo-av";
import TEImage from "../Dcommon/TEImage";
import {
  IslargeVideoposticon,
  IspostPhotoicon,
  IspostVideoicon,
  Muteicon,
  Notmuteicon,
} from "../assets/icons";

const ContentView = ({
  type = "photo",
  url,
  height,
  width = 125,
  color = "#f6f6f6",
  showIcon = true,
  audioMutable = false,
}) => {
  const [muted, setMuted] = useState(true);
  const isPhoto = type == "photo";
  const isLargeVideo = height > 125 && !isPhoto;
  const isSmallVideo = height == 125 && !isPhoto;
  const iconForLarge = isLargeVideo ? 10 : 0;
  const showMutedIcon = !isPhoto && audioMutable;
  const iconToShow = isPhoto ? (
    <IspostPhotoicon />
  ) : isLargeVideo ? (
    <IslargeVideoposticon />
  ) : (
    <IspostVideoicon />
  );
  return (
    <View>
      {isPhoto ? (
        <TEImage url={url} width={width} height={height} bG={color} cover />
      ) : (
        <Video
          source={{ uri: url }}
          style={{ height, width }}
          resizeMode="cover"
          shouldPlay
          isMuted={muted}
          isLooping
        />
      )}

      {showMutedIcon && (
        <Pressable onPress={() => setMuted(!muted)} style={styles.mutediconBg}>
          {muted ? <Muteicon /> : <Notmuteicon />}
        </Pressable>
      )}

      {showIcon && (
        <>
          {isPhoto && <View style={styles.isPhotoiconWrap}>{iconToShow}</View>}
          {isSmallVideo && (
            <View style={styles.isSmallVideoiconWrap}>{iconToShow}</View>
          )}
          {isLargeVideo && (
            <View style={styles.isLargeVideoiconWrap}>{iconToShow}</View>
          )}
        </>
      )}
    </View>
  );
};

export default ContentView;

const styles = StyleSheet.create({
  isPhotoiconWrap: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  isSmallVideoiconWrap: {
    position: "absolute",
    top: 14.62,
    right: 12,
  },
  isLargeVideoiconWrap: {
    position: "absolute",
    bottom: 14.62,
    left: 12,
  },
  mutediconBg: {
    position: "absolute",
    right: 15,
    bottom: 15,
    width: 30,
    height: 30,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30 / 2,
  },
});
