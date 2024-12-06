import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";

export default function Crecimiento() {
  const [growthData, setGrowthData] = useState([]);
  const [input, setInput] = useState({ peso: "", estatura: "" });

  const addGrowthRecord = () => {
    if (Object.values(input).some((value) => value.trim() === "")) return;

    setGrowthData([
      ...growthData,
      { id: Date.now().toString(), ...input, date: new Date().toLocaleString() },
    ]);

    setInput({ peso: "", estatura: "" });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crecimiento</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        value={input.peso}
        onChangeText={(text) => setInput({ ...input, peso: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Estatura (cm)"
        value={input.estatura}
        onChangeText={(text) => setInput({ ...input, estatura: text })}
      />
      <Button title="Guardar" onPress={addGrowthRecord} />
      <FlatList
        data={growthData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.record}>
            <Text>{`Peso: ${item.peso} kg`}</Text>
            <Text>{`Estatura: ${item.estatura} cm`}</Text>
            <Text>{`Fecha: ${item.date}`}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 10 },
  input: { borderColor: "#CCC", borderWidth: 1, padding: 10, marginBottom: 10 },
  record: { padding: 10, borderBottomWidth: 1, borderBottomColor: "#EEE" },
});
