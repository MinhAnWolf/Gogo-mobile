import { StyleSheet } from "react-native";

export const HomeStyles = StyleSheet.create({
  containerHome: {
    width: "90%",
    height: "auto",
  },

  header: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 20,
  },

  containerInputSearch: {
    width: 100,
  },

  iconContainer: {
    width: "15%",
    height: 50,
    borderWidth: 1,
    borderColor: "rgb(245, 245, 245)",
    justifyContent: "center",
    alignItems: "center",
  },

  currentLocationContainer: {
    width: "60%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  currentNoti: {
    width: 20,
    height: 20,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    left: 28,
    top: 5,
  },

  locationContainer: {},

  advertisementContainer: {
    width: "100%",
    height: 200,
  },

  categoryContainer: {
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "space-between",
  },

  itemCategoryContainer: {
    width: "22%",
    height: 100,
    backgroundColor: "rgb(247, 247, 247)",
    borderRadius: 100,
    marginTop: 20,
  },

  maskCircle: {
    width: "70%",
    height: 50,
    marginLeft: "15%",
    marginTop: "10%",
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 100,
    marginBottom: 10,
  },

  hotSearchContainer: {
    width: "100%",
    marginBottom: 120,
  },

  miniCardContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
