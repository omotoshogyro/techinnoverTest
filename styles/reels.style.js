import { StyleSheet } from "react-native";

export const ReelsScreenStyles = StyleSheet.create({
  reelsHeaderWrap: {
    position: "absolute",
    right: 15.38,
    left: 15.38,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  reelsTextWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  reelDetailsWrap: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 15.38,
    alignItems: "flex-end",
  },

  //reels details left side

  followBtnWrap: {
    paddingHorizontal: 8,
    borderWidth: 2,
    borderColor: "#fff",
    paddingTop: 3.85,
    paddingBottom: 4.81,
    borderRadius: 7.692,
  },
  reelStoryring: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
  },
  reelTopPart: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7.69,
  },
});
