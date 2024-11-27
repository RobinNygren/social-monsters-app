import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Slot } from "expo-router";

const Tab = createBottomTabNavigator();

export default function TabsLayout() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="feed" options={{ title: "Feed" }} component={Slot} />
      <Tab.Screen
        name="monsters"
        options={{ title: "Monsters" }}
        component={Slot}
      />
      <Tab.Screen name="post" options={{ title: "Post" }} component={Slot} />
    </Tab.Navigator>
  );
}
