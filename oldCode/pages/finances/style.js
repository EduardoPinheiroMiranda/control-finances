import { StyleSheet } from "react-native";
import { colors } from "../../themes";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.color_8
    },

    scrollSection: {
        flex: 1,

        paddingLeft: 20,
        paddingRight: 10,
        paddingTop: 20,
    },

    buttonArea: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 25
    },
    description: {
        flexDirection: "row",
        alignItems: "center",
        gap: 25
    },
    label: {
        fontSize: 16,
        fontWeight: "regular"
    }
});