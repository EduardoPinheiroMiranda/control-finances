import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "../pages/signIn";


export function AuthRoutes(){

    const Stack = createNativeStackNavigator();


    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="signIn"
                component={SignIn}
            />
        </Stack.Navigator>
    );
}