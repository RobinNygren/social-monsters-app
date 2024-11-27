import { Slot } from "expo-router";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function RootLayout() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="switchAccount"
        options={{ title: "Switch Account" }}
        component={Slot}
      />
      <Drawer.Screen
        name="(tabs)"
        options={{ title: "Home" }}
        component={Slot}
      />
      <Drawer.Screen
        name="addMonster"
        options={{ title: "Add Monster" }}
        component={Slot}
      />
      <Drawer.Screen
        name="monster"
        options={{ title: "Monster Details" }}
        component={Slot}
      />
    </Drawer.Navigator>
  );
}
