import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("Botón presionado");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Creci</Text>
      <Text style={styles.subtitle}>(Tu acompañante en el arte de ser mamá)</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Empezar →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FCE4EC",
    padding: 20,
  },
  title: {
    fontSize: 36,
    color: "#D81B60",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#757575",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#D81B60",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
