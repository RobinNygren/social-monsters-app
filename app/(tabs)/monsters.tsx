import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Monsters() {
  const router = useRouter();

  return (
    <View>
      <Text>Monsters List</Text>
      <Button
        title="Go to Monster Details"
        onPress={() => router.push("/monster")}
      />
    </View>
  );
}
