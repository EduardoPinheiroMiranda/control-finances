import { StyleSheet } from "react-native";
import { colorPattern } from "../../themes";


export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 16,
        fontWeight: "medium",
        color: colorPattern.black_900
    },
    sectionValue: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    textValue: {
        fontSize: 28,
        fontWeight:  "regular"
    },

    sectionButtons: {
        flexDirection: "row",
        justifyContent: "space-between",

        paddingTop: 20,
        marginTop: 20,
        borderTopWidth: 2,
        borderColor: colorPattern.white_900
    },
    button: {
        flexDirection: "row",
        gap: 15,

        justifyContent: "center",
        alignItems: "center"
    },
    iconArea: {
        width: 50,
        height: 50,
        backgroundColor: colorPattern.white_900,

        justifyContent: "center",
        alignItems: "center",

        borderRadius: 40
    },
    text: {
        fontSize: 14,
        fontWeight: "regular"
    }
});