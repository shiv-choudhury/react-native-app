import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Styles from "../../style";

const DoJob = () => {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Do a Job</Text>
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
          <TouchableOpacity>
            <Image
              style={Styles.image}
              source={require("../../assets/dashboard/do_a_job.jpeg")}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, marginTop: 10 }}>Do a Job</Text>
        </View>
      </View>
    </View>
  );
};

export default DoJob;
