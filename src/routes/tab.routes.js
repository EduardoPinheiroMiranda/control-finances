import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colorPattern } from "../themes";
import { Platform } from "react-native";

// Pages
import { Home } from "../pages/home";
import { Wallet } from "../pages/wallet";
import { MoreOptions } from "../pages/MoreOptions";
import { Finances} from "../pages/finances";

// Icons 
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';




const Tabs = createBottomTabNavigator();


export function TabRoutes(){

   
    return(
        <Tabs.Navigator
            screenOptions={{

                statusBarStyle: "light",
                
                animation: "shift",
                transitionSpec:{
                    animation: "timing",
                    config: {
                        duration: 150
                    }
                    
                },

                headerStyle:{
                    height: 80,
                    backgroundColor: colorPattern.blue_300,
                },
                headerTitleStyle: {
                    color: colorPattern.white_800,
                    fontSize: 20,
                    fontWeight: "regular"
                },


                tabBarActiveTintColor: colorPattern.blue_300,
                tabBarInactiveTintColor: colorPattern.black_900,
                
                tabBarStyle: {
                    borderTopWidth: 0,
                    height: 70,
                },

                tabBarItemStyle: {
                    paddingTop: 10,
                    backgroundColor: colorPattern.white_800
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
            }}
        >
            <Tabs.Screen 
                name="home" 
                component={Home} 
                options={{
                    headerShown: false,
                    title: "Inicio",
                    tabBarIcon: ({color, size}) => {
                        return(<Feather name="home" size={size} color={color} />);
                    }
                }}
            />
            <Tabs.Screen 
                name="finances" 
                component={Finances} 
                options={{
                    headerTitle: "Gerenciar finanças",
                    title: "Finanças",
                    tabBarIcon: ({color, size}) => {
                        return(<MaterialCommunityIcons name="finance" size={size} color={color} />);
                    }}
                }
            />
            <Tabs.Screen 
                name="wallet" 
                component={Wallet} 
                options={{
                    title: "Carteira",
                    tabBarIcon: ({color, size}) => {
                        return(<Ionicons name="wallet-outline" size={size} color={color} />);
                    }}
                }
            />
            <Tabs.Screen 
                name="more" 
                component={MoreOptions} 
                options={{
                    title: "Mais",
                    tabBarIcon: ({color, size}) => {
                        return(<Feather name="menu" size={size} color={color} />);
                    }}
                }
            />
            
        </Tabs.Navigator>
    );
}   

