import { StyleSheet } from "react-native";

export const ComponentStyle = StyleSheet.create({
  searchIconContainer: {
    width: "15%",
    height: 38,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    textAlign: "center",
    backgroundColor: "rgb(236, 237, 241)",
  },

  searchContainer: {
    width: "85%",
    height: 38,
  },

  searchIcon: {
    marginLeft: 8,
    marginTop: 5,
  },

  imageCard: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },

  containerCard: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#ccc",
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

  containerSetting: {
    marginTop: 30,
    backgroundColor: "white",
    width: "90%",
    marginLeft: "5%",
    height: "auto",
    borderRadius: 20,
  },

  line: {
    height: 0.5,
    backgroundColor: "gray",
    marginVertical: 10,
    width: "100%",
  },

  miniCardContainer: {
    width: "48%",
    height: 250,
    backgroundColor: "rgb(247, 247, 247)",
    borderRadius: 10,
    marginTop: 20,
  },

  imgCardMini: {
    width: "100%",
    height: 150,
  },

  rateCardMini: {
    width: "50%",
    height: 40,
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 100,
    right: 2,
    top: 2,
  },

  // Checkbox
  containerCheckBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 36,
    height: 36,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 2,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  checked: {
    width: 10,
    height: 10,
    backgroundColor: "#000",
  },
  label: {
    fontSize: 16,
  },

  // Item Icon
  item: {
    flexDirection: "row",
    width: "90%",
    marginBottom: 20,
    alignItems: "center",
  },
  itemContent: {
    fontSize: 14,
    color: "gray",
    marginTop: 2,
    marginLeft: 8,
  },

  // Item tab
  tab: {
    padding: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "orange",
    color: "orange",
  },

  // Item rating.
  ratingTitle: {
    paddingTop: 12,
    fontSize: 14,
  },
});
