import React, { useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native"
import { Finances } from "../pages/finances";
import { colors } from "../themes";


// icons
import { PieChart } from "../assets/svg/pieChart";
import { CardEdit } from "../assets/svg/cardEdit";


const Drawer = createDrawerNavigator();



export function FinancesDrawerNavigator(){

    const navigation = useNavigation();
   

    return(
        <Drawer.Navigator
        id="123"
            initialRouteName="Visão geral"
            screenOptions={{
                headerTintColor: colors.color_7,

                headerTitleStyle: {
                    fontSize: 20,
                    fontWeight: "regular"
                },
                headerStyle: {
                    backgroundColor: colors.color_3,
                    height: 80
                },


                drawerActiveTintColor: colors.color_7,
                drawerInactiveTintColor: colors.color_6,
                drawerActiveBackgroundColor: colors.color_3,

                drawerLabelStyle: {
                    fontSize: 16,
                    fontWeight: "regular"
                },
                drawerStyle: {
                    width: 280
                }
            }}
        >
            <Drawer.Screen
                name="Visão geral" 
                component={Finances}
                options={{
                    drawerIcon: ({color, size}) => {
                        return(<PieChart data={{color, size}}/>);
                    }
                }}  
            />
            <Drawer.Screen 
                name="Adicionar compras" 
                component={Finances} 
            />
            <Drawer.Screen 
                name="Gerenciar despesas"
                component={Finances}
            />
            <Drawer.Screen 
                name="Controlar limites" 
                component={Finances}
            />
            <Drawer.Screen 
                name="Gerenciar cartões" 
                component={Finances}
                // options={{
                //     drawerIcon: ({color, size}) => {
                //         return(<CardEdit data={{color, size}}/>);
                //     }
                // }}
            />
        </Drawer.Navigator>
    );
}

