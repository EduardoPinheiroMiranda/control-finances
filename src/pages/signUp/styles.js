import { Platform, StyleSheet } from "react-native";
import { colorPattern } from "../../themes";
import { statusBarHeight } from "../../themes/stylesDefault";


export const styles = StyleSheet.create({
    sectionIcon: {
        height: 250,
        width: "100%",
        backgroundColor: colorPattern.blue_300,

        borderBottomEndRadius: 200,
        borderBottomStartRadius: 200,

        paddingTop: statusBarHeight,
        alignItems: "center",
        marginBottom: 30
    },

    form: {
        paddingHorizontal: 20,
        gap: 20
    },

    sectionButton: {
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        marginTop: 50
    },

    text: {
        fontSize: 16,
        color: colorPattern.blue_300,
        marginTop: 15,
        textAlign: "right",
        marginBottom: 30
    }
});