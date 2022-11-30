import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../styles/Colors";

const deviceSize = Dimensions.get("window");
export default StyleSheet.create({
  modalContainer: {
    justifyContent: "flex-end",
    margin: 0,
  },
  innerContainer: {
    backgroundColor: Colors.modalColor,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: deviceSize.height / 2.5,
    padding: 30,
  },
  input: {
    borderWidth: 2,
    borderRadius: 30,
    borderColor: Colors.defaultGreyColor,
    marginTop: 50,
    fontFamily: "Helvetica",
    fontSize: 16,
    padding: 20,
  },
  buttonContainer: {
    backgroundColor: Colors.defaultGreyColor,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 50,
  },
  buttonPlaceHolder: {
    color: Colors.defaultWhiteColor,
    fontFamily: "Helvetica",
    fontSize: 20,
    padding: 5,
  },
});
