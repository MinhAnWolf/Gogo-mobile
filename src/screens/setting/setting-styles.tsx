import { StyleSheet } from "react-native";

export const SettingStyles = StyleSheet.create({
  avatarContainer: {
    width: "90%",
  },

  avatar: {
    width: "30%",
    height: 100,
    backgroundColor: "aqua",
    borderRadius: 100,
    marginLeft: "40%",
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 5,
  },

  cssTextTitle: {
    color: "rgb(94, 126, 231)",
    fontWeight: "bold",
    fontSize: 16,
  },

  cssTextName: {
    fontWeight: "bold",
    fontSize: 20,
  },

  bgEmailContainer: {
    width: "70%",
    backgroundColor: "rgb(242, 242, 242)",
    marginLeft: "20%",
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },

  optionItem: {
    width: "100%",
    backgroundColor: "rgb(249, 249, 249)",
    marginLeft: "5%",
    marginTop: "5%",
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },

  iconContainer: {
    width: "30%",
    height: 40,
  },

  contentContainer: {
    width: "70%",
    height: 40,
  },

  maskIcon: {
    marginLeft: "10%",
    width: "50%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "rgb(233, 238, 253)",
  },

  imgIconSize: {
    width: "90%",
    height: "90%",
    marginLeft: "5%",
  },
});
