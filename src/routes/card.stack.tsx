import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { getHeaderTitle } from "@react-navigation/elements";
// pages
import { CardManagement } from "@/pages/Main/CardManagement";
import { AddCard } from "@/pages/Secundary/Card/AddCard";
import { HeaderStack } from "@/components/HeaderStack";
import { CardMenu } from "@/pages/Secundary/Card/CardMenu";
import { UpdateCard } from "@/pages/Secundary/Card/UpdateCard";
import { StackParamsList } from "@/@types/card.stack";


const Stack = createNativeStackNavigator<StackParamsList>();


export function CardStack(){
	return(
		<Stack.Navigator
			screenOptions={{
				statusBarStyle: "light",
				animationTypeForReplace: "push",
				animation: Platform.OS === "ios" ? "simple_push" : "slide_from_right",

				header: ({navigation, route, options}) => {
					const title = getHeaderTitle(options, route.name);
					return <HeaderStack title={title} navigation={() => navigation.goBack()} {...options}/>;
				}
			}}
		>
			<Stack.Screen 
				name="Index" 
				component={CardManagement} 
				options={{title: "Gerenciar cartões", headerShown: false}}
			/>
			<Stack.Screen 
				name="AddCard" 
				component={AddCard} 
				options={{title: "Adicionar cartão"}}
			/>
			<Stack.Screen 
				name="CardMenu" 
				component={CardMenu} 
				options={{title: "Cartão"}}
			/>
			<Stack.Screen 
				name="UpdateCard" 
				component={UpdateCard} 
				options={{title: "Atualizar cartão"}}
			/>
		</Stack.Navigator>
	);
}


