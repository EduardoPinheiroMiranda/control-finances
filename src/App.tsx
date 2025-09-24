import { NavigationContainer } from "@react-navigation/native";
import { 
	useFonts,
	Roboto_400Regular,
	Roboto_500Medium,
	Roboto_600SemiBold,
	Roboto_700Bold,
	Roboto_800ExtraBold,
	Roboto_900Black
} from "@expo-google-fonts/roboto";
import { ActivityIndicator, StatusBar } from "react-native";
import { SignIn } from "./pages/signIn";
import { ThemeProvider } from "styled-components/native";
import light from "./theme/light";


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
				<StatusBar hidden={true}/>
				<SignIn/>
			</NavigationContainer>
		</ThemeProvider>
	);
}
