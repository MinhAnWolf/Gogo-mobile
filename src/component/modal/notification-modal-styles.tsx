import { StyleSheet } from "react-native";

export const NotiModalStyles = StyleSheet.create({
  containerModal: {
    width: 200,
    height: 300,
    backgroundColor: "rgb(245, 245, 245)",
  },

  title: {
    width: "80%",
    marginLeft: "10%",
    fontSize: 20,
    fontWeight: "bold",
    color: "rgb(245, 153, 12)",
  },

  imgContainer: {
    width: "100%",
    height: 150,
    backgroundColor: "green",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  message: {
    width: "90%",
    marginLeft: "5%",
  },

  btn: {
    width: "80%",
    height: 40,
    backgroundColor: "rgb(245, 153, 12)",
    marginLeft: "10%",
    justifyContent: "center",
  },

  nameBtn: {
    color: "white",
    fontSize: 15,
  },

  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
