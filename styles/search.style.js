import { StyleSheet } from "react-native";

export const SearchScreenStyles = StyleSheet.create({
  postSearchWrap: {
    flexDirection: "row",
    alignItems: "center",
    padding: 7.69,
    marginHorizontal: 16,
    backgroundColor: "#262626",
    borderRadius: 6.7,
    marginBottom: 7.69,
  },
  postSearchInput: {
    height: 34,
    flex: 1,
    paddingLeft: 7.69,
    fontFamily: "SegoeuiBold",
  },
  postsWrap: {
    flexDirection: "row",
    gap: 2,
  },
});
