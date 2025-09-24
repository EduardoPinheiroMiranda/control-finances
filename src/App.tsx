import { NavigationContainer } from "@react-navigation/native";
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_600SemiBold, Roboto_700Bold, Roboto_800ExtraBold, Roboto_900Black } from "@expo-google-fonts/roboto";
import { ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import light from "./theme/light";
import { Routes } from "./routes";


export default function App() {

	const [fontsLoaderd] = useFonts({
		Roboto_400Regular,
		Roboto_500Medium,
		Roboto_600SemiBold,
		Roboto_700Bold,
		Roboto_800ExtraBold,
		Roboto_900Black
	});
  
  
	if (!fontsLoaderd) {
		return <ActivityIndicator size={30}/>;
	}


	return (
		<ThemeProvider theme={light}>
			<NavigationContainer>
				<StatusBar
					backgroundColor={light.colors.PRIMARY}
					style="auto"
					translucent={true}
				/>
				<Routes/>
			</NavigationContainer>
		</ThemeProvider>
	);
}
