import { StyleSheet } from "react-native";
import { colorPattern } from "../../themes";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
    },

    title: {
        backgroundColor: colorPattern.white_900,
        height: 30,

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        paddingLeft: 20,
        paddingRight: 20,
    },

    movementCard: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,

        paddingLeft: 15,
        paddingRight: 15
    },
    icon: {
        justifyContent: "center",
        alignItems: "center"
    },
    movementDescription: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    movementName: {
        fontSize: 14,
        color: colorPattern.black_900
    },
    movementExpired: {
        fontSize: 10,
        color: colorPattern.black_900
    }
});