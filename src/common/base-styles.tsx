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

  boderCircle: {
    borderRadius: 100,
  },

  mediumText: {
    fontSize: 17,
  },

  fz12: {
    fontSize: 12,
  },

  centerText: {
    textAlign: "center",
  },

  centerBlock: {
    justifyContent: "center",
    alignItems: "center",
  },

  w80: {
    width: "80%",
  },

  w70: {
    width: "70%",
  },

  w65: {
    width: "65%",
  },

  w60: {
    width: "60%",
  },

  w90: {
    width: "90%",
  },

  w20: {
    width: "20%",
  },

  w30: {
    width: "30%",
  },

  w40: {
    width: "40%",
  },

  ml10: {
    marginLeft: "10%",
  },

  ml5: {
    marginLeft: "5%",
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

  bgTest: {
    backgroundColor: "blue",
  },

  boldText: {
    fontWeight: "bold",
    color: "#000",
  },
});
