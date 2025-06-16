import { StyleSheet } from "react-native";
import { colorPattern } from "../../themes";


export const styles = StyleSheet.create({
    container: {
        gap: 10,
    },

    description: {
        gap: 10
    },

    sectionLegends: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    legend: {
        fontSize: 16,
        fontWeight: "regular",
        color: colorPattern.black_900
    }
})