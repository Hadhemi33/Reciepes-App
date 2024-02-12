import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
export default StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    // margin: 10,
    borderRadius: 10,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
});
