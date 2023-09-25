import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  content: {
    flex: 1,
    width: "100%",
    maxWidth: 550,
  },
  text: {
    color: "green",
  },
  card: {
    margin: 10,
    borderRadius: 7,
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    alignItems: "center",
  },
  cardImage: {
    resizeMode: "cover",
    height: 200,
    width: "100%",
    maxWidth: 500,
    borderRadius: 7,
    marginHorizontal: 5,
  },
  cardText: { color: "#0d3954" },
  cardTitle: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 5,
    color: "#0d3954",
  },
  timeBox: {
    backgroundColor: "#cddad8",
    borderRadius: 7,
    padding: 5,
    marginRight: 5,
    opacity: 0.5,
  },
  rowHeader: {
    marginTop: 10,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  row: {
    width: "100%",
    marginLeft: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
});
