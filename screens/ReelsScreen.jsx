import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { PageWrapper } from "../components";
import { useInsets } from "../hooks";
import {
  Cameraicon,
  Dropdownicon,
  Hearticon,
  Musicicon,
  Reelscommenticon,
  Reelsmenuicon,
  Reelsshareicon,
  Reelstoryringicon,
  Reelswithplayicon,
} from "../assets/icons";
import TEText from "../Dcommon/TEText";
import { ReelsScreenStyles } from "../styles/reels.style";

const { reelsHeaderWrap, reelsTextWrap, reelDetailsWrap, followBtnWrap, reelStoryring } = ReelsScreenStyles;

const ReelsScreen = () => {
  const { deviceHeight, tabBarHeight, top } = useInsets();

  const Reels = ({ item }) => {
    return (
      <View
        style={{
          height: deviceHeight - tabBarHeight,
          backgroundColor: item,
        }}
      >
        <View style={reelDetailsWrap}>
          {/* left side */}
          <View>


            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 7.69 }}
            >
              <View
                style={reelStoryring}
              >
                <View style={{ position: "absolute" }}>
                  <Reelstoryringicon />
                </View>
              </View>
              <TEText size={12.5} bold>zoroamy_edits</TEText>
              <Pressable
                style={followBtnWrap}
              >
                <TEText size={12.5} bold>Follow</TEText>
              </Pressable>
            </View>


            <TEText size={12.5}>What a Failure 😭 ...</TEText>

            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 7.69 }}
            >
              <Musicicon />
              <TEText size={12.5}>Music Playing</TEText>
            </View>
          </View>

          {/* right side actions */}
          <View>
            <View style={{ gap: 17.31 }}>
              <View style={{gap: 3.85}}>
                <Hearticon />
                <TEText size={12}>147k</TEText>
              </View>
              <View style={{gap: 3.85}}>
                <Reelscommenticon />
                <TEText size={12}>2,465</TEText>
              </View>

              <Reelsshareicon />
            </View>

            <View style={{ gap: 11.54, marginTop: 11.54 }}>
              <Reelsmenuicon />
              <Reelswithplayicon />
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <PageWrapper top={false}>
      <FlatList
        data={["red", "green", "purple"]}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
        renderItem={Reels}
      />

      {/* Reels header */}
      <View
        style={[
          reelsHeaderWrap,
          {
            top: top,
          },
        ]}
      >
        <View style={reelsTextWrap}>
          <TEText size={21} bold>
            Reels
          </TEText>
          <Dropdownicon />
        </View>
        <Cameraicon />
      </View>
    </PageWrapper>
  );
};

export default ReelsScreen;

const styles = StyleSheet.create({});
