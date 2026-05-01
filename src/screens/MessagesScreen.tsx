import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { messages, categories, Message } from "../data/messages";

export default function MessagesScreen({ route }: any) {
  const { categoryId, categoryName } = route.params;
  const category = categories.find((c) => c.id === categoryId);
  const [messageList, setMessageList] = useState<Message[]>(messages[categoryId] || []);
  const [inputText, setInputText] = useState("");

  const sendMessage = () => {
    const text = inputText.trim();
    if (!text) return;
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const period = hours >= 12 ? "PM" : "AM";
    const displayHours = hours % 12 || 12;
    const newMsg: Message = {
      id: Date.now().toString(),
      sender: "Me",
      content: text,
      time: `${displayHours}:${minutes} ${period}`,
    };
    setMessageList([newMsg, ...messageList]);
    setInputText("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={90}
      >
        <View style={styles.header}>
          <View style={[styles.headerIcon, { backgroundColor: category?.color }]}>
            <Ionicons name={category?.icon as any} size={24} color="#fff" />
          </View>
          <Text style={styles.headerTitle}>{categoryName}</Text>
        </View>
        <FlatList
          data={messageList}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <View style={styles.messageCard}>
              <View style={styles.messageHeader}>
                <Text style={styles.sender}>{item.sender}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
              <Text style={styles.content}>{item.content}</Text>
            </View>
          )}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            value={inputText}
            onChangeText={setInputText}
            onSubmitEditing={sendMessage}
            returnKeyType="send"
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Ionicons name="send" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F7",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
  },
  headerIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  list: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  messageCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  messageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  sender: {
    fontSize: 17,
    fontWeight: "600",
    color: "#1C1C1E",
  },
  time: {
    fontSize: 13,
    color: "#8E8E93",
  },
  content: {
    fontSize: 15,
    color: "#3C3C43",
    lineHeight: 22,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#E5E5EA",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F2F2F7",
    paddingHorizontal: 16,
    fontSize: 15,
  },
  sendButton: {
    marginLeft: 8,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
  },
});
