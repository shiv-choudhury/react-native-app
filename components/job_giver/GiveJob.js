import React from "react";
import { Image, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Styles from "../../style";

const GiveJob = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.form}>
        <TextInput
          style={Styles.input}
          placeholder="Name"
          // value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={Styles.input}
          placeholder="Email"
          // value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={Styles.input}
          placeholder="Phone Number"
          // value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={Styles.input}
          placeholder="Task"
          // value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={Styles.input}
          placeholder="Description"
          // value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={Styles.input}
          placeholder="Wage"
          // value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          style={Styles.button}
          onPress={() => navigation.navigate("FindOnMap")}
        >
          <Text style={Styles.text}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GiveJob;
