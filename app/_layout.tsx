import { createDrawerNavigator } from "@react-navigation/drawer";
import SwitchAccount from "./switchAccount";
import AddMonster from "./addMonster";
import TabsLayout from "./(tabs)/_layout";

const Drawer = createDrawerNavigator();

export default function RootLayout() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="switchAccount"
        options={{ title: "Switch Account" }}
        component={SwitchAccount}
      />
      <Drawer.Screen
        name="Home"
        options={{ title: "Home" }}
        component={TabsLayout}
      />
      <Drawer.Screen
        name="addMonster"
        options={{ title: "Add Monster" }}
        component={AddMonster}
      />
      {/* <Drawer.Screen
        name="monster"
        options={{ title: "Monster Details" }}
        component={Monster}
      /> */}
    </Drawer.Navigator>
  );
}
