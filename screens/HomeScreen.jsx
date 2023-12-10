import { StyleSheet, Text, View, FlatList, Animated } from "react-native";
import React, { useRef } from "react";
import { Image } from "expo-image";
import TEText from "../Dcommon/TEText";
import { ContentView, PageWrapper } from "../components";
import { useAnimatedScroll, useInsets } from "../hooks";
import { HomeScreenStyles } from "../styles/home.style";

import {
  Addstoryicon,
  Commenticon,
  Dropdownicon,
  Hearticon,
  Instagralogoicon,
  Moreicon,
  Newposticon,
  Postbookmarkicon,
  Shareposticon,
  Storyringicon,
  Telegramicon,
} from "../assets/icons";
import { POST_DATAS, STORY_DATAS, getRandomPeopleImageUrl } from "../datas";

const {
  pageHeaderWrap,
  storyImageStyle,
  rowAlign,
  storyListHeaderWrap,
  addStoryIconWrap,
  storyListWrap,
  eachStoryWrap,
  postDetailsWrap,
  postActionWrap,
  postActionLeftWrap,
  postHeaderWrap,
  postImageAndTitleWrap,
  logoAndDropdown,
  profileImageStyle,
} = HomeScreenStyles;

const HomeScreen = () => {
  const { top, deviceWidth } = useInsets();
  const { trackScroll, animatedValue } = useAnimatedScroll(0, top, 1, 0);

  const pageHeader = () => {
    return (
      <Animated.View style={[pageHeaderWrap, { opacity: animatedValue }]}>
        <View style={logoAndDropdown}>
          <Instagralogoicon />
          <Dropdownicon />
        </View>
        <View style={[rowAlign, { gap: 24 }]}>
          <Hearticon />
          <Telegramicon />
          <Newposticon />
        </View>
      </Animated.View>
    );
  };

  const StoryListHeader = () => {
    return (
      <View style={storyListHeaderWrap}>
        <Image
          style={storyImageStyle}
          source={getRandomPeopleImageUrl()}
          contentFit="cover"
          transition={1000}
        />
        <View style={addStoryIconWrap}>
          <Addstoryicon />
        </View>
        <TEText size={12} styles={{ textTransform: "lowercase" }}>
                Sentras
        </TEText>
      </View>
    );
  };

  const storyLists = () => {
    return (
      <FlatList
        data={STORY_DATAS}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={storyListWrap}
        ListHeaderComponent={StoryListHeader}
        renderItem={({ item }) => {
          return (
            <View style={{alignItems: "center"}}>
              <View style={eachStoryWrap}>
                <View style={{ position: "absolute" }}>
                  <Storyringicon />
                </View>

                <Image
                  style={storyImageStyle}
                  source={item.storyImage}
                  contentFit="cover"
                  transition={1000}
                />
              </View>
              <TEText size={12} styles={{ textTransform: "lowercase" }}>
                {item.username}
              </TEText>
            </View>
          );
        }}
      />
    );
  };

  const HomeScreenHeader = () => {
    return (
      <>
        {pageHeader()}
        {storyLists()}
      </>
    );
  };

  const SinglePost = ({ item }) => {
    const {
      username,
      profile_image,
      post_url,
      number_of_likes,
      post_info,
      number_of_comments,
      date_posted,
      height,
      type,
      audioMutable,
    } = item;
    return (
      <View>
        <View style={postHeaderWrap}>
          <View style={postImageAndTitleWrap}>
            <Image style={profileImageStyle} source={profile_image} />
            <TEText bold styles={{ textTransform: "lowercase" }}>
              {username}
            </TEText>
          </View>

          <Moreicon />
        </View>
        {/* post assets view */}
        <ContentView
          width={deviceWidth}
          url={post_url}
          height={height}
          showIcon={false}
          type={type}
          audioMutable={audioMutable}
        />
        {/* post actions */}
        <View style={postActionWrap}>
          <View style={postActionLeftWrap}>
            <Hearticon />
            <Commenticon />
            <Shareposticon />
          </View>
          <Postbookmarkicon />
        </View>

        {/* post details */}
        <View style={postDetailsWrap}>
          <TEText bold>{number_of_likes} likes</TEText>
          <TEText>
            <TEText styles={{ textTransform: "lowercase" }} bold>
              {username}{" "}
            </TEText>
            {post_info}
          </TEText>
          <TEText color="#6E6E6E">
            View all {number_of_comments} comments
          </TEText>
          <TEText size={12} color="#6E6E6E">
            {date_posted}
          </TEText>
        </View>
      </View>
    );
  };

  return (
    <PageWrapper top={false}>
      <Animated.FlatList
        data={POST_DATAS}
        ListHeaderComponent={HomeScreenHeader}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 20, paddingTop: top }}
        renderItem={SinglePost}
        onScroll={trackScroll}
      />
    </PageWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
