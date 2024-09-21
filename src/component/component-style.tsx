import { StyleSheet } from "react-native";

export const ComponentStyle = StyleSheet.create({
  searchContainer: {
    width: 40,
    height: 38,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginLeft: 10,
    textAlign: "center",
    backgroundColor: "white",
  },

  searchIcon: {
    marginLeft: 8,
    marginTop: 3,
  },

  imageCard: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },

  containerCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },

  card: {
    width: "90%",
    marginTop: 20,
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
});
