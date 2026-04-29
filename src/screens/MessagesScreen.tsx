import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { messages, categories } from "../data/messages";

export default function MessagesScreen({ route }: any) {
  const { categoryId, categoryName } = route.params;
  const categoryMessages = messages[categoryId] || [];
  const category = categories.find((c) => c.id === categoryId);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={[styles.headerIcon, { backgroundColor: category?.color }]}>
          <Ionicons name={category?.icon as any} size={24} color="#fff" />
        </View>
        <Text style={styles.headerTitle}>{categoryName}</Text>
      </View>
      <FlatList
        data={categoryMessages}
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
});
