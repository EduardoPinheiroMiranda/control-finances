import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";


import { TabNavigator } from "./tabNavigator";
import { Movements } from "../pages/Movements";
import { colors } from "../themes";
import { ExpenseAnalysis } from "../pages/expenseAnalysis";
import { PayInvoice } from "../pages/payInvoice";
import { InvoiceSummaray } from "../pages/invoiceSummary";
import { AddPurchase } from "../pages/addPurchase";
import { ManageExpenses } from "../pages/manageExpenses";
import { ControlLimit } from "../pages/controlLimit";
import { ManageCards } from "../pages/manageCards";


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
                    backgroundColor: colors.color_3,
                    height: 80
                }
            }}
        >
            <Stack.Screen 
                name="home-tab" 
                component={TabNavigator} 
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
                name="payInvoice" 
                component={PayInvoice} 
                options={{title: "Pagar fatura"}}
            />
            <Stack.Screen 
                name="invoiceSummary" 
                component={InvoiceSummaray} 
                options={{title: "Resumo de faturas"}}
            />
            <Stack.Screen 
                name="addPurchase" 
                component={AddPurchase} 
                options={{title: "Adicionar compra"}}
            />
            <Stack.Screen 
                name="manageExpenses" 
                component={ManageExpenses} 
                options={{title: "Gerenciar despesas"}}
            />
            <Stack.Screen 
                name="controlLimit" 
                component={ControlLimit} 
                options={{title: "controlar limite"}}
            />
            <Stack.Screen 
                name="manageCards"
                component={ManageCards} 
                options={{title: "Gerenciar cartões"}}
            />
        </Stack.Navigator>
    );
}

