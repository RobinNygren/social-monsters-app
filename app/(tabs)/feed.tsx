import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  Button,
} from "react-native";
import apiClient from "../apiClient";
import { Post, RootStackParamList } from "../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "expo-router";

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "Feed">>();

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

  const likePost = async (postId: number) => {
    try {
      const post = posts.find((p) => p.id === postId);
      if (!post) return;

      const response = await apiClient.patch(`/posts/${postId}`, {
        likes: post.likes + 1, // Öka likes
      });

      console.log("Post liked:", response.data);

      // Uppdatera lokala posts
      setPosts((prevPosts) =>
        prevPosts.map((p) =>
          p.id === postId ? { ...p, likes: response.data.likes } : p
        )
      );
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

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
          <Pressable
            onPress={() => navigation.navigate("Post", { id: item.id })} // Navigera till Post-skärmen med id
            style={styles.postCard}
          >
            <View style={styles.postCard}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.text}</Text>
              <Text>Likes: {item.likes || 0}</Text> {/* Visa antal likes */}
              <Button title="Like" onPress={() => likePost(item.id)} />{" "}
              {/* Gilla-knapp */}
              <Text style={styles.commentsHeader}>Comments:</Text>
              {item.comments.map((comment) => (
                <Text key={comment.id} style={styles.comment}>
                  - {comment.text}
                </Text>
              ))}
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  postCard: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
  },
  title: { fontSize: 18, fontWeight: "bold" },
  commentsHeader: { fontWeight: "bold", marginTop: 10 },
  comment: { fontStyle: "italic", marginLeft: 10 },
});
