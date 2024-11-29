import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import DrawerLayout from "./drawer/_layout";
import NotFoundScreen from "./+not-found";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <Stack.Navigator>
      {/* DrawerNavigator som huvudstruktur */}
      <Stack.Screen
        name="Drawer"
        component={DrawerLayout}
        options={{ headerShown: false }}
      />
      {/* 404 Fallback */}
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "404 - Not Found" }}
      />
    </Stack.Navigator>
  );
}
