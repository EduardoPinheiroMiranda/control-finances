import { createDrawerNavigator } from "@react-navigation/drawer";
import { DefaultTheme, useTheme } from "styled-components/native";
import { getHeaderTitle } from "@react-navigation/elements";
import { DrawerParamList } from "@/@types/drawer.routes";
// icons
import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
// components
import { HeaderDrawer } from "@/components/HeaderDrawer";
// pages
import { Home } from "@/pages/Main/Home";
import { Movements } from "@/pages/Main/Movements";
import { AddPurchase } from "@/pages/Main/AddPurchase";
import { InvoiceDetails } from "@/pages/Main/InvoiceDetails";
import { PayInvoice } from "@/pages/Main/PayInvoice";
import { InvoiceSummary } from "@/pages/Main/InvoiceSummary";
import { LimitControl } from "@/pages/Main/LimitControl";
import { Wallet } from "@/pages/Main/Wallet";
import { ManageReleases } from "@/pages/Main/ManageReleases";
import { CardStack } from "./card.stack";


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
					return <HeaderDrawer title={title} navigation={navigation.openDrawer} {...options}/>;
				}
			}}
		>
			<Drawer.Screen name="Home" component={Home} options={{
				headerShown: false,
				drawerIcon: ({color}) => (
					<Octicons name="home" size={20} color={color} />
				)
			}}/>
			<Drawer.Screen name="Movements" component={Movements} options={{
				title: "Movimentos",
				drawerIcon: ({color}) => (
					<FontAwesome6 name="arrow-right-arrow-left" size={20} color={color} />
				)
			}}/>
			<Drawer.Screen name="InvoiceDetails" component={InvoiceDetails} options={{
				title: "Detalhes da fatura",
				drawerIcon: ({color}) => (
					<Octicons name="graph" size={20} color={color} />
				)
			}}/>
			<Drawer.Screen name="PayInvoice" component={PayInvoice} options={{
				title: "Pagar fatura",
				drawerIcon: ({color}) => (
					<MaterialCommunityIcons name="barcode-scan" size={20} color={color} />
				)
			}}/>
			<Drawer.Screen name="InvoiceSummary" component={InvoiceSummary} options={{
				title: "Resumo de faturas",
				drawerIcon: ({color}) => (
					<MaterialCommunityIcons name="invoice-text-multiple-outline" size={20} color={color} />
				)
			}}/>
			<Drawer.Screen name="AddPurchase" component={AddPurchase} options={{
				title: "Adicionar compra",
				drawerIcon: ({color}) => (
					<MaterialIcons name="add-shopping-cart" size={20} color={color} />
				)
			}}/>
			<Drawer.Screen name="ManageReleases" component={ManageReleases} options={{
				title: "Gerenciar lançamentos",
				drawerIcon: ({color}) => (
					<MaterialCommunityIcons name="shopping-search-outline" size={20} color={color} />
				)
			}}/>
			<Drawer.Screen name="LimitControl" component={LimitControl} options={{
				title: "Controlar limite",
				drawerIcon: ({color}) => (
					<AntDesign name="control" size={20} color={color} />
				)
			}}/>
			<Drawer.Screen name="CardManagement" component={CardStack} options={{
				title: "Gerenciar cartões",
				headerShown: false,
				drawerIcon: ({color}) => (
					<MaterialCommunityIcons name="credit-card-edit-outline" size={20} color={color} />
				)
			}}/>
			<Drawer.Screen name="Wallet" component={Wallet} options={{
				title: "Carteira",
				drawerIcon: ({color}) => (
					<Ionicons name="wallet-outline" size={20} color={color} />
				)
			}}/>
		</Drawer.Navigator>
	);
}