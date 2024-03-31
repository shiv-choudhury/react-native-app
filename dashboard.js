import React from "react";
import { View, Text, Image } from "react-native";

const DashboardPage = () => {
  return (
    <View style={{ justifyContent: "center", width: "80%" }}>
      <Text>Ye le Nikhil tera dashboard</Text>
      <Image source={require("./assets/ohhmygod.gif")} />
    </View>
  );
};

export default DashboardPage;
