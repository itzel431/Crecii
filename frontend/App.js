import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Diario from "./screens/Diario";
import Momentos from "./screens/Momentos";
import Salud from "./screens/Salud";
import Lactancia from "./screens/Lactancia";
import Crecimiento from "./screens/Crecimiento";
import WhatsApp from "./screens/WhatsApp";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: "#FCE4EC" },
          tabBarActiveTintColor: "#D81B60",
          tabBarInactiveTintColor: "#9E9E9E",
        }}
      >
        <Tab.Screen name="Diario" component={Diario} />
        <Tab.Screen name="Momentos" component={Momentos} />
        <Tab.Screen name="Salud" component={Salud} />
        <Tab.Screen name="Lactancia" component={Lactancia} />
        <Tab.Screen name="Crecimiento" component={Crecimiento} />
        <Tab.Screen name="WhatsApp" component={WhatsApp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
