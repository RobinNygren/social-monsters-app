import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import apiClient from "../apiClient";
import { Post } from "../types";

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await apiClient.get<Post[]>("/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Posts</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.postCard}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.text}</Text>
            <Text style={styles.commentsHeader}>Kommentarer:</Text>
            {item.comments.map((comment) => (
              <Text key={comment.id} style={styles.comment}>
                - {comment.text}
              </Text>
            ))}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  postCard: { padding: 10, borderBottomWidth: 1, borderColor: "#ccc" },
  title: { fontSize: 18, fontWeight: "bold" },
  commentsHeader: { fontWeight: "bold", marginTop: 10 },
  comment: { fontStyle: "italic", marginLeft: 10 },
});
