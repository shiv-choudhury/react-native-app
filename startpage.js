// StartPage.js
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Styles from "./style";

const StartPage = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate("LoginPage");
  };

  const handleRegister = () => {
    navigation.navigate("RegisterPage");
  };

  const domainName = "dev-pgi25t52e4kxj3sp.us.auth0.com";
  const cliendId = "j8VutB8SZsGdMCj3D3ooOUiLtCCV4mA3";

  return (
    <View style={Styles.container}>
      <View style={Styles.form}>
        <View style={Styles.headingStyle}>
          <Text style={Styles.heading}>Get started</Text>
        </View>
        <TouchableOpacity style={Styles.button} onPress={handleLogin}>
          <Text style={Styles.text}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.button} onPress={handleRegister}>
          <Text style={Styles.text}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.button}
          onPress={() => navigation.navigate("GoogleLogin")}
        >
          <Text style={Styles.text}>Google Login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text style={Styles.text}>Nahi karna merko login vigin</Text>
      </TouchableOpacity>
    </View>
  );
};

// const Styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   heading: {
//     fontSize: 24,
//     marginBottom: 20
//   },
//   buttonContainer: {
//     marginVertical: 10,
//     width: "80%"
//   }
// });

export default StartPage;
