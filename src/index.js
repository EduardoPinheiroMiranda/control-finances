import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts} from "@expo-google-fonts/roboto";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar"
import { Routes } from "./routes";


SplashScreen.preventAutoHideAsync();


export default function App() {

  const [loaded, error] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })


  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }


  return (
    <NavigationContainer>
      <StatusBar style="light"/>
      <Routes/>
    </NavigationContainer>
  );
}


