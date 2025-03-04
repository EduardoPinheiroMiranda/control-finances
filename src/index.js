import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar"
import { Routes } from "./routes";


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light"/>
      <Routes/>
    </NavigationContainer>
  );
}


