import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const FindOnMap = () => {
  const jobDoers = [
    { id: 1, name: "Chachi 420", available: true },
    { id: 2, name: "Shiv", available: false },
    { id: 3, name: "Nikhil", available: true }
  ];

  const handleJobDoerPress = (jobDoer) => {
    console.log(`Selected job doer: ${jobDoer.name}`);
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <View style={styles.jobDoersContainer}>
        {jobDoers.map((jobDoer) => (
          <TouchableOpacity
            key={jobDoer.id}
            style={styles.jobDoerCard}
            onPress={() => handleJobDoerPress(jobDoer)}
          >
            <Image
              source={{ uri: jobDoer.profilePicture }}
              style={styles.profilePicture}
            />
            <View style={styles.jobDoerInfo}>
              <Text style={styles.name}>{jobDoer.name}</Text>
              <Text
                style={[
                  styles.availability,
                  jobDoer.available ? styles.available : styles.notAvailable
                ]}
              >
                {jobDoer.available ? "Available" : "Not Available"}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  },
  jobDoersContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    padding: 16
  },
  jobDoerCard: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  jobDoerInfo: {
    flex: 1,
    marginLeft: 16
  },
  name: {
    fontSize: 16,
    fontWeight: "bold"
  },
  availability: {
    fontSize: 14
  },
  available: {
    color: "green"
  },
  notAvailable: {
    color: "red"
  }
});

export default FindOnMap;
