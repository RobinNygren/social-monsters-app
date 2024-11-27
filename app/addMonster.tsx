import { View, Text, TextInput, Button } from "react-native";

export default function AddMonster() {
  return (
    <View>
      <Text>Add a New Monster</Text>
      <TextInput placeholder="Name" />
      <TextInput placeholder="Color" />
      <TextInput placeholder="Bio" />
    </View>
  );
}
