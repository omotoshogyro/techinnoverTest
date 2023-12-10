import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Animated,
} from "react-native";
import React from "react";
import { ContentView, PageWrapper } from "../components";
import { useAnimatedScroll, useInsets } from "../hooks";
import { Searchicon } from "../assets/icons";
import { SearchScreenStyles } from "../styles";
import { SEARCH_REELS } from "../datas";

const { postSearchWrap, postSearchInput, postsWrap } = SearchScreenStyles;

const RandomPosts = () => {
  const { top, deviceWidth } = useInsets();
  const { trackScroll, animatedValue } = useAnimatedScroll(0, top, 1, 0);
  let contentWidth = (deviceWidth / 3)



  const PostSearchInput = () => {
    return (
      <Animated.View
        style={[
          postSearchWrap,
          {
            opacity: animatedValue,
          },
        ]}
      >
        <Searchicon />
        <TextInput
          style={postSearchInput}
          placeholder="Search"
          placeholderTextColor="#969696"
        />
      </Animated.View>
    );
  };

  return (
    <Animated.ScrollView
      onScroll={trackScroll}
      contentContainerStyle={{ paddingTop: top, alignItems: "center" }}
      showsVerticalScrollIndicator={false}
    >
      <PostSearchInput />
      <View style={postsWrap}>
        {SEARCH_REELS.map((SEARCH_REEL, index) => {
          return (
            <View style={{ gap: 2 }} key={index}>
              {SEARCH_REEL.tags.map(({ height, fileUrl, type }) => (
                <ContentView key={fileUrl} width={contentWidth} height={height} type={type} url={fileUrl} />
              ))}
            </View>
          );
        })}
      </View>
    </Animated.ScrollView>
  );
};

const SearchScreen = () => {
  return (
    <PageWrapper top={false}>
      <RandomPosts />
    </PageWrapper>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
