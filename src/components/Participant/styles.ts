import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    color: "#fff",
  },
  textContainer: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 16,
    justifyContent: "center",
    borderRadius: 5,
    height: 56,
    marginRight: 12,
    backgroundColor: "#1f1e25",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#E23C44",
    alignItems: "center",
    justifyContent: "center",
  },
});
