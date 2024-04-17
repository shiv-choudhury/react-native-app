import { useNetInfo } from "@react-native-community/netinfo";
import React from "react";
import { View, Text, Image, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

const DashboardPage = ({ navigation }) => {
  const netInfo = useNetInfo();

  const checkConnection = () => {
    if (netInfo.isConnected && netInfo.isInternetReachable) {
      Alert.alert("You are online!");
    } else {
      Alert.alert("You are offline!");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Dashboard</Text>
      <View
        style={{
          paddingTop: "50%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("JobDoerInfoPage")}
          >
            <Image
              style={Styles.image}
              source={require("../assets/dashboard/do_a_job.jpeg")}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, marginTop: 10 }}>Do a Job</Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("GiveJob")}>
            <Image
              style={Styles.image}
              source={require("../assets/dashboard/give_a_job.jpeg")}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, marginTop: 10 }}>Give a Job</Text>
        </View>
      </View>
    </View>
  );
};

export default DashboardPage;

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
