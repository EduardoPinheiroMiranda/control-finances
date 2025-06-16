import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
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
        flex: 2,
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