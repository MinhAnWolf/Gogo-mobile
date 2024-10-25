import { StyleSheet } from "react-native";

export const DetSearLocStyles = StyleSheet.create({
  banner: {
    width: "100%",
    height: 200,
  },

  container: {
    width: "100%",
    height: "100%",
    padding: 10,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
  },

  body: {
    flex: 1,
  },
  comment: {
    height: 100,
  },

  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  tab: {
    padding: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "orange",
    color: "orange",
  },
  contentContainer: {
    flex: 1,
  },
  content: {
    fontSize: 24,
  },
  boxRating: {
    marginBottom: 10,
    alignItems: "center",
  },
});
