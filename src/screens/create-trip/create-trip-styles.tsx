import { StyleSheet } from "react-native";

export const CreateTripStyles = StyleSheet.create({
  // Header styles
  header: {
    height: 90,
    paddingTop: 10,
  },

  // Body.
  body: {
    flex: 1,
    backgroundColor: "#ddd",
    marginLeft: -20,
    marginRight: -20,
    paddingLeft: 10,
    paddingRight: 10,
  },

  // Card custom styles
  cardContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    height: "100%",
    backgroundColor: "#ddd",
    paddingBottom: 217,
  },
  card: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    overflow: "hidden",
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "white",
  },
  cardImage: {
    flex: 0.3,
  },
  cardBody: {
    flex: 0.7,
    padding: 10,
  },
  cardTitle: {
    fontSize: 20,
    marginBottom: 6,
  },
  cardContent: {
    fontSize: 12,
    color: "gray",
  },

  //Box submt
  boxSubmit: {
    height: 50,
    justifyContent: "center",
  },
  // Modal add location.
  banner: {
    height: 100,
    borderRadius: 10,
    overflow: "hidden",
  },
});
