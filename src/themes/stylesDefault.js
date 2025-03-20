import { Platform, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { colorPattern } from ".";


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
    },
    box: {
        backgroundColor: colorPattern.white_800,
        width: "90%",

        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 20,
        elevation: 5,

        margin: "auto",
        marginBottom: 20
    }
});