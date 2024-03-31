import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native-gesture-handler";
import Styles from "./style";

const RegisterPage = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!username || !email || !password) {
      Alert.alert("Error", "All fields are required");
      return;
    }

    try {
      // Store user data in AsyncStorage
      await AsyncStorage.setItem(
        "userData",
        JSON.stringify({ username, email, password })
      );
      navigation.navigate("LoginPage");
    } catch (error) {
      console.error("Error storing user data:", error);
    }
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.form}>
        <TextInput
          style={Styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={Styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={Styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <TouchableOpacity style={Styles.button} onPress={handleRegister}>
          <Text style={Styles.text}>Register</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate("LoginPage")}>
            <Text style={{ textDecorationLine: "underline", color: "#007bff" }}>
              Already Registered Login here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterPage;
