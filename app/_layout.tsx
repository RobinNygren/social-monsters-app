import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SwitchAccount from "./switchAccount";
import AddMonster from "./addMonster";
import NotFoundScreen from "./+not-found";
import Feed from "./(tabs)/feed";
import Monsters from "./(tabs)/monsters";
import PostScreen from "./(tabs)/post";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// TabsLayout för flikarna
function TabsLayout() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Monsters" component={Monsters} />
      <Tab.Screen name="Post" component={PostScreen} />
    </Tab.Navigator>
  );
}

// DrawerNavigator för meny
function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        options={{ title: "Home" }}
        component={TabsLayout}
      />
      <Drawer.Screen
        name="switchAccount"
        options={{ title: "Switch Account" }}
        component={SwitchAccount}
      />
      <Drawer.Screen
        name="addMonster"
        options={{ title: "Add Monster" }}
        component={AddMonster}
        path="addMonster"
      />
      {/* <Drawer.Screen
        name="monster"
        options={{ title: "Monster Details" }}
        component={Monster}
      /> */}
    </Drawer.Navigator>
  );
}

// Root StackNavigator
export default function RootLayout() {
  return (
    <Stack.Navigator>
      {/* DrawerNavigator som huvudnavigering */}
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      {/* Fallback för ogiltiga rutter */}
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "404 - Not Found" }}
      />
      <Stack.Screen name="*" component={NotFoundScreen} />
    </Stack.Navigator>
  );
}
