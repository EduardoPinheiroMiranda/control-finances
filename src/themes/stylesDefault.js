import { Platform, StyleSheet } from "react-native";
import Constants from "expo-constants";


export const statusBarHeight = Constants.statusBarHeight;


export const defaultPageStyle = StyleSheet.create({
    page: {
        flex: 1,
    },
    text: {
        fontFamily: Platform.select(
            { 
                android: "Roboto_400Regular", 
                ios: "Roboto"
            }
        ),
    }
});