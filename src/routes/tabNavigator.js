import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../themes";

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


export function TabNavigator(){

   
    return(
        <Tabs.Navigator
            screenOptions={{

                headerStyle:{
                    height: 80,
                    backgroundColor: colors.color_3,
                },
                headerTitleStyle: {
                    color: colors.color_7,
                    fontSize: 20,
                    fontWeight: "regular"
                },


                tabBarActiveTintColor: colors.color_3,
                tabBarInactiveTintColor: colors.color_6,
                
                tabBarStyle: {
                    borderTopWidth: 0,
                    height: 70,
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

