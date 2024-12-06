import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";

export default function Diario() {
  const [entries, setEntries] = useState([]);
  const [text, setText] = useState("");

  const addEntry = () => {
    if (text.trim()) {
      setEntries([...entries, { id: Date.now().toString(), content: text }]);
      setText("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Diario</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe algo sobre tu bebé..."
        value={text}
        onChangeText={setText}
      />
      <Button title="Agregar" onPress={addEntry} />
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.entry}>
            <Text>{item.content}</Text>
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
  entry: { padding: 10, borderBottomWidth: 1, borderBottomColor: "#EEE" },
});
