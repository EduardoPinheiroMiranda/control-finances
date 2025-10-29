import { createDrawerNavigator } from "@react-navigation/drawer";
import { DefaultTheme, useTheme } from "styled-components/native";
import { getHeaderTitle } from "@react-navigation/elements";
import { DrawerParamList } from "@/@types/drawer.routes";
// pages
import { Home } from "@/pages/Home";
import { Movements } from "@/pages/Movements";
// icons
import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// components
import { Header } from "@/components/Header";
import { AddPurchase } from "@/pages/AddPurchase";


const Drawer = createDrawerNavigator<DrawerParamList>();


export function DrawerNavigation(){

	const theme: DefaultTheme = useTheme();


	return(
		<Drawer.Navigator 
			screenOptions={{

				drawerStyle: {
					paddingTop: 50,
					width: "70%"
				},

				drawerActiveTintColor: theme.colors.SECONDARY,
				drawerInactiveTintColor: theme.colors.FONT_COLOR_PRIMARY,
				
				drawerLabelStyle: { 
					fontSize: 16,
					marginLeft: 10
				},

				drawerStatusBarAnimation: "fade",

				
				header: ({navigation, route, options}) => {
					const title = getHeaderTitle(options, route.name);
					return <Header title={title} navigation={navigation.openDrawer} {...options}/>;
				}
			}}
		>
			<Drawer.Screen name="Home" component={Home} options={{
				headerShown: false,
				drawerIcon: ({color}) => (
					<Octicons name="home" size={25} color={color} />
				)
			}}/>
			<Drawer.Screen name="Movements" component={Movements} options={{
				title: "Movimentos",
				drawerIcon: ({color}) => (
					<FontAwesome6 name="arrow-right-arrow-left" size={25} color={color} />
				)
			}}/>
			<Drawer.Screen name="AddPurchase" component={AddPurchase} options={{
				title: "Adicionar compra",
				drawerIcon: ({color}) => (
					<MaterialIcons name="add-shopping-cart" size={25} color={color} />
				)
			}}/>
		</Drawer.Navigator>
	);
}