import { StyleSheet } from "react-native";

const singlePStyle = StyleSheet.create({
  main: { flex: 1, marginLeft: 20, marginRight: 20 },
  header: {
    alignItems: "flex-start",
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  titleTxt: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "700",
  },
  postImgContainer: {
    height: 150,
    width: 350,
    backgroundColor: "#ccc",
    marginTop: 5,
    borderRadius: 10,
  },
  titleContainer: {
    marginLeft: 10,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
    alignItems: "center",
    marginTop: 5,
  },
  singleStat: {
    flexDirection: "row",
  },
  txt: {
    marginLeft: 5,
  },
});
export default singlePStyle;
