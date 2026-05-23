import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { categories } from "../data/messages";

export default function HomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Messages</Text>
      <Text style={styles.subtitle}>Choose a directory</Text>
      <View style={styles.grid}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat.id}
            style={styles.item}
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate("Messages", {
                categoryId: cat.id,
                categoryName: cat.name,
              })
            }
          >
            <View style={[styles.circle, { backgroundColor: cat.color }]}>
              <Ionicons name={cat.icon as any} size={32} color="#fff" />
            </View>
            <Text style={styles.label}>{cat.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F7",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: "700",
    color: "#000",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 17,
    color: "#8E8E93",
    marginBottom: 40,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  item: {
    width: "45%",
    alignItems: "center",
    marginBottom: 32,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  label: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "600",
    color: "#1C1C1E",
  },
});
