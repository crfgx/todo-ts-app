import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors";
export default StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: Colors.floatingButtonColor,
    borderRadius: 50,
    height: 70,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    right: 40,
    bottom: 70,
  },
  icon: {
    fontSize: 50,
    color: Colors.defaultWhiteColor,
  },
});
