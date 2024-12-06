import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";

export default function Salud() {
  const [healthData, setHealthData] = useState([]);
  const [input, setInput] = useState({
    alergias: "",
    leche: "",
    pañales: "",
    vacunas: "",
    medicamentos: "",
  });

  const addHealthRecord = () => {
    if (Object.values(input).some((value) => value.trim() === "")) return;

    setHealthData([
      ...healthData,
      { id: Date.now().toString(), ...input, date: new Date().toLocaleString() },
    ]);

    setInput({
      alergias: "",
      leche: "",
      pañales: "",
      vacunas: "",
      medicamentos: "",
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Salud del Bebé</Text>
      <TextInput
        style={styles.input}
        placeholder="Alergias"
        value={input.alergias}
        onChangeText={(text) => setInput({ ...input, alergias: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Tipo de leche"
        value={input.leche}
        onChangeText={(text) => setInput({ ...input, leche: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Tipo de pañales"
        value={input.pañales}
        onChangeText={(text) => setInput({ ...input, pañales: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Vacunas"
        value={input.vacunas}
        onChangeText={(text) => setInput({ ...input, vacunas: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Medicamentos"
        value={input.medicamentos}
        onChangeText={(text) => setInput({ ...input, medicamentos: text })}
      />
      <Button title="Guardar" onPress={addHealthRecord} />
      <FlatList
        data={healthData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.record}>
            <Text>{`Alergias: ${item.alergias}`}</Text>
            <Text>{`Leche: ${item.leche}`}</Text>
            <Text>{`Pañales: ${item.pañales}`}</Text>
            <Text>{`Vacunas: ${item.vacunas}`}</Text>
            <Text>{`Medicamentos: ${item.medicamentos}`}</Text>
            <Text>{`Fecha: ${item.date}`}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#FFF" },
  title: { fontSize: 24, marginBottom: 10 },
  input: { borderColor: "#CCC", borderWidth: 1, padding: 10, marginBottom: 10 },
  record: { padding: 10, borderBottomWidth: 1, borderBottomColor: "#EEE" },
});
