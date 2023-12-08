import { StyleSheet } from "react-native";

export const HomeScreenStyles = StyleSheet.create({
  pageHeaderWrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  rowAlign: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoAndDropdown: {
    flexDirection: "row",
    alignItems: "start",
    gap: 8,
  },
  storyListHeaderWrap: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    borderWidth: 1,
    borderColor: "white",
  },
  addStoryIconWrap: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  storyListWrap: {
    paddingHorizontal: 12,
    gap: 11.5,
    paddingTop: 7.7,
  },
  eachStoryWrap: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    padding: 6,
  },

  //Post Styles
  postDetailsWrap: {
    gap: 6,
    paddingHorizontal: 12,
  },
  postActionLeftWrap: {
    flexDirection: "row",
    gap: 12,
  },
  postActionWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  postHeaderWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  postImageAndTitleWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
