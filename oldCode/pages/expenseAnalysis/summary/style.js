import { StyleSheet } from "react-native";
import { colors } from "../../../themes";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 15
    },
    description: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8

    },
    icon: {
        position: "relative",
        width: 30,
        height: 30,
    },
    label: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    text: {
        fontSize: 16,
        color: colors.color_6
    }
});