import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { Post, PostRouteParams } from "../types/types";
import apiClient from "../utils/apiClient";

export default function PostScreen() {
  const route = useRoute<RouteProp<{ params: PostRouteParams }, "params">>();
  const { id } = route.params;

  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await apiClient.get<Post>(`/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Title: {post.title}</Text>
      <Text>{post.text}</Text>
      <Text>Likes: {post.likes}</Text>
      <Text>Comments:</Text>
      {post.comments.map((comment) => (
        <Text key={comment.id}>- {comment.text}</Text>
      ))}
    </View>
  );
}
