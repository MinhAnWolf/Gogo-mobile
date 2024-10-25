import { StyleSheet } from "react-native";

export const BaseStyles = StyleSheet.create({
  // Column custom.
  flexCollumn: {
    flex: 1,
    flexDirection: "column",
  },

  // Row custom.
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  rowFlexStart: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  rowFlexEnd: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  spaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  // Justify content.
  jusContentCenter: {
    justifyContent: "center",
  },

  // Align Item.
  alignCenter: {
    alignItems: "center",
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

  // Conainer custom styles.
  container: {
    width: "100%",
    height: "auto",
  },
  containerP20: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerContainer: {
    width: "100%",
    height: 100,
  },
  bodyContainer: {
    width: "100%",
    height: 100,
  },
  // Text input custom.
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
  inputArea: {
    borderWidth: 1,
    borderColor: "#9999",
    padding: 10,
    minHeight: 100,
    borderRadius: 5,
  },
  inputLine: {
    width: "100%",
    paddingTop: 6,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  inputBox: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gray",
    padding: 10,
    marginBottom: 10,
  },

  // Margin custom.
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
  mrTop5: {
    marginTop: 5,
  },
  mrTop10: {
    marginTop: 10,
  },

  mrBot10: {
    marginBottom: 10,
  },

  mrBot5: {
    marginBottom: 5,
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
  mrRight5: {
    marginRight: 5,
  },
  mrLeft5: {
    marginLeft: 5,
  },

  // Padding
  p10: {
    padding: 10,
  },
  p20: {
    padding: 20,
  },
  pt5: {
    paddingTop: 5,
  },
  pt10: {
    paddingTop: 10,
  },
  pt20: {
    paddingTop: 20,
  },
  pl20: {
    paddingLeft: 20,
  },
  pb20: {
    paddingBottom: 20,
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

  fz13: {
    fontSize: 13,
  },

  fz14: {
    fontSize: 14,
  },

  fz15: {
    fontSize: 15,
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
  fontWB: {
    fontWeight: "bold",
  },

  // Buttons custom.
  btn1: {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 100,
    // borderWidth: 2,
    // borderColor: "orange",
  },
  btn2: {
    padding: 10,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 10,
  },

  // Colors custom.
  bgMain: {
    backgroundColor: "orange",
  },
  colorMain: {
    color: "orange",
  },
  bgWhite: {
    backgroundColor: "white",
  },
  bgGray: {
    backgroundColor: "#9999",
  },
  colorGray: {
    color: "#9999",
  },

  //Titles custom.
  t4: {
    fontSize: 16,
  },
});
