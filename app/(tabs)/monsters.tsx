import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import apiClient from "../apiClient";
import { Monster } from "../types";

export default function Monsters() {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const response = await apiClient.get<Monster[]>("/monsters");
        setMonsters(response.data);
      } catch (error) {
        console.error("Error fetching monsters:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMonsters();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Monster List</Text>
      <FlatList
        data={monsters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.monsterCard}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>Color: {item.color}</Text>
            <Text>Eyes: {item.eyes}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  monsterCard: { padding: 10, borderBottomWidth: 1, borderColor: "#ccc" },
  name: { fontSize: 18, fontWeight: "bold" },
});
