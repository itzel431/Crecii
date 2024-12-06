import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Linking } from "react-native";

export default function WhatsApp() {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (number.trim() && message.trim()) {
      const url = `whatsapp://send?phone=${number}&text=${encodeURIComponent(
        message
      )}`;
      Linking.openURL(url).catch(() => alert("Asegúrate de tener WhatsApp instalado."));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WhatsApp</Text>
      <TextInput
        style={styles.input}
        placeholder="Número (incluye el código de país)"
        value={number}
        onChangeText={setNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Mensaje"
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Enviar" onPress={sendMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 10 },
  input: { borderColor: "#CCC", borderWidth: 1, padding: 10, marginBottom: 10 },
});
