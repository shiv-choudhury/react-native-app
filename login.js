import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native-gesture-handler";
import Styles from "./style";

const LoginPage = ({ navigation }) => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!usernameOrEmail || !password) {
      Alert.alert("Error", "All fields are required");
      return;
    }

    try {
      // Retrieve user data from AsyncStorage
      const userDataJSON = await AsyncStorage.getItem("userData");
      console.log("userDataJSON", userDataJSON);
      if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);
        if (
          (userData.username === usernameOrEmail ||
            userData.email === usernameOrEmail) &&
          userData.password === password
        ) {
          // Authentication successful
          console.log("Login successful:", userData);
          navigation.navigate("Dashboard");
        } else {
          // Authentication failed
          Alert.alert("Error", "Invalid username/email or password");
        }
      } else {
        // No user data found
        Alert.alert("Error", "No registered user found");
      }
    } catch (error) {
      console.error("Error retrieving user data:", error);
    }
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.form}>
        <TextInput
          style={Styles.input}
          placeholder="Username or Email"
          value={usernameOrEmail}
          onChangeText={(text) => setUsernameOrEmail(text)}
        />
        <TextInput
          style={Styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <TouchableOpacity style={Styles.button} onPress={handleLogin}>
          <Text style={Styles.text}>Login</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate("RegisterPage")}>
            <Text style={{ textDecorationLine: "underline", color: "#007bff" }}>
              Don't have an account? Create new account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginPage;
