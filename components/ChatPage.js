import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet
} from "react-native";
// import { AudioPlayer } from "react-native-audio-player-recorder";

const ChatScreen = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "Jhon Abraham",
      content: "Hello ! Nazrul How are you?",
      timestamp: "09:25 AM"
    },
    {
      sender: "You",
      content: "You did your job well!",
      timestamp: "09:25 AM"
    },
    {
      sender: "Jhon Abraham",
      content: "Have a great working week!!",
      timestamp: "09:25 AM",
      audioUrl:
        "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3"
    },
    {
      sender: "You",
      content: "Hope you like it",
      timestamp: "09:25 AM"
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([
        ...messages,
        {
          sender: "You",
          content: message,
          timestamp: "09:26 AM"
        }
      ]);
      setMessage("");
    }
  };

  // const handleAudioPlay = (audioUrl) => {
  //   // Play the audio message
  //   AudioPlayer.play(audioUrl);
  // };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>{"<"}</Text>
        </TouchableOpacity>
        <Image
          source={require("../assets/job_selection/manager.jpeg")}
          style={styles.profilePicture}
        />
        <Text style={styles.username}>Jhon Abraham</Text>
        <Text style={styles.status}>Active now</Text>
      </View>
      <View style={styles.chatContainer}>
        {messages.map((msg, index) => (
          <View
            key={index}
            style={[
              styles.messageContainer,
              msg.sender === "You" ? styles.myMessage : styles.otherMessage
            ]}
          >
            <Text style={styles.messageText}>{msg.content}</Text>
            {msg.audioUrl && (
              <TouchableOpacity onPress={() => handleAudioPlay(msg.audioUrl)}>
                {/* <AudioPlayer source={{ uri: msg.audioUrl }} /> */}
                <Text>Play Audio</Text>
              </TouchableOpacity>
            )}
            <Text style={styles.messageTimestamp}>{msg.timestamp}</Text>
          </View>
        ))}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.messageInput}
          value={message}
          onChangeText={setMessage}
          placeholder="Type a message"
          returnKeyType="send"
          onSubmitEditing={handleSendMessage}
        />
        <TouchableOpacity style={styles.microphoneButton}>
          <Text style={styles.microphoneButtonText}>🎙️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  backButton: {
    marginRight: 16
  },
  backButtonText: {
    fontSize: 24,
    fontWeight: "bold"
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 4
  },
  status: {
    fontSize: 14,
    color: "#666"
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  messageContainer: {
    marginVertical: 4,
    padding: 8,
    borderRadius: 8
  },
  myMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#dcf8c6"
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#f0f0f0"
  },
  messageText: {
    fontSize: 14
  },
  messageTimestamp: {
    fontSize: 12,
    color: "#666",
    textAlign: "right"
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#ccc"
  },
  messageInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 12
  },
  microphoneButton: {
    marginLeft: 8,
    padding: 8,
    borderRadius: 20,
    backgroundColor: "#f0f0f0"
  },
  microphoneButtonText: {
    fontSize: 20
  }
});

export default ChatScreen;
