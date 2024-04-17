import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

const JobDoerInfoPage = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [wage, setWage] = useState("");

  const handleAcceptPress = () => {
    // Handle the job description submission
    console.log({
      name,
      phone,
      email,
      task,
      description,
      wage
    });
    navigation.navigate("JobSelectionPage");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Task</Text>
        <TextInput
          style={styles.input}
          value={task}
          onChangeText={setTask}
          placeholder="Enter the task"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Describe</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          value={description}
          onChangeText={setDescription}
          placeholder="Describe the task"
          multiline
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Wage</Text>
        <TextInput
          style={styles.input}
          value={wage}
          onChangeText={setWage}
          placeholder="Enter the wage"
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={styles.acceptButton} onPress={handleAcceptPress}>
        <Text style={styles.acceptText}>Accept</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 24
  },
  inputContainer: {
    marginVertical: 12
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12
  },
  multilineInput: {
    height: 100,
    textAlignVertical: "top"
  },
  acceptButton: {
    backgroundColor: "blue",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 24
  },
  acceptText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default JobDoerInfoPage;
