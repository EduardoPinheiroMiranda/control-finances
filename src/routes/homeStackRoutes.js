import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../pages/home";
import { Movements } from "../pages/Movements";
import { Platform } from "react-native";


const Stack = createNativeStackNavigator();


export function HomeStackRoutes(){


    return(
        <Stack.Navigator
            screenOptions={{
                animationTypeForReplace: "push",
                animation: Platform.OS === "ios" ? "simple_push" : "slide_from_right",
                // presentation: "card"
            }}
        >
            <Stack.Screen name="Inicio" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="Movimentações" component={Movements}/>
        </Stack.Navigator>
    );
}