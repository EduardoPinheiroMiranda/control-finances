import { StyleSheet } from "react-native";
import { colorPattern } from "../../../themes";

export const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        gap: 20
    },

    amount:{
        fontSize: 36,
        fontWeight: "medium",
        color: colorPattern.white_900
    }
})