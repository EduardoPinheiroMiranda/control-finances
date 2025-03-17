import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { colorPattern } from "../../../themes";


const statusBarHeight = Constants.statusBarHeight;


export const styles = StyleSheet.create({
    container: {
        backgroundColor: colorPattern.blue_300,
        height: 100, 

        paddingTop: statusBarHeight,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,

        justifyContent: "flex-end",
        elevation: 5
    },
    header: {
        flexDirection: "row",
        height: 50,

        justifyContent: "space-between",
        alignItems: "center",
    },
    sectionUser: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15
    },
    userName: {
        color: colorPattern.white_800,
        fontSize: 16,
    }
});