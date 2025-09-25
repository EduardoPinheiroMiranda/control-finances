import { createStackNavigator } from "@react-navigation/stack";
import { StackParamList } from "@/@types/auth.routes";
// pages
import { SignIn } from "@/pages/signIn";
import { SignUp } from "@/pages/signUp";
import { Platform } from "react-native";


const Stack = createStackNavigator<StackParamList>();


export function AuthRoutes(){
	return(
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				animation: Platform.OS === "ios" ? "fade" : "slide_from_right"
			}}
		>
			<Stack.Screen name="signIn" component={SignIn}/>
			<Stack.Screen name="signUp" component={SignUp}/>
		</Stack.Navigator>
	);
}