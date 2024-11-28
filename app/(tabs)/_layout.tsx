import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "./feed";
import Monsters from "./monsters";
import PostScreen from "./post";

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
      <Tab.Screen
        name="Post"
        options={{ title: "PostScreen" }}
        component={PostScreen}
      />
    </Tab.Navigator>
  );
}
