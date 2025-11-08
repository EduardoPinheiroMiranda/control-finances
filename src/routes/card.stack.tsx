import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { getHeaderTitle } from "@react-navigation/elements";
// pages
import { CardManagement } from "@/pages/Main/CardManagement";
import { AddCard } from "@/pages/Secundary/AddCard";
import { HeaderStack } from "@/components/HeaderStack";


const Stack = createNativeStackNavigator();


export function CardStack(){
	return(
		<Stack.Navigator
			screenOptions={{
				statusBarStyle: "light",
				animationTypeForReplace: "push",
				animation: Platform.OS === "ios" ? "simple_push" : "slide_from_right",

				header: ({navigation, route, options}) => {
					const title = getHeaderTitle(options, route.name);
					return <HeaderStack title={title} navigation={navigation.goBack} {...options}/>;
				}
			}}
		>
			<Stack.Screen 
				name="index" 
				component={CardManagement} 
				options={{title: "Gerenciar cartões", headerShown: false}}
			/>
			<Stack.Screen 
				name="AddCard" 
				component={AddCard} 
				options={{title: "Adicionar cartão"}}
			/>
		</Stack.Navigator>
	);
}


