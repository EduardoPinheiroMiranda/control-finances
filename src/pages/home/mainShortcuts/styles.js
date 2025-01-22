import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { colors } from "../../../themes";


const statusBarHeight = Constants.statusBarHeight;


export const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    sectionBalance: {
        paddingBottom: 20,
        borderBottomWidth: 2,
        borderColor: colors.color_8,
    },
    sectionValue: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        marginTop: 20,
    },
    buttonArea: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",

        marginTop: 20,
    },
    sectionButtonIcon: {
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },
    buttonIcon: {
        backgroundColor: colors.color_8,
        width: 40,
        height: 40,

        borderRadius: 50,

        justifyContent: "center",
        alignItems: "center",
    }


});