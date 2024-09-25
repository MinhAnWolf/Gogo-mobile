import { StyleSheet } from "react-native";

export const BaseStyles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  rowCenter: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },

  noRowCenter: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
  },

  headerContainer: {
    width: "100%",
    height: 100,
  },

  bodyContainer: {
    width: "100%",
    height: 100,
  },

  input: {
    width: "100%",
    borderRadius: 10,
    padding: 2,
    backgroundColor: "rgb(236, 237, 241)",
    height: "100%",
    paddingHorizontal: 15,
  },

  inputSearch: {
    width: "100%",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 0,
    padding: 2,
    backgroundColor: "rgb(236, 237, 241)",
    height: 38,
  },

  mrTop20: {
    marginTop: 20,
  },

  mrTop30: {
    marginTop: 30,
  },

  mrTop40: {
    marginTop: 40,
  },

  mrTop15: {
    marginTop: 15,
  },

  mrTop10: {
    marginTop: 10,
  },

  mrBot10: {
    marginBottom: 10,
  },

  mrBot15: {
    marginBottom: 15,
  },

  mrBot20: {
    marginBottom: 20,
  },

  mr10: {
    margin: 10,
  },

  mr15: {
    margin: 15,
  },

  mr5: {
    margin: 5,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  containerRelative: {
    position: "relative",
  },

  contaienerAbs: {
    position: "absolute",
  },

  boderRadius10: {
    borderRadius: 10,
  },

  mediumText: {
    fontSize: 17,
  },

  centerText: {
    textAlign: "center",
  },

  w90: {
    width: "80%",
  },

  ml5: {
    marginLeft: "10%",
  },

  whiteScreen: {
    flex: 1,
    backgroundColor: "white",
  },

  container: {
    width: "100%",
    height: "auto",
  },

  boderFullTop10: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
