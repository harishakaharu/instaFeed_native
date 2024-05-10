import { StyleSheet } from "react-native";

const indexStyle = StyleSheet.create({
  main: { flex: 1 },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
    alignItems: "center",
  },
  icons: { padding: 14, backgroundColor: "#F9FAF8" },
  messageHeader: {
    position: "absolute",
    right: 2,
    top: 0,
  },
  messageCount: {
    backgroundColor: "#F35BAC",
    borderRadius: 6,
    paddingHorizontal: 3,
    fontSize: 6,
  },
});
export default indexStyle;
