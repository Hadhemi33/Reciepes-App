import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 60,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 14,
  },
  background: {
    width: "100%",
    height: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bigTitle: {
    fontSize: 50,
    color: colors.white,
    paddingHorizontal: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  subtitle: {
    color: colors.white,
    textAlign: "center",
    fontSize: 16,
    marginBottom: 64,
    marginTop: 20,
  },
});
