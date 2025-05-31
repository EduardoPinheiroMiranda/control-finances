import { StyleSheet } from "react-native";
import { colorPattern } from "../../themes";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorPattern.white_900
    },
    scroll: {
        flex: 1,
        paddingTop: 20
    },
    sections: {
        marginBottom: 25,
    },
    title: {
        color: colorPattern.gray_900,
        fontSize: 20,
        fontWeight: "600",
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 20
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    text: {
        textAlign: "center",
        fontSize: 14
    },
});