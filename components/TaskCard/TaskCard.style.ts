import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors";

const baseStyle = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
  },
  taskText: {
    fontFamily: "Helvetica",
    fontSize: 24,
  },
});

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.cardColor,
    ...baseStyle.container,
  },
  taskText: {
    color: Colors.defaultWhiteColor,
    ...baseStyle.taskText,
  },
  completedContainer: {
    backgroundColor: Colors.defaultGreyColor,
    ...baseStyle.container,
  },
  completedTaskText: {
    color: Colors.defaultWhiteColor,
    ...baseStyle.taskText,
    textDecorationLine: "line-through",
  },
});
