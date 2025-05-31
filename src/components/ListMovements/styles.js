import { StyleSheet } from "react-native";
import { colorPattern } from "../../../src/themes";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 20,
    },
    sectionIcon: {
        justifyContent: "center",
        alignItems: "center",
    },

    movement: {
        flex: 1,
        height: 70,
        flexDirection: "row",
        gap: 5
    },

    description: {
        flex: 3,
        justifyContent: "center",
    },
    name: {
        fontSize: 16,
    },
    dueDate: {
        fontSize: 14
    },

    values: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end"
    }
});