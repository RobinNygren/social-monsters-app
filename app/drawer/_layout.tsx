import { createDrawerNavigator } from "@react-navigation/drawer";
import TabsLayout from "../(tabs)/_layout";
import AddMonster from "./addMonster";
import SwitchAccount from "./switchAccount";

const Drawer = createDrawerNavigator();

export default function DrawerLayout() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        options={{ title: "Home" }}
        component={TabsLayout}
      />
      <Drawer.Screen
        name="AddMonster"
        options={{ title: "Add Monster" }}
        component={AddMonster}
      />
      <Drawer.Screen
        name="SwitchAccount"
        options={{ title: "Switch Account" }}
        component={SwitchAccount}
      />
    </Drawer.Navigator>
  );
}
