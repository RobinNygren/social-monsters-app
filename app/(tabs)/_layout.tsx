import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Slot } from "expo-router";
import Feed from "./feed";
import Post from "./post";
import Monsters from "./monsters";

const Tab = createBottomTabNavigator();

export default function TabsLayout() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="feed" options={{ title: "Feed" }} component={Feed} />
      <Tab.Screen
        name="monsters"
        options={{ title: "Monsters" }}
        component={Monsters}
      />
      <Tab.Screen name="post" options={{ title: "Post" }} component={Post} />
    </Tab.Navigator>
  );
}
