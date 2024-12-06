import React, { useState } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function Momentos() {
  const [images, setImages] = useState([]);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImages([...images, { uri: result.uri, date: new Date().toLocaleString() }]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Momentos</Text>
      <Button title="Seleccionar Foto" onPress={pickImage} />
      {images.map((image, index) => (
        <View key={index} style={styles.imageContainer}>
          <Image source={{ uri: image.uri }} style={styles.image} />
          <Text>{image.date}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 10 },
  imageContainer: { marginTop: 10, alignItems: "center" },
  image: { width: 200, height: 200 },
});
