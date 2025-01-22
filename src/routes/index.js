import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../pages/home";


// icons 
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { colors } from "../themes";


const Tabs = createBottomTabNavigator();


export function TabNavigator(){

    return(
        <Tabs.Navigator
            screenOptions={{
                headerShown: false,

                tabBarActiveTintColor: colors.color_3,
                tabBarInactiveTintColor: colors.color_6,

               
                tabBarStyle: {
                    height: 70,
                    
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 20,
                    paddingRight: 20,
                    borderTopWidth: 0,

                    left: 20
                },
                tabBarLabelStyle: {
                    fontSize: 14,
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    height: 20,
                    width: 60,                    
                },
                tabBarItemStyle: {
                    height: 55
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
                name="inicio" 
                component={Home} 
                options={{tabBarIcon: ({color, size}) => {
                    return(<Feather name="home" size={size} color={color} />);
                }}}
            />
            <Tabs.Screen 
                name="Finanças" 
                component={Home} 
                options={{tabBarIcon: ({color, size}) => {
                    return(<MaterialCommunityIcons name="finance" size={size} color={color} />);
                }}}
            />
            <Tabs.Screen 
                name="Carteira" 
                component={Home} 
                options={{tabBarIcon: ({color, size}) => {
                    return(<Ionicons name="wallet-outline" size={size} color={color} />);
                }}}
            />
            <Tabs.Screen 
                name="Mais" 
                component={Home} 
                options={{tabBarIcon: ({color, size}) => {
                    return(<Feather name="menu" size={size} color={color} />);
                }}}
            />
            
        </Tabs.Navigator>
    );
}   