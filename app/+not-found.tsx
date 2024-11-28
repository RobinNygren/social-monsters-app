import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "./types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function NotFoundScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "Home">>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>404 - Page Not Found</Text>
      <Button
        title="Go Home"
        onPress={() => navigation.navigate("Home")} // Navigera till "Home" i din DrawerNavigator
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "bold" },
});
