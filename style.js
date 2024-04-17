import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
    borderRadius: 16
  },
  container: {
    marginBottom: 20,
    flex: 1,
    // justifyContent: "center",
    alignItems: "center"
  },
  form: {
    width: "90%"
  },
  input: {
    marginTop: 20,
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10
  },
  button: {
    justifyContent: "center",
    height: 50,
    marginTop: 20,
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center"
  },
  headingStyle: {
    marginTop: 20,
    alignItems: "center"
  },
  heading: {
    justifyContent: "center",
    fontSize: 24,
    marginBottom: 20
  }
});

export default Styles;
