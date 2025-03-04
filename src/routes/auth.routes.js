import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "../pages/signIn/styles";


export function AuthRoutes(){

    const Stack = createNativeStackNavigator();


    return(
        <Stack.Navigator>
            <Stack.Screen
                name="signIn"
                component={SignIn}
            />
        </Stack.Navigator>
    );
}