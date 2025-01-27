import { StyleSheet } from "react-native";
import { colors } from "../../themes";


export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    cardMovement : {
        flex: 1,
    },
    sectionMovement: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

    },
    sectionDescription: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
    },
    sectionIcon: {
        justifyContent: "center",
        alignItems: "center"
    },
    iconMovement: {
        position: "absolute",
    },
    mainText: {
        color: colors.color_6,
        fontSize: 14
    },
    secondaryText: {
        color: colors.color_6,
        fontSize: 10
    }
});