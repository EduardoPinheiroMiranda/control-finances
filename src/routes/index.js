import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";


import { TabNavigator } from "./tabNavigator";
import { Movements } from "../pages/Movements";
import { colors } from "../themes";


const Stack = createNativeStackNavigator();


export function StackNavigator(){


    return(
        <Stack.Navigator
            screenOptions={{
                statusBarStyle: "light",
                animationTypeForReplace: "push",
                animation: Platform.OS === "ios" ? "simple_push" : "slide_from_right",
                
               
                headerTintColor: colors.color_8,
                headerTitleStyle: {
                    fontSize: 20,
                    fontWeight: "regular",
                  },
                headerStyle: {
                    backgroundColor: colors.color_3
                }
            }}
        >
            <Stack.Screen name="Inicio-stack" component={TabNavigator} options={{headerShown: false}}/>
            <Stack.Screen name="Movimentações" component={Movements}/>
        </Stack.Navigator>
    );
}

