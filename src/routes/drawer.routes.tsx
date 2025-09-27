import { Home } from "@/pages/home";
import { createDrawerNavigator } from "@react-navigation/drawer";


const Drawer = createDrawerNavigator();


export function DrawerNavigation(){
	return(
		<Drawer.Navigator>
			<Drawer.Screen name="home" component={Home}></Drawer.Screen>
		</Drawer.Navigator>
	);
}