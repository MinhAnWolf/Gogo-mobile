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

  categoryItem: {
    width: 60,
    height: 60,
    marginLeft: 30,
    marginTop: 30,
    marginBottom: 30,
  },
});
