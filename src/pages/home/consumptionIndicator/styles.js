import { StyleSheet } from "react-native";
import { colorPattern } from "../../../themes";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20
    },
    title: {
        fontSize: 16,
        fontWeight: "regular",
        color: colorPattern.gray_900
    },
    sectionConsumption: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 15,
    },
})