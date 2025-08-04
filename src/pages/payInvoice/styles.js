import { StyleSheet } from "react-native";
import { colorPattern } from "../../themes";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorPattern.white_800,
        position: "relative"
    },

    wallOfValues: {
        paddingTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 20,
        gap: 20,
        borderBottomWidth: 2,
        borderColor: colorPattern.white_900
    },

    dueDate: {
        fontSize: 16,
        fontWeight: "regular",
        color: colorPattern.black_900
    },

    amount: {
        fontSize: 32,
        fontWeight: "regular",
        color: colorPattern.black_900,
        textAlign: "center"
    },

    listItem: {
        marginTop: 20,
        marginHorizontal: 20,
    },

    title: {
        fontSize: 16,
        marginBottom: 15
    },

    sectionItems: {
        marginBottom: 10,
        marginLeft: 15,

        flexDirection: "row",
        alignItems: "center",
        gap: 20
    },

    checkBox: {
        width: 25,
        height: 25,
        borderRadius: 5
    },

    legend: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 2,
    },

    sectionButton: {
        justifyContent: "center",
        alignItems: "center",
        padding: 30,

        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0
    }
})