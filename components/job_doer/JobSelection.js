import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";

const JobSelectionPage = ({ navigation }) => {
  const jobOptions = [
    {
      id: 1,
      title: "Deliver goods",
      image: require("../../assets/job_selection/deliver_grocery.jpeg")
    },
    {
      id: 2,
      title: "Buy and deliver good",
      image: require("../../assets/job_selection/manager.jpeg")
    },
    {
      id: 3,
      title: "Book A Ticket",
      image: require("../../assets/job_selection/book_ticket.jpeg")
    },
    {
      id: 4,
      title: "Event manager",
      image: require("../../assets/job_selection/event_manager.jpeg")
    },
    {
      id: 5,
      title: "Assignment",
      image: require("../../assets/job_selection/assignment.jpeg")
    },
    {
      id: 6,
      title: "Clean lawn",
      image: require("../../assets/job_selection/clean_lawn.jpeg")
    },
    {
      id: 7,
      title: "Wash vehicle",
      image: require("../../assets/job_selection/wash_vehicle.jpeg")
    },
    {
      id: 8,
      title: "Labour",
      image: require("../../assets/job_selection/graphic_designer2.jpeg")
    },
    {
      id: 9,
      title: "Graphic Design",
      image: require("../../assets/job_selection/graphic_designer.jpeg")
    },
    {
      id: 10,
      title: "IT Service",
      image: require("../../assets/job_selection/it_service.jpeg")
    }
  ];

  const handleJobOptionPress = () => {
    // Handle the job option selection
    navigation.navigate("JobFeedPage");
    // console.log(`Selected job option: ${jobOption.title}`);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.jobOptionsContainer}>
        {jobOptions.map((jobOption) => (
          <TouchableOpacity
            key={jobOption.id}
            style={styles.jobOptionCard}
            onPress={handleJobOptionPress}
          >
            <Image source={jobOption.image} style={styles.jobImage} />
            <Text style={styles.jobTitle}>{jobOption.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  jobOptionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 24
  },
  jobOptionCard: {
    width: "45%",
    alignItems: "center",
    marginVertical: 12
  },
  jobImage: {
    width: 80,
    height: 80
  },
  jobTitle: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "bold"
  }
});

export default JobSelectionPage;
