import React, { useState } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";

export default function Lactancia() {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [records, setRecords] = useState([]);

  const startTimer = () => {
    setStartTime(new Date());
    setEndTime(null);
  };

  const stopTimer = () => {
    if (startTime) {
      const end = new Date();
      const duration = Math.round((end - startTime) / 1000);
      setRecords([
        ...records,
        {
          id: Date.now().toString(),
          start: startTime.toLocaleTimeString(),
          end: end.toLocaleTimeString(),
          duration: `${duration} segundos`,
        },
      ]);
      setStartTime(null);
      setEndTime(end);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lactancia</Text>
      <Button title="Iniciar" onPress={startTimer} />
      <Button title="Detener" onPress={stopTimer} />
      <FlatList
        data={records}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.record}>
            <Text>{`Inicio: ${item.start}`}</Text>
            <Text>{`Fin: ${item.end}`}</Text>
            <Text>{`Duración: ${item.duration}`}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 10 },
  record: { padding: 10, borderBottomWidth: 1, borderBottomColor: "#EEE" },
});
