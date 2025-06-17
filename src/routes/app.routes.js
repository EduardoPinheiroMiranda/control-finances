import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colorPattern } from "../themes";
import { Platform } from "react-native";


// pages
import { TabRoutes } from "./tab.routes";
import { Movements } from "../pages/Movements";
import { ExpenseAnalysis } from "../pages/expenseAnalysis";
import { Profile } from "../pages/profile";
import { UpdateProfile } from "../pages/UpdateProfile";
import { UpdatePassword } from "../pages/UpdatePassword";
import { AddPurchase } from "../pages/addPurchase";
import { InvoicesSummary } from "../pages/invoicesSummary";
import { PayInvoice } from "../pages/payInvoice";


const Stack = createNativeStackNavigator();


export function AppRoutes(){


    return(
        <Stack.Navigator
            screenOptions={{
                statusBarStyle: "light",
                animationTypeForReplace: "push",
                animation: Platform.OS === "ios" ? "simple_push" : "slide_from_right",
                
               
                headerTintColor: colorPattern.white_800,
                headerTitleStyle: {
                    fontSize: 20,
                    fontWeight: "regular",
                  },
                headerStyle: {
                    backgroundColor: colorPattern.blue_300,
                    height: 80
                }
            }}
        >
            <Stack.Screen 
                name="tabNavigation" 
                component={TabRoutes} 
                options={{headerShown: false}}
            />
             <Stack.Screen 
                name="movements" 
                component={Movements} 
                options={{title: "Movimentações"}}
            />
            <Stack.Screen 
                name="expenseAnalysis" 
                component={ExpenseAnalysis} 
                options={{title: "Análise de gastos"}}
            />
            <Stack.Screen 
                name="profile" 
                component={Profile} 
                options={{title: "Perfil"}}
            />
            <Stack.Screen 
                name="updateProfile" 
                component={UpdateProfile} 
                options={{title: "Atualizar perfil"}}
            />
            <Stack.Screen 
                name="updatePassword" 
                component={UpdatePassword} 
                options={{title: "Redefinir senha"}}
            />
            <Stack.Screen 
                name="addPurchase" 
                component={AddPurchase} 
                options={{title: "Adicionar compra"}}
            />
            <Stack.Screen 
                name="invoicesSummary" 
                component={InvoicesSummary} 
                options={{title: "Resumo de faturas"}}
            />
            <Stack.Screen 
                name="payInvoice" 
                component={PayInvoice} 
                options={{title: "Pagar fatura"}}
            />
        </Stack.Navigator>
    );
}

