import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Feed() {
  const router = useRouter();

  return (
    <View>
      <Text>Feed - All Monsters' Posts</Text>
      <Button title="Go to Post" onPress={() => router.push("/post")} />
    </View>
  );
}
