import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import MessagesScreen from "./src/screens/MessagesScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#F2F2F7" },
          headerTitleStyle: { fontWeight: "600", fontSize: 17 },
          headerTintColor: "#007AFF",
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Messages"
          component={MessagesScreen}
          options={({ route }: any) => ({
            title: route.params.categoryName,
            headerBackTitle: "Back",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
