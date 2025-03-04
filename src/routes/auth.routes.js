import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "../pages/signIn";
import { SignUp } from "../pages/signUp";
import { Platform } from "react-native";


export function AuthRoutes(){

    const Stack = createNativeStackNavigator();


    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animation: Platform.OS === "ios" ? "simple_push" : "slide_from_right",
            }}
            
        >
            <Stack.Screen name="signIn" component={SignIn}/>
            <Stack.Screen name="signUp" component={SignUp}/>
        </Stack.Navigator>
    );
}