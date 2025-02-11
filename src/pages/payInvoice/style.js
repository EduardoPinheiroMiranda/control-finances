import { StyleSheet } from "react-native";
import { colors } from "../../themes";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.color_7,

        position: "relative"
    },
    header: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 10,
        gap: 20,
        borderBottomWidth: 2,
        borderColor: colors.color_8
    },
    expiredText: {
        fontSize: 16,
        color: colors.color_6
    },
    valueText: {
        fontSize: 32,
        textAlign: "center"
    },

    scroll: {
        flex: 1,
        paddingTop: 20,
    },

    sectionMovements: {
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 20
    },
    title: {
        fontSize: 16,
        marginBottom: 15
    },
    movement: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 10
    },
    description: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    movementName: {
        fontSize: 16,
        color: colors.color_6,
    },
    movementExpired: {
        fontSize: 12,
        color: colors.color_6,
    },

    button: {
        height: 60,
        backgroundColor: colors.color_3,
        borderRadius: 10,

        justifyContent: "center",
        alignItems: "center",

        position: "absolute",
        bottom: 30,
        left: "15%",
        right: "15%",

        elevation: 5
    },
    buttonText: {
        fontSize: 20,
        color: colors.color_7
    }
});