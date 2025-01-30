import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigationState, getFocusedRouteNameFromRoute, useRoute, useNavigation } from "@react-navigation/native";
import { colors } from "../themes";
import { HomeStackRoutes } from "./homeStackRoutes";
import { Finances } from "../pages/finances";
import { Wallet } from "../pages/wallet";
import { MoreOptions } from "../pages/MoreOptions";


// icons 
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';



export function TabNavigator(){

    const Tabs = createBottomTabNavigator();
    const currentScreen = useNavigationState(
        (state) => state?.routes[state.index]?.name
    ) ?? "Inicio";

    
    



    function hiderTabBar(route){

        const screen = getFocusedRouteNameFromRoute(route) ?? "Inicio";


        let hiderTabBar = "flex";


        if(
            screen === "Inicio" || screen === "Finanças" ||
            screen === "Carteira" || screen === "Mais"
        ){
            hiderTabBar = "flex";
        }else{
            hiderTabBar = "none";
        }


        return hiderTabBar;
    }

    return(
        <Tabs.Navigator
            screenOptions={({route}) => ({
                
                headerShown: false,

                tabBarActiveTintColor: colors.color_3,
                tabBarInactiveTintColor: colors.color_6,
                
                tabBarStyle: {
                    borderTopWidth: 0,
                    height: 70,
                    display: hiderTabBar(route)
                },

                tabBarItemStyle: {
                    paddingTop: 10,
                    backgroundColor: colors.color_7
                },

                tabBarLabelStyle: {
                    fontSize: 14,
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    height: 20,
                    width: 60,                    
                },

                tabBarIconStyle: {
                    height: 30,
                    width: 30,
                    marginTop: -5,
                    marginBottom: 3,
                }
                
            })}
        >
            <Tabs.Screen 
                name="Inicio" 
                component={HomeStackRoutes} 
                options={{
                    tabBarIcon: ({color, size}) => {
                        return(<Feather name="home" size={size} color={color} />);
                    }
                }}
            />
            <Tabs.Screen 
                name="Finanças" 
                component={Finances} 
                options={{tabBarIcon: ({color, size}) => {
                    return(<MaterialCommunityIcons name="finance" size={size} color={color} />);
                }}}
            />
            <Tabs.Screen 
                name="Carteira" 
                component={Wallet} 
                options={{tabBarIcon: ({color, size}) => {
                    return(<Ionicons name="wallet-outline" size={size} color={color} />);
                }}}
            />
            <Tabs.Screen 
                name="Mais" 
                component={MoreOptions} 
                options={{tabBarIcon: ({color, size}) => {
                    return(<Feather name="menu" size={size} color={color} />);
                }}}
            />
            
        </Tabs.Navigator>
    );
}   