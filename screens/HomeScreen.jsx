import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";


import TEText from "../Dcommon/TEText";
import { PageWrapper } from "../components";
import { useInsets } from "../hooks";
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

const {
  pageHeaderWrap,
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
  logoAndDropdown
} = HomeScreenStyles;

const HomeScreen = () => {
  const { top } = useInsets();

  const pageHeader = () => {
    return (
      <View style={pageHeaderWrap}>
        <View style={logoAndDropdown}>
          <Instagralogoicon />
          <Dropdownicon />
        </View>
        <View style={[rowAlign, { gap: 24 }]}>
          <Hearticon />
          <Telegramicon />
          <Newposticon />
        </View>
      </View>
    );
  };

  const StoryListHeader = () => {
    return (
      <View style={storyListHeaderWrap}>
        <View style={addStoryIconWrap}>
          <Addstoryicon />
        </View>
      </View>
    );
  };

  const storyLists = () => {
    return (
      <FlatList
        data={new Array(10)}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={storyListWrap}
        ListHeaderComponent={StoryListHeader}
        renderItem={() => {
          return (
            <View style={eachStoryWrap}>
              <View style={{ position: "absolute" }}>
                <Storyringicon />
              </View>

              {/* To replace with image */}
              <View
                style={{
                  backgroundColor: "gray",
                  width: "100%",
                  height: "100%",
                  borderRadius: 70 / 2,
                  borderColor: "#fff",
                  borderWidth: 1,
                }}
              ></View>
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

  const SinglePost = () => {
    return (
      <View>
        <View style={postHeaderWrap}>
          <View style={postImageAndTitleWrap}>
            {/* To replace with actual image */}
            <View
              style={{
                width: 24,
                height: 24,
                backgroundColor: "gray",
                borderRadius: 24 / 2,
              }}
            ></View>
            <TEText>instablog9ja and instablog9jamedia</TEText>
          </View>

          <Moreicon />
        </View>
        {/* post assets view */}
        <View style={{ height: 375, backgroundColor: "blue" }}></View>

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
          <TEText bold>100 likes</TEText>
          <TEText>
            <TEText bold>Angel </TEText>
            Username Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt... more
          </TEText>
          <TEText color="#6E6E6E">View all 2 comments</TEText>
          <TEText size={12} color="#6E6E6E">
            1 day ago
          </TEText>
        </View>
      </View>
    );
  };

  return (
    <PageWrapper top={false}>
      <FlatList
        data={new Array(20)}
        ListHeaderComponent={HomeScreenHeader}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 20, paddingTop: top }}
        renderItem={SinglePost}
      />
    </PageWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
