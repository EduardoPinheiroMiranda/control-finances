import { createDrawerNavigator } from "@react-navigation/drawer";
import { DefaultTheme, useTheme } from "styled-components/native";
import { getHeaderTitle } from "@react-navigation/elements";
// pages
import { Home } from "@/pages/Home";
import { Movements } from "@/pages/Movements";
// icons
import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
// components
import { Header } from "@/components/Header";


const Drawer = createDrawerNavigator();


export function DrawerNavigation(){

	const theme: DefaultTheme = useTheme();


	return(
		<Drawer.Navigator 
			screenOptions={{

				drawerStyle: { paddingTop: 50 },

				drawerActiveTintColor: theme.colors.SECONDARY,
				drawerInactiveTintColor: theme.colors.FONT_COLOR_PRIMARY,
				
				drawerLabelStyle: { 
					fontSize: 20,
					marginLeft: 10
				},

				
				header: ({navigation, route, options}) => {
					const title = getHeaderTitle(options, route.name);
					return <Header title={title} navigation={navigation.openDrawer} {...options}/>;
				}
			}}
		>
			<Drawer.Screen name="Home" component={Home} options={{
				drawerIcon: ({color}) => (
					<Octicons name="home" size={25} color={color} />
				)
			}}/>
			<Drawer.Screen name="Movements" component={Movements} options={{
				drawerIcon: ({color}) => (
					<FontAwesome6 name="arrow-right-arrow-left" size={25} color={color} />
				)
			}}/>
		</Drawer.Navigator>
	);
}