import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const JobFeedPage = ({ navigation }) => {
  const handleJobRolePress = (jobRole) => {
    // Handle the job role selection
    console.log(`Selected job role: ${jobRole}`);
  };

  const handleChatWithOwnerPress = () => {
    // Handle the "Chat With Owner" button press
    console.log("Chatting with owner...");
    navigation.navigate("ChatScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home With new selected job feed</Text>
      <View style={styles.jobRolesContainer}>
        <TouchableOpacity
          style={styles.jobRoleOption}
          onPress={() => handleJobRolePress("Job doer")}
        >
          <Image
            source={require("../../assets/dashboard/do_a_job.jpeg")}
            style={styles.jobRoleImage}
          />
          <Text style={styles.jobRoleTitle}>Job doer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.jobRoleOption}
          onPress={() => handleJobRolePress("Job giver")}
        >
          <Image
            source={require("../../assets/dashboard/give_a_job.jpeg")}
            style={styles.jobRoleImage}
          />
          <Text style={styles.jobRoleTitle}>Job giver</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.recentJobsContainer}>
        <Text style={styles.sectionTitle}>Recent Job</Text>
        <TouchableOpacity style={styles.recentJob}>
          <Image
            source={require("../../assets/job_selection/graphic_designer.jpeg")}
            style={styles.recentJobImage}
          />
          <Text style={styles.recentJobTitle}>Assignment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.recentJob}>
          <Image
            source={require("../../assets/job_selection/assignment.jpeg")}
            style={styles.recentJobImage}
          />
          <Text style={styles.recentJobTitle}>Buy and deliver good</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.recentJob}>
          <Image
            source={require("../../assets/job_selection/clean_lawn.jpeg")}
            style={styles.recentJobImage}
          />
          <Text style={styles.recentJobTitle}>Clean lawn</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.chatButton}
        onPress={handleChatWithOwnerPress}
      >
        <Text style={styles.chatButtonText}>Chat With Owner</Text>
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16
  },
  jobRolesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24
  },
  jobRoleOption: {
    alignItems: "center"
  },
  jobRoleImage: {
    width: 80,
    height: 80
  },
  jobRoleTitle: {
    marginTop: 8,
    fontSize: 16
  },
  recentJobsContainer: {
    marginBottom: 24
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8
  },
  recentJob: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8
  },
  recentJobImage: {
    width: 50,
    height: 50,
    marginRight: 12
  },
  recentJobTitle: {
    fontSize: 14
  },
  chatButton: {
    backgroundColor: "blue",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center"
  },
  chatButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default JobFeedPage;
