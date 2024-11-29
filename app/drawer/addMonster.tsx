import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import apiClient from "../utils/apiClient";

export default function AddMonster() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [eyes, setEyes] = useState("");

  const addMonster = async () => {
    try {
      const response = await apiClient.post("/monsters", {
        name,
        color,
        eyes: parseInt(eyes, 10),
      });
      console.log("Monster added:", response.data);
      setName("");
      setColor("");
      setEyes("");
    } catch (error) {
      console.error("Error adding monster:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add a New Monster</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Color"
        value={color}
        onChangeText={setColor}
      />
      <TextInput
        style={styles.input}
        placeholder="Number of Eyes"
        value={eyes}
        onChangeText={setEyes}
        keyboardType="numeric"
      />
      <Button title="Add Monster" onPress={addMonster} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  input: { borderWidth: 1, padding: 8, marginBottom: 10, borderRadius: 4 },
});
