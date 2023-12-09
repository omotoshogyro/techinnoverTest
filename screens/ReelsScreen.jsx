import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Animated,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { ContentView, PageWrapper } from "../components";
import { useAnimatedScroll, useInsets } from "../hooks";

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
import { REELS_DATA } from "../datas";

const {
  reelsHeaderWrap,
  reelsTextWrap,
  reelDetailsWrap,
  followBtnWrap,
  reelStoryring,
  reelTopPart,
} = ReelsScreenStyles;

const ReelsScreen = () => {
  const { deviceHeight, deviceWidth, tabBarHeight, top } = useInsets();

  const flatListRef = useRef(null);
  const [startIndex, setStartIndex] = useState(0);
  const onViewChangeRef = useRef(({ viewableItems }) => {
    setStartIndex(viewableItems[0]?.index);
  });
  const VIEWABLE_HEIGHT = (deviceHeight - tabBarHeight);

  const { trackScroll, animatedValue } = useAnimatedScroll(
    VIEWABLE_HEIGHT  * startIndex,
    VIEWABLE_HEIGHT  * (startIndex + 1),
    1,
    0.2
  );

  const Reels = ({ item }) => {
    const { reelUrl, likes, comment, username, username_image, post_info } =
      item;
    return (
      <View
        style={{
          height: VIEWABLE_HEIGHT,
        }}
      >
        <ContentView
          showIcon={false}
          width={deviceWidth}
          type="video"
          height={VIEWABLE_HEIGHT}
          url={reelUrl}
        />

        <Animated.View style={[reelDetailsWrap, { opacity: animatedValue }]}>
          {/* left side */}
          <View>
            <View style={reelTopPart}>
              <View style={reelStoryring}>
                <View style={{ position: "absolute" }}>
                  <Reelstoryringicon />
                </View>
              </View>
              <TEText size={12.5} bold>
                {username}
              </TEText>
              <Pressable style={followBtnWrap}>
                <TEText size={12.5} bold>
                  Follow
                </TEText>
              </Pressable>
            </View>

            <TEText size={12.5}>{post_info}</TEText>

            <View style={reelTopPart}>
              <Musicicon />
              <TEText size={12.5}>Music Playing</TEText>
            </View>
          </View>

          {/* right side actions */}
          <View>
            <View style={{ gap: 17.31 }}>
              <View style={{ gap: 3.85, alignItems: "center" }}>
                <Hearticon />
                <TEText size={12}>{likes}</TEText>
              </View>
              <View style={{ gap: 3.85, alignItems: "center" }}>
                <Reelscommenticon />
                <TEText size={12}>{comment}</TEText>
              </View>

              <Reelsshareicon />
            </View>

            <View style={{ gap: 11.54, marginTop: 11.54 }}>
              <Reelsmenuicon />
              <Reelswithplayicon />
            </View>
          </View>
        </Animated.View>
      </View>
    );
  };

  return (
    <PageWrapper top={false}>
      <Animated.FlatList
        ref={flatListRef}
        data={REELS_DATA}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={{ gap: 2 }}
        onViewableItemsChanged={onViewChangeRef.current}
        snapToAlignment="start"
        decelerationRate="fast"
        renderItem={Reels}
        onScroll={trackScroll}
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
