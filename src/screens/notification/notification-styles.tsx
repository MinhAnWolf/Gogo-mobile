import { StyleSheet } from "react-native";

export const NotificationStyles = StyleSheet.create({
  notificationContainer: {
    width: "90%",
    backgroundColor: "rgb(249, 249, 249)",
    marginLeft: "5%",
    marginTop: "5%",
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

  iconContainer: {
    width: "20%",
  },

  contentContainer: {
    width: "80%",
  },
});
